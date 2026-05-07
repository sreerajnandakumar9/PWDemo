import {test,Locator, expect} from '@playwright/test';
test('Dropdowns', async ({page}) => {

 await page.goto('https://testautomationpractice.blogspot.com/');
//await page.locator('#country').selectOption('India');
//await page.locator('#country').selectOption({label:'India'});
//await page.locator('#country').selectOption({value:'india'});
await page.locator('#country').selectOption({index:2});

 await expect(page.locator("#country")).not.toHaveValue("india");
//Dropdown count
 const options = page.locator('#country>option');
 await expect(options).toHaveCount(10);
 let dpValues: string[] = (await options.allTextContents()).map((value)=>value.trim())
 dpValues.forEach((value)=>console.log(value))
 //console.log(dpValues);
 dpValues;
  expect(dpValues).toContain("Japan");
 await page.pause();
})