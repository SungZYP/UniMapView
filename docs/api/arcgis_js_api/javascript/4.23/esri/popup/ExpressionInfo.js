// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,d,l,m,n,k){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.name=null;b.title=null;b.expression=null;b.returnType=null;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({name:this.name,title:this.title,
expression:this.expression,returnType:this.returnType})};return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"expression",void 0);c.__decorate([d.property({type:["string","number"],json:{write:!0}})],a.prototype,"returnType",void 0);return a=e=c.__decorate([k.subclass("esri.popup.ExpressionInfo")],
a)});