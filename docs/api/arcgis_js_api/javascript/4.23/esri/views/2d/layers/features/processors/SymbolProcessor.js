// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/BidiText ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/accessorSupport/set ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/accessorSupport/diffUtils ../../../../../geometry/SpatialReference ../../../engine/webgl/DisplayId ../../../engine/webgl/mesh/MeshData ../../../engine/webgl/mesh/factories/WGLMeshFactory ../../../engine/webgl/mesh/templates/WGLTemplateStore ../../../engine/webgl/util/Matcher ../textUtils ./BaseProcessor ../support/ResourceManagerProxy".split(" "),
function(v,G,H,z,I,J,p,u,U,V,W,K,B,L,M,N,O,P,C,Q,R,S){function D(m,q){return(!m.minScale||m.minScale>=q)&&(!m.maxScale||m.maxScale<=q)}function E(m){m=m.message;const q={message:{data:{},tileKey:m.tileKey,tileKeyOrigin:m.tileKeyOrigin},transferList:[]};for(const a in m.data){var f=m.data[a];q.message.data[a]=null;if(p.isSome(f)){var b=f.stride;const c=f.indices.slice(0),d=f.vertices.slice(0),e=f.records.slice(0);f=p.applySome(f.metrics,g=>g.slice(0));b={stride:b,indices:c,vertices:d,records:e,metrics:f};
q.transferList.push(c,d,e);q.message.data[a]=b}}return q}J.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");z=function(m){function q(){var b=m.apply(this,arguments)||this;b.type="symbol";b._matchers={feature:null,aggregate:null};b._bufferData=new Map;b._bufferIds=new Map;return b}v._inheritsLoose(q,m);var f=q.prototype;f.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);this._resourceManagerProxy=new S(this.remoteClient)};f.destroy=
function(){this._resourceManagerProxy.destroy()};f.forEachBufferId=function(b){this._bufferIds.forEach(a=>{a.forEach(b)})};f.update=function(){var b=v._asyncToGenerator(function*(a,c){c=c.schema.processors[0];if("symbol"===c.type){var d=B.diff(this._schema,c);B.hasDiff(d,"mesh")&&(I("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",d),a.mesh=!0,a.why.mesh.push("Symbology changed"),this._schema=c,this._factory=this._createFactory(c),this._factory.update(c,this.tileStore.tileScheme.tileInfo))}});
return function(a,c){return b.apply(this,arguments)}}();f.onTileMessage=function(b,a,c,d){u.throwIfAborted(d);return this._onTileData(b,a,c,d)};f.onTileClear=function(b){this._bufferData.delete(b.key.id);this._bufferIds.delete(b.key.id);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:b.id,data:{clear:!0}})};f.onTileError=function(b,a,c){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:b.id,error:a},{signal:c.signal})};f.onTileUpdate=function(b){for(const a of b.removed)this._bufferData.has(a.key.id)&&
this._bufferData.delete(a.key.id),this._bufferIds.has(a.key.id)&&this._bufferIds.delete(a.key.id);for(const a of b.added)this._bufferData.forEach(c=>{for(const d of c)d.message.tileKey===a.id&&this._updateTileMesh("append",a,E(d),[],!1,!1,null)})};f._addBufferData=function(b,a){this._bufferData.has(b)||this._bufferData.set(b,[]);this._bufferData.get(b).push(E(a))};f._createFactory=function(b){const {geometryType:a,objectIdField:c,fields:d}=this.service,e=L.fromJSON(this.spatialReference),g={geometryType:a,
fields:d,spatialReference:e},h=new P.WGLTemplateStore((n,r)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",n,r),this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:k}=b.mesh;this._store=h;this._matchers.feature=C.createMatcher(l,h,g,this._resourceManagerProxy);this._matchers.aggregate=p.applySome(k,n=>C.createMatcher(n,h,g,this._resourceManagerProxy));return new O.WGLMeshFactory(a,c,h)};f._onTileData=function(){var b=v._asyncToGenerator(function*(a,c,d,e){u.throwIfAborted(e);
const {type:g,addOrUpdate:h,remove:l}=c;var k=c.end;const n=!!this._schema.mesh.sortKey;if(!h)return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:a.id,data:{type:g,addOrUpdate:null,remove:l,clear:!1,end:k,sort:n}},e);d=this._processFeatures(a,h,d,e);try{var r=yield d;if(p.isNone(r))return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:a.id,data:{type:g,addOrUpdate:null,remove:l,clear:!1,end:k,sort:n}},e);k=[];for(const t of r){r=!1;const w=t.message.bufferIds,A=a.key.id,
y=t.message.tileKey;if(A!==y&&p.isSome(w)){if(!this.tileStore.get(y)){this._addBufferData(A,t);k.push(t);continue}let x=this._bufferIds.get(y);x||(x=new Set,this._bufferIds.set(y,x));const T=Array.from(w);for(const F of T)if(x.has(F)){r=!0;break}else x.add(F)}r||(this._addBufferData(A,t),k.push(t))}yield u.all(k.map(t=>{const w=a.key.id===t.message.tileKey;return this._updateTileMesh(g,a,t,w?c.remove:[],w&&c.end,c.clear,e.signal)}))}catch(t){this._handleError(a,t,e)}});return function(a,c,d,e){return b.apply(this,
arguments)}}();f._updateTileMesh=function(){var b=v._asyncToGenerator(function*(a,c,d,e,g,h,l){h=d.message.tileKey;const k=!!this._schema.mesh.sortKey;h!==c.key.id&&(g=!1);c=p.applySome(d,n=>n.message);d=p.applySome(d,n=>n.transferList)||[];a={type:a,addOrUpdate:c,remove:e,clear:!1,end:g,sort:k};l={transferList:p.unwrap(d)||[],signal:l};u.throwIfAborted(l);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:h,data:a},l)});return function(a,c,d,e,g,h,l){return b.apply(this,arguments)}}();
f._processFeatures=function(){var b=v._asyncToGenerator(function*(a,c,d,e){if(p.isNone(c)||!c.hasFeatures)return null;const g={transform:a.transform,hasZ:!1,hasM:!1},h=this._factory,l={viewingMode:"",scale:a.scale},k=yield this._matchers.feature,n=yield this._matchers.aggregate;u.throwIfAborted(e);const r=this._getLabelInfos(a,c);yield h.analyze(c.getCursor(),this._resourceManagerProxy,k,n,g,l);u.throwIfAborted(e);return this._writeFeatureSet(a,c,g,r,h,d)});return function(a,c,d,e){return b.apply(this,
arguments)}}();f._writeFeatureSet=function(b,a,c,d,e,g){var h=a.getSize();g=new N.MeshData(b.key.id,{features:h,records:h,metrics:0},this._schema.mesh.matcher.stride,g,!0);h={viewingMode:"",scale:b.scale};for(a=a.getCursor();a.next();)try{const l=a.getDisplayId(),k=p.isSome(d)?d.get(l):null;e.writeCursor(g,a,c,h,b.level,k,this._resourceManagerProxy)}catch(l){}return g.serialize(b.tileInfoView.tileInfo.isWrappable)};f._handleError=function(b,a,c){if(!u.isAbortError(a))return this.remoteClient.invoke("tileRenderer.onTileError",
{tileKey:b.id,error:a.message},{signal:c.signal})};f._getLabelingSchemaForScale=function(b){var a=this._schema.mesh.labels;if(p.isNone(a))return null;if("subtype"===a.type){const c={type:"subtype",classes:{}};let d=!1;for(const e in a.classes){const g=a.classes[e].filter(h=>D(h,b.scale));d=d||!!g.length;c.classes[e]=g}return d?c:null}a=a.classes.filter(c=>D(c,b.scale));return a.length?{type:"simple",classes:a}:null};f._getLabels=function(b,a){if("subtype"===a.type){var c;const d=p.unwrapOrThrow(this.service.subtypeField,
"Expected to find subtype Field");b=b.readAttribute(d);return null==b?[]:null!=(c=a.classes[b])?c:[]}return a.classes};f._getLabelInfos=function(b,a){b=this._getLabelingSchemaForScale(b);if(p.isNone(b))return null;const c=new Map;for(a=a.getCursor();a.next();){const e=a.getDisplayId(),g=[],h=M.isAggregateId(e),l=h&&1!==a.readAttribute("cluster_count")?"aggregate":"feature";var d=this._getLabels(a,b);for(const k of d){if(k.target!==l)continue;d=a.getStorage();d=h&&"feature"===l?d.getComputedStringAtIndex(a.readAttribute("referenceId"),
k.fieldIndex):d.getComputedStringAtIndex(e,k.fieldIndex);if(!d)continue;d=H.bidiText(d.toString());const n=d[1];this._store.getMosaicItem(k.symbol,Q.codepoints(d[0])).then(r=>{g[k.index]={glyphs:r.glyphMosaicItems,rtl:n,index:k.index}})}c.set(e,g)}return c};v._createClass(q,[{key:"supportsTileUpdates",get:function(){return!0}}]);return q}(R);return z=G.__decorate([K.subclass("esri.views.2d.layers.features.processors.SymbolProcessor")],z)});