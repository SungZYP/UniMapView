/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{clone as o}from"../../core/lang.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{r as e}from"../../chunks/reader.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{w as s}from"../../chunks/writer.js";import p from"./BarChartMediaInfo.js";import a from"./ColumnChartMediaInfo.js";import n from"./Content.js";import m from"./ImageMediaInfo.js";import c from"./LineChartMediaInfo.js";import d from"./PieChartMediaInfo.js";import{M as u}from"../../chunks/MediaInfo.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../chunks/chartMediaInfoUtils.js";import"./support/ChartMediaInfoValue.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"./support/ChartMediaInfoValueSeries.js";import"../../chunks/jsonMap.js";import"./support/ImageMediaInfoValue.js";const h={base:u,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":p,"column-chart":a,"line-chart":c,"pie-chart":d,image:m}};var f;let l=f=class extends n{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map((t=>"image"===t.type?m.fromJSON(t):"barchart"===t.type?p.fromJSON(t):"columnchart"===t.type?a.fromJSON(t):"linechart"===t.type?c.fromJSON(t):"piechart"===t.type?d.fromJSON(t):void 0)).filter(Boolean)}writeMediaInfos(t,o){o.mediaInfos=t&&t.map((t=>t.toJSON()))}clone(){return new f(o({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};t([r()],l.prototype,"activeMediaInfoIndex",void 0),t([r({type:Object,json:{write:!0}})],l.prototype,"attributes",void 0),t([r({type:String,json:{write:!0}})],l.prototype,"description",void 0),t([r({types:[h]})],l.prototype,"mediaInfos",void 0),t([e("mediaInfos")],l.prototype,"readMediaInfos",null),t([s("mediaInfos")],l.prototype,"writeMediaInfos",null),t([r({type:String,json:{write:!0}})],l.prototype,"title",void 0),t([r({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=f=t([i("esri.popup.content.MediaContent")],l);const j=l;export{j as default,h as t};