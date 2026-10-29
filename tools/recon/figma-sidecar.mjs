// Usage: node figma-sidecar.mjs <url> <out.json>
// Collects what the Figma html-to-design capture loses, so figma-fixes.js can restore it:
//  - images: <img> with object-fit cover/contain and a non-centered object-position (capture always centers them)
//  - bigTexts: fit-text logos (font-size >= 150px), e.g. the footer "Luxterra", which are at opacity 0 when captured
// Coordinates are document coordinates at 1440px width (= frame coordinates of the captured Figma frame).
import { writeFileSync } from 'node:fs';
import { openSettled } from './_shared.mjs';

/** Runs in an already-settled Playwright page (scrolled to the top). */
export async function collectSidecar(page) {
  return page.evaluate(() => {
    const sy = window.scrollY;
    const rect = (el) => { const r = el.getBoundingClientRect(); return { x: r.left, y: r.top + sy, w: r.width, h: r.height }; };
    const images = [...document.querySelectorAll('img')]
      .map((im) => ({ im, cs: getComputedStyle(im) }))
      .filter(({ im, cs }) => (cs.objectFit === 'cover' || cs.objectFit === 'contain') && cs.objectPosition !== '50% 50%' && im.getBoundingClientRect().width > 0)
      .map(({ im, cs }) => ({ ...rect(im), fit: cs.objectFit, pos: cs.objectPosition }));
    const big = [...document.querySelectorAll('body *')].filter((el) => {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      return fs >= 150 && el.textContent.trim() && parseFloat(getComputedStyle(el.parentElement).fontSize) < 150;
    });
    const bigTexts = big.map((el) => {
      // measure the layout box: drop scroll-linked transforms (the capture keeps the untransformed box)
      const prevT = el.style.transform; el.style.transform = 'none';
      // the deepest element carrying the text decides the paint (e.g. a span with background-clip:text)
      let leaf = el; while (leaf.children.length === 1 && leaf.children[0].textContent.trim() === el.textContent.trim()) leaf = leaf.children[0];
      const cs = getComputedStyle(el), ls = getComputedStyle(leaf);
      const wght = /"wght"\s+([\d.]+)/.exec(cs.fontVariationSettings)?.[1];
      let gradient = null;
      if (ls.backgroundClip === 'text' || ls.webkitBackgroundClip === 'text') {
        const stops = [...ls.backgroundImage.matchAll(/(rgba?\([^)]+\))\s+([\d.]+)%/g)].map((m) => {
          const [r, g, b, a = 1] = m[1].match(/[\d.]+/g).map(Number);
          return { r: r / 255, g: g / 255, b: b / 255, a: +a, p: +m[2] / 100 };
        });
        // the gradient box is the leaf's inline box, usually taller than the line box: re-map stops to the element box
        const er = el.getBoundingClientRect(), lr = leaf.getBoundingClientRect();
        gradient = stops.map((s) => ({ ...s, p: (lr.top - er.top + s.p * lr.height) / er.height }));
      }
      const box = rect(el); el.style.transform = prevT;
      const [r, g, b] = (ls.color.match(/[\d.]+/g) || [0, 0, 0]).map(Number);
      return {
        text: el.textContent.trim(), ...box,
        fontSize: parseFloat(cs.fontSize), letterSpacing: parseFloat(cs.letterSpacing) || 0, lineHeight: parseFloat(cs.lineHeight),
        weight: wght ? +wght : +cs.fontWeight, align: cs.textAlign, color: { r: r / 255, g: g / 255, b: b / 255 }, gradient,
      };
    });
    return { url: location.href, width: innerWidth, height: document.body.scrollHeight, images, bigTexts };
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [url, out] = process.argv.slice(2);
  if (!url || !out) throw new Error('usage: node figma-sidecar.mjs <url> <out.json>');
  const { browser, page } = await openSettled(url);
  const data = await collectSidecar(page);
  writeFileSync(out, JSON.stringify(data, null, 1));
  await browser.close();
  console.log('wrote', out, `(${data.images.length} images, ${data.bigTexts.length} big texts)`);
}
