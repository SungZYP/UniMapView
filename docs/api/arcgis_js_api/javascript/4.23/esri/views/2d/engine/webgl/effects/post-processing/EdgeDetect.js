// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../VertexStream","../../../../../webgl/enums","../../../../../webgl/FramebufferObject"],function(m,r,d,t){let x=function(){function n(){this._fbo=null;this._size=[0,0];this._programDesc={"frei-chen":{vsPath:"post-processing/pp",fsPath:"post-processing/edge-detect/frei-chen",attributes:new Map([["a_position",0]])},sobel:{vsPath:"post-processing/pp",fsPath:"post-processing/edge-detect/sobel",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",
attributes:new Map([["a_position",0]])}}}var k=n.prototype;k.dispose=function(){this._fbo&&(this._fbo.dispose(),this._fbo=null);this._quad&&(this._quad.dispose(),this._quad=null)};k.draw=function(b,g,e){this._createOrResizeResources(b);const {context:a,state:c,painter:u,pixelRatio:p}=b;({materialManager:e}=u);const q=this._programDesc;var {size:f}=c;const v=[Math.round(p*f[0]),Math.round(p*f[1])],w=a.gl;this._quad||(this._quad=new r(a,[-1,-1,1,-1,-1,1,1,1]));f=this._fbo;const h=this._quad;h.bind();
const l=e.getProgram(b,q["frei-chen"]);a.useProgram(l);a.bindFramebuffer(f);a.setClearColor(0,0,0,0);a.clear(w.COLOR_BUFFER_BIT);a.bindTexture(g.colorTexture,4);l.setUniform1i("u_colorTexture",4);l.setUniform2fv("u_texSize",v);h.draw();a.bindFramebuffer(g);a.setStencilWriteMask(0);a.setStencilTestEnabled(!1);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setBlendingEnabled(!0);b=e.getProgram(b,q.blit);a.useProgram(b);a.bindTexture(f.colorTexture,6);b.setUniform1i("u_texture",6);a.setBlendFunction(d.BlendFactor.ONE,
d.BlendFactor.ZERO);h.draw();a.setBlendFunction(d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA);h.unbind()};k._createOrResizeResources=function(b){const {context:g,state:e,pixelRatio:a}=b;var {size:c}=e;b=Math.round(a*c[0]);c=Math.round(a*c[1]);this._fbo&&this._size[0]===b&&this._size[1]===c||(this._size[0]=b,this._size[1]=c,this._fbo?this._fbo.resize(b,c):this._fbo=new t.FramebufferObject(g,{colorTarget:d.TargetType.TEXTURE,depthStencilTarget:d.DepthStencilTargetType.NONE,width:b,height:c}))};
return n}();m.EdgeDetect=x;Object.defineProperty(m,"__esModule",{value:!0})});