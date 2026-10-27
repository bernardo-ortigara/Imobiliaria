// REFERENCE ONLY: one-off script used for the home page (hardcoded coordinates/paths). Adapt before reusing.
import fs from 'fs';
const icons = JSON.parse(fs.readFileSync('icons.json'));
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const names = { logo: 'LogoMark', arrowSuffix: 'ArrowRightIcon', bank: 'BankIcon', doc: 'DocumentIcon', area: 'AreaIcon', bed: 'BedIcon', bath: 'BathIcon', refresh: 'RefreshIcon', building: 'BuildingIcon', briefcase: 'BriefcaseIcon', users: 'UsersIcon', linkedin: 'LinkedinIcon', twitter: 'TwitterIcon', arrowLeft: 'ArrowLeftIcon', quote: 'QuoteIcon', arrowCta: 'ArrowCtaIcon' };
let out = `import type { SVGProps } from "react";\n\ntype IconProps = SVGProps<SVGSVGElement>;\n`;
for (const [k, v] of Object.entries(icons)) {
  let html = v.html;
  const colors = new Set();
  html.replace(/(stroke|fill)="(rgba?\([^"]+\))"/g, (_, a, c) => { if (!/rgba\([^)]*,\s*0\)$/.test(c)) colors.add(c); });
  const single = k !== 'logo' && colors.size === 1;
  if (single) html = html.replace(/(stroke|fill)="(rgba?\([^"]+\))"/g, (m, a, c) => /rgba\([^)]*,\s*0\)$/.test(c) ? `${a}="none"` : `${a}="currentColor"`);
  html = html.replace(/ \/\*.*?\*\//g, '').replace(/rgba\(0, 0, 0, 0\)/g, 'none');
  html = html.replace(/\s([a-z]+(?:-[a-z]+)+)=/g, (_, a) => ' ' + camel(a) + '=');
  html = html.replace(/<svg([^>]*)>/, (_, attrs) => { attrs = attrs.replace(/\s(width|height|xmlns|focusable|color)="[^"]*"/g, '').replace(/\sstyle="[^"]*"/g, ''); return `<svg${attrs} fill="none" aria-hidden="true" {...props}>`; });
  html = html.replace(/\sweight="[^"]*"/g, '').replace(/<g color="[^"]*"/g, '<g');
  out += `\n/** ${k} — ${Math.round(v.w)}x${Math.round(v.h)}${single ? `, default color ${[...colors][0]}` : ''} */\nexport function ${names[k]}(props: IconProps) {\n  return (\n    ${html}\n  );\n}\n`;
}
fs.writeFileSync('/Users/bernardoalves/Desktop/IMOBILIARIA/src/components/icons.tsx', out);
console.log(out.slice(0, 3000));
