// Usage: node images.mjs <url> [destDir=../../public/images]
// Downloads every framerusercontent image used on the page (full res), then downscales: hero/full-bleed > 2880px, others > 1400px.
// Run `npm i` in the project root first (sharp ships with Next).
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { openSettled } from './_shared.mjs';
const require = createRequire(path.resolve('../../package.json'));
const sharp = require('sharp');
const [url, dest = '../../public/images'] = process.argv.slice(2);
const { browser, page } = await openSettled(url);
const urls = await page.evaluate(() => [...new Set([...document.querySelectorAll('img')].map((i) => i.src.split('?')[0]).concat([...document.querySelectorAll('*')].flatMap((e) => [...getComputedStyle(e).backgroundImage.matchAll(/url\("([^"]+)"\)/g)].map((m) => m[1].split('?')[0]))))].filter((u) => u.includes('framerusercontent')));
const fullBleed = new Set(await page.evaluate(() => [...document.querySelectorAll('img')].filter((i) => i.getBoundingClientRect().width >= window.innerWidth * 0.9).map((i) => i.src.split('?')[0].split('/').pop())));
await browser.close();
fs.mkdirSync(dest, { recursive: true });
for (const u of urls) {
  const f = path.join(dest, u.split('/').pop());
  if (fs.existsSync(f)) { console.log('skip', path.basename(f)); continue; }
  const buf = Buffer.from(await (await fetch(u)).arrayBuffer());
  if (/\.(webp|jpe?g|png)$/i.test(f)) {
    const meta = await sharp(buf).metadata();
    const max = fullBleed.has(path.basename(f)) ? 2880 : 1400;
    if (Math.max(meta.width, meta.height) > max) {
      const img = sharp(buf).resize(meta.width >= meta.height ? { width: max } : { height: max });
      fs.writeFileSync(f, f.endsWith('.webp') ? await img.webp({ quality: 82 }).toBuffer() : f.endsWith('.png') ? await img.png().toBuffer() : await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer());
      console.log('saved+resized', path.basename(f), `${meta.width}x${meta.height}`);
      continue;
    }
  }
  fs.writeFileSync(f, buf);
  console.log('saved', path.basename(f));
}
