// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f32 ../../../ViewingMode ./glUtil3D ../shaders/ShadowHighlightTechnique ../../../webgl/Util".split(" "),function(k,m,d,e,f,n,p,q,r,t,u){let v=function(){function g(a,b){this._rctx=a;this._viewingMode=b;this._maxOpacity=1;this._parameters={shadowColor:p.fromValues(1,0,1,1),shadowOpacity:.2,occludedShadowOpacity:.1,opacityElevation:1,
dayNightTerminator:1};this._vao=r.createQuadVAO(this._rctx)}var c=g.prototype;c.render=function(a,b){if(a.shadowMap.enabled&&a.linearDepthTexture&&this.isVisible){var h=this.technique;this._rctx.bindFramebuffer(b);this._rctx.useTechnique(h);h.bindPass(this._parameters,a);this._rctx.bindVAO(this._vao);this._rctx.drawArrays(h.primitiveType,0,u.vertexCount(this._vao,"geometry"))}};c.setDefaultOptions=function(a){this._parameters={...this._parameters,...a};this._updateMaxOpacity()};c.updateParameters=
function(a,b){this._parameters.opacityElevation=1-d.smoothstep(4E4,5E4,a.relativeElevation);a=this._viewingMode===q.ViewingMode.Global?f.normalize(l,a.center):f.set(l,0,0,1);b=f.dot(a,b);this._parameters.dayNightTerminator=d.smoothstep(0,1,d.clamp(30*b,0,1))};c.dispose=function(){this._vao=e.disposeMaybe(this._vao);this._technique=e.releaseMaybe(this._technique)};c._updateMaxOpacity=function(){const a=this._parameters;this._maxOpacity=Math.max(a.shadowOpacity,a.occludedShadowOpacity)*a.shadowColor[3]};
m._createClass(g,[{key:"technique",get:function(){e.isNone(this._technique)&&(this._technique=new t.ShadowHighlightTechnique({rctx:this._rctx,viewingMode:this._viewingMode}));return this._technique}},{key:"gpuMemoryUsage",get:function(){var a,b;return null!=(a=null==(b=this._vao)?void 0:b.size)?a:0}},{key:"isVisible",get:function(){const {opacityElevation:a,dayNightTerminator:b}=this._parameters;return.001953125<=this._maxOpacity*a*b}}]);return g}();const l=n.create();k.ShadowHighlightHelper=v;Object.defineProperty(k,
"__esModule",{value:!0})});