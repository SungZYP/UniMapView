// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey ../../../../webgl/enums".split(" "),function(u,v,w,x,y,z,a){return function(m){function h(){return m.apply(this,arguments)||this}u._inheritsLoose(h,m);var k=h.prototype;k.dispose=function(){};k.getGeometryType=function(){return w.WGLGeometryType.TEXT};k.drawGeometry=function(e,f,g,b){const {context:c,painter:n,rendererInfo:l,state:p,passOptions:q}=e,d=z.TextMaterialKey.load(g.materialKey),
{bufferLayouts:A,attributes:r}=x.createProgramDescriptor(d.data,{geometry:[{location:0,name:"a_pos",count:2,type:a.DataType.SHORT},{location:1,name:"a_id",count:4,type:a.DataType.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:a.DataType.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:a.DataType.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:a.DataType.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:a.DataType.BYTE},{location:6,name:"a_zoomRange",
count:2,type:a.DataType.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",count:2,type:a.DataType.SHORT},{location:8,name:"a_texCoords",count:2,type:a.DataType.UNSIGNED_SHORT}]});b=n.materialManager.getMaterialProgram(e,d,"materials/text",r,b);c.useProgram(b);let t=a.PrimitiveType.TRIANGLES;v.isSome(q)&&"hittest"===q.type&&(t=a.PrimitiveType.POINTS);this._setSharedUniforms(b,e,f);n.textureManager.bindTextures(c,b,d);b.setUniformMatrix3fv("u_displayMat3",p.displayMat3);b.setUniformMatrix3fv("u_displayViewMat3",
p.displayViewMat3);this._setSizeVVUniforms(d,b,l,f);this._setColorAndOpacityVVUniforms(d,b,l);this._setRotationVVUniforms(d,b,l);b.setUniform1f("u_isHalo",1);e=g.target.getVAO(c,A,r);f=g.indexFrom*Uint32Array.BYTES_PER_ELEMENT;c.bindVAO(e);c.drawElements(a.PrimitiveType.TRIANGLES,g.indexCount,a.DataType.UNSIGNED_INT,f);b.setUniform1f("u_isHalo",0);c.drawElements(t,g.indexCount,a.DataType.UNSIGNED_INT,f)};return h}(y)});