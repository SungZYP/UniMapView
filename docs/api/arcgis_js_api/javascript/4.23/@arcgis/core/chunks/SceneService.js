/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../request.js";import r from"../core/Error.js";import{i}from"../core/lang.js";import{L as o}from"./Logger.js";import{debounce as a}from"../core/promiseUtils.js";import{urlToObject as s}from"../core/urlUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{r as l}from"./reader.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{w as d}from"./writer.js";import{u as c}from"./originUtils.js";import u from"../geometry/Extent.js";import m from"../geometry/HeightModelInfo.js";import y from"../geometry/SpatialReference.js";import{t as h,p as f,c as v,a as S,w as g}from"./arcgisLayerUrl.js";import{i as w,u as I}from"./commonProperties.js";import{f as x}from"./I3SIndexInfo.js";import b from"../portal/Portal.js";import j from"../portal/PortalItem.js";import{s as _}from"./saveUtils.js";const R=o.getLogger("esri.layers.mixins.SceneService"),A=o=>{let A=class extends o{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=a((async(e,t,r)=>{switch(e){case K.SAVE:return this._save(t);case K.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return y.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new y(i):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const i=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return u.fromJSON(i,r)}const i=t.store,o=this._readSpatialReference(t);return null==o||null==i||null==i.extent||!Array.isArray(i.extent)||i.extent.some((e=>e<N))?null:new u({xmin:i.extent[0],ymin:i.extent[1],xmax:i.extent[2],ymax:i.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"";return this.parseVersionString(i)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return h(this.url,t.name);let o=t.name;if(!o&&this.url){const e=f(this.url);i(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),v(o)}set url(e){const t=S({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){g(this,e,"layers",t,i)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=s(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=x(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,i;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(i=t.nodes)?void 0:i[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new r("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<N||null==this.fullExtent||this.fullExtent.hasZ)return;const s=a.obb.halfSize,n=a.obb.center[2],l=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<N)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}}async _fetchService(e){if(null==this.url)throw new r("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await t(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await t(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(i=!0),i)return this._fetchVoxelServiceLayer();const o=r.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const r=(await t(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const t of i)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===U.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const i={...O,...t};let o=j.from(e);o||(R.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new r("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||b.getDefault();await this._ensureLoadBeforeSave(),o.type=T,o.portal=a;const s={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(n,s,i),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,i,U.newItem),await a._signIn(),await a.user.addItem({item:o,folder:i&&i.folder,data:n}),await _(this.resourceReferences,s,null),this.portalItem=o,c(s),s.portalItem=o,o}async _save(e){const t={...O,...e};this.portalItem||(R.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new r("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==T&&(R.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+T),await Promise.reject(new r("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${T}"`))),await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&s(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||b.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(o,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,U.existingItem),await this.portalItem.update({data:o}),await _(this.resourceReferences,i,null),c(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let o=t.messages.filter((e=>"error"===e.type)).map((e=>new r(e.name,e.message,e.details)));if(i&&i.validationOptions.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),i.validationOptions.enabled||E){const t=(await import("./schemaValidator.js")).validate(e,i.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(R.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===i.validationOptions.failPolicy){const e=t.map((e=>new r("sceneservice:schema-validation",e))).concat(o);throw new r("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new r("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return e([n(w)],A.prototype,"id",void 0),e([n({type:y})],A.prototype,"spatialReference",void 0),e([l("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],A.prototype,"readSpatialReference",null),e([n({type:u})],A.prototype,"fullExtent",void 0),e([l("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],A.prototype,"readFullExtent",null),e([n({readOnly:!0,type:m})],A.prototype,"heightModelInfo",void 0),e([n({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],A.prototype,"minScale",void 0),e([n({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],A.prototype,"maxScale",void 0),e([n({readOnly:!0})],A.prototype,"version",void 0),e([l("version",["store.version"])],A.prototype,"readVersion",null),e([n({type:String,json:{read:{source:"copyrightText"}}})],A.prototype,"copyright",void 0),e([n({type:String,json:{read:!1}})],A.prototype,"sublayerTitleMode",void 0),e([n({type:String})],A.prototype,"title",void 0),e([l("portal-item","title")],A.prototype,"readTitlePortalItem",null),e([l("service","title",["name"])],A.prototype,"readTitleService",null),e([n({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],A.prototype,"layerId",void 0),e([n(I)],A.prototype,"url",null),e([d("url")],A.prototype,"writeUrl",null),e([n()],A.prototype,"parsedUrl",null),e([n({readOnly:!0})],A.prototype,"store",void 0),e([n({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],A.prototype,"rootNode",void 0),A=e([p("esri.layers.mixins.SceneService")],A),A},N=-1e38,E=!1;var U;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(U||(U={}));const T="Scene Service",O={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var K;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(K||(K={}));export{A as S,K as a};
