// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/RenderingContext"],function(h,k,d){d=function(e){function b(a,f,g){a=e.call(this,a,f)||this;a.newCache=g;a._refCount=1;return a}k._inheritsLoose(b,e);var c=b.prototype;c.dispose=function(){0<--this._refCount||e.prototype.dispose.call(this)};c.ref=function(){++this._refCount};c.useTechnique=function(a,f=null,g){this.useProgram(a.program);a.bindPipelineState(this,f,g);return a.program};c.isTechniqueCompiled=function(a){return a.program.isCompiled};
k._createClass(b,[{key:"test",get:function(){return this.programCache.test}}]);return b}(d.RenderingContext);h.RenderingContext=d;Object.defineProperty(h,"__esModule",{value:!0})});