import { expect, test } from '@playwright/test';

test('Verify deals - Vancouver', async ({ page }) => {
    await page.goto('https://journie.ca/en-CA');
  
    //Click 
    await page.locator('#Header').getByText('Deals').nth(2).click();

    //Click first deal
    await page.locator('[class="col-xs-12 col-sm-4 col-md-4 promo-margin"]').first().click()

    //Click the Find a station button
    await page.getByRole('button', {name:'Find a station'}).click()
    
    //Click on search bar and fill 
    await page.getByPlaceholder('Enter a location').fill('v5s4r2');

    //Select Vancouver
    await page.getByText('V5S 4R2Vancouver, BC, Canada').click();
    
    //couldn't find location
    await page.getByText('We could not find any').isVisible();

  });
  