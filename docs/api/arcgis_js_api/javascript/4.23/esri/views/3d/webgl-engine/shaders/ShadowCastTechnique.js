// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../../../../chunks/ShadowCast.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(t,m,n,p,f,k,l,u,v,w,b,h,g){k=function(e){function c(a,q){var r;return r=
e.call(this,a,q,()=>r.destroy())||this}n._inheritsLoose(c,e);var d=c.prototype;d.initializeProgram=function(a){const q=c.shader.get().build(this.configuration);return new w.Program(a.rctx,q,u.Default3D)};d.initializePipeline=function(a){switch(this.configuration.pass){case b.ShadowCastPass.Accumulate:return g.makePipelineState({blending:g.separateBlendingParams(h.BlendFactor.ONE,h.BlendFactor.ONE,h.BlendFactor.ONE,h.BlendFactor.ONE),colorWrite:g.defaultColorWriteParams,depthTest:null,depthWrite:null});
case b.ShadowCastPass.Visualize:case b.ShadowCastPass.VisualizeCurrent:return g.makePipelineState({blending:v.blendingDefault,colorWrite:g.defaultColorWriteParams,depthTest:null,depthWrite:null})}return g.makePipelineState({})};d.bindPass=function(a){this.configuration.pass===b.ShadowCastPass.Accumulate||this.configuration.pass===b.ShadowCastPass.VisualizeCurrent?(this.program.bindTexture(a.linearDepthTexture,"depthMap"),a.shadowMap.bind(this.program),a.shadowMap.bindView(this.program,a.camera.center),
this.program.setUniform2fv("nearFar",a.camera.nearFar),this.program.setUniformMatrix4fv("inverseViewMatrix",a.inverseViewMatrix),this.program.setUniform4fv("projInfo",a.projInfo),this.program.setUniform2fv("zScale",a.zScale)):this.configuration.pass===b.ShadowCastPass.Visualize&&(this.program.bindTexture(a.shadowCastMap,"shadowCastMap"),this.program.setUniform1f("sampleScale",a.sampleScale),this.program.setUniform1f("opacityFromElevation",a.opacityFromElevation),this.program.setUniform4fv("uColor",
a.color),this.configuration.visualization===b.ShadowCastVisualization.Gradient&&this.configuration.bandsEnabled?this.program.setUniform1f("bandSize",a.bandSize):this.configuration.visualization===b.ShadowCastVisualization.Threshold&&this.program.setUniform1f("threshold",a.threshold))};n._createClass(c,[{key:"primitiveType",get:function(){return h.PrimitiveType.TRIANGLE_STRIP}}]);return c}(k.ShaderTechnique);k.shader=new f.ReloadableShaderModule(b.ShadowCast,()=>new Promise((e,c)=>t(["./ShadowCast.glsl"],
e,c)));f=function(e){function c(){var d=e.apply(this,arguments)||this;d.pass=b.ShadowCastPass.Accumulate;d.visualization=b.ShadowCastVisualization.Gradient;d.bandsEnabled=!1;return d}n._inheritsLoose(c,e);return c}(l.ShaderTechniqueConfiguration);p.__decorate([l.parameter({count:b.ShadowCastPass.COUNT})],f.prototype,"pass",void 0);p.__decorate([l.parameter()],f.prototype,"visualization",void 0);p.__decorate([l.parameter()],f.prototype,"bandsEnabled",void 0);m.ShadowCastTechnique=k;m.ShadowCastTechniqueConfiguration=
f;Object.defineProperty(m,"__esModule",{value:!0})});