import { expect } from '@playwright/test';

export default class GotoContactPage {
  constructor(page) {
    this.page = page
  }

  // Actions
  async ContactPage() {
    await expect(this.page).toHaveTitle("Contact - Entice");
    await this.page.getByRole('treeitem', { name: 'CRM' }).locator('div').nth(4).click();
    await this.page.getByRole('treeitem', { name: 'CRM' }).locator('div').nth(4).click();
    await this.page.getByRole('treeitem', { name: 'Contact' }).click();

  }

}





// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://entice.demostore1.com/EnticeLoginPage?ReturnUrl=%2F');
//   await page.getByLabel('User Name').click();
//   await page.getByLabel('User Name').fill('admin');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('admin');
//   await page.getByRole('button', { name: 'Log In' }).click();
//   await page.goto('https://entice.demostore1.com/CRMContactCustomer_ListView');
//   await page.getByRole('treeitem', { name: 'Inventory' }).locator('div').nth(4).click();
//   await page.locator('#id53ba0915-6cf4-4365-8428-dc36fd6adb2c > .dxbl-accordion-item-text-container > .dxbl-text > .xaf-navigation-link-click-area').click();
//   await page.getByRole('treeitem', { name: 'Stock', exact: true }).click();
//   await page.getByRole('button', { name: 'New' }).click();
//   await page.getByRole('treeitem', { name: 'Stock', exact: true }).click();
//   await page.getByRole('row', { name: 'Check box not checked GMS-000' }).getByLabel('Check box not checked').check();
//   await page.getByRole('button', { name: 'Clone...' }).click();
//   await page.getByRole('treeitem', { name: 'Stock', exact: true }).click();
//   await page.getByRole('row', { name: 'Check box not checked GMS-000' }).getByLabel('Check box not checked').check();
//   await page.getByRole('button', { name: 'Delete' }).click();
//   await page.getByRole('button', { name: 'No' }).click();
//   await page.getByRole('treeitem', { name: 'Stock', exact: true }).click();
// });