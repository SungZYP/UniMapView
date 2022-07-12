"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8281],{38281:(t,n,e)=>{e.r(n),e.d(n,{default:()=>h});var a=e(82426),r=(e(29794),{});r.defaultNoDataValue=(0,a.a0)(-1/0),r.decode=function(t,n){var e=(n=n||{}).encodedMaskData||null===n.encodedMaskData,l=u(t,n.inputOffset||0,e),c=null!=n.noDataValue?(0,a.a0)(n.noDataValue):r.defaultNoDataValue,f=i(l,n.pixelType||Float32Array,n.encodedMaskData,c,n.returnMask),h={width:l.width,height:l.height,pixelData:f.resultPixels,minValue:l.pixels.minValue,maxValue:l.pixels.maxValue,noDataValue:c};return f.resultMask&&(h.maskData=f.resultMask),n.returnEncodedMask&&l.mask&&(h.encodedMaskData=l.mask.bitset?l.mask.bitset:null),n.returnFileInfo&&(h.fileInfo=o(l,c),n.computeUsedBitDepths&&(h.fileInfo.bitDepths=s(l))),h};var i=function(t,n,e,a,r){var i,o,s=0,u=t.pixels.numBlocksX,c=t.pixels.numBlocksY,f=Math.floor(t.width/u),h=Math.floor(t.height/c),m=2*t.maxZError;e=e||(t.mask?t.mask.bitset:null),i=new n(t.width*t.height),r&&e&&(o=new Uint8Array(t.width*t.height));for(var M,d,g=new Float32Array(f*h),x=0;x<=c;x++){var k=x!==c?h:t.height%c;if(0!==k)for(var p=0;p<=u;p++){var w=p!==u?f:t.width%u;if(0!==w){var b,y,v,V,B=x*t.width*h+p*f,D=t.width-w,U=t.pixels.blocks[s];if(U.encoding<2?(0===U.encoding?b=U.rawData:(l(U.stuffedData,U.bitsPerPixel,U.numValidPixels,U.offset,m,g,t.pixels.maxValue),b=g),y=0):v=2===U.encoding?0:U.offset,e)for(d=0;d<k;d++){for(7&B&&(V=e[B>>3],V<<=7&B),M=0;M<w;M++)7&B||(V=e[B>>3]),128&V?(o&&(o[B]=1),i[B++]=U.encoding<2?b[y++]:v):(o&&(o[B]=0),i[B++]=a),V<<=1;B+=D}else if(U.encoding<2)for(d=0;d<k;d++){for(M=0;M<w;M++)i[B++]=b[y++];B+=D}else for(d=0;d<k;d++)if(i.fill)i.fill(v,B,B+w),B+=w+D;else{for(M=0;M<w;M++)i[B++]=v;B+=D}if(1===U.encoding&&y!==U.numValidPixels)throw"Block and Mask do not match";s++}}}return{resultPixels:i,resultMask:o}},o=function(t,n){return{fileIdentifierString:t.fileIdentifierString,fileVersion:t.fileVersion,imageType:t.imageType,height:t.height,width:t.width,maxZError:t.maxZError,eofOffset:t.eofOffset,mask:t.mask?{numBlocksX:t.mask.numBlocksX,numBlocksY:t.mask.numBlocksY,numBytes:t.mask.numBytes,maxValue:t.mask.maxValue}:null,pixels:{numBlocksX:t.pixels.numBlocksX,numBlocksY:t.pixels.numBlocksY,numBytes:t.pixels.numBytes,maxValue:t.pixels.maxValue,minValue:t.pixels.minValue,noDataValue:n}}},s=function(t){for(var n=t.pixels.numBlocksX*t.pixels.numBlocksY,e={},a=0;a<n;a++){var r=t.pixels.blocks[a];0===r.encoding?e.float32=!0:1===r.encoding?e[r.bitsPerPixel]=!0:e[0]=!0}return Object.keys(e)},u=function(t,n,e){var a={},r=new Uint8Array(t,n,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!=a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;n+=10;var i=new DataView(t,n,24);if(a.fileVersion=i.getInt32(0,!0),a.imageType=i.getInt32(4,!0),a.height=i.getUint32(8,!0),a.width=i.getUint32(12,!0),a.maxZError=i.getFloat64(16,!0),n+=24,!e)if(i=new DataView(t,n,16),a.mask={},a.mask.numBlocksY=i.getUint32(0,!0),a.mask.numBlocksX=i.getUint32(4,!0),a.mask.numBytes=i.getUint32(8,!0),a.mask.maxValue=i.getFloat32(12,!0),n+=16,a.mask.numBytes>0){var o=new Uint8Array(Math.ceil(a.width*a.height/8)),s=(i=new DataView(t,n,a.mask.numBytes)).getInt16(0,!0),u=2,l=0;do{if(s>0)for(;s--;)o[l++]=i.getUint8(u++);else{var c=i.getUint8(u++);for(s=-s;s--;)o[l++]=c}s=i.getInt16(u,!0),u+=2}while(u<a.mask.numBytes);if(-32768!==s||l<o.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=o,n+=a.mask.numBytes}else 0==(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)&&(o=new Uint8Array(Math.ceil(a.width*a.height/8)),a.mask.bitset=o);i=new DataView(t,n,16),a.pixels={},a.pixels.numBlocksY=i.getUint32(0,!0),a.pixels.numBlocksX=i.getUint32(4,!0),a.pixels.numBytes=i.getUint32(8,!0),a.pixels.maxValue=i.getFloat32(12,!0),n+=16;var f=a.pixels.numBlocksX,h=a.pixels.numBlocksY,m=f+(a.width%f>0?1:0),M=h+(a.height%h>0?1:0);a.pixels.blocks=new Array(m*M);for(var d=1e9,g=0,x=0;x<M;x++)for(var k=0;k<m;k++){var p=0,w=t.byteLength-n;i=new DataView(t,n,Math.min(10,w));var b={};a.pixels.blocks[g++]=b;var y=i.getUint8(0);if(p++,b.encoding=63&y,b.encoding>3)throw"Invalid block encoding ("+b.encoding+")";if(2!==b.encoding){if(0!==y&&2!==y){if(y>>=6,b.offsetType=y,2===y)b.offset=i.getInt8(1),p++;else if(1===y)b.offset=i.getInt16(1,!0),p+=2;else{if(0!==y)throw"Invalid block offset type";b.offset=i.getFloat32(1,!0),p+=4}if(d=Math.min(b.offset,d),1===b.encoding)if(y=i.getUint8(p),p++,b.bitsPerPixel=63&y,y>>=6,b.numValidPixelsType=y,2===y)b.numValidPixels=i.getUint8(p),p++;else if(1===y)b.numValidPixels=i.getUint16(p,!0),p+=2;else{if(0!==y)throw"Invalid valid pixel count type";b.numValidPixels=i.getUint32(p,!0),p+=4}}var v;if(n+=p,3!=b.encoding)if(0===b.encoding){var V=(a.pixels.numBytes-1)/4;if(V!==Math.floor(V))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*V),new Uint8Array(v).set(new Uint8Array(t,n,4*V));for(var B=new Float32Array(v),D=0;D<B.length;D++)d=Math.min(d,B[D]);b.rawData=B,n+=4*V}else if(1===b.encoding){var U=Math.ceil(b.numValidPixels*b.bitsPerPixel/8),I=Math.ceil(U/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(t,n,U)),b.stuffedData=new Uint32Array(v),n+=U}}else n++,d=Math.min(d,0)}return a.pixels.minValue=d,a.eofOffset=n,a},l=function(t,n,e,a,r,i,o){var s,u,l,c=(1<<n)-1,f=0,h=0,m=Math.ceil((o-a)/r),M=4*t.length-Math.ceil(n*e/8);for(t[t.length-1]<<=8*M,s=0;s<e;s++){if(0===h&&(l=t[f++],h=32),h>=n)u=l>>>h-n&c,h-=n;else{var d=n-h;u=(l&c)<<d&c,u+=(l=t[f++])>>>(h=32-d)}i[s]=u<m?a+u*r:o}return i};const c=r.decode;class f{_decode(t){const n=c(t.buffer,t.options);return Promise.resolve({result:n,transferList:[n.pixelData.buffer]})}}function h(){return new f}},29794:(t,n,e)=>{e.d(n,{E:()=>a,R:()=>r});const a=1e-6,r=Math.random;Math.PI},82426:(t,n,e)=>{e.d(n,{C:()=>ht,D:()=>u,E:()=>U,F:()=>w,G:()=>ut,H:()=>rt,K:()=>S,L:()=>s,O:()=>c,S:()=>ot,T:()=>I,V:()=>st,Z:()=>l,a:()=>V,a0:()=>mt,ad:()=>x,b:()=>r,c:()=>it,d:()=>v,e:()=>k,f:()=>M,g:()=>B,h:()=>d,i:()=>ft,j:()=>h,k:()=>lt,l:()=>f,m:()=>O,n:()=>y,o:()=>b,p:()=>i,q:()=>o,r:()=>ct,s:()=>m,u:()=>p,v:()=>D,w:()=>dt,x:()=>E,y:()=>A,z:()=>H});var a=e(29794);function r(){return[0,0,0]}function i(t){return[t[0],t[1],t[2]]}function o(t,n,e){return[t,n,e]}function s(t){const n=[0,0,0],e=Math.min(3,t.length);for(let a=0;a<e;++a)n[a]=t[a];return n}function u(t,n){return new Float64Array(t,n,3)}const l=[0,0,0],c=o(1,1,1);function f(t){const n=t[0],e=t[1],a=t[2];return Math.sqrt(n*n+e*e+a*a)}function h(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function m(t,n,e,a){return t[0]=n,t[1]=e,t[2]=a,t}function M(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function d(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function g(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function x(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function k(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function p(t,n){const e=n[0]-t[0],a=n[1]-t[1],r=n[2]-t[2];return Math.sqrt(e*e+a*a+r*r)}function w(t,n){const e=n[0]-t[0],a=n[1]-t[1],r=n[2]-t[2];return e*e+a*a+r*r}function b(t){const n=t[0],e=t[1],a=t[2];return n*n+e*e+a*a}function y(t,n){const e=n[0],a=n[1],r=n[2];let i=e*e+a*a+r*r;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function v(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function V(t,n,e){const a=n[0],r=n[1],i=n[2],o=e[0],s=e[1],u=e[2];return t[0]=r*u-i*s,t[1]=i*o-a*u,t[2]=a*s-r*o,t}function B(t,n,e,a){const r=n[0],i=n[1],o=n[2];return t[0]=r+a*(e[0]-r),t[1]=i+a*(e[1]-i),t[2]=o+a*(e[2]-o),t}function D(t,n,e){const a=n[0],r=n[1],i=n[2];return t[0]=e[0]*a+e[4]*r+e[8]*i+e[12],t[1]=e[1]*a+e[5]*r+e[9]*i+e[13],t[2]=e[2]*a+e[6]*r+e[10]*i+e[14],t}function U(t,n,e){const a=n[0],r=n[1],i=n[2];return t[0]=a*e[0]+r*e[3]+i*e[6],t[1]=a*e[1]+r*e[4]+i*e[7],t[2]=a*e[2]+r*e[5]+i*e[8],t}function I(t,n,e){const a=e[0],r=e[1],i=e[2],o=e[3],s=n[0],u=n[1],l=n[2];let c=r*l-i*u,f=i*s-a*l,h=a*u-r*s,m=r*h-i*f,M=i*c-a*h,d=a*f-r*c;const g=2*o;return c*=g,f*=g,h*=g,m*=2,M*=2,d*=2,t[0]=s+c+m,t[1]=u+f+M,t[2]=l+h+d,t}o(0,0,1);const P=[0,0,0],q=[0,0,0];function A(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function E(t,n,e){const a=e[0]-n[0],r=e[1]-n[1],i=e[2]-n[2];let o=a*a+r*r+i*i;return o>0?(o=1/Math.sqrt(o),t[0]=a*o,t[1]=r*o,t[2]=i*o,t):(t[0]=0,t[1]=0,t[2]=0,t)}const F=d,Y=g,R=x,X=p,_=w,C=f,L=b;function O(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function S(t,n,e,a,r){return t[0]=n,t[1]=e,t[2]=a,t[3]=r,t}function T(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function Z(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function z(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function j(t,n){const e=n[0]-t[0],a=n[1]-t[1],r=n[2]-t[2],i=n[3]-t[3];return Math.sqrt(e*e+a*a+r*r+i*i)}function N(t,n){const e=n[0]-t[0],a=n[1]-t[1],r=n[2]-t[2],i=n[3]-t[3];return e*e+a*a+r*r+i*i}function Q(t){const n=t[0],e=t[1],a=t[2],r=t[3];return Math.sqrt(n*n+e*e+a*a+r*r)}function G(t){const n=t[0],e=t[1],a=t[2],r=t[3];return n*n+e*e+a*a+r*r}function H(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}Object.freeze({__proto__:null,length:f,copy:h,set:m,add:M,subtract:d,multiply:g,divide:x,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:k,scaleAndAdd:function(t,n,e,a){return t[0]=n[0]+e[0]*a,t[1]=n[1]+e[1]*a,t[2]=n[2]+e[2]*a,t},distance:p,squaredDistance:w,squaredLength:b,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:y,dot:v,cross:V,lerp:B,hermite:function(t,n,e,a,r,i){const o=i*i,s=o*(2*i-3)+1,u=o*(i-2)+i,l=o*(i-1),c=o*(3-2*i);return t[0]=n[0]*s+e[0]*u+a[0]*l+r[0]*c,t[1]=n[1]*s+e[1]*u+a[1]*l+r[1]*c,t[2]=n[2]*s+e[2]*u+a[2]*l+r[2]*c,t},bezier:function(t,n,e,a,r,i){const o=1-i,s=o*o,u=i*i,l=s*o,c=3*i*s,f=3*u*o,h=u*i;return t[0]=n[0]*l+e[0]*c+a[0]*f+r[0]*h,t[1]=n[1]*l+e[1]*c+a[1]*f+r[1]*h,t[2]=n[2]*l+e[2]*c+a[2]*f+r[2]*h,t},random:function(t,n){n=n||1;const e=2*(0,a.R)()*Math.PI,r=2*(0,a.R)()-1,i=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(e)*i,t[1]=Math.sin(e)*i,t[2]=r*n,t},transformMat4:D,transformMat3:U,transformQuat:I,rotateX:function(t,n,e,a){const r=[],i=[];return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],i[0]=r[0],i[1]=r[1]*Math.cos(a)-r[2]*Math.sin(a),i[2]=r[1]*Math.sin(a)+r[2]*Math.cos(a),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,a){const r=[],i=[];return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],i[0]=r[2]*Math.sin(a)+r[0]*Math.cos(a),i[1]=r[1],i[2]=r[2]*Math.cos(a)-r[0]*Math.sin(a),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,a){const r=[],i=[];return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],i[0]=r[0]*Math.cos(a)-r[1]*Math.sin(a),i[1]=r[0]*Math.sin(a)+r[1]*Math.cos(a),i[2]=r[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},angle:function(t,n){h(P,t),h(q,n),y(P,P),y(q,q);const e=v(P,q);return e>1?0:e<-1?Math.PI:Math.acos(e)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:A,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],i=t[2],o=n[0],s=n[1],u=n[2];return Math.abs(e-o)<=a.E*Math.max(1,Math.abs(e),Math.abs(o))&&Math.abs(r-s)<=a.E*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-u)<=a.E*Math.max(1,Math.abs(i),Math.abs(u))},direction:E,sub:F,mul:Y,div:R,dist:X,sqrDist:_,len:C,sqrLen:L});const K=T,J=Z,W=z,$=j,tt=N,nt=Q,et=G,at=(Object.freeze({__proto__:null,copy:O,set:S,add:function(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t},subtract:T,multiply:Z,divide:z,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:function(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t},scaleAndAdd:function(t,n,e,a){return t[0]=n[0]+e[0]*a,t[1]=n[1]+e[1]*a,t[2]=n[2]+e[2]*a,t[3]=n[3]+e[3]*a,t},distance:j,squaredDistance:N,length:Q,squaredLength:G,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:function(t,n){const e=n[0],a=n[1],r=n[2],i=n[3];let o=e*e+a*a+r*r+i*i;return o>0&&(o=1/Math.sqrt(o),t[0]=e*o,t[1]=a*o,t[2]=r*o,t[3]=i*o),t},dot:function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},lerp:function(t,n,e,a){const r=n[0],i=n[1],o=n[2],s=n[3];return t[0]=r+a*(e[0]-r),t[1]=i+a*(e[1]-i),t[2]=o+a*(e[2]-o),t[3]=s+a*(e[3]-s),t},random:function(t,n){let e,r,i,o,s,u;n=n||1;do{e=2*(0,a.R)()-1,r=2*(0,a.R)()-1,s=e*e+r*r}while(s>=1);do{i=2*(0,a.R)()-1,o=2*(0,a.R)()-1,u=i*i+o*o}while(u>=1);const l=Math.sqrt((1-s)/u);return t[0]=n*e,t[1]=n*r,t[2]=n*i*l,t[3]=n*o*l,t},transformMat4:function(t,n,e){const a=n[0],r=n[1],i=n[2],o=n[3];return t[0]=e[0]*a+e[4]*r+e[8]*i+e[12]*o,t[1]=e[1]*a+e[5]*r+e[9]*i+e[13]*o,t[2]=e[2]*a+e[6]*r+e[10]*i+e[14]*o,t[3]=e[3]*a+e[7]*r+e[11]*i+e[15]*o,t},transformQuat:function(t,n,e){const a=n[0],r=n[1],i=n[2],o=e[0],s=e[1],u=e[2],l=e[3],c=l*a+s*i-u*r,f=l*r+u*a-o*i,h=l*i+o*r-s*a,m=-o*a-s*r-u*i;return t[0]=c*l+m*-o+f*-u-h*-s,t[1]=f*l+m*-s+h*-o-c*-u,t[2]=h*l+m*-u+c*-s-f*-o,t[3]=n[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:H,equals:function(t,n){const e=t[0],r=t[1],i=t[2],o=t[3],s=n[0],u=n[1],l=n[2],c=n[3];return Math.abs(e-s)<=a.E*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(r-u)<=a.E*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-l)<=a.E*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(o-c)<=a.E*Math.max(1,Math.abs(o),Math.abs(c))},sub:K,mul:J,div:W,dist:$,sqrDist:tt,len:nt,sqrLen:et}),new Float32Array(1));function rt(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function it(t,n,e){return Math.min(Math.max(t,n),e)}function ot(t){return 0==(t&t-1)}function st(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}function ut(t,n,e){return t+(n-t)*e}function lt(t){return t*Math.PI/180}function ct(t){return 180*t/Math.PI}function ft(t){return Math.acos(it(t,-1,1))}function ht(t){return Math.asin(it(t,-1,1))}function mt(t){return Mt(Math.max(-gt,Math.min(t,gt)))}function Mt(t){return at[0]=t,at[0]}function dt(t,n){const e=f(t);return m(n,e,ht(t[2]/e),Math.atan2(t[1]/e,t[0]/e)),n}const gt=Mt(34028234663852886e22)}}]);