// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/maybe ../definitions ../VertexStream ./Effect".split(" "),function(k,l,m,p,n,q,r){Object.defineProperty(l,"__esModule",{value:!0});k=function(h){function b(){var a=null!==h&&h.apply(this,arguments)||this;a.defines=[];a._desc={path:"fx/integrate",attributes:{a_position:0}};return a}m(b,h);b.prototype.dispose=function(){this._quad&&this._quad.dispose()};b.prototype.bind=function(){};b.prototype.unbind=function(){};
b.prototype.draw=function(a,f){if(f.size){var d=a.context,c=a.renderingOptions;this._quad||(this._quad=new q(d,[0,0,1,0,0,1,1,1]));var b=d.getBoundFramebufferObject(),e=d.getViewport(),h=e.x,k=e.y,l=e.width,e=e.height;f.bindTextures(d);var g=f.getBlock(n.ATTRIBUTE_DATA_ANIMATION);if(!p.isNone(g)){var m=g.getFBO(d),g=g.getFBO(d,1);d.setViewport(0,0,f.size,f.size);this._computeDelta(a,g,c.labelsAnimationTime);this._updateAnimationState(a,g,m);d.bindFramebuffer(b);d.setViewport(h,k,l,e)}}};b.prototype._computeDelta=
function(a,b,d){var c=a.context,f=a.displayLevel,e=a.painter.materialManager.getProgram(a,this._desc,["delta"]);c.bindFramebuffer(b);c.setClearColor(0,0,0,0);c.clear(c.gl.COLOR_BUFFER_BIT);c.bindProgram(e);e.setUniform1i("u_maskTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_0);e.setUniform1i("u_sourceTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_1);e.setUniform1f("u_timeDelta",a.timeDelta);e.setUniform1f("u_animationTime",d/1E3);e.setUniform1f("u_zoomLevel",Math.round(10*f));this._quad.draw()};b.prototype._updateAnimationState=
function(a,b,d){var c=a.context;a=a.painter.materialManager.getProgram(a,this._desc,["update"]);c.bindTexture(b.colorTexture,1);c.bindProgram(a);a.setUniform1i("u_sourceTexture",1);c.bindFramebuffer(d);c.setClearColor(0,0,0,0);c.clear(c.gl.COLOR_BUFFER_BIT);this._quad.draw()};return b}(r.Effect);l.AnimationEffect=k});