// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./MeshTexture".split(" "),function(p,c,q,b,e,d,t,u,v,r,l){var g;b=g=function(m){function h(a){a=m.call(this,a)||this;a.color=null;a.colorTexture=null;a.normalTexture=null;a.alphaMode="auto";a.alphaCutoff=.5;a.doubleSided=
!0;return a}p._inheritsLoose(h,m);var k=h.prototype;k.clone=function(){return this.cloneWithDeduplication(null,new Map)};k.cloneWithDeduplication=function(a,f){const n=e.isSome(a)?a.get(this):null;if(n)return n;f=new g(this.clonePropertiesWithDeduplication(f));e.isSome(a)&&a.set(this,f);return f};k.clonePropertiesWithDeduplication=function(a){return{color:e.isSome(this.color)?this.color.clone():null,colorTexture:e.isSome(this.colorTexture)?this.colorTexture.cloneWithDeduplication(a):null,normalTexture:e.isSome(this.normalTexture)?
this.normalTexture.cloneWithDeduplication(a):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}};return h}(b.JSONSupport);c.__decorate([d.property({type:q,json:{write:!0}})],b.prototype,"color",void 0);c.__decorate([d.property({type:l,json:{write:!0}})],b.prototype,"colorTexture",void 0);c.__decorate([d.property({type:l,json:{write:!0}})],b.prototype,"normalTexture",void 0);c.__decorate([d.property({nonNullable:!0,json:{write:!0}})],b.prototype,"alphaMode",void 0);
c.__decorate([d.property({nonNullable:!0,json:{write:!0}})],b.prototype,"alphaCutoff",void 0);c.__decorate([d.property({nonNullable:!0,json:{write:!0}})],b.prototype,"doubleSided",void 0);return b=g=c.__decorate([r.subclass("esri.geometry.support.MeshMaterial")],b)});