// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./AggregatedGeometry ./FunctionResult ./NetworkElement".split(" "),function(g,c,a,d,n,p,q,h,k,l,m){a=function(e){function f(b){b=e.call(this,b)||this;b.aggregatedGeometry=null;b.elements=null;b.globalFunctionResults=
null;b.kFeaturesForKNNFound=!1;b.startingPointsIgnored=!1;b.warnings=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:k,json:{write:!0},readOnly:!0})],a.prototype,"aggregatedGeometry",void 0);c.__decorate([d.property({type:[m],json:{write:!0},readOnly:!0})],a.prototype,"elements",void 0);c.__decorate([d.property({type:[l],json:{write:!0},readOnly:!0})],a.prototype,"globalFunctionResults",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0},readOnly:!0})],
a.prototype,"kFeaturesForKNNFound",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0},readOnly:!0})],a.prototype,"startingPointsIgnored",void 0);c.__decorate([d.property({type:[String],json:{write:!0},readOnly:!0})],a.prototype,"warnings",void 0);return a=c.__decorate([h.subclass("esri.rest.networks.support.TraceResult")],a)});