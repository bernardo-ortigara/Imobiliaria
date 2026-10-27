// Usage: node animations.mjs <url>
// 1) prints Framer on-load "appear" animations (from the page's embedded JSON, desktop = "default" variant)
// 2) prints below-the-fold elements that start hidden/transformed (scroll-in reveals) with their initial state
// 3) samples opacity/transform over ~1.2s after scrolling each group into view, to estimate duration/easing/stagger
import { chromium } from 'playwright';
const [url] = process.argv.slice(2);
const html = await (await fetch(url)).text();
const m = html.match(/id="__framer__appearAnimationsContent">([\s\S]*?)<\/script>/);
if (m) for (const [id, v] of Object.entries(JSON.parse(m[1]))) console.log('APPEAR', id, JSON.stringify(v.default ?? v));
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: 'load' });
await p.waitForTimeout(4000);
const init = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('main *').forEach((e, i) => {
    const cs = getComputedStyle(e); const r = e.getBoundingClientRect();
    if (r.top + scrollY < 900 || !r.width) return;
    if (cs.opacity !== '1' || (cs.transform !== 'none' && !/matrix\(1, 0, 0, 1, 0, 0\)/.test(cs.transform))) {
      e.setAttribute('data-probe', i);
      out.push({ i, y: Math.round(r.top + scrollY), name: e.dataset.framerName || '', op: cs.opacity, tf: cs.transform, text: (e.innerText || '').slice(0, 30).replace(/\n/g, ' ') });
    }
  });
  return out;
});
for (const o of init) console.log(`INIT ${o.i} y=${o.y} ${o.name} op=${o.op} tf=${o.tf} "${o.text}"`);
// sample each ~viewport-sized band
const bands = [...new Set(init.map((o) => Math.floor(o.y / 700)))];
for (const band of bands) {
  const ids = init.filter((o) => Math.floor(o.y / 700) === band).slice(0, 8).map((o) => o.i);
  await p.evaluate((y) => window.scrollTo(0, y), band * 700 - 300);
  const rows = [];
  for (let k = 0; k < 7; k++) {
    rows.push(await p.evaluate((ids) => ids.map((i) => { const e = document.querySelector(`[data-probe="${i}"]`); const cs = getComputedStyle(e); const mm = cs.transform.match(/matrix\((.*)\)/); const v = mm ? mm[1].split(',').map(Number) : null; return `${(+cs.opacity).toFixed(2)}${v ? ` s${v[0].toFixed(2)} x${v[4].toFixed(0)} y${v[5].toFixed(0)}` : ''}`; }).join(' | '), ids));
    await p.waitForTimeout(190);
  }
  console.log(`== band y≈${band * 700} ids ${ids.join(',')}\n  ` + rows.map((r, k) => `${k * 190}ms ${r}`).join('\n  '));
}
await b.close();
