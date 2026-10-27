// Usage: node compare.mjs <originalUrl> <localUrl> <outPrefix>
// Screenshots both pages (settled) in 900px viewport slices and stitches them side by side: <outPrefix>-<n>.png (left = original, right = local).
import { chromium } from 'playwright';
import { openSettled } from './_shared.mjs';
const [orig, local, prefix = 'cmp'] = process.argv.slice(2);
const shots = [];
for (const url of [orig, local]) {
  const { browser, page } = await openSettled(url);
  const h = await page.evaluate(() => document.body.scrollHeight);
  const list = [];
  for (let y = 0; y < h; y += 900) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(700); list.push((await page.screenshot()).toString('base64')); }
  shots.push(list);
  await browser.close();
}
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 2900, height: 900 } });
for (let i = 0; i < Math.max(shots[0].length, shots[1].length); i++) {
  const img = (s) => (s ? `<img src="data:image/png;base64,${s}" style="width:1440px;height:900px">` : '<div style="width:1440px"></div>');
  await p.setContent(`<body style="margin:0;display:flex;gap:20px;background:#f0f">${img(shots[0][i])}${img(shots[1][i])}</body>`);
  await p.waitForTimeout(150);
  await p.screenshot({ path: `${prefix}-${i}.png` });
}
await b.close();
console.log('wrote', `${prefix}-0..${Math.max(shots[0].length, shots[1].length) - 1}.png`);
