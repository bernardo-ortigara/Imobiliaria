// Usage: node dump-dom.mjs <url> <out.txt>
// Writes an indented tree of every visible element with layout + typography computed styles (positions relative to each section).
import fs from 'fs';
import { openSettled } from './_shared.mjs';
const [url, out = 'dump.txt'] = process.argv.slice(2);
const { browser, page } = await openSettled(url);
const txt = await page.evaluate(() => {
  const lines = [];
  const walk = (e, depth, base) => {
    const cs = getComputedStyle(e);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    const r = e.getBoundingClientRect();
    if (r.width === 0 && r.height === 0 && e.tagName !== 'svg') { for (const c of e.children) walk(c, depth, base); return; }
    const isText = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (isText && e.textContent.trim().length === 1 && e.parentElement?.children.length > 1 && e.parentElement.textContent.trim().length < 20 && !/^\d/.test(e.textContent)) return;
    const s = [];
    if (cs.display !== 'block') s.push(cs.display);
    if (cs.display.includes('flex')) { s.push(cs.flexDirection === 'column' ? 'col' : 'row'); if (cs.gap !== 'normal') s.push('gap:' + cs.gap); if (cs.justifyContent !== 'normal') s.push('jc:' + cs.justifyContent); if (cs.alignItems !== 'normal') s.push('ai:' + cs.alignItems); if (cs.flexWrap !== 'nowrap') s.push('wrap'); }
    if (cs.display.includes('grid')) s.push('cols:' + cs.gridTemplateColumns + ' gap:' + cs.gap);
    if (cs.position !== 'static' && cs.position !== 'relative') s.push(cs.position);
    if (cs.padding !== '0px') s.push('pad:' + cs.padding);
    if (cs.overflow !== 'visible') s.push('ov:' + cs.overflow);
    if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') s.push('bg:' + cs.backgroundColor);
    if (cs.backgroundImage !== 'none') s.push('bgi:' + cs.backgroundImage.slice(0, 140));
    if (cs.borderRadius !== '0px') s.push('r:' + cs.borderRadius);
    if (cs.borderTopWidth !== '0px' || cs.borderBottomWidth !== '0px' || cs.borderLeftWidth !== '0px') s.push(`bd:${cs.borderTopWidth} ${cs.borderRightWidth} ${cs.borderBottomWidth} ${cs.borderLeftWidth} ${cs.borderTopColor}`);
    if (cs.boxShadow !== 'none') s.push('sh:' + cs.boxShadow);
    if (cs.opacity !== '1') s.push('op:' + cs.opacity);
    if (cs.transform !== 'none') s.push('tf:' + cs.transform);
    if (e.tagName === 'IMG') s.push(`src=${e.src.split('/').pop().split('?')[0]} fit:${cs.objectFit} pos:${cs.objectPosition}`);
    if (isText) s.push(`T[${cs.fontSize}/${cs.lineHeight} ls:${cs.letterSpacing} w:${cs.fontWeight} ${cs.color}${cs.textAlign !== 'start' ? ' ' + cs.textAlign : ''}${cs.fontVariationSettings !== 'normal' ? ' fv:' + cs.fontVariationSettings : ''}${cs.textDecorationLine !== 'none' ? ' ' + cs.textDecorationLine : ''}] "${e.textContent.trim().slice(0, 60)}"`);
    lines.push('  '.repeat(depth) + [e.tagName.toLowerCase(), e.dataset.framerName ? `"${e.dataset.framerName}"` : '', `@${Math.round(r.left)},${Math.round(r.top + scrollY - base)} ${Math.round(r.width)}x${Math.round(r.height)}`].filter(Boolean).join(' ') + ' ' + s.join(' '));
    if (e.tagName !== 'svg') for (const c of e.children) walk(c, depth + 1, base);
  };
  const nav = document.querySelector('nav')?.closest('[data-framer-appear-id]') || document.querySelector('nav');
  if (nav) { lines.push('##### NAV'); walk(nav, 0, 0); }
  // top-level blocks: every child of <main> (not only <section>s) plus the footer
  // zero-height wrappers (display: contents) are flattened into their children
  const flat = (els) => els.flatMap((e) => (e.getBoundingClientRect().height ? [e] : flat([...e.children])));
  const blocks = flat([...(document.querySelector('main')?.children ?? [])]).concat([...document.querySelectorAll('footer')].filter((f) => !f.closest('main')));
  for (const s of blocks) {
    const top = Math.round(s.getBoundingClientRect().top + scrollY);
    lines.push(`##### ${s.tagName} "${s.dataset.framerName || ''}" top=${top}`);
    walk(s, 0, top);
  }
  return lines.join('\n');
});
fs.writeFileSync(out, txt);
console.log(out, txt.split('\n').length, 'lines');
await browser.close();
