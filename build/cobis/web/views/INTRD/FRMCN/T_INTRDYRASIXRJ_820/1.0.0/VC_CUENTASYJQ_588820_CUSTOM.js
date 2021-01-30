/* variables locales de T_INTRDYRASIXRJ_820*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.formulariocuentas;
    

    //"TaskId": "T_INTRDYRASIXRJ_820"


    	

//Entity: CuentaOrigen
//CuentaOrigen. (Button) View: FormularioCuentas
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONARHWFJE_729138 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    if(entities.CuentaOrigen.valor < entities.CuentaOrigen.saldo){
        entities.CuentaOrigen.saldo =  entities.CuentaOrigen.saldo - entities.CuentaOrigen.valor;
        entities.CuentaDestino.saldo =  entities.CuentaDestino.saldo + entities.CuentaOrigen.valor;
       // success message
        executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("Transferencia realizada con éxito!");
    }else{
        // error message
        executeCommandEventArgs.commons.messageHandler.showMessagesError("El saldo es insuficiente");
    }

};

	
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormularioCuentas
task.initData.VC_CUENTASYJQ_588820 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    // Inicialización de valores
    entities.CuentaOrigen.numeroCuenta =  "CTA_001";
    entities.CuentaDestino.numeroCuenta = "CTA_002";
    
    entities.CuentaOrigen.saldo =  2000;
    entities.CuentaDestino.saldo = 1000;
  
    // Deshabilitar funciones
    initDataEventArgs.commons.api.viewState.disable("VA_NUMEROCUENTAPEG_838138");
    initDataEventArgs.commons.api.viewState.disable("VA_SALDODTNACDJKJT_612138");
    
    initDataEventArgs.commons.api.viewState.disable("VA_NUMEROCUENTALTY_240138");
    initDataEventArgs.commons.api.viewState.disable("VA_SALDOIUBRBZZOLS_353138");

};



}));
