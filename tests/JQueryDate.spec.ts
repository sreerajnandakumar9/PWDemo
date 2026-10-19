import {test, expect,Page} from  '@playwright/test'


async function TargetDatePicker(TargetYear:string,TargetMonth:string,TargetDate:string,
  page:Page,IsfutureDate:boolean){
while(true){

    const MonthText = await page.locator(".ui-datepicker-month").textContent()
 const yearText= await page.locator(".ui-datepicker-year").textContent()
 //console.log(`Current Month: ${MonthText}, Current Year: ${yearText}`)


      if(MonthText===TargetMonth && yearText===TargetYear){
        console.log(`Month and Year Matched: ${MonthText} ${yearText}`)
        break;
      }

      if(IsfutureDate){
        await page.locator(".ui-datepicker-next").click()
      }
      else{
      await page.locator(".ui-datepicker-prev").click()

      }

}

  let getText = await page.locator(".ui-datepicker-calendar td").all()

  for(let cell of getText){
    const cellText = await cell.textContent()
    if(cellText===TargetDate){
        await cell.click()
        console.log(`Selected Date: ${cellText}`)
        break;
    }
}
  }

test("JQuery Date Picker Test", async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#datepicker").click()

const dateToSelect = "15"
const monthToSelect = "May"
const yearToSelect = "2026"

TargetDatePicker(yearToSelect, monthToSelect, dateToSelect, page, false)

 await page.waitForTimeout(4000)


})