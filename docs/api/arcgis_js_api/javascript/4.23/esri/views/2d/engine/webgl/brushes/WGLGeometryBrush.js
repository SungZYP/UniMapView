// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","./WGLBrush","../../../../webgl/enums"],function(q,n,l,r,f){return function(p){function m(){var a=p.apply(this,arguments)||this;a._computeDesc=new Map;return a}q._inheritsLoose(m,p);var g=m.prototype;g.prepareState=function({context:a},b,c){c=c&&-1!==c.indexOf("hittest");a.setBlendingEnabled(!c);a.setBlendFunctionSeparate(f.BlendFactor.ONE,f.BlendFactor.ONE_MINUS_SRC_ALPHA,f.BlendFactor.ONE,f.BlendFactor.ONE_MINUS_SRC_ALPHA);
a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0);a.setStencilFunction(f.CompareFunction.EQUAL,b.stencilRef,255)};g.draw=function(a,b,c){var d=this.getGeometryType();b.commit(a);d=b.getGeometry(d);n.isNone(d)||(a.timeline.begin(this.name),a.attributeView.bindTextures(a.context),d.forEachCommand(e=>this.drawGeometry(a,b,e,c)))};g._setSharedUniforms=function(a,b,c){const {displayLevel:d,pixelRatio:e,state:h,passOptions:k}=b;n.isSome(k)&&"hittest"===k.type&&(a.setUniform2fv("u_hittestPos",
k.position),a.setUniform1f("u_hittestDist",k.distance));a.setUniform1f("u_pixelRatio",e);a.setUniformMatrix3fv("u_tileMat3",c.transforms.tileMat3);a.setUniformMatrix3fv("u_viewMat3",h.viewMat3);a.setUniformMatrix3fv("u_dvsMat3",c.transforms.dvs);a.setUniformMatrix3fv("u_displayViewMat3",h.displayViewMat3);a.setUniform1f("u_currentZoom",Math.round(d*l.MIN_MAX_ZOOM_PRECISION_FACTOR));a.setUniform1i("u_attributeTextureSize",b.attributeView.size);a.setUniform1i("u_attributeData0",l.TEXTURE_BINDING_ATTRIBUTE_DATA_0);
a.setUniform1i("u_attributeData1",l.TEXTURE_BINDING_ATTRIBUTE_DATA_1);a.setUniform1i("u_attributeData2",l.TEXTURE_BINDING_ATTRIBUTE_DATA_2);a.setUniform1i("u_attributeData3",l.TEXTURE_BINDING_ATTRIBUTE_DATA_3)};g._setSizeVVUniforms=function(a,b,c,d){a.vvSizeMinMaxValue&&b.setUniform4fv("u_vvSizeMinMaxValue",c.vvSizeMinMaxValue);a.vvSizeScaleStops&&b.setUniform1f("u_vvSizeScaleStopsValue",c.vvSizeScaleStopsValue);a.vvSizeFieldStops&&(d=c.getSizeVVFieldStops(d.key.level),b.setUniform1fv("u_vvSizeFieldStopsValues",
d.values),b.setUniform1fv("u_vvSizeFieldStopsSizes",d.sizes));a.vvSizeUnitValue&&b.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",c.vvSizeUnitValueToPixelsRatio)};g._setColorAndOpacityVVUniforms=function(a,b,c){a.vvColor&&(b.setUniform1fv("u_vvColorValues",c.vvColorValues),b.setUniform4fv("u_vvColors",c.vvColors));a.vvOpacity&&(b.setUniform1fv("u_vvOpacityValues",c.vvOpacityValues),b.setUniform1fv("u_vvOpacities",c.vvOpacities))};g._setRotationVVUniforms=function(a,b,c){a.vvRotation&&b.setUniform1f("u_vvRotationType",
"geographic"===c.vvMaterialParameters.vvRotationType?0:1)};g._getTriangleDesc=function(a,b){var c=this._computeDesc.get(a);if(!c){c=b.strides;const e=b.strides.geometry,h=new Map(b.attributes);var d=b.bufferLayouts.geometry.map(k=>({...k}));b=Math.max(...b.attributes.values());d={geometry:d};d.geometry.push({count:2,name:"a_pos1",divisor:0,normalized:!1,offset:e,stride:e,type:f.DataType.SHORT});d.geometry.push({count:2,name:"a_pos2",divisor:0,normalized:!1,offset:2*e,stride:e,type:f.DataType.SHORT});
h.set("a_pos1",b+1);h.set("a_pos2",b+2);c={bufferLayouts:d,attributes:h,strides:c};this._computeDesc.set(a,c)}return c};return m}(r)});