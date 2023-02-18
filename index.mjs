import { chromium } from 'playwright';

(async () => {
    // ブラウザを開いて実行する場合、chromium.launch({ headless: false })とする
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://tukky-lab.vercel.app/');

    // ログイン画面
    await page.screenshot({ path: 'images/top.png' });
    await page.getByLabel('ユーザー名').click();
    await page.getByLabel('ユーザー名').fill('tukky');
    await page.getByLabel('ユーザー名').press('Tab');
    await page.getByLabel('パスワード').fill('tukkylab');
    await page.getByLabel('パスワード').press('Tab');
    await page.getByRole('button', { name: 'ログイン' }).press('Enter');

    await page.getByRole('link', { name: 'ランダム名言' }).click();
    await page.screenshot({ path: 'images/quotes.png' });

    await page.getByRole('link', { name: 'MCU次回作' }).click();
    await page.waitForTimeout(2000); // 2秒待機する
    await page.screenshot({ path: 'images/mcu.png' });

    await page.getByRole('link', { name: 'アニメ情報' }).click();
    await page.screenshot({ path: 'images/anime.png' });

    await page.getByRole('link', { name: '記事検索' }).click();
    await page.screenshot({ path: 'images/article.png' });

    await page.getByRole('link', { name: '感情分析' }).click();
    await page.screenshot({ path: 'images/emotion.png' });

    await page.getByRole('link', { name: 'OCR' }).click();
    await page.screenshot({ path: 'images/ocr.png' });

    await page.getByRole('link', { name: 'HTTP猫' }).click();
    await page.screenshot({ path: 'images/httpcat.png' });

    await page.getByRole('link', { name: 'ディズニーキャラ' }).click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'images/disney.png' });

    await page.getByRole('link', { name: 'ポケモン' }).click();
    await page.screenshot({ path: 'images/pokemon.png' });

    await page.getByRole('link', { name: '便利サイト' }).click();
    await page.screenshot({ path: 'images/useful.png' });

    await page.getByRole('link', { name: 'プログラミング言語' }).click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'images/programming.png' });

    await browser.close();
})();
