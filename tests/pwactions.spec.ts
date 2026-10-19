import {test,Locator, expect} from '@playwright/test';
test('Actions', async ({page}) => {

 await page.goto('https://testautomationpractice.blogspot.com/');

 const days:string[]=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

    days.map(day => page.getByLabel)

    for(const checkbox of days){
        await page.getByLabel(checkbox).check();
        await expect(page.getByLabel(checkbox)).toBeChecked();

    }
    //Uncheck last 3 checkboxes
    for(const checkbox of days.slice(-3)){
        await page.getByLabel(checkbox).uncheck();
        await expect(page.getByLabel(checkbox)).not.toBeChecked();
    }
    //select by specific index
    const indexesToSelect=[0,2,4];
    for(const index of indexesToSelect){
        await page.getByLabel(days[index]).check();
        await expect(page.getByLabel(days[index])).toBeChecked();
    }
   await page.pause();
})