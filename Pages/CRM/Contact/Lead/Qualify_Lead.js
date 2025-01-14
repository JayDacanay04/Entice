import { expect } from '@playwright/test';

export default class QualifyLead {

  constructor(page) {
    this.page = page

  }


  // Locators
  Lead = () => this.page.getByRole('gridcell', { name: 'Daniel Anderson' });
  QualifyButton = () => this.page.getByRole('button', { name: 'Qualify' });
  OKButton = () => this.page.getByRole('button', { name: 'OK' });
  CancelButton = () => this.page.getByRole('button', { name: 'Cancel' });

  // Common Actions
  async qualifylead() {
    await this.Lead().click();
    await this.QualifyButton().click();
    await this.OKButton().click();


  }
  

}  