import { expect } from '@playwright/test';

export default class ViewNewLead {

  constructor(page) {
    this.page = page

  }


  // Locators
  Lead = () => this.page.getByRole('gridcell', { name: 'Carolyn Smith' });

  // Common Actions
  async viewlead() {
    await this.Lead().click();
  }
  

}  