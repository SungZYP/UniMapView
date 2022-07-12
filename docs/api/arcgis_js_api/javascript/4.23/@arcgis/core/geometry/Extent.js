/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{i,b as e}from"../core/lang.js";import{r as n}from"../chunks/string.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import m from"./Geometry.js";import a from"./Point.js";import o,{g as h}from"./SpatialReference.js";import{canProject as x,geographicToWebMercator as c,webMercatorToGeographic as l}from"./support/webMercatorUtils.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";const u=[0,0];function p(t,e){return!!i(e)&&d(t,e.x,e.y,e.z)}function f(t,i){if(!i.points||i.points.length)return!1;for(const e of i.points)if(!y(t,e))return!1;return!0}function y(t,i){return d(t,i[0],i[1])}function z(t,i){return d(t,i[0],i[1],i[2])}function d(t,i,e,n){return i>=t.xmin&&i<=t.xmax&&e>=t.ymin&&e<=t.ymax&&(null==n||!t.hasZ||n>=t.zmin&&n<=t.zmax)}function g(t,i){return u[1]=i.y,u[0]=i.x,M(t,u)}function M(t,i){return function(t,i){if(!t)return!1;if(function(t){return!Array.isArray(t[0][0])}(t))return j(!1,t,i);let e=!1;for(let n=0,s=t.length;n<s;n++)e=j(e,t[n],i);return e}(t.rings,i)}function j(t,i,e){const[n,s]=e;let r=t,m=0;for(let t=0,e=i.length;t<e;t++){m++,m===e&&(m=0);const[a,o]=i[t],[h,x]=i[m];(o<s&&x>=s||x<s&&o>=s)&&a+(s-o)/(x-o)*(h-a)<n&&(r=!r)}return r}function w(t,i){return p(t,i)}function b(t,i){const e=t.hasZ&&i.hasZ;let n,s,r;if(t.xmin<=i.xmin){if(n=i.xmin,t.xmax<n)return!1}else if(n=t.xmin,i.xmax<n)return!1;if(t.ymin<=i.ymin){if(s=i.ymin,t.ymax<s)return!1}else if(s=t.ymin,i.ymax<s)return!1;if(e&&i.hasZ)if(t.zmin<=i.zmin){if(r=i.zmin,t.zmax<r)return!1}else if(r=t.zmin,i.zmax<r)return!1;return!0}function R(t,i){const{points:e,hasZ:n}=i,s=n?z:y;for(const i of e)if(s(t,i))return!0;return!1}const v=[0,0],P=[0,0],k=[0,0],Z=[0,0],_=[v,P,k,Z],N=[[k,v],[v,P],[P,Z],[Z,k]];function S(t,i){v[0]=t.xmin,v[1]=t.ymax,P[0]=t.xmax,P[1]=t.ymax,k[0]=t.xmin,k[1]=t.ymin,Z[0]=t.xmax,Z[1]=t.ymin;for(const t of _)if(M(i,t))return!0;for(const e of i.rings){if(!e.length)continue;let i=e[0];if(y(t,i))return!0;for(let n=1;n<e.length;n++){const s=e[n];if(y(t,s)||G(i,s,N))return!0;i=s}}return!1}function O(t,i){v[0]=t.xmin,v[1]=t.ymax,P[0]=t.xmax,P[1]=t.ymax,k[0]=t.xmin,k[1]=t.ymin,Z[0]=t.xmax,Z[1]=t.ymin;const e=i.paths;for(const i of e){if(!e.length)continue;let n=i[0];if(y(t,n))return!0;for(let e=1;e<i.length;e++){const s=i[e];if(y(t,s)||G(n,s,N))return!0;n=s}}return!1}const I=[0,0];function C(t){for(let i=0;i<t.length;i++){const e=t[i];for(let n=0;n<e.length-1;n++){const s=e[n],r=e[n+1];for(let e=i+1;e<t.length;e++)for(let i=0;i<t[e].length-1;i++){const n=t[e][i],m=t[e][i+1];if(A(s,r,n,m,I)&&!(I[0]===s[0]&&I[1]===s[1]||I[0]===n[0]&&I[1]===n[1]||I[0]===r[0]&&I[1]===r[1]||I[0]===m[0]&&I[1]===m[1]))return!0}}const n=e.length;if(!(n<=4))for(let t=0;t<n-3;t++){let i=n-1;0===t&&(i=n-2);const s=e[t],r=e[t+1];for(let n=t+2;n<i;n++){const t=e[n],i=e[n+1];if(A(s,r,t,i,I)&&!(I[0]===s[0]&&I[1]===s[1]||I[0]===t[0]&&I[1]===t[1]||I[0]===r[0]&&I[1]===r[1]||I[0]===i[0]&&I[1]===i[1]))return!0}}}return!1}function G(t,i,e){for(let n=0;n<e.length;n++)if(A(t,i,e[n][0],e[n][1]))return!0;return!1}function A(t,i,e,n,s){const[r,m]=t,[a,o]=i,[h,x]=e,[c,l]=n,u=c-h,p=r-h,f=a-r,y=l-x,z=m-x,d=o-m,g=y*f-u*d;if(0===g)return!1;const M=(u*z-y*p)/g,j=(f*z-d*p)/g;return M>=0&&M<=1&&j>=0&&j<=1&&(s&&(s[0]=r+M*(a-r),s[1]=m+M*(o-m)),!0)}function W(t){switch(t){case"esriGeometryEnvelope":case"extent":return b;case"esriGeometryMultipoint":case"multipoint":return R;case"esriGeometryPoint":case"point":return w;case"esriGeometryPolygon":case"polygon":return S;case"esriGeometryPolyline":case"polyline":return O}}var E;function T(t,i,e){return null==i?e:null==e?i:t(i,e)}let q=E=class extends m{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(t,i,e,n,s){return!(r=t)||"esri.geometry.SpatialReference"!==r.declaredClass&&null==r.wkid?"object"==typeof t?(t.spatialReference=null==t.spatialReference?o.WGS84:t.spatialReference,t):{xmin:t,ymin:i,xmax:e,ymax:n,spatialReference:null==s?o.WGS84:s}:{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0};var r}static fromBounds(t,i){return new E({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:i})}static fromPoint(t){return new E({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new a({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const i=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-i.x,t.y-i.y,t.z-i.z):this.offset(t.x-i.x,t.y-i.y)}clone(){const t=new E;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return!1;const i=this.spatialReference,e=t.spatialReference;return i&&e&&!i.equals(e)&&x(i,e)&&(t=i.isWebMercator?c(t):l(t,!0)),"point"===t.type?p(this,t):"extent"===t.type&&function(t,i){const{xmin:e,ymin:n,zmin:s,xmax:r,ymax:m,zmax:a}=i;return t.hasZ&&i.hasZ?d(t,e,n,s)&&d(t,e,m,s)&&d(t,r,m,s)&&d(t,r,n,s)&&d(t,e,n,a)&&d(t,e,m,a)&&d(t,r,m,a)&&d(t,r,n,a):d(t,e,n)&&d(t,e,m)&&d(t,r,m)&&d(t,r,n)}(this,t)}equals(t){if(this===t)return!0;if(e(t))return!1;const i=this.spatialReference,n=t.spatialReference;return i&&n&&!i.equals(n)&&x(i,n)&&(t=i.isWebMercator?c(t):l(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const i=.5*(1-t),e=this.width*i,n=this.height*i;if(this.xmin+=e,this.ymin+=n,this.xmax-=e,this.ymax-=n,this.hasZ){const t=(this.zmax-this.zmin)*i;this.zmin+=t,this.zmax-=t}if(this.hasM){const t=(this.mmax-this.mmin)*i;this.mmin+=t,this.mmax-=t}return this}intersects(t){if(e(t))return!1;"mesh"===t.type&&(t=t.extent);const i=this.spatialReference,n=t.spatialReference;i&&n&&!i.equals(n)&&x(i,n)&&(t=i.isWebMercator?c(t):l(t,!0));return W(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,i,e){return this.xmin+=t,this.ymin+=i,this.xmax+=t,this.ymax+=i,null!=e&&(this.zmin+=e,this.zmax+=e),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=T(Math.min,this.zmin,t.zmin),this.zmax=T(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=T(Math.min,this.mmin,t.mmin),this.mmax=T(Math.max,this.mmax,t.mmax))),this}intersection(t){return this===t?this:e(t)||!this.intersects(t)?null:(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=T(Math.max,this.zmin,t.zmin),this.zmax=T(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=T(Math.max,this.mmin,t.mmin),this.mmax=T(Math.min,this.mmax,t.mmax)),this)}toJSON(t){return this.write({},t)}_shiftCM(t=h(this.spatialReference)){if(!t||!this.spatialReference)return this;const i=this.spatialReference,e=this._getCM(t);if(e){const s=i.isWebMercator?l(e):e;this.xmin-=e.x,this.xmax-=e.x,i.isWebMercator||(s.x=this._normalizeX(s.x,t).x),this.spatialReference=new o(n(i.isWGS84?t.altTemplate:t.wkTemplate,{Central_Meridian:s.x}))}return this}_getCM(t){let i=null;const[e,n]=t.valid,s=this.xmin,r=this.xmax;return s>=e&&s<=n&&(r>=e&&r<=n)||(i=this.center),i}_normalize(t,i,e){const n=this.spatialReference;if(!n)return this;if(!(e=e||h(n)))return this;const s=this._getParts(e).map((t=>t.extent));if(s.length<2)return s[0]||this;if(s.length>2)return t?this._shiftCM(e):this.set({xmin:e.valid[0],xmax:e.valid[1]});if(t)return this._shiftCM(e);if(i)return s;let r=!0,m=!0;return s.forEach((t=>{t.hasZ||(r=!1),t.hasM||(m=!1)})),{rings:s.map((t=>{const i=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(r){const e=(t.zmax-t.zmin)/2;for(let t=0;t<i.length;t++)i[t].push(e)}if(m){const e=(t.mmax-t.mmin)/2;for(let t=0;t<i.length;t++)i[t].push(e)}return i})),hasZ:r,hasM:m,spatialReference:n}}_getParts(t){let i=this.cache._parts;if(!i){i=[];const{ymin:e,ymax:n,spatialReference:s}=this,r=this.width,m=this.xmin,a=this.xmax;let o;t=t||h(s);const[x,c]=t.valid;o=this._normalizeX(this.xmin,t);const l=o.x,u=o.frameId;o=this._normalizeX(this.xmax,t);const p=o.x,f=o.frameId,y=l===p&&r>0;if(r>2*c){const t=new E(m<a?l:p,e,c,n,s),r=new E(x,e,m<a?p:l,n,s),o=new E(0,e,c,n,s),h=new E(x,e,0,n,s),y=[],z=[];t.contains(o)&&y.push(u),t.contains(h)&&z.push(u),r.contains(o)&&y.push(f),r.contains(h)&&z.push(f);for(let t=u+1;t<f;t++)y.push(t),z.push(t);i.push({extent:t,frameIds:[u]},{extent:r,frameIds:[f]},{extent:o,frameIds:y},{extent:h,frameIds:z})}else l>p||y?i.push({extent:new E(l,e,c,n,s),frameIds:[u]},{extent:new E(x,e,p,n,s),frameIds:[f]}):i.push({extent:new E(l,e,p,n,s),frameIds:[u]});this.cache._parts=i}const e=this.hasZ,n=this.hasM;if(e||n){const t={};e&&(t.zmin=this.zmin,t.zmax=this.zmax),n&&(t.mmin=this.mmin,t.mmax=this.mmax);for(let e=0;e<i.length;e++)i[e].extent.set(t)}return i}_normalizeX(t,i){const[e,n]=i.valid,s=2*n;let r,m=0;return t>n?(r=Math.ceil(Math.abs(t-n)/s),t-=r*s,m=r):t<e&&(r=Math.ceil(Math.abs(t-e)/s),t+=r*s,m=-r),{x:t,frameId:m}}};t([s({readOnly:!0})],q.prototype,"cache",null),t([s({readOnly:!0})],q.prototype,"center",null),t([s({readOnly:!0})],q.prototype,"extent",null),t([s({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],q.prototype,"hasM",null),t([s({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],q.prototype,"hasZ",null),t([s({readOnly:!0})],q.prototype,"height",null),t([s({readOnly:!0})],q.prototype,"width",null),t([s({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],q.prototype,"xmin",void 0),t([s({type:Number,json:{write:!0}})],q.prototype,"ymin",void 0),t([s({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],q.prototype,"mmin",void 0),t([s({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],q.prototype,"zmin",void 0),t([s({type:Number,json:{write:!0}})],q.prototype,"xmax",void 0),t([s({type:Number,json:{write:!0}})],q.prototype,"ymax",void 0),t([s({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],q.prototype,"mmax",void 0),t([s({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],q.prototype,"zmax",void 0),q=E=t([r("esri.geometry.Extent")],q),q.prototype.toJSON.isDefaultToJSON=!0;const J=q;export{O as a,b,f as c,z as d,J as default,p as e,W as g,C as i,g as p,A as s};
