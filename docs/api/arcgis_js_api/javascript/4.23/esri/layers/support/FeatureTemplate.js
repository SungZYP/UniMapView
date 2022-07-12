// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,e,k,d,m,n,p,l){e=new e.JSONMap({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",
esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});a=function(f){function g(b){b=f.call(this,b)||this;b.name=null;b.description=null;b.drawingTool=
null;b.prototype=null;b.thumbnail=null;return b}h._inheritsLoose(g,f);return g}(a.ClonableMixin(k.JSONSupport));c.__decorate([d.property({json:{write:!0}})],a.prototype,"name",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"description",void 0);c.__decorate([d.property({json:{read:e.read,write:e.write}})],a.prototype,"drawingTool",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"prototype",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"thumbnail",
void 0);return a=c.__decorate([l.subclass("esri.layers.support.FeatureTemplate")],a)});