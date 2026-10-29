// Usage: node figma-compare.mjs <figma.png> <localUrl> <outPrefix> [sliceStartIndex] [sliceCount]
// <figma.png>: full-size (1x, 1440 wide) export of a Figma frame, e.g. from get_screenshot with maxDimension = frame height.
// Screenshots the local page in 900px viewport slices (settled, like compare.mjs) and stitches each slice
// side by side with the same 900px band of the Figma export: <outPrefix>-<n>.png (left = Figma, right = local).
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { openSettled } from './_shared.mjs';
const [png, local, prefix = 'fcmp', start = '0', count = '999'] = process.argv.slice(2);
if (!png || !local) throw new Error('usage: node figma-compare.mjs <figma.png> <localUrl> <outPrefix> [start] [count]');
const figma = `data:image/png;base64,${readFileSync(png).toString('base64')}`;
const { browser, page } = await openSettled(local);
const h = await page.evaluate(() => document.body.scrollHeight);
const shots = [];
for (let i = 0, y = 0; y < h; y += 900, i++) {
  if (i < +start || i >= +start + +count) continue;
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(700);
  shots.push({ i, y, b64: (await page.screenshot()).toString('base64') });
}
await browser.close();
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 2900, height: 900 } });
for (const s of shots) {
  await p.setContent(`<body style="margin:0;display:flex;gap:20px;background:#f0f">
    <div style="width:1440px;height:900px;overflow:hidden;background:#fff"><img src="${figma}" style="display:block;width:1440px;margin-top:-${s.y}px"></div>
    <img src="data:image/png;base64,${s.b64}" style="width:1440px;height:900px"></body>`);
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${prefix}-${s.i}.png` });
  // per-band pixel diff (mean abs RGB diff, 0-255) to point at the slices worth looking at
  const bands = await p.evaluate(async () => {
    const [a, b] = [...document.images];
    await Promise.all([a, b].map((im) => im.decode()));
    const off = -parseFloat(a.style.marginTop || '0');
    const ctx = (im, dy) => { const c = document.createElement('canvas'); c.width = 1440; c.height = 900; const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, 1440, 900); x.drawImage(im, 0, -dy, 1440, im.naturalHeight * 1440 / im.naturalWidth); return x.getImageData(0, 0, 1440, 900).data; };
    const da = ctx(a, off), db = ctx(b, 0);
    const out = [];
    for (let y0 = 0; y0 < 900; y0 += 100) { let s = 0, n = 0; for (let y = y0; y < y0 + 100; y++) for (let x = 0; x < 1440; x += 2) { const i = (y * 1440 + x) * 4; s += Math.abs(da[i] - db[i]) + Math.abs(da[i + 1] - db[i + 1]) + Math.abs(da[i + 2] - db[i + 2]); n += 3; } out.push(Math.round(s / n)); }
    return out;
  });
  console.log(`slice ${s.i} (y=${s.y}) band diffs:`, bands.join(' '));
}
await b.close();
console.log('wrote', shots.map((s) => `${prefix}-${s.i}.png`).join(' '));
