import { expect } from '@playwright/test';

export default class UpdateNewLead {

  constructor(page) {
    this.page = page

  }


  // Locators
  Lead = () => this.page.getByRole('gridcell', { name: 'Carolyn Smith' });
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


  // Locators Lead tab
  LeadName = () => this.page.getByLabel('Lead Name*');
  ClearLeadName = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Lead Name*' }).getByLabel('Clear value');
  FirstName = () => this.page.getByLabel('First Name*');
  ClearFirstName = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'First Name*' }).getByLabel('Clear value');
  LastName = () => this.page.getByLabel('Last Name*');
  ClearLastName = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Last Name*' }).getByLabel('Clear value');
  Email = () => this.page.getByLabel('Email*');
  ClearEmail = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Email*' }).getByLabel('Clear value');
  PhoneNumber = () => this.page.getByLabel('Phone Number*');
  ClearPhoneNumber = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Phone Number*' }).getByLabel('Clear value');
  Country = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Country* Australia' }).getByLabel('Find');
  SearchCountry = () => this.page.getByRole('textbox', { name: 'Text to search...' });
  SelectCountry = () => this.page.getByRole('gridcell', { name: 'United States of America' });
  // AddressType = () => this.page.locator('#id58796cf4-7032-4f2d-abe2-587281ab8051').getByLabel('Open or close the drop-down');
  PostalCode = () => this.page.getByLabel('Postal Code');
  ClearPostalCode = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Postal Code' }).getByLabel('Clear value');
  Address = () => this.page.getByLabel('Address');
  ClearAddress = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Address' }).getByLabel('Clear value');
  BusinessTitle = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Business Title' }).getByLabel('Open or close the drop-down');
  SelectBusinessTitle = () => this.page.getByRole('cell', { name: 'CEO', exact: true });
  JobRole = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Job Role' }).getByLabel('Open or close the drop-down');
  SelectJobRole = () => this.page.getByRole('cell', { name: 'Operations' }).first();
  AssignedTo = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Assigned To' }).getByLabel('Find');
  SelectAssignedTo = () => this.page.getByRole('gridcell', { name: 'Email Admin User', exact: true });
  Department = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Department' }).getByLabel('Open or close the drop-down');
  SelectDepartment = () => this.page.getByRole('cell', { name: 'Engineering' }).nth(1);
  // Territory = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Territory' }).getByLabel('Open or close the drop-down');
  Team = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Team' }).getByLabel('Open or close the drop-down');
  SelectTeam = () => this.page.getByRole('cell', { name: 'Production', exact: true });
  Source = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Source' }).getByLabel('Find');
  SelectSource = () => this.page.getByRole('gridcell', { name: 'Advertisement' }).first();
  SalesRep = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Sales Rep' }).getByLabel('Open or close the drop-down');
  SelectSalesRep = () => this.page.getByRole('cell', { name: 'REP-000001' });


  // Actions Lead tab
  async updateleaddetails() {
    await this.ClearLeadName();
    await this.LeadName().fill('Carol Smith Tan');
    await this.ClearFirstName();
    await this.FirstName().fill('Carol');
    await this.ClearLastName();
    await this.LastName().fill('Tan');
    await this.ClearEmail();
    await this.Email().fill('carolsmithtan@gmail.com');
    await this.PhoneNumber().fill('310-845-1234');
    await this.Country().click();
    await this.SearchCountry().fill('united states');
    await this.SearchCountry().press('Enter');
    await this.SelectCountry().click();
  //   // await this.AddressType().click();
    await this.ClearPostalCode().click();
    await this.PostalCode().fill('57201');
    await this.ClearAddress();
    await this.Address().fill('3939 Leroy Lane Watertown, SD 57201');
    await this.BusinessTitle().click();
    await this.SelectBusinessTitle().click();
    await this.JobRole().click();
    await this.SelectJobRole().click();
    await this.AssignedTo().click();
    await this.SelectAssignedTo().click();
    await this.Department().click();
    await this.SelectDepartment().click();
  //   // await this.Territory().click();
    await this.Team().click();
    await this.SelectTeam().click();
    await this.Source().click();
    await this.SelectSource().click();
    await this.SalesRep().click();
    await this.SelectSalesRep().click();
    await this.page.getByLabel('Is Active').uncheck();

  }



}  