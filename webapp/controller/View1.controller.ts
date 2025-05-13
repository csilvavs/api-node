import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import UIComponent from "sap/ui/core/UIComponent"; 
import List from "sap/m/List";
import ListBinding from "sap/ui/model/ListBinding";
import MessageBox from "sap/m/MessageBox";
/**
 * @namespace vs.project3.controller
 */
export default class View1 extends Controller {
    private iSkip = 0;
    private iTop = 2;
    private sLastQuery = "";
    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
       this.loadItems();
    }
    private loadItems(append = false): void {
        const oList = this.byId("bpList") as List;
        const oBinding = oList.getBinding("items") as ListBinding;

        const aFilters = this.sLastQuery
            ? [new Filter("CardName", FilterOperator.Contains, this.sLastQuery)]
            : [];

    /*    oBinding.changeParameters({
            "$skip": this.iSkip.toString(),
            "$top": this.iTop.toString()
        });*/
        if (oBinding) {
        oBinding.filter(aFilters, "Application");}
    }
    public onSearch(oEvent: any): void {
        const sQuery = oEvent.getSource().getValue();
        const oList = this.byId("bpList") as List;
        const oBinding = oList.getBinding("items") as ListBinding;

        if (oBinding) {
            const aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("CardName", FilterOperator.Contains, sQuery));
            }

            oBinding.filter(aFilters, "Application");
        }
    }
      public onLoadMore(): void {
        this.iSkip += this.iTop;
        this.loadItems(true);
      }
      public onVerDetalle(oEvent: any): void {
        const oContext = oEvent.getSource().getBindingContext();
        const sId = oContext?.getProperty("CardCode");
        
        const oRouter1 = this.getOwnerComponent() as UIComponent;
        
        const oRouter=oRouter1.getRouter();
       
        oRouter.navTo("Detail", { id: sId });
    }
  
}