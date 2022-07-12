// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../../core/promiseUtils"],function(n,p,h,k){function q(d,e){if(d.includes(";base64,")){const a=new Image;a.src=d;return a.decode().then(()=>({ok:!0,value:a})).catch(b=>k.isAbortError(b)?{ok:!1,error:b}:{ok:!1,error:new h("invalid-resource",`Could not fetch requested resource at ${d}`)})}return p(d,{responseType:"image",...e}).then(a=>({ok:!0,value:a.data})).catch(a=>k.isAbortError(a)?{ok:!1,error:a}:{ok:!1,error:new h("invalid-resource",
`Could not fetch requested resource at ${d}`)})}return function(){function d(){this._resourceMap=new Map;this._inFlightResourceMap=new Map;this.geometryEngine=null}var e=d.prototype;e.destroy=function(){this._inFlightResourceMap.clear();this._resourceMap.clear()};e.getResource=function(a){var b;return null!=(b=this._resourceMap.get(a))?b:null};e.fetchResource=function(){var a=n._asyncToGenerator(function*(b,l){const f={width:0,height:0},m=this._resourceMap;var c=m.get(b);if(c)return f.width=c.width,
f.height=c.height,f;if(c=this._inFlightResourceMap.get(b))return c;c=q(b,l);this._inFlightResourceMap.set(b,c);return c=c.then(g=>{this._inFlightResourceMap.delete(b);g.ok&&(m.set(b,g.value),g=g.value,f.width=g.width,f.height=g.height);return f})});return function(b,l){return a.apply(this,arguments)}}();e.deleteResource=function(a){this._inFlightResourceMap.delete(a);this._resourceMap.delete(a)};return d}()});