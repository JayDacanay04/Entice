import { expect } from '@playwright/test';

export default class CloneLead {

  constructor(page) {
    this.page = page

  }


  // Common Locators
  SaveandNewButton = () => this.page.getByRole('button', { name: 'Save and New' });
  SaveButton = () => this.page.getByRole('button', { name: 'Save changes' });
  SaveOptionsDropdown = () => this.page.getByRole('button', { name: 'More options' });
  SaveandCloseButton = () => this.page.getByRole('menuitemcheckbox', { name: 'Save and Close' });
  SaveChangesButton = () => this.page.getByRole('button', { name: 'Save changes' });
  DiscardChangesButton = () => this.page.getByRole('button', { name: 'Discard changes' });

  // Actions
  async viewlead() {
    await this.Lead().click();
  }
  
  async saveandclose() {
    await this.SaveOptionsDropdown().click();
    await this.SaveandCloseButton().click();
  }

  async saveandnew() {
    await this.SaveandNewButton().click();
  }

  async save() {
    await this.SaveButton().click();
  }

  // Locators
  CheckLead = () => this.page.getByRole('row', { name: 'Check box not checked Mike Kurtz' }).getByLabel('Check box not checked');
  Lead = () => this.page.getByRole('gridcell', { name: 'Mike Kurtz' });
  CloneButton = () => this.page.getByRole('button', { name: 'Clone...' });
  LeadName = () => this.page.getByLabel('Lead Name*');
  ClearLeadName = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Lead Name*' }).getByLabel('Clear value');
  FirstName = () => this.page.getByLabel('First Name*');
  ClearFirstName = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'First Name*' }).getByLabel('Clear value');
  LastName = () => this.page.getByLabel('Last Name*');
  ClearLastName = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Last Name*' }).getByLabel('Clear value');
  Email = () => this.page.getByLabel('Email*');
  ClearEmail = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Email*' }).getByLabel('Clear value');
  PhoneNumber = () => this.page.getByLabel('Phone Number*');
  BusinessTitle = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Business Title' }).getByLabel('Open or close the drop-down');
  SelectBusinessTitle = () => this.page.getByRole('cell', { name: 'CTO', exact: true });



  // Clone Lead List Actions
  async cloneleadlist() {
    await this.CheckLead().check();
    await this.CloneButton().click();
    await this.ClearLeadName();
    await this.LeadName().fill('Daniel Anderson');
    await this.ClearFirstName();
    await this.FirstName().fill('Daniel');
    await this.ClearLastName();
    await this.LastName().fill('Anderson');
    await this.ClearEmail();
    await this.Email().fill('DanielAnderson@rhyta.com');
    await this.PhoneNumber().fill('310-123-1234');
    await this.BusinessTitle().click();
    await this.SelectBusinessTitle().click();

  }
  

// Clone Lead Form Actions
  async cloneleadform() {
    await this.Lead().click();
    await this.CloneButton().click();
    await this.ClearLeadName();
    await this.LeadName().fill('Daniel Anderson');
    await this.ClearFirstName();
    await this.FirstName().fill('Daniel');
    await this.ClearLastName();
    await this.LastName().fill('Anderson');
    await this.ClearEmail();
    await this.Email().fill('DanielAnderson@rhyta.com');
    await this.PhoneNumber().fill('310-123-1234');
    await this.BusinessTitle().click();
    await this.SelectBusinessTitle().click();

  }


}  