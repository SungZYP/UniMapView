// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Logger ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/frustum ../../../../geometry/support/lineSegment ../../../../geometry/support/plane ../../../../geometry/support/buffer/BufferView ../core/shaderLibrary/ShaderOutputOptions ../lib/geometryDataUtils ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ../lib/Util ../lib/VertexAttribute ./internal/bufferWriterUtils ./internal/DefaultBufferWriter ./internal/MaterialUtil ./renderers/utils ../shaders/NativeLineTechnique".split(" "),
function(U,V,M,H,E,ea,g,w,I,z,l,W,N,fa,ha,X,O,ia,v,ja,P,ka,la,Y){const ma=M.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial");var J;(function(t){t[t.START=0]="START";t[t.END=1]="END"})(J||(J={}));M=function(t){function u(a){a=t.call(this,a,na)||this;a._techniqueConfig=new Y.NativeLineTechniqueConfiguration;return a}V._inheritsLoose(u,t);var b=u.prototype;b.getTechniqueConfig=function(a,c){this._techniqueConfig.output=a;this._techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled;
this._techniqueConfig.vertexColors=this.parameters.vertexColors;this._techniqueConfig.transparent=1>this.parameters.color[3]||1>this.parameters.width;this._techniqueConfig.draped=c.slot===O.RenderSlot.DRAPED_MATERIAL;a=H.isSome(this.parameters.stipplePattern);this._techniqueConfig.stippleEnabled=a;this._techniqueConfig.stippleOffColorEnabled=a&&H.isSome(this.parameters.stippleOffColor);this._techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees;this._techniqueConfig.stipplePreferContinuous=
this.parameters.stipplePreferContinuous;return this._techniqueConfig};b.getPassParameters=function(){return this.parameters};b.intersect=function(a,c,d,e,r,h,k,m,f){H.isSome(f)?ka.intersectDrapedRenderLineGeometry(a,e,f,h,1,k):this._intersectLineGeometry(a,c,d,e,k)};b._intersectLineGeometry=function(a,c,d,e,r){if(e.options.selectionMode&&!la.isInstanceHidden(c))if(ia.isTranslationMatrix(d)){var h=a.vertexAttributes.get(v.VertexAttribute.POSITION).data,k=e.camera,m=oa;ea.copy(m,e.point);g.set(G[0],
m[0]-2,m[1]+2,0);g.set(G[1],m[0]+2,m[1]+2,0);g.set(G[2],m[0]+2,m[1]-2,0);g.set(G[3],m[0]-2,m[1]-2,0);for(a=0;4>a;a++)if(!k.unprojectFromRenderScreen(G[a],y[a]))return;l.fromPoints(k.eye,y[0],y[1],Q);l.fromPoints(k.eye,y[1],y[2],R);l.fromPoints(k.eye,y[2],y[3],S);l.fromPoints(k.eye,y[3],y[0],T);c=Number.MAX_VALUE;a=0;for(let n=0;n<h.length-5;n+=3)if(p[0]=h[n]+d[12],p[1]=h[n+1]+d[13],p[2]=h[n+2]+d[14],q[0]=h[n+3]+d[12],q[1]=h[n+4]+d[13],q[2]=h[n+5]+d[14],!(0>l.signedDistance(Q,p)&&0>l.signedDistance(Q,
q)||0>l.signedDistance(R,p)&&0>l.signedDistance(R,q)||0>l.signedDistance(S,p)&&0>l.signedDistance(S,q)||0>l.signedDistance(T,p)&&0>l.signedDistance(T,q))){k.projectToRenderScreen(p,A);k.projectToRenderScreen(q,B);if(0>A[2]&&0<B[2]){g.subtract(x,p,q);var f=k.frustum;f=-l.signedDistance(f[I.PlaneIndex.NEAR],p)/g.dot(x,l.normal(f[I.PlaneIndex.NEAR]));g.scale(x,x,f);g.add(p,p,x);k.projectToRenderScreen(p,A)}else if(0<A[2]&&0>B[2])g.subtract(x,q,p),f=k.frustum,f=-l.signedDistance(f[I.PlaneIndex.NEAR],
q)/g.dot(x,l.normal(f[I.PlaneIndex.NEAR])),g.scale(x,x,f),g.add(q,q,x),k.projectToRenderScreen(q,B);else if(0>A[2]&&0>B[2])continue;A[2]=0;B[2]=0;f=z.distance2(z.fromPoints(A,B,Z),m);f<c&&(c=f,g.copy(aa,p),g.copy(ba,q),a=n/3)}d=e.rayBegin;e=e.rayEnd;4>c&&(c=Number.MAX_VALUE,z.closestLineSegmentPoint(z.fromPoints(aa,ba,Z),z.fromPoints(d,e,pa),C)&&(g.subtract(C,C,d),c=g.length(C),g.scale(C,C,1/c),c/=g.distance(d,e)),r(c,C,a,!1))}else ma.error("intersection assumes a translation-only matrix")};b.computeAttachmentOrigin=
function(a,c){a=a.vertexAttributes;if(!a)return!1;a=a.get(v.VertexAttribute.POSITION);return fa.computeAttachmentOriginLines(a,null,!1,c)};b.requiresSlot=function(a){return a===O.RenderSlot.OPAQUE_MATERIAL||a===O.RenderSlot.DRAPED_MATERIAL};b.createGLMaterial=function(a){return a.output===N.ShaderOutput.Color||a.output===N.ShaderOutput.Highlight?new qa(a):null};b.createBufferWriter=function(){const a=this.parameters.vertexColors?P.PositionColorLayout:P.PositionLayout;return H.isNone(this.parameters.stipplePattern)?
new P.DefaultBufferWriter(a):new ra(a.clone().vec3f(v.VertexAttribute.AUXPOS1).vec2f(v.VertexAttribute.UV0))};return u}(X.Material);let qa=function(t){function u(){return t.apply(this,arguments)||this}V._inheritsLoose(u,t);var b=u.prototype;b.updateParameters=function(a){return this.ensureTechnique(Y.NativeLineTechnique,a)};b._updateOccludeeState=function(a){a.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:a.hasOccludees})};b.beginSlot=function(a){this._output===
N.ShaderOutput.Color&&this._updateOccludeeState(a);return this.updateParameters(a)};b.bind=function(a,c){c.bindPass(this._material.getPassParameters(),a)};return u}(ha),ra=function(){function t(b){this.vertexBufferLayout=b}var u=t.prototype;u.allocate=function(b){return this.vertexBufferLayout.createBuffer(b)};u.elementCount=function(b){return b.indices.get(v.VertexAttribute.POSITION).length};u.write=function(b,a,c,d){ja.writeDefaultAttributes(a,this.vertexBufferLayout,b.transformation,b.invTranspTransformation,
c,d);this._writeAuxpos1(b,a,c,d);this._writeUV0(b,a,c,d)};u._writeAuxpos1=function(b,a,c,d){var e=c.getField(v.VertexAttribute.AUXPOS1,W.BufferViewVec3f);c=a.indices.get(v.VertexAttribute.POSITION);a=a.vertexAttributes.get(v.VertexAttribute.POSITION).data;b=b.transformation;const r=e.typedBufferStride;e=e.typedBuffer;d*=r;for(let k=0;k<c.length-1;k+=2)for(const m of[1,0]){var h=3*c[k+m];const f=a[h],n=a[h+1];h=a[h+2];const K=b[1]*f+b[5]*n+b[9]*h+b[13],L=b[2]*f+b[6]*n+b[10]*h+b[14];e[d]=b[0]*f+b[4]*
n+b[8]*h+b[12];e[d+1]=K;e[d+2]=L;d+=r}};u._writeUV0=function(b,a,c,d){var e,r=c.getField(v.VertexAttribute.UV0,W.BufferViewVec2f),h=a.indices.get(v.VertexAttribute.POSITION);c=a.vertexAttributes.get(v.VertexAttribute.POSITION).data;const k=null==(e=a.vertexAttributes.get(v.VertexAttribute.DISTANCETOSTART))?void 0:e.data;b=b.transformation;a=r.typedBufferStride;r=r.typedBuffer;d*=a;let m=0;r[d]=J.START;r[d+1]=m;d+=a;e=3*h[0];e=g.set(p,c[e],c[e+1],c[e+2]);b&&g.transformMat4(e,e,b);const f=q,n=h.length-
1;let K=1;const L=k?(F,ca,da)=>m=k[da]:(F,ca,da)=>m+=g.distance(F,ca);for(let F=1;F<n;F+=2){var D=3*h[F];g.set(f,c[D],c[D+1],c[D+2]);b&&g.transformMat4(f,f,b);L(e,f,K++);for(D=0;2>D;++D)r[d]=1-D,r[d+1]=m,d+=a;g.copy(e,f)}h=3*h[n];g.set(f,c[h],c[h+1],c[h+2]);b&&g.transformMat4(f,f,b);L(e,f,K);r[d]=J.END;r[d+1]=m};return t}();const na={color:[1,1,1,1],vertexColors:!1,slicePlaneEnabled:!1,width:1,stipplePattern:null,stippleOffColor:null,stipplePreferContinuous:!0,sceneHasOcludees:!1,...X.DefaultMaterialParameters},
p=w.create(),q=w.create(),x=w.create(),C=w.create(),A=E.createRenderScreenPointArray3(),B=E.createRenderScreenPointArray3(),aa=w.create(),ba=w.create(),Z=z.create(),pa=z.create(),oa=w.create(),G=[E.createRenderScreenPointArray3(),E.createRenderScreenPointArray3(),E.createRenderScreenPointArray3(),E.createRenderScreenPointArray3()],y=[w.create(),w.create(),w.create(),w.create()],Q=l.create(),R=l.create(),S=l.create(),T=l.create();U.NativeLineMaterial=M;Object.defineProperty(U,"__esModule",{value:!0})});