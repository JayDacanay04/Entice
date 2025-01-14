import { expect } from '@playwright/test';

export default class UpdateStockItem {

  constructor(page) {
    this.page = page
    this.newbutton = page.getByRole('button', { name: 'Log In' })

  }

  // Common Locators
  CloseFormButton = () => this.page.getByLabel('Close', { exact: true });
  ClickStockItem = () => this.page.getByRole('gridcell', { name: 'GMS-1000' });

  // Common Actions
  async stockitem() {
    await this.ClickStockItem().click();
  }

  // Locators Item tab
  ItemTab = () => this.page.getByLabel("Item");
  ItemNameTextbox = () => this.page.getByLabel("Item Name*");
  StatusDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Status' }).getByLabel('Open or close the drop-down');
  DiscontinuedStatus = () => this.page.getByText('Discontinued');
  ClassTemplateDropdown = () => this.page.getByRole('button', { name: 'Open or close the drop-down' }).nth(1);
  StockClass = () => this.page.getByText('DEFAULT-SERVICE');
  GLClassTemplateDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'GL Class Template*' }).getByLabel('Open or close the drop-down');
  StockGLClass = () => this.page.getByText('DEFAULT-STOCK');
  ManufacturerDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Manufacturer' }).getByLabel('Open or close the drop-down');
  MassWeightCheckbox = () => this.page.getByLabel('Is Use Net Mass Or Weight');
  SuppUnitsCheckbox = () => this.page.getByLabel('Is Supplementary Units Req');
  DontEarnPointsCheckbox = () => this.page.getByLabel('Dont Earn Points');
  // ItemDescription = () => this.page.getByPlaceholder('sample item description');

  // Actions Item Tab
