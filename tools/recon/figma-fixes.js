// Post-capture fixes for html-to-design captures (body of a use_figma script; top-level await/return).
// Build a ready-to-paste script with:  node figma-fixes-build.mjs <frameId> [sidecar.json] [--only=fonts,letters,clip,grid,images,bigText] [--name=<frame name>]
// Fixes (HANDOFF section 3): "Inter Variable" -> "Inter"; per-letter text -> one node; FIXED ancestors that clip text -> HUG
// (+ absolute stroked "Text" border frames follow the parent); grid hairlines at 1/3 and 2/3 of the content box, opacity restored;
// object-position restored on image fills (sidecar); fit-text logos faded out at capture time recreated as Inter text (sidecar).
const ARGS = /*ARGS*/ { frameId: '', sidecar: null, only: null, name: null } /*END*/;
const frame = await figma.getNodeByIdAsync(ARGS.frameId);
if (!frame) throw new Error('frame not found ' + ARGS.frameId);
let page = frame; while (page.type !== 'PAGE') page = page.parent;
await figma.setCurrentPageAsync(page);
if (ARGS.name) frame.name = ARGS.name;
const on = (k) => !ARGS.only || ARGS.only.includes(k);
const R = { mutated: [], created: [], removed: [], notes: [] };
const F = frame.absoluteBoundingBox;
const box = (n) => { const b = n.absoluteBoundingBox; return b ? { x: b.x - F.x, y: b.y - F.y, w: b.width, h: b.height } : null; };
const near = (a, b, t) => Math.abs(a - b) <= t;
const isAL = (n) => n.type === 'FRAME' && (n.layoutMode === 'HORIZONTAL' || n.layoutMode === 'VERTICAL');

// ---------- fonts ----------
const interStyles = (await figma.listAvailableFontsAsync()).filter((f) => f.fontName.family === 'Inter').map((f) => f.fontName.style);
const W2S = { 100: 'Thin', 200: 'Extra Light', 300: 'Light', 400: 'Regular', 500: 'Medium', 600: 'Semi Bold', 700: 'Bold', 800: 'Extra Bold', 900: 'Black' };
const S2W = Object.fromEntries(Object.entries(W2S).map(([w, s]) => [s.replace(/\s/g, '').toLowerCase(), +w]));
function interFont(styleOrWeight) {
  let w = 400, italic = false;
  if (typeof styleOrWeight === 'number') w = styleOrWeight;
  else { italic = /italic/i.test(styleOrWeight); w = S2W[styleOrWeight.replace(/italic/i, '').replace(/\s/g, '').toLowerCase() || 'regular'] ?? 400; }
  w = Math.min(900, Math.max(100, Math.round(w / 100) * 100));
  let s = W2S[w]; if (italic) s = s === 'Regular' ? 'Italic' : s + ' Italic';
  if (!interStyles.includes(s)) s = italic ? 'Italic' : 'Regular';
  return { family: 'Inter', style: s };
}
if (on('fonts')) {
  let n = 0;
  for (const t of frame.findAllWithCriteria({ types: ['TEXT'] })) {
    for (const s of t.getStyledTextSegments(['fontName'])) {
      if (s.fontName.family === 'Inter' || !/^Inter\b/.test(s.fontName.family)) continue;
      const f = interFont(s.fontName.style);
      try { await figma.loadFontAsync(f); t.setRangeFontName(s.start, s.end, f); n++; R.mutated.push(t.id); }
      catch (e) { R.notes.push(`font ${t.id}: ${e.message}`); }
    }
  }
  R.fonts = n;
}

