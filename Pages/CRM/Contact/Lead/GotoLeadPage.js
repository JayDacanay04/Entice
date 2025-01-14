import { expect } from '@playwright/test';

export default class GotoLeadPage {
  constructor(page) {
    this.page = page
  }

  // Actions
  async LeadPage() {
    await expect(this.page).toHaveTitle("Contact - Entice")
    await this.page.getByRole('treeitem', { name: 'Contact' }).click();
    await this.page.getByRole('treeitem', { name: 'Lead', exact: true }).click();
  }

}
