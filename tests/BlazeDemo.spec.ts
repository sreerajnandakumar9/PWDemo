import {test,expect,Locator} from '@playwright/test'

test("Choose Travel Plan where price is low",async({page})=>{

    await page.goto("https://blazedemo.com/")
    const Title = await page.title()
    console.log(Title)

    const source:Locator=  page.locator("select[name='fromPort']")
    await source.selectOption({label:'Boston'})
    await page.waitForTimeout(2000)

})