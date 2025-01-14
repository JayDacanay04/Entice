import { expect } from '@playwright/test';

export default class DeleteLead {

  constructor(page) {
    this.page = page

  }


  // Locators
  Lead = () => this.page.getByRole('gridcell', { name: 'Carol Smith Tan' });
  CheckLead = () => this.page.getByRole('row', { name: 'Check box not checked Carol' }).getByLabel('Check box not checked');
  DeleteLead = () => this.page.getByRole('button', { name: 'Delete' });
  ConfirmDeleteLead = () => this.page.getByRole('button', { name: 'Yes' });
  DeleteLeadButton = () => this.page.getByRole('button', { name: 'Delete' });

  // Common Actions
  async viewlead() {
    await this.Lead().click();
  }
  
  // Delete Lead in List View
  async deleteleadlistview() {
    await this.CheckLead().check();
    await this.DeleteLead().click();
    await this.ConfirmDeleteLead().click();
  }

  //Delete Lead in Lead Form
  async deleteleadform() {
    await this.DeleteLead().click();
    await this.ConfirmDeleteLead().click();
  }

}  