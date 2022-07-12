// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutputOptions ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/terrain/Overlay.glsl ../../../../chunks/Terrain.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/DefaultVertexAttributeLocations ../lib/Program ../lib/StencilUtils ../../../webgl/enums ../../../webgl/renderState".split(" "),
function(u,n,q,e,r,v,t,b,w,m,c,x,y,z,A,p,l){m=function(k){function g(){var h=k.apply(this,arguments)||this;h.useStencil=!1;return h}q._inheritsLoose(g,k);var a=g.prototype;a.initializeProgram=function(h){var f=g.shader.get();const d=this.configuration;f=f.build({overlayMode:d.overlayMode,output:d.output,viewingMode:h.viewingMode,slicePlaneEnabled:d.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,textureFadingEnabled:d.textureFadingEnabled&&!d.renderOccluded,hasBackgroundColor:d.hasBackgroundColor,
useGrid:d.useGrid,receiveShadows:d.receiveShadows&&!d.renderOccluded,receiveAmbientOcclusion:!1,atmosphere:d.atmosphere,tileBorders:d.tileBorders,screenSizePerspective:d.screenSizePerspective,pbrMode:v.PBRMode.Disabled,ssrEnabled:d.ssrEnabled,highStepCount:!1});return new z.Program(h.rctx,f,y.Default3D)};a.initializePipeline=function(){this._stencilPipelineState=this._createPipeline(!0);return this._createPipeline(!1)};a._createPipeline=function(h){const f=this.configuration,d=f.backfaceCullingEnabled&&
!f.renderOccluded;return l.makePipelineState({blending:f.renderOccluded?l.simpleBlendingParams(p.BlendFactor.ONE,p.BlendFactor.ONE_MINUS_SRC_ALPHA):null,culling:d&&l.backFaceCullingParams,depthTest:!f.renderOccluded&&{func:p.CompareFunction.LESS},depthWrite:!f.renderOccluded&&l.defaultDepthWriteParams,colorWrite:l.defaultColorWriteParams,stencilTest:h?A.renderWhenBitIsNotSet(x.StencilBits.IntegratedMeshMaskExcluded):null})};a.getPipelineState=function(h,f){return this.useStencil?this._stencilPipelineState:
k.prototype.getPipelineState.call(this,h,f)};return g}(m.ShaderTechnique);m.shader=new w.ReloadableShaderModule(b.TerrainShader,()=>new Promise((k,g)=>u(["../core/shaderLibrary/terrain/Terrain.glsl"],k,g)));b=function(k){function g(){var a=k.apply(this,arguments)||this;a.output=r.ShaderOutput.Color;a.overlayMode=t.OverlayMode.Disabled;a.atmosphere=!1;a.receiveShadows=!1;a.slicePlaneEnabled=!1;a.backfaceCullingEnabled=!1;a.stencilEnabled=!1;a.textureFadingEnabled=!1;a.hasBackgroundColor=!1;a.useGrid=
!1;a.renderOccluded=!1;a.ssrEnabled=!1;a.tileBorders=!1;a.screenSizePerspective=!1;return a}q._inheritsLoose(g,k);return g}(c.ShaderTechniqueConfiguration);e.__decorate([c.parameter({count:r.ShaderOutput.COUNT})],b.prototype,"output",void 0);e.__decorate([c.parameter({count:t.OverlayMode.COUNT})],b.prototype,"overlayMode",void 0);e.__decorate([c.parameter()],b.prototype,"atmosphere",void 0);e.__decorate([c.parameter()],b.prototype,"receiveShadows",void 0);e.__decorate([c.parameter()],b.prototype,
"slicePlaneEnabled",void 0);e.__decorate([c.parameter()],b.prototype,"backfaceCullingEnabled",void 0);e.__decorate([c.parameter()],b.prototype,"stencilEnabled",void 0);e.__decorate([c.parameter()],b.prototype,"textureFadingEnabled",void 0);e.__decorate([c.parameter()],b.prototype,"hasBackgroundColor",void 0);e.__decorate([c.parameter()],b.prototype,"useGrid",void 0);e.__decorate([c.parameter()],b.prototype,"renderOccluded",void 0);e.__decorate([c.parameter()],b.prototype,"ssrEnabled",void 0);e.__decorate([c.parameter()],
b.prototype,"tileBorders",void 0);e.__decorate([c.parameter()],b.prototype,"screenSizePerspective",void 0);n.TerrainTechnique=m;n.TerrainTechniqueConfiguration=b;Object.defineProperty(n,"__esModule",{value:!0})});