// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../config ../kernel ../request ../core/Error ../core/Evented ../core/events ../core/lang ../core/object ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./IdentityForm ./IdentityModal ./OAuthCredential ./OAuthInfo ./ServerInfo".split(" "),function(u,U,D,P,x,J,y,V,Q,W,K,I,t,F,R,ca,da,X,Y,Z,S){const L={},aa=E=>{const G=
(new t.Url(E.owningSystemUrl)).host;E=(new t.Url(E.server)).host;const h=/.+\.arcgis\.com$/i;return h.test(G)&&h.test(E)},T=(E,G)=>!!(aa(E)&&G&&G.some(h=>h.test(E.server)));let M=null,N=null;try{M=window.localStorage,N=window.sessionStorage}catch{}R=function(E){function G(){var a=E.call(this)||this;a._portalConfig=globalThis.esriGeowConfig;a.serverInfos=[];a.oAuthInfos=[];a.credentials=[];a._soReqs=[];a._xoReqs=[];a._portals=[];a.defaultOAuthInfo=null;a.defaultTokenValidity=60;a.dialog=null;a.formConstructor=
da;a.tokenValidity=null;a.normalizeWebTierAuth=!1;a._appOrigin="null"!==window.origin?window.origin:window.location.origin;a._appUrlObj=t.urlToObject(window.location.href);a._busy=null;a._rejectOnPersistedPageShow=!1;a._oAuthLocationParams=null;a._gwTokenUrl="/sharing/rest/generateToken";a._agsRest="/rest/services";a._agsPortal=/\/sharing(\/|$)/i;a._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i;a._adminSvcs=/\/rest\/admin\/services(\/|$)/i;a._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,
customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,
customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}];a._legacyFed=[];a._regexSDirUrl=/http.+\/rest\/services\/?/gi;a._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi;
a._gwUser=/http.+\/users\/([^\/]+)\/?.*/i;a._gwItem=/http.+\/items\/([^\/]+)\/?.*/i;a._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i;a._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i;a._createDefaultOAuthInfo=!0;a._hasTestedIfAppIsOnPortal=!1;a._getOAuthLocationParams();window.addEventListener("pageshow",b=>{a._pageShowHandler(b)});return a}U._inheritsLoose(G,E);var h=G.prototype;h.registerServers=function(a){const b=this.serverInfos;b?(a=a.filter(c=>!this.findServerInfo(c.server)),this.serverInfos=
b.concat(a)):this.serverInfos=a;a.forEach(c=>{c.owningSystemUrl&&this._portals.push(c.owningSystemUrl);c.hasPortal&&this._portals.push(c.server)})};h.registerOAuthInfos=function(a){const b=this.oAuthInfos;if(b){for(const c of a){const d=this.findOAuthInfo(c.portalUrl);d&&b.splice(b.indexOf(d),1)}this.oAuthInfos=b.concat(a)}else this.oAuthInfos=a};h.registerToken=function(a){a={...a};const b=this._sanitizeUrl(a.server),c=this._isServerRsrc(b);let d=this.findServerInfo(b),e=!0,g;d||(d=new S,d.server=
this._getServerInstanceRoot(b),c?d.hasServer=!0:(d.tokenServiceUrl=this._getTokenSvcUrl(b),d.hasPortal=!0),this.registerServers([d]));(g=this._findCredential(b))?(delete a.server,Object.assign(g,a),e=!1):(g=new u.Credential({userId:a.userId,server:d.server,token:a.token,expires:a.expires,ssl:a.ssl,scope:c?"server":"portal"}),g.resources=[b],this.credentials.push(g));g.emitTokenChange(!1);e||g.refreshServerTokens()};h.toJSON=function(){return W.fixJson({serverInfos:this.serverInfos.map(a=>a.toJSON()),
oAuthInfos:this.oAuthInfos.map(a=>a.toJSON()),credentials:this.credentials.map(a=>a.toJSON())})};h.initialize=function(a){if(a){"string"===typeof a&&(a=JSON.parse(a));var b=a.serverInfos,c=a.oAuthInfos;a=a.credentials;if(b){const d=[];b.forEach(e=>{e.server&&e.tokenServiceUrl&&d.push(e.declaredClass?e:new S(e))});d.length&&this.registerServers(d)}if(c){const d=[];c.forEach(e=>{e.appId&&d.push(e.declaredClass?e:new Z(e))});d.length&&this.registerOAuthInfos(d)}a&&a.forEach(d=>{d.server&&d.token&&d.expires&&
d.expires>Date.now()&&(d=d.declaredClass?d:new u.Credential(d),d.emitTokenChange(),this.credentials.push(d))})}};h.findServerInfo=function(a){let b;a=this._sanitizeUrl(a);for(const c of this.serverInfos)if(this._hasSameServerInstance(c.server,a)){b=c;break}return b};h.findOAuthInfo=function(a){let b;a=this._sanitizeUrl(a);for(const c of this.oAuthInfos)if(this._hasSameServerInstance(c.portalUrl,a)){b=c;break}return b};h.findCredential=function(a,b){let c;a=this._sanitizeUrl(a);const d=this._isServerRsrc(a)?
"server":"portal";if(b)for(const e of this.credentials){if(this._hasSameServerInstance(e.server,a)&&b===e.userId&&e.scope===d){c=e;break}}else for(const e of this.credentials)if(this._hasSameServerInstance(e.server,a)&&-1!==this._getIdenticalSvcIdx(a,e)&&e.scope===d){c=e;break}return c};h.getCredential=function(a,b){let c=!0;if(b){var d=!!b.token;var e=b.error;c=!1!==b.prompt}b={...b};a=this._sanitizeUrl(a);const g=new AbortController,l=I.createResolver();if(b.signal)I.onAbort(b.signal,()=>{g.abort()});
I.onAbort(g,()=>{l.reject(new y("identity-manager:user-aborted","ABORTED"))});if(I.isAborted(g))return l.promise;b.signal=g.signal;const n=this._isAdminResource(a);if((d=d?this.findCredential(a):null)&&e&&e.details&&498===e.details.httpStatus)d.destroy();else if(d)return a=new y("identity-manager:not-authorized","You are currently signed in as: '"+d.userId+"'. You do not have access to this resource: "+a,{error:e}),l.reject(a),l.promise;if(e=this._findCredential(a,b))return l.resolve(e),l.promise;
let f=this.findServerInfo(a);if(f)!f.hasServer&&this._isServerRsrc(a)&&(f._restInfoPms=this._getTokenSvcUrl(a),f.hasServer=!0);else{e=this._getTokenSvcUrl(a);if(!e)return a=new y("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),l.reject(a),l.promise;f=new S;f.server=this._getServerInstanceRoot(a);"string"===typeof e?(f.tokenServiceUrl=e,f.hasPortal=!0):(f._restInfoPms=e,f.hasServer=!0);this.registerServers([f])}f.hasPortal&&void 0===f._selfReq&&(c||
t.hasSameOrigin(f.tokenServiceUrl,this._appOrigin)||this._gwDomains.some(k=>k.tokenServiceUrl===f.tokenServiceUrl))&&(f._selfReq={owningTenant:b&&b.owningTenant,selfDfd:this._getPortalSelf(f.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),a)});return this._enqueue(a,f,b,l,n)};h.getResourceName=function(a){return this._isRESTService(a)?a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(a)&&a.replace(this._gwUser,"$1")||this._gwItem.test(a)&&
a.replace(this._gwItem,"$1")||this._gwGroup.test(a)&&a.replace(this._gwGroup,"$1")||""};h.generateToken=function(a,b,c){const d=this._rePortalTokenSvc.test(a.tokenServiceUrl),e=new t.Url(this._appOrigin);var g=a.shortLivedTokenValidity;let l,n,f,k,q,m,v;b&&(v=this.tokenValidity||g||this.defaultTokenValidity,v>g&&0<g&&(v=g));c&&(l=c.isAdmin,n=c.serverUrl,f=c.token,q=c.signal,m=c.ssl,a.customParameters=c.customParameters);l?g=a.adminTokenServiceUrl:(g=a.tokenServiceUrl,k=new t.Url(g.toLowerCase()),
a.webTierAuth&&null!=c&&c.serverUrl&&!m&&"http"===e.scheme&&(t.hasSameOrigin(e.uri,g,!0)||"https"===k.scheme&&e.host===k.host&&"7080"===e.port&&"7443"===k.port)&&(g=g.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));c={query:{request:"getToken",username:null==b?void 0:b.username,password:null==b?void 0:b.password,serverUrl:n,token:f,expiration:v,referer:l||d?this._appOrigin:null,client:l?"referer":null,f:"json",...a.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(a,
c),signal:q,...null==c?void 0:c.ioArgs};d||(c.withCredentials=!1);return J(g,c).then(r=>{r=r.data;if(!r||!r.token)return new y("identity-manager:authentication-failed","Unable to generate token");const p=a.server;L[p]||(L[p]={});b&&(L[p][b.username]=b.password);r.validity=v;return r})};h.isBusy=function(){return!!this._busy};h.checkSignInStatus=function(a){return this.checkAppAccess(a,"").then(b=>b.credential)};h.checkAppAccess=function(a,b,c){let d=!1;return this.getCredential(a,{prompt:!1}).then(e=>
{let g;const l={f:"json"};if("portal"===e.scope)if(b&&(this._doPortalSignIn(a)||c&&c.force))g=e.server+"/sharing/rest/oauth2/validateAppAccess",l.client_id=b;else if(e.token)g=e.server+"/sharing/rest";else return{credential:e};else if(e.token)g=e.server+"/rest/services";else return{credential:e};e.token&&(l.token=e.token);return J(g,{query:l,authMode:"anonymous"}).then(n=>{if(!1===n.data.valid)throw new y("identity-manager:not-authorized",`You are currently signed in as: '${e.userId}'.`,n.data);d=
!!n.data.viewOnlyUserTypeApp;return{credential:e}}).catch(n=>{if("identity-manager:not-authorized"===n.name)throw n;n=n.details&&n.details.httpStatus;if(498===n)throw e.destroy(),new y("identity-manager:not-authenticated","User is not signed in.");if(400===n)throw new y("identity-manager:invalid-request");return{credential:e}})}).then(e=>({credential:e.credential,viewOnly:d}))};h.setOAuthResponseHash=function(a){a&&("#"===a.charAt(0)&&(a=a.substring(1)),this._processOAuthPopupParams(t.queryToObject(a)))};
h.setOAuthRedirectionHandler=function(a){this._oAuthRedirectFunc=a};h.setProtocolErrorHandler=function(a){this._protocolFunc=a};h.signIn=function(a,b,c={}){const d=I.createResolver(),e=()=>{var q,m,v,r,p;null==(q=n)?void 0:q.remove();null==(m=f)?void 0:m.remove();null==(v=k)?void 0:v.remove();null==(r=l)?void 0:r.destroy();null==(p=this.dialog)?void 0:p.destroy();this.dialog=l=n=f=k=null},g=()=>{e();this._oAuthDfd=null;d.reject(new y("identity-manager:user-aborted","ABORTED"))};if(c.signal)I.onAbort(c.signal,
()=>{g()});let l=new this.formConstructor;l.resource=this.getResourceName(a);l.server=b.server;this.dialog=new X;this.dialog.content=l;this.dialog.open=!0;this.emit("dialog-create");let n=l.on("cancel",g),f=this.dialog.watch("open",g),k=l.on("submit",q=>{this.generateToken(b,q,{isAdmin:c.isAdmin,signal:c.signal}).then(m=>{e();m=new u.Credential({userId:q.username,server:b.server,token:m.token,expires:null!=m.expires?Number(m.expires):null,ssl:!!m.ssl,isAdmin:c.isAdmin,validity:m.validity});d.resolve(m)}).catch(m=>
{l.error=m;l.signingIn=!1})});return d.promise};h.oAuthSignIn=function(a,b,c,d){const e=this._oAuthDfd=I.createResolver();if(null!=d&&d.signal)I.onAbort(d.signal,()=>{const r=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;r&&!r.closed?r.close():this.dialog&&m()});e.resUrl_=a;e.sinfo_=b;e.oinfo_=c;let g;const l=c._oAuthCred;if(l.storage&&("authorization-code"===c.flowType||"auto"===c.flowType&&!c.popup&&8.4<=b.currentVersion)){let r=crypto.getRandomValues(new Uint8Array(32));g=t.base64UrlEncode(r);l.codeVerifier=
g;r=crypto.getRandomValues(new Uint8Array(32));l.stateUID=t.base64UrlEncode(r);l.save()||(l.codeVerifier=g=null)}else l.codeVerifier=null;this._getCodeChallenge(g).then(r=>{const p=!d||!1!==d.oAuthPopupConfirmation;c.popup&&p?(n=new this.formConstructor,n.oAuthPrompt=!0,n.server=b.server,this.dialog=new X,this.dialog.content=n,this.dialog.open=!0,this.emit("dialog-create"),f=n.on("cancel",m),k=this.dialog.watch("open",m),q=n.on("submit",()=>{v();this._doOAuthSignIn(a,b,c,r)})):this._doOAuthSignIn(a,
b,c,r)});let n,f,k,q;const m=()=>{v();this._oAuthDfd=null;e.reject(new y("identity-manager:user-aborted","ABORTED"))},v=()=>{var r,p,z,C,H;null==(r=f)?void 0:r.remove();null==(p=k)?void 0:p.remove();null==(z=q)?void 0:z.remove();null==(C=n)?void 0:C.destroy();null==(H=this.dialog)?void 0:H.destroy();this.dialog=null};return e.promise};h.destroyCredentials=function(){this.credentials&&this.credentials.slice().forEach(a=>{a.destroy()});this.emit("credentials-destroy")};h.enablePostMessageAuth=function(a=
"https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove();this._postMessageAuthHandle=Q.on(window,"message",b=>{var c;if((b.origin===this._appOrigin||b.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(c=b.data)?void 0:c.type)){const d=b.source;this.getCredential(a).then(e=>{d.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},b.origin)}).catch(e=>
{d.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},b.origin)})}})};h.disablePostMessageAuth=function(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)};h._getOAuthLocationParams=function(){var a=window.location.hash;if(a){"#"===a.charAt(0)&&(a=a.substring(1));a=t.queryToObject(a);let d=!1;if(a.access_token&&a.expires_in&&a.state&&a.hasOwnProperty("username"))try{a.state=JSON.parse(a.state),a.state.portalUrl&&(this._oAuthLocationParams=
a,d=!0)}catch{}else if(a.error&&a.error_description&&(console.log("IdentityManager OAuth Error: ",a.error," - ",a.error_description),"access_denied"===a.error&&(d=!0,a.state)))try{a.state=JSON.parse(a.state)}catch{}if(d){var b;window.location.hash=(null==(b=a.state)?void 0:b.hash)||""}}if(b=window.location.search){"?"===b.charAt(0)&&(b=b.substring(1));b=t.queryToObject(b);a=!1;if(b.code&&b.state)try{b.state=JSON.parse(b.state),b.state.portalUrl&&b.state.uid&&(this._oAuthLocationParams=b,a=!0)}catch{}else if(b.error&&
b.error_description&&(console.log("IdentityManager OAuth Error: ",b.error," - ",b.error_description),"access_denied"===b.error&&(a=!0,b.state)))try{b.state=JSON.parse(b.state)}catch{}if(a){var c;const d={...b};"code error error_description message_code persist state".split(" ").forEach(e=>{delete d[e]});a=t.objectToQuery(d);b=window.location.pathname+(a?`?${a}`:"")+((null==(c=b.state)?void 0:c.hash)||"");window.history.replaceState(window.history.state,"",b)}}};h._getOAuthToken=function(a,b,c,d,e){a=
a.replace(/^http:/i,"https:");return J(`${a}/sharing/rest/oauth2/token`,{authMode:"anonymous",method:"post",query:d&&e?{grant_type:"authorization_code",code:b,redirect_uri:d,client_id:c,code_verifier:e}:{grant_type:"refresh_token",refresh_token:b,client_id:c}}).then(g=>g.data)};h._getCodeChallenge=function(a){return a&&globalThis.isSecureContext?(a=(new TextEncoder).encode(a),crypto.subtle.digest("SHA-256",a).then(b=>t.base64UrlEncode(new Uint8Array(b)))):Promise.resolve(null)};h._pageShowHandler=
function(a){a.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow&&(a=new y("identity-manager:user-aborted","ABORTED"),this._errbackFunc(a))};h._findCredential=function(a,b){let c=-1,d,e,g;const l=b&&b.token;b=b&&b.resource;const n=this._isServerRsrc(a)?"server":"portal",f=this.credentials.filter(k=>this._hasSameServerInstance(k.server,a)&&k.scope===n);a=b||a;if(f.length)if(1===f.length)if(b=f[0],e=(d=(g=this.findServerInfo(b.server))&&g.owningSystemUrl)&&this.findCredential(d,b.userId),c=this._getIdenticalSvcIdx(a,
b),l)-1!==c&&(b.resources.splice(c,1),this._removeResource(a,e));else return-1===c&&b.resources.push(a),this._addResource(a,e),b;else{let k,q;f.some(m=>{q=this._getIdenticalSvcIdx(a,m);return-1!==q?(k=m,e=(d=(g=this.findServerInfo(k.server))&&g.owningSystemUrl)&&this.findCredential(d,k.userId),c=q,!0):!1});if(l)k&&(k.resources.splice(c,1),this._removeResource(a,e));else if(k)return this._addResource(a,e),k}};h._findOAuthInfo=function(a){let b=this.findOAuthInfo(a);if(!b)for(const c of this.oAuthInfos)if(this._isIdProvider(c.portalUrl,
a)){b=c;break}return b};h._addResource=function(a,b){b&&-1===this._getIdenticalSvcIdx(a,b)&&b.resources.push(a)};h._removeResource=function(a,b){let c=-1;b&&(c=this._getIdenticalSvcIdx(a,b),-1<c&&b.resources.splice(c,1))};h._useProxy=function(a,b){return b&&b.isAdmin&&!t.hasSameOrigin(a.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(a.tokenServiceUrl)&&"10.1"===String(a.currentVersion)&&!t.hasSameOrigin(a.tokenServiceUrl,this._appOrigin)};h._getOrigin=function(a){a=new t.Url(a);return a.scheme+
"://"+a.host+(null!=a.port?":"+a.port:"")};h._getServerInstanceRoot=function(a){const b=a.toLowerCase();let c=b.indexOf(this._agsRest);-1===c&&this._isAdminResource(a)&&(c=this._agsAdmin.test(a)?a.replace(this._agsAdmin,"$1").length:a.search(this._adminSvcs));-1===c&&(c=b.indexOf("/sharing"));-1===c&&"/"===b.substr(-1)&&(c=b.length-1);return-1<c?a.substring(0,c):a};h._hasSameServerInstance=function(a,b){"/"===a.substr(-1)&&(a=a.slice(0,-1));a=a.toLowerCase();b=this._getServerInstanceRoot(b).toLowerCase();
a=this._normalizeAGOLorgDomain(a);b=this._normalizeAGOLorgDomain(b);a=a.substr(a.indexOf(":"));b=b.substr(b.indexOf(":"));return a===b};h._normalizeAGOLorgDomain=function(a){const b=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,c=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,d=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;b.test(a)?a=a.replace(b,"https://www.arcgis.com"):c.test(a)?a=a.replace(c,"https://devext.arcgis.com"):d.test(a)&&(a=a.replace(d,"https://qaext.arcgis.com"));
return a};h._sanitizeUrl=function(a){const b=(P.request.proxyUrl||"").toLowerCase(),c=b?a.toLowerCase().indexOf(b+"?"):-1;-1!==c&&(a=a.substring(c+b.length+1));a=t.normalize(a);return t.urlToObject(a).path};h._isRESTService=function(a){return-1<a.indexOf(this._agsRest)};h._isAdminResource=function(a){return this._agsAdmin.test(a)||this._adminSvcs.test(a)};h._isServerRsrc=function(a){return this._isRESTService(a)||this._isAdminResource(a)};h._isIdenticalService=function(a,b){if(this._isRESTService(a)&&
this._isRESTService(b)){a=this._getSuffix(a).toLowerCase();b=this._getSuffix(b).toLowerCase();var c=a===b;c||(c=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi,c=a.replace(c,"$1")===b.replace(c,"$1"))}else this._isAdminResource(a)&&this._isAdminResource(b)?c=!0:this._isServerRsrc(a)||this._isServerRsrc(b)||!this._isPortalDomain(a)||(c=!0);return c};h._isPortalDomain=function(a){const b=new t.Url(a.toLowerCase());a=this._portalConfig;let c=this._gwDomains.some(d=>d.regex.test(b.uri));!c&&
a&&(c=this._hasSameServerInstance(this._getServerInstanceRoot(a.restBaseUrl),b.uri));c||P.portalUrl&&(c=t.hasSameOrigin(b,P.portalUrl,!0));c||(c=this._portals.some(d=>this._hasSameServerInstance(d,b.uri)));return c=c||this._agsPortal.test(b.path)};h._isIdProvider=function(a,b){let c=-1,d=-1;this._gwDomains.forEach((g,l)=>{-1===c&&g.regex.test(a)&&(c=l);-1===d&&g.regex.test(b)&&(d=l)});let e=!1;if(-1<c&&-1<d)if(0===c||4===c){if(0===d||4===d)e=!0}else if(1===c){if(1===d||2===d)e=!0}else 2===c?2===d&&
(e=!0):3===c&&3===d&&(e=!0);if(!e){const g=this.findServerInfo(b),l=g&&g.owningSystemUrl;l&&aa(g)&&this._isPortalDomain(l)&&this._isIdProvider(a,l)&&(e=!0)}return e};h._getIdenticalSvcIdx=function(a,b){let c=-1;for(let d=0;d<b.resources.length;d++)if(this._isIdenticalService(a,b.resources[d])){c=d;break}return c};h._getSuffix=function(a){return a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")};h._getTokenSvcUrl=function(a){if(this._isRESTService(a)||this._isAdminResource(a)){var b=
this._getServerInstanceRoot(a);var c=b+"/admin/generateToken";a=b+"/rest/info";b=J(a,{query:{f:"json"}}).then(d=>d.data);return{adminUrl:c,promise:b}}if(this._isPortalDomain(a)){let d="";this._gwDomains.some(e=>{e.regex.test(a)&&(d=e.tokenServiceUrl);return!!d});d||this._portals.some(e=>{this._hasSameServerInstance(e,a)&&(d=e+this._gwTokenUrl);return!!d});d||(c=a.toLowerCase().indexOf("/sharing"),-1!==c&&(d=a.substring(0,c)+this._gwTokenUrl));d||(d=this._getOrigin(a)+this._gwTokenUrl);d&&(c=(new t.Url(a)).port,
/^http:\/\//i.test(a)&&"7080"===c&&(d=d.replace(/:7080/i,":7443")),d=d.replace(/http:/i,"https:"));return d}if(-1!==a.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"};h._processOAuthResponseParams=function(a,b,c){const d=b._oAuthCred;if(a.code){var e=d.codeVerifier;d.codeVerifier=null;d.stateUID=null;d.save();return this._getOAuthToken(c.server,a.code,b.appId,this._getRedirectURI(b,!0),e).then(g=>{const l=new u.Credential({userId:g.username,
server:c.server,token:g.access_token,expires:Date.now()+1E3*g.expires_in,ssl:g.ssl,oAuthState:a.state,_oAuthCred:d});b.userId=l.userId;d.storage=g.persist?M:N;d.refreshToken=g.refresh_token;d.token=null;d.expires=g.refresh_token_expires_in?Date.now()+1E3*g.refresh_token_expires_in:null;d.userId=l.userId;d.ssl=l.ssl;d.save();return l})}e=new u.Credential({userId:a.username,server:c.server,token:a.access_token,expires:Date.now()+1E3*Number(a.expires_in),ssl:"true"===a.ssl,oAuthState:a.state,_oAuthCred:d});
b.userId=e.userId;d.storage=a.persist?M:N;d.refreshToken=null;d.token=e.token;d.expires=e.expires;d.userId=e.userId;d.ssl=e.ssl;d.save();return Promise.resolve(e)};h._processOAuthPopupParams=function(a){var b;const c=this._oAuthDfd;this._oAuthDfd=null;c&&(clearInterval(this._oAuthIntervalId),null==(b=this._oAuthOnPopupHandle)?void 0:b.remove(),a.error?(b="access_denied"===a.error,a=new y(b?"identity-manager:user-aborted":"identity-manager:authentication-failed",b?"ABORTED":"OAuth: "+a.error+" - "+
a.error_description),c.reject(a)):this._processOAuthResponseParams(a,c.oinfo_,c.sinfo_).then(d=>{c.resolve(d)}).catch(d=>{c.reject(d)}))};h._setOAuthResponseQueryString=function(a){a&&("?"===a.charAt(0)&&(a=a.substring(1)),this._processOAuthPopupParams(t.queryToObject(a)))};h._exchangeToken=function(a,b,c){return J(`${a}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:b,token:c}}).then(d=>d.data.token)};h._getPlatformSelf=function(a,b){a=a.replace(/^http:/i,
"https:");return J(`${a}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":b,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0}).then(c=>c.data)};h._getPortalSelf=function(a,b){let c;this._gwDomains.some(d=>{d.regex.test(a)&&(c=d.customBaseUrl);return!!c});if(c)return Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:c,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?
a=a.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(b)&&(a=a.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return J(a,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then(d=>d.data)};h._doPortalSignIn=function(a){const b=this._portalConfig,c=window.location.href,d=this.findServerInfo(a);return(b||this._isPortalDomain(c))&&(d?d.hasPortal||d.owningSystemUrl&&this._isPortalDomain(d.owningSystemUrl):this._isPortalDomain(a))&&(this._isIdProvider(c,a)||b&&(this._hasSameServerInstance(this._getServerInstanceRoot(b.restBaseUrl),
a)||this._isIdProvider(b.restBaseUrl,a))||t.hasSameOrigin(c,a,!0))?!0:!1};h._checkProtocol=function(a,b,c,d){let e=!0;d=d?b.adminTokenServiceUrl:b.tokenServiceUrl;d.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&t.getProxyRule(d)&&(e=this._protocolFunc?!!this._protocolFunc({resourceUrl:a,serverInfo:b}):!1,e||(a=new y("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."),c(a)));return e};h._enqueue=function(a,
b,c,d,e,g){d||(d=I.createResolver());d.resUrl_=a;d.sinfo_=b;d.options_=c;d.admin_=e;d.refresh_=g;this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(a),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(d)):this._xoReqs.push(d):this._doSignIn(d);return d.promise};h._doSignIn=function(a){this._busy=a;this._rejectOnPersistedPageShow=!1;const b=f=>{var k=a.options_&&a.options_.resource;const q=a.resUrl_,m=a.refresh_;let v=
!1;-1===this.credentials.indexOf(f)&&(m&&-1!==this.credentials.indexOf(m)?(m.userId=f.userId,m.token=f.token,m.expires=f.expires,m.validity=f.validity,m.ssl=f.ssl,m.creationTime=f.creationTime,v=!0,f=m):this.credentials.push(f));f.resources||(f.resources=[]);f.resources.includes(k||q)||f.resources.push(k||q);f.scope=this._isServerRsrc(q)?"server":"portal";f.emitTokenChange();k=this._soReqs;const r={};this._soReqs=[];k.forEach(p=>{if(!this._isIdenticalService(q,p.resUrl_)){const z=this._getSuffix(p.resUrl_);
r[z]||(r[z]=!0,f.resources.push(p.resUrl_))}});a.resolve(f);k.forEach(p=>{this._hasSameServerInstance(this._getServerInstanceRoot(q),p.resUrl_)?p.resolve(f):this._soReqs.push(p)});this._busy=a.resUrl_=a.sinfo_=a.refresh_=null;v||this.emit("credential-create",{credential:f});this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},c=f=>{a.reject(f);this._busy=a.resUrl_=a.sinfo_=a.refresh_=null;this._soReqs.length?this._doSignIn(this._soReqs.shift()):
this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},d=(f,k,q,m)=>{var v,r;const p=a.sinfo_,z=!a.options_||!1!==a.options_.prompt,C=p.hasPortal&&this._findOAuthInfo(a.resUrl_);let H,O;if(f)b(new u.Credential({userId:f,server:p.server,token:q||null,expires:null!=m?Number(m):null,ssl:!!k}));else if(window!==window.parent&&null!=(v=this._appUrlObj.query)&&v["arcgis-auth-origin"]&&null!=(r=this._appUrlObj.query)&&r["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),
a.resUrl_)){var ba;window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const w=Q.on(window,"message",A=>{A.source===window.parent&&A.data&&("arcgis:auth:credential"===A.data.type?(w.remove(),A.data.credential.expires<Date.now()?c(new y("identity-manager:credential-request-failed","Parent application's token has expired.")):b(new u.Credential(A.data.credential))):"arcgis:auth:error"===A.data.type&&(w.remove(),"tokenExpiredError"===A.data.error.name?
c(new y("identity-manager:credential-request-failed","Parent application's token has expired.")):c(y.fromJSON(A.data.error))))});I.onAbort(null==(ba=a.options_)?void 0:ba.signal,()=>{w.remove()})}else if(C){let w=C._oAuthCred;w||(f=new Y(C,M),k=new Y(C,N),f.isValid()&&k.isValid()?f.expires>k.expires?(w=f,k.destroy()):(w=k,f.destroy()):w=f.isValid()?f:k,C._oAuthCred=w);if(w.isValid()){H=new u.Credential({userId:w.userId,server:p.server,token:w.token,expires:w.expires,ssl:w.ssl,_oAuthCred:w});const A=
C.appId!==w.appId&&this._doPortalSignIn(a.resUrl_);A||w.refreshToken?(a._pendingDfd=w.refreshToken?this._getOAuthToken(p.server,w.refreshToken,w.appId).then(B=>{H.expires=Date.now()+1E3*B.expires_in;H.token=B.access_token;return H}):Promise.resolve(H),a._pendingDfd.then(B=>A?this._exchangeToken(B.server,C.appId,B.token).then(ea=>{B.token=ea;return B}).catch(()=>B):B).then(B=>{b(B)}).catch(()=>{w.destroy();d()})):b(H)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(C.portalUrl,this._oAuthLocationParams.state.portalUrl)&&
(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===w.stateUID&&w.codeVerifier))f=this._oAuthLocationParams,this._oAuthLocationParams=null,a._pendingDfd=this._processOAuthResponseParams(f,C,p).then(A=>{b(A)}).catch(c);else{const A=()=>{z?a._pendingDfd=this.oAuthSignIn(a.resUrl_,p,C,a.options_).then(b,c):(O=new y("identity-manager:not-authenticated","User is not signed in."),c(O))};this._doPortalSignIn(a.resUrl_)?a._pendingDfd=this._getPlatformSelf(p.server,
C.appId).then(B=>{t.hasSameOrigin(B.portalUrl,this._appOrigin,!0)?(H=new u.Credential({userId:B.username,server:p.server,expires:Date.now()+1E3*B.expires_in,token:B.token}),b(H)):A()}).catch(A):A()}}else z?this._checkProtocol(a.resUrl_,p,c,a.admin_)&&(f=a.options_,a.admin_&&(f=f||{},f.isAdmin=!0),a._pendingDfd=this.signIn(a.resUrl_,p,f).then(b,c)):(O=new y("identity-manager:not-authenticated","User is not signed in."),c(O))},e=()=>{const f=a.sinfo_;var k=f.owningSystemUrl;const q=a.options_;let m,
v,r,p;q&&(m=q.token,v=q.error,r=q.prompt);p=this._findCredential(k,{token:m,resource:a.resUrl_});if(!p)for(const z of this.credentials)if(this._isIdProvider(k,z.server)){p=z;break}p?(k=this.findCredential(a.resUrl_,p.userId))?b(k):T(f,this._legacyFed)?(k=p.toJSON(),k.server=f.server,k.resources=null,b(new u.Credential(k))):(a._pendingDfd=this.generateToken(this.findServerInfo(p.server),null,{serverUrl:a.resUrl_,token:p.token,signal:a.options_.signal,ssl:p.ssl})).then(z=>{b(new u.Credential({userId:p.userId,
server:f.server,token:z.token,expires:null!=z.expires?Number(z.expires):null,ssl:!!z.ssl,isAdmin:a.admin_,validity:z.validity}))},c):(this._busy=null,m&&(a.options_.token=null),(a._pendingDfd=this.getCredential(k.replace(/\/?$/,"/sharing"),{resource:a.resUrl_,owningTenant:f.owningTenant,signal:a.options_.signal,token:m,error:v,prompt:r})).then(()=>{this._enqueue(a.resUrl_,a.sinfo_,a.options_,a,a.admin_)},z=>{a.resUrl_=a.sinfo_=a.refresh_=null;a.reject(z)}))};this._errbackFunc=c;const g=a.sinfo_.owningSystemUrl,
l=this._isServerRsrc(a.resUrl_),n=a.sinfo_._restInfoPms;n?n.promise.then(f=>{const k=a.sinfo_;k._restInfoPms&&(k.adminTokenServiceUrl=k._restInfoPms.adminUrl,k._restInfoPms=null,k.tokenServiceUrl=K.getDeepValue("authInfo.tokenServicesUrl",f)||K.getDeepValue("authInfo.tokenServiceUrl",f)||K.getDeepValue("tokenServiceUrl",f),k.shortLivedTokenValidity=K.getDeepValue("authInfo.shortLivedTokenValidity",f),k.currentVersion=f.currentVersion,k.owningTenant=f.owningTenant,(f=k.owningSystemUrl=f.owningSystemUrl)&&
this._portals.push(f));l&&k.owningSystemUrl?e():d()},()=>{a.sinfo_._restInfoPms=null;const f=new y("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");c(f)}):l&&g?e():a.sinfo_._selfReq?a.sinfo_._selfReq.selfDfd.then(f=>{const k={};let q,m,v,r;f&&(q=f.user&&f.user.username,k.username=q,k.allSSL=f.allSSL,m=f.supportsOAuth,v=parseFloat(f.currentVersion),"multitenant"===f.portalMode&&(r=f.customBaseUrl),a.sinfo_.currentVersion=v);a.sinfo_.webTierAuth=
!!q;return q&&this.normalizeWebTierAuth?this.generateToken(a.sinfo_,null,{ssl:k.allSSL}).catch(()=>null).then(p=>{k.portalToken=p&&p.token;k.tokenExpiration=p&&p.expires;return k}):!q&&m&&4.4<=v&&!this._findOAuthInfo(a.resUrl_)?this._generateOAuthInfo({portalUrl:a.sinfo_.server,customBaseUrl:r,owningTenant:a.sinfo_._selfReq.owningTenant}).catch(()=>null).then(()=>k):k}).catch(()=>null).then(f=>{a.sinfo_._selfReq=null;f?d(f.username,f.allSSL,f.portalToken,f.tokenExpiration):d()}):d()};h._generateOAuthInfo=
function(a){let b,c=a.portalUrl;const d=a.customBaseUrl,e=a.owningTenant;if(a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal){b=window.location.href;let g=b.indexOf("?");-1<g&&(b=b.slice(0,g));g=b.search(/\/(apps|home)\//);b=-1<g?b.slice(0,g):null}a&&b?(this._hasTestedIfAppIsOnPortal=!0,a=J(b+"/sharing/rest",{query:{f:"json"}}).then(()=>{this.defaultOAuthInfo=new Z({appId:"arcgisonline",popupCallbackUrl:b+"/home/oauth-callback.html"})})):a=Promise.resolve();
return a.then(()=>{if(this.defaultOAuthInfo)return c=c.replace(/^http:/i,"https:"),J(c+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:e,client_id:this.defaultOAuthInfo.appId,redirect_uri:t.makeAbsolute(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then(g=>{if(g.data.valid){const l=this.defaultOAuthInfo.clone();l.portalUrl=g.data.urlKey&&d?"https://"+g.data.urlKey.toLowerCase()+"."+d:c;l.popup=window!==window.top||!(t.hasSameOrigin(c,this._appOrigin)||this._gwDomains.some(n=>n.regex.test(c)&&
n.regex.test(this._appOrigin)));this.oAuthInfos.push(l)}})})};h._doOAuthSignIn=function(a,b,c,d){var e=c._oAuthCred,g={portalUrl:c.portalUrl};!c.popup&&c.preserveUrlHash&&window.location.hash&&(g.hash=window.location.hash);e.stateUID&&(g.uid=e.stateUID);g={client_id:c.appId,response_type:e.codeVerifier?"code":"token",state:JSON.stringify(g),expiration:c.expiration,locale:c.locale,redirect_uri:this._getRedirectURI(c,!!e.codeVerifier)};c.forceLogin&&(g.force_login=!0);c.forceUserId&&c.userId&&(g.prepopulatedusername=
c.userId);!c.popup&&this._doPortalSignIn(a)&&(g.redirectToUserOrgUrl=!0);e.codeVerifier&&(g.code_challenge=d||e.codeVerifier,g.code_challenge_method=d?"S256":"plain");d=c.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize";e=d+"?"+t.objectToQuery(g);if(c.popup){const l=window.open(e,"esriJSAPIOAuth",c.popupWindowFeatures);l?(l.focus(),this._oAuthDfd.oAuthWin_=l,this._oAuthIntervalId=setInterval(()=>{if(l.closed){clearInterval(this._oAuthIntervalId);this._oAuthOnPopupHandle.remove();
const n=this._oAuthDfd;if(n){const f=new y("identity-manager:user-aborted","ABORTED");n.reject(f)}}},500),this._oAuthOnPopupHandle=Q.on(window,["arcgis:auth:hash","arcgis:auth:location:search"],n=>{"arcgis:auth:hash"===n.type?this.setOAuthResponseHash(n.detail):this._setOAuthResponseQueryString(n.detail)})):(a=new y("identity-manager:popup-blocked","ABORTED"),this._oAuthDfd.reject(a))}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:g,authorizeUrl:d,
resourceUrl:a,serverInfo:b,oAuthInfo:c}):window.location.href=e};h._getRedirectURI=function(a,b){const c=window.location.href.replace(/#.*$/,"");if(a.popup)return t.makeAbsolute(a.popupCallbackUrl);if(b){const d=t.urlToObject(c);d.query&&"code error error_description message_code persist state".split(" ").forEach(e=>{delete d.query[e]});return t.addQueryParameters(d.path,d.query)}return c};return G}(V);R.prototype.declaredClass="esri.identity.IdentityManagerBase";u.Credential=function(E){function G(a){var b=
E.call(this,a)||this;b._oAuthCred=null;b.tokenRefreshBuffer=2;a&&a._oAuthCred&&(b._oAuthCred=a._oAuthCred);return b}U._inheritsLoose(G,E);var h=G.prototype;h.initialize=function(){this.resources=this.resources||[];null==this.creationTime&&(this.creationTime=Date.now())};h.refreshToken=function(){const a=x.id.findServerInfo(this.server),b=a&&a.owningSystemUrl,c=!!b&&"server"===this.scope,d=c&&T(a,x.id._legacyFed);var e=a.webTierAuth;const g=e&&x.id.normalizeWebTierAuth;var l=L[this.server];l=l&&l[this.userId];
let n=this.resources&&this.resources[0],f=c&&x.id.findServerInfo(b),k={username:this.userId,password:l},q;if(!e||g)if(c&&!f&&x.id.serverInfos.some(m=>{x.id._isIdProvider(b,m.server)&&(f=m);return!!f}),e=f&&x.id.findCredential(f.server,this.userId),!c||e)if(d)e.refreshToken();else{if(c)q={serverUrl:n,token:e&&e.token,ssl:e&&e.ssl};else if(g)k=null,q={ssl:this.ssl};else if(l)this.isAdmin&&(q={isAdmin:!0});else{let m;n&&(n=x.id._sanitizeUrl(n),this._enqueued=1,m=x.id._enqueue(n,a,null,null,this.isAdmin,
this),m.then(()=>{this._enqueued=0;this.refreshServerTokens()}).catch(()=>{this._enqueued=0}));return m}return x.id.generateToken(c?f:a,c?null:k,q).then(m=>{this.token=m.token;this.expires=null!=m.expires?Number(m.expires):null;this.creationTime=Date.now();this.validity=m.validity;this.emitTokenChange();this.refreshServerTokens()}).catch(()=>{})}};h.refreshServerTokens=function(){"portal"===this.scope&&x.id.credentials.forEach(a=>{const b=x.id.findServerInfo(a.server),c=b&&b.owningSystemUrl;a!==this&&
a.userId===this.userId&&c&&"server"===a.scope&&(x.id._hasSameServerInstance(this.server,c)||x.id._isIdProvider(c,this.server))&&(T(b,x.id._legacyFed)?(a.token=this.token,a.expires=this.expires,a.creationTime=this.creationTime,a.validity=this.validity,a.emitTokenChange()):a.refreshToken())})};h.emitTokenChange=function(a){clearTimeout(this._refreshTimer);var b=this.server&&x.id.findServerInfo(this.server);const c=(b=b&&b.owningSystemUrl)&&x.id.findServerInfo(b);!1===a||b&&"portal"!==this.scope&&(!c||
!c.webTierAuth||x.id.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer();this.emit("token-change")};h.destroy=function(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null;this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const a=x.id.credentials.indexOf(this);-1<a&&x.id.credentials.splice(a,1);this.emitTokenChange();this.emit("destroy")};h.toJSON=function(){const a=W.fixJson({userId:this.userId,
server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),b=this.resources;b&&0<b.length&&(a.resources=b.slice());return a};h._startRefreshTimer=function(){clearTimeout(this._refreshTimer);const a=6E4*this.tokenRefreshBuffer,b=2**31-1;let c=(this.validity?this.creationTime+6E4*this.validity:this.expires)-Date.now();0>c?c=0:c>b&&(c=b);this._refreshTimer=setTimeout(this.refreshToken.bind(this),
c>a?c-a:c)};return G}(V.EventedAccessor);D.__decorate([F.property()],u.Credential.prototype,"creationTime",void 0);D.__decorate([F.property()],u.Credential.prototype,"expires",void 0);D.__decorate([F.property()],u.Credential.prototype,"isAdmin",void 0);D.__decorate([F.property()],u.Credential.prototype,"oAuthState",void 0);D.__decorate([F.property()],u.Credential.prototype,"resources",void 0);D.__decorate([F.property()],u.Credential.prototype,"scope",void 0);D.__decorate([F.property()],u.Credential.prototype,
"server",void 0);D.__decorate([F.property()],u.Credential.prototype,"ssl",void 0);D.__decorate([F.property()],u.Credential.prototype,"token",void 0);D.__decorate([F.property()],u.Credential.prototype,"tokenRefreshBuffer",void 0);D.__decorate([F.property()],u.Credential.prototype,"userId",void 0);D.__decorate([F.property()],u.Credential.prototype,"validity",void 0);u.Credential=D.__decorate([ca.subclass("esri.identity.Credential")],u.Credential);u.IdentityManagerBase=R;Object.defineProperty(u,"__esModule",
{value:!0})});