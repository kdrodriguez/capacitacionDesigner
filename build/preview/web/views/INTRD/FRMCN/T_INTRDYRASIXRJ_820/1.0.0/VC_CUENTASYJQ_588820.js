//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formulariocuentas = designerEvents.api.formulariocuentas || designer.dsgEvents();
function VC_CUENTASYJQ_588820(cobisMainModule) {
cobisMainModule.controllerProvider.register("VC_CUENTASYJQ_588820_MAIN_CTRL", ["$scope", "breadcrumbs",
function($scope, breadcrumbs) {
$scope.breadcrumbs = breadcrumbs;
}]);
cobisMainModule.controllerProvider.register("VC_CUENTASYJQ_588820_CTRL", ["cobisMessage", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",
function(cobisMessage, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
$scope.designer = designer;
$scope.validatorOptions = validatorOptions;
$scope.vc = designer.initViewContainer({
moduleId: "INTRD",
subModuleId: "FRMCN",
taskId: "T_INTRDYRASIXRJ_820",
taskVersion: "1.0.0",
viewContainerId: "VC_CUENTASYJQ_588820",
hasCloseModalEvent: false,
serverEvents: false},
"/CTSProxy/services/resources/INTRD/FRMCN/T_INTRDYRASIXRJ_820",
designerEvents.api.formulariocuentas,
$scope.rowData );
$scope.kendo = kendo;
//Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
$scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
$scope.dateFormat = 'yyyy/MM/dd';
$scope.dateFormatPlaceholder = $scope.dateFormat;
$scope.vc.routeProvider = cobisMainModule.routeProvider;
if (!$scope.vc.loaded) {
var page = {
hasTemporaryDataSupport: false,
hasInitDataSupport: true,
hasChangeInitDataSupport: false,
hasSearchRenderEvent: false,
ejecTemporaryData: false,
ejecInitData: false,
ejecChangeInitData: false,
ejecSearchRenderEvent: false,
hasTemporaryData: false,
hasInitData: false,
hasChangeInitData: false,
hasCRUDSupport: false,
vcName: 'VC_CUENTASYJQ_588820'
};
if(typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined'){
$scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
$scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
} else {
//CobisPattern no definido en framework de Designer como constante. Actualizar Framework
$scope.vc.cobisPattern = 0;
$scope.vc.isConsolidateView = false;
}
if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
$scope.vc.pk = $scope.queryParameters.pk;
$scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
} else {
$scope.vc.pk = $location.search().pk;
$scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
}
$scope.vc.args.pk = $scope.vc.pk;
$scope.vc.args.mode = $scope.vc.mode;
if(cobis.userContext.getValue(cobis.constant.USER_NAME)){
$scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
}else{
$scope.vc.args.user = "UserOutContainer";
}
$scope.vc.customDialogParameters = $scope.customDialogParameters;
$scope.vc.args.channel = $location.search().channel;
$scope.vc.metadata = {
taskPk : {
moduleId : 'INTRD',
subModuleId : 'FRMCN',
taskId : 'T_INTRDYRASIXRJ_820',
version : '1.0.0',
user : $scope.vc.args.user
},
entityNames: {
CuentaDestino: "CuentaDestino",
CuentaOrigen: "CuentaOrigen"
},
entities : {
CuentaDestino : {
numeroCuenta: 'AT36_NUMEROTC496',
saldo: 'AT55_SALDOFTU496'
,
_pks: [],
_entityId: 'EN_CUENTADOT_496',
_entityVersion: '1.0.0',
_transient: false },
CuentaOrigen : {
valor: 'AT29_VALORWDW615',
numeroCuenta: 'AT40_NUMEROCA615',
saldo: 'AT86_SALDOCDU615'
,
_pks: [],
_entityId: 'EN_CUENTAOEI_615',
_entityVersion: '1.0.0',
_transient: false }
},
relations : [
]
};
$scope.vc.queryProperties = {};
var defaultValues = {
CuentaDestino:{
},
CuentaOrigen:{
}
};
$scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist){
var channel = $scope.vc.args.channel;
for(var en in defaultValues){
if(defaultValues.hasOwnProperty(en) && en === entityName){
for(var att in defaultValues[en]){
if(defaultValues[en].hasOwnProperty(att) && att === attributeName){
for (var ch in defaultValues[en][att]){
if(defaultValues[en][att].hasOwnProperty(ch) && ch === channel){
return defaultValues[en][att][ch];
}
}
}
}
}
}
if(typeof valueIfNotExist !== "undefined"){
return valueIfNotExist;
}else{
return null;
}
};
$scope.vc.temporarySave = function() {
var modelo = $scope.vc.cleanData($scope.vc.model);
var data = {
model: modelo,
trackers: $scope.vc.trackers,
temporaryStorePK: $scope.vc.metadata.taskPk
};
$scope.vc.execute("temporarySave", VC_CUENTASYJQ_588820, data, function() {});
};
$scope.vc.temporaryRead = function() {
if(page.hasTemporaryDataSupport){
var data = {
model: $scope.vc.model,
temporaryStorePK: $scope.vc.metadata.taskPk
};
return $scope.vc.executeService("readTemporaryData", VC_CUENTASYJQ_588820, data).then(
function(response) {
var result = $scope.vc.processTemporaryResponse(response);
if (result) {
$scope.vc.execute("deleteTemporaryData", VC_CUENTASYJQ_588820, data, function() {});
$scope.vc.crud.addTrackers($scope.vc.model);
}
page.hasTemporaryData = result;
page.ejecTemporaryData = response.success;
return page;
});
}else{
page.ejecTemporaryData = false;
page.hasTemporaryData = false;
return page;
}
};
$scope.vc.viewState.keyDown = function(e) {
dsgnrUtils.container.validateOnEnter(e, $scope.vc);
};
$scope.vc.viewState.VC_CUENTASYJQ_588820 = {
style: []
};
$scope.vc.model.CuentaOrigen = {
valor: $scope.vc.channelDefaultValues("CuentaOrigen","valor"),
numeroCuenta: $scope.vc.channelDefaultValues("CuentaOrigen","numeroCuenta"),
saldo: $scope.vc.channelDefaultValues("CuentaOrigen","saldo")
};
//ViewState - Group: Group1448
$scope.vc.createViewState({
id: "G_CUENTASEMX_994138"
,hasId: true
,componentStyle: []
,label: "Cuante origen"
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: CuentaOrigen, Attribute: numeroCuenta
$scope.vc.createViewState({
id: "VA_NUMEROCUENTAPEG_838138"
,componentStyle: []
,label: "Número de cuenta"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: CuentaOrigen, Attribute: saldo
$scope.vc.createViewState({
id: "VA_SALDODTNACDJKJT_612138"
,componentStyle: []
,label: "Saldo"
,format: "n"
,decimals: kendo.cultures.current.numberFormat.decimals
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//watch tmpModel - Entity: CuentaOrigen, Attribute: saldo
$scope.$watch('vc.model.CuentaOrigen.saldo', function(newValue, oldValue) {
if (newValue !== oldValue) {
if(angular.isDefined($scope.vc.tmpModel.CuentaOrigen)){
$scope.vc.tmpModel.CuentaOrigen.saldo=newValue;
}else{
$scope.vc.tmpModel.CuentaOrigen = {saldo : newValue};
}
}
});
//ViewState - Entity: CuentaOrigen, Attribute: valor
$scope.vc.createViewState({
id: "VA_VALORGHWKMBPFYV_405138"
,componentStyle: []
,label: "Valor a transferir"
,format: "n"
,decimals: kendo.cultures.current.numberFormat.decimals
,validationCode: 32
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//watch tmpModel - Entity: CuentaOrigen, Attribute: valor
$scope.$watch('vc.model.CuentaOrigen.valor', function(newValue, oldValue) {
if (newValue !== oldValue) {
if(angular.isDefined($scope.vc.tmpModel.CuentaOrigen)){
$scope.vc.tmpModel.CuentaOrigen.valor=newValue;
}else{
$scope.vc.tmpModel.CuentaOrigen = {valor : newValue};
}
}
});
$scope.vc.createViewState({
id: "VA_VABUTTONARHWFJE_729138"
,componentStyle: []
,label: "Transferir"
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.model.CuentaDestino = {
numeroCuenta: $scope.vc.channelDefaultValues("CuentaDestino","numeroCuenta"),
saldo: $scope.vc.channelDefaultValues("CuentaDestino","saldo")
};
//ViewState - Group: Group2310
$scope.vc.createViewState({
id: "G_CUENTASPFD_353138"
,hasId: true
,componentStyle: []
,label: "Cuenta destino"
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: CuentaDestino, Attribute: numeroCuenta
$scope.vc.createViewState({
id: "VA_NUMEROCUENTALTY_240138"
,componentStyle: []
,label: "Número de cuenta"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: CuentaDestino, Attribute: saldo
$scope.vc.createViewState({
id: "VA_SALDOIUBRBZZOLS_353138"
,componentStyle: []
,label: "Saldo"
,format: "n"
,decimals: kendo.cultures.current.numberFormat.decimals
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//watch tmpModel - Entity: CuentaDestino, Attribute: saldo
$scope.$watch('vc.model.CuentaDestino.saldo', function(newValue, oldValue) {
if (newValue !== oldValue) {
if(angular.isDefined($scope.vc.tmpModel.CuentaDestino)){
$scope.vc.tmpModel.CuentaDestino.saldo=newValue;
}else{
$scope.vc.tmpModel.CuentaDestino = {saldo : newValue};
}
}
});
//ViewState - Command: Accept
$scope.vc.createViewState({
id: "T_INTRDYRASIXRJ_820_ACCEPT"
,componentStyle: []
,label: 'Accept'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Command: Cancel
$scope.vc.createViewState({
id: "T_INTRDYRASIXRJ_820_CANCEL"
,componentStyle: []
,label: 'Cancel'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
if ($scope.vc.parentVc) {
$scope.vc.afterOpenGridDialog();
}
}
$scope.isInvalid = function (form, field) {
if(!field){
return false;
}
var submitted = $scope.vc.submitted[form.$name];
return ((submitted || field.$dirty) && field.$invalid);
};
$scope._initPage_CRUDExecuteQueryEntities = function(page) {
if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
if(page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData){
return $scope.vc.CRUDExecuteQueryEntities(page);
}else if(page.hasCRUDSupport){
return $scope.vc.CRUDExecuteQueryEntities(page);
}else{
return page;
}
} else {
return page;
}
};
$scope._initPage_InitializeTrackers = function(page) {
$scope.vc.addChangeEvents($scope);
$scope.vc.crud.addTrackers($scope.vc.model);
return page;
};
$scope._initPage_ChangeInitData = function(page) {
return $scope.vc.changeInitData(page, $scope.vc);
};
$scope._initPage_ProcessRender = function(page) {
if (page.hasSearchRenderEvent) {
$scope.vc.render('VC_CUENTASYJQ_588820');
}
return page;
};
if($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude){
//para ventanas modales se usa ng-include con onload
$scope.runLifeCycle = function () {
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
if(!$scope.isDesignerInclude){
cobis.showMessageWindow.loading(true, "none");
}
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
};
}else{
//con ngView no funciona el $document.ready se cambia por $viewContentLoaded
$scope.$on('$viewContentLoaded', function() {
if ($scope.vc.loaded) {
//Si se esta regresando de otra pantalla
$scope.vc.addAfterInitDataFlags($scope);
$scope.vc.addChangeEvents($scope);
if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
$scope.vc.onCloseModalEvent();
}
if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
$scope.vc.afterCloseGridDialog();
}
cobis.showMessageWindow.loading(false);
} else {
//Si es la primera vez que se ejecuta la pantalla
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
}
});
}
}]);
}
if (typeof cobisMainModule === "undefined") {
var cobisMainModule = cobis.createModule("VC_CUENTASYJQ_588820", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", "designerModule"],[]);
cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",
function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
$ocLazyLoadProvider.config({
asyncLoader: $script
});
$locationProvider.html5Mode(true);
cobisMainModule.controllerProvider = $controllerProvider;
cobisMainModule.compileProvider = $compileProvider;
cobisMainModule.routeProvider = $routeProvider;
cobisMainModule.filterProvider = $filterProvider;
cobisMainModule.provide = $provide;
var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
$routeProvider.when("/VC_CUENTASYJQ_588820", {
templateUrl: "VC_CUENTASYJQ_588820_FORM.html",
controller: "VC_CUENTASYJQ_588820_CTRL",
label: "FormularioCuentas",
}).otherwise({
redirectTo: function (routeParams, path, search) {
return "/VC_CUENTASYJQ_588820?" + $.param(search);
}
});
VC_CUENTASYJQ_588820(cobisMainModule);
}]);
} else {
VC_CUENTASYJQ_588820(cobisMainModule);
}