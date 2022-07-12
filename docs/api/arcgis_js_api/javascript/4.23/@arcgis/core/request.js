/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"./config.js";import{id as t}from"./kernel.js";import r from"./core/Error.js";import{i as s,h as n,u as o,clone as a}from"./core/lang.js";import{isAborted as i,onAbort as l,isAbortError as c,createAbortError as u}from"./core/promiseUtils.js";import{getOrigin as d,isDataProtocol as p,isBlobProtocol as m,normalize as h,getInterceptor as f,isTrustedServer as w,toHTTPS as y,addQueryParameter as g,objectToQuery as b,getProxyRule as q,getProxyUrl as k,addQueryParameters as T,hasSameOrigin as v,getAppUrl as O,addProxyRule as E}from"./core/urlUtils.js";import"./chunks/object.js";import"./chunks/Logger.js";import"./chunks/string.js";const x=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function S(e){const t=d(e,!0);return t&&t.endsWith(".arcgis.com")&&!x.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function L(e,t,r=!1,o){return new Promise(((a,l)=>{if(i(o))return void l(C());let c=()=>{p(),l(new Error(`Unable to load ${t}`))},u=()=>{const t=e;p(),a(t)},d=()=>{if(!e)return;const t=e;p(),t.src="",l(C())};const p=()=>{n("esri-image-decode")||(e.removeEventListener("error",c),e.removeEventListener("load",u)),c=null,u=null,e=null,s(o)&&o.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)};s(o)&&o.addEventListener("abort",d),n("esri-image-decode")?e.decode().then(u,c):(e.addEventListener("error",c),e.addEventListener("load",u))}))}function C(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function j(s,a){var c;const u=p(s),y=m(s);y||u||(s=h(s));const g={url:s,requestOptions:{...o(a)}};let b=f(s);if(b){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers});e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query});if(e.before){let s,n;try{n=await e.before(t)}catch(e){s=H("request:interceptor",e,t)}if((n instanceof Error||n instanceof r)&&(s=H("request:interceptor",n,t)),s)throw e.error&&e.error(s),s;return n}}(b,g);if(null!=e)return{data:e,getHeader:I,requestOptions:g.requestOptions,url:g.url};b.after||b.error||(b=null)}if(s=g.url,"image"===(a=g.requestOptions).responseType){if(n("host-webworker")||n("host-node"))throw H("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),g)}else if(u)throw H("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+a.responseType),g);if("head"===a.method){if(a.body)throw H("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),g);if(u||y)throw H("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),g)}if(await async function(){n("host-webworker")?U||(U=await import("./chunks/request.js")):j._abortableFetch||(j._abortableFetch=globalThis.fetch.bind(globalThis))}(),U)return U.execute(s,a);const q=new AbortController;l(a,(()=>q.abort()));const k={controller:q,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:b,params:g,redoRequest:!1,useIdentity:_.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},T=await async function(r){var s,n;let o,a;await async function(r){const s=r.params.url,n=r.params.requestOptions,o=r.controller.signal,a=n.body;let l=null,c=null,u=null;P&&"HTMLFormElement"in globalThis&&(a instanceof FormData?l=a:a instanceof HTMLFormElement&&(c=a,l=new FormData(c)));"string"==typeof a&&(u=a);r.fetchOptions={cache:n.cacheBust&&!j._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:n.headers||{},method:"head"===n.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:o},(l||u)&&(r.fetchOptions.body=l||u);"anonymous"===n.authMode&&(r.useIdentity=!1);r.hasToken=!!(/token=/i.test(s)||n.query&&n.query.token||l&&l.get&&l.get("token")||c&&c.elements.token),!r.hasToken&&e.apiKey&&S(s)&&(n.query||(n.query={}),n.query.token=e.apiKey,r.hasToken=!0);if(r.useIdentity&&!r.hasToken&&!r.credentialToken&&!N(s)&&!i(o)){let e;"immediate"===n.authMode?(await B(),e=await t.getCredential(s,{signal:o}),r.credential=e):"no-prompt"===n.authMode?(await B(),e=await t.getCredential(s,{prompt:!1,signal:o}).catch((()=>{})),r.credential=e):t&&(e=t.findCredential(s)),e&&(r.credentialToken=e.token,r.useSSL=!!e.ssl)}}(r);try{do{[o,a]=await $(r)}while(!await z(r,o,a))}catch(e){const t=H("request:server",e,r.params,o);throw t.details.ssl=r.useSSL,r.interceptor&&r.interceptor.error&&r.interceptor.error(t),t}const l=r.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(l)&&!r.hasToken&&!r.credentialToken&&null!=(s=a)&&null!=(n=s.user)&&n.username&&!w(l)){const e=d(l,!0);e&&_.trustedServers.push(e)}const c=r.credential;if(c&&t){const e=t.findServerInfo(c.server);let r=e&&e.owningSystemUrl;if(r){r=r.replace(/\/?$/,"/sharing");const e=t.findCredential(r,c.userId);e&&-1===t._getIdenticalSvcIdx(r,e)&&e.resources.unshift(r)}}return{data:a,getHeader:o?e=>o.headers.get(e):I,requestOptions:r.params.requestOptions,ssl:r.useSSL,url:r.params.url}}(k);return null==(c=b)||null==c.after||c.after(T),T}let U;const _=e.request,P="FormData"in globalThis,D=[499,498,403,401],R=["COM_0056","COM_0057","SB_0008"],F=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],I=()=>null,M=Symbol();function A(e){const t=d(e);return!t||t.endsWith(".arcgis.com")||j._corsServers.includes(t)||w(t)}function H(e,t,s,n){let o="Error";const i={url:s.url,requestOptions:s.requestOptions,getHeader:I,ssl:!1};if(t instanceof r)return t.details?(t.details=a(t.details),t.details.url=s.url,t.details.requestOptions=s.requestOptions):t.details=i,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(o=s),e&&(i.getHeader=e),i.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,i.subCode=t.subcode,i.messageCode=t.messageCode,"string"==typeof t.details?i.messages=[t.details]:i.messages=t.details,i.raw=M in t?t[M]:t}return c(t)?u():new r(e,o,i)}async function B(){t||await import("./identity/IdentityManager.js")}function N(e){return F.some((t=>t.test(e)))}async function $(e){let r=e.params.url;const s=e.params.requestOptions,o=e.fetchOptions,a=m(r)||p(r),i=s.responseType||"json",l=a?0:null!=s.timeout?s.timeout:_.timeout;let c=!1;if(!a){e.useSSL&&(r=y(r)),s.cacheBust&&"default"===o.cache&&(r=g(r,"request.preventCache",Date.now()));let a={...s.query};e.credentialToken&&(a.token=e.credentialToken);let i=b(a);n("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=r.length+1+i.length;let u;c="delete"===s.method||"post"===s.method||"put"===s.method||!!s.body||l>_.maxUrlLength;const d=s.useProxy||!!q(r);if(d){const e=k(r);u=e.path,!c&&u.length+1+l>_.maxUrlLength&&(c=!0),e.query&&(a={...e.query,...a})}if("HEAD"===o.method&&(c||d)){if(c){if(l>_.maxUrlLength)throw H("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw H("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw H("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(c?(o.method="delete"===s.method?"DELETE":"put"===s.method?"PUT":"POST",s.body?r=T(r,a):(o.body=b(a),o.headers["Content-Type"]="application/x-www-form-urlencoded")):r=T(r,a),d&&(e.useProxy=!0,r=`${u}?${r}`),a.token&&P&&o.body instanceof FormData){const e=o.body;e.set?e.set("token",a.token):e.append("token",a.token)}if(s.hasOwnProperty("withCredentials"))e.withCredentials=s.withCredentials;else if(!v(r,O()))if(w(r))e.withCredentials=!0;else if(t){const s=t.findServerInfo(r);s&&s.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(o.credentials="include")}let h,f,x=0,S=!1;l>0&&(x=setTimeout((()=>{S=!0,e.controller.abort()}),l));try{if("native-request-init"===s.responseType)f=o,f.url=r;else if("image"!==s.responseType||"default"!==o.cache||"GET"!==o.method||c||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(s.headers)||!a&&!e.useProxy&&_.proxyUrl&&!A(r)){if(h=await j._abortableFetch(r,o),e.useProxy||function(e){const t=d(e);t&&!j._corsServers.includes(t)&&j._corsServers.push(t)}(r),"native"===s.responseType)f=h;else if("HEAD"!==o.method)if(h.ok){switch(i){case"array-buffer":f=await h.arrayBuffer();break;case"blob":case"image":f=await h.blob();break;default:f=await h.text()}if(x&&(clearTimeout(x),x=0),"json"===i||"xml"===i||"document"===i)if(f)switch(i){case"json":f=JSON.parse(f);break;case"xml":f=W(f,"application/xml");break;case"document":f=W(f,"text/html")}else f=null;if(f){if("array-buffer"===i||"blob"===i){const e=h.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&f["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e)}catch{}}"image"===i&&f instanceof Blob&&(f=await G(URL.createObjectURL(f),e,!0))}}else f=await h.text()}else f=await G(r,e)}catch(t){if("AbortError"===t.name){if(S)throw new Error("Timeout exceeded");throw u("Request canceled")}if(!(!h&&t instanceof TypeError&&_.proxyUrl)||s.body||"delete"===s.method||"head"===s.method||"post"===s.method||"put"===s.method||e.useProxy||A(r))throw t;e.redoRequest=!0,E({proxyUrl:_.proxyUrl,urlPrefix:d(r)})}finally{x&&clearTimeout(x)}return[h,f]}function W(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function z(e,r,s){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!r||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let o,a,i,l;if(!r.ok)throw o=new Error(`Unable to load ${r.url} status: ${r.status}`),o[M]=s,o;null!=s&&s.error&&(o=s.error),o&&(a=Number(o.code),i=o.hasOwnProperty("subcode")?Number(o.subcode):null,l=o.messageCode,l=l&&l.toUpperCase());const c=n.authMode;if(403===a&&(4===i||o.message&&o.message.toLowerCase().indexOf("ssl")>-1&&-1===o.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&-1!==D.indexOf(a)&&!N(e.params.url)&&(403!==a||-1===R.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await B();try{const r=await t.getCredential(e.params.url,{error:H("request:server",o,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=r,e.credentialToken=r.token,e.useSSL=e.useSSL||r.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=null,e.credentialToken=null,!1;o=t}}if(o)throw o;return!0}function G(e,t,r=!1){const s=t.controller.signal,n=new Image;return t.withCredentials?n.crossOrigin="use-credentials":n.crossOrigin="anonymous",n.alt="",n.src=e,L(n,e,r,s)}j._abortableFetch=null,j._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const K=Object.freeze({__proto__:null,default:j});export{j as default,L as l,K as r,S as s};
