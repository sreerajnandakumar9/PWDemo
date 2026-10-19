import {test,expect, Locator} from '@playwright/test';

test('Locators', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');
    //await page.locator('#search_query_top').fill('dress');
    await page.getByLabel('Search store').fill('dress');
    await page.getByRole('button', { name: 'Search' });
    const imageText:Locator =page.getByAltText('nopCommerce demo store')
    await expect(imageText).toBeVisible()
   // await imageText.click();
   await expect(page.getByText('Welcome to our store')).toBeVisible(); //supports full string and partial string matching
    //await page.pause();
    //case sensitive and supports regular expression
       await expect(page.getByText(/Welcome\s+to\s+our\s+store/i)).toBeVisible();
       await expect(page.getByRole('heading',{name:/community poll/i})).toBeVisible();

       await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
       await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

       await page.getByRole('link', { name: 'Register' }).click();
       await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

       //getByrole supports checkboxes and radio buttons 

})