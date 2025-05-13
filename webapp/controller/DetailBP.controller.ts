import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent"; 
import Event from "sap/ui/base/Event"; 
import Router from "sap/ui/core/routing/Router";
import MessageToast from "sap/m/MessageToast";
import MessageBox from "sap/m/MessageBox";
import Input from "sap/m/Input";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
export default class DetailBP extends Controller {
    onInit(): void {
        const oRouter1 = (this.getOwnerComponent()as UIComponent).
        getRouter() as Router;
        oRouter1.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);

      
      }
      public async onActualizarEmpleado(): Promise<void> {
        const oInput = this.byId("inpEmpleado") as Input;
        const sNuevoValor = oInput.getValue();
    
        const oContext = oInput.getBindingContext();
        if (oContext) {
          if (!oContext) {
            MessageBox.error("No se encontró el contexto de datos");
            return;
        }
    
       
    // 2. Obtener el modelo OData V4
    const oModel = oContext.getModel() as ODataModel;
     // 1. Actualizar el valor localmente
     const sPath = oContext.getPath();

     const oEditableContext = oModel.bindContext(sPath, null, {
      $$updateGroupId: "MyUpdateGroup"
  }).getBoundContext(); // <-- Context editable

  oEditableContext.setProperty("Phone1", sNuevoValor);
    // 3. Enviar cambios usando submitBatch (método correcto para Service Layer)
    oModel.submitBatch("MyUpdateGroup")
        .then(() => {
            MessageToast.show("Empleado actualizado correctamente");
            //oContext.refresh(); // Refrescar datos desde el servidor
        })
        .catch((err) => {
            MessageBox.error("Error al actualizar: " + err.message);
            console.error("Detalle del error:", err);
        });

        
        }
    }
  
      private _onObjectMatched(oEvent:  any): void {
        const oArguments = oEvent.getParameter("arguments" ) as { id: string };  // Casting explícito
        const sId = oArguments?.id; 
        const oView = this.getView();
        oView.bindElement({
          path: `/BusinessPartners('${sId}')`,
          parameters: {
            // OData V4 necesita esto para forzar el fetch
            $$updateGroupId: "detailGroup"
          }
        });
      }
}