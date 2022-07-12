// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,f,m,n,p,k,l){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.type="snowy";b.cloudCover=.5;b.precipitation=.5;return b}h._inheritsLoose(e,
g);e.prototype.clone=function(){return new d({cloudCover:this.cloudCover,precipitation:this.precipitation})};return e}(a);c.__decorate([k.enumeration({snowy:"snowy"})],a.prototype,"type",void 0);c.__decorate([f.property({type:Number,nonNullable:!0,range:{min:0,max:1}})],a.prototype,"cloudCover",void 0);c.__decorate([f.property({type:Number,nonNullable:!0,range:{min:0,max:1}})],a.prototype,"precipitation",void 0);return a=d=c.__decorate([l.subclass("esri.views.3d.environment.SnowyWeather")],a)});