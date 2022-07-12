/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{a as s}from"../../../chunks/JSONSupport.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import e from"./Association.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../chunks/jsonMap.js";import"../../../geometry/support/jsonUtils.js";import"./NetworkElement.js";let i=class extends s{constructor(o){super(o),this.maxGeometryCountExceeded=!1,this.associations=[]}};o([t({type:Boolean,json:{write:!0}})],i.prototype,"maxGeometryCountExceeded",void 0),o([t({type:[e],json:{write:!0}})],i.prototype,"associations",void 0),i=o([r("esri.rest.networks.support.AssociationGeometriesResult")],i);const p=i;export{p as default};
