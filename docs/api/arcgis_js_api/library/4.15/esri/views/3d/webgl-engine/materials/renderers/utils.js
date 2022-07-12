// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/maybe ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../lib/ComponentUtils ../../lib/doublePrecisionUtils ../../lib/Util ../../../../webgl/Util".split(" "),function(y,c,u,k,v,n,w,x,t){Object.defineProperty(c,"__esModule",{value:!0});c.checkIsHidden=function(a){return a.instanceParameters.hidden||n.generateVisibleIndexRanges(a.instanceParameters.componentVisibilities,a.componentOffsets)?!0:!1};c.generateRenderGeometryHighlightRanges=
function(a){return a.instanceParameters.hidden?null:n.generateHighlightedIndexRanges(a.instanceParameters.componentVisibilities,a.instanceParameters.componentHighlights,a.componentOffsets)};c.doesRenderGeometryHaveHighlights=function(a){return a.instanceParameters.hidden?!1:n.hasHighlights(a.instanceParameters.componentVisibilities,a.instanceParameters.componentHighlights,a.componentOffsets)};c.isRenderGeometryHidden=function(a){return a.instanceParameters.hidden?!0:n.isAllHidden(a.instanceParameters.componentVisibilities,
a.componentOffsets)};c.drawArrays=function(a,b,e,g,d){a.drawArrays(b,e,g);d&&(d.drawCalls++,4===b&&(d.triangles+=g))};c.drawElements=function(a,b,e,g,d,p){var c=t.getBytesPerElement(e);a.drawElements(b,d,e,g*c);p&&(p.drawCalls++,4===b&&(p.triangles+=d))};c.drawArraysFaceRange=function(a,b,e,g,d){for(var c=0,f=0;f<b.length;f++){var h=b[f],m=h[0]+e,h=h[1]-h[0]+1,c=c+h;a.drawArrays(g,m,h)}d&&(d.drawCalls+=b.length,4===g&&(d.triangles=c/3))};c.drawElementsFaceRange=function(a,b,e,c,d,f){for(var g=t.getBytesPerElement(d),
h=0,m=0;m<b.length;m++){var l=b[m],k=l[0]+e,l=l[1]-l[0]+1,h=h+l;a.drawElements(c,l,d,k*g)}f&&(f.drawCalls+=b.length,4===c&&(f.triangles+=h/3))};c.acquireMaterials=function(a,b){var e=new Map;e.set(0,b.acquire(a,0));e.set(3,b.acquire(a,3));e.set(2,b.acquire(a,2));e.set(1,b.acquire(a,1));e.set(4,b.acquire(a,4));return e};c.releaseMaterials=function(a,b){b.release(a,0);b.release(a,3);b.release(a,2);b.release(a,1);b.release(a,4)};c.calculateTransformRelToOrigin=function(a,b,e){var c=a.origin.vec3;x.setMatrixTranslation3(r,
-c[0],-c[1],-c[2]);u.isSome(a.transformation)?k.mat4.multiply(b,r,a.transformation):k.mat4.copy(b,r);e&&(k.mat4.invert(e,b),k.mat4.transpose(e,e))};c.encodeDoubleVec3=function(a,b,c,g,d){q[0]=a.get(b,0);q[1]=a.get(b,1);q[2]=a.get(b,2);w.encodeDoubleArray(q,f,3);c.set(d,0,f[0]);g.set(d,0,f[1]);c.set(d,1,f[2]);g.set(d,1,f[3]);c.set(d,2,f[4]);g.set(d,2,f[5])};var q=new Float64Array(3),f=new Float32Array(6),r=v.mat4f64.create()});