/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{a as r}from"../chunks/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{e as t}from"../chunks/enumeration.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import e from"./support/ColormapInfo.js";import{c as p}from"../chunks/colorRampUtils.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/colorUtils2.js";var m;let a=m=class extends r{constructor(o){super(o),this.colormapInfos=null,this.type="raster-colormap"}static createFromColormap(o,r){if(!o)return null;const s=5===o[0].length,t=[...o].sort((o=>o[0][0]-o[1][0])).map((o=>{var t;return e.fromJSON({value:o[0],color:s?o.slice(1,5):o.slice(1,4).concat([255]),label:r?null!=(t=r[o[0]])?t:"":o[0]})}));return new m({colormapInfos:t})}static createFromColorramp(o){const r=p(o,256);return m.createFromColormap(r)}clone(){return new m({colormapInfos:this.colormapInfos.map((o=>o.toJSON()))})}extractColormap(){return this.colormapInfos.map((({value:o,color:r})=>[o,r.r,r.g,r.b,r.a>1?r.a:255*r.a&255])).sort(((o,r)=>o[0]-r[0]))}};o([s({type:[e],json:{write:!0}})],a.prototype,"colormapInfos",void 0),o([t({rasterColormap:"raster-colormap"})],a.prototype,"type",void 0),a=m=o([c("esri.renderers.RasterColormapRenderer")],a);const n=a;export{n as default};
