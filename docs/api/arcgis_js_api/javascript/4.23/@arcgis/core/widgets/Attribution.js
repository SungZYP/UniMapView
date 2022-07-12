/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{on as e}from"../core/watchUtils.js";import{aliasOf as s}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import o from"./Widget.js";import n from"./Attribution/AttributionViewModel.js";import{a as p}from"../chunks/accessibleHandler.js";import{m as c}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as m}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/asyncUtils.js";import"../core/HandleOwner.js";const u="esri-attribution esri-widget",a="esri-attribution__powered-by",l="esri-attribution__sources",h="esri-attribution--open",d="esri-attribution__sources--open",j="esri-attribution__link",g="esri-icon-description",k="esri-interactive";let v=class extends o{constructor(t,e){super(t,e),this._isOpen=!1,this._attributionTextOverflowed=!1,this._prevSourceNodeHeight=0,this.iconClass=g,this.itemDelimiter=" | ",this.label=void 0,this.messages=null,this.view=null,this.viewModel=new n}initialize(){this.own(e(this,"viewModel.items","change",(()=>this.scheduleRender())))}get _isInteractive(){return this._isOpen||this._attributionTextOverflowed}get attributionText(){return this.viewModel.items.reduce(((t,e)=>(-1===t.indexOf(e.text)&&t.push(e.text),t)),[]).join(this.itemDelimiter)}render(){const t={[h]:this._isOpen};return m("div",{bind:this,class:this.classes(u,t),onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())}renderPoweredBy(){return m("div",{class:a},"Powered by"," ",m("a",{class:j,href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri"))}renderSourcesNode(){const t=this._isOpen,e=this._isInteractive,s=e?0:-1,{attributionText:i}=this,r=e?"button":void 0,o={[d]:t,[k]:e};return m("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:this.classes(l,o),innerHTML:i,role:r,tabIndex:s})}_afterSourcesNodeCreate(t){this._prevSourceNodeHeight=t.clientWidth}_afterSourcesNodeUpdate(t){let e=!1;const{clientHeight:s,clientWidth:i,scrollWidth:r}=t,o=r>=i,n=this._attributionTextOverflowed!==o;if(this._attributionTextOverflowed=o,n&&(e=!0),this._isOpen){const t=s<this._prevSourceNodeHeight;this._prevSourceNodeHeight=s,t&&(this._isOpen=!1,e=!0)}e&&this.scheduleRender()}_toggleState(){this._isInteractive&&(this._isOpen=!this._isOpen)}};t([i()],v.prototype,"_isOpen",void 0),t([i()],v.prototype,"_isInteractive",null),t([i()],v.prototype,"_attributionTextOverflowed",void 0),t([i()],v.prototype,"_prevSourceNodeHeight",void 0),t([i({readOnly:!0,dependsOn:["viewModel.items.length","itemDelimiter"]})],v.prototype,"attributionText",null),t([i()],v.prototype,"iconClass",void 0),t([i()],v.prototype,"itemDelimiter",void 0),t([i({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],v.prototype,"label",void 0),t([i(),c("esri/widgets/Attribution/t9n/Attribution")],v.prototype,"messages",void 0),t([s("viewModel.view")],v.prototype,"view",void 0),t([i({type:n})],v.prototype,"viewModel",void 0),t([p()],v.prototype,"_toggleState",null),v=t([r("esri.widgets.Attribution")],v);const _=v;export{_ as default};
