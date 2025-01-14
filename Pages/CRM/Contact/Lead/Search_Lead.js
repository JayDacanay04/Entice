import { expect } from '@playwright/test';

export default class SearchLead {

  constructor(page) {
    this.page = page

  }


  // Locators
  SearchLead = () => this.page.getByRole('textbox', { name: 'Text to search...' });
  ClearSearch = () => this.page.getByLabel('Clear value');

  // Search Test Lead
  async searchtestlead() {
    await this.SearchLead().click();
    await this.SearchLead().fill('Test');
    await this.SearchLead().press('Enter');
    await this.SearchLead().fill('Kurtz');
    await this.SearchLead().press('Enter');
  }

  // Search Tes2 Lead
  async searchtes2lead() {
    await this.SearchLead().click();
    await this.SearchLead().fill('Tes2');
    await this.SearchLead().press('Enter');
  }
  
  // Search Mike Kurtz Lead
  async searchmikekurtzlead() {
    await this.SearchLead().click();
    await this.SearchLead().fill('Mike');
    await this.SearchLead().press('Enter');
    await this.ClearSearch().click();
  }

}  