// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../environment/CloudsComposition ../core/shaderLibrary/ShaderOutputOptions ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderLibrary/shading/ScreenSpaceReflections.glsl ../core/shaderLibrary/shading/WaterDistortion.glsl ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../../../../chunks/WaterSurface.glsl ../../../webgl/renderState".split(" "),
function(w,q,u,h,v,x,y,d,z,A,B,C,D,E,F,r,e,p,g,m,G,n,H,I,t){p=function(l){function k(b,a,f){a=l.call(this,b,a,f)||this;a._textureRepository=b.waterTextureRepository;return a}u._inheritsLoose(k,l);var c=k.prototype;c.initializeProgram=function(b){var a=k.shader.get();const f=this.configuration;a=a.build({oitEnabled:f.transparencyPassType===m.TransparencyPassType.Color,output:f.output,viewingMode:b.viewingMode,slicePlaneEnabled:f.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,
receiveShadows:f.receiveShadows,pbrMode:C.PBRMode.Water,useCustomDTRExponentForWater:!0,ssrEnabled:f.useSSR,cloudsReflectionsEnabled:v("enable-feature:clouds-reflections"),highStepCount:!0,multipassTerrainEnabled:f.multipassTerrainEnabled,cullAboveGround:f.cullAboveGround});return new H.Program(b.rctx,a,G.Default3D)};c.bindPass=function(b,a){r.bindProjectionMatrix(this.program,a.camera.projectionMatrix);a.multipassTerrainEnabled&&(this.program.setUniform2fv("nearFar",a.camera.nearFar),this.program.setUniform2fv("inverseViewport",
a.inverseViewport),B.bindMultipassTerrainTexture(this.program,a));this.configuration.output===d.ShaderOutput.Color&&(a.lighting.setUniforms(this.program,!1,!1),E.bindSSRUniforms(this.program,a),v("enable-feature:clouds-reflections")&&x.isSome(a.cloudsCompositionParams)&&y.bindCloudsComposition(this.program,a.camera,a.cloudsCompositionParams));if(this.configuration.output===d.ShaderOutput.Color||this.configuration.output===d.ShaderOutput.Normal)F.bindWaterDistortionUniforms(this.program,b),this._textureRepository.bind(this.program);
this.program.setUniform4fv("waterColor",b.color);this.configuration.output===d.ShaderOutput.Highlight&&A.bindOutputHighlight(this.program,a)};c.bindDraw=function(b){r.bindView(this.program,b);this.program.rebindTextures();this.configuration.output!==d.ShaderOutput.Color&&this.configuration.output!==d.ShaderOutput.Alpha||r.bindCameraPosition(this.program,b.origin,b.camera.viewInverseTransposeMatrix);this.configuration.output===d.ShaderOutput.Color&&D.bindReadShadowMapUniforms(this.program,b);this.configuration.output!==
d.ShaderOutput.Color&&this.configuration.output!==d.ShaderOutput.Alpha&&this.configuration.output!==d.ShaderOutput.Highlight||z.bindSliceUniformsWithOrigin(this.program,this.configuration,b)};c._setPipelineState=function(b){const a=this.configuration,f=b===m.TransparencyPassType.NONE,J=b===m.TransparencyPassType.FrontFace;return t.makePipelineState({blending:a.output!==d.ShaderOutput.Normal&&a.output!==d.ShaderOutput.Highlight&&a.transparent?f?n.blendingDefault:n.oitBlending(b):null,depthTest:{func:n.oitDepthTest(b)},
depthWrite:f?a.writeDepth&&t.defaultDepthWriteParams:n.oitDepthWrite(b),colorWrite:t.defaultColorWriteParams,polygonOffset:f||J?null:n.getOITPolygonOffset(a.enableOffset)})};c.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};return k}(p.ShaderTechnique);p.shader=new e.ReloadableShaderModule(I.WaterSurface,()=>new Promise((l,k)=>w(["../shaders/WaterSurface.glsl"],l,k)));e=function(l){function k(){var c=l.apply(this,arguments)||this;c.output=d.ShaderOutput.Color;
c.receiveShadows=!1;c.slicePlaneEnabled=!1;c.transparent=!1;c.enableOffset=!0;c.writeDepth=!1;c.useSSR=!1;c.isDraped=!1;c.transparencyPassType=m.TransparencyPassType.NONE;c.multipassTerrainEnabled=!1;c.cullAboveGround=!1;return c}u._inheritsLoose(k,l);return k}(g.ShaderTechniqueConfiguration);h.__decorate([g.parameter({count:d.ShaderOutput.COUNT})],e.prototype,"output",void 0);h.__decorate([g.parameter()],e.prototype,"receiveShadows",void 0);h.__decorate([g.parameter()],e.prototype,"slicePlaneEnabled",
void 0);h.__decorate([g.parameter()],e.prototype,"transparent",void 0);h.__decorate([g.parameter()],e.prototype,"enableOffset",void 0);h.__decorate([g.parameter()],e.prototype,"writeDepth",void 0);h.__decorate([g.parameter()],e.prototype,"useSSR",void 0);h.__decorate([g.parameter()],e.prototype,"isDraped",void 0);h.__decorate([g.parameter({count:m.TransparencyPassType.COUNT})],e.prototype,"transparencyPassType",void 0);h.__decorate([g.parameter()],e.prototype,"multipassTerrainEnabled",void 0);h.__decorate([g.parameter()],
e.prototype,"cullAboveGround",void 0);q.WaterTechnique=p;q.WaterTechniqueConfiguration=e;Object.defineProperty(q,"__esModule",{value:!0})});