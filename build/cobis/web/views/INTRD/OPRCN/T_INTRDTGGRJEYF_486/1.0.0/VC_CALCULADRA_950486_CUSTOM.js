/* variables locales de T_INTRDTGGRJEYF_486*/

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

    
        var task = designerEvents.api.calculadora;
    

    //"TaskId": "T_INTRDTGGRJEYF_486"


    	

//Entity: Suma
//Suma. (Button) View: Calculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONRBYOMYH_890583 = function(  entities, executeCommandEventArgs ) {

    entities.Suma.numero1 = ""; 
    entities.Suma.numero2 = "";
    entities.Suma.resultado = "";
    
    executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONRBYOMYH_890583');
    
    // Mensaje de exito
    executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("Cleaned");
    
    
    executeCommandEventArgs.commons.execServer = false;

};

	

//Entity: Suma
//Suma. (Button) View: Calculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONZYRCTVT_165583 = function(  entities, executeCommandEventArgs ) {
    
    entities.Suma.resultado = entities.Suma.numero1 + entities.Suma.numero2;
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONRBYOMYH_890583');
    
    executeCommandEventArgs.commons.execServer = false;

};



}));
