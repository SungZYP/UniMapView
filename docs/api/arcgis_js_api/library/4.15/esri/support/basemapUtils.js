// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../Basemap ../core/Collection ../core/Logger ../core/urlUtils ../core/accessorSupport/ensureType ./basemapDefinitions".split(" "),function(A,d,f,k,w,x,y,e){function l(a,b){var c;if("string"===typeof a){if(!(a in e.esriBasemapDefinitions))return b=Object.keys(e.esriBasemapDefinitions).map(function(a){return'"'+a+'"'}).join(", "),z.warn("Unable to find basemap definition for: "+a+". Try one of these: "+b),null;b&&(c=b[a]);c||(c=f.fromId(a),b&&(b[a]=c))}else c=y.default(f,a);
return c}function m(a,b){var c=new k;a.forEach(function(a){var d=b.find(function(b){return n(g(a),g(b))})||a;c.some(function(a){return a===d})?c.push(a):c.push(d)});return c}function h(a){return a?!a.loaded&&a.resourceInfo?p(a.resourceInfo.data):{baseLayers:q(a.baseLayers),referenceLayers:q(a.referenceLayers)}:null}function q(a){return(k.isCollection(a)?a.toArray():a).map(g)}function g(a){return{type:a.type,url:r("urlTemplate"in a&&a.urlTemplate||a.url||"styleUrl"in a&&a.styleUrl),minScale:"minScale"in
a&&null!=a.minScale?a.minScale:0,maxScale:"maxScale"in a&&null!=a.maxScale?a.maxScale:0,opacity:null!=a.opacity?a.opacity:1,visible:null!=a.visible?!!a.visible:!0}}function p(a){return a?{baseLayers:t(a.baseMapLayers.filter(function(a){return!a.isReference})),referenceLayers:t(a.baseMapLayers.filter(function(a){return a.isReference}))}:null}function t(a){return a.map(function(a){var b;switch(a.layerType){case "VectorTileLayer":b="vector-tile";break;case "ArcGISTiledMapServiceLayer":b="tile";break;
default:b="unknown"}return{type:b,url:r(a.templateUrl||a.urlTemplate||a.styleUrl||a.url),minScale:null!=a.minScale?a.minScale:0,maxScale:null!=a.maxScale?a.maxScale:0,opacity:null!=a.opacity?a.opacity:1,visible:null!=a.visibility?!!a.visibility:!0}})}function u(a,b,c){return null!=a!==(null!=b)?"not-equal":a?v(a.baseLayers,b.baseLayers)?v(a.referenceLayers,b.referenceLayers)?"equal":c.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function v(a,b){if(a.length!==b.length)return!1;
for(var c=0;c<a.length;c++)if(!n(a[c],b[c]))return!1;return!0}function n(a,b){return a.type===b.type&&a.url===b.url&&a.minScale===b.minScale&&a.maxScale===b.maxScale&&a.visible===b.visible&&a.opacity===b.opacity}function r(a){return a?x.normalize(a).replace(/^\s*https?:/i,"").toLowerCase():""}Object.defineProperty(d,"__esModule",{value:!0});var z=w.getLogger("esri.support.basemapUtils");d.createCache=function(){return{}};d.ensureType=l;d.clonePreservingTiledLayers=function(a,b){void 0===b&&(b=null);
a=l(a);if(!a)return null;var c=new f({id:a.id,title:a.title,baseLayers:a.baseLayers.slice(),referenceLayers:a.referenceLayers.slice()});b&&(c.baseLayers=m(c.baseLayers,b.baseLayers),c.referenceLayers=m(c.referenceLayers,b.referenceLayers));c.load().catch(function(){});c.portalItem=a.portalItem;return c};d.getWellKnownBasemapId=function(a){var b=null;a=h(a);for(var c in e.esriBasemapDefinitions){var d=p(e.esriBasemapDefinitions[c]),d=u(a,d,{mustMatchReferences:!1});if("equal"===d){b=c;break}"base-layers-equal"===
d&&(b=c)}return b};d.contentEquals=function(a,b){if(a===b)return!0;a=h(a);b=h(b);return"equal"===u(a,b,{mustMatchReferences:!0})}});