/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../config.js";import t from"../core/Error.js";import{h as r}from"../core/lang.js";import{L as o}from"./Logger.js";import i from"../geometry/Point.js";import{geographicToWebMercator as s}from"../geometry/support/webMercatorUtils.js";import n from"../portal/Portal.js";import"../request.js";import"../core/urlUtils.js";import"./unitUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../geometry/Polyline.js";import"./trimExtend.js";import"../rest/support/GeneralizeParameters.js";import"../rest/support/LengthsParameters.js";import"../rest/support/OffsetParameters.js";import{p as u}from"./project.js";import"../rest/support/RelationParameters.js";import"../rest/support/TrimExtendParameters.js";import m from"../rest/support/ProjectParameters.js";const a=o.getLogger("esri.widgets.support.geolocationUtils"),c={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};function p(){return function(){const e=r("esri-geolocation");return e||a.warn("geolocation-unsupported","Geolocation unsupported."),e}()&&function(){const e=window.isSecureContext;return e||a.warn("insecure-context","Geolocation requires a secure origin."),e}()}function l(e){return e||(e=c),new Promise(((r,o)=>{setTimeout((()=>o(new t("geolocation:timeout","getting the current geolocation position timed out"))),15e3),navigator.geolocation.getCurrentPosition(r,o,e)}))}function g(r,o){const{position:a,view:c}=r,p=function(e){const t=e&&e.coords||{},r={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e?{coords:r,timestamp:e.timestamp}:e}(a),l=function(e){const t=e&&e.coords;if(!t)return null;return new i({longitude:t.longitude,latitude:t.latitude,z:t.altitude||null,spatialReference:{wkid:4326}})}(p);return function(r,o,i){if(!o)return Promise.resolve(r);const a=o.spatialReference;if(a.isWGS84)return Promise.resolve(r);if(a.isWebMercator)return Promise.resolve(s(r));return function(t){if(e.geometryServiceUrl)return Promise.resolve(e.geometryServiceUrl);const r=n.getDefault();return r.load(t).catch((()=>{})).then((()=>r.get("helperServices.geometry.url")))}(i).then((e=>{if(!e)throw new t("geometry-service:missing-url","Geometry service URL is missing");const o=new m({geometries:[r],outSpatialReference:a});return u(e,o,i).then((e=>e[0]))}))}(l,c,o)}export{l as g,g as p,p as s};