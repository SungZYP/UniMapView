/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{L as t}from"./Logger.js";import"./mathUtils.js";import{C as r,J as n}from"./enums2.js";import"./number2.js";import{a as s,V as a}from"./enums4.js";import{O as o}from"./ArrayPool.js";import{U as i,b as c,D as u}from"./enums.js";import"./Texture.js";import{V as l}from"./VertexElementDescriptor.js";class h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(e,t,r,n,s,a,o,i,c){this.color=e,this.haloColor=t,this.haloSize=r,this.size=n,this.angle=s,this.offsetX=a,this.offsetY=o,this.hAnchor=i,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}h.pool=new o(h);const m=t.getLogger("esri.views.2d.engine.webgl.Utils"),f=[{name:"geometry",strideInBytes:32}],d=[{name:"geometry",strideInBytes:20}],y=[{name:"geometry",strideInBytes:12}],p=[{name:"geometry",strideInBytes:40}],g=[{name:"geometry",strideInBytes:36}],S=[{name:"geometry",strideInBytes:36}];function w(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const T=w([{name:"geometry",strideInBytes:36}]),I=w(f),E=w(d),A=w(y),L=w(p),N=w(g),D=w(S);function C(e,{fill:t}){switch(e){case s.MARKER:return T;case s.FILL:return"dot-density"===t?A:"simple"===t?E:I;case s.LINE:return L;case s.TEXT:return N;case s.LABEL:return D}}const U=["geometry"],v=["geometry"],R=["geometry"],M=["geometry"],O=["geometry"];function B(e){switch(e){case s.MARKER:return U;case s.FILL:return v;case s.LINE:return R;case s.TEXT:return M;case s.LABEL:return O}}function b(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function z(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function _(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function F(e){return null!=e}function x(e){return"number"==typeof e}function j(t){switch(t){case"butt":return r.BUTT;case"round":return r.ROUND;case"square":return r.SQUARE;default:return m.error(new e("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),r.ROUND}}function V(t){switch(t){case"miter":return n.MITER;case"bevel":return n.BEVEL;case"round":return n.ROUND;default:return m.error(new e("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),n.ROUND}}function Y(e){switch(e){case"opacity":return a.OPACITY;case"color":return a.COLOR;case"rotation":return a.ROTATION;case"size":return a.SIZE;default:return m.error(`Cannot interpret unknown vv: ${e}`),null}}function $(e,t,r,n,s,a,o){for(const t in a){const n=a[t].stride,o=b(n),i=a[t].data,c=r[t].data,u=n*s.vertexCount/o,l=n*e/o,h=n*s.vertexFrom/o;for(let e=0;e<u;++e)c[e+l]=i[e+h]}const i=s.indexCount;for(let r=0;r<i;++r)n[r+t]=o[r+s.indexFrom]-s.vertexFrom+e}const G={geometry:i.STATIC_DRAW};function k(e,t){const r=[];for(let n=0;n<5;++n){const s=B(n),a={};for(const e of s)a[e]={data:t(n,e)};r.push({data:e(n),buffers:a})}return r}function X(e){switch(e){case u.BYTE:case u.UNSIGNED_BYTE:return 1;case u.SHORT:case u.UNSIGNED_SHORT:return 2;case u.FLOAT:case u.INT:case u.UNSIGNED_INT:return 4}}function q(t){switch(t){case c.UNSIGNED_BYTE:return 1;case c.UNSIGNED_SHORT_4_4_4_4:return 2;case c.FLOAT:return 4;default:return void m.error(new e("webgl-utils",`Unable to handle type ${t}`))}}function P(t){switch(t){case c.UNSIGNED_BYTE:return Uint8Array;case c.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case c.FLOAT:return Float32Array;default:return void m.error(new e("webgl-utils",`Unable to handle type ${t}`))}}const H=new Map,K=(e,t)=>{if(!H.has(e)){const r=function(e){const t={};for(const r in e){const n=e[r];let s=0;t[r]=n.map((e=>{const t=new l(e.name,e.count,e.type,s,0,e.normalized||!1);return s+=e.count*X(e.type),t})),t[r].forEach((e=>e.stride=s))}return t}(t),n=(e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0}return t})(r),s=(e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t})(t),a={strides:n,bufferLayouts:r,attributes:s};H.set(e,a)}return H.get(e)};function J(e){e(s.FILL),e(s.LINE),e(s.MARKER),e(s.TEXT),e(s.LABEL)}const Q=e=>"path"in e&&ce(e.path),W=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,Z=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,ee=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),te=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),re=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function ne(e){switch(e.type){case"line":{const t=e;return"CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const se=e=>e.includes("data:image/svg+xml");function ae(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function oe(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function ie(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const ce=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4));export{G as C,re as a,ie as b,K as c,ne as d,Q as e,W as f,P as g,oe as h,x as i,ee as j,te as k,Z as l,se as m,z as n,b as o,$ as p,k as q,_ as r,ae as s,C as t,J as u,j as v,V as w,Y as x,q as y,F as z};