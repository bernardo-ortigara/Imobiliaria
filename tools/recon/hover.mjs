// Usage: node hover.mjs <url>
// Hovers every link/button once and prints which descendant styles change (transform, opacity, colors, size).
import { openSettled } from './_shared.mjs';
const [url] = process.argv.slice(2);
const { browser, page: p } = await openSettled(url);
await p.evaluate(() => document.querySelectorAll('body *').forEach((e, i) => e.setAttribute('data-q', i)));
const targets = await p.evaluate(() => [...document.querySelectorAll('a, button, [role="button"]')].map((e) => { const r = e.getBoundingClientRect(); return { q: e.dataset.q, txt: (e.innerText || '').slice(0, 25).replace(/\n/g, ' '), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) }; }).filter((t) => t.w > 0));
const state = (q) => p.evaluate((q) => { const root = document.querySelector(`[data-q="${q}"]`); const o = {}; [root, ...root.querySelectorAll('*')].forEach((e) => { const cs = getComputedStyle(e); const r = e.getBoundingClientRect(); o[e.dataset.q] = [cs.transform, cs.opacity, cs.backgroundColor, cs.color, `${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)}`, (e.innerText || '').slice(0, 12) || e.tagName]; }); return o; }, q);
const seen = new Set();
for (const t of targets) {
  const key = t.txt.slice(0, 10) + t.w + t.h; if (seen.has(key)) continue; seen.add(key);
  await p.mouse.move(2, 2);
  await p.evaluate((y) => window.scrollTo(0, y - 300), t.y); await p.waitForTimeout(600);
  const before = await state(t.q);
  const c = await p.evaluate((q) => { const r = document.querySelector(`[data-q="${q}"]`).getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }, t.q);
  await p.mouse.move(c[0], c[1]); await p.waitForTimeout(800);
  const after = await state(t.q);
  const names = ['tf', 'op', 'bg', 'color', 'rect'];
  const diffs = [];
  for (const id in after) { const a = before[id], z = after[id]; if (!a) continue; for (let k = 0; k < 5; k++) if (a[k] !== z[k]) diffs.push(`[${z[5]}] ${names[k]}: ${a[k]} -> ${z[k]}`); }
  console.log(`## "${t.txt}" y=${t.y} ${t.w}x${t.h}\n   ${diffs.slice(0, 8).join('\n   ') || '(no change)'}`);
}
await browser.close();
