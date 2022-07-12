// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
require({cache:{"esri/core/workers":function(){define(["require","exports","./workers/workers"],function(x,a,u){Object.defineProperty(a,"__esModule",{value:!0});for(var t in u)a.hasOwnProperty(t)||(a[t]=u[t])})},"esri/core/workers/workers":function(){define("require exports ../tsSupport/generatorHelper ../tsSupport/awaiterHelper ../Error ../has ../promiseUtils ./Connection ./RemoteClient ./WorkerOwner".split(" "),function(x,a,u,t,q,p,n,k,m,r){function y(){return t(this,void 0,void 0,function(){var a,
h,c;return u(this,function(A){if(e)return[2,e];v=n.createAbortController();a=[];h=function(h){var c=r.create(h).then(function(a){return l[h]=a});a.push(c)};for(c=0;c<d;c++)h(c);e=n.all(a);return[2,e]})})}Object.defineProperty(a,"__esModule",{value:!0});a.Connection=k;a.RemoteClient=m;var d=p("esri-workers-debug")?1:p("host-browser")?navigator.hardwareConcurrency-1:0;d||(d=p("safari")&&p("mac")||p("trident")?7:2);var c=0,l=[];a.initialize=function(){y()};a.openWithPorts=function(a,h){return new k(a.map(function(a){return new m(a,
h,{})}))};a.open=function(a,h){void 0===h&&(h={});return t(this,void 0,void 0,function(){var e,A,B,r,v,E,t;return u(this,function(w){switch(w.label){case 0:if("string"!==typeof a)throw new q("workers:undefined-module","modulePath is missing");e=h.signal;A=h.strategy||"distributed";p("host-webworker")&&!p("esri-workers")&&(A="local");return"local"!==A?[3,4]:[4,m.loadWorker(a)];case 1:return(B=w.sent())?[3,3]:[4,n.create(function(h){return x([a],h)})];case 2:B=w.sent(),w.label=3;case 3:return n.throwIfAborted(e),
r=h.client||B,v=m.connect(B),[2,new k([new m(v,r,h)])];case 4:return[4,y()];case 5:w.sent();n.throwIfAborted(e);if("dedicated"!==A)return[3,7];E=c++;c%=d;return[4,l[E].open(a,h)];case 6:return v=w.sent(),[2,new k([new m(v,h.client,h)])];case 7:return[4,n.all(l.map(function(c){return c.open(a,h)}))];case 8:return t=w.sent(),[2,new k(t.map(function(a){return new m(a,h.client,h)}))]}})})};a.terminate=function(){e&&(v.abort(),e=null);for(var a=0;a<l.length;a++)l[a]&&l[a].terminate();l.length=0};var e=
null,v})},"esri/core/workers/Connection":function(){define(["require","exports","../handleUtils","../Logger","../promiseUtils"],function(x,a,u,t,q){var p=t.getLogger("esri.core.workers.Connection");return function(){function a(a){this._clientIdx=0;this._clients=a}Object.defineProperty(a.prototype,"closed",{get:function(){return!this._clients||!this._clients.length},enumerable:!0,configurable:!0});a.prototype.broadcast=function(a,m,p){for(var k=[],d=0,c=this._clients;d<c.length;d++)k.push(c[d].invoke(a,
m,p));return k};a.prototype.close=function(){for(var a=0,m=this._clients;a<m.length;a++)m[a].close();this._clients=[]};a.prototype.getAvailableClient=function(){var a;this._clients.some(function(k){return k.isBusy()?!1:(a=k,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,a=this._clients[this._clientIdx]);return a};a.prototype.invoke=function(a,m,n){var k=null;Array.isArray(n)?(p.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),k={transferList:n}):
k=n;return this.closed?q.reject(Error("Connection closed")):this.getAvailableClient().invoke(a,m,k)};a.prototype.on=function(a,m){var k=this._clients.map(function(k){return k.on(a,m)});return u.handlesGroup(k)};a.prototype.openPorts=function(){return this._clients.map(function(a){return a.openPort()})};return a}()})},"esri/core/workers/WorkerOwner":function(){define("require exports ../tsSupport/generatorHelper ../tsSupport/awaiterHelper ../../kernel ../Error ../Logger ../promiseUtils ./utils ./workerFactory".split(" "),
function(x,a,u,t,q,p,n,k,m,r){var y=n.getLogger("esri.core.workers"),d=m.MessageType.ABORT,c=m.MessageType.INVOKE,l=m.MessageType.OPEN,e=m.MessageType.OPENED,v=m.MessageType.RESPONSE;return function(){function a(a,c){this._outJobs=new Map;this._inJobs=new Map;this.worker=a;this.id=c;a.addEventListener("message",this._onMessage.bind(this));a.addEventListener("error",function(a){a.preventDefault();y.error(a)})}a.create=function(c){return t(this,void 0,void 0,function(){var h;return u(this,function(d){switch(d.label){case 0:return[4,
r.createWorker()];case 1:return h=d.sent(),[2,new a(h,c)]}})})};a.prototype.terminate=function(){this.worker.terminate()};a.prototype.open=function(a,c){void 0===c&&(c={});return t(this,void 0,void 0,function(){var h,e,p=this;return u(this,function(A){h=c.signal;e=m.newJobId();return[2,k.create(function(c,A){c={resolve:c,reject:A};k.onAbortOrThrow(h,function(){p._outJobs.delete(e);p._post({type:d,jobId:e})});p._outJobs.set(e,c);p._post({type:l,jobId:e,modulePath:a})})]})})};a.prototype._onMessage=
function(a){if(a=m.receiveMessage(a))switch(a.type){case e:this._onOpenedMessage(a);break;case v:this._onResponseMessage(a);break;case d:this._onAbortMessage(a);break;case c:this._onInvokeMessage(a)}};a.prototype._onAbortMessage=function(a){var c=this._inJobs;a=a.jobId;var h=c.get(a);h&&(h.controller&&h.controller.abort(),c.delete(a))};a.prototype._onInvokeMessage=function(a){var c=this,d=a.methodName,h=a.jobId,e=a.data;a=a.abortable?k.createAbortController():null;var l=this._inJobs,p=q.workerMessages[d],
n;try{if("function"!==typeof p)throw new TypeError(d+" is not a function");n=p.call(null,e,{signal:a?a.signal:null})}catch(I){this._post({type:v,jobId:h,error:m.toInvokeError(I)});return}if(k.isPromiseLike(n)){l.set(h,{controller:a,promise:n});if(a&&"cancel"in n)k.onAbort(a.signal,function(){return n.cancel()});n.then(function(a){l.has(h)&&(l.delete(h),c._post({type:v,jobId:h},a))},function(a){l.has(h)&&(l.delete(h),a||(a={message:"Error encountered at method"+d}),k.isAbortError(a)||c._post({type:v,
jobId:h,error:m.toInvokeError(a||{message:"Error encountered at method "+d})}))})}else this._post({type:v,jobId:h},n)};a.prototype._onOpenedMessage=function(a){var c=a.jobId;a=a.data;var d=this._outJobs.get(c);d&&(this._outJobs.delete(c),d.resolve(a))};a.prototype._onResponseMessage=function(a){var c=a.jobId,d=a.error;a=a.data;var e=this._outJobs.get(c);e&&(this._outJobs.delete(c),d?e.reject(p.fromJSON(JSON.parse(d))):e.resolve(a))};a.prototype._post=function(a,c,d){return m.postMessage(this.worker,
a,c,d)};return a}()})},"esri/core/workers/workerFactory":function(){define("require exports ../tsSupport/assignHelper ../tsSupport/generatorHelper ../tsSupport/awaiterHelper dojo/_base/kernel ../../config ../has ../Logger ../promiseUtils ./loaderConfig ./utils ./WorkerFallback".split(" "),function(x,a,u,t,q,p,n,k,m,r,y,d,c){function l(a){return q(this,void 0,void 0,function(){return t(this,function(l){return[2,r.create(function(l){function m(c){if(c=d.receiveMessage(c))switch(c.type){case h:c=a;var e=
n.workers.loaderUrl||y.DEFAULT_LOADER_URL,t;null!=n["default"]?(t=u({},n),delete t["default"],t=JSON.parse(JSON.stringify(t))):t=JSON.parse(JSON.stringify(n));var r=n.workers.loaderConfig,r=y.default({baseUrl:r.baseUrl,locale:p.locale,has:u({"config-deferredInstrumentation":0,"csp-restrictions":k("csp-restrictions"),"dojo-test-sniff":0,"esri-native-promise":k("esri-native-promise"),"esri-secure-context":k("esri-secure-context"),"esri-workers-arraybuffer-transfer":k("esri-workers-arraybuffer-transfer"),
"events-keypress-typed":0,"host-webworker":1,"esri-webgl-texture-float":k("esri-webgl-texture-float"),"esri-shared-array-buffer":k("esri-shared-array-buffer"),"esri-atomics":k("esri-atomics"),"esri-2d-debug":0,"esri-webgl-max-texture-size":k("esri-webgl-max-texture-size")},r.has),map:u({},r.map),paths:u({},r.paths),packages:r.packages||[]});c.postMessage({type:E,configure:{esriConfig:t,loaderUrl:e,loaderConfig:r}});break;case v:a.removeEventListener("message",m),a.removeEventListener("error",q),l(a)}}
function q(d){d.preventDefault();a.removeEventListener("message",m);a.removeEventListener("error",q);e.warn("Failed to create Worker. Fallback to execute module in main thread",d);a=new c;a.addEventListener("message",m);a.addEventListener("error",q)}a.addEventListener("message",m);a.addEventListener("error",q)})]})})}Object.defineProperty(a,"__esModule",{value:!0});var e=m.getLogger("esri.core.workers");k.add("esri-workers-arraybuffer-transfer",!k("safari")||12<=k("safari"));var v=d.MessageType.CONFIGURED,
E=d.MessageType.CONFIGURE,h=d.MessageType.HANDSHAKE,w;try{w=URL.createObjectURL(new Blob(['var globalId\x3d0,outgoing\x3dnew Map,configured\x3d!1,HANDSHAKE\x3d0,CONFIGURE\x3d1,CONFIGURED\x3d2,OPEN\x3d3,OPENED\x3d4,RESPONSE\x3d5,INVOKE\x3d6,ABORT\x3d7;function createAbortError(){var error\x3dnew Error("AbortError");return error.dojoType\x3d"cancel",error}function receiveMessage(event){return event\x26\x26event.data?"string"\x3d\x3dtypeof event.data?JSON.parse(event.data):event.data:null}function invokeStaticMessage(methodName,data,options){var signal\x3doptions\x26\x26options.signal,Deferred\x3drequire("dojo/Deferred"),jobId\x3dglobalId++,abort\x3dfunction(){var outJob\x3doutgoing.get(jobId);outJob\x26\x26(outgoing.delete(jobId),self.postMessage({type:ABORT,jobId:jobId}),outJob.reject(createAbortError()))},deferred\x3dnew Deferred(abort);if(signal){if(signal.aborted)return deferred.reject(createAbortError());signal.addEventListener("abort",(function(){abort(),deferred.reject(createAbortError())}))}return outgoing.set(jobId,deferred),self.postMessage({type:INVOKE,jobId:jobId,methodName:methodName,abortable:!0,data:data}),deferred.promise}function messageHandler(event){var message\x3dreceiveMessage(event);if(message){var jobId\x3dmessage.jobId;switch(message.type){case CONFIGURE:var configuration\x3dmessage.configure;if(configured)return;self.dojoConfig\x3dconfiguration.loaderConfig,self.importScripts(configuration.loaderUrl),"function"\x3d\x3dtypeof require.config\x26\x26require.config(configuration.loaderConfig),require(["esri/config"],(function(esriConfig){for(var name in configuration.esriConfig)Object.prototype.hasOwnProperty.call(configuration.esriConfig,name)\x26\x26(esriConfig[name]\x3dconfiguration.esriConfig[name]);self.postMessage({type:CONFIGURED})})),configured\x3d!0;break;case OPEN:var modulePath\x3dmessage.modulePath;require(["esri/core/workers/RemoteClient"],(function(RemoteClient){RemoteClient.loadWorker(modulePath).then((function(Module){return Module||new Promise((function(resolve){require([modulePath],resolve)}))})).then((function(Module){var port\x3dRemoteClient.connect(Module);self.postMessage({type:OPENED,jobId:jobId,data:port},[port])}))}));break;case RESPONSE:if(outgoing.has(jobId)){var deferred\x3doutgoing.get(jobId);outgoing.delete(jobId),message.error?deferred.reject(JSON.parse(message.error)):deferred.resolve(message.data)}}}}self.addEventListener("message",messageHandler),self.postMessage({type:HANDSHAKE});'],
{type:"text/javascript"}))}catch(A){}a.createWorker=function(){return q(this,void 0,void 0,function(){var a;return t(this,function(d){if(!k("esri-workers"))return[2,l(new c)];if(w)try{a=new Worker(w)}catch(N){e.warn("Failed to create Worker. Fallback to execute module in main thread",event),a=new c}else e.warn("Failed to create Worker. Fallback to execute module in main thread",event),a=new c;return[2,l(a)]})})}})},"esri/core/workers/loaderConfig":function(){define(["require","exports","../tsSupport/assignHelper",
"../has","../urlUtils"],function(x,a,u,t,q){Object.defineProperty(a,"__esModule",{value:!0});t=t("esri-built")?"dojo/dojo-lite.js":"dojo/dojo.js";a.DEFAULT_LOADER_URL=q.makeAbsolute(q.removeQueryParameters(x.toUrl(t)));a.DEFAULT_CONFIG={baseUrl:function(){var a=q.removeQueryParameters(x.toUrl("dojo/x.js"));return q.makeAbsolute(a.slice(0,a.length-5))}(),packages:[{name:"esri"},{name:"dojo"},{name:"dojox"},{name:"dstore"},{name:"moment",main:"moment"},{name:"@dojo"},{name:"cldrjs",main:"dist/cldr"},
{name:"globalize",main:"dist/globalize"},{name:"maquette-css-transitions",main:"dist/maquette-css-transitions.umd"},{name:"maquette-jsx",main:"dist/maquette-jsx.umd"},{name:"tslib",main:"tslib"}],map:{globalize:{cldr:"cldrjs/dist/cldr","cldr/event":"cldrjs/dist/cldr/event","cldr/supplemental":"cldrjs/dist/cldr/supplemental","cldr/unresolved":"cldrjs/dist/cldr/unresolved"}}};a.default=function(p){var n={async:p.async,isDebug:p.isDebug,locale:p.locale,baseUrl:p.baseUrl,has:u({},p.has),map:u({},p.map),
packages:p.packages&&p.packages.concat()||[],paths:u({},p.paths)};p.hasOwnProperty("async")||(n.async=!0);p.hasOwnProperty("isDebug")||(n.isDebug=!1);p.baseUrl||(n.baseUrl=a.DEFAULT_CONFIG.baseUrl);a.DEFAULT_CONFIG.packages.forEach(function(a){a:{for(var d=n.packages,c=0;c<d.length;c++)if(d[c].name===a.name)break a;a=u({},a);c=q.removeQueryParameters(x.toUrl(a.name+"/x.js"));c=c.slice(0,c.length-5);a.location=q.makeAbsolute(c);d.push(a)}});p=n.map=n.map||{};for(var k=0,m=Object.keys(a.DEFAULT_CONFIG.map);k<
m.length;k++){var r=m[k];p[r]||(p[r]=a.DEFAULT_CONFIG.map[r])}return n}})},"esri/core/urlUtils":function(){define("require exports ./tsSupport/assignHelper ../config ../kernel ./Error ./global ./Logger ./string".split(" "),function(x,a,u,t,q,p,n,k,m){function r(b){var a={path:null,query:null},f=new F(b),z=b.indexOf("?");null===f.query?a.path=b:(a.path=b.substring(0,z),a.query=y(f.query));f.fragment&&(a.hash=f.fragment,null===f.query&&(a.path=a.path.substring(0,a.path.length-(f.fragment.length+1))));
return a}function y(b){var a={},f=0;for(b=b.split("\x26");f<b.length;f++){var z=b[f];if(z){var c=z.indexOf("\x3d"),d=void 0,e=void 0;0>c?(d=decodeURIComponent(z),e=""):(d=decodeURIComponent(z.slice(0,c)),e=decodeURIComponent(z.slice(c+1)));z=a[d];"string"===typeof z&&(z=a[d]=[z]);Array.isArray(z)?z.push(e):a[d]=e}}return a}function d(b){return b&&"object"===typeof b&&"toJSON"in b&&"function"===typeof b.toJSON}function c(b,a){return b?a&&"function"===typeof a?Object.keys(b).map(function(g){return encodeURIComponent(g)+
"\x3d"+encodeURIComponent(a(g,b[g]))}).join("\x26"):Object.keys(b).map(function(g){var f=b[g];if(null==f)return"";var c=encodeURIComponent(g)+"\x3d";return(g=a&&a[g])?c+encodeURIComponent(g(f)):Array.isArray(f)?f.map(function(b){return d(b)?c+encodeURIComponent(JSON.stringify(b)):c+encodeURIComponent(b)}).join("\x26"):d(f)?c+encodeURIComponent(JSON.stringify(f)):c+encodeURIComponent(f)}).filter(function(b){return b}).join("\x26"):""}function l(b){var a=b.indexOf("?");-1!==a?(H.path=b.slice(0,a),H.query=
b.slice(a+1)):(H.path=b,H.query=null);return H}function e(b){b=l(b).path;b&&"/"===b[b.length-1]||(b+="/");b=J(b,!0);return b=b.toLowerCase()}function v(b){var a=G.proxyRules;b=e(b);for(var f=0;f<a.length;f++)if(0===b.indexOf(a[f].urlPrefix))return a[f]}function E(b){b=B(b);var a=b.indexOf("/sharing");return 0<a?b.substring(0,a):b.replace(/\/+$/,"")}function h(b,a,f){void 0===f&&(f=!1);b=P(b);a=P(a);return f||b.scheme===a.scheme?b.host.toLowerCase()===a.host.toLowerCase()&&b.port===a.port:!1}function w(b,
g,f){void 0===g&&(g=a.appBaseUrl);if(C(b))return f&&f.preserveProtocolRelative?b:"http"===a.appUrl.scheme&&a.appUrl.authority===T(b).slice(2)?"http:"+b:"https:"+b;if(!K(b)){f=N;if("/"===b[0]){var c=g.indexOf("//"),c=g.indexOf("/",c+2);g=-1===c?g:g.slice(0,c)}return f(g,b)}return b}function A(b,g,f){void 0===g&&(g=a.appBaseUrl);if(!D(b))return b;var c=B(b),d=c.toLowerCase();g=B(g).toLowerCase().replace(/\/+$/,"");if((f=f?B(f).toLowerCase().replace(/\/+$/,""):null)&&0!==g.indexOf(f))return b;for(var e=
function(b,a,g){g=b.indexOf(a,g);return-1===g?b.length:g},l=e(d,"/",d.indexOf("//")+2),h=-1;d.slice(0,l+1)===g.slice(0,l)+"/";){h=l+1;if(l===d.length)break;l=e(d,"/",l+1)}if(-1===h||f&&h<f.length)return b;b=c.slice(h);c=g.slice(h-1).replace(/[^/]+/g,"").length;if(0<c)for(d=0;d<c;d++)b="../"+b;else b="./"+b;return b}function B(b){b=b.trim();b=w(b);if(/^https?:\/\//i.test(b)){var a=l(b);b=a.path.replace(/\/{2,}/g,"/");b=b.replace("/","//");a.query&&(b+="?"+a.query)}b=b.replace(/^(https?:\/\/)(arcgis\.com)/i,
"$1www.$2");return b=ca(b)}function N(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];if(b&&b.length){a=[];if(D(b[0])){var f=b[0],c=f.indexOf("//");-1!==c&&(a.push(f.slice(0,c+1)),da.test(b[0])&&(a[0]+="/"),b[0]=f.slice(c+2))}else"/"===b[0][0]&&a.push("");b=b.reduce(function(b,a){return a?b.concat(a.split("/")):b},[]);for(f=0;f<b.length;f++)c=b[f],".."===c&&0<a.length&&".."!==a[a.length-1]?a.pop():(!c&&f===b.length-1||c&&("."!==c||0===a.length))&&a.push(c);return a.join("/")}}function T(b,
a){void 0===a&&(a=!1);if(U(b)||I(b))return null;var g=b.indexOf("://");if(-1===g&&C(b))g=2;else if(-1!==g)g+=3;else return null;g=b.indexOf("/",g);-1!==g&&(b=b.slice(0,g));a&&(b=J(b,!0));return b}function D(b){return C(b)||K(b)}function U(b){return"blob:"===b.slice(0,5)}function I(b){return"data:"===b.slice(0,5)}function V(b){b=O(b);if(!b||!b.isBase64)return null;b=atob(b.data);for(var a=new Uint8Array(b.length),c=0;c<b.length;c++)a[c]=b.charCodeAt(c);return a.buffer}function O(b){return(b=b.match(ea))?
{mediaType:b[1],isBase64:!!b[2],data:b[3]}:null}function Q(b){var a=V(b);if(!a)return null;b=O(b);return new Blob([a],{type:b.mediaType})}function C(b){return b&&"/"===b[0]&&"/"===b[1]}function K(b){return W.test(b)}function fa(b){return X.test(b)||"http"===a.appUrl.scheme&&C(b)}function R(b){return C(b)?"https:"+b:b.replace(X,"https:")}function L(){return"https"===a.appUrl.scheme}function J(b,a){void 0===a&&(a=!1);if(C(b))return b.slice(2);b=b.replace(W,"");a&&1<b.length&&"/"===b[0]&&"/"===b[1]&&
(b=b.slice(2));return b}function ca(b){var g=G.httpsDomains;if(!fa(b))return b;var c=b.indexOf("/",7),d;d=-1===c?b:b.slice(0,c);d=d.toLowerCase().slice(7);if(ga.test(d))if(m.endsWith(d,":80"))d=d.slice(0,-3),b=b.replace(":80","");else return b;if("http"===a.appUrl.scheme&&d===a.appUrl.authority&&!ha.test(b))return b;if(L()&&d===a.appUrl.authority||g&&g.some(function(b){return d===b||m.endsWith(d,"."+b)})||L()&&!v(b))b=R(b);return b}function M(b,a,c){if(!(a&&c&&b&&D(b)))return b;var g=b.indexOf("//"),
f=b.indexOf("/",g+2),d=b.indexOf(":",g+2),f=Math.min(0>f?b.length:f,0>d?b.length:d);if(b.slice(g+2,f).toLowerCase()!==a.toLowerCase())return b;a=b.slice(0,g+2);b=b.slice(f);return""+a+c+b}function P(b){if("string"===typeof b)return new F(w(b));b.scheme||(b.scheme=a.appUrl.scheme);return b}function S(b,g){if(!g||g.isPortal||!g.urlKey||!g.customBaseUrl)return b;var c=g.urlKey+"."+g.customBaseUrl;return h(a.appUrl,a.appUrl.scheme+"://"+c)?M(b,g.portalHostname,c):M(b,c,g.portalHostname)}function Y(b,
a){var c=a&&a.url&&a.url.path;b&&c&&(b=w(b,c,{preserveProtocolRelative:!0}));return S(b,a&&a.portal)}function Z(b,a){if(!b)return b;!D(b)&&a&&a.blockedRelativeUrls&&a.blockedRelativeUrls.push(b);var c=w(b);if(a){var g=a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.rootPath||a.url&&a.url.path;g&&(g=S(g,a.portal),c=A(S(c,a.portal),g,g),c!==b&&a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.writtenUrls.push(c))}b=c;c=(a=a&&a.portal)&&!a.isPortal&&a.urlKey&&a.customBaseUrl?M(b,a.urlKey+"."+a.customBaseUrl,
a.portalHostname):b;D(c)&&(c=B(c));return c}function aa(a,g,f){a=r(a);var b=a.query||{};b[g]=String(f);return a.path+"?"+c(b)}Object.defineProperty(a,"__esModule",{value:!0});var ia=k.getLogger("esri.core.urlUtils"),G=t.request,W=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,X=/^\s*http:/i,ba=/^\s*https:/i,da=/^\s*file:/i,ga=/:\d+$/,ha=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,ja=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,ka=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,
F=function(){function a(a){void 0===a&&(a="");this.uri=a;this.port=this.host=this.password=this.user=this.fragment=this.query=this.path=this.authority=this.scheme=null;a=this.uri.match(ja);this.scheme=a[2]||(a[1]?"":null);this.authority=a[4]||(a[3]?"":null);this.path=a[5];this.query=a[7]||(a[6]?"":null);this.fragment=a[9]||(a[8]?"":null);null!=this.authority&&(a=this.authority.match(ka),this.user=a[3]||null,this.password=a[4]||null,this.host=a[6]||a[7],this.port=a[9]||null)}a.prototype.toString=function(){return this.uri};
return a}();a.Url=F;a.appUrl=new F(t.applicationUrl);a.trustedServersUrlCache={};a.appBaseUrl=function(){var b=a.appUrl.path,b=b.substring(0,b.lastIndexOf(b.split("/")[b.split("/").length-1]));return""+(a.appUrl.scheme+"://"+a.appUrl.host+(null!=a.appUrl.port?":"+a.appUrl.port:""))+b}();a.urlToObject=r;a.queryToObject=y;a.objectToQuery=c;a.getProxyUrl=function(b){void 0===b&&(b=!1);var c,f=G.proxyUrl;if("string"===typeof b){if(c=b,c=ba.test(c)||"https"===a.appUrl.scheme&&C(c),b=v(b))f=b.proxyUrl}else c=
!!b;if(!f)throw ia.warn("esri/config: esriConfig.request.proxyUrl is not set."),new p("urlutils:proxy-not-set","esri/config: esriConfig.request.proxyUrl is not set.");c&&L()&&(f=R(f));return r(f)};a.addProxy=function(a){var b=v(a),f,d;b&&(d=l(b.proxyUrl),f=d.path,d=d.query?y(d.query):null);f&&(b=r(a),a=f+"?"+b.path,(f=c(u({},d,b.query)))&&(a=a+"?"+f));return a};var H={path:"",query:""};a.addProxyRule=function(a){a={proxyUrl:a.proxyUrl,urlPrefix:e(a.urlPrefix)};for(var b=G.proxyRules,c=a.urlPrefix,
d=b.length,l=0;l<b.length;l++){var h=b[l].urlPrefix;if(0===c.indexOf(h)){if(c.length===h.length)return-1;d=l;break}0===h.indexOf(c)&&(d=l+1)}b.splice(d,0,a);return d};a.getProxyRule=v;a.hasSamePortal=function(a,c){a=E(a);c=E(c);return J(a)===J(c)};a.getInterceptor=function(a){var b=function(b){return null==b||b instanceof RegExp&&b.test(a)||"string"===typeof b&&m.startsWith(a,b)},c=G.interceptors;if(c)for(var d=0;d<c.length;d++){var e=c[d];if(Array.isArray(e.urls)){if(e.urls.some(b))return e}else if(b(e.urls))return e}return null};
a.hasSameOrigin=h;a.isTrustedServer=function(b){if("string"===typeof b)if(D(b))b=P(b);else return!0;if(h(b,a.appUrl))return!0;for(var c=G.trustedServers||[],d=0;d<c.length;d++){var e;e=c[d];a.trustedServersUrlCache[e]||(K(e)||C(e)?a.trustedServersUrlCache[e]=[new F(w(e))]:a.trustedServersUrlCache[e]=[new F("http://"+e),new F("https://"+e)]);e=a.trustedServersUrlCache[e];for(var l=0;l<e.length;l++)if(h(b,e[l]))return!0}return!1};a.makeAbsolute=w;a.makeRelative=A;a.normalize=B;a.join=N;a.getOrigin=
T;a.isAbsolute=D;a.isBlobProtocol=U;a.isDataProtocol=I;a.dataToArrayBuffer=V;var ea=/^data:(.*?)(;base64)?,(.*)$/;a.dataComponents=O;a.makeData=function(a){return a.isBase64?"data:"+a.mediaType+";base64,"+a.data:"data:"+a.mediaType+","+a.data};a.dataToBlob=Q;a.downloadDataAsFile=function(a,c){var b;a:if(b=document.createElement("a"),"download"in b){var d=null;if(n.URL&&n.URL.createObjectURL){d=Q(a);if(!d){b=!1;break a}d=n.URL.createObjectURL(d)}b.download=c;b.href=d||a;b.style.display="none";document.body.appendChild(b);
b.click();document.body.removeChild(b);d&&n.URL.revokeObjectURL(d);b=void 0}else b=!1;b||window.navigator.msSaveOrOpenBlob&&window.navigator.msSaveOrOpenBlob(Q(a),c)};a.isProtocolRelative=C;a.hasProtocol=K;a.toHTTP=function(a){return C(a)?"http:"+a:a.replace(ba,"http:")};a.toHTTPS=R;a.isAppHTTPS=L;a.removeFile=function(a){var b=0;if(D(a)){var c=a.indexOf("//");-1!==c&&(b=c+2)}c=a.lastIndexOf("/");return c<b?a:a.slice(0,c+1)};a.removeTrailingSlash=function(a){return a.replace(/\/+$/,"")};a.changeDomain=
M;a.fromJSON=Y;a.read=function(a,c,d){return Y(a,d)};a.toJSON=Z;a.write=function(a,c,d,e){(a=Z(a,e))&&(c[d]=a)};a.isSVG=function(a){return la.test(a)};a.removeQueryParameters=function(a,c){a=r(a);var b=Object.keys(a.query||{});0<b.length&&c&&c.warn("removeQueryParameters()","Url query parameters are not supported, the following parameters have been removed: "+b.join(", ")+".");return a.path};a.addQueryParameter=aa;a.addQueryParameters=function(a,d){a=r(a);var b=a.query||{},e;for(e in d)b[e]=d[e];
return(d=c(b))?a.path+"?"+d:a.path};a.removeQueryParameter=function(a,d){var b=r(a),e=b.path,b=b.query;if(!b)return a;delete b[d];return(a=c(b))?e+"?"+a:e};a.addTokenParameter=function(a){var b=q.id&&q.id.findCredential(a);return b&&b.token?aa(a,"token",b.token):a};var la=/(^data:image\/svg|\.svg$)/i})},"esri/core/workers/WorkerFallback":function(){define("require exports ../tsSupport/generatorHelper ../tsSupport/awaiterHelper ../global ./RemoteClient ./utils @dojo/framework/shim/Promise".split(" "),
function(x,a,u,t,q,p,n){var k=function(){return function(){var a=this,c=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(d){a[d]=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return c[d].apply(c,a)}})}}(),m=q.MutationObserver||q.WebKitMutationObserver,r=function(){var a;if(q.process&&q.process.nextTick)a=function(a){q.process.nextTick(a)};else if(q.Promise)a=function(a){q.Promise.resolve().then(a)};else if(m){var c=
[],l=document.createElement("div");(new m(function(){for(;0<c.length;)c.shift()()})).observe(l,{attributes:!0});a=function(a){c.push(a);l.setAttribute("queueStatus","1")}}return a}(),y=function(){var a=q.MessageEvent;try{new a("message",{data:null})}catch(c){return function(a,c){void 0===c&&(c={});var d=c.data,e=c.bubbles,e=void 0===e?!1:e;c=c.cancelable;c=void 0===c?!1:c;var l=document.createEvent("Event");l.initEvent(a,e,c);l.data=d;return l}}return function(c,d){return new a(c,d)}}();return function(){function a(){this._dispatcher=
new k;this._isInitialized=!1;this._workerPostMessage({type:n.MessageType.HANDSHAKE})}a.prototype.terminate=function(){};Object.defineProperty(a.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(a){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler);(this._onmessageHandler=a)&&this.addEventListener("message",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(a){this._onerrorHandler&&
this.removeEventListener("error",this._onerrorHandler);(this._onerrorHandler=a)&&this.addEventListener("error",a)},enumerable:!0,configurable:!0});a.prototype.postMessage=function(a){var c=this;r(function(){c._workerMessageHandler(y("message",{data:a}))})};a.prototype.dispatchEvent=function(a){return this._dispatcher.dispatchEvent(a)};a.prototype.addEventListener=function(a,d,e){this._dispatcher.addEventListener(a,d,e)};a.prototype.removeEventListener=function(a,d,e){this._dispatcher.removeEventListener(a,
d,e)};a.prototype._workerPostMessage=function(a){var c=this;r(function(){c.dispatchEvent(y("message",{data:a}))})};a.prototype._workerMessageHandler=function(a){return t(this,void 0,void 0,function(){var c,d,k,m,h,q;return u(this,function(e){switch(e.label){case 0:c=n.receiveMessage(a);if(!c)return[2];d=c.type;switch(d){case n.MessageType.CONFIGURE:return[3,1];case n.MessageType.OPEN:return[3,2]}return[3,6];case 1:return this._isInitialized||this._workerPostMessage({type:n.MessageType.CONFIGURED}),
[3,6];case 2:return k=c.modulePath,m=c.jobId,[4,p.loadWorker(k)];case 3:return(h=e.sent())?[3,5]:[4,new Promise(function(a,c){x([k],a,c)})];case 4:h=e.sent(),e.label=5;case 5:return q=p.connect(h),this._workerPostMessage({type:n.MessageType.OPENED,jobId:m,data:q}),[3,6];case 6:return[2]}})})};return a}()})},"*noref":1}});
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/extendsHelper ../../core/promiseUtils ../../core/workers".split(" "),function(x,a,u,t,q,p){function n(){return q.create(function(a){return x(["./rasterFormats/LercCodec"],a)})}Object.defineProperty(a,"__esModule",{value:!0});var k=function(){function a(){}a.prototype._decode=function(a){return n().then(function(c){c=c.decode;c=c(a.buffer,a.options);return{result:c,transferList:[c.pixelData.buffer]}})};return a}(),m=function(a){function d(c){var d=
a.call(this)||this;d.scheduler=c;d._threadInitialized=q.create(function(a){p.open("LercWorker",{strategy:"dedicated",scheduler:c}).then(function(c){void 0===d._thread?d._thread=c:c.close();a()},function(){return a()})});return d}t(d,a);d.prototype.destroy=function(){this._thread&&this._thread.close();this._thread=null};Object.defineProperty(d.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0});d.prototype.decode=function(a,d,e){return a&&
0!==a.byteLength?this._thread?this._thread.invoke("_decode",{buffer:a,options:d},{transferList:[a],signal:e}):n().then(function(c){c=c.decode;q.throwIfAborted(e);return c(a,d)}):q.resolve(null)};return d}(k);a.LercWorkerMaster=m;var r=new Map;a.acquireInstance=function(a){var d=r.get(a);d||(d={instance:new m(a),ref:0},r.set(a,d));++d.ref;return d.instance};a.releaseInstance=function(a){if(null!=a){a=a.scheduler;var d=r.get(a);d&&0>=--d.ref&&(d.instance.destroy(),r.delete(a))}};a.default=function(){return new k}});