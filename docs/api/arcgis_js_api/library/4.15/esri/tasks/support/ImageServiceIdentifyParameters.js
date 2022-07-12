// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../TimeExtent ../../core/JSONSupport ../../core/accessorSupport/decorators ../../geometry/Point ../../geometry/support/jsonUtils ../../layers/support/MosaicRule ../../layers/support/RasterFunction".split(" "),function(q,r,k,d,g,l,m,c,n,p,h,e){return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a.geometry=null;a.renderingRules=null;a.pixelSize=
null;a.returnGeometry=!0;a.returnCatalogItems=!0;a.returnPixelValues=!0;a.maxItemCount=null;a.timeExtent=null;a.raster=void 0;a.viewId=void 0;return a}k(b,f);b.prototype.writeGeometry=function(a,b,c){null!=a&&(b.geometryType=p.getJsonType(a),b[c]=JSON.stringify(a.toJSON()))};Object.defineProperty(b.prototype,"mosaicRule",{set:function(a){a&&a.mosaicMethod&&(a=h.fromJSON(g({},a.toJSON(),{mosaicMethod:a.mosaicMethod,mosaicOperation:a.mosaicOperation})));this._set("mosaicRule",a)},enumerable:!0,configurable:!0});
b.prototype.writeMosaicRule=function(a,b,c){null!=a&&(b[c]=JSON.stringify(a.toJSON()))};Object.defineProperty(b.prototype,"renderingRule",{set:function(a){a&&a.rasterFunction&&(a=e.fromJSON(g({},a.toJSON(),{rasterFunction:a.rasterFunction,rasterFunctionArguments:a.rasterFunctionArguments})));this._set("renderingRule",a)},enumerable:!0,configurable:!0});b.prototype.writeRenderingRule=function(a,b,c){null!=a&&(b[c]=JSON.stringify(a.toJSON()))};b.prototype.writeRenderingRules=function(a,b,c){null!=a&&
(b[c]=JSON.stringify(a.map(function(a){return a.toJSON()})))};b.prototype.writePixelSize=function(a,b,c){null!=a&&(b[c]=JSON.stringify(a.toJSON()))};b.prototype.writeTimeExtent=function(a,b,c){if(null!=a){var d=a.start?a.start.getTime():null;a=a.end?a.end.getTime():null;b[c]=null!=d?null!=a?d+","+a:""+d:null}};d([c.property({json:{write:!0}})],b.prototype,"geometry",void 0);d([c.writer("geometry")],b.prototype,"writeGeometry",null);d([c.property({type:h,json:{write:!0}})],b.prototype,"mosaicRule",
null);d([c.writer("mosaicRule")],b.prototype,"writeMosaicRule",null);d([c.property({type:e,json:{write:!0}})],b.prototype,"renderingRule",null);d([c.writer("renderingRule")],b.prototype,"writeRenderingRule",null);d([c.property({type:[e],json:{write:!0}})],b.prototype,"renderingRules",void 0);d([c.writer("renderingRules")],b.prototype,"writeRenderingRules",null);d([c.property({type:n,json:{write:!0}})],b.prototype,"pixelSize",void 0);d([c.writer("pixelSize")],b.prototype,"writePixelSize",null);d([c.property({type:Boolean,
json:{write:!0}})],b.prototype,"returnGeometry",void 0);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"returnCatalogItems",void 0);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"returnPixelValues",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"maxItemCount",void 0);d([c.property({type:l,json:{write:{target:"time"}}})],b.prototype,"timeExtent",void 0);d([c.writer("timeExtent")],b.prototype,"writeTimeExtent",null);d([c.property({json:{write:!0}})],b.prototype,
"raster",void 0);d([c.property({json:{write:!0}})],b.prototype,"viewId",void 0);return b=d([c.subclass("esri.tasks.support.ImageServiceIdentifyParameters")],b)}(c.declared(m.JSONSupport))});