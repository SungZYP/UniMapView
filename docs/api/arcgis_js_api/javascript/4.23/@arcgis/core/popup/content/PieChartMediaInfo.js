/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{c as o,C as e}from"../../chunks/chartMediaInfoUtils.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../chunks/MediaInfo.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"./support/ChartMediaInfoValue.js";import"./support/ChartMediaInfoValueSeries.js";import"../../chunks/jsonMap.js";var i;let p=i=class extends e{constructor(t){super(t),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};t([s({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:o.write}})],p.prototype,"type",void 0),p=i=t([r("esri.popup.content.PieChartMediaInfo")],p);const c=p;export{c as default};
