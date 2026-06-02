import {test,expect, Locator} from '@playwright/test';

test('Comparing Method-TextContent', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
 //Text content vs Inner text
   const products:Locator = await page.locator('.product-title')
    const count = await products.count();
    for(let i=0; i<count; i++){
        const productName = await products.nth(i).textContent();
        console.log(productName);
    }


})
test('Comparing Method-InnerText', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');  
    const products:Locator = await page.locator('.product-title')
    const count = await products.count();
    for(let i=0; i<count; i++){
        const productName = await products.nth(i).innerText();
        console.log(productName);
    }
})
//coparision of all inner text and all text content
test("Comparing Method-AllInnerText", async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');  
    const products:Locator = await page.locator('.product-title')
    const allProductNames = await products.allInnerTexts();
    console.log(allProductNames);
})
test("Comparing Method-AllTextContent", async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');  
    const products:Locator = await page.locator('.product-title')
    const allProductNames = await products.allTextContents();
    //Trim is used to remove the extra spaces from the start and end of the string
    allProductNames.map((productName) => console.log(productName.trim()));
    
})
//all() method is used to get the all the elements of the locator and then we can perform the action on it
test.only("Comparing Method-All", async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');  
    const products:Locator = await page.locator('.product-title')
    const allProducts = await products.all();
    console.log(allProducts);
    for(let product of allProducts){
        const productName = await product.innerText();
        console.log(productName);
    }
})