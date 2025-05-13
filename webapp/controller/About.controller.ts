import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class About extends Controller {

    public async onConsultarAPI(): Promise<void> {
        const url = "/api-sunat/v1/tipo-cambio-sunat";
  
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            });
  
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
  
            const data = await response.json();
  
            // Asignar datos al modelo
            const oModel = new JSONModel(data);
            this.getView().setModel(oModel, "Sunat");
  
            MessageBox.information(`Tipo de cambio: Compra ${data.compra} | Venta ${data.venta}`);
  
        } catch (error) {
            console.error("Error al consultar API:", error);
            MessageBox.error("No se pudo consultar el servicio externo.");
        }
    }
}