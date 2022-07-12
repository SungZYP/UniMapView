/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{a as r}from"../../../chunks/JSONSupport.js";import{t}from"../../../chunks/screenUtils.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";var i;let p=i=class extends r{constructor(s){super(s),this.label=null,this.size=null,this.value=null}clone(){return new i({label:this.label,size:this.size,value:this.value})}};s([o({type:String,json:{write:!0}})],p.prototype,"label",void 0),s([o({type:Number,cast:t,json:{write:!0}})],p.prototype,"size",void 0),s([o({type:Number,json:{write:!0}})],p.prototype,"value",void 0),p=i=s([e("esri.renderers.visualVariables.support.SizeStop")],p);const c=p;export{c as default};
