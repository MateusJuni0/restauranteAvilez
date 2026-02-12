const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(5000); // Esperar carregar animações
  await page.screenshot({ path: 'proof_avillez_real_photos.jpg', fullPage: true });
  await browser.close();
})();
