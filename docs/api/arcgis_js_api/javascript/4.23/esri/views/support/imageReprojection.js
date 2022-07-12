// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../geometry/Point ../../geometry/projection ../../layers/support/rasterFunctions/rasterProjectionHelper ../2d/engine/Bitmap ../2d/engine/webgl/VertexStream ../2d/engine/webgl/shaders/MaterialPrograms ../webgl/enums ../webgl/FramebufferObject ../webgl/rasterUtils ../webgl/RenderingContext ../webgl/Texture".split(" "),function(n,w,x,p,y,q,r,z,A,c,B,C,D,t){let F=function(){function u(a){a?(this._ownsRctx=!1,this._rctx=a):(this._ownsRctx=
!0,a=document.createElement("canvas").getContext("webgl"),a.getExtension("OES_texture_float"),this._rctx=new D.RenderingContext(a,{}));a=A.createProgramTemplate("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(a.shaders.vertexShader,a.shaders.fragmentShader,a.attributes);this._rctx.useProgram(this._program);this._program.setUniform1f("u_opacity",1);this._program.setUniform1i("u_image",0);this._program.setUniform1i("u_flipY",
0);this._program.setUniform1i("u_transformGrid",1);this._quad=new z(this._rctx,[0,0,1,0,0,1,1,1])}var k=u.prototype;k.reprojectTexture=function(a,b,f=!1){const d=y.project(a.extent,b);var e=new p({x:(a.extent.xmax-a.extent.xmin)/a.texture.descriptor.width,y:(a.extent.ymax-a.extent.ymin)/a.texture.descriptor.height,spatialReference:a.extent.spatialReference});const {x:l,y:E}=q.projectResolution(e,b,a.extent);var g=(l+E)/2;b=Math.round((d.xmax-d.xmin)/g);e=Math.round((d.ymax-d.ymin)/g);g=(d.width/b+
d.height/e)/2;g=new p({x:g,y:g,spatialReference:d.spatialReference});const m=q.getProjectionOffsetGrid({projectedExtent:d,srcBufferExtent:a.extent,pixelSize:g,hasWrapAround:!0,spacing:[16,16]}),v=C.createTransformTexture(this._rctx,m);g=new t.Texture(this._rctx,{width:b,height:e,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c.TextureSamplingMode.LINEAR,hasMipmap:!1});const h=new B.FramebufferObject(this._rctx,{colorTarget:c.TargetType.TEXTURE,
depthStencilTarget:c.DepthStencilTargetType.NONE,width:b,height:e},g);this._rctx.bindFramebuffer(h);this._rctx.setViewport(0,0,b,e);this._rctx.useProgram(this._program);this._rctx.bindTexture(a.texture,0);this._rctx.bindTexture(v,1);this._quad.bind();this._program.setUniform2f("u_srcImageSize",a.texture.descriptor.width,a.texture.descriptor.height);this._program.setUniform2fv("u_transformSpacing",m.spacing);this._program.setUniform2fv("u_transformGridSize",m.size);this._program.setUniform2f("u_targetImageSize",
b,e);this._quad.draw();this._quad.unbind();this._rctx.useProgram(null);this._rctx.bindFramebuffer(null);v.dispose();if(f)return a=new ImageData(h.descriptor.width,h.descriptor.height),h.readPixels(0,0,h.descriptor.width,h.descriptor.height,c.PixelFormat.RGBA,c.PixelType.UNSIGNED_BYTE,a.data),h.detachColorTexture(c.ColorAttachment.COLOR_ATTACHMENT0),h.dispose(),{texture:g,extent:d,imageData:a};h.detachColorTexture(c.ColorAttachment.COLOR_ATTACHMENT0);h.dispose();return{texture:g,extent:d}};k.reprojectBitmapData=
function(a,b){var f=r.isImageSource(a.bitmapData)?r.rasterize(a.bitmapData):a.bitmapData;f=new t.Texture(this._rctx,{width:a.bitmapData.width,height:a.bitmapData.height,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c.TextureSamplingMode.LINEAR,hasMipmap:!1},f);a=this.reprojectTexture({texture:f,extent:a.extent},b,!0);a.texture.dispose();b=document.createElement("canvas");b.width=a.imageData.width;b.height=a.imageData.height;
b.getContext("2d").putImageData(a.imageData,0,0);return{bitmapData:b,extent:a.extent}};k.loadAndReprojectBitmapData=function(){var a=w._asyncToGenerator(function*(b,f,d){b=(yield x(b,{responseType:"image"})).data;const e=document.createElement("canvas");e.width=b.width;e.height=b.height;const l=e.getContext("2d");l.drawImage(b,0,0);b=l.getImageData(0,0,e.width,e.height);f=this.reprojectBitmapData({bitmapData:b,extent:f},d);return{bitmapData:f.bitmapData,extent:f.extent}});return function(b,f,d){return a.apply(this,
arguments)}}();k.destroy=function(){this._quad.dispose();this._program.dispose();this._ownsRctx&&this._rctx.dispose()};return u}();n.ImageReprojector=F;Object.defineProperty(n,"__esModule",{value:!0})});