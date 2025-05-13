import ToolPage from "sap/tnt/ToolPage";
import Controller from "sap/ui/core/mvc/Controller";
import Router from "sap/ui/core/routing/Router";
import UIComponent from "sap/ui/core/UIComponent";
/**
 * @namespace vs.project3.controller
 */
export default class App extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }
   public onToggleMenu():void {
        const oToolPage = this.byId("toolPage") as ToolPage;
        if(oToolPage==null)return; 
        oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
      }
  
      public onItemSelect (oEvent):void {
        const sKey = oEvent.getParameter("item").getKey();
      
        const oRouter = ((this.getOwnerComponent() as UIComponent).getRouter() as Router);
        oRouter.navTo(sKey);
      }
}