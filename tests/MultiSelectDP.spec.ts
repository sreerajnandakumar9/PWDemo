import {test,expect,Locator} from '@playwright/test';
test('MultiSelect Dropdowns', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const dp:Locator = page.locator("#colors>option");
    let dpValues: string[] = (await dp.allTextContents()).map((value)=>value.trim())
    dpValues.forEach((value)=>console.log(value))
     expect(dpValues).toContain("Green");
     expect(dpValues).toContain("Blue");
     await page.pause();
})