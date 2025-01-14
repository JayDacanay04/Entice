import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { GotoStockPage } from '../Pages/Inventory/Stock/GotoStockPage';
import { NewStockButton } from '../Pages/Inventory/Stock/Add_New_Stock_Button';
// import { AddNewStockItemName } from '../Pages/Inventory/Stock/Add_New_Stock_Item_Name';
import { AddNewStockManufacturer } from '../Pages/Inventory/Stock/Select_Stock_Manufacturer';

test('Select Stock Manufacturer', async ({ page }) => {

  const Login = new LoginPage(page)
  const stockPage = new GotoStockPage(page)
  const newstockbutton = new NewStockButton(page)
  const addnewstockmanufacturer = new AddNewStockManufacturer(page)

  await Login.gotoLoginPage()
  await Login.login()
  await stockPage.StockPage()
  await newstockbutton.ClickNewButton()
  await addnewstockmanufacturer.StockManufacturer()
  
});