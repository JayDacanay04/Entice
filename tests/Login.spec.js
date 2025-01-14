import { test, expect } from '@playwright/test'
import PomManager from '../Pages/PomManager.js'

let pm;

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    pm = new PomManager (page)
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Login with valid credentials', async () => {
    await pm.loginpage.gotoLoginPage();
    await pm.loginpage.login();
    await pm.homepage.dashboard();
  })

})