// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/NestedMap","./Program"],function(f,h,k,l,m){let p=function(){function d(a){this._rctx=a;this._store=new l.NestedMap}var g=d.prototype;g.dispose=function(){this._store.forEach(a=>a.forEach(b=>b.dispose()));this._store.clear()};g.acquire=function(a,b,c,n){const e=this._store.get(a,b);if(k.isSome(e))return e.ref(),e;c=new m.Program(this._rctx,a,b,c,n);c.ref();this._store.set(a,b,c);return c};h._createClass(d,[{key:"test",
get:function(){let a=0;this._store.forEach(b=>b.forEach(c=>a+=c.hasGLName?2:1));return{cachedWebGLObjects:a}}}]);return d}();f.ProgramCache=p;Object.defineProperty(f,"__esModule",{value:!0})});