// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/promiseUtils ../core/unitUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./AreaMeasurement3D/AreaMeasurement3DViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/jsxFactory ./support/widgetUtils".split(" "),function(y,
d,F,G,h,c,L,M,f,H,I,z,A,B,N,b,O){c=function(C){function m(a,n){a=C.call(this,a,n)||this;a.view=null;a.visible=null;a.iconClass="esri-icon-measure-area";a.label=void 0;a.messages=null;a.messagesUnits=null;a.viewModel=new z;a.unitOptions=null;a.unit=null;return a}y._inheritsLoose(m,C);var v=m.prototype;v.render=function(){const {supported:a,active:n,measurement:D,state:p,unit:J}=this.viewModel;var q="disabled"===p;const r="measuring"===p||"measured"===p,{messages:g,messagesUnits:E}=this;var w=n&&"ready"===
p?b.tsx("section",{key:"esri-area-measurement-3d__hint",class:"esri-area-measurement-3d__hint"},b.tsx("p",{class:"esri-area-measurement-3d__hint-text"},g.hint)):null;const K=a?null:b.tsx("section",{key:"esri-area-measurement-3d__unsupported",class:"esri-area-measurement-3d__panel--error"},b.tsx("p",null,g.unsupported));var t=(e,k,x)=>{switch(k.state){case "available":return b.tsx("div",{key:`${x}-enabled`,class:"esri-area-measurement-3d__measurement-item"},b.tsx("span",{class:"esri-area-measurement-3d__measurement-item-title"},
e),b.tsx("span",{class:"esri-area-measurement-3d__measurement-item-value"},k.text));case "unavailable":return b.tsx("div",{key:`${x}-disabled`,class:this.classes("esri-area-measurement-3d__measurement-item","esri-area-measurement-3d__measurement-item--disabled")},b.tsx("span",{class:"esri-area-measurement-3d__measurement-item-title"},e));case "invalid":return b.tsx("div",{key:`${x}-enabled`,class:"esri-area-measurement-3d__measurement-item"},b.tsx("span",{class:"esri-area-measurement-3d__measurement-item-title"},
e),b.tsx("span",{class:"esri-area-measurement-3d__measurement-item-value"},g.notApplicable))}};t=r?b.tsx("section",{key:"esri-area-measurement-3d__measurement",class:"esri-area-measurement-3d__measurement"},t(g.area,D.area,"area"),t(g.perimeterLength,D.perimeterLength,"perimeter-length")):null;var u=`${this.id}__units`,l=b.tsx("label",{class:"esri-area-measurement-3d__units-label",for:u},g.unit);u=b.tsx("div",{class:"esri-area-measurement-3d__units-select-wrapper"},b.tsx("select",{class:"esri-area-measurement-3d__units-select esri-select",
id:u,onchange:this._changeUnit,bind:this,value:J},this.viewModel.unitOptions.map(e=>{var k;return b.tsx("option",{key:e,value:e},G.isMeasurementSystem(e)?E.systems[e]:null==(k=E.units[e])?void 0:k.pluralCapitalized)})));l=r?b.tsx("section",{key:"esri-area-measurement-3d__units",class:"esri-area-measurement-3d__units"},l,u):null;l=r?b.tsx("div",{key:"settings",class:"esri-area-measurement-3d__settings"},l):null;q=!a||n&&!r?null:b.tsx("div",{class:"esri-area-measurement-3d__actions"},b.tsx("button",
{disabled:q,class:this.classes("esri-area-measurement-3d__clear-button esri-button esri-button--primary",q&&"esri-button--disabled"),bind:this,onclick:this._newMeasurement,type:"button"},g.newMeasurement));w=this.visible?b.tsx("div",{class:"esri-area-measurement-3d__container"},K,w,l,t,q):null;return b.tsx("div",{key:this,class:"esri-area-measurement-3d esri-widget esri-widget--panel",role:"presentation"},w)};v._newMeasurement=function(){F.ignoreAbortErrors(this.viewModel.start())};v._changeUnit=
function(a){a=a.target;if(a=a.options[a.selectedIndex])this.unit=a.value};y._createClass(m,[{key:"analysis",get:function(){return this.viewModel.analysis},set:function(a){this.viewModel.analysis=a}}]);return m}(I);d.__decorate([h.aliasOf("viewModel.view")],c.prototype,"view",void 0);d.__decorate([h.aliasOf("viewModel.visible")],c.prototype,"visible",void 0);d.__decorate([h.aliasOf("viewModel.active")],c.prototype,"active",void 0);d.__decorate([f.property({constructOnly:!0,nonNullable:!0})],c.prototype,
"analysis",null);d.__decorate([f.property()],c.prototype,"iconClass",void 0);d.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([f.property(),B.messageBundle("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],c.prototype,"messages",void 0);d.__decorate([f.property(),B.messageBundle("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0);d.__decorate([f.property()],c.prototype,"uiStrings",void 0);d.__decorate([f.property({type:z})],
c.prototype,"viewModel",void 0);d.__decorate([h.aliasOf("viewModel.unitOptions")],c.prototype,"unitOptions",void 0);d.__decorate([h.aliasOf("viewModel.unit")],c.prototype,"unit",void 0);d.__decorate([A.accessibleHandler()],c.prototype,"_newMeasurement",null);d.__decorate([A.accessibleHandler()],c.prototype,"_changeUnit",null);return c=d.__decorate([H.subclass("esri.widgets.AreaMeasurement3D")],c)});