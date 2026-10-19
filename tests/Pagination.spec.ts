import {test,expect,Locator} from '@playwright/test'

test("Pagination Example", async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

    let hasPage:boolean= true;
    
       
    while(hasPage){

        const rows:Locator[]= await page.locator("#example tbody tr").all()
        for(let row of rows){

          
            console.log(await row.innerText());
        }
        const NextButton =  page.locator("button[aria-label='Next']")
        let IsDisabled: string | null = await NextButton.getAttribute('Class');
        if(IsDisabled?.includes('disabled')){
            hasPage=false;
        }
        else{
            await NextButton.click()
        }


    
}

})

test("Filter the rows and check the rows count", async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

    let PaginationCount= await page.locator('#dt-length-0')
    await PaginationCount.selectOption({label:'25'})
    const rowsCount= await page.locator("#example tbody tr").count()
        expect(rowsCount).toBe(25)

     const rowsCount1= await page.locator("#example tbody tr").all()
        expect(rowsCount1.length).toBe(25)
     const rowsCount2= await page.locator("#example tbody tr")
        expect(rowsCount2).toHaveCount(25)



    


})
test.only("Search specific data in the table", async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

    const searchBox =await page.locator("#dt-search-0")
    await page.waitForTimeout(2000)
    await  searchBox.fill("Martena Mccray")

  const rows= await page.locator("#example tbody tr").all()

        if(rows.length>=1){
            
            let MatchFound = false

             for(let row of rows){

          
           const rowtext = await row.innerText();
           if( rowtext.includes('Martena Mccray')){
               console.log(rowtext)
            console.log("Match Found")
            MatchFound=true;
            break;
           }
        }
        expect(MatchFound).toBeTruthy()
     
            
        }
        
           else{
            console.log('No Match Found')
           }
        

    


})