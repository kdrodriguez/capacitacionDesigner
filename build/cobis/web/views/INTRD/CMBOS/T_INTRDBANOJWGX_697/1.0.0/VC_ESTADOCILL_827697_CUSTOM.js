/* variables locales de T_INTRDBANOJWGX_697*/

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

    
        var task = designerEvents.api.formestadocivil;
    

    //"TaskId": "T_INTRDBANOJWGX_697"


    	

//Entity: EstadoCivil
//EstadoCivil.estado (ComboBox) View: FormEstadoCivil
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_1XUTPEYPFGUZPIU_580531 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
     
    var estado = entities.EstadoCivil.estado;
    
    if(estado=="ESTADO_1"){
        changedEventArgs.commons.api.viewState.show('G_ESTADOCVII_743531');
        entities.InfoEstadoCivil.estadoCivil = "Soltero";
        entities.InfoEstadoCivil.actividadActual = "Listo para la farra" ;
    } else if(estado=="ESTADO_2"){
        changedEventArgs.commons.api.viewState.show('G_ESTADOCVII_743531');
        entities.InfoEstadoCivil.estadoCivil = "Casado";
        entities.InfoEstadoCivil.actividadActual = "Lavando los platos" ;
    }else{
        changedEventArgs.commons.api.viewState.hide('G_ESTADOCVII_743531');
    }

};

	

//Entity: EstadoCivil
//EstadoCivil. (Button) View: FormEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONRWZNVTL_473531 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.api.viewState.hide('G_ESTADOCVII_743531');
    
    entities.EstadoCivil.estado = "ESTADO_0";
    
    executeCommandEventArgs.commons.execServer = false;

};

	
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormEstadoCivil
task.initData.VC_ESTADOCILL_827697 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    entities.EstadoCivil.estado = "ESTADO_0";
    

};

	
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormEstadoCivil
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    
    renderEventArgs.commons.api.viewState.hide('G_ESTADOCVII_743531');
    
    entities.EstadoCivil.estado = "ESTADO_0";

};



}));