// ---------- per-letter text -> one node ----------
if (on('letters')) {
  const groups = [];
  const kind = (t) => { const c = t.characters.trim(); return c.length === 0 ? 'space' : c.length <= 2 ? 'letter' : 'word'; };
  const scan = (n) => {
    if (n.type === 'TEXT') { const k = kind(n); return { ok: k !== 'word', letters: k === 'letter' ? [n] : [] }; }
    if (n.type !== 'FRAME' && n.type !== 'GROUP') return { ok: false, letters: [] };
    const res = n.children.map(scan);
    const ok = n !== frame && res.every((r) => r.ok);
    if (!ok) res.forEach((r, i) => { if (r.ok && r.letters.length >= 4 && n.children[i].type !== 'TEXT') groups.push({ g: n.children[i], texts: r.letters }); });
    return { ok, letters: ok ? res.flatMap((r) => r.letters) : [] };
  };
  scan(frame);
  let merged = 0;
  for (const { g, texts } of groups) {
    const L = texts.map((t) => ({ t, b: box(t) }));
    const keys = new Set(L.map((l) => `${Math.round(l.b.x)},${Math.round(l.b.y)}`));
    if (keys.size < L.length * 0.9) { R.notes.push(`letters ${g.id}: stacked glyphs, skipped`); continue; }
    const lines = [];
    for (const l of L.sort((a, b) => a.b.y - b.b.y)) { const li = lines.find((x) => Math.abs(x.y - l.b.y) < l.b.h / 2); li ? li.items.push(l) : lines.push({ y: l.b.y, items: [l] }); }
    lines.forEach((li) => li.items.sort((a, b) => a.b.x - b.b.x));
    const t0 = texts[0], fs = t0.fontSize, G = box(g);
    const lineStr = lines.map((li) => li.items.map((l, i) => (i && l.b.x - (li.items[i - 1].b.x + li.items[i - 1].b.w) > fs * 0.15 ? ' ' : '') + l.t.characters.trim()).join(''));
    const lefts = lines.map((li) => li.items[0].b.x), rights = lines.map((li) => { const e = li.items[li.items.length - 1].b; return e.x + e.w; });
    const align = lefts.every((x) => near(x, G.x, 2)) ? 'LEFT' : rights.every((x) => near(x, G.x + G.w, 2)) ? 'RIGHT' : 'CENTER';
    await figma.loadFontAsync(t0.fontName);
    const nt = figma.createText();
    nt.fontName = t0.fontName; nt.fontSize = fs; nt.lineHeight = t0.lineHeight; nt.letterSpacing = t0.letterSpacing;
    nt.fills = JSON.parse(JSON.stringify(t0.fills)); nt.textAlignHorizontal = align;
    nt.characters = lineStr.join(' ');
    const parent = g.parent, abs = g.layoutPositioning === 'ABSOLUTE', gx = g.x, gy = g.y, gw = g.width, fill = g.layoutSizingHorizontal === 'FILL';
    parent.insertChild(parent.children.indexOf(g), nt);
    nt.resize(gw, nt.height); nt.textAutoResize = 'HEIGHT';
    if (isAL(parent)) { if (abs) { nt.layoutPositioning = 'ABSOLUTE'; nt.x = gx; nt.y = gy; } else if (fill) nt.layoutSizingHorizontal = 'FILL'; }
    else { nt.x = gx; nt.y = gy; }
    const lh = t0.lineHeight.unit === 'PIXELS' ? t0.lineHeight.value : t0.lineHeight.unit === 'PERCENT' ? fs * t0.lineHeight.value / 100 : fs * 1.21;
    if (Math.round(nt.height / lh) !== lines.length) { nt.characters = lineStr.join(' '); nt.resize(gw + 24, nt.height); R.notes.push(`letters ${nt.id}: forced ${lines.length} line breaks`); }
    nt.name = nt.characters.slice(0, 40);
    g.remove(); R.removed.push(g.id); R.created.push(nt.id); merged++;
  }
  R.letters = merged;
}

// ---------- FIXED auto-layout ancestors that clip text -> HUG ----------
function syncBorders(a) {
  for (const c of a.children) {
    if (c.type === 'FRAME' && c.layoutPositioning === 'ABSOLUTE' && c.strokes.length && near(c.height, a.height, 2)) {
      c.resize(a.width, c.height); c.x = 0; c.constraints = { horizontal: 'STRETCH', vertical: c.constraints.vertical }; R.mutated.push(c.id);
    }
  }
}
if (on('clip')) {
  let total = 0;
  for (let pass = 0; pass < 4; pass++) {
    let c = 0;
    for (const t of frame.findAllWithCriteria({ types: ['TEXT'] })) {
      if (!t.visible || t.textAutoResize !== 'WIDTH_AND_HEIGHT') continue;
      const tb = t.absoluteBoundingBox; if (!tb) continue;
      for (let a = t.parent; a && a !== frame; a = a.parent) {
        if (!isAL(a) || a.layoutSizingHorizontal !== 'FIXED' || a.width > 900) continue;
        const ab = a.absoluteBoundingBox;
        if (tb.x + tb.width - (ab.x + ab.width) > 0.5 || ab.x - tb.x > 0.5) { a.layoutSizingHorizontal = 'HUG'; syncBorders(a); R.mutated.push(a.id); c++; break; }
      }
    }
    total += c; if (!c) break;
  }
  R.hugged = total;
}

// ---------- grid hairlines at 1/3 and 2/3 ----------
if (on('grid')) {
  const lines = frame.findAll((n) => (n.type === 'FRAME' || n.type === 'RECTANGLE') && n.width <= 1.5 && n.height >= 150 && n.parent && n.parent.width >= 600 && n.height >= 0.8 * n.parent.height);
  const byParent = new Map();
  for (const l of lines) { if (!byParent.has(l.parent)) byParent.set(l.parent, []); byParent.get(l.parent).push(l); }
  let moved = 0, shown = 0;
  for (const [P, Ls] of byParent) {
    const pw = P.width, cw = pw > 1356 ? Math.min(1356, pw - 64) : pw, left = (pw - cw) / 2;
    const T = [left + cw / 3, left + (2 * cw) / 3];
    Ls.sort((a, b) => a.x - b.x);
    const edge = (x) => near(x, left, 3) || near(x, left + cw, 3) || x < 3 || x > pw - 4;
    Ls.forEach((l, i) => {
      let target = null;
      if (Ls.length === 2 && (edge(l.x) || near(l.x, T[i], 60))) target = T[i];
      else if (edge(l.x)) target = l.x < pw / 2 ? T[0] : T[1];
      else { const t = near(l.x, T[0], 60) ? T[0] : near(l.x, T[1], 60) ? T[1] : null; target = t; }
      if (target !== null && !near(l.x, target, 1)) {
        if (isAL(P) && l.layoutPositioning !== 'ABSOLUTE') l.layoutPositioning = 'ABSOLUTE';
        l.x = Math.round(target); moved++; R.mutated.push(l.id);
      }
      if (l.opacity < 0.05 || !l.visible) { l.opacity = 1; l.visible = true; shown++; R.mutated.push(l.id); }
    });
  }
  R.grid = { lines: lines.length, moved, shown };
}

