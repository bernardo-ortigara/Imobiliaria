// Usage: node capture-figma.mjs <url> <captureId> [sidecar.json] [--freeze=<css selector>]
// Get captureId from the Figma MCP tool generate_figma_design (fileKey only), then poll it with the captureId.
// Optional sidecar.json: what the capture loses (object-position, faded fit-text logos), for figma-fixes.js.
// Optional --freeze: forces `transform: none !important` on the matched elements (e.g. a JS marquee) so they are captured at rest.
import { writeFileSync } from 'node:fs';
import { openSettled } from './_shared.mjs';
import { collectSidecar } from './figma-sidecar.mjs';
const argv = process.argv.slice(2);
const freeze = argv.find((a) => a.startsWith('--freeze='))?.slice(9);
const [url, id, sidecar] = argv.filter((a) => !a.startsWith('--'));
if (!url || !id) throw new Error('usage: node capture-figma.mjs <url> <captureId> [sidecar.json]');
const { browser, context, page } = await openSettled(url, { bypassCsp: true });
if (freeze) { await page.addStyleTag({ content: `${freeze}{transform:none!important}` }); await page.waitForTimeout(300); }
if (sidecar) { writeFileSync(sidecar, JSON.stringify(await collectSidecar(page), null, 1)); console.log('wrote', sidecar); }
const r = await context.request.get('https://mcp.figma.com/mcp/html-to-design/capture.js');
await page.evaluate((s) => { const el = document.createElement('script'); el.textContent = s; document.head.appendChild(el); }, await r.text());
await page.waitForTimeout(500);
// do not await forever: the submit can take a while; poll the captureId from the MCP tool instead
page.evaluate((id) => window.figma.captureForDesign({ captureId: id, endpoint: `https://mcp.figma.com/mcp/capture/${id}/submit?bindVariables=true`, selector: 'body' }), id).catch(() => {});
await page.waitForTimeout(60000);
await browser.close();
