// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Clonable ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/Point".split(" "),function(h,c,b,e,f,m,n,p,k,l){b=function(g){function d(a){a=g.call(this,a)||this;a.position=null;return a}h._inheritsLoose(d,g);d.prototype.equals=function(a){return e.equalsMaybe(this.position,a.position)&&e.equalsMaybe(this.intersection,
a.intersection)};return d}(b.Clonable);c.__decorate([f.property({type:l})],b.prototype,"position",void 0);c.__decorate([f.property()],b.prototype,"intersection",void 0);return b=c.__decorate([k.subclass("esri.analysis.LineOfSightAnalysisObserver")],b)});