// ---------- object-position on image fills (sidecar) ----------
if (on('images') && ARGS.sidecar) {
  const imgNodes = frame.findAll((n) => 'fills' in n && Array.isArray(n.fills) && n.fills.some((f) => f.type === 'IMAGE'));
  let fixed = 0;
  for (const s of ARGS.sidecar.images) {
    const pos = s.pos.split(' ').map((v) => (v.endsWith('%') ? parseFloat(v) / 100 : null));
    if (s.fit !== 'cover' || pos.some((v) => v === null)) { R.notes.push(`image @${Math.round(s.x)},${Math.round(s.y)}: ${s.fit} ${s.pos} not handled`); continue; }
    const hits = imgNodes.filter((n) => { const b = box(n); return b && near(b.x, s.x, 3) && near(b.y, s.y, 3) && near(b.w, s.w, 3) && near(b.h, s.h, 3); });
    if (!hits.length) { R.notes.push(`image @${Math.round(s.x)},${Math.round(s.y)} ${Math.round(s.w)}x${Math.round(s.h)}: no node`); continue; }
    for (const n of hits) {
      const fills = JSON.parse(JSON.stringify(n.fills));
      for (const f of fills) {
        if (f.type !== 'IMAGE' || (f.scaleMode !== 'FILL' && f.scaleMode !== 'CROP')) continue;
        const { width: W, height: H } = await figma.getImageByHash(f.imageHash).getSizeAsync();
        const sc = Math.max(n.width / W, n.height / H), fx = Math.min(1, n.width / (W * sc)), fy = Math.min(1, n.height / (H * sc));
        f.scaleMode = 'CROP'; f.imageTransform = [[fx, 0, pos[0] * (1 - fx)], [0, fy, pos[1] * (1 - fy)]]; delete f.scalingFactor;
      }
      n.fills = fills; R.mutated.push(n.id); fixed++;
    }
  }
  R.images = fixed;
}

// ---------- fit-text logos faded out at capture (sidecar) ----------
if (on('bigText') && ARGS.sidecar) {
  const opaque = (n) => { for (let a = n; a && a !== frame; a = a.parent) if (!a.visible || a.opacity < 0.05) return false; return true; };
  for (const b of ARGS.sidecar.bigTexts) {
    const same = frame.findAllWithCriteria({ types: ['TEXT'] }).filter((t) => t.characters.trim() === b.text && near(box(t).y, b.y, b.h / 2));
    if (same.some((t) => opaque(t) && t.fills.some((f) => f.visible !== false && (f.opacity ?? 1) > 0.05))) continue;
    same.forEach((t) => { R.removed.push(t.id); t.remove(); });
    const font = interFont(b.weight); await figma.loadFontAsync(font);
    const nt = figma.createText();
    nt.fontName = font; nt.fontSize = b.fontSize; nt.characters = b.text;
    nt.letterSpacing = { unit: 'PIXELS', value: b.letterSpacing }; nt.lineHeight = { unit: 'PIXELS', value: b.lineHeight };
    nt.textAlignHorizontal = b.align === 'center' ? 'CENTER' : b.align === 'right' || b.align === 'end' ? 'RIGHT' : 'LEFT';
    nt.fills = b.gradient
      ? [{ type: 'GRADIENT_LINEAR', gradientTransform: [[0, 1, 0], [-1, 0, 1]], gradientStops: b.gradient.map((s) => ({ position: Math.min(1, Math.max(0, s.p)), color: { r: s.r, g: s.g, b: s.b, a: s.a } })) }]
      : [{ type: 'SOLID', color: b.color }];
    nt.name = b.text; nt.resize(b.w, b.lineHeight); nt.textAutoResize = 'HEIGHT';
    const host = frame.findAll((n) => n.type === 'FRAME' && !n.findAllWithCriteria({ types: ['TEXT'] }).length && (() => { const x = box(n); return x && near(x.x, b.x, 6) && near(x.y, b.y, 6) && near(x.w, b.w, 6) && near(x.h, b.h, 8); })())[0];
    if (host) { host.appendChild(nt); if (isAL(host)) nt.layoutSizingHorizontal = 'FILL'; else { nt.x = 0; nt.y = 0; } }
    else { frame.appendChild(nt); if (isAL(frame)) nt.layoutPositioning = 'ABSOLUTE'; nt.x = b.x; nt.y = b.y; R.notes.push(`bigText "${b.text}": no host frame, placed absolute`); }
    R.created.push(nt.id); R.bigText = (R.bigText || 0) + 1;
  }
}
R.mutated = [...new Set(R.mutated)];
return R;
