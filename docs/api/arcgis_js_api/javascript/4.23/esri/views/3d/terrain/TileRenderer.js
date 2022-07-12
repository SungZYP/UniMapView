// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3f64 ../../../chunks/vec4f64 ../../../layers/support/layerUtils ../../2d/engine/imagery/enums ../../2d/engine/vectorTiles/VectorTileRendererHelper3D ../support/StreamDataLoader ./BlendLayersTechnique ./interfaces ./LayerClass ../../../core/arrayUtils ../../../geometry/support/aaBoundingBox ../support/buffer/glUtil ./PatchGeometryFactory ./TextureFader ../../../core/HeapSort ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/BufferObject ../../webgl/VertexArrayObject ./RasterColorizerTechnique ./terrainUtils ./TextureReference ./TileTexture ./TileUpdate ./support/FBOPool ../webgl-engine/core/shaderLibrary/output/BlendOptions ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../../webgl/enums ../../webgl/Texture ../../webgl/Util".split(" "),
function(I,S,T,l,J,K,U,V,W,L,X,Y,A,M,x,N,ca,da,ea,C,fa,ha,ia,ja,O,z,D,y,P,Z,Q,aa,B,q,v,ba){function E(r,g,a){a.layerIndex=g;const c=r.layerInfo[x.LayerClass.MAP][g];return c.data?(J.set(a.offset,0,0),a.tile=r,a.scale=1,a.sourceLod=r.lij,a.sourceLayerInfo=c,a):(r=c.upsampleInfo)?(g=r.tile.layerInfo[x.LayerClass.MAP][g],a.tile=r.tile,J.copy(a.offset,r.offset),a.scale=r.scale,a.sourceLod=r.tile.lij,a.sourceLayerInfo=g,a):null}N=function(){function r(a,c,b){this._rctx=a;this.tileSize=c;this._techniqueRepository=
b;this._backgroundIsGrid=!1;this._blackTex=this._backgroundColor=this._backgroundTexture=null;this._vectorTileHelper=new X.VectorTileRendererHelper3D;this._maxAnisotropy=this._rctx.parameters.maxMaxAnisotropy;this._vaoQuad=B.createQuadVAO(this._rctx,aa.Pos2Tex);this._blackTex=new y(B.createColorTexture(this._rctx,[0,0,0,1]));this._fboPool=new Z.FBOPool(this._rctx)}var g=r.prototype;g.dispose=function(){this._fboPool&&(this._fboPool.clear(),this._fboPool=null);this._vaoQuad=l.disposeMaybe(this._vaoQuad);
this._backgroundTexture=l.releaseMaybe(this._backgroundTexture);this._blackTex=l.releaseMaybe(this._blackTex);this._blendLayersTechnique=l.releaseMaybe(this._blendLayersTechnique);this._applyOpacityTechnique=l.releaseMaybe(this._applyOpacityTechnique);this._vectorTileHelper=l.disposeMaybe(this._vectorTileHelper)};g.updateTileTexture=function(a,c){var b=a.layerInfo[x.LayerClass.MAP];for(var d of b)d.pendingUpdates&=~(P.TileUpdate.TEXTURE_NOFADING&P.TileUpdate.TEXTURE_FADING);if(a.renderData){for(var f=
a.surface,h=f.baseOpacity,m=d=0,e=this.tileSize,k=!1,u=f.view.pixelRatio,t=b.length,n=0;n<b.length&&!k;n++){const w=f.layerViewByIndex(n,x.LayerClass.MAP),p=w.fullOpacity;F[n]=p;W.isBaseLayer(w.layer)&&t>=b.length&&(t=n);if(0===p)continue;++m;const H=E(a,n,G);H&&(z.isVectorTileLayerView(w)?e=Math.max(e,this.tileSize*u):1===h&&1===p&&(w.isOpaque||this._dataToTexture(H)&&H.sourceLayerInfo.data.descriptor.isOpaque)&&(k=!0),++d)}this._cleanupFBOPool(u,b.length);h=e;e=T.nextHighestPowerOfTwo(h);b=e*e;
f=h*h;b===f?e=h:(h=e/2,e=b-f<f-h*h?e:h);b=e/this.tileSize;--n;0===d?this._useBackgroundTexture(a,m):1===d&&(k||this._backgroundIsGrid||l.isSome(this._backgroundColor))&&this._useLayerTexture(a,n,t,F[n])||this._composeMapLayers(a,c,n,t,k,F,e,b)}};g._useBackgroundTexture=function(a,c){let b=C.ActivationTime.Immediate;if(a.surface.view.layerViewManager.updating||0<c)b=C.ActivationTime.Delayed;this._backgroundTexture&&l.isNone(a.renderData.textureReference)&&(b=C.ActivationTime.Immediate);a.renderData.setTextureReference(l.isSome(this._backgroundTexture)?
new D.TextureReference(this._backgroundTexture,M.TextureUpdate.FADING,R,a.surface.baseOpacity,1,1,!1):null,b)};g._useLayerTexture=function(a,c,b,d){var f=c<b;b=f?1:a.surface.baseOpacity;f=f?a.surface.baseOpacity:1;c=E(a,c,G);return this._dataToTexture(c)?(a.renderData.setTextureReference(new D.TextureReference(c.sourceLayerInfo.data,M.TextureUpdate.FADING,c,b,d,f,!0)),!0):!1};g._composeMapLayers=function(a,c,b,d,f,h,m,e){const k=this._rctx,u=this._fboPool.acquire(m);k.bindFramebuffer(u);k.setViewport(0,
0,m,m);k.setClearColor(0,0,0,0);k.setClearDepth(1);k.clearSafe(q.ClearBufferBit.COLOR_BUFFER_BIT|q.ClearBufferBit.DEPTH_BUFFER_BIT);let t=!1;!f&&l.isSome(this._backgroundTexture)&&this._drawRasterData(this.blendLayersTechnique,this._backgroundTexture.texture,1,K.ZEROS);f=a.surface.baseOpacity;let n=!1,w=q.TextureSamplingMode.LINEAR_MIPMAP_LINEAR;for(;0<=b;b--){const p=E(a,b,G);p&&(b<d&&1>f&&!n&&(this._drawRasterData(this.applyOpacityTechnique,this._blackTex.texture,1,K.ZEROS,f),n=!0),0!==h[b]&&(z.isVectorTileRenderInfo(p)?
t=this._drawVectorData(this.blendLayersTechnique,p,e,h[b],m,u,t):z.isImageryTileRenderInfo(p)?(this._drawImageryTileData(p,h[b]),this._hasNearestInterpolation(p)&&(w=q.TextureSamplingMode.NEAREST)):this._dataToTexture(p)&&this._drawRasterData(this.blendLayersTechnique,p.sourceLayerInfo.data.texture,p.scale,p.offset,h[b])))}d=a.renderData.ensureTexture(m,()=>this._buildTexture(m,w));h=k.bindTexture(d.texture,v.Texture.TEXTURE_UNIT_FOR_UPDATES);e=d.descriptor;k.gl.copyTexImage2D(k.gl.TEXTURE_2D,0,e.pixelFormat,
0,0,e.width,e.height,0);d.generateMipmap();k.bindTexture(h,v.Texture.TEXTURE_UNIT_FOR_UPDATES);k.bindFramebuffer(null);this._fboPool.release(u);a.renderData.setTextureReference(new D.TextureReference(d,c,R,n?1:f,1,1,!1))};g._drawQuad=function(a){this._rctx.bindVAO(this._vaoQuad);a.assertCompatibleVertexAttributeLocations(this._vaoQuad);this._rctx.drawArrays(q.PrimitiveType.TRIANGLE_STRIP,0,ba.vertexCount(this._vaoQuad,"geometry"))};g._drawRasterData=function(a,c,b,d,f=1){l.isNone(c)||(a=this._rctx.useTechnique(a),
a.bindTexture(c,"tex"),a.setUniform1f("scale",b),a.setUniform2f("offset",d[0],d[1]),a.setUniform1f("opacity",f),this._drawQuad(a))};g._hasNearestInterpolation=function(a){a=a.sourceLayerInfo.data;return a.source?"nearest"===a.interpolation:!1};g._drawImageryTileData=function(a,c=1){const b=a.sourceLayerInfo.data;if(b.source){a.tile.surface.layerViewByIndex(a.layerIndex,x.LayerClass.MAP).ensureSymbolizerParameters(b);var d=this._getRasterColorizerTechnique(b),f=this._rctx,h=f.useTechnique(d);if(b.bind(f)){b.opacity=
c;b.scale=a.scale;b.offset=a.offset;var {names:m,textures:e}=b.getTextures();m.forEach((k,u)=>h.bindTexture(e[u],k));d.bindPass(b.getUniforms());this._drawQuad(h);f.bindVAO()}}};g._getRasterColorizerTechnique=function(a){const c=a.symbolizerParameters,b=["stretch","lut","hillshade"].indexOf(c.type);l.isNone(this._rasterColorizerConfig)&&(this._rasterColorizerConfig=new O.RasterColorizerTechniqueConfiguration,this._rctx.gl.getExtension("WEBGL_color_buffer_float"),this._rctx.gl.getExtension("OES_texture_float"));
this._rasterColorizerConfig.colorizerType=b;this._rasterColorizerConfig.applyColormap=!!c.colormap;this._rasterColorizerConfig.stretchType=a.hasStretchTypeNone()?L.RasterColorizerStretchType.Noop:L.RasterColorizerStretchType.PerBand;return this._rasterColorizerTechnique=this._techniqueRepository.releaseAndAcquire(O.RasterColorizerTechnique,this._rasterColorizerConfig,this._rasterColorizerTechnique)};g._drawVectorData=function(a,c,b,d,f,h,m){const e=this._rctx,k=c.sourceLayerInfo.data,u=c.tile.surface.layerViewByIndex(c.layerIndex,
x.LayerClass.MAP);let t;a.bindPipelineState(e);1>d?(t=this._fboPool.acquire(f),e.bindFramebuffer(t),e.setClearColor(1,1,1,0),e.clearSafe(q.ClearBufferBit.COLOR_BUFFER_BIT|q.ClearBufferBit.DEPTH_BUFFER_BIT)):m&&e.clearSafe(q.ClearBufferBit.DEPTH_BUFFER_BIT);this._vectorTileHelper.render(e,c.sourceLod,k,u.painter,u.layer.styleRepository,u.schemaHelper,Math.round(1/c.scale),c.offset,this.tileSize,b);return l.isSome(t)?(e.bindFramebuffer(h),this._drawRasterData(a,t.colorTexture,1,[0,0],d),this._fboPool.release(t),
m):!0};g._dataToTexture=function(a){z.isRasterTileRenderInfo(a)&&this._rasterDataToTexture(a);return z.isTextureTileRenderInfo(a)};g._rasterDataToTexture=function(a){const c=a.sourceLayerInfo;c.data=this._buildTexture(c.data);a.tile.setMemoryDirty()};g.setBackground=function(a,c){l.releaseMaybe(this._backgroundTexture);this._backgroundIsGrid=c;a instanceof HTMLImageElement?(this._backgroundTexture=this._buildTexture(a),this._backgroundColor=null):(this._backgroundTexture=new y(B.createColorTexture(this._rctx,
V.fromValues(a[0]||0,a[1]||0,a[2]||0,1))),this._backgroundColor=U.fromValues(a[0]||0,a[1]||0,a[2]||0))};g._buildTexture=function(a,c=q.TextureSamplingMode.LINEAR_MIPMAP_LINEAR){if(l.isNone(a))return null;const b={target:q.TextureType.TEXTURE_2D,pixelFormat:q.PixelFormat.RGBA,dataType:q.PixelType.UNSIGNED_BYTE,wrapMode:q.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c,maxAnisotropy:this._maxAnisotropy,flipped:!0,hasMipmap:!0};c=this._rctx;let d;if("number"===typeof a)b.width=b.height=a,d=new y(new v.Texture(c,
b));else if(a instanceof Y.ImageWithType)b.isOpaque=a.isOpaque,d=new y(new v.Texture(c,b,a.image)),a.release();else try{d=new y(new v.Texture(c,b,a))}catch(f){d=new y(B.createEmptyTexture(c)),console.warn("TileRenderer: failed to execute 'texImage2D', cross-origin image may not be loaded.")}a=c.bindTexture(d.texture,v.Texture.TEXTURE_UNIT_FOR_UPDATES);d.generateMipmap();c.bindTexture(a,v.Texture.TEXTURE_UNIT_FOR_UPDATES);return d};g._cleanupFBOPool=function(a,c){if(a!==this._lastPixelRatio||c!==this._lastNumLayers)this._fboPool.clear(),
this._lastPixelRatio=a,this._lastNumLayers=c};S._createClass(r,[{key:"blendLayersTechnique",get:function(){if(l.isNone(this._blendLayersTechnique)){const a=new A.BlendLayersTechniqueConfiguration;a.mode=Q.BlendMode.OneMinusSourceAlpha;this._blendLayersTechnique=this._techniqueRepository.acquire(A.BlendLayersTechnique,a)}return this._blendLayersTechnique}},{key:"applyOpacityTechnique",get:function(){if(l.isNone(this._applyOpacityTechnique)){const a=new A.BlendLayersTechniqueConfiguration;a.mode=Q.BlendMode.SourceAlpha;
this._applyOpacityTechnique=this._techniqueRepository.acquire(A.BlendLayersTechnique,a)}return this._applyOpacityTechnique}},{key:"backgroundIsGrid",get:function(){return this._backgroundIsGrid}},{key:"backgroundColor",get:function(){return this._backgroundColor}},{key:"test",get:function(){return{backgroundTexture:this._backgroundTexture}}}]);return r}();const F=[],G={tile:null,sourceLayerInfo:null,sourceLod:null,offset:[0,0],scale:1,layerIndex:0},R={offset:[0,0],scale:1};I.TileRenderer=N;Object.defineProperty(I,
"__esModule",{value:!0})});