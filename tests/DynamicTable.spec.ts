import {test,expect,Locator} from '@playwright/test'
test("Dynamic Table-Extract  Chrome CPU Load", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
   const table:Locator= await page.locator("table[id='taskTable'] tbody")
   await expect(table).toBeVisible()
   const rows:Locator=table.locator('tr')
const RowCount = await rows.count()
console.log("Total number of rows in the table: " + RowCount);
expect(rows).toHaveCount(4)

 for( let rowData of await rows.all()){

    const cellData = await rowData.locator('td').allInnerTexts()
    console.log(cellData.join('\t'))
    console.log("--------------------------------------------------")
     const Browser=cellData[0]
     // check each cell value which contains % and extract the CPU load value if found
    // const cpuLoadCell = await cellData.find(cell => cell.includes('%'))
     

       if(Browser==="Chrome"){
          //  console.log(cpuLoadCell);
          //const cpuLoadCell = await rowData.locator("td:has-text('%')").innerText()
         // const cpuLoadCell =  await rowData.locator('td').filter({hasText: '%'}).innerText()
         //Playwright selector
          let cpuLoadCell =  await rowData.locator("td",{hasText:'%'}).innerText()

        console.log(`CPU Load for ${Browser}: ${cpuLoadCell}`);
        break;

 }
   
}
})
test.only("Compare CPU Loads", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
   const table:Locator= await page.locator("table[id='taskTable'] tbody")
   await expect(table).toBeVisible()
   const rows:Locator=table.locator('tr')
const RowCount = await rows.count()
console.log("Total number of rows in the table: " + RowCount);
expect(rows).toHaveCount(4)
 let cpuLoadCell:string="";
 for( let rowData of await rows.all()){

    const cellData = await rowData.locator('td').allInnerTexts()
    console.log(cellData.join('\t'))
    console.log("--------------------------------------------------")
     const Browser=cellData[0]
    
     

       if(Browser==="Chrome"){
         
          cpuLoadCell =  await rowData.locator("td",{hasText:'%'}).innerText()

        console.log(`CPU Load for ${Browser}: ${cpuLoadCell}`);
        break;

 }
   
}

     let cpuVALUE:string= await page.locator('.chrome-cpu').innerText();
     console.log(`CPU load of Chrome process :${cpuVALUE}`)

     expect(cpuVALUE).toContain(cpuLoadCell)
})