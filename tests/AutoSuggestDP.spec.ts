import {test,expect,Locator} from '@playwright/test';
test('Auto Suggest Dropdowns', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[placeholder='Username']").fill('Admin');
    await page.locator("input[placeholder='Password']").fill('admin123');
    await page.locator("button[type='submit']").click();
    
   await page.getByText('PIM').click();
      await page.waitForTimeout(4000);

   await page.locator('form i').nth(2).click();
   //await page.waitForTimeout(4000);
 const count= await page.locator("div[role='listbox'] span").count();
   const dropdownOptions = page.locator("div[role='listbox'] span");
   const dropdownItems:string[] = await dropdownOptions.allInnerTexts();
   for (let i = 0; i < count; i++) {
      const itemText = await dropdownOptions.nth(i).innerText();
       if (itemText==='Account Assistant') {
               console.log(itemText);

           await dropdownOptions.nth(i).click();
           break;
       }
   }
 
  // await page.pause();
})
   