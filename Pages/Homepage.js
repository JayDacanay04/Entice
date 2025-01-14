import { expect } from '@playwright/test'

export default class Homepage {
    constructor(page) {
        this.page = page
    }

    // Actions
    async dashboard() {
        await expect(this.page.getByRole('treeitem', { name: 'Dashboard' })).toBeVisible();
    }

    async GotoHomepage() {
        await this.page.goto('https://entice.demostore1.com/CRMContactCustomer_ListView');
    }
}