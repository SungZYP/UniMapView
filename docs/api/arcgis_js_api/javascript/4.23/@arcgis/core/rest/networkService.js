/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../request.js";import t from"../core/Error.js";import{i as r}from"../core/lang.js";import{g as o}from"../chunks/object.js";import{removeTrailingSlash as s}from"../core/urlUtils.js";import{a as i,p as n}from"../chunks/utils5.js";import{_ as a}from"../chunks/tslib.es6.js";import{a as l}from"../chunks/JSONSupport.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as u}from"../chunks/enumeration.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{a as d}from"../chunks/networkEnums.js";import m from"./support/TravelMode.js";import"../config.js";import"../kernel.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../chunks/scaleUtils.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/Ellipsoid.js";import"../chunks/floorFilterUtils.js";let h=class extends l{constructor(e){super(e),this.accumulateAttributeNames=null,this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};a([p()],h.prototype,"accumulateAttributeNames",void 0),a([p()],h.prototype,"currentVersion",void 0),a([p()],h.prototype,"defaultTravelMode",void 0),a([p()],h.prototype,"directionsLanguage",void 0),a([u(d)],h.prototype,"directionsLengthUnits",void 0),a([p()],h.prototype,"directionsSupportedLanguages",void 0),a([p()],h.prototype,"directionsTimeAttribute",void 0),a([p()],h.prototype,"hasZ",void 0),a([p()],h.prototype,"impedance",void 0),a([p()],h.prototype,"networkDataset",void 0),a([p({type:[m]})],h.prototype,"supportedTravelModes",void 0),h=a([c("esri.rest.support.NetworkServiceDescription")],h);const f=h;function v(e,t,r,o){o[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function j(e,t){for(let r=0;r<t.length;r++){const o=e[t[r]];if(o&&o.length)for(const e of o)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function g(e,t){for(let o=0;o<t.length;o++){const s=e[t[o]];if(s&&s.length)for(const e of s)if(r(e)&&e.hasZ)return!0}return!1}async function k(r,a,l){if(!r)throw new t("network-service:missing-url","Url to Network service is missing");const p=i({f:"json",token:a},l),{data:u}=await e(r,p);u.supportedTravelModes||(u.supportedTravelModes=[]);for(let e=0;e<u.supportedTravelModes.length;e++)u.supportedTravelModes[e].id||(u.supportedTravelModes[e].id=u.supportedTravelModes[e].itemId);const c=u.currentVersion>=10.4?async function(r,o,n){try{const t=i({f:"json",token:o},n),a=s(r)+"/retrieveTravelModes",{data:{supportedTravelModes:l,defaultTravelMode:p}}=await e(a,t);return{supportedTravelModes:l,defaultTravelMode:p}}catch(e){throw new t("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(r,a,l):async function(t,r){var a,l;const p=i({f:"json"},r),{data:u}=await e(t.replace(/\/rest\/.*$/i,"/info"),p);if(!u||!u.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:c}=u,d=s(c)+"/sharing/rest/portals/self",{data:m}=await e(d,p),h=o("helperServices.routingUtilities.url",m);if(!h)return{supportedTravelModes:[],defaultTravelMode:null};const f=n(c),v=/\/solve$/i.test(f.path)?"Route":/\/solveclosestfacility$/i.test(f.path)?"ClosestFacility":"ServiceAreas",j=i({f:"json",serviceName:v},r),g=s(h)+"/GetTravelModes/execute",k=await e(g,j),T=[];let M=null;if(null!=k&&null!=(a=k.data)&&null!=(l=a.results)&&l.length){const e=k.data.results;for(const t of e){var y;if("supportedTravelModes"===t.paramName){if(null!=(y=t.value)&&y.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);T.push(t)}}else"defaultTravelMode"===t.paramName&&(M=t.value)}}return{supportedTravelModes:T,defaultTravelMode:M}}(r,l),{defaultTravelMode:d,supportedTravelModes:m}=await c;return u.defaultTravelMode=d,u.supportedTravelModes=m,f.fromJSON(u)}export{v as collectGeometries,j as dropZValuesOffInputGeometry,k as fetchServiceDescription,g as isInputGeometryZAware};
