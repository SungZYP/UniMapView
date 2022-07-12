// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe","../../../../../core/MemCache","../../../../../core/uid","../../lib/StaticFloat32ArrayObject"],function(g,h,k,l,m){function n(c,d){if(d===k.RemoveMode.ALL)c.forEach(a=>a.dispose());else return d=c.pop(),c=c.length*d.array.byteLength,d.dispose(),c}const p=k.MIN_PRIORITY+1;let q=function(){function c(a,e,b){this._rctx=a;this._locations=e;this._layout=b;this._cache=a.newCache(`MergedRenderer pool ${l.generateUID()}`,n)}var d=c.prototype;d.dispose=function(){this._cache.destroy()};
d.newBuffer=function(a){const e=a.toString(),b=this._cache.pop(e);return h.isSome(b)?(a=b.pop(),0<b.length&&this._cache.put(e,b,a.array.byteLength*b.length,p),a):new m.StaticFloat32ArrayObject(this._rctx,this._locations,this._layout,a)};d.deleteBuffer=function(a){const e=a.array.byteLength,b=a.array.length.toString(),f=this._cache.pop(b);h.isSome(f)?(f.push(a),this._cache.put(b,f,e*f.length,-1)):this._cache.put(b,[a],e,-1);return null};return c}();g.MergedGeometryBufferPool=q;Object.defineProperty(g,
"__esModule",{value:!0})});