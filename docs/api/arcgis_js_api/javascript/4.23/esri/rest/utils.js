// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../core/maybe","../core/urlUtils","../geometry/support/scaleUtils","../views/support/floorFilterUtils"],function(l,r,t,u,m){function p(c,f,g){const a={};for(const e in c)if("declaredClass"!==e){var b=c[e];if(null!=b&&"function"!==typeof b)if(Array.isArray(b)){a[e]=[];for(let h=0;h<b.length;h++)a[e][h]=p(b[h])}else"object"===typeof b?b.toJSON?(b=b.toJSON(g&&g[e]),a[e]=f?b:JSON.stringify(b)):a[e]=f?b:JSON.stringify(b):a[e]=b}return a}function v({floors:c,visibleSublayers:f}){const g=
!(null==c||!c.length);f=f.filter(a=>null!=a.definitionExpression||g&&null!=a.floorInfo);return f.length?f.map(a=>{var b=m.getLayerFloorFilterClause(c,a);b=r.isSome(b)?m.combineFloorsDefinitionExpression(b,a):a.definitionExpression;a={id:a.id,definitionExpression:null};b&&(a.definitionExpression=b);return a}):null}l.asValidOptions=function(c,f){return f?{...f,query:{...c,...f.query}}:{query:c}};l.encode=p;l.parseUrl=function(c){return"string"===typeof c?t.urlToObject(c):c};l.toDynamicLayersJSON=function({mapExtent:c,
floors:f,width:g,sublayers:a,layerIds:b}){const e={};g={extent:c,width:g,spatialReference:null==c?void 0:c.spatialReference};c=a;null!=b&&b.length&&a&&(c=a.filter(d=>b.includes(d.id)));const h=u.getScale(g),n=[],q=d=>{const k=0===h,w=0===d.minScale||h<=d.minScale,x=0===d.maxScale||h>=d.maxScale;d.visible&&(k||w&&x)&&(d.sublayers?d.sublayers.forEach(q):n.unshift(d))};c&&c.forEach(q);c&&c.length?(a=n.map(d=>{const k=m.getLayerFloorFilterClause(f,d);return d.toExportImageJSON(k)}),(g=a.some(d=>"mapLayer"===
d.source.type?d.source.mapLayerId!==d.id:"dataLayer"===d.source.type))?(a=JSON.stringify(a),"[]"===a&&(a="[{}]"),e.dynamicLayers=a):g||(null!=b&&b.length?e.layerIds=b:(a=c.map(({id:d})=>d),a.length&&(e.layerIds=a)),(a=v({floors:f,visibleSublayers:n}))&&a.length&&(a=a.reduce((d,k)=>{k.definitionExpression&&(d[k.id]=k.definitionExpression);return d},{}),Object.keys(a).length&&(e.layerDefs=JSON.stringify(a))))):null!=b&&b.length&&(e.layerIds=b);return e};Object.defineProperty(l,"__esModule",{value:!0})});