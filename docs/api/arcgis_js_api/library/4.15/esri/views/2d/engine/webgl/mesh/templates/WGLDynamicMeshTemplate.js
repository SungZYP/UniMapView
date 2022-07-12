// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/promiseUtils ../../../../../../symbols/cim/cimAnalyzer ./WGLMeshTemplate".split(" "),function(d,e,m,n,k,p,q){Object.defineProperty(e,"__esModule",{value:!0});var l=n.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");d=function(d){function f(c){var a=d.call(this)||this;a._ongoingMaterialRequestMap=new Map;a._materialCache=new Map;a._dynamicPropertyMap=new Map;a._cimLayer=
c;return a}m(f,d);f.prototype.analyze=function(c,a,d,f){var e=this,h=this._materialCache,g=this._cimLayer.materialHash;if(!g)return l.error("A Dynamic mesh template must have a material hash value or function!"),k.reject(null);var b="function"===typeof g?g(a,d,f):g;if(h.has(b))return c=h.get(b),k.resolve(c);if(this._ongoingMaterialRequestMap.has(b))return this._ongoingMaterialRequestMap.get(b);a=p.analyzeCIMResource(this._cimLayer.cim,this._cimLayer.materialOverrides);a.mosaicHash=b;c=c.getMosaicItem(a,
!1).then(function(a){e._ongoingMaterialRequestMap.delete(b);h.set(b,a);return a}).catch(function(a){e._ongoingMaterialRequestMap.delete(b);l.error(".analyze()",a.message);return null});this._ongoingMaterialRequestMap.set(b,c);return c};return f}(q.default);e.default=d});