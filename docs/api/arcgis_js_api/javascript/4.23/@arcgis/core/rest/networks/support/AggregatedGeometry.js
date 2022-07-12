/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{a as r}from"../../../chunks/JSONSupport.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import e from"../../../geometry/Multipoint.js";import i from"../../../geometry/Polygon.js";import p from"../../../geometry/Polyline.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/writer.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/zmUtils.js";import"../../../chunks/extentUtils.js";let m=class extends r{constructor(o){super(o),this.line=null,this.multipoint=null,this.polygon=null}};o([t({type:p,json:{write:!0},readOnly:!0})],m.prototype,"line",void 0),o([t({type:e,json:{read:{source:"point"},write:{target:"point"}},readOnly:!0})],m.prototype,"multipoint",void 0),o([t({type:i,json:{write:!0},readOnly:!0})],m.prototype,"polygon",void 0),m=o([s("esri.rest.networks.support.AggregatedGeometry")],m);const n=m;export{n as default};