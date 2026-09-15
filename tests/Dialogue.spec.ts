import {test,expect,Page} from  '@playwright/test'

test("Dialogue Box Test", async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/")



 page.on("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.type()} - ${dialog.message()  }`);

    await dialog.accept();
  });


await page.locator("#alertBtn").click();

})