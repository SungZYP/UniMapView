// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject"],function(b,d,e,f,g){let m=function(){function a(c,h,k,l){this.vao=new g.VertexArrayObject(c,h,{geometry:k},{geometry:e.BufferObject.createVertex(c,f.Usage.STATIC_DRAW)});this.array=new Float32Array(l);this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}a.prototype.dispose=function(){this.vao.dispose(!0)};d._createClass(a,[{key:"length",
get:function(){return this.array.length}}]);return a}();b.StaticFloat32ArrayObject=m;Object.defineProperty(b,"__esModule",{value:!0})});