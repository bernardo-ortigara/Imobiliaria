// Usage: node capture-figma.mjs <url> <captureId>
// Get captureId from the Figma MCP tool generate_figma_design (fileKey only), then poll it with the captureId.
import { openSettled } from './_shared.mjs';
const [url, id] = process.argv.slice(2);
if (!url || !id) throw new Error('usage: node capture-figma.mjs <url> <captureId>');
const { browser, context, page } = await openSettled(url, { bypassCsp: true });
const r = await context.request.get('https://mcp.figma.com/mcp/html-to-design/capture.js');
await page.evaluate((s) => { const el = document.createElement('script'); el.textContent = s; document.head.appendChild(el); }, await r.text());
await page.waitForTimeout(500);
// do not await forever: the submit can take a while; poll the captureId from the MCP tool instead
page.evaluate((id) => window.figma.captureForDesign({ captureId: id, endpoint: `https://mcp.figma.com/mcp/capture/${id}/submit?bindVariables=true`, selector: 'body' }), id).catch(() => {});
await page.waitForTimeout(60000);
await browser.close();
