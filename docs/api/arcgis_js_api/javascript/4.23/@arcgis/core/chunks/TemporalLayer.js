/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../TimeExtent.js";import r,{t as o}from"../TimeInterval.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{r as i}from"./reader.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import m from"../layers/support/TimeInfo.js";import{fixTimeInfoFields as p}from"../layers/support/fieldUtils.js";const f=f=>{let l=class extends f{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const s=t.timeInfo.exportOptions;if(!s)return null;const i=s.timeOffset,n=o.fromJSON(s.timeOffsetUnits);return i&&n?new r({value:i,unit:n}):null}set timeInfo(e){p(e,this.fieldsIndex),this._set("timeInfo",e)}};return e([s({type:t,json:{write:!1}})],l.prototype,"timeExtent",void 0),e([s({type:r})],l.prototype,"timeOffset",void 0),e([i("service","timeOffset",["timeInfo.exportOptions"])],l.prototype,"readOffset",null),e([s({value:null,type:m,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],l.prototype,"timeInfo",null),e([s({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"useViewTime",void 0),l=e([n("esri.layers.mixins.TemporalLayer")],l),l};export{f as T};
