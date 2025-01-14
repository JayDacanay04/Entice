import { expect } from '@playwright/test';

export default class AddNewStockItem {

  constructor(page) {
    this.page = page

  }


  // Common Locators
  ClickNewButton = () => this.page.getByRole('button', { name: 'New' });
  MainSaveandNewButton = () => this.page.getByRole('button', { name: 'Save and New' });
  SaveButton = () => this.page.getByRole('button', { name: 'Save changes' });
  SaveOptionsDropdown = () => this.page.getByRole('group', { name: 'Save and New Stock' }).getByLabel('More options');
  SaveandCloseButton = () => this.page.getByRole('button', { name: 'Save and Close' });
  CloseFormButton = () => this.page.getByLabel('Close', { exact: true });
  SaveChangesButton = () => this.page.getByRole('button', { name: 'Save changes' });
  DiscardChangesButton = () => this.page.getByRole('button', { name: 'Discard changes' });

  // Common Actions
  async newstockbutton() {
    await this.ClickNewButton().click();
  }

  async saveandclose() {
    await this.SaveOptionsDropdown().click();
    await this.SaveandCloseButton().click();
  }


  // Locators Item tab
  ItemNameTextbox = () => this.page.getByLabel("Item Name*");
  ClassTemplateDropdown = () => this.page.getByRole('combobox', { name: 'DEFAULT-STOCK Clear value' });
  StockClass = () => this.page.getByRole('option', { name: 'DEFAULT-STOCK' });
  ManufacturerDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Manufacturer' }).getByLabel('Open or close the drop-down');
  // SalesTaxOptionDropdown = () => this.page.getByRole('combobox', { name: 'Customer Open or close the' });
  SalesTaxOptionDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Sales Taxes' }).getByLabel('Open or close the drop-down');
  SalesTaxOption = () => this.page.getByRole('option', { name: 'Item' }).locator('span');
  MassWeightCheckbox = () => this.page.getByLabel('Is Use Net Mass Or Weight');
  SuppUnitsCheckbox = () => this.page.getByLabel('Is Supplementary Units Req');
  DontEarnPointsCheckbox = () => this.page.getByLabel('Dont Earn Points');
  ItemDescription = () => this.page.getByPlaceholder('Please enter a description');

  // Actions Item Tab
  async enterstockitemname() {
    await this.ItemNameTextbox().fill('GMS-100')
  }

  async selectclasstemplate() {
    await this.ClassTemplateDropdown().click();
    await this.StockClass().click();
  }

  // async selectstockmanufacturer() {
  //   await this.ManufacturerDropdown().click()
  // }

async salestaxoption() {
    await this.SalesTaxOptionDropdown().click();
    await this.SalesTaxOption().click();
  }


  async massweight() {
    await this.MassWeightCheckbox().check();
  }

  async supplementaryunits() {
    await this.SuppUnitsCheckbox().check();
  }

  async dontearnpoints() {
    await this.DontEarnPointsCheckbox().check();
  }

  // async itemdescription() {
  //   await this.ItemDescription()
  // }


  // Locators Taxation tab
  TaxationTab = () => this.page.getByText('Taxation').click();
  SalesTaxOptionDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Sales Tax Option' }).getByLabel('Open or close the drop-down');
  ItemSalesTaxOption = () => this.page.getByRole('list').locator('div').nth(0);
  PurchaseTaxOptionDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Purchase Tax Option' }).getByLabel('Open or close the drop-down');
  ItemPurchaseTaxOption = () => this.page.getByRole('list').locator('div').nth(0);

  // Actions Taxation Tab
  async taxationtab() {
    await this.TaxationTab();
  }

  async salestaxoption() {
    await this.SalesTaxOptionDropdown().click();
    await this.ItemSalesTaxOption().click();
  }

  async purchasetaxoption() {
    await this.PurchaseTaxOptionDropdown().click();
    await this.ItemPurchaseTaxOption().click();
  }


  // Locators Notes tab
  NotesTab = () => this.page.getByText('Notes').click();
  // NotesTextBox = () => this.page.getByRole('textbox', { name: 'Notes' }).click();
  EnterNotes = () => this.page.getByRole('textbox', { name: 'Notes' }).fill('notes');

  // Actions Notes Tab
  async enternotes() {
    await this.NotesTab();
    await this.EnterNotes();
  }


  // Locators Audit tab
  AuditTab = () => this.page.getByText('Audit', { exact: true });

