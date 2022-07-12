// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper @dojo/framework/shim/WeakMap ../../../core/Error ../../../core/Logger ../../../geometry/support/quantizationUtils ../../../layers/graphics/featureConversionUtils".split(" "),function(w,f,h,r,t,u,g,n){function p(a,b,k,c){var d=c.transform,e=c.hasZ;c=c.hasM;l.has(a)||l.set(a,q(k));a=l.get(a)(b.geometry,d,e,c);return h({},b,{geometry:a})}function q(a){var b={};switch(a){case "esriGeometryPoint":return function(a,c,d,e){return g.hydratePoint(c,
b,a,d,e)};case "esriGeometryPolygon":return function(a,c,d,e){return g.hydratePolygon(c,b,a,d,e)};case "esriGeometryPolyline":return function(a,c,d,e){return g.hydratePolyline(c,b,a,d,e)};case "esriGeometryMultipoint":return function(a,c,d,e){return g.hydrateMultipoint(c,b,a,d,e)};default:return m.error(new t("mapview-arcade","Unable to handle geometryType: "+a)),function(a){return a}}}Object.defineProperty(f,"__esModule",{value:!0});var m=u.getLogger("esri.views.2d.support.arcadeOnDemand");f.callWithOptimizedFeature=
function(a,b,k,c,d){var e=c.geometryType,f=c.hasZ;c=c.hasM;b=a.referencesGeometry()?d?p(a,n.convertToFeature(b,e,f,c),e,d):n.convertToFeature(b,e,f,c):b;b=a.repurposeFeature(b);try{return a.evaluate(h({},k,{$feature:b}))}catch(v){return m.warn("Feature arcade evaluation failed:",v),null}};f.callWithFeature=function(a,b,f,c,d){b=a.referencesGeometry()&&d?p(a,b,c,d):b;b=a.repurposeFeature(b);try{return a.evaluate(h({},f,{$feature:b}))}catch(e){return m.warn("Feature arcade evaluation failed:",e),null}};
var l=new r.default;f.createHydrateFactory=q});