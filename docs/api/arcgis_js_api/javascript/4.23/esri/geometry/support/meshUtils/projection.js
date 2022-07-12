// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../projection ../../projectionEllipsoid ../spatialReferenceUtils ../webMercatorUtils ../buffer/BufferView ../../../chunks/vec32".split(" "),function(h,G,y,n,H,I,z,D,q,A,B,J,f,p){function r(a,b,c,g,d,C){if(b){var E=c.count,t=A.getSphericalPCPF(d);if(F(d))for(c=0;c<E;c++)g.getVec(c,u),b.getVec(c,k),q.computeTranslationToOriginAndRotation(t,
u,v,t),n.fromMat4(e,v),a===m.FROM_PCPF&&n.transpose(e,e),z.transformMat3(k,k,e),C.setVec(c,k);else for(d=0;d<E;d++){g.getVec(d,u);b.getVec(d,k);q.computeTranslationToOriginAndRotation(t,u,v,t);n.fromMat4(e,v);var l=J.y2lat(c.get(d,1));l=Math.cos(l);a===m.TO_PCPF&&(l=1/l);e[0]*=l;e[1]*=l;e[2]*=l;e[3]*=l;e[4]*=l;e[5]*=l;a===m.FROM_PCPF&&n.transpose(e,e);z.transformMat3(k,k,e);z.normalize(k,k);C.setVec(d,k)}return C}}function w(a){return F(a)||a.isWebMercator}function F(a){return a.isWGS84||B.isCGCS2000(a)||
B.isMars(a)||B.isMoon(a)}const x=G.getLogger("esri.geometry.support.meshUtils.normalProjection");var m;(function(a){a[a.TO_PCPF=0]="TO_PCPF";a[a.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const u=D.create(),k=D.create(),v=I.create(),e=H.create();h.projectFromPCPF=function(a,b,c){q.projectBuffer(a,A.getSphericalPCPF(c),0,b,c,0,a.length/3);return b};h.projectNormalFromPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert to spatial reference from PCPF"),d;r(m.FROM_PCPF,f.BufferViewVec3f.fromTypedArray(a),
f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d));return d};h.projectNormalToPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert spatial reference to PCPF"),d;r(m.TO_PCPF,f.BufferViewVec3f.fromTypedArray(a),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d));return d};h.projectTangentFromPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert to spatial reference from PCPF"),
d;r(m.FROM_PCPF,f.BufferViewVec3f.fromTypedArray(a,16),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d,16));for(b=3;b<a.length;b+=4)d[b]=a[b];return d};h.projectTangentToPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert spatial reference to PCPF"),d;r(m.TO_PCPF,f.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d,
4*Float32Array.BYTES_PER_ELEMENT));for(b=3;b<a.length;b+=4)d[b]=a[b];return d};h.projectToPCPF=function(a,b,c){q.projectBuffer(a,b,0,c,A.getSphericalPCPF(b),0,a.length/3);return c};h.transformNormal=function(a,b,c){if(y.isNone(a))return b;n.normalFromMat4(e,c);a=f.BufferViewVec3f.fromTypedArray(a);c=f.BufferViewVec3f.fromTypedArray(b);p.transformMat3(c,a,e);n.isOrthoNormal(e)||p.normalize(c,c);return b};h.transformPosition=function(a,b,c){if(y.isNone(a))return b;a=f.BufferViewVec3f64.fromTypedArray(a);
const g=f.BufferViewVec3f64.fromTypedArray(b);p.transformMat4(g,a,c);return b};h.transformTangent=function(a,b,c){if(y.isNone(a))return b;n.normalFromMat4(e,c);c=f.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);const g=f.BufferViewVec3f.fromTypedArray(b,4*Float32Array.BYTES_PER_ELEMENT);p.transformMat3(g,c,e);n.isOrthoNormal(e)||p.normalize(g,g);if(a!==b)for(c=3;c<a.length;c+=4)b[c]=a[c];return b};Object.defineProperty(h,"__esModule",{value:!0})});