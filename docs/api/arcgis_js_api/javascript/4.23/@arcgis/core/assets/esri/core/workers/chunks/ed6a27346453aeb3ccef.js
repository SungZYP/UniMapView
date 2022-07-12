"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6491],{21781:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(29768),i=r(34250),l=(r(76506),r(91306),r(17533));const o=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,l.j)("esri.layers.mixins.APIKeyMixin")],t),t}},66655:(e,t,r)=>{r.d(t,{A:()=>u});var s=r(29768),i=(r(74569),r(34250)),l=(r(76506),r(91306),r(97714)),o=r(17533),n=r(9411),a=r(60947);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new n.T({layer:this}):null}};return(0,s._)([(0,i.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,s._)([(0,i.Cb)()],t.prototype,"minScale",void 0),(0,s._)([(0,l.r)("service","minScale")],t.prototype,"readMinScale",null),(0,s._)([(0,i.Cb)()],t.prototype,"maxScale",void 0),(0,s._)([(0,l.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,s._)([(0,i.Cb)({type:a.Z})],t.prototype,"spatialReference",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,s._)([(0,i.Cb)(n.s)],t.prototype,"tileInfo",void 0),(0,s._)([(0,i.Cb)()],t.prototype,"tilemapCache",void 0),(0,s._)([(0,l.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,s._)([(0,i.Cb)()],t.prototype,"version",void 0),t=(0,s._)([(0,o.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},75025:(e,t,r)=>{r.d(t,{A:()=>u});var s=r(29768),i=r(92143),l=r(76506),o=r(34250),n=(r(91306),r(17533)),a=r(21132);const u=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.p)(this.url);if((0,l.i)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.s)(e,i.L.getLogger(this.declaredClass)))}};return(0,s._)([(0,o.Cb)()],t.prototype,"title",null),(0,s._)([(0,o.Cb)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},8547:(e,t,r)=>{r.d(t,{C:()=>o});var s=r(29768),i=r(34250),l=(r(76506),r(91306),r(17533));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,s._)([(0,i.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},82673:(e,t,r)=>{r.d(t,{I:()=>o});var s=r(29768),i=r(17533);let l=0;const o=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+l++})}};return t=(0,s._)([(0,i.j)("esri.core.Identifiable")],t),t};let n=class extends(o(class{})){};n=(0,s._)([(0,i.j)("esri.core.Identifiable")],n)},54179:(e,t,r)=>{r.d(t,{M:()=>f,a:()=>m});var s=r(29768),i=r(21972),l=r(76506),o=r(74673),n=r(66396),a=r(17533);class u{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(i.b),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new u,r=this._originStores[i.a.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,l.d9)(e),i.a.DEFAULTS)}));for(let r=i.a.SERVICE;r<i.b;r++){const s=this._originStores[r];s&&s.forEach(((s,i)=>{e&&e.has(i)||t.set(i,(0,l.d9)(s),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=i.a.USER){let s=this._originStores[r];if(s||(s=new Map,this._originStores[r]=s),s.set(e,t),!this._values.has(e)||(0,l.a)(this._propertyOriginMap.get(e))<=r){const s=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),s!==t}return!1}delete(e,t=i.a.USER){const r=this._originStores[t];if(!r)return;const s=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return s}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],s=r&&r.get(e),i=this._values.get(e);return this._values.set(e,s),this._propertyOriginMap.set(e,t),i!==s}originOf(e){return this._propertyOriginMap.get(e)||i.a.DEFAULTS}forEach(e){this._values.forEach(e)}}const c=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,l.a)((0,n.g)(this)),r=t.store,s=new u;t.store=s,(0,o.s)(t,r,s)}read(e,t){(0,o.r)(this,e,t)}getAtOrigin(e,t){const r=p(this),s=(0,i.n)(t);if("string"==typeof e)return r.get(e,s);const l={};return e.forEach((e=>{l[e]=r.get(e,s)})),l}originOf(e){return(0,i.c)(this.originIdOf(e))}originIdOf(e){return p(this).originOf(e)}revert(e,t){const r=p(this),s=(0,i.n)(t),l=(0,n.g)(this);let o;o="string"==typeof e?"*"===e?r.keys(s):[e]:e,o.forEach((e=>{l.invalidate(e),r.revert(e,s),l.commit(e)}))}};return t=(0,s._)([(0,a.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function p(e){return(0,n.g)(e).store}let h=class extends(c(i.Z)){};h=(0,s._)([(0,a.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],h);const y=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return d(this).delete(e,(0,i.n)(t))}write(e={},t){return(0,o.w)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,n.g)(this).setAtOrigin(e,t,(0,i.n)(r))}removeOrigin(e){const t=d(this),r=(0,i.n)(e),s=t.keys(r);for(const e of s)t.originOf(e)===r&&t.set(e,t.get(e,r),i.a.USER)}updateOrigin(e,t){const r=d(this),s=(0,i.n)(t),l=this.get(e);for(let t=s+1;t<i.b;++t)r.delete(e,t);r.set(e,l,s)}toJSON(e){return this.write({},e)}};return t=(0,s._)([(0,a.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function d(e){return(0,n.g)(e).store}const f=e=>{let t=class extends(y(c(e))){constructor(...e){super(...e)}};return t=(0,s._)([(0,a.j)("esri.core.MultiOriginJSONSupport")],t),t};let m=class extends(f(i.Z)){};m=(0,s._)([(0,a.j)("esri.core.MultiOriginJSONSupport")],m)},6687:(e,t,r)=>{r.d(t,{T:()=>i});var s=r(91055);class i{constructor(e,t,r,s){this.set(e,t,r,s)}static getId(e,t,r,s){return"object"==typeof e?`${e.level}/${e.row}/${e.col}/${e.world}`:`${e}/${t}/${r}/${s}`}get key(){return this}get id(){return this.toString()}set id(e){this.set(e)}get hash(){const e=4095&this.row,t=4095&this.col,r=63&this.level;return(3&this.world)<<30|t<<22|e<<8|r}acquire(e,t,r,s){this.set(e,t,r,s)}contains(e){const t=e.level-this.level;return this.row===e.row>>t&&this.col===e.col>>t&&this.world===e.world}equals(e){return this.level===e.level&&this.row===e.row&&this.col===e.col&&this.world===e.world}clone(){return new i(this)}release(){this.level=0,this.row=0,this.col=0,this.world=0}set(e,t,r,s){if(null==e)this.level=0,this.row=0,this.col=0,this.world=0;else if("object"==typeof e)this.level=e.level||0,this.row=e.row||0,this.col=e.col||0,this.world=e.world||0;else if("string"==typeof e){const[t,r,s,i]=e.split("/");this.level=parseFloat(t),this.row=parseFloat(r),this.col=parseFloat(s),this.world=parseFloat(i)}else this.level=+e,this.row=+t,this.col=+r,this.world=+s||0;return this}toString(){return`${this.level}/${this.row}/${this.col}/${this.world}`}getParentKey(){return this.level<=0?null:new i(this.level-1,this.row>>1,this.col>>1,this.world)}getChildKeys(){const e=this.level+1,t=this.row<<1,r=this.col<<1,s=this.world;return[new i(e,t,r,s),new i(e,t,r+1,s),new i(e,t+1,r,s),new i(e,t+1,r+1,s)]}compareRowMajor(e){return this.row<e.row?-1:this.row>e.row?1:this.col<e.col?-1:this.col>e.col?1:0}}i.pool=new s.O(i,null,null,25,50)},95708:(e,t,r)=>{var s,i;function l(e,t,r={}){const i=t===s.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let l=null;for(const t of i){try{l=e.getContext(t,r)}catch(e){}if(l)break}return l}r.d(t,{C:()=>s,c:()=>l}),r(76506),(i=s||(s={}))[i.WEBGL1=1]="WEBGL1",i[i.WEBGL2=2]="WEBGL2"},69586:(e,t,r)=>{r.d(t,{c:()=>l});var s=r(32101),i=r(49900);function l(e){return{origin:"portal-item",url:(0,s.mN)(e.itemUrl),portal:e.portal||i.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},85557:(e,t,r)=>{r.d(t,{m:()=>l});var s=r(53785),i=r(89623);const l={inches:(0,s.c)(1,"meters","inches"),feet:(0,s.c)(1,"meters","feet"),"us-feet":(0,s.c)(1,"meters","us-feet"),yards:(0,s.c)(1,"meters","yards"),miles:(0,s.c)(1,"meters","miles"),"nautical-miles":(0,s.c)(1,"meters","nautical-miles"),millimeters:(0,s.c)(1,"meters","millimeters"),centimeters:(0,s.c)(1,"meters","centimeters"),decimeters:(0,s.c)(1,"meters","decimeters"),meters:(0,s.c)(1,"meters","meters"),kilometers:(0,s.c)(1,"meters","kilometers"),"decimal-degrees":1/(0,s.l)(1,"meters",i.e.radius)}},34394:(e,t,r)=>{r.d(t,{o:()=>i,t:()=>l});var s=r(91306);function i(e){const t=(0,s.m)(100*(1-e));return Math.max(0,Math.min(t,100))}function l(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}},41617:(e,t,r)=>{r.d(t,{Z:()=>_});var s=r(29768),i=r(31450),l=(r(74569),r(82058)),o=r(60991),n=r(76996),a=r(82673),u=r(22739),c=r(92143),p=r(50406),h=r(32101),y=r(34250),d=(r(76506),r(91306),r(17533)),f=r(21801),m=r(60947);r(71552),r(73796),r(74673),r(21972),r(23639),r(60474),r(66396),r(22723),r(86656),r(91055),r(6540),r(19657),r(6906),r(40642),r(97714),r(2906),r(84069),r(91597),r(86787),r(35132),r(89623),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(88762),r(20543);let g=0;const v=c.L.getLogger("esri.layers.Layer");let S=class extends(n.E.EventedMixin((0,a.I)(u.L))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new f.Z(-180,-90,180,90,m.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=m.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,s=await r.e(6601).then(r.bind(r,66601));try{return await s.fromUrl(t)}catch(e){throw v.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},s=await r.e(1861).then(r.bind(r,21861));try{return await s.fromItem(t)}catch(e){const r=t&&t.portalItem,s=r&&r.id||"unset",l=r&&r.portal&&r.portal.url||i.Z.portalUrl;throw v.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+l+"', id: '"+s+"')",e),e}}initialize(){this.when().catch((e=>{var t,r;(0,p.D_)(e)||c.L.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,h.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,l.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new o.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,s._)([(0,y.Cb)({type:String})],S.prototype,"attributionDataUrl",void 0),(0,s._)([(0,y.Cb)({type:f.Z})],S.prototype,"fullExtent",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],S.prototype,"hasAttributionData",null),(0,s._)([(0,y.Cb)({type:String,clonable:!1})],S.prototype,"id",void 0),(0,s._)([(0,y.Cb)({type:Boolean,nonNullable:!0})],S.prototype,"legendEnabled",void 0),(0,s._)([(0,y.Cb)({type:["show","hide","hide-children"]})],S.prototype,"listMode",void 0),(0,s._)([(0,y.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],S.prototype,"opacity",void 0),(0,s._)([(0,y.Cb)({clonable:!1})],S.prototype,"parent",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],S.prototype,"parsedUrl",null),(0,s._)([(0,y.Cb)({type:Boolean})],S.prototype,"popupEnabled",void 0),(0,s._)([(0,y.Cb)({type:Boolean})],S.prototype,"attributionVisible",void 0),(0,s._)([(0,y.Cb)({type:m.Z})],S.prototype,"spatialReference",void 0),(0,s._)([(0,y.Cb)({type:String})],S.prototype,"title",void 0),(0,s._)([(0,y.Cb)({type:String,readOnly:!0,json:{read:!1}})],S.prototype,"type",void 0),(0,s._)([(0,y.Cb)()],S.prototype,"url",void 0),(0,s._)([(0,y.Cb)({type:Boolean,nonNullable:!0})],S.prototype,"visible",void 0),S=(0,s._)([(0,d.j)("esri.layers.Layer")],S);const _=S},46491:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Q});var s=r(29768),i=r(82058),l=r(60991),o=r(76506),n=r(54179),a=r(50406),u=r(32101),c=r(34250),p=(r(91306),r(97714)),h=r(17533),y=r(2906),d=r(21801),f=r(60947),m=r(41617),g=r(21781),v=r(66655),S=r(75025),_=r(11118),b=r(8547),w=r(89440),x=r(62162),C=r(58912),I=r(92143),O=r(43352),T=r(31450),E=r(9411),U=r(6687),L=r(69586),M=r(96611),P=r(95708);let R;function A(){return R||(R=function(){const e=new j,t=function(e,t){if(e===P.C.WEBGL1&&void 0===typeof WebGLRenderingContext||e===P.C.WEBGL2&&void 0===typeof WebGL2RenderingContext)return null;const r=document.createElement("canvas");if(!r)return null;let s=(0,P.c)(r,e,{failIfMajorPerformanceCaveat:!0});if((0,o.b)(s)&&(s=(0,P.c)(r,e),(0,o.i)(s)&&(t.majorPerformanceCaveat=!0)),(0,o.b)(s))return s;if(e===P.C.WEBGL1){const e=s.getParameter(s.VERSION),r=null==e?void 0:e.match(/^WebGL\s+([\d.]*)/);if(r){const e=parseFloat(r[1]);t.available=e>=.94}}else t.available=!0;t.maxTextureSize=s.getParameter(s.MAX_TEXTURE_SIZE),t.supportsVertexShaderSamplers=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const i=s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT);return i&&(t.supportsHighPrecisionFragment=i.precision>0),s}(P.C.WEBGL1,e);return(0,o.b)(t)||(e.supportsElementIndexUint=null!==t.getExtension("OES_element_index_uint"),e.supportsStandardDerivatives=null!==t.getExtension("OES_standard_derivatives"),e.supportsInstancedArrays=null!==t.getExtension("ANGLE_instanced_arrays"),e.supportsTextureFloat=null!==t.getExtension("OES_texture_float")),e}()),R}class j extends class{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1}}{constructor(){super(...arguments),this.type=P.C.WEBGL1,this.supportsElementIndexUint=!1,this.supportsStandardDerivatives=!1,this.supportsInstancedArrays=!1,this.supportsTextureFloat=!1}}r(88762),r(71552),r(40642),r(21972),r(23639),r(60474),r(66396),r(22723),r(86656),r(91055),r(6540),r(19657),r(6906),r(74673),r(73796),r(91597),r(86787),r(35132),r(89623),r(74569),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(76996),r(82673),r(22739),r(20543),r(21132),r(38742),r(92200),r(65949),r(54174),r(22465),r(65775),r(29794),r(5777),r(67541),r(93314),r(35197),r(1557),r(47842),r(14249),r(60217),r(17298),r(85557),r(53785),r(95587),r(34394),r(41864),r(49900),r(3482),r(67477),r(78533),r(74653),r(91091),r(58943),r(56420),r(73173),r(74742),r(28239),r(92482),r(82426),r(92817),r(79764),r(95873),r(82933),r(15324),r(58085),r(89241),r(91700),r(44172),r(70870),r(51006),r(30752),r(48027),r(79682),r(66992),r(90532),r(82356);let D=null;const N=I.L.getLogger("esri.layers.support.SpriteSource");class k{constructor(e,t,r,s){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=r,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const t=(0,u.mN)(this.baseURL),r=t.query?"?"+(0,u.B7)(t.query):"",s=this._isRetina?"@2x":"",o=`${t.path}${s}.${this._spriteImageFormat}${r}`,n=`${t.path}${s}.json${r}`;return Promise.all([(0,i.default)(n,e),(0,i.default)(o,{responseType:"image",...e})]).then((([e,r])=>{const s=Object.keys(e.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!r||!r.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=e.data;const i=r.data,o=Math.max(this.maxTextureSize,4096);if(i.width>o||i.height>o){const e=`Sprite resource for style ${t.path} is bigger than the maximum allowed of ${o} pixels}`;throw N.error(e),new l.Z("SpriteSource",e)}this.width=i.width,this.height=i.height;const n=document.createElement("canvas"),a=n.getContext("2d");n.width=i.width,n.height=i.height,a.drawImage(i,0,0,i.width,i.height);const u=a.getImageData(0,0,i.width,i.height),c=new Uint8Array(u.data);let p;for(let e=0;e<c.length;e+=4)p=c[e+3]/255,c[e]=c[e]*p,c[e+1]=c[e+1]*p,c[e+2]=c[e+2]*p;this.image=c}))}}class B{constructor(e){this.url=e}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=(0,i.default)(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,t){const r=await this.fetchTileIndex();return(0,a.k_)(t),this._getIndexedDataKey(r,e)}_getIndexedDataKey(e,t){const r=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let s=t;for(;0!==s.level;)s=new U.T(s.level-1,s.row>>1,s.col>>1,s.world),r.push(s);let i,l,o=e,n=r.pop();if(1===o)return n;for(;r.length;)if(i=r.pop(),l=(1&i.col)+((1&i.row)<<1),o){if(0===o[l]){n=null;break}if(1===o[l]){n=i;break}n=i,o=o[l]}return n}}class F{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}async fetchTileIndex(e){return this._tileIndexPromise||(this._tileIndexPromise=(0,i.default)(this._tileIndexUrl,{query:{...null==e?void 0:e.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,t){const{level:r,row:s,col:i}=e,l=new U.T(e);return this._tilemap.fetchAvailabilityUpsample(r,s,i,l,t).then((()=>(l.world=e.world,l))).catch((e=>{if((0,a.D_)(e))throw e;return null}))}}const $=new Map;class G{constructor(e,t,r){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=e,this.sourceUrl=t;const s=(0,u.mN)(this.sourceUrl),i=(0,o.d9)(r),l=i.tiles;if(s)for(let e=0;e<l.length;e++){const t=(0,u.mN)(l[e]);t&&((0,u.YP)(t.path)||(t.path=(0,u.v_)(s.path,t.path)),l[e]=(0,u.fl)(t.path,{...s.query,...t.query}))}this.tileServers=l;const n=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim())),a=!0===(null==r?void 0:r.exportTilesAllowed),c=!0===(null==n?void 0:n.includes("tilemap")),p=a&&r.hasOwnProperty("maxExportTilesCount")?r.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:a,supportsTileMap:c},exportTiles:a?{maxExportTilesCount:+p}:null},this.tileInfo=(0,E.r)(i.tileInfo,i,null,{ignoreMinMaxLOD:!0});const h=r.tileMap?(0,u.fl)((0,u.v_)(s.path,r.tileMap),s.query):null;c?(this.type="vector-tile",this.tilemap=new F(new E.T({layer:{parsedUrl:s,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),h)):h&&(this.tilemap=new B(h)),this.fullExtent=d.Z.fromJSON(r.fullExtent)}destroy(){}async getRefKey(e,t){var r,s;return null!=(r=null==(s=this.tilemap)?void 0:s.dataKey(e,t))?r:e}requestTile(e,t,r,s){return function(e,t,r,s,l){return function(e,t){const r=$.get(e);if(r)return r.then((e=>(0,o.d9)(e)));const s=(0,i.default)(e,{responseType:"array-buffer",...t}).then((({data:t})=>($.delete(e),t))).catch((t=>{throw $.delete(e),t}));return $.set(e,s),s}(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),l)}(this.tileServers[t%this.tileServers.length],e,t,r,s)}isCompatibleWith(e){const t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;const s=t.lods,i=r.lods,l=Math.min(s.length,i.length);for(let e=0;e<l;e++){const t=s[e],r=i[e];if(t.level!==r.level||Math.round(t.scale)!==Math.round(r.scale))return!1}return!0}}const W=T.Z.defaults&&T.Z.defaults.io.corsEnabledServers;function V(e){if(!e)return;const t=(0,u.P$)(e);W&&!W.includes(t)&&W.push(t)}function Z(...e){let t;for(let r=0;r<e.length;++r)if((0,u.oC)(e[r])){if(t){const s=t.split("://")[0];t=s+":"+e[r].trim()}}else t=(0,u.YP)(e[r])?e[r]:(0,u.v_)(t,e[r]);return(0,u.Qj)(t)}async function K(e,t,r,s,l){let o,n,c;if((0,a.k_)(l),"string"==typeof r){const e=(0,u.Fv)(r);V(e),c=await(0,i.default)(e,{...l,responseType:"json",query:{f:"json",...null==l?void 0:l.query}}),c.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),n&&(n=n.replace(/^http:/i,"https:"))),o=e,n=e}else c={data:r},o=r.jsonUrl||null,n=s;const p=c.data;return q(p)?(e.styleUrl=o||null,async function(e,t,r,s){const i=r?(0,u.Yd)(r):(0,u.L)();e.styleBase=i,e.style=t,e.styleUrl&&V(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const r=t.sources.esri;r.url?await K(e,"esri",Z(i,r.url),void 0,s):l.push(K(e,"esri",r,i,s))}for(const r of Object.keys(t.sources))"esri"!==r&&"vector"===t.sources[r].type&&(t.sources[r].url?l.push(K(e,r,Z(i,t.sources[r].url),void 0,s)):t.sources[r].tiles&&l.push(K(e,r,t.sources[r],i,s)));await Promise.all(l)}(e,p,n,l)):q(p)?Promise.reject("You must specify the URL or the JSON for a service or for a style."):e.sourceUrl?z(e,p,n,!1,t,l):(e.sourceUrl=o||null,z(e,p,n,!0,t,l))}function q(e){return!!e.sources}async function z(e,t,r,s,i,l){const o=r?(0,u.Qj)(r)+"/":(0,u.L)(),n=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}};let s=78271.51696400007,i=295828763.7957775;const l=[],o=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let e=0;e<=n;e++)e>=o&&l.push({level:e,scale:i,resolution:s}),s/=2,i/=2;for(const r of e.tiles)V(Z(t,r));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:l,spatialReference:{wkid:102100}}}}(t,o),a=new G(i,(0,u.fl)(o,null==l?void 0:l.query),n);if(!s&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(a))return Promise.resolve();null!=a.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(a.fullExtent):t.fullExtent=a.fullExtent.clone()),t.tileInfo.lods.length<a.tileInfo.lods.length&&(t.tileInfo=a.tileInfo)}if(s?(e.sourceBase=o,e.source=t,e.validatedSource=n,e.primarySourceName=i,e.sourceUrl&&V(e.sourceUrl)):V(o),e.sourceNameToSource[i]=a,!e.style)return null==t.defaultStyles?Promise.reject():"string"==typeof t.defaultStyles?K(e,"",Z(o,t.defaultStyles,"root.json"),void 0,l):K(e,"",t.defaultStyles,Z(o,"root.json"),l)}function J(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=1e-6||Math.abs(r.y-s.y)>=1e-6)return!1;let i,l;e.lods[0].scale>t.lods[0].scale?(i=e,l=t):(l=e,i=t);for(let e=i.lods[0].scale;e>=l.lods[l.lods.length-1].scale-1e-6;e/=2)if(Math.abs(e-l.lods[0].scale)<1e-6)return!0;return!1}function X(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,l={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=n.scale,c=n.resolution,p=a.scale,h=[];let y=u,d=c,f=0;for(;y>p;)h.push({level:f,resolution:d,scale:y}),f++,y/=2,d/=2;return new O.Z({size:[r,r],dpi:i,format:s||"pbf",origin:l,lods:h,spatialReference:o})}let H=class extends((0,_.B)((0,C.S)((0,v.A)((0,S.A)((0,w.O)((0,x.P)((0,b.C)((0,g.A)((0,n.M)(m.Z)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))null==e||e.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(a.r9).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await(0,i.default)(t,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:t},(0,L.c)(this.portalItem))})).catch(a.r9).then((()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&(0,u.mN)(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?(0,u.fl)(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return(null==(e=this.primarySource)?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?(0,u.mN)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&(0,u.oC)(e)&&(e=`https:${e}`),t.styleUrl=e}get tileInfo(){var e;const t=[];for(const e in this.sourceNameToSource)t.push(this.sourceNameToSource[e]);let r=(null==(e=this.primarySource)?void 0:e.tileInfo)||new O.Z;if(t.length>1)for(let e=0;e<t.length;e++)J(r,t[e].tileInfo)&&(r=X(r,t[e].tileInfo));return r}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){var r;const s=A().maxTextureSize,i=null!=(r=this.currentStyleInfo)&&r.spriteUrl?(0,u.fl)(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,l=new k(i,e,s,this.currentStyleInfo.spriteFormat);await l.load(t),this._spriteSourceMap.set(e,l)}return Promise.resolve(this._spriteSourceMap.get(e))}async setSpriteSource(e,t="png",r=1,s){const i=A().maxTextureSize,l=e?(0,u.fl)(e,{...this.customParameters,token:this.apiKey}):null;if(!l)return null;const o=new k(l,r,i,t);try{return await o.load(s),this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,o),this.currentStyleInfo.spriteUrl=l,this.emit("spriteSource-change",{spriteSource:o}),o}catch(e){(0,a.r9)(e)}return null}async loadStyle(e,t){var r;const s=e||this.style||this.url;return this._loadingTask&&"string"==typeof s&&this.url===s||(null==(r=this._loadingTask)||r.abort(),this._loadingTask=(0,a.vr)((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(s,{signal:e}))),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return(0,o.d9)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return(0,o.d9)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return(0,o.d9)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return null!=t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new l.Z("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await async function(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]="string"==typeof e?[e,null]:[null,e.jsonUrl];await K(r,"esri",e,i,t);const l={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&Z(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&Z(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return V(l.spriteUrl),V(l.glyphsUrl),l}(e,{...t,query:{...this.customParameters,token:this.apiKey}});"webp"===r.spriteFormat&&(await function(e){if(D)return D;const t="UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";return D=new Promise((e=>{const r=new Image;r.onload=()=>{r.onload=r.onerror=null,e(r.width>0&&r.height>0)},r.onerror=()=>{r.onload=r.onerror=null,e(!1)},r.src="data:image/webp;base64,"+t})),D}()||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new M.S(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const e of r)if(e.toLowerCase().includes(s))return(0,u.Fv)(`//static.arcgis.com/attribution/Vector${i}/${e}`)}async _loadStyle(e){var t,r;return null!=(t=null==(r=this._loadingTask)?void 0:r.promise)?t:this.loadStyle(null,e)}};(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"attributionDataUrl",null),(0,s._)([(0,c.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],H.prototype,"capabilities",null),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"currentStyleInfo",void 0),(0,s._)([(0,c.Cb)({json:{read:!1},readOnly:!0,type:d.Z})],H.prototype,"fullExtent",null),(0,s._)([(0,c.Cb)()],H.prototype,"style",void 0),(0,s._)([(0,c.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],H.prototype,"isReference",void 0),(0,s._)([(0,c.Cb)({type:["VectorTileLayer"]})],H.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"parsedUrl",null),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"serviceUrl",null),(0,s._)([(0,c.Cb)({type:f.Z,readOnly:!0})],H.prototype,"spatialReference",null),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"styleRepository",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"sourceNameToSource",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"primarySource",void 0),(0,s._)([(0,c.Cb)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],H.prototype,"styleUrl",null),(0,s._)([(0,y.w)(["portal-item","web-document"],"styleUrl")],H.prototype,"writeStyleUrl",null),(0,s._)([(0,c.Cb)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:O.Z})],H.prototype,"tileInfo",null),(0,s._)([(0,c.Cb)({json:{read:!1},readOnly:!0,value:"vector-tile"})],H.prototype,"type",void 0),(0,s._)([(0,c.Cb)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],H.prototype,"url",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"version",void 0),(0,s._)([(0,p.r)("version",["version","currentVersion"])],H.prototype,"readVersion",null),(0,s._)([(0,c.Cb)({type:Boolean})],H.prototype,"symbolCollisionBoxesVisible",void 0),(0,s._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],H.prototype,"path",void 0),H=(0,s._)([(0,h.j)("esri.layers.VectorTileLayer")],H);const Q=H}}]);