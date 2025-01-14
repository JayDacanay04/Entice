import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://entice.demostore1.com/EnticeLoginPage?ReturnUrl=%2F');
    await expect(page.getByRole('button', { name: 'Log In' })).toBeEnabled();
    await page.getByLabel('User Name').fill('admin');
    await page.getByLabel('Password').fill('admin');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.goto('https://entice.demostore1.com/CRMContactCustomer_ListView');
    await page.getByRole('treeitem', { name: 'Inventory' }).locator('div').nth(4).click();
    await page.getByRole('treeitem', { name: 'Item' }).click();
    await page.getByRole('treeitem', { name: 'Stock', exact: true }).click();
});