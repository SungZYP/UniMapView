// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./LineSymbol3DLayer ./PathSymbol3DLayer ./Symbol3D".split(" "),function(n,f,c,g,p,t,q,r,h,k,b){var d;const l=c.ofType({base:null,key:"type",typeMap:{line:h,path:k}});c=c.ofType({base:null,key:"type",typeMap:{line:h,path:k}});b=d=function(m){function e(a){a=
m.call(this,a)||this;a.symbolLayers=new l;a.type="line-3d";return a}n._inheritsLoose(e,m);e.prototype.clone=function(){return new d({styleOrigin:g.clone(this.styleOrigin),symbolLayers:g.clone(this.symbolLayers),thumbnail:g.clone(this.thumbnail)})};e.fromSimpleLineSymbol=function(a){return new d({symbolLayers:[h.fromSimpleLineSymbol(a)]})};return e}(b);f.__decorate([p.property({type:l,json:{type:c}})],b.prototype,"symbolLayers",void 0);f.__decorate([q.enumeration({LineSymbol3D:"line-3d"},{readOnly:!0})],
b.prototype,"type",void 0);return b=d=f.__decorate([r.subclass("esri.symbols.LineSymbol3D")],b)});