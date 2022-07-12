// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/floatRGBA ../../../../core/maybe ../../../../core/PooledArray ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec4 ../../../../chunks/vec4f64 ../../../../geometry/support/frustum ../../../../chunks/sphere ../../support/mathUtils ./depthRange ./Octree ./Util".split(" "),function(x,M,N,y,O,z,A,C,P,r,B,Q,D,t,u,R){function H(h,f){if(f.isVisible){var a=t.empty(),b=f.getSpatialQueryAccelerator();
y.isSome(b)?S(a,h,b):T(a,h,f.objects);return a}}function S(h,f,a){var b=f.eye;const c=f.viewForward,d=f.frustum,e=k=>k.isVisible;var g=a.objectCount;500>g?(t.set(q,f.near,Math.min(h.near,f.far)),a.forEachInDepthRange(b,c,u.DepthOrder.FRONT_TO_BACK,q,(k,m)=>{E(h,f,k);q.far=h.near;m.setRange(q)},d,e),t.set(q,Math.max(h.far,f.near),f.far),a.forEachInDepthRange(b,c,u.DepthOrder.BACK_TO_FRONT,q,(k,m)=>{E(h,f,k);q.near=h.far;m.setRange(q)},d,e)):(g=Math.max(Math.min(g,500),Math.ceil(.1*g)),b=a.findClosest(c,
u.DepthOrder.FRONT_TO_BACK,d,e,g),a=a.findClosest(c,u.DepthOrder.BACK_TO_FRONT,d,e,g),b&&a&&(I(h,f,b.boundingVolumeWorldSpace.bounds),I(h,f,a.boundingVolumeWorldSpace.bounds)))}function T(h,f,a){v.clear();a.forAll(b=>{b.isVisible&&0!==b.geometryRecords.length&&v.add(b)});v.empty||(v.sort(f),t.set(q,f.near,Math.min(h.near,f.far)),v.forEachInDepthRange(q,u.DepthOrder.FRONT_TO_BACK,(b,c)=>{c<h.near&&E(h,f,b)}),t.set(q,Math.max(h.far,f.near),f.far),v.forEachInDepthRange(q,u.DepthOrder.BACK_TO_FRONT,(b,
c,d)=>{h.far=Math.max(h.far,d)}))}function E(h,f,a){if(a.isVisible&&B.intersectsSphere(f.frustum,a.boundingVolumeWorldSpace.bounds)){var b=a.transformation,c=U;a.geometryRecords.forEach(d=>{z.multiply(c,b,d.getShaderTransformation());const e=D.maxScale(c);J(h,f,d.geometry.boundingInfo,c,e)})}}function J(h,f,a,b,c){if(!y.isNone(a)){var d=f.eye,e=f.viewForward;C.transformMat4(n,a.center,b);d=e[0]*(n[0]-d[0])+e[1]*(n[1]-d[1])+e[2]*(n[2]-d[2]);n[3]=a.radius*c;if(!(d-n[3]>h.near&&d+n[3]<h.far)&&B.intersectsSphere(f.frustum,
n))if(100<a.radius&&a.getChildren())for(a=a.getChildren(),d=0;8>d;++d)a[d]&&J(h,f,a[d],b,c);else F.unionDepthRangeWithAABB(h,f.viewProjectionMatrix,b,a.bbMin,a.bbMax)}}function I(h,f,a){var b=f.eye;f=f.viewForward;b=(a[0]-b[0])*f[0]+(a[1]-b[1])*f[1]+(a[2]-b[2])*f[2];h.near=Math.min(h.near,b-a[3]);h.far=Math.max(h.far,b+a[3])}let V=function(){function h(){this._items=new O({allocator:a=>a||{obj:null,distance:0,near:0,far:0},deallocator:a=>{a.obj=null;a.distance=0;a.near=0;a.far=0;return a}})}var f=
h.prototype;f.clear=function(){this._items.clear()};f.add=function(a){this._items.pushNew().obj=a};f.sort=function(a){const b=a.eye,c=a.viewForward;this._items.forAll(d=>{const e=d.obj.boundingVolumeWorldSpace.bounds,g=(e[0]-b[0])*c[0]+(e[1]-b[1])*c[1]+(e[2]-b[2])*c[2];d.distance=g;d.near=g-e[3];d.far=g+e[3]});this._items.sort((d,e)=>d.distance-e.distance)};f.forEachInDepthRange=function(a,b,c){if(b===u.DepthOrder.FRONT_TO_BACK)for(b=0;b<this._items.length;++b){var d=this._items.data[b];d.far<a.near||
d.near>a.far||c(d.obj,d.near,d.far)}else for(b=this._items.length-1;0<=b;--b)d=this._items.data[b],d.far<a.near||d.near>a.far||c(d.obj,d.near,d.far)};M._createClass(h,[{key:"length",get:function(){return this._items.length}},{key:"empty",get:function(){return 0===this._items.length}}]);return h}(),L=function(){function h(){this.view=A.create();this.viewProj=A.create();this.frustum=B.create();this.geometries=[];this.near=[];this.far=[];this.nearCandidates=[];this.farCandidates=[];this.range={near:0,
far:0};this.looseRange={near:0,far:0}}var f=h.prototype;f.compute=function(a,b){this._reset();z.copy(this.view,a.viewMatrix);z.multiply(this.viewProj,a.projectionMatrix,this.view);B.copy(this.frustum,a.frustum);a=this.view;const c=a[2],d=a[6],e=a[10],g=a[14];a=this.range;let k=0;b.forEach(l=>{if(l.instanceParameters.visible&&l.castShadow){if(l.hasShaderTransformation){l.computeBoundingSphere(l.getShaderTransformation(),n,1);var p=n}else p=l.boundingSphere;var K=c*p[0]+d*p[1]+e*p[2]+g,W=K-p[3];p=K+
p[3];this.geometries[k]=l;this.near[k]=-p;this.far[k]=-W;++k}});if(0===this.geometries.length)return a;for(b=0;b<this.geometries.length;++b)this.near[b]>a.far&&(a.far=this.near[b]),2<this.near[b]&&this.far[b]<a.near&&(a.near=this.far[b]);b=this.looseRange;b.near=Math.max(.5*a.near,2);b.far=2*a.far;var m=0;let w=0;for(let l=0;l<this.geometries.length;++l)this.near[l]<a.near&&(this.near[l]>=b.near?a.near=this.near[l]:this.nearCandidates[m++]=l),this.far[l]>a.far&&(this.far[l]<=b.far?a.far=this.far[l]:
this.farCandidates[w++]=l);if(0===this.nearCandidates.length&&0===this.farCandidates.length)return a;this.nearCandidates.sort((l,p)=>this.near[l]<this.near[p]?-1:this.near[l]>this.near[p]?1:0);this.farCandidates.sort((l,p)=>this.far[l]<this.far[p]?1:this.far[l]>this.far[p]?-1:0);for(b=0;b<this.nearCandidates.length;++b)m=this.nearCandidates[b],this.near[m]<a.near&&(m=this.geometries[m],this._includeNearBoundingInfoRec(m.boundingInfo,m.getShaderTransformation()));for(b=0;b<this.farCandidates.length;++b)m=
this.farCandidates[b],this.far[m]>a.far&&(m=this.geometries[m],this._includeFarBoundingInfoRec(m.boundingInfo,m.getShaderTransformation()));return a};f._reset=function(){this.geometries.length=0;this.near.length=0;this.far.length=0;this.nearCandidates.length=0;this.farCandidates.length=0;this.range.near=Number.MAX_VALUE;this.range.far=-Number.MAX_VALUE};f._includeNearBoundingInfoRec=function(a,b){if(!y.isNone(a)){var c=a.getCenter();C.transformMat4(n,c,b);c=D.maxScale(b);var d=n[0],e=n[1],g=n[2];
c*=a.getBSRadius();var k=this.frustum;if(!(k[0][0]*d+k[0][1]*e+k[0][2]*g+k[0][3]>c||k[1][0]*d+k[1][1]*e+k[1][2]*g+k[1][3]>c||k[2][0]*d+k[2][1]*e+k[2][2]*g+k[2][3]>c||k[3][0]*d+k[3][1]*e+k[3][2]*g+k[3][3]>c||(d=this.view[2]*d+this.view[6]*e+this.view[10]*g+this.view[14],e=d+c,2>-(d-c)||-e>=this.range.near)))if(-e>this.looseRange.near)this.range.near=-e;else{if(100<c&&(c=a.getChildren(),void 0!==c)){for(a=0;8>a;++a)void 0!==c[a]&&this._includeNearBoundingInfoRec(c[a],b);return}F.unionDepthRangeWithAABB(this.range,
this.viewProj,b,a.getBBMin(),a.getBBMax())}}};f._includeFarBoundingInfoRec=function(a,b){if(!y.isNone(a)){var c=a.getBSRadius(),d=a.getCenter();C.transformMat4(n,d,b);var e=D.maxScale(b);d=n[0];var g=n[1],k=n[2];c*=e;e=this.frustum;if(!(e[0][0]*d+e[0][1]*g+e[0][2]*k+e[0][3]>c||e[1][0]*d+e[1][1]*g+e[1][2]*k+e[1][3]>c||e[2][0]*d+e[2][1]*g+e[2][2]*k+e[2][3]>c||e[3][0]*d+e[3][1]*g+e[3][2]*k+e[3][3]>c||(d=this.view[2]*d+this.view[6]*g+this.view[10]*k+this.view[14]-c,-d<=this.range.far)))if(-d<this.looseRange.far)this.range.far=
-d;else{if(100<c&&(c=a.getChildren(),void 0!==c)){for(a=0;8>a;++a)void 0!==c[a]&&this._includeFarBoundingInfoRec(c[a],b);return}F.unionDepthRangeWithAABB(this.range,this.viewProj,b,a.getBBMin(),a.getBBMax())}}};return h}(),X=function(){function h(){this.modelViewProj=A.create();this.clipPosition=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]}var f=h.prototype;f.unionDepthRangeWithAABB=function(a,b,c,d,e){var g=this.modelViewProj;z.multiply(g,b,c);b=!1;for(c=
0;8>c;++c){const k=this.clipPosition[c],m=0===c||3===c||4===c||7===c?d[0]:e[0],w=0===c||1===c||4===c||5===c?d[1]:e[1],l=4>c?d[2]:e[2];k[0]=g[0]*m+g[4]*w+g[8]*l+g[12];k[1]=g[1]*m+g[5]*w+g[9]*l+g[13];k[2]=g[2]*m+g[6]*w+g[10]*l+g[14];k[3]=g[3]*m+g[7]*w+g[11]*l+g[15]}for(d=0;12>d;++d){e=this._clipTriangle(this.clipPosition[G[d][0]],this.clipPosition[G[d][1]],this.clipPosition[G[d][2]]);g=!0;for(c=0;c<e.length;++c)if(2<=e[c][3]){g=!1;break}if(!g)for(b=!0,g=0;g<e.length;++g)c=e[g][3],c<a.near&&(a.near=
c),c>a.far&&(a.far=c)}return b};f._inside=function(a,b){if(0===b)return a[0]>=-a[3];if(1===b)return a[1]>=-a[3];if(2===b)return a[0]<=a[3];if(3===b)return a[1]<=a[3];R.assert(!1)};f._intersect=function(a,b,c){let d=0;0===c?d=(-a[3]-a[0])/(b[0]-a[0]+b[3]-a[3]):1===c?d=(-a[3]-a[1])/(b[1]-a[1]+b[3]-a[3]):2===c?d=(a[3]-a[0])/(b[0]-a[0]-b[3]+a[3]):3===c&&(d=(a[3]-a[1])/(b[1]-a[1]-b[3]+a[3]));return P.lerp(r.create(),a,b,d)};f._clipTriangle=function(a,b,c){a=[a,b,c];for(b=0;4>b;++b){c=a;a=[];for(let d=
0;d<c.length;++d){const e=c[d],g=c[(d+1)%c.length];this._inside(g,b)?(this._inside(e,b)||a.push(this._intersect(e,g,b)),a.push(g)):this._inside(e,b)&&a.push(this._intersect(e,g,b))}}return a};return h}();const G=[[0,1,3],[2,3,1],[1,5,2],[6,2,5],[5,4,6],[7,6,4],[4,0,7],[3,7,0],[3,2,7],[6,7,2],[4,5,0],[1,0,5]],n=Q.create(),U=A.create(),q=t.empty(),v=new V,Y=new L,F=new X;x.DepthRangeFromRenderGeometries=L;x.depthRangeFromLayer=H;x.depthRangeFromScene=function(h,f,a){if(1E4>f.size)return Y.compute(h,
f);const b=t.empty();a.forAll(c=>{c.isVisible&&t.union(b,H(h,c))});return b};x.textureToDepth=function(h,f,a){return N.unpackFloatRGBA(f,h)*(a[1]-a[0])+a[0]};Object.defineProperty(x,"__esModule",{value:!0})});