import LoginPage from "./LoginPage.js";
import Homepage from "./Homepage.js";
import GotoStockPage from "./Inventory/Stock/GotoStockPage.js";
import AddNewStockItem from "./Inventory/Stock/Add_New_Stock_Item.js";
import UpdateStockItem from "./Inventory/Stock/Update_Stock_Item.js";
import ViewNewStockItem from "./Inventory/Stock/View_New_Stock_Item.js";
import DeleteStockItem from "./Inventory/Stock/Delete_Stock_Item.js";
import GotoContactPage from "./CRM/Contact/GotoContactPage.js";
import AddNewContact from "./CRM/Contact/Add_New_Contact.js";
import GotoLeadPage from "./CRM/Contact/Lead/GotoLeadPage.js";
import AddNewLead from "./CRM/Contact/Lead/Add_New_Lead.js";
import ViewNewLead from "./CRM/Contact/Lead/View_New_Lead.js";
import UpdateNewLead from "./CRM/Contact/Lead/Update_New_Lead.js";
import DeleteLead from "./CRM/Contact/Lead/Delete_Lead.js";
import CloneLead from "./CRM/Contact/Lead/Clone_Lead.js";
import QualifyLead from "./CRM/Contact/Lead/Qualify_Lead.js";
import SearchLead from "./CRM/Contact/Lead/Search_Lead.js";



export default class PomManager {
    constructor(page) {
        this.page = page;
        this.loginpage = new LoginPage(page);
        this.homepage = new Homepage(page);
        this.gotostockpage = new GotoStockPage(page);
        this.addnewstockitem = new AddNewStockItem(page);
        this.updatestockitem = new UpdateStockItem(page);
        this.viewnewstockitem = new ViewNewStockItem(page);
        this.deletestockitem = new DeleteStockItem(page);
        this.gotocontactpage = new GotoContactPage(page);
        this.addnewcontact = new AddNewContact(page);
        this.gotoleadpage = new GotoLeadPage(page);
        this.addnewlead = new AddNewLead(page);
        this.viewlead = new ViewNewLead(page);
        this.updatelead = new UpdateNewLead(page);
        this.deletelead = new DeleteLead(page);
        this.clonelead = new CloneLead(page);
        this.qualifylead = new QualifyLead(page);
        this.searchlead = new SearchLead(page);

    }
}