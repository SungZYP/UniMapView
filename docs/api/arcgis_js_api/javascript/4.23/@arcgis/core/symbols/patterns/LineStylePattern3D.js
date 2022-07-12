/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{s as o}from"../../chunks/jsonMap.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{e as r}from"../../chunks/enumeration.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{a as d}from"../../chunks/JSONSupport.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";let n=class extends d{constructor(s){super(s)}clone(){}};s([t({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"type",void 0),n=s([e("esri.symbols.patterns.LinePattern3D")],n);const h=n;var a;const i=o()({dash:"dash","dash-dot":"dash-dot","dash-dot-dot":"long-dash-dot-dot",dot:"dot","long-dash":"long-dash","long-dash-dot":"long-dash-dot",null:"none","short-dash":"short-dash","short-dash-dot":"short-dash-dot","short-dash-dot-dot":"short-dash-dot-dot","short-dot":"short-dot",solid:"solid"});let p=a=class extends h{constructor(s){super(s),this.type="style",this.style="solid"}clone(){const s={style:this.style};return new a(s)}};s([t({type:["style"]})],p.prototype,"type",void 0),s([r(i),t({type:["dash","dash-dot","dot","long-dash","long-dash-dot","long-dash-dot-dot","none","short-dash","short-dash-dot","short-dash-dot-dot","short-dot","solid"]})],p.prototype,"style",void 0),p=a=s([e("esri.symbols.patterns.LineStylePattern3D")],p);const c=p;export{h as L,c as default};