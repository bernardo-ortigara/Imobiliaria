/* eslint-disable */
// REFERENCE ONLY: one-off script used for the home page (hardcoded coordinates/paths). Adapt before reusing.
import { chromium } from 'playwright';
import fs from 'fs';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://luxterra.framer.website', { waitUntil: 'load' });
await p.waitForTimeout(3000);
const h = await p.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < h; y += 400) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(150); }
await p.waitForTimeout(1500);
const want = { logo: [30, 68], arrowSuffix: [822, 1352], bank: [1363, 72], doc: [1514, 72], area: [2829, 48], bed: [2829, 158], bath: [2829, 247], refresh: [4707, 960], building: [4707, 1322], briefcase: [5059, 960], users: [5059, 1322], linkedin: [7590, 421], twitter: [7590, 456], arrowLeft: [8307, 98], quote: [7916, 558], arrowCta: [10648, 646] };
const res = await p.evaluate((want) => {
  const out = {};
  const all = [...document.querySelectorAll('svg')].map(s => { const r = s.getBoundingClientRect(); return { s, y: Math.round(r.top + scrollY), x: Math.round(r.left), w: r.width, h: r.height }; });
  for (const [name, [y, x]] of Object.entries(want)) {
    const hit = all.find(o => Math.abs(o.y - y) <= 2 && Math.abs(o.x - x) <= 2);
    if (!hit) { out[name] = null; continue; }
    const s = hit.s;
    const clone = s.cloneNode(true);
    // resolve use
    const srcUses = [...s.querySelectorAll('use')];
    clone.querySelectorAll('use').forEach((u, i) => { const id = (u.getAttribute('href') || '').slice(1); const t = document.getElementById(id); if (t) { const g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); g.innerHTML = t.innerHTML; u.replaceWith(g); } });
    // computed styles for drawing elements: render clone in place to compute
    s.parentElement.appendChild(clone);
    clone.querySelectorAll('path,circle,rect,line,polyline,polygon,ellipse').forEach(el => { const cs = getComputedStyle(el); el.setAttribute('stroke-width', cs.strokeWidth.replace('px', '')); if (cs.stroke !== 'none') el.setAttribute('stroke', cs.stroke); el.setAttribute('fill', cs.fill); if (cs.fillOpacity !== '1') el.setAttribute('fill-opacity', cs.fillOpacity); ['id', 'height', 'width', 'stroke-dasharray'].forEach(a => el.removeAttribute(a)); });
    clone.remove();
    clone.removeAttribute('class'); clone.removeAttribute('style'); clone.removeAttribute('role');
    out[name] = { w: hit.w, h: hit.h, html: clone.outerHTML };
  }
  return out;
}, want);
fs.writeFileSync('icons.json', JSON.stringify(res, null, 1));
for (const [k, v] of Object.entries(res)) console.log(k, v ? `${v.w}x${v.h} ${v.html.length}` : 'MISSING');
console.log(res.bank.html);
await b.close();
