import {test,expect, Locator} from '@playwright/test';
test('CSS Locators', async ({page}) => {

 await page.goto('https://demowebshop.tricentis.com/');
    await expect(page).toHaveTitle('Demo Web Shop');
    await page.locator(".search-box-text[value='Search store']").fill("laptop")

    await page.waitForTimeout(2000);
})