  // Actions Audit Tab
  async audit() {
    await this.AuditTab().click();
  }


  // Locators Descriptions Tab
  DescriptionsTab = () => this.page.getByText('Descriptions', { exact: true });
  NewDescriptionButton = () => this.page.getByRole('button', { name: 'New', exact: true });
  LanguageDropdown = () => this.page.getByLabel('Inventory Item Description').getByLabel('Open or close the drop-down');
  // SelectLanguage = () => this.page.getByText('English - United States');
  Description = () => this.page.getByPlaceholder('Please enter a description');
  ExtendedDescription = () => this.page.getByLabel('Extended Description');
  DescriptionsTabCloseButton = () => this.page.getByLabel('Close', { exact: true });
  DiscardChangesButton = () => this.page.getByRole('button', { name: 'Discard changes' });
  DescriptionSaveButton = () => this.page.getByLabel('Inventory Item Description').getByRole('button', { name: 'Save', exact: true });

  // Actions Descriptions Tab
  async enterdescriptions() {
    await this.DescriptionsTab().click();
    await this.NewDescriptionButton().click();
    // await this.LanguageDropdown().click();
    // await this.SelectLanguage().click();
    await this.Description().click();
    await this.Description().fill('description');
    await this.ExtendedDescription().click();
    await this.ExtendedDescription().fill('extended description');
    await this.DescriptionSaveButton().click();
    // await this.DescriptionsTabCloseButton().click();
    // await this.DiscardChangesButton().click();
  }

  // Locators Unit Measures Tab
  UnitMeasuresTab = () => this.page.getByText('Unit Measures');
  NewUnitMeasuresButton = () => this.page.getByRole('button', { name: 'New', exact: true });
  UnitMeasureCode = () => this.page.getByLabel('Unit Measure Code');
  UnitMeasureQty = () => this.page.getByLabel('Unit Measure Qty');
  IsBaseCheckbox = () => this.page.getByLabel('Is Base');
  DefaultSellingCheckbox = () => this.page.getByLabel('Default Selling');
  WeightInKilograms = () => this.page.getByLabel('Weight In Kilograms', { exact: true });
  NetWeightInKilograms = () => this.page.getByLabel('Net Weight In Kilograms');
  WeightInPounds = () => this.page.getByLabel('Weight In Pounds', { exact: true });
  NetWeightInPounds = () => this.page.getByLabel('Net Weight In Pounds', { exact: true });
  LengthInInches = () => this.page.getByLabel('Length In Inches');
  LengthInCentimeter = () => this.page.getByLabel('Length In Centimeters');
  WidthInInches = () => this.page.getByLabel('Width In Inches');
  WidthInCentimeters = () => this.page.getByLabel('Width In Centimeters');
  HeightInInches = () => this.page.getByLabel('Height In Inches');
  HeightInCentimeters = () => this.page.getByLabel('Height In Centimeters');
  IsPrePackedCheckbox = () => this.page.getByLabel('Is Pre Packed');
  IsOverSized = () => this.page.getByLabel('Is Over Sized');
  OverSizedShippingMethod = () => this.page.getByLabel('Over Sized Shipping Method');
  UPCCode = () => this.page.getByLabel('UPCCode');
  UnitMeasuresTabCloseButton = () => this.page.getByLabel('Close', { exact: true });
  UnitMeasureSaveButton = () => this.page.getByRole('dialog').getByRole('button', { name: 'Save', exact: true });


  // Actions Unit Measures Tab
  async enterunitmeasures() {
    await this.UnitMeasuresTab().click();
    await this.page.waitForTimeout(2000);
    await this.NewUnitMeasuresButton().click();
    await this.UnitMeasureCode().fill('101');
    await this.UnitMeasureQty().fill('101');
    await this.IsBaseCheckbox().check();
    await this.DefaultSellingCheckbox().check();
    await this.WeightInKilograms().fill('101');
    await this.NetWeightInKilograms().fill('101');
    await this.WeightInPounds().fill('101');
    await this.NetWeightInPounds().fill('101');
    await this.LengthInInches().fill('101');
    await this.LengthInCentimeter().fill('101');
    await this.WidthInInches().fill('101');
    await this.WidthInCentimeters().fill('101');
    await this.HeightInInches().fill('101');
    await this.HeightInCentimeters().fill('101');
    await this.IsPrePackedCheckbox().check();
    await this.IsOverSized().check();
    await this.OverSizedShippingMethod().fill('101');
    await this.UPCCode().fill('101');
    await this.UnitMeasureSaveButton().click();
    // await this.UnitMeasuresTabCloseButton().click();
    // await this.DiscardChangesButton().click();
  }