async itemtab() {
  await this.ItemTab();
}

    async stockitemname() {
    await this.ItemNameTextbox().fill('GMS-100')
  }

  async selectstatus() {
    await this.StatusDropdown().click();
    await this.DiscontinuedStatus().click();
  }

  async selectclasstemplate() {
    await this.ClassTemplateDropdown().click();
    await this.StockClass().click();
  }

  async selectglclasstemplate() {
    await this.GLClassTemplateDropdown().click();
    await this.StockGLClass().click();
  }

  async selectstockmanufacturer() {
    await this.ManufacturerDropdown().click()
  }

  async massweight() {
    await this.MassWeightCheckbox().uncheck();
  }

  async supplementaryunits() {
    await this.SuppUnitsCheckbox().uncheck();
  }

  async dontearnpoints() {
    await this.DontEarnPointsCheckbox().uncheck();
  }

  // async itemdescription() {
  //   await this.ItemDescription()
  // }


  // Locators Taxation tab
  TaxationTab = () => this.page.getByText('Taxation').click();
  SalesTaxOptionDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Sales Tax Option' }).getByLabel('Open or close the drop-down');
  ItemSalesTaxOption = () => this.page.getByRole('list').locator('div').nth(1);
  PurchaseTaxOptionDropdown = () => this.page.locator('dxbl-form-layout-item').filter({ hasText: 'Purchase Tax Option' }).getByLabel('Open or close the drop-down');
  ItemPurchaseTaxOption = () => this.page.getByRole('list').locator('div').nth(1);

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
  EnterNotes = () => this.page.getByRole('textbox', { name: 'Notes' }).fill('updated notes');

  // Actions Notes Tab
  async notes() {
    await this.NotesTab();
    await this.EnterNotes();
  }


  // Locators Audit tab
  AuditTab = () => this.page.getByText('Audit', { exact: true });

  // Actions Audit Tab
  async audit() {
    await this.AuditTab().click();
  }



  // await page.getByRole('gridcell', { name: 'sample item description' }).click();
  //   await page.getByLabel('Inventory Item Description').getByLabel('Open or close the drop-down').click();
  //   await page.getByText('English - Philippines').click();
  //   await page.getByRole('button', { name: 'Cancel' }).click();
    // await page.getByRole('treeitem', { name: 'Stock', exact: true }).click();
    // await page.getByRole('button', { name: 'Discard changes' }).click();


  // Locators Descriptions Tab
  DescriptionsTab = () => this.page.getByText('Descriptions', { exact: true });
  ItemDescription = () => this.page.getByRole('gridcell', { name: 'sample item description' });
  LanguageDropdown = () => this.page.getByLabel('Inventory Item Description').getByLabel('Open or close the drop-down');
  // SelectLanguage = () => this.page.getByText('English - United States');
  Description = () => this.page.getByPlaceholder('Please enter a description');
  ExtendedDescription = () => this.page.getByLabel('Extended Description');
  DescriptionsTabCloseButton = () => this.page.getByLabel('Close', { exact: true });
  DiscardChangesButton = () => this.page.getByRole('button', { name: 'Discard changes' });

  // Actions Descriptions Tab
  async descriptions() {
    await this.DescriptionsTab().click();
    //   await this.newbutton.waitFor({
    //     state: "visible"
    // })
    await this.ItemDescription().click();
    // await this.LanguageDropdown().click();
    // await this.SelectLanguage().click();
    await this.Description().fill('updated description');
    await this.ExtendedDescription().fill('updated extended description');
    await this.DescriptionsTabCloseButton().click();
    await this.DiscardChangesButton().click();
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


  // Actions Unit Measures Tab
  async enterunitmeasures() {
    await this.UnitMeasuresTab().click();
    // await expect(this.page.getByRole('button', { name: 'Log In' })).toBeEnabled();
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
    await this.UnitMeasuresTabCloseButton().click();
    await this.DiscardChangesButton().click();
  }

  // Locators Accounts Tab
  AccountsTab = () => this.page.getByText('Accounts');
  NewAccountsButton = () => this.page.getByRole('button', { name: 'New', exact: true });
  AccountCode = () => this.page.getByLabel('Account Code');
  AccountCodeDropdown = () => this.page.getByLabel('Account Code*').getByLabel('Open or close the drop-down');
  AccountsReceivable = () => this.page.getByText('Accounts Receivable');
  AccountsTabCloseButton = () => this.page.getByLabel('Close', { exact: true });


  // Actions Accounts Tab
  async enteraccounts() {
    await this.AccountsTab().click();
    await this.NewAccountsButton().click();
    await this.AccountCode().fill('101');
    // await this.AccountCodeDropdown().click();
    // await this.AccountsReceivable().click();
    await this.AccountsTabCloseButton().click();
    await this.DiscardChangesButton().click();
  }


  // Locators Categories Tab
  CategoriesTab = () => this.page.getByText('Categories');
  NewCategoriesButton = () => this.page.getByRole('button', { name: 'New', exact: true });
  CategoryCode = () => this.page.getByLabel('Category Code');
  IsPrimaryCheckbox = () => this.page.getByLabel('Is Primary');
  CategoriesTabCloseButton = () => this.page.getByLabel('Close', { exact: true });


  // Actions Categories Tab
  async entercategories() {
    await this.CategoriesTab().click();
    await this.NewCategoriesButton().click();
    await this.CategoryCode().fill('101');
    await this.IsPrimaryCheckbox().check();
    await this.CategoriesTabCloseButton().click();
    await this.DiscardChangesButton().click();
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


  // Actions Item Pricing Details Tab
  async enteritempricingdetails() {
    await this.ItemPricingDetails().click();
    await this.NewItemPricingDetailsButton().click();
    await this.CurrencyCode().fill('1');
    await this.WholesalePrice().fill('1');
    await this.WholesalePriceRate().fill('1');
    await this.RetailPrice().fill('1');
    await this.RetailPriceRate().fill('1');
    await this.ItemPricingDetailsCloseButton().click();
    await this.DiscardChangesButton().click();
  }


}