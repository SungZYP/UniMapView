// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../core/PooledArray ../../../../../chunks/mat3 ../../../../../chunks/mat3f32 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../support/debugFlags ../../collections/Component/Material/ComponentTechnique ../../core/shaderLibrary/Slice.glsl ../../core/shaderLibrary/attributes/VertexPosition.glsl ../../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../../core/shaderLibrary/util/DoublePrecision.glsl ../../core/util/TwoVectorPosition ./EdgeShaderTechnique ./interfaces ../../shaders/sources/edgeRenderer/EdgeUtil.glsl ../../../../webgl/enums".split(" "),
function(g,v,r,l,m,w,p,x,y,z,t,A,B,C,D,q,d,k,E){const F={type:"uber",slicePlaneEnabled:!1,sliceHighlightDisabled:!1,strokesTexture:null,legacy:!0};let G=function(){function f(){this._value=0}var e=f.prototype;e.increment=function(){this._value++};e.decrement=function(){this._value--};v._createClass(f,[{key:"value",get:function(){return this._value}}]);return f}();const H={solid:k.EdgeUtilMode.SOLID,sketch:k.EdgeUtilMode.SKETCH,uber:k.EdgeUtilMode.MIXED};k=function(){function f(a,b,c){this.rctx=a;
this.shaderTechniqueRepository=b;this.config=new q.EdgeShaderTechniqueConfiguration;this.technique=null;this.refCount=new G;this.renderables=new Set;this.sortedRenderables={[d.Transparency.TRANSPARENT]:{[d.Transparency.TRANSPARENT]:new l,[d.Transparency.OPAQUE]:new l},[d.Transparency.OPAQUE]:{[d.Transparency.TRANSPARENT]:new l,[d.Transparency.OPAQUE]:new l}};this.renderablesDirty=!1;this.settings={...F,...c};this.key=f.getKey(this.settings.type,this.settings.slicePlaneEnabled,this.settings.legacy);
this.writerSettings={variants:this.settings.strokesTexture.variants,reducedPrecision:y.TESTS_DISABLE_OPTIMIZATIONS};this.config.legacy=this.settings.legacy;this.config.mode=H[this.settings.type];this.config.silhouette=!1;this.config.antialiasing=!!this.rctx.capabilities.blendMinMax;this.config.slicePlaneEnabled=this.settings.slicePlaneEnabled;this.config.doublePrecisionRequiresObfuscation=C.doublePrecisionRequiresObfuscation(a)}var e=f.prototype;e.dispose=function(){this.technique=r.releaseMaybe(this.technique)};
e.addRenderable=function(a){this.renderables.add(a);this.renderablesDirty=!0};e.removeRenderable=function(a){this.renderables.delete(a);this.renderablesDirty=!0};e.setRenderablesDirty=function(){this.renderablesDirty=!0};e.forEachRenderable=function(a,b){this.renderablesDirty&&this._sortRenderables();this.sortedRenderables[b][d.Transparency.TRANSPARENT].forAll(a);this.sortedRenderables[b][d.Transparency.OPAQUE].forAll(a)};e.setMultipassParameters=function(a){this.config.multipassTerrainEnabled=a.multipassTerrainEnabled?
a.multipassTerrainEnabled:!1;this.config.cullAboveGround=a.cullAboveGround?a.cullAboveGround:!1};e.bindRegularEdges=function(a,b){this.setMultipassParameters(a);this.config.silhouette=!1;this.technique=this.shaderTechniqueRepository.releaseAndAcquire(q.EdgeShaderTechnique,this.config,this.technique);this.rctx.useTechnique(this.technique,a.slot);this.technique.bindPass({bindParameters:a,edgeRenderParameters:b})};e.bindSilhouetteEdges=function(a,b){this.setMultipassParameters(a);this.config.silhouette=
!0;this.technique=this.shaderTechniqueRepository.releaseAndAcquire(q.EdgeShaderTechnique,this.config,this.technique);this.rctx.useTechnique(this.technique,a.slot);this.technique.bindPass({bindParameters:a,edgeRenderParameters:b})};e.renderRegularEdges=function(a,b,c){this._render(a,a.regular.vao,b,c)};e.renderSilhouetteEdges=function(a,b,c){this._render(a,a.silhouette.vao,b,c)};e._render=function(a,b,c,n){this._setUniforms(a,c);this.rctx.bindVAO(b);this.rctx.capabilities.instancing.drawArraysInstanced(E.PrimitiveType.TRIANGLE_FAN,
0,4,n)};e._setUniforms=function(a,b){const c=this.technique.program;a.components.buffer.textureBuffer.bind(c,"componentDataTex","componentDataTexInvDim");b.multipassTerrainEnabled&&(c.setUniform2fv("nearFar",b.camera.nearFar),c.setUniform2fv("inverseViewport",b.inverseViewport),B.bindMultipassTerrainTexture(c,b));if("origin"in a.transform)c.setUniformMatrix4fv("view",b.localViewMatrixForEdges),c.setUniformMatrix4fv("model",a.transform.modelMatrix),t.bindSliceUniforms(c,this.settings,b.slicePlane,
{origin:a.transform.origin.vec3});else{const n=new D.TwoVectorPosition(a.transform.position),I=m.transpose(u,m.invert(u,a.transform.rotationScale)),h=new z.ComponentDrawParameters;p.copy(h.transformWorldFromModelTL,n.low);p.copy(h.transformWorldFromModelTH,n.high);m.copy(h.transformWorldFromModelRS,a.transform.rotationScale);m.copy(h.transformNormalGlobalFromModel,I);A.bindModelTransform(c,h);c.setUniformMatrix3fv("transformNormalGlobalFromModel",h.transformNormalGlobalFromModel);a=b.camera.viewInverseTransposeMatrix;
a=p.set(J,a[3],a[7],a[11]);t.bindSliceUniforms(c,this.settings,b.slicePlane,{origin:a})}"uber"!==this.settings.type&&"sketch"!==this.settings.type||this._setSketchUniforms(c)};e._setSketchUniforms=function(a){const b=this.settings.strokesTexture,c=b.texture;r.isNone(c)||(a.bindTexture(c,"strokesTexture"),a.setUniform2f("strokesTextureScale",1/c.descriptor.width,1/c.descriptor.height),a.setUniform1f("strokesLog2Resolution",Math.log2(b.resolution)),a.setUniform1f("strokesNormalizationScale",b.normalizationScale),
a.setUniform1f("strokesAmplitude",b.amplitude),a.setUniform1f("strokeVariants",b.variants))};e._sortRenderables=function(){this.renderablesDirty=!1;this.sortedRenderables[d.Transparency.TRANSPARENT][d.Transparency.TRANSPARENT].clear();this.sortedRenderables[d.Transparency.TRANSPARENT][d.Transparency.OPAQUE].clear();this.sortedRenderables[d.Transparency.OPAQUE][d.Transparency.TRANSPARENT].clear();this.sortedRenderables[d.Transparency.OPAQUE][d.Transparency.OPAQUE].clear();this.renderables.forEach(b=>
{b.objectTransparency!==d.Transparency.INVISIBLE&&b.edgeTransparency!==d.Transparency.INVISIBLE&&this.sortedRenderables[b.objectTransparency][b.edgeTransparency].push(b)});const a=(b,c)=>"origin"in b.transform&&"origin"in c.transform?b.transform.origin.id<c.transform.origin.id?-1:b.transform.origin.id>c.transform.origin.id?1:0:0;this.sortedRenderables[d.Transparency.TRANSPARENT][d.Transparency.TRANSPARENT].sort(a);this.sortedRenderables[d.Transparency.TRANSPARENT][d.Transparency.OPAQUE].sort(a);this.sortedRenderables[d.Transparency.OPAQUE][d.Transparency.TRANSPARENT].sort(a);
this.sortedRenderables[d.Transparency.OPAQUE][d.Transparency.OPAQUE].sort(a)};f.getKey=function(a,b,c){return`edges-t:${a}:${b}:${c}`};return f}();const u=w.create(),J=x.create();g.EXTENSION_LENGTH_OFFSET=128;g.EdgeRenderer=k;g.LINE_WIDTH_FRACTION_FACTOR=8;g.componentDataInvDimName="componentDataTexInvDim";g.componentDataTexName="componentDataTex";Object.defineProperty(g,"__esModule",{value:!0})});