  // Locators Accounts Tab
  AccountsTab = () => this.page.getByText('Accounts');
  NewAccountsButton = () => this.page.getByRole('button', { name: 'New', exact: true });
  AccountCode = () => this.page.getByLabel('Account Code');
  AccountCodeDropdown = () => this.page.getByRole('group', { name: 'Inventory Account' }).getByLabel('Open or close the drop-down');
  AccountsReceivable = () => this.page.getByText('Accounts Receivable');
  AccountsTabCloseButton = () => this.page.getByLabel('Close', { exact: true });
  AccountsSaveButton = () => this.page.getByRole('dialog').getByRole('button', { name: 'Save', exact: true });


  // Actions Accounts Tab
  async enteraccounts() {
    await this.AccountsTab().click();
    await this.page.waitForTimeout(2000);
    await this.NewAccountsButton().click();
    // await this.AccountCode().fill('101');
    await this.AccountCodeDropdown().click();
    await this.AccountsReceivable().click();
    await this.AccountsSaveButton().click();
    // await this.AccountsTabCloseButton().click();
    // await this.DiscardChangesButton().click();
  }


  // Locators Categories Tab
  CategoriesTab = () => this.page.getByText('Categories');
  NewCategoriesButton = () => this.page.getByRole('button', { name: 'New', exact: true });
  CategoryCode = () => this.page.getByLabel('Category Code');
  IsPrimaryCheckbox = () => this.page.getByLabel('Is Primary');
  CategoriesTabCloseButton = () => this.page.getByLabel('Close', { exact: true });
  CategoriesSaveButton = () => this.page.getByLabel('Inventory Category').getByRole('button', { name: 'Save', exact: true });


  // Actions Categories Tab
  async entercategories() {
    await this.CategoriesTab().click();
    await this.page.waitForTimeout(2000);
    await this.NewCategoriesButton().click();
    await this.CategoryCode().fill('101');
    await this.IsPrimaryCheckbox().check();
    await this.CategoriesSaveButton().click();
    // await this.CategoriesTabCloseButton().click();
    // await this.DiscardChangesButton().click();
  }


  // Locators Web Options Tab
  WebOptionsTab = () => this.page.getByText('Web Options');

  // Actions Web Options Tab
  async enterweboptions() {
    await this.WebOptionsTab().click();
  }


  // Locators Web Option Descriptions Tab
  WebOptionDescriptions = () => this.page.getByText('Web Option Descriptions');

  // Actions Web Option Descriptions Tab
  async enterweboptiondescriptions() {
    await this.WebOptionDescriptions().click();
  }


  // Locators Item Pricing Details Tab
  ItemPricingDetails = () => this.page.getByText('Item Pricing Details');
  NewItemPricingDetailsButton = () => this.page.getByRole('button', { name: 'New', exact: true });
  CurrencyCode = () => this.page.getByLabel('Currency Code');
  WholesalePrice = () => this.page.getByLabel('Wholesale Price', { exact: true });
  WholesalePriceRate = () => this.page.getByLabel('Wholesale Price Rate');
  RetailPrice = () => this.page.getByLabel('Retail Price', { exact: true });
  RetailPriceRate = () => this.page.getByLabel('Retail Price Rate');
  ItemPricingDetailsCloseButton = () => this.page.getByLabel('Close', { exact: true });
  ItemPricingDetailsSaveButton = () => this.page.getByRole('dialog').getByRole('button', { name: 'Save', exact: true });


  // Actions Item Pricing Details Tab
  async enteritempricingdetails() {
    await this.ItemPricingDetails().click();
    await this.page.waitForTimeout(2000);
    await this.NewItemPricingDetailsButton().click();
    await this.CurrencyCode().fill('1');
    await this.WholesalePrice().fill('1');
    await this.WholesalePriceRate().fill('1');
    await this.RetailPrice().fill('1');
    await this.RetailPriceRate().fill('1');
    await this.ItemPricingDetailsSaveButton().click();
    // await this.ItemPricingDetailsCloseButton().click();
    // await this.DiscardChangesButton().click();
  }

  // Locators Photo tab
  UploadPhoto = () => this.page.getByText('Photo');

  async uploadphoto() {
    await this.UploadPhoto().click();
  }


}