"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6373,2058],{92482:(e,t,r)=>{r.d(t,{N:()=>d,b:()=>s,f:()=>o,h:()=>h,m:()=>i,p:()=>c,t:()=>l,z:()=>u});var n=r(76506),a=(r(82426),r(21801));function s(e=f){return[e[0],e[1],e[2],e[3]]}function o(e,t,r,n,a=s()){return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a}function i(e,t=s()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function l(e,t){return new a.Z({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function u(e){return t=e,((0,n.b)(t)||t[0]>=t[2]?0:t[2]-t[0])*function(e){return e[1]>=e[3]?0:e[3]-e[1]}(e);var t}function c(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function h(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}const d=[1/0,1/0,-1/0,-1/0],f=[0,0,0,0]},73173:(e,t,r)=>{r.d(t,{g:()=>l});var n=r(31450),a=(r(82058),r(60991)),s=r(92143),o=r(32101);const i=s.L.getLogger("esri.assets");function l(e){if(!n.Z.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new a.Z("assets:path-not-set","config.assetsPath is not set");return(0,o.v_)(n.Z.assetsPath,e)}},65775:(e,t,r)=>{r.d(t,{a:()=>c,e:()=>m,g:()=>i,h:()=>o,i:()=>s,j:()=>d,k:()=>w,l:()=>h,m:()=>l,s:()=>a,t:()=>u,u:()=>f,v:()=>y,w:()=>b,z:()=>p});var n=r(29794);function a(e,t,r,n,a,s,o,i,l,u,c,h,d,f,m,p,b){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e[4]=s,e[5]=o,e[6]=i,e[7]=l,e[8]=u,e[9]=c,e[10]=h,e[11]=d,e[12]=f,e[13]=m,e[14]=p,e[15]=b,e}function s(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function o(e,t){if(e===t){const r=t[1],n=t[2],a=t[3],s=t[6],o=t[7],i=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=s,e[11]=t[14],e[12]=a,e[13]=o,e[14]=i}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function i(e,t){const r=t[0],n=t[1],a=t[2],s=t[3],o=t[4],i=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],f=t[11],m=t[12],p=t[13],b=t[14],y=t[15],w=r*i-n*o,g=r*l-a*o,M=r*u-s*o,x=n*l-a*i,E=n*u-s*i,k=a*u-s*l,q=c*p-h*m,v=c*b-d*m,T=c*y-f*m,O=h*b-d*p,L=h*y-f*p,S=d*y-f*b;let C=w*S-g*L+M*O+x*T-E*v+k*q;return C?(C=1/C,e[0]=(i*S-l*L+u*O)*C,e[1]=(a*L-n*S-s*O)*C,e[2]=(p*k-b*E+y*x)*C,e[3]=(d*E-h*k-f*x)*C,e[4]=(l*T-o*S-u*v)*C,e[5]=(r*S-a*T+s*v)*C,e[6]=(b*M-m*k-y*g)*C,e[7]=(c*k-d*M+f*g)*C,e[8]=(o*L-i*T+u*q)*C,e[9]=(n*T-r*L-s*q)*C,e[10]=(m*E-p*M+y*w)*C,e[11]=(h*M-c*E-f*w)*C,e[12]=(i*v-o*O-l*q)*C,e[13]=(r*O-n*v+a*q)*C,e[14]=(p*g-m*x-b*w)*C,e[15]=(c*x-h*g+d*w)*C,e):null}function l(e,t,r){const n=t[0],a=t[1],s=t[2],o=t[3],i=t[4],l=t[5],u=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],p=t[12],b=t[13],y=t[14],w=t[15];let g=r[0],M=r[1],x=r[2],E=r[3];return e[0]=g*n+M*i+x*h+E*p,e[1]=g*a+M*l+x*d+E*b,e[2]=g*s+M*u+x*f+E*y,e[3]=g*o+M*c+x*m+E*w,g=r[4],M=r[5],x=r[6],E=r[7],e[4]=g*n+M*i+x*h+E*p,e[5]=g*a+M*l+x*d+E*b,e[6]=g*s+M*u+x*f+E*y,e[7]=g*o+M*c+x*m+E*w,g=r[8],M=r[9],x=r[10],E=r[11],e[8]=g*n+M*i+x*h+E*p,e[9]=g*a+M*l+x*d+E*b,e[10]=g*s+M*u+x*f+E*y,e[11]=g*o+M*c+x*m+E*w,g=r[12],M=r[13],x=r[14],E=r[15],e[12]=g*n+M*i+x*h+E*p,e[13]=g*a+M*l+x*d+E*b,e[14]=g*s+M*u+x*f+E*y,e[15]=g*o+M*c+x*m+E*w,e}function u(e,t,r){const n=r[0],a=r[1],s=r[2];let o,i,l,u,c,h,d,f,m,p,b,y;return t===e?(e[12]=t[0]*n+t[4]*a+t[8]*s+t[12],e[13]=t[1]*n+t[5]*a+t[9]*s+t[13],e[14]=t[2]*n+t[6]*a+t[10]*s+t[14],e[15]=t[3]*n+t[7]*a+t[11]*s+t[15]):(o=t[0],i=t[1],l=t[2],u=t[3],c=t[4],h=t[5],d=t[6],f=t[7],m=t[8],p=t[9],b=t[10],y=t[11],e[0]=o,e[1]=i,e[2]=l,e[3]=u,e[4]=c,e[5]=h,e[6]=d,e[7]=f,e[8]=m,e[9]=p,e[10]=b,e[11]=y,e[12]=o*n+c*a+m*s+t[12],e[13]=i*n+h*a+p*s+t[13],e[14]=l*n+d*a+b*s+t[14],e[15]=u*n+f*a+y*s+t[15]),e}function c(e,t,r){const n=r[0],a=r[1],s=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*a,e[5]=t[5]*a,e[6]=t[6]*a,e[7]=t[7]*a,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function h(e,t,r,a){let s,o,i,l,u,c,h,d,f,m,p,b,y,w,g,M,x,E,k,q,v,T,O,L,S=a[0],C=a[1],P=a[2],U=Math.sqrt(S*S+C*C+P*P);return U<n.E?null:(U=1/U,S*=U,C*=U,P*=U,s=Math.sin(r),o=Math.cos(r),i=1-o,l=t[0],u=t[1],c=t[2],h=t[3],d=t[4],f=t[5],m=t[6],p=t[7],b=t[8],y=t[9],w=t[10],g=t[11],M=S*S*i+o,x=C*S*i+P*s,E=P*S*i-C*s,k=S*C*i-P*s,q=C*C*i+o,v=P*C*i+S*s,T=S*P*i+C*s,O=C*P*i-S*s,L=P*P*i+o,e[0]=l*M+d*x+b*E,e[1]=u*M+f*x+y*E,e[2]=c*M+m*x+w*E,e[3]=h*M+p*x+g*E,e[4]=l*k+d*q+b*v,e[5]=u*k+f*q+y*v,e[6]=c*k+m*q+w*v,e[7]=h*k+p*q+g*v,e[8]=l*T+d*O+b*L,e[9]=u*T+f*O+y*L,e[10]=c*T+m*O+w*L,e[11]=h*T+p*O+g*L,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function d(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function f(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function m(e,t,r){let a,s,o,i=r[0],l=r[1],u=r[2],c=Math.sqrt(i*i+l*l+u*u);return c<n.E?null:(c=1/c,i*=c,l*=c,u*=c,a=Math.sin(t),s=Math.cos(t),o=1-s,e[0]=i*i*o+s,e[1]=l*i*o+u*a,e[2]=u*i*o-l*a,e[3]=0,e[4]=i*l*o-u*a,e[5]=l*l*o+s,e[6]=u*l*o+i*a,e[7]=0,e[8]=i*u*o+l*a,e[9]=l*u*o-i*a,e[10]=u*u*o+s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function p(e,t){const r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function b(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function y(e,t){if(e===t)return!0;const r=e[0],a=e[1],s=e[2],o=e[3],i=e[4],l=e[5],u=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],p=e[12],b=e[13],y=e[14],w=e[15],g=t[0],M=t[1],x=t[2],E=t[3],k=t[4],q=t[5],v=t[6],T=t[7],O=t[8],L=t[9],S=t[10],C=t[11],P=t[12],U=t[13],_=t[14],D=t[15];return Math.abs(r-g)<=n.E*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(a-M)<=n.E*Math.max(1,Math.abs(a),Math.abs(M))&&Math.abs(s-x)<=n.E*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(o-E)<=n.E*Math.max(1,Math.abs(o),Math.abs(E))&&Math.abs(i-k)<=n.E*Math.max(1,Math.abs(i),Math.abs(k))&&Math.abs(l-q)<=n.E*Math.max(1,Math.abs(l),Math.abs(q))&&Math.abs(u-v)<=n.E*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(c-T)<=n.E*Math.max(1,Math.abs(c),Math.abs(T))&&Math.abs(h-O)<=n.E*Math.max(1,Math.abs(h),Math.abs(O))&&Math.abs(d-L)<=n.E*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(f-S)<=n.E*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(m-C)<=n.E*Math.max(1,Math.abs(m),Math.abs(C))&&Math.abs(p-P)<=n.E*Math.max(1,Math.abs(p),Math.abs(P))&&Math.abs(b-U)<=n.E*Math.max(1,Math.abs(b),Math.abs(U))&&Math.abs(y-_)<=n.E*Math.max(1,Math.abs(y),Math.abs(_))&&Math.abs(w-D)<=n.E*Math.max(1,Math.abs(w),Math.abs(D))}function w(e){const t=n.E,r=e[0],a=e[1],s=e[2],o=e[4],i=e[5],l=e[6],u=e[8],c=e[9],h=e[10];return Math.abs(1-(r*r+o*o+u*u))<=t&&Math.abs(1-(a*a+i*i+c*c))<=t&&Math.abs(1-(s*s+l*l+h*h))<=t}},92847:(e,t,r)=>{r.d(t,{g:()=>o});var n=r(76506),a=r(53785),s=r(60947);function o(e,t,r){if((0,n.b)(t)||(0,n.b)(r)||r.vcsWkid||(0,s.e)(t,r))return null;const o=(0,a.b)(t)/(0,a.b)(r);if(1===o)return null;switch(e){case"point":case"esriGeometryPoint":return e=>{return r=o,void((t=e)&&null!=t.z&&(t.z*=r));var t,r};case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,o);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,o);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,o);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,o);default:return null}}},82058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,l:()=>h,r:()=>C,s:()=>c});var n=r(31450),a=r(88762),s=r(60991),o=r(76506),i=r(50406),l=r(32101);r(71552),r(92143),r(40642);const u=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function c(e){const t=(0,l.P$)(e,!0);return t&&t.endsWith(".arcgis.com")&&!u.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function h(e,t,r=!1,n){return new Promise(((a,s)=>{if((0,i.Hc)(n))return void s(d());let l=()=>{h(),s(new Error(`Unable to load ${t}`))},u=()=>{const t=e;h(),a(t)},c=()=>{if(!e)return;const t=e;h(),t.src="",s(d())};const h=()=>{(0,o.h)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",u)),l=null,u=null,e=null,(0,o.i)(n)&&n.removeEventListener("abort",c),c=null,r&&URL.revokeObjectURL(t)};(0,o.i)(n)&&n.addEventListener("abort",c),(0,o.h)("esri-image-decode")?e.decode().then(u,l):(e.addEventListener("error",l),e.addEventListener("load",u))}))}function d(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function f(e,t){var u;const h=(0,l.HK)(e),d=(0,l.jc)(e);d||h||(e=(0,l.Fv)(e));const y={url:e,requestOptions:{...(0,o.u)(t)}};let w=(0,l.oh)(e);if(w){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=k("request:interceptor",e,t)}if((n instanceof Error||n instanceof s.Z)&&(r=k("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(w,y);if(null!=e)return{data:e,getHeader:M,requestOptions:y.requestOptions,url:y.url};w.after||w.error||(w=null)}if(e=y.url,"image"===(t=y.requestOptions).responseType){if((0,o.h)("host-webworker")||(0,o.h)("host-node"))throw k("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),y)}else if(h)throw k("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),y);if("head"===t.method){if(t.body)throw k("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),y);if(h||d)throw k("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),y)}if(await async function(){(0,o.h)("host-webworker")?m||(m=await r.e(9768).then(r.bind(r,89768))):f._abortableFetch||(f._abortableFetch=globalThis.fetch.bind(globalThis))}(),m)return m.execute(e,t);const g=new AbortController;(0,i.fu)(t,(()=>g.abort()));const x={controller:g,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:w,params:y,redoRequest:!1,useIdentity:p.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},E=await async function(e){var t,r;let s,o;await async function(e){const t=e.params.url,r=e.params.requestOptions,s=e.controller.signal,o=r.body;let l=null,u=null,h=null;if(b&&"HTMLFormElement"in globalThis&&(o instanceof FormData?l=o:o instanceof HTMLFormElement&&(u=o,l=new FormData(u))),"string"==typeof o&&(h=o),e.fetchOptions={cache:r.cacheBust&&!f._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:s},(l||h)&&(e.fetchOptions.body=l||h),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||l&&l.get&&l.get("token")||u&&u.elements.token),!e.hasToken&&n.Z.apiKey&&c(t)&&(r.query||(r.query={}),r.query.token=n.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!v(t)&&!(0,i.Hc)(s)){let n;"immediate"===r.authMode?(await q(),n=await a.id.getCredential(t,{signal:s}),e.credential=n):"no-prompt"===r.authMode?(await q(),n=await a.id.getCredential(t,{prompt:!1,signal:s}).catch((()=>{})),e.credential=n):a.id&&(n=a.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[s,o]=await T(e)}while(!await L(e,s,o))}catch(t){const r=k("request:server",t,e.params,s);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const u=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(u)&&!e.hasToken&&!e.credentialToken&&null!=(t=o)&&null!=(r=t.user)&&r.username&&!(0,l.kl)(u)){const e=(0,l.P$)(u,!0);e&&p.trustedServers.push(e)}const h=e.credential;if(h&&a.id){const e=a.id.findServerInfo(h.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=a.id.findCredential(t,h.userId);e&&-1===a.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:o,getHeader:s?e=>s.headers.get(e):M,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(x);return null==(u=w)||null==u.after||u.after(E),E}let m;const p=n.Z.request,b="FormData"in globalThis,y=[499,498,403,401],w=["COM_0056","COM_0057","SB_0008"],g=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],M=()=>null,x=Symbol();function E(e){const t=(0,l.P$)(e);return!t||t.endsWith(".arcgis.com")||f._corsServers.includes(t)||(0,l.kl)(t)}function k(e,t,r,n){let a="Error";const l={url:r.url,requestOptions:r.requestOptions,getHeader:M,ssl:!1};if(t instanceof s.Z)return t.details?(t.details=(0,o.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=l,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(a=s),e&&(l.getHeader=e),l.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,l.subCode=t.subcode,l.messageCode=t.messageCode,"string"==typeof t.details?l.messages=[t.details]:l.messages=t.details,l.raw=x in t?t[x]:t}return(0,i.D_)(t)?(0,i.zE)():new s.Z(e,a,l)}async function q(){a.id||await Promise.all([r.e(6229),r.e(1566)]).then(r.bind(r,71566))}function v(e){return g.some((t=>t.test(e)))}async function T(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions,s=(0,l.jc)(t)||(0,l.HK)(t),u=r.responseType||"json",c=s?0:null!=r.timeout?r.timeout:p.timeout;let h=!1;if(!s){e.useSSL&&(t=(0,l.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,l.ZN)(t,"request.preventCache",Date.now()));let s={...r.query};e.credentialToken&&(s.token=e.credentialToken);let i=(0,l.B7)(s);(0,o.h)("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const u=t.length+1+i.length;let c;h="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||u>p.maxUrlLength;const d=r.useProxy||!!(0,l.ed)(t);if(d){const e=(0,l.b7)(t);c=e.path,!h&&c.length+1+u>p.maxUrlLength&&(h=!0),e.query&&(s={...e.query,...s})}if("HEAD"===n.method&&(h||d)){if(h){if(u>p.maxUrlLength)throw k("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw k("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw k("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(h?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,l.fl)(t,s):(n.body=(0,l.B7)(s),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,l.fl)(t,s),d&&(e.useProxy=!0,t=`${c}?${t}`),s.token&&b&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",s.token):e.append("token",s.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,l.D6)(t,(0,l.TI)()))if((0,l.kl)(t))e.withCredentials=!0;else if(a.id){const r=a.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include")}let d,m,y=0,w=!1;c>0&&(y=setTimeout((()=>{w=!0,e.controller.abort()}),c));try{if("native-request-init"===r.responseType)m=n,m.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||h||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!s&&!e.useProxy&&p.proxyUrl&&!E(t)){if(d=await f._abortableFetch(t,n),e.useProxy||function(e){const t=(0,l.P$)(e);t&&!f._corsServers.includes(t)&&f._corsServers.push(t)}(t),"native"===r.responseType)m=d;else if("HEAD"!==n.method)if(d.ok){switch(u){case"array-buffer":m=await d.arrayBuffer();break;case"blob":case"image":m=await d.blob();break;default:m=await d.text()}if(y&&(clearTimeout(y),y=0),"json"===u||"xml"===u||"document"===u)if(m)switch(u){case"json":m=JSON.parse(m);break;case"xml":m=O(m,"application/xml");break;case"document":m=O(m,"text/html")}else m=null;if(m){if("array-buffer"===u||"blob"===u){const e=d.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&m["blob"===u?"size":"byteLength"]<=750)try{const e=await new Response(m).json();e.error&&(m=e)}catch{}}"image"===u&&m instanceof Blob&&(m=await S(URL.createObjectURL(m),e,!0))}}else m=await d.text()}else m=await S(t,e)}catch(n){if("AbortError"===n.name){if(w)throw new Error("Timeout exceeded");throw(0,i.zE)("Request canceled")}if(!(!d&&n instanceof TypeError&&p.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||E(t))throw n;e.redoRequest=!0,(0,l.tD)({proxyUrl:p.proxyUrl,urlPrefix:(0,l.P$)(t)})}finally{y&&clearTimeout(y)}return[d,m]}function O(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function L(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let s,o,i,l;if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[x]=r,s;null!=r&&r.error&&(s=r.error),s&&(o=Number(s.code),i=s.hasOwnProperty("subcode")?Number(s.subcode):null,l=s.messageCode,l=l&&l.toUpperCase());const u=n.authMode;if(403===o&&(4===i||s.message&&s.message.toLowerCase().indexOf("ssl")>-1&&-1===s.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===o)&&-1!==y.indexOf(o)&&!v(e.params.url)&&(403!==o||-1===w.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await q();try{const t=await a.id.getCredential(e.params.url,{error:k("request:server",s,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;s=t}}if(s)throw s;return!0}function S(e,t,r=!1){const n=t.controller.signal,a=new Image;return t.withCredentials?a.crossOrigin="use-credentials":a.crossOrigin="anonymous",a.alt="",a.src=e,h(a,e,r,n)}f._abortableFetch=null,f._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const C=Object.freeze({__proto__:null,default:f})}}]);