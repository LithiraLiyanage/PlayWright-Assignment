const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 – Convert simple sentence in present tense', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama gedhara yanavaa.');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මම ගෙදර යනවා.', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC01 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_Fun_0006 – Convert positive statement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama ehema karanavaa.');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මම එහෙම කරනවා.', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC02 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_Fun_0008 – Convert common greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('aayuboovan!');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('ආයුබෝවන්!', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC03 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_Fun_0025 – Chat shorthand "u"', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('kohedha u yanne?');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('කොහෙද උ# යන්නෙ?', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC04 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_Fun_0030 – Mixed numeric and letters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('g3dhara');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('g34දර', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC05 Output:', result.replace('Sinhala', '').trim());
});
