/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{a as s}from"../chunks/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";var e;let i=e=class extends s{constructor(r){super(r),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new e({title:this.title,expression:this.expression})}};r([t({type:String,json:{write:!0}})],i.prototype,"title",void 0),r([t({type:String,json:{write:!0}})],i.prototype,"expression",void 0),r([t({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],i.prototype,"returnType",void 0),i=e=r([o("esri.popup.ElementExpressionInfo")],i);const p=i;export{p as default};
