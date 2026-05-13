import {test,expect,Locator} from '@playwright/test';
test.skip('Sorted Dropdowns', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
   const options:Locator = page.locator('#animals>option');
    const allOptions = await options.all();
    for (const option of allOptions) {
        const text = await option.textContent();
        console.log(text?.trim());
    }
    })
// Non sorted dropdowns
test.only('Non Sorted Dropdowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
const dps:Locator = page.locator('#colors>option');
  let dpValues1: string[] = (await dps.allTextContents()).map((color)=>color.trim())
   
  //dpValues1.forEach((color)=>console.log(color))
 //dpValues.forEach((value)=>console.log(value))
 //const Nonsorted:string[] = [...dpValues1]
 console.log("sorted with duplicates: ");
 const sorted:string[] = [...dpValues1].sort();//spread operator to create a copy of the array before  sorting
 //remove duplicates
  console.log(sorted);
//Set is a built in data structure that only allows unique values, so by passing the sorted array 
// to the Set constructor, we can create a new Set that contains only the unique values from
//  the sorted array. 
// Then we can convert the Set back to an array using Array.from() method.
 console.log("sorted without duplicates: ");

   const uniqueSorted = Array.from(new Set(sorted));
    //uniqueSorted.forEach((value) => console.log(value));    
   console.log(uniqueSorted);
   //expect(Nonsorted).not.toEqual(sorted);
})