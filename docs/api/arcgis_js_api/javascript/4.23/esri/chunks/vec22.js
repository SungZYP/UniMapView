// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../geometry/support/buffer/types"],function(m,n){function p(c,b,a){const d=c.typedBuffer;c=c.typedBufferStride;const g=b.typedBuffer,e=b.typedBufferStride;b=a?a.count:b.count;let f=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*e;for(let h=0;h<b;++h)d[f]=g[a],d[f+1]=g[a+1],f+=c,a+=e}function q(c,b,a){const d=c.typedBuffer,g=c.typedBufferStride,e=b.typedBuffer,f=b.typedBufferStride,h=a?a.count:b.count;let k=(a&&a.dstIndex?a.dstIndex:0)*g,l=(a&&a.srcIndex?a.srcIndex:
0)*f;if(n.isInteger(b.elementType))if(a=n.maximumValue(b.elementType),n.isSigned(b.elementType))for(b=0;b<h;++b)d[k]=Math.max(e[l]/a,-1),d[k+1]=Math.max(e[l+1]/a,-1),k+=g,l+=f;else for(b=0;b<h;++b)d[k]=e[l]/a,d[k+1]=e[l+1]/a,k+=g,l+=f;else p(c,b,a);return c}function r(c,b,a,d){var g,e;const f=c.typedBuffer,h=c.typedBufferStride;c=null!=(g=null==d?void 0:d.count)?g:c.count;d=(null!=(e=null==d?void 0:d.dstIndex)?e:0)*h;for(e=0;e<c;++e)f[d]=b,f[d+1]=a,d+=h}const t=Object.freeze({__proto__:null,copy:p,
normalizeIntegerBuffer:q,fill:r});m.copy=p;m.fill=r;m.normalizeIntegerBuffer=q;m.vec2=t});