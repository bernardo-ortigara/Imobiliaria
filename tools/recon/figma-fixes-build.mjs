// Usage: node figma-fixes-build.mjs <frameId> [sidecar.json] [--only=fonts,letters,clip,grid,images,bigText] [--name=<frame name>] > fixes.run.js
// Prints figma-fixes.js with its ARGS filled in, ready to paste as the `code` of a use_figma call.
import { readFileSync } from 'node:fs';
const args = process.argv.slice(2);
const only = args.find((a) => a.startsWith('--only='))?.slice(7).split(',') ?? null;
const name = args.find((a) => a.startsWith('--name='))?.slice(7) ?? null;
const [frameId, sidecarPath] = args.filter((a) => !a.startsWith('--'));
if (!frameId) throw new Error('usage: node figma-fixes-build.mjs <frameId> [sidecar.json] [--only=...]');
let sidecar = null;
if (sidecarPath) {
  const s = JSON.parse(readFileSync(sidecarPath, 'utf8'));
  const r = (v) => Math.round(v * 100) / 100;
  sidecar = {
    images: s.images.map((i) => ({ x: r(i.x), y: r(i.y), w: r(i.w), h: r(i.h), fit: i.fit, pos: i.pos })),
    bigTexts: s.bigTexts,
  };
}
const src = readFileSync(new URL('./figma-fixes.js', import.meta.url), 'utf8')
  .split('\n').filter((l) => !l.startsWith('//')).join('\n')
  .replace(/\/\*ARGS\*\/[\s\S]*?\/\*END\*\//, JSON.stringify({ frameId, sidecar, only, name }));
process.stdout.write(src);
