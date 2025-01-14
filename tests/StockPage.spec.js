import { test, expect } from '@playwright/test'
import PomManager from '../Pages/PomManager.js'

let pm;


test.describe('Add New Stock', () => {

  // test.use({ viewport: { width: 1000, height: 600 } });

  test.beforeAll(async ({ page }) => {
    pm = new PomManager(page)
    await pm.loginpage.gotoLoginPage();
    await pm.loginpage.login();
    await pm.homepage.dashboard();
    await pm.gotostockpage.StockPage();
  })

  test.afterAll(async ({ page }) => {
  await page.close();
  })

  test('Add new stock details in the Item tab', async () => {
    await pm.addnewstockitem.newstockbutton();
    await expect(pm.page.getByLabel('Is Use Net Mass Or Weight')).not.toBeChecked();
    await expect(pm.page.getByLabel('Is Supplementary Units Req')).not.toBeChecked();
    await expect(pm.page.getByLabel('Dont Earn Points')).not.toBeChecked();
    await pm.addnewstockitem.enterstockitemname();
    await pm.addnewstockitem.selectclasstemplate();
    // await pm.addnewstockitem.selectstockmanufacturer();
    await pm.addnewstockitem.salestaxoption();
    // await pm.addnewstockitem.massweight();
    await pm.addnewstockitem.supplementaryunits();
    await pm.addnewstockitem.dontearnpoints();
    // await expect(pm.page.getByRole('gridcell', { name: 'Please enter a description' })).toContainText('GMS-100');
  })

//   test('Add new stock details in the Tax tab', async () => {
//     await pm.addnewstockitem.taxationtab();
//     await pm.addnewstockitem.salestaxoption();
//     await pm.addnewstockitem.purchasetaxoption();
//   })

//   test('Enter new stock notes', async () => {
//     await pm.addnewstockitem.enternotes();
//   })

//   test('Enter New stock Audit', async () => {
//     await pm.addnewstockitem.audit();
//   })

//   test('Enter New stock Description', async () => {
//     await pm.addnewstockitem.enterdescriptions();
//   })

//   test('Enter New stock Unit Measures', async () => {
//     await pm.addnewstockitem.enterunitmeasures();
//   })

//   test('Enter accounts details', async () => {
//     await pm.addnewstockitem.enteraccounts();
//   })

//   test('Enter categories details', async () => {
//     await pm.addnewstockitem.entercategories();
//   })

//   test('Enter web options', async () => {
//     await pm.addnewstockitem.enterweboptions();
//   })

//   test('Enter web option descriptions', async () => {
//     await pm.addnewstockitem.enterweboptiondescriptions();
//   })

//   test('Enter item pricing details', async () => {
//     await pm.addnewstockitem.enteritempricingdetails();
//   })

//   test('Upload a photo', async () => {
//     await pm.addnewstockitem.uploadphoto();
//     await pm.addnewstockitem.saveandclose();
//   })

// })


// test.describe('View New Stock Item', () => {

//   test.beforeAll(async ({ page }) => {
//     pm = new PomManager(page)
//     await pm.loginpage.gotoLoginPage();
//     await page.pause();
//     await pm.loginpage.login();
//     await pm.homepage.dashboard();
//     await pm.gotostockpage.StockPage();
//   })

//   // test.afterAll(async ({ page }) => {
//   //   await page.close()
//   // })

//   test('View stock details', async () => {
//     await pm.viewnewstockitem.stockitem();
//     await pm.viewnewstockitem.itemtab();
//     await pm.viewnewstockitem.notestab();
//     await pm.viewnewstockitem.audittab();
//     await pm.viewnewstockitem.descriptionstab();
//   })

// })


// test.describe('Update Stock Item', () => {

//   test.beforeAll(async ({ page }) => {
//     pm = new PomManager(page)
//     await pm.loginpage.gotoLoginPage();
//     await page.pause();
//     await pm.loginpage.login();
//     await pm.homepage.dashboard();
//     await pm.gotostockpage.StockPage();
//   })

//   // test.afterAll(async ({ page }) => {
//   //   await page.close()
//   // })

//   test('Update stock details in the Item tab', async () => {
//     await pm.updatestockitem.stockitem();
//     await pm.updatestockitem.stockitemname();
//     await pm.updatestockitem.selectstatus();
//     await pm.updatestockitem.selectclasstemplate();
//     // await pm.updatestockitem.selectglclasstemplate();
//     // await pm.updatestockitem.selectstockmanufacturer();
//     await pm.updatestockitem.massweight();
//     await pm.updatestockitem.supplementaryunits();
//     await pm.updatestockitem.dontearnpoints();
//   })


//   test('Update stock details in the Taxation tab', async () => {
//     await pm.updatestockitem.taxationtab();
//     await pm.updatestockitem.salestaxoption();
//     await pm.updatestockitem.purchasetaxoption();
//   })

//   test('Update the Notes tab', async () => {
//     await pm.updatestockitem.notes();
//   })

//   test('Update the Audit tab', async () => {
//     await pm.updatestockitem.audit();

//   })

//   test('Update the Descriptions tab', async () => {
//     await pm.updatestockitem.descriptions();
//   })

// })



// test.describe('Delete Stock Item', () => {

//   test.beforeAll(async ({ page }) => {
//     pm = new PomManager(page)
//     await pm.loginpage.gotoLoginPage();
//     await page.pause();
//     await pm.loginpage.login();
//     await pm.homepage.dashboard();
//     await pm.gotostockpage.StockPage();
//   })

//   // test.afterAll(async ({ page }) => {
//   //   await page.close()
//   // })

//   test('Delete stock item in stock list', async () => {
//     await pm.deletestockitem.deleteinstockitemlist();
//     const popup = await this.page.locator('dxbl-popup-header');
//     await expect(popup).toBeVisible();
//     await popup.DiscardDelete().click();
//   })

})

