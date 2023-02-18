import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.type('input[name="q"]', 'Playwright');
    await page.press('input[name="q"]', 'Enter');
    await page.waitForSelector('#search');
    const searchResults = await page.$$eval('#search .g', (results) =>
        results.map((result) => ({
            title: result.querySelector('h3').textContent,
            url: result.querySelector('a').href,
        }))
    );
    console.log(searchResults);
    await browser.close();
})();
