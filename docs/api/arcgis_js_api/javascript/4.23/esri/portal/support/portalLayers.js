// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../layers/support/lazyLayerLoader ../PortalItem ./layersLoader ./portalItemUtils ../../support/requestPresets".split(" "),function(k,l,v,w,q,f,r,g){function t(a){switch(a.type){case "Map Service":return x(a);case "Feature Service":return y(a);case "Feature Collection":return z(a);case "Scene Service":return A(a);case "Image Service":return B(a);case "Stream Service":return{className:"StreamLayer"};case "Vector Tile Service":return{className:"VectorTileLayer"};
case "KML":return{className:"KMLLayer"};case "WFS":return{className:"WFSLayer"};case "WMTS":return{className:"WMTSLayer"};case "WMS":return{className:"WMSLayer"};case "Feed":return{className:"StreamLayer"};default:return Promise.reject(new v("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type}))}}function C(a){return(0,w.layerLookupMap[a.className])().then(b=>({constructor:b,properties:a.properties}))}function x(a){return D(a).then(b=>b?{className:"TileLayer"}:{className:"MapImageLayer"})}
function y(a){return u(a).then(b=>{if("object"===typeof b){const c={};null!=b.id&&(c.layerId=b.id);return{className:"FeatureLayer",properties:c}}return{className:"GroupLayer"}})}function A(a){return u(a).then(b=>{if("object"===typeof b){const c={};null!=b.id?(c.layerId=b.id,b=`${a.url}/layers/${b.id}`):b=a.url;if(Array.isArray(a.typeKeywords)&&0<a.typeKeywords.length){const d={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};
for(const e of Object.keys(d))if(-1!==a.typeKeywords.indexOf(e))return{className:d[e]}}return g.requestArcGISServiceJSON(b).then(d=>{let e="SceneLayer";const h={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};d&&d.layerType&&h[d.layerType]&&(e=h[d.layerType]);return{className:e,properties:c}})}return!1===b?g.requestArcGISServiceJSON(a.url).then(c=>"Voxel"===(null==c?void 0:c.layerType)?{className:"VoxelLayer"}:
{className:"GroupLayer"}):{className:"GroupLayer"}})}function z(a){return m.apply(this,arguments)}function m(){m=l._asyncToGenerator(function*(a){yield a.load();if(r.hasTypeKeyword(a,"Map Notes"))return{className:"MapNotesLayer"};if(r.hasTypeKeyword(a,"Route Layer"))return{className:"RouteLayer"};a=yield a.fetchData();return 1===f.getNumLayersAndTables(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}});return m.apply(this,arguments)}function B(a){return n.apply(this,arguments)}function n(){n=
l._asyncToGenerator(function*(a){var b,c,d;yield a.load();const e=null!=(b=null==(c=a.typeKeywords)?void 0:c.map(h=>h.toLowerCase()))?b:[];if(-1<e.indexOf("elevation 3d layer"))return{className:"ElevationLayer"};if(-1<e.indexOf("tiled imagery"))return{className:"ImageryTileLayer"};b=yield a.fetchData();b=null==b?void 0:b.layerType;return"ArcGISTiledImageServiceLayer"===b?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===b?{className:"ImageryLayer"}:"map"===(null==(d=(yield g.requestArcGISServiceJSON(a.url)).cacheType)?
void 0:d.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}});return n.apply(this,arguments)}function D(a){return g.requestArcGISServiceJSON(a.url).then(b=>b.tileInfo)}function u(a){return!a.url||a.url.match(/\/\d+$/)?Promise.resolve({}):a.load().then(()=>a.fetchData()).then(function(){var b=l._asyncToGenerator(function*(c){return"Feature Service"===a.type?(c=yield f.preprocessFSItemData(c,a.url),p(c)):0<f.getNumLayersAndTables(c)?p(c):g.requestArcGISServiceJSON(a.url).then(p)});
return function(c){return b.apply(this,arguments)}}())}function p(a){return 1===f.getNumLayersAndTables(a)?{id:f.getFirstLayerOrTableId(a)}:!1}k.fromItem=function(a){!a.portalItem||a.portalItem instanceof q||(a={...a,portalItem:new q(a.portalItem)});return a.portalItem.load().then(t).then(C).then(b=>Promise.resolve(new b.constructor({portalItem:a.portalItem,...b.properties})))};k.selectLayerClassPath=t;Object.defineProperty(k,"__esModule",{value:!0})});