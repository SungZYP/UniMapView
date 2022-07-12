/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{G as r}from"../chunks/geometryEngineBase.js";import{hydratedAdapter as n}from"../chunks/hydrated.js";import"./Extent.js";import"../chunks/tslib.es6.js";import"../core/lang.js";import"../chunks/string.js";import"../chunks/object.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/ensureType.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"./Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"./SpatialReference.js";import"../chunks/writer.js";import"./Point.js";import"../core/accessorSupport/decorators/cast.js";import"./support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"./Multipoint.js";import"../chunks/zmUtils.js";import"./Polygon.js";import"../chunks/extentUtils.js";import"./Polyline.js";function t(r){return Array.isArray(r)?r[0].spatialReference:r&&r.spatialReference}function e(n){return r.extendedSpatialReferenceInfo(n)}function o(e,o){return r.clip(n,t(e),e,o)}function i(e,o){return r.cut(n,t(e),e,o)}function c(e,o){return r.contains(n,t(e),e,o)}function s(e,o){return r.crosses(n,t(e),e,o)}function u(e,o,i){return r.distance(n,t(e),e,o,i)}function l(e,o){return r.equals(n,t(e),e,o)}function p(e,o){return r.intersects(n,t(e),e,o)}function f(e,o){return r.touches(n,t(e),e,o)}function a(e,o){return r.within(n,t(e),e,o)}function m(e,o){return r.disjoint(n,t(e),e,o)}function j(e,o){return r.overlaps(n,t(e),e,o)}function h(e,o,i){return r.relate(n,t(e),e,o,i)}function g(e){return r.isSimple(n,t(e),e)}function k(e){return r.simplify(n,t(e),e)}function d(e,o=!1){return r.convexHull(n,t(e),e,o)}function x(e,o){return r.difference(n,t(e),e,o)}function w(e,o){return r.symmetricDifference(n,t(e),e,o)}function E(e,o){return r.intersect(n,t(e),e,o)}function y(e,o=null){return r.union(n,t(e),e,o)}function A(e,o,i,c,s,u){return r.offset(n,t(e),e,o,i,c,s,u)}function S(e,o,i,c=!1){return r.buffer(n,t(e),e,o,i,c)}function R(e,o,i,c,s,u){return r.geodesicBuffer(n,t(e),e,o,i,c,s,u)}function I(e,o,i=!0){return r.nearestCoordinate(n,t(e),e,o,i)}function b(e,o){return r.nearestVertex(n,t(e),e,o)}function v(e,o,i,c){return r.nearestVertices(n,t(e),e,o,i,c)}function U(r){return"xmin"in r?"center"in r?r.center:null:"x"in r?r:"extent"in r?r.extent.center:null}function J(n,t,e){var o;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;if(null==(e=null!=(o=e)?o:U(n)))throw new Error("Illegal Argument Exception");const c=n.constructor.fromJSON(r.rotate(n,t,e));return c.spatialReference=i,c}function N(n,t){var e;if(null==n)throw new Error("Illegal Argument Exception");const o=n.spatialReference;if(null==(t=null!=(e=t)?e:U(n)))throw new Error("Illegal Argument Exception");const i=n.constructor.fromJSON(r.flipHorizontal(n,t));return i.spatialReference=o,i}function O(n,t){var e;if(null==n)throw new Error("Illegal Argument Exception");const o=n.spatialReference;if(null==(t=null!=(e=t)?e:U(n)))throw new Error("Illegal Argument Exception");const i=n.constructor.fromJSON(r.flipVertical(n,t));return i.spatialReference=o,i}function P(e,o,i,c){return r.generalize(n,t(e),e,o,i,c)}function z(e,o,i){return r.densify(n,t(e),e,o,i)}function L(e,o,i,c=0){return r.geodesicDensify(n,t(e),e,o,i,c)}function V(e,o){return r.planarArea(n,t(e),e,o)}function B(e,o){return r.planarLength(n,t(e),e,o)}function D(e,o,i){return r.geodesicArea(n,t(e),e,o,i)}function G(e,o,i){return r.geodesicLength(n,t(e),e,o,i)}export{S as buffer,o as clip,c as contains,d as convexHull,s as crosses,i as cut,z as densify,x as difference,m as disjoint,u as distance,l as equals,e as extendedSpatialReferenceInfo,N as flipHorizontal,O as flipVertical,P as generalize,D as geodesicArea,R as geodesicBuffer,L as geodesicDensify,G as geodesicLength,E as intersect,p as intersects,g as isSimple,I as nearestCoordinate,b as nearestVertex,v as nearestVertices,A as offset,j as overlaps,V as planarArea,B as planarLength,h as relate,J as rotate,k as simplify,w as symmetricDifference,f as touches,y as union,a as within};
