// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType".split(" "),function(c,a,f,e,g,h,d,k){Object.defineProperty(a,"__esModule",{value:!0});c=function(c){function b(a){a=c.call(this,a)||this;a.id="";a.sublayerIds=null;return a}f(b,c);a=b;b.prototype.clone=function(){return new a({id:this.id,sublayerIds:h.clone(this.sublayerIds)})};var a;
e([d.property({type:String,json:{write:!0}})],b.prototype,"id",void 0);e([d.property({type:[k.Integer],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],b.prototype,"sublayerIds",void 0);return b=a=e([d.subclass("esri.webscene.support.SlideVisibleLayer")],b)}(d.declared(g.JSONSupport));a.SlideVisibleLayer=c;a.default=c});