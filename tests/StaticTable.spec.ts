import {test,expect,Locator} from '@playwright/test'
test('Static Table', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    let tableRows: Locator = page.locator('table[name="BookTable"] tbody')
        let HeaderCount = await tableRows.locator('tr th').count();

    let rowCount = await tableRows.locator('tr');
    console.log("Total number of rows in the table: " + await rowCount.count());
        console.log("Total number of Headers in the table: " + HeaderCount);


    for( let i=0; i<HeaderCount; i++){
        let rowData = await tableRows.locator('tr th').nth(i).allTextContents();
        //console.log("Row " + (i+1) + ": " + rowData);
    }
     expect(HeaderCount).toBe(4)
     expect(await rowCount.count()).toBe(7)
     

});
//Read 2nd row of the table and print the data in console
  test('Read 2nd row of the table', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/") 
    let tableRows: Locator = page.locator('table[name="BookTable"] tbody')
    let noOfRows = await tableRows.locator('tr');
    let rows: string[] = await noOfRows.nth(2).locator('td').allInnerTexts();
        console.log(rows);

})
//pRINT ALL THE DATA IN THE TABLE
test('Print all the data in the table', async ({page}) => {
 await page.goto("https://testautomationpractice.blogspot.com/") 
     let tableRows: Locator = page.locator('table[name="BookTable"] tbody')
    let noOfRows = await tableRows.locator('tr').all();
    for( let rowtext of noOfRows.slice(1)){

         const rowContents = await rowtext.locator('td').allInnerTexts();
         //join- method is used to concatenate the array elements into a single string with a specified separator (in this case, a tab character '\t').
         console.log(rowContents.join('\t'));
    }
})
//Print the book name where the author is "Mukesh"
test('Print the book name where the author is "Mukesh"', async ({page}) => {

 await page.goto("https://testautomationpractice.blogspot.com/") 
  const books:string[]=[]
  let tableRows: Locator = page.locator('table[name="BookTable"] tbody')
    let noOfRows = await tableRows.locator('tr').all();
    for( let rowtext of noOfRows.slice(1)){
          const cell = await rowtext.locator('td').allInnerTexts()
          const author=cell[1];
         const bookName=cell[0];

         if(author==='Animesh'){

            console.log(`Book name where the author is ${author}: ${bookName}`);
            books.push(bookName)
             expect(books).toHaveLength(1);
         }

}

})
//Total price of Books
test.only('Print the total price of books', async ({page}) => {
 let totalPrice:number=0
 await page.goto("https://testautomationpractice.blogspot.com/") 
  let tableRows: Locator = page.locator('table[name="BookTable"] tbody')
    let noOfRows = await tableRows.locator('tr').all();
    for( let rowtext of noOfRows.slice(1)){
          const cell = await rowtext.locator('td').allInnerTexts()
          const price =cell[3]
        // totalPrice+=Number(price);
        totalPrice+=parseFloat(price)

    }
            console.log(`Total price of books: ${totalPrice}`);
            expect(totalPrice).toBe(7100)

})
