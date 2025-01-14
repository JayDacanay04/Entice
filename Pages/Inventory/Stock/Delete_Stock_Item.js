import { expect } from '@playwright/test';

export default class DeleteStockItem {

  constructor(page) {
    this.page = page

  }


  // Common Locators
  CloseFormButton = () => this.page.getByLabel('Close', { exact: true });
  ClickStockItem = () => this.page.getByRole('gridcell', { name: 'GMS-1000' });
  CheckStockItem = () => this.page.getByRole('row', { name: 'Check box not checked GMS-1000' }).getByLabel('Check box not checked');
  DeleteStockItemList = () => this.page.getByRole('button', { name: 'Delete' });
  DeleteButtoninStockItemList = () => this.page.getByRole('button', { name: 'Delete' });
  DeleteButtoninStockItemForm = () => this.page.getByRole('button', { name: 'Delete' }).first();
  DiscardDelete = () => this.page.getByRole('button', { name: 'No' });

  // Common Actions
  async deleteinstockitemlist() {
    await this.CheckStockItem().check();
    await this.DeleteStockItemList().click();
  }

  async deleteinstockitemform() {
    await this.ClickStockItem().click();
    await this.DeleteButtoninStockItemForm().click();
    await this.DiscardDelete().click();
  }


}



// import { test, expect } from '@playwright/test';

// test('handle popup screen', async ({ page }) => {
//   // Navigate to the page where the popup appears
//   await page.goto('https://example.com');

//   // Trigger the popup by clicking a button (e.g., "Show Popup")
//   await page.click('button#show-popup'); // Adjust the selector based on your HTML
  
//   // Wait for the popup to appear. This can be an overlay, modal, or alert box.
//   // Assuming there's a modal with an ID 'popup-modal'
//   const popup = await page.locator('#popup-modal');
//   await expect(popup).toBeVisible();

//   // Optionally, check that the popup contains some text or elements
//   await expect(popup).toContainText('This is a popup message');
  
//   // Perform actions on the popup, e.g., click the 'Close' button
//   await popup.locator('button#close-popup').click(); // Adjust based on your popup structure
  
//   // Assert that the popup is no longer visible
//   await expect(popup).toBeHidden();
// });




//   await page.getByRole('treeitem', { name: 'Inventory' }).locator('div').nth(4).click();
//   await page.locator('#ida368f851-7084-4ff6-a53a-dd80cdaaac5c > .dxbl-accordion-item-text-container > .dxbl-text > .xaf-navigation-link-click-area').click();
//   await page.getByRole('treeitem', { name: 'Stock', exact: true }).click();
//   await page.getByRole('row', { name: 'Check box not checked GMS-' }).getByLabel('Check box not checked').check();
//   await page.getByRole('button', { name: 'Delete' }).click();
//   await page.locator('dxbl-popup-header').click();
//   await page.getByRole('button', { name: 'No' }).click();
// });