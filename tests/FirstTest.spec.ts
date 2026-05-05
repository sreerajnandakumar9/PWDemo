import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');

  let title:string = await page.title();
  console.log(title)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('My Shop');
});
test('Launch Automation Practice', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');

  let title:string = await page.title();
  console.log(title)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('My Shop');
});