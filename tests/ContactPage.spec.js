import { test, expect } from '@playwright/test'
import PomManager from '../Pages/PomManager.js'

let pm;


test.describe('Add New Contact', () => {

  test.use({ viewport: { width: 1000, height: 600 } });

  test.beforeAll(async ({ page }) => {
    pm = new PomManager(page)
    await pm.loginpage.gotoLoginPage();
    await pm.loginpage.login();
    await pm.homepage.dashboard();
    await pm.gotocontactpage.ContactPage();
  })

  test('Add new contact details in the Contact tab', async () => {
      await pm.addnewcontact.newcontactbutton();
      
    })

})
