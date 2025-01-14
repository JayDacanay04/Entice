import { test, expect } from '@playwright/test'
import PomManager from '../Pages/PomManager.js'

let pm;


test.describe('Lead Test', () => {

  test.describe('Add New Lead', () => {

    test.use({ viewport: { width: 1000, height: 600 } });

    test.beforeAll(async ({ page }) => {
      pm = new PomManager(page)
      await pm.loginpage.gotoLoginPage();
      await pm.loginpage.login();
      await pm.homepage.dashboard();
      await pm.gotoleadpage.LeadPage();
    })

    test.afterEach(async ({ page }) => {
      await page.close()
    })

    test('Add new lead details', async () => {
      await pm.addnewlead.newcontactbutton();
      await pm.addnewlead.enterleaddetails();
      await pm.addnewlead.saveandclose();
    })

  })


  test.describe('View New Lead', () => {

    test.use({ viewport: { width: 1000, height: 600 } });

    test.beforeAll(async ({ page }) => {
      pm = new PomManager(page)
      await pm.loginpage.gotoLoginPage();
      await pm.loginpage.login();
      await pm.homepage.dashboard();
      await pm.gotoleadpage.LeadPage();
    })

    test.afterEach(async ({ page }) => {
      await page.close()
    })

    test('View lead', async () => {
      await pm.viewlead.viewlead();
    })

  })

  test.describe('Update New Lead', () => {

    // test.use({ viewport: { width: 1000, height: 600 } });

    test.beforeAll(async ({ page }) => {
      pm = new PomManager(page)
      await pm.loginpage.gotoLoginPage();
      await pm.loginpage.login();
      await pm.homepage.dashboard();
      await pm.gotoleadpage.LeadPage();
    })

    // test.afterEach(async ({ page }) => {
    //   await page.close()
    // })

    test('Update lead', async () => {
      await pm.viewlead.viewlead();
      await pm.updatelead.updateleaddetails();
      await pm.addnewlead.saveandclose();
    })

  })

  test.describe('Delete New Lead', () => {

    // test.use({ viewport: { width: 1000, height: 600 } });

    test.beforeAll(async ({ page }) => {
      pm = new PomManager(page)
      await pm.loginpage.gotoLoginPage();
      await pm.loginpage.login();
      await pm.homepage.dashboard();
      await pm.gotoleadpage.LeadPage();
    })

    test.afterEach(async ({ page }) => {
      await page.close()
    })

    test('Delete lead', async () => {
      await pm.deletelead.deleteleadlistview();
    })

  })

  // test.describe('Clone Lead', () => {

  //   // test.use({ viewport: { width: 1000, height: 600 } });

  //   test.beforeAll(async ({ page }) => {
  //     pm = new PomManager(page)
  //     await pm.loginpage.gotoLoginPage();
  //     await pm.loginpage.login();
  //     await pm.homepage.dashboard();
  //     await pm.gotoleadpage.LeadPage();
  //   })

  //   test.afterEach(async ({ page }) => {
  //     await page.close()
  //   })

  //   test('Clone lead list', async () => {
  //     await pm.clonelead.cloneleadlist();
  //     await pm.clonelead.saveandclose();
  //   })

  //   // test('Clone lead form', async () => {
  //   //   await pm.clonelead.cloneleadform();
  //   //   await pm.clonelead.saveandclose();
  //   // })

  // })

  // test.describe('Qualify Lead', () => {

  //   // test.use({ viewport: { width: 1000, height: 600 } });

  //   test.beforeAll(async ({ page }) => {
  //     pm = new PomManager(page)
  //     await pm.loginpage.gotoLoginPage();
  //     await pm.loginpage.login();
  //     await pm.homepage.dashboard();
  //     await pm.gotoleadpage.LeadPage();
  //   })

  //   test.afterEach(async ({ page }) => {
  //     await page.close()
  //   })

  //   test('Qualify lead', async () => {
  //     await pm.qualifylead.qualifylead();
  //   })

  // })


  test.describe('Search Lead', () => {

    // test.use({ viewport: { width: 1000, height: 600 } });

    test.beforeAll(async ({ page }) => {
      pm = new PomManager(page)
      await pm.loginpage.gotoLoginPage();
      await pm.loginpage.login();
      await pm.homepage.dashboard();
      await pm.gotoleadpage.LeadPage();
    })

    test.afterEach(async ({ page }) => {
      await page.close()
    })

    test('Search lead list', async () => {
      await pm.searchlead.searchtestlead();
      await pm.searchlead.searchtes2lead();
      await pm.searchlead.searchmikekurtzlead();

    })


  })


})