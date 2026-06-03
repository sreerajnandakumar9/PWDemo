import {test,expect,Locator} from '@playwright/test'
test('Static Table', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    let tableRows: Locator = page.locator('table[name="BookTable"] tbody')
        let HeaderCount = await tableRows.locator('tr th').count();

    let rowCount = await tableRows.locator('tr').count();
    console.log("Total number of rows in the table: " + rowCount);
        console.log("Total number of Headers in the table: " + HeaderCount);


    for( let i=0; i<HeaderCount; i++){
        let rowData = await tableRows.locator('tr th').nth(i).allTextContents();
        console.log("Row " + (i+1) + ": " + rowData);
    }
     expect(HeaderCount).toBe(4)
     expect(rowCount).toBe(7)

});