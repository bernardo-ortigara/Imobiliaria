import { chromium } from 'playwright';

/** Opens a page at 1440x900, scrolls to the bottom so every Framer "appear" animation finishes, removes the Framer badge. */
export async function openSettled(url, { width = 1440, height = 900, bypassCsp = false } = {}) {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  if (bypassCsp) {
    await page.route('**/*', async (route) => {
      const response = await route.fetch();
      const headers = { ...response.headers() };
      delete headers['content-security-policy'];
      delete headers['content-security-policy-report-only'];
      await route.fulfill({ response, headers });
    });
  }
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(3000);
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 300) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(200); }
  await page.waitForTimeout(2500);
  await page.evaluate(() => { window.scrollTo(0, 0); document.querySelector('#__framer-badge-container')?.remove(); });
  await page.waitForTimeout(2000);
  return { browser, context, page };
}
