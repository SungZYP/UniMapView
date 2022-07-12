// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Logger ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ./SimpleAtmosphereTechnique ./resources/SimpleAtmosphereTexture ../support/imageUtils ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/GeometryUtil ../webgl-engine/lib/Util ../../webgl/BufferObject ../../webgl/Texture ../../webgl/Util ../../webgl/VertexArrayObject".split(" "),
function(h,E,F,G,p,f,q,r,k,t,u,v,w,x,y,l,z,A,B,C){var D=p.getLogger("esri.views.3d.environment.PanoramicAtmosphere");h=function(){function e(d,b){this.slot=14;this._readyResolver=f.createResolver();this._readyController=f.createAbortController();this.view=d;this._techniqueRepository=b;this._atmosphereTechniqueConfig=new k.SimpleAtmosphereTechniqueConfiguration}Object.defineProperty(e.prototype,"canRender",{get:function(){return null!=this._texture},enumerable:!0,configurable:!0});e.prototype.destroy=
function(){this._readyResolver.reject();this._texture&&(this._texture.dispose(),this._texture=null);this._readyController&&(this._readyController.abort(),this._readyController=null)};e.prototype.when=function(){return this._readyResolver.promise};e.prototype.initializeRenderContext=function(d){var b=this,c=d.rctx;this._atmosphereTechniqueConfig.geometry=1;this._atmosphereTechnique=this._techniqueRepository.acquireAndReleaseExisting(k.SimpleAtmosphereTechnique,this._atmosphereTechniqueConfig,this._atmosphereTechnique);
this._vao=this._createVertexArrayObject(c);this._vaoCount=B.vertexCount(this._vao,"geometry");u.requestImage(t,{signal:this._readyController.signal}).then(function(a){b._texture=new A(d.rctx,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},a);d.requestRender();b._readyController=null;b._readyResolver.resolve()}).catch(function(a){f.isAbortError(a)||D.error("Unable to initialize atmosphere: image request failed",a);b._readyResolver.reject()})};e.prototype.uninitializeRenderContext=
function(){this.destroy()};e.prototype.render=function(d){if(d.slot!==this.slot||0!==d.pass)return!1;var b=d.rctx,c=this._atmosphereTechnique.program;b.bindProgram(c);this._atmosphereTechnique.bindPipelineState(b);b.bindTexture(this._texture);c.setUniform1i("tex",0);c.setUniformMatrix4fv("proj",d.camera.projectionMatrix);var a=m;q.mat4.copy(a,d.camera.viewMatrix);a[12]=0;a[13]=0;a[14]=0;a[15]=1;c.setUniformMatrix4fv("view",m);c.setUniform4f("color",1,1,1,1);d.scenelightingData.setLightDirectionUniform(c);
b.bindVAO(this._vao);c.assertCompatibleVertexAttributeLocations(this._vao);b.drawArrays(4,0,this._vaoCount);return!0};e.prototype._createVertexArrayObject=function(d){for(var b=y.createPolySphereGeometry(1,2,!1),c=b.indices[l.VertexAttrConstants.POSITION],a=0;a<c.length;a+=3){var e=c[a];c[a]=c[a+2];c[a+2]=e}for(var b=b.vertexAttributes[l.VertexAttrConstants.POSITION].data,e=n.createBuffer(c.length),f=e.position,a=0;a<c.length;++a){var g=3*c[a];f.set(a,0,b[g]);f.set(a,1,b[g+1]);f.set(a,2,b[g+2])}return new C(d,
x.Default3D,{geometry:v.glLayout(n)},{geometry:z.createVertex(d,35044,e.buffer)})};return e}();var m=r.mat4f64.create(),n=w.newLayout().vec3f("position");return h});