/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{a as s}from"../../chunks/JSONSupport.js";import{clone as t}from"../../core/lang.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var p;let e=p=class extends s{constructor(o){super(o),this.color=new r([0,0,0,1])}clone(){return new p(t({color:this.color}))}};o([c({type:r,json:{write:!0}})],e.prototype,"color",void 0),e=p=o([i("esri.webmap.background.ColorBackground")],e);const m=e;export{m as default};
