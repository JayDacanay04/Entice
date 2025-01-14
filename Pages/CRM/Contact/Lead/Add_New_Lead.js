import { expect } from '@playwright/test';

export default class AddNewLead {

  constructor(page) {
    this.page = page

  }


  // Common Locators
  ClickNewButton = () => this.page.getByRole('button', { name: 'New' });
  SaveandNewButton = () => this.page.getByRole('button', { name: 'Save and New' });
  SaveButton = () => this.page.getByRole('button', { name: 'Save changes' });
  SaveOptionsDropdown = () => this.page.getByRole('button', { name: 'More options' });
  SaveandCloseButton = () => this.page.getByRole('menuitemcheckbox', { name: 'Save and Close' });
  SaveChangesButton = () => this.page.getByRole('button', { name: 'Save changes' });
  DiscardChangesButton = () => this.page.getByRole('button', { name: 'Discard changes' });

  // Common Actions
  async newcontactbutton() {
    await this.ClickNewButton().click();
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
  

  // Locators Lead tab
  LeadName = () => this.page.getByLabel('Lead Name*');
  FirstName = () => this.page.getByLabel('First Name*');
  LastName = () => this.page.getByLabel('Last Name*');
  Email = () => this.page.getByLabel('Email*');
  PhoneNumber = () => this.page.getByLabel('Phone Number*');
  Country = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Country* United States of' }).getByLabel('Find');
  SelectCountry = () => this.page.getByRole('gridcell', { name: 'Australia' });
  AddressType = () => this.page.locator('#id58796cf4-7032-4f2d-abe2-587281ab8051').getByLabel('Open or close the drop-down');
  PostalCode = () => this.page.getByLabel('Postal Code');
  Address = () => this.page.getByLabel('Address');
  BusinessTitle = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Business Title' }).getByLabel('Open or close the drop-down');
  SelectBusinessTitle = () => this.page.getByRole('cell', { name: 'CTO', exact: true });
  JobRole = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Job Role' }).getByLabel('Open or close the drop-down');
  SelectJobRole = () => this.page.getByRole('cell', { name: 'Administration' }).first();
  AssignedTo = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Assigned To' }).getByLabel('Find');
  SelectAssignedTo = () => this.page.getByRole('gridcell', { name: 'Admin User', exact: true });
  Department = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Department' }).getByLabel('Open or close the drop-down');
  SelectDepartment = () => this.page.getByRole('cell', { name: 'Admin' }).nth(1);
  Territory = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Territory' }).getByLabel('Open or close the drop-down');
  Team = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Team' }).getByLabel('Open or close the drop-down');
  SelectTeam = () => this.page.getByRole('cell', { name: 'Administration', exact: true });
  Source = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Source' }).getByLabel('Find');
  SelectSource = () => this.page.getByRole('gridcell', { name: 'Brochure' }).first();
  SalesRep = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Sales Rep' }).getByLabel('Open or close the drop-down');
  SelectSalesRep = () => this.page.getByRole('cell', { name: 'REP-000002' });


  // Actions Lead tab
  async enterleaddetails() {
    await this.LeadName().fill('Carolyn Smith');
    await this.FirstName().fill('Carolyn');
    await this.LastName().fill('Smith');
    await this.Email().fill('carolynsmith@gmail.com');
    await this.PhoneNumber().fill('310-845-7824');
    await this.Country().click();
    await this.SelectCountry().click();
    // await this.AddressType().click();
    await this.PostalCode().fill('90232');
    await this.Address().fill('4583 Meadowbrook Mall Road');
    await this.BusinessTitle().click();
    await this.SelectBusinessTitle().click();
    await this.JobRole().click();
    await this.SelectJobRole().click();
    await this.AssignedTo().click();
    await this.SelectAssignedTo().click();
    await this.Department().click();
    await this.SelectDepartment().click();
    // await this.Territory().click();
    await this.Team().click();
    await this.SelectTeam().click();
    await this.Source().click();
    await this.SelectSource().click();
    await this.SalesRep().click();
    await this.SelectSalesRep().click();
    await this.page.getByLabel('Is Active').uncheck();
    await this.page.getByLabel('Is Active').check();

  

  }

}  