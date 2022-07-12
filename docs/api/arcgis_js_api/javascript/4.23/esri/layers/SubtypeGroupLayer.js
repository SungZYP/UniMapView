// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../request ../symbols ../core/Collection ../core/Error ../core/HandleOwner ../core/Handles ../core/has ../core/jsonMap ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/sql ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/extensions/serializableProperty/reader ../form/FormTemplate ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ./Layer ./graphics/sources/MemorySource ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/arcgisLayerUrl ./support/commonProperties ./support/FeatureIndex ./support/featureReductionUtils ./support/fieldProperties ./support/fieldUtils ./support/GeometryFieldsInfo ./support/LayerFloorInfo ./support/Relationship ./support/SubtypeSublayer ./support/TimeInfo ./support/versionUtils ./support/source/DataLayerSource ../renderers/support/styleUtils ../rest/support/AttachmentQuery ../rest/support/FeatureSet ../rest/support/Query ../rest/support/RelationshipQuery".split(" "),
function(M,w,f,C,La,Ma,Na,Oa,W,X,N,O,Y,P,t,p,d,Z,aa,ba,ca,A,da,G,Q,ea,H,h,Pa,fa,n,ha,D,ia,ja,ka,la,R,ma,S,na,oa,pa,qa,ra,sa,ta,ua,x,u,T,va,wa,I,xa,ya,za,E,Aa,Ba,Ca,Da,Ea,Fa,B,U){function k(m,q,e){return!(m&&m.hasOwnProperty(q)?!m[q]:!e)}function F(m,q,e){return m&&m.hasOwnProperty(q)?m[q]:e}function Ga(m){var q;m=null==m?void 0:null==(q=m.supportedSpatialAggregationStatistics)?void 0:q.map(e=>e.toLowerCase());return{envelope:!(null==m||!m.includes("envelopeaggregate")),centroid:!(null==m||!m.includes("centroidaggregate")),
convexHull:!(null==m||!m.includes("convexhullaggregate"))}}function J(m,q,e){m=!(null==e||!e.writeLayerSchema);return{enabled:m,ignoreOrigin:m}}const K=new ba.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),Ha={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"},V=ca.getLogger("esri.layers.SubtypeGroupLayer");
C=wa.defineFieldProperties();d=function(m){function q(...b){var a=m.call(this,...b)||this;a._handles=new Z;a.capabilities=null;a.charts=null;a.copyright=null;a.displayField=null;a.definitionExpression=null;a.dynamicDataSource=null;a.editFieldsInfo=null;a.editingEnabled=!0;a.editingInfo=null;a.elevationInfo=null;a.featureReduction=null;a.fields=null;a.fieldsIndex=null;a.floorInfo=null;a.formTemplate=null;a.fullExtent=null;a.gdbVersion=null;a.geometryFieldsInfo=null;a.geometryType=null;a.hasM=void 0;
a.hasZ=void 0;a.heightModelInfo=null;a.historicMoment=null;a.isTable=!1;a.layerId=void 0;a.legendEnabled=!0;a.minScale=0;a.maxScale=0;a.globalIdField=null;a.objectIdField=null;a.outFields=null;a.path=null;a.relationships=null;a.sourceJSON=null;a.returnM=void 0;a.returnZ=void 0;a.screenSizePerspectiveEnabled=!0;a.serviceDefinitionExpression=null;a.spatialReference=R.WGS84;a.subtypeField=null;a.sublayers=new (t.ofType(E));a.timeInfo=null;a.title=null;a.sublayerTitleMode="item-title";a.trackIdField=
null;a.type="subtype-group";a.typeIdField=null;a.indexes=new (t.ofType(T.FeatureIndex));a.userIsAdmin=!1;a.version=void 0;a.visible=!0;a._handles.add(a.watch("sublayers",(c,g)=>a._handleSublayersChange(c,g),!0));return a}w._inheritsLoose(q,m);var e=q.prototype;e.destroy=function(){var b;null==(b=this.source)?void 0:b.destroy();this._handles=A.destroyMaybe(this._handles)};e.normalizeCtorArgs=function(b,a){return"string"===typeof b?{url:b,...a}:b};e.load=function(b){var a=this;const c=A.isSome(b)?b.signal:
null;if(this.portalItem&&this.portalItem.loaded&&this.source)this.addResolvingPromise(this.createGraphicsSource(c).then(l=>this._initLayerProperties(l)));else{var g=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},b).catch(Q.throwIfAbortError).then(w._asyncToGenerator(function*(){if(a.url&&null==a.layerId&&/FeatureServer|MapServer\/*$/i.test(a.url)){const l=yield a._fetchFirstLayerId(c);null!=l&&(a.layerId=l)}if(!a.url&&!a._hasMemorySource())throw new p("feature-layer:missing-url-or-source",
"Feature layer must be created with either a url or a source");return a._initLayerProperties(yield a.createGraphicsSource(c))})).then(()=>this.finishLoadEditablePortalLayer(b));this.addResolvingPromise(g);return Promise.resolve(this)}};e.readCapabilities=function(b,a){a=a.layerDefinition||a;return{attachment:this._readAttachmentCapabilities(a.attachmentProperties),data:this._readDataCapabilities(a),metadata:this._readMetadataCapabilities(a),operations:this._readOperationsCapabilities(a.capabilities||
b,a),query:this._readQueryCapabilities(a),queryRelated:this._readQueryRelatedCapabilities(a),editing:this._readEditingCapabilities(a)}};e.readEditingEnabled=function(b,a){return this._readEditingEnabled(a,!1)};e.readEditingEnabledFromWebMap=function(b,a,c){return this._readEditingEnabled(a,!0,c)};e.writeEditingEnabled=function(b,a){this._writeEditingEnabled(b,a,!1)};e.writeEditingEnabledToWebMap=function(b,a,c,g){this._writeEditingEnabled(b,a,!0,g)};e.readEditingInfo=function(b,a){({editingInfo:b}=
a);return b?{lastEditDate:null!=b.lastEditDate?new Date(b.lastEditDate):null}:null};e.readIsTable=function(b,a){a=a&&a.layerDefinition||a;return"Table"===a.type||!a.geometryType};e.writeIsTable=function(b,a,c,g){null!=g&&g.writeLayerSchema&&G.setDeepValue(c,b?"Table":"Feature Layer",a)};e.readMinScale=function(b,a){return a.effectiveMinScale||b||0};e.readMaxScale=function(b,a){return a.effectiveMaxScale||b||0};e.readGlobalIdFieldFromService=function(b,a){a=a.layerDefinition||a;if(a.globalIdField)return a.globalIdField;
if(a.fields)for(const c of a.fields)if("esriFieldTypeGlobalID"===c.type)return c.name};e.readObjectIdFieldFromService=function(b,a){a=a.layerDefinition||a;if(a.objectIdField)return a.objectIdField;if(a.fields)for(const c of a.fields)if("esriFieldTypeOID"===c.type)return c.name};e.readRenderer=function(b,a,c){a=a.layerDefinition||a;if(b=a.drawingInfo&&a.drawingInfo.renderer||void 0)return(b=N.read(b,a,c)||void 0)||V.error("Failed to create renderer",{rendererDefinition:a.drawingInfo.renderer,layer:this,
context:c}),b;if(a.defaultSymbol)return a.types&&a.types.length?new X({defaultSymbol:L(a.defaultSymbol,a,c),field:a.typeIdField,uniqueValueInfos:a.types.map(g=>({id:g.id,symbol:L(g.symbol,g,c)}))}):new W({symbol:L(a.defaultSymbol,a,c)})};e.castSource=function(b){return b?Array.isArray(b)||b instanceof t?new S.default({layer:this,items:b}):b:null};e.readSource=function(b,a){b=Fa.fromJSON(a.featureSet);return new S.default({layer:this,items:b&&b.features||[]})};e.readServiceDefinitionExpression=function(b,
a){return a.definitionQuery||a.definitionExpression};e.readTitle=function(b,a){b=a.layerDefinition&&a.layerDefinition.name||a.name;a=a.title||a.layerDefinition&&a.layerDefinition.title;if(b){a=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?x.titleFromUrlAndName(this.url,b):b;if(!b&&this.url){const c=x.parse(this.url);A.isSome(c)&&(b=c.title)}if(!b)return;"item-title-and-service-name"===this.sublayerTitleMode&&a&&a!==b&&(b=a+" - "+b);return x.cleanTitle(b)}if("item-title"===
this.sublayerTitleMode&&a)return a};e.readTitleFromWebMap=function(b,a){return a.title||a.layerDefinition&&a.layerDefinition.name};e.readTypeIdField=function(b,a){a=a.layerDefinition||a;let c=a.typeIdField;c&&a.fields&&(c=c.toLowerCase(),b=a.fields.find(g=>g.name.toLowerCase()===c))&&(c=b.name);return c};e.writeUrl=function(b,a,c,g){x.writeUrlWithLayerId(this,b,null,a,g)};e.readVersion=function(b,a){return a.currentVersion?a.currentVersion:a.hasOwnProperty("capabilities")||a.hasOwnProperty("drawingInfo")||
a.hasOwnProperty("hasAttachments")||a.hasOwnProperty("htmlPopupType")||a.hasOwnProperty("relationships")||a.hasOwnProperty("timeInfo")||a.hasOwnProperty("typeIdField")||a.hasOwnProperty("types")?10:9.3};e.readVisible=function(b,a){if(a.layerDefinition&&null!=a.layerDefinition.defaultVisibility)return!!a.layerDefinition.defaultVisibility;if(null!=a.visibility)return!!a.visibility};e.addAttachment=function(b,a){return this.load().then(()=>this._checkAttachmentSupport(b)).then(()=>{if(!("addAttachment"in
this.source))throw new p("SubtypeGroupLayer","Layer source does not support addAttachment capability");return this.source.addAttachment(b,a)})};e.updateAttachment=function(b,a,c){return this.load().then(()=>this._checkAttachmentSupport(b)).then(()=>{if(!("updateAttachment"in this.source))throw new p("SubtypeGroupLayer","Layer source does not support updateAttachment capability");return this.source.updateAttachment(b,a,c)})};e.applyEdits=function(){var b=w._asyncToGenerator(function*(a,c){const g=
yield new Promise((l,r)=>M(["./graphics/editingSupport"],l,r));yield this.load();return g.applyEdits(this,this.source,a,c)});return function(a,c){return b.apply(this,arguments)}}();e.on=function(b,a){return m.prototype.on.call(this,b,a)};e.createGraphicsSource=function(){var b=w._asyncToGenerator(function*(a){if(this._hasMemorySource())return this.emit("graphics-source-create",{graphicsSource:this.source}),this.source.load({signal:a});const c=yield new Promise((g,l)=>M(["./graphics/sources/FeatureLayerSource"],
r=>g(Object.freeze({__proto__:null,default:r})),l));Q.throwIfAborted(a);a=yield(new c.default({layer:this})).load({signal:a});this.emit("graphics-source-create",{graphicsSource:a});return a});return function(a){return b.apply(this,arguments)}}();e.createQuery=function(){const b=new B,a=this.get("capabilities.data"),c=this.get("capabilities.query"),g=this.sublayers.map(v=>v.subtypeCode);b.dynamicDataSource=this.dynamicDataSource;b.gdbVersion=this.gdbVersion;b.historicMoment=this.historicMoment;b.returnGeometry=
!0;c&&(b.compactGeometryEnabled=c.supportsCompactGeometry,b.defaultSpatialReferenceEnabled=c.supportsDefaultSpatialReference);a&&(a.supportsZ&&null!=this.returnZ&&(b.returnZ=this.returnZ),a.supportsM&&null!=this.returnM&&(b.returnM=this.returnM));b.outFields=["*"];b.where=`${this.subtypeField} IN (${g.join(",")})`;this.definitionExpression&&(b.where+=` AND (${this.definitionExpression})`);const {timeOffset:l,timeExtent:r}=this;b.timeExtent=null!=l&&null!=r?r.offset(-l.value,l.unit):r||null;b.multipatchOption=
"multipatch"===this.geometryType?"xyFootprint":null;return b};e.deleteAttachments=function(b,a){return this.load().then(()=>this._checkAttachmentSupport(b)).then(()=>{if(!("deleteAttachments"in this.source))throw new p("SubtypeGroupLayer","Layer source does not support deleteAttachments capability");return this.source.deleteAttachments(b,a)})};e.fetchRecomputedExtents=function(b){return this.load({signal:null==b?void 0:b.signal}).then(()=>{if(this.source.fetchRecomputedExtents)return this.source.fetchRecomputedExtents(b);
throw new p("SubtypeGroupLayer","Layer source does not support fetchUpdates capability");})};e.getFieldDomain=function(b,a){return this._getLayerDomain(b)};e.getField=function(b){return this.fieldsIndex.get(b)};e.queryAttachments=function(b,a){b=Ea.from(b);return this.load().then(()=>{if(!this.get("capabilities.data.supportsAttachment"))throw new p("SubtypeGroupLayer","this layer doesn't support attachments");const {attachmentTypes:c,objectIds:g,globalIds:l,num:r,size:v,start:y,where:z}=b;if(!this.get("capabilities.operations.supportsQueryAttachments")){const Ia=
c&&c.length,Ja=l&&l.length,Ka=v&&v.length;if(g&&1<g.length||Ia||Ja||Ka||r||y||z)throw new p("SubtypeGroupLayer","when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported",b);}if(!(g&&g.length||z))throw new p("SubtypeGroupLayer","'objectIds' or 'where' are required to perform attachment query",b);if(!("queryAttachments"in this.source))throw new p("SubtypeGroupLayer","Layer source does not support queryAttachments capability",b);return this.source.queryAttachments(b)})};e.queryFeatures=
function(b,a){const c=B.from(b)||this.createQuery();b=A.unwrapOr(c.outFields,[]);b.find(g=>g===this.subtypeField)||(b.push(this.subtypeField),c.outFields=b);return this.load().then(()=>this.source.queryFeatures(c,a)).then(g=>{if(null!=g&&g.features)for(const l of g.features)l.layer=this._findSublayerForFeature(l),l.sourceLayer=this;return g})};e._findSublayerForFeature=function(b){const a=this.fieldsIndex.get(this.subtypeField),c=b.attributes[a.name];return this.sublayers.find(g=>g.subtypeCode===
c)};e.queryObjectIds=function(b,a){return this.load().then(()=>{if(this.source.queryObjectIds)return this.source.queryObjectIds(B.from(b)||this.createQuery(),a);throw new p("SubtypeGroupLayer","Layer source does not support queryObjectIds capability");})};e.queryFeatureCount=function(b,a){return this.load().then(()=>{if(this.source.queryFeatureCount)return this.source.queryFeatureCount(B.from(b)||this.createQuery(),a);throw new p("SubtypeGroupLayer","Layer source does not support queryFeatureCount capability");
})};e.queryExtent=function(b,a){return this.load().then(()=>{if(this.source.queryExtent)return this.source.queryExtent(B.from(b)||this.createQuery(),a);throw new p("SubtypeGroupLayer","Layer source does not support queryExtent capability");})};e.queryRelatedFeatures=function(b,a){return this.load().then(()=>{if("queryRelatedFeatures"in this.source)return this.source.queryRelatedFeatures(U.from(b),a);throw new p("SubtypeGroupLayer","Layer source does not support queryRelatedFeatures capability");})};
e.queryRelatedFeaturesCount=function(b,a){return this.load().then(()=>{if("queryRelatedFeaturesCount"in this.source)return this.source.queryRelatedFeaturesCount(U.from(b),a);throw new p("SubtypeGroupLayer","Layer source does not support queryRelatedFeaturesCount capability");})};e.read=function(b,a){const c=b.featureCollection;if(c){const g=c.layers;g&&1===g.length&&(m.prototype.read.call(this,g[0],a),null!=c.showLegend&&m.prototype.read.call(this,{showLegend:c.showLegend},a))}m.prototype.read.call(this,
b,a);a&&"service"===a.origin&&this.revert(["objectIdField","fields","timeInfo","spatialReference"],"service")};e.write=function(b,a){var c,g;a={...a,writeLayerSchema:null!=(c=null==(g=a)?void 0:g.writeLayerSchema)?c:this._hasMemorySource()};c=a.origin;g=a.layerContainerType;const l=a.messages;if(this.isTable){if("web-scene"===c||"web-map"===c&&"tables"!==g)return l&&l.push(new p("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Table source cannot be written to web scenes and web maps`,
{layer:this})),null;if(this._hasMemorySource())return l&&l.push(new p("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using an in-memory Table source cannot be written to web scenes and web maps`,{layer:this})),null}else if(this.loaded&&"web-map"===c&&"tables"===g)return l&&l.push(new p("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a non-table source cannot be written to tables in web maps`,{layer:this})),null;return m.prototype.write.call(this,
b,a)};e.serviceSupportsSpatialReference=function(b){return Ba.serviceSupportsSpatialReference(this,b)};e._readEditingEnabled=function(b,a,c){var g;let l=null==(g=b.layerDefinition)?void 0:g.capabilities;if(l)return this._hasEditingCapability(l);l=b.capabilities;return a&&"web-map"===(null==c?void 0:c.origin)&&!this._hasMemorySource()&&l?this._hasEditingCapability(l):!0};e._hasEditingCapability=function(b){return b.toLowerCase().split(",").map(a=>a.trim()).includes("editing")};e._writeEditingEnabled=
function(b,a,c,g){if(!b){var l,r;b=null!=(l=this.capabilities)&&null!=(r=l.operations)&&r.supportsSync?"Query,Sync":"Query";G.setDeepValue("layerDefinition.capabilities",b,a);!c||null!=g&&g.writeLayerSchema||(a.capabilities=b)}};e._checkAttachmentSupport=function(b){const {attributes:a}=b,{objectIdField:c}=this;if(!this.get("capabilities.data.supportsAttachment"))return Promise.reject(new p("SubtypeGroupLayer","this layer doesn't support attachments"));if(!b)return Promise.reject(new p("SubtypeGroupLayer",
"A feature is required to add/delete/update attachments"));if(!a)return Promise.reject(new p("SubtypeGroupLayer","'attributes' are required on a feature to query attachments"));if(!a[c])return Promise.reject(new p("SubtypeGroupLayer",`feature is missing the identifying attribute ${c}`))};e._getLayerDomain=function(b){return(b=this.fieldsIndex.get(b))?b.domain:null};e._fetchFirstLayerId=function(b){return Y(this.url,{query:{f:"json",...this.customParameters},responseType:"json",signal:b}).then(a=>
{if(a=a.data){if(Array.isArray(a.layers)&&0<a.layers.length)return a.layers[0].id;if(Array.isArray(a.tables)&&0<a.tables.length)return a.tables[0].id}})};e._initLayerProperties=function(){var b=w._asyncToGenerator(function*(a){this._set("source",a);a.sourceJSON&&(this.sourceJSON=a.sourceJSON,this.read(a.sourceJSON,{origin:"service",url:this.parsedUrl}));this._verifySource();this._verifyFields();I.fixRendererFields(this.renderer,this.fieldsIndex);I.fixTimeInfoFields(this.timeInfo,this.fieldsIndex);
return Da.loadStyleRenderer(this,{origin:"service"})});return function(a){return b.apply(this,arguments)}}();e.hasDataChanged=function(){var b=w._asyncToGenerator(function*(){var a;if(null!=(a=this.source)&&a.refresh)try{var c;const {dataChanged:g,updates:l}=yield null==(c=this.source)?void 0:c.refresh();A.isSome(l)&&(this.sourceJSON={...this.sourceJSON,...l},this.read(l,{origin:"service",url:this.parsedUrl}));if(g)return!0}catch{}if(this.definitionExpression)try{return(yield ea.parseWhereClause(this.definitionExpression,
this.fieldsIndex)).hasDateFunctions}catch{}return!1});return function(){return b.apply(this,arguments)}}();e._verifyFields=function(){const b=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+b+")");this.isTable||this._hasMemorySource()||-1!==b.search(/\/FeatureServer\//i)||this.fields&&this.fields.some(function(a){return"geometry"===a.type})||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+
b+")")};e._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new p("feature-layer:mixed-source-and-url","SubtypeGroupLayer cannot be created with both an in-memory source and a url");}else if(!this.url)throw new p("feature-layer:source-or-url-required","SubtypeGroupLayer requires either a url, a valid portal item or a source");};e._initMemorySource=function(b){b.forEach(a=>{a.layer=this;a.sourceLayer=this});this._handles.add([b.on("after-add",a=>{a.item.layer=this;a.item.sourceLayer=
this}),b.on("after-remove",a=>{a.item.layer=null;a.item.sourceLayer=null})],"fl-source")};e._resetMemorySource=function(b){b.forEach(a=>{a.layer=null;a.sourceLayer=null});this._handles.remove("fl-source")};e._hasMemorySource=function(){return!(this.url||!this.source)};e._readAttachmentCapabilities=function(b){const a={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1};b&&Array.isArray(b)&&b.forEach(c=>{const g=Ha[c.name];g&&(a[g]=!!c.isEnabled)});return a};
e._readDataCapabilities=function(b){return{isVersioned:k(b,"isDataVersioned",!1),supportsAttachment:k(b,"hasAttachments",!1),supportsM:k(b,"hasM",!1),supportsZ:k(b,"hasZ",!1)}};e._readMetadataCapabilities=function(b){return{supportsAdvancedFieldProperties:k(b,"supportsFieldDescriptionProperty",!1)}};e._readOperationsCapabilities=function(b,a){b=b?b.toLowerCase().split(",").map(y=>y.trim()):[];const c=-1!==b.indexOf("editing");let g=c&&-1!==b.indexOf("create"),l=c&&-1!==b.indexOf("delete"),r=c&&-1!==
b.indexOf("update");const v=-1!==b.indexOf("changetracking");!c||g||l||r||(g=l=r=!0);return{supportsCalculate:k(a,"supportsCalculate",!1),supportsTruncate:k(a,"supportsTruncate",!1),supportsValidateSql:k(a,"supportsValidateSql",!1),supportsAdd:g,supportsDelete:l,supportsEditing:c,supportsChangeTracking:v,supportsQuery:-1!==b.indexOf("query"),supportsQueryAttachments:k(a.advancedQueryCapabilities,"supportsQueryAttachments",!1),supportsResizeAttachments:k(a,"supportsAttachmentsResizing",!1),supportsSync:-1!==
b.indexOf("sync"),supportsUpdate:r,supportsExceedsLimitStatistics:k(a,"supportsExceedsLimitStatistics",!1)}};e._readQueryCapabilities=function(b){var a;const c=b.advancedQueryCapabilities,g=b.ownershipBasedAccessControlForFeatures,l=b.archivingInfo;var r=null==(a=this.url)?void 0:a.includes("MapServer");a=!aa("mapserver-pbf-enabled")&&r&&10.81>this.version;r=x.isHostedAgolService(this.url);const v=(b.supportedQueryFormats||"").split(",").reduce((y,z)=>{(z=z.toLowerCase().trim())&&y.add(z);return y},
new Set);return{supportsStatistics:k(c,"supportsStatistics",b.supportsStatistics),supportsPercentileStatistics:k(c,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:k(c,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:Ga(c),supportsCentroid:k(c,"supportsReturningGeometryCentroid",!1),supportsDistance:k(c,"supportsQueryWithDistance",!1),supportsDistinct:k(c,"supportsDistinct",b.supportsAdvancedQueries),supportsExtent:k(c,"supportsReturningQueryExtent",
!1),supportsGeometryProperties:k(c,"supportsReturningGeometryProperties",!1),supportsHavingClause:k(c,"supportsHavingClause",!1),supportsOrderBy:k(c,"supportsOrderBy",b.supportsAdvancedQueries),supportsPagination:k(c,"supportsPagination",!1),supportsQuantization:k(b,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:k(b,"supportsQuantizationEditMode",!1),supportsQueryGeometry:k(b,"supportsReturningQueryGeometry",!1),supportsResultType:k(c,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:k(c,
"supportsMaxRecordCountFactor",!1),supportsSqlExpression:k(c,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:k(b,"useStandardizedQueries",!1),supportsTopFeaturesQuery:k(c,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:k(g,"allowOthersToQuery",!0),supportsHistoricMoment:k(l,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:!a&&v.has("pbf"),supportsDisjointSpatialRelationship:k(c,"supportsDisjointSpatialRel",!1),supportsCacheHint:k(c,"supportsQueryWithCacheHint",!1),supportsDefaultSpatialReference:k(c,
"supportsDefaultSR",!1),supportsCompactGeometry:r,maxRecordCountFactor:F(b,"maxRecordCountFactor",void 0),maxRecordCount:F(b,"maxRecordCount",void 0),standardMaxRecordCount:F(b,"standardMaxRecordCount",void 0),tileMaxRecordCount:F(b,"tileMaxRecordCount",void 0)}};e._readQueryRelatedCapabilities=function(b){b=b.advancedQueryCapabilities;const a=k(b,"supportsAdvancedQueryRelated",!1);return{supportsPagination:k(b,"supportsQueryRelatedPagination",!1),supportsCount:a,supportsOrderBy:a}};e._readEditingCapabilities=
function(b){const a=b.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:k(b,"allowGeometryUpdates",!0),supportsGlobalId:k(b,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:k(b,"supportsReturnServiceEditsInSourceSpatialReference",!1),supportsRollbackOnFailure:k(b,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:k(b,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:k(b,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:k(a,
"allowAnonymousToDelete",!0),supportsDeleteByOthers:k(a,"allowOthersToDelete",!0),supportsUpdateByAnonymous:k(a,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:k(a,"allowOthersToUpdate",!0)}};e._handleSublayersChange=function(b,a){a&&(a.forEach(c=>{c.parent=null}),this.handles.remove("sublayers-owner"));b&&(b.forEach(c=>{c.parent=this}),this.handles.add([b.on("after-add",({item:c})=>{c.parent=this}),b.on("after-remove",({item:c})=>{c.parent=null})],"sublayers-owner"))};w._createClass(q,[{key:"createQueryVersion",
get:function(){this.commitProperty("definitionExpression");this.commitProperty("dynamicDataSource");this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("gdbVersion");this.commitProperty("historicMoment");this.commitProperty("returnZ");this.commitProperty("capabilities");this.commitProperty("returnM");return(this._get("createQueryVersion")||0)+1}},{key:"parsedUrl",get:function(){const b=this.url?H.urlToObject(this.url):null;null!=
b&&(null!=this.dynamicDataSource?b.path=H.join(b.path,"dynamicLayer"):null!=this.layerId&&(b.path=H.join(b.path,this.layerId.toString())));return b}},{key:"renderer",set:function(b){I.fixRendererFields(b,this.fieldsIndex);this._set("renderer",b)}},{key:"source",set:function(b){const a=this._get("source");a!==b&&(a&&a instanceof t&&this._resetMemorySource(a),b&&b instanceof t&&this._initMemorySource(b),this._set("source",b))}},{key:"url",set:function(b){b=x.sanitizeUrlWithLayerId({layer:this,url:b,
nonStandardUrlAllowed:!0,logger:V});this._set("url",b.url);null!=b.layerId&&this._set("layerId",b.layerId)}}]);return q}(oa.BlendLayer(ua.TemporalLayer(ta.ScaleRangeLayer(sa.RefreshableLayer(na.ArcGISService(qa.OperationalLayer(ra.PortalLayer(da.MultiOriginJSONMixin(pa.CustomParametersMixin(d.HandleOwnerMixin(ma)))))))))));f.__decorate([h.property({readOnly:!0,json:{read:!1}})],d.prototype,"capabilities",void 0);f.__decorate([n.reader("service","capabilities","advancedQueryCapabilities allowGeometryUpdates allowUpdateWithoutMValues archivingInfo capabilities hasAttachments hasM hasZ maxRecordCount maxRecordCountFactor ownershipBasedAccessControlForFeatures standardMaxRecordCount supportedQueryFormats supportsAdvancedQueries supportsApplyEditsWithGlobalIds supportsAttachmentsByUploadId supportsAttachmentsResizing supportsCalculate supportsCoordinatesQuantization supportsExceedsLimitStatistics supportsFieldDescriptionProperty supportsQuantizationEditMode supportsRollbackOnFailureParameter supportsStatistics supportsTruncate supportsValidateSql tileMaxRecordCount useStandardizedQueries".split(" "))],
d.prototype,"readCapabilities",null);f.__decorate([h.property({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],d.prototype,"charts",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"createQueryVersion",null);f.__decorate([h.property({type:String,json:{read:{source:"layerDefinition.copyrightText"},origins:{service:{read:{source:"copyrightText"}}}}})],d.prototype,"copyright",void 0);f.__decorate([h.property({type:String,json:{read:{source:"layerDefinition.displayField"},
origins:{service:{read:{source:"displayField"}}}}})],d.prototype,"displayField",void 0);f.__decorate([h.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],d.prototype,"definitionExpression",void 0);f.__decorate([h.property({types:P.symbolTypes,readOnly:!0})],d.prototype,"defaultSymbol",void 0);f.__decorate([h.property({type:Ca.DataLayerSource})],d.prototype,"dynamicDataSource",void 0);f.__decorate([h.property({readOnly:!0})],
d.prototype,"editFieldsInfo",void 0);f.__decorate([h.property({type:Boolean})],d.prototype,"editingEnabled",void 0);f.__decorate([n.reader(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],d.prototype,"readEditingEnabled",null);f.__decorate([n.reader("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],d.prototype,"readEditingEnabledFromWebMap",null);f.__decorate([D.writer(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],
d.prototype,"writeEditingEnabled",null);f.__decorate([D.writer("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],d.prototype,"writeEditingEnabledToWebMap",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"editingInfo",void 0);f.__decorate([n.reader("editingInfo")],d.prototype,"readEditingInfo",null);f.__decorate([h.property(u.elevationInfo)],d.prototype,"elevationInfo",void 0);f.__decorate([h.property(va.featureReductionProperty)],d.prototype,
"featureReduction",void 0);f.__decorate([h.property({...C.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{read:!0},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:J}}}}})],d.prototype,"fields",void 0);f.__decorate([h.property(C.fieldsIndex)],d.prototype,"fieldsIndex",void 0);f.__decorate([h.property({type:ya,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"},origins:{"web-scene":{write:!1}}}})],d.prototype,"floorInfo",
void 0);f.__decorate([h.property({type:ja,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"formTemplate",void 0);f.__decorate([h.property({type:ka,json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}})],d.prototype,"fullExtent",void 0);f.__decorate([h.property()],d.prototype,"gdbVersion",void 0);f.__decorate([h.property({readOnly:!0,type:xa,json:{read:{source:"geometryProperties"}}})],d.prototype,"geometryFieldsInfo",void 0);
f.__decorate([h.property({type:"point polygon polyline multipoint multipatch mesh".split(" "),json:{origins:{service:{read:K.read},"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:J,writer(m,q,e){(m=m?K.toJSON(m):null)&&G.setDeepValue(e,m,q)}}}},read:{source:"layerDefinition.geometryType",reader:K.read}}})],d.prototype,"geometryType",void 0);f.__decorate([h.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}})],d.prototype,"hasM",void 0);
f.__decorate([h.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasZ"}}})],d.prototype,"hasZ",void 0);f.__decorate([h.property({readOnly:!0,type:la})],d.prototype,"heightModelInfo",void 0);f.__decorate([h.property({type:Date})],d.prototype,"historicMoment",void 0);f.__decorate([h.property(u.id)],d.prototype,"id",void 0);f.__decorate([h.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],d.prototype,"isTable",void 0);f.__decorate([n.reader("service",
"isTable",["type","geometryType"]),n.reader("isTable",["layerDefinition.type","layerDefinition.geometryType"])],d.prototype,"readIsTable",null);f.__decorate([D.writer("web-map","isTable")],d.prototype,"writeIsTable",null);f.__decorate([h.property(u.opacityDrawingInfo)],d.prototype,"opacity",void 0);f.__decorate([h.property({type:Number,json:{origins:{service:{read:{source:"id"}}},read:!1}})],d.prototype,"layerId",void 0);f.__decorate([h.property(u.legendEnabled)],d.prototype,"legendEnabled",void 0);
f.__decorate([h.property({type:["show","hide"]})],d.prototype,"listMode",void 0);f.__decorate([h.property(u.minScale)],d.prototype,"minScale",void 0);f.__decorate([n.reader("service","minScale",["minScale","effectiveMinScale"])],d.prototype,"readMinScale",null);f.__decorate([h.property(u.maxScale)],d.prototype,"maxScale",void 0);f.__decorate([n.reader("service","maxScale",["maxScale","effectiveMaxScale"])],d.prototype,"readMaxScale",null);f.__decorate([h.property({type:String})],d.prototype,"globalIdField",
void 0);f.__decorate([n.reader("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"]),n.reader("service","globalIdField",["globalIdField","fields"])],d.prototype,"readGlobalIdFieldFromService",null);f.__decorate([h.property({type:String,json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:J}}}}})],d.prototype,"objectIdField",void 0);f.__decorate([n.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"]),n.reader("service",
"objectIdField",["objectIdField","fields"])],d.prototype,"readObjectIdFieldFromService",null);f.__decorate([h.property({value:"ArcGISSubtypeGroupLayer",type:["ArcGISSubtypeGroupLayer"]})],d.prototype,"operationalLayerType",void 0);f.__decorate([h.property(C.outFields)],d.prototype,"outFields",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"parsedUrl",null);f.__decorate([h.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],d.prototype,"path",void 0);f.__decorate([h.property({type:[za],
readOnly:!0})],d.prototype,"relationships",void 0);f.__decorate([h.property({types:O.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:O.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(m,q,e){return{ignoreOrigin:null==e?void 0:e.writeLayerSchema}}}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy(m,q,e){return{ignoreOrigin:null==e?void 0:e.writeLayerSchema}}}}})],d.prototype,"renderer",
null);f.__decorate([n.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),n.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],d.prototype,"readRenderer",null);f.__decorate([h.property()],d.prototype,"sourceJSON",void 0);f.__decorate([h.property({type:Boolean})],d.prototype,"returnM",void 0);f.__decorate([h.property({type:Boolean})],d.prototype,"returnZ",void 0);f.__decorate([h.property(u.screenSizePerspectiveEnabled)],d.prototype,"screenSizePerspectiveEnabled",
void 0);f.__decorate([h.property()],d.prototype,"source",null);f.__decorate([fa.cast("source")],d.prototype,"castSource",null);f.__decorate([n.reader("portal-item","source",["featureSet"]),n.reader("web-map","source",["featureSet"])],d.prototype,"readSource",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"serviceDefinitionExpression",void 0);f.__decorate([n.reader("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],d.prototype,"readServiceDefinitionExpression",
null);f.__decorate([h.property({type:R,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:{source:"layerDefinition.extent.spatialReference"}}})],d.prototype,"spatialReference",void 0);f.__decorate([h.property({type:String})],d.prototype,"subtypeField",void 0);f.__decorate([h.property({type:t.ofType(E),json:{origins:{service:{read:{source:"subtypes",reader:(m,q,e)=>{m=m.map(b=>new E({subtypeCode:b.code,renderer:N.read(q.drawingInfo.renderer,q,e),title:b.name}));return new (t.ofType(E))(m)}}}}}})],
d.prototype,"sublayers",void 0);f.__decorate([h.property({type:Aa})],d.prototype,"timeInfo",void 0);f.__decorate([h.property()],d.prototype,"title",void 0);f.__decorate([n.reader("service","title",["name"]),n.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],d.prototype,"readTitle",null);f.__decorate([n.reader("web-map","title",["layerDefinition.name","title"])],d.prototype,"readTitleFromWebMap",null);f.__decorate([h.property({type:String})],d.prototype,"sublayerTitleMode",
void 0);f.__decorate([h.property({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],d.prototype,"trackIdField",void 0);f.__decorate([h.property({json:{read:!1}})],d.prototype,"type",void 0);f.__decorate([h.property({type:String})],d.prototype,"typeIdField",void 0);f.__decorate([n.reader("service","typeIdField"),n.reader("typeIdField",["layerDefinition.typeIdField"])],d.prototype,"readTypeIdField",null);f.__decorate([h.property({readOnly:!0,json:{write:!1}})],d.prototype,"serverGens",void 0);
f.__decorate([h.property({type:t.ofType(T.FeatureIndex),readOnly:!0})],d.prototype,"indexes",void 0);f.__decorate([h.property(u.url)],d.prototype,"url",null);f.__decorate([D.writer("url")],d.prototype,"writeUrl",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"userIsAdmin",void 0);f.__decorate([h.property({json:{origins:{service:{read:!0}},read:!1}})],d.prototype,"version",void 0);f.__decorate([n.reader("service","version","currentVersion capabilities drawingInfo hasAttachments htmlPopupType relationships timeInfo typeIdField types".split(" "))],
d.prototype,"readVersion",null);f.__decorate([h.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],d.prototype,"visible",void 0);f.__decorate([n.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],d.prototype,"readVisible",null);d=f.__decorate([ha.subclass("esri.layers.SubtypeGroupLayer")],d);const L=ia.createTypeReader({types:P.symbolTypesRenderer});return d});