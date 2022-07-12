// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./imageryRendererUtils ./MosaicRule ./rasterEnums ./RasterFunction".split(" "),function(c,r,d,v,g,y,z,A,e,w,l,k,x,m,t){c.ExportImageServiceParameters=
function(u){function n(){var a=u.apply(this,arguments)||this;a.layer=null;a.adjustAspectRatio=void 0;a.bandIds=void 0;a.compression=void 0;a.compressionQuality=void 0;a.compressionTolerance=.01;a.format=null;a.interpolation=null;a.noData=null;a.noDataInterpretation=void 0;a.pixelType=void 0;a.lercVersion=2;return a}r._inheritsLoose(n,u);var h=n.prototype;h.writeAdjustAspectRatio=function(a,b,f){10.3>this.layer.version||(b[f]=a)};h.writeCompressionQuality=function(a,b,f){this.format&&-1<this.format.toLowerCase().indexOf("jpg")&&
null!=a&&(b[f]=a)};h.writeCompressionTolerance=function(a,b,f){"lerc"===this.format&&null!=a&&(b[f]=a)};h.writeLercVersion=function(a,b,f){"lerc"===this.format&&10.5<=this.layer.version&&(b[f]=a)};h.combineRendererWithRenderingRule=function(){var a;const b=this.layer,{rasterInfo:f,renderingRule:p,renderer:q}=b;return q&&k.isSupportedRendererType(q)?k.combineRenderingRules(k.convertRendererToRenderingRule(q,{rasterAttributeTable:f.attributeTable,pixelType:f.pixelType,dataType:f.dataType,bandProperties:null==
(a=f.keyProperties)?void 0:a.BandProperties,convertColorRampToColormap:10.6>b.version,convertToRFT:null!=p&&p.rasterFunctionDefinition?!0:!1}),p):p};h._addResampleRasterFunction=function(a){var b;if("vector-field"!==(null==(b=this.layer.renderer)?void 0:b.type)||"Resample"===(null==a?void 0:a.functionName))return a;b=new t({functionName:"Resample",functionArguments:{ResamplingType:"esriImageServiceDataTypeVector-UV"===this.layer.serviceDataType?7:10,InputCellSize:{x:this.layer.pixelSizeX,y:this.layer.pixelSizeY}}});
b=null!=a&&a.rasterFunctionDefinition?new t({rasterFunctionDefinition:k.convertRenderingRuleToRFT(b)}):b;return k.combineRenderingRules(b,a)};r._createClass(n,[{key:"version",get:function(){const a=this.layer;a.commitProperty("bandIds");a.commitProperty("format");a.commitProperty("compressionQuality");a.commitProperty("compressionTolerance");a.commitProperty("interpolation");a.commitProperty("noData");a.commitProperty("noDataInterpretation");a.commitProperty("mosaicRule");a.commitProperty("renderingRule");
a.commitProperty("adjustAspectRatio");a.commitProperty("pixelFilter");a.commitProperty("renderer");a.commitProperty("definitionExpression");return(this._get("version")||0)+1},set:function(a){this._set("version",a)}},{key:"mosaicRule",get:function(){var a=this.layer;let b=a.mosaicRule;a=a.definitionExpression;b?a&&a!==b.where&&(b=b.clone(),b.where=a):a&&(b=new x({where:a}));return b}},{key:"renderingRule",get:function(){var a=this.layer;let b=a.renderingRule;const f=a.pixelFilter;a=!a.format||-1<a.format.indexOf("jpg")||
-1<a.format.indexOf("png");b=this._addResampleRasterFunction(b);a&&!f&&(b=this.combineRendererWithRenderingRule());return b}}]);return n}(v.JSONSupport);d.__decorate([e.property()],c.ExportImageServiceParameters.prototype,"layer",void 0);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"adjustAspectRatio",void 0);d.__decorate([l.writer("adjustAspectRatio")],c.ExportImageServiceParameters.prototype,"writeAdjustAspectRatio",null);d.__decorate([e.property({json:{write:!0}}),
g.aliasOf("layer.bandIds")],c.ExportImageServiceParameters.prototype,"bandIds",void 0);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"compression",void 0);d.__decorate([e.property({json:{write:!0}}),g.aliasOf("layer.compressionQuality")],c.ExportImageServiceParameters.prototype,"compressionQuality",void 0);d.__decorate([l.writer("compressionQuality")],c.ExportImageServiceParameters.prototype,"writeCompressionQuality",null);d.__decorate([e.property({json:{write:!0}}),
g.aliasOf("layer.compressionTolerance")],c.ExportImageServiceParameters.prototype,"compressionTolerance",void 0);d.__decorate([l.writer("compressionTolerance")],c.ExportImageServiceParameters.prototype,"writeCompressionTolerance",null);d.__decorate([e.property({json:{write:!0}}),g.aliasOf("layer.format")],c.ExportImageServiceParameters.prototype,"format",void 0);d.__decorate([e.property({type:String,json:{read:{reader:m.interpolationKebab.read},write:{writer:m.interpolationKebab.write}}}),g.aliasOf("layer.interpolation")],
c.ExportImageServiceParameters.prototype,"interpolation",void 0);d.__decorate([e.property({json:{write:!0}}),g.aliasOf("layer.noData")],c.ExportImageServiceParameters.prototype,"noData",void 0);d.__decorate([e.property({type:String,json:{read:{reader:m.noDataInterpretationKebab.read},write:{writer:m.noDataInterpretationKebab.write}}}),g.aliasOf("layer.noDataInterpretation")],c.ExportImageServiceParameters.prototype,"noDataInterpretation",void 0);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,
"pixelType",void 0);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"lercVersion",void 0);d.__decorate([l.writer("lercVersion")],c.ExportImageServiceParameters.prototype,"writeLercVersion",null);d.__decorate([e.property({type:Number})],c.ExportImageServiceParameters.prototype,"version",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"mosaicRule",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,
"renderingRule",null);c.ExportImageServiceParameters=d.__decorate([w.subclass("esri.layers.mixins.ExportImageServiceParameters")],c.ExportImageServiceParameters);Object.defineProperty(c,"__esModule",{value:!0})});