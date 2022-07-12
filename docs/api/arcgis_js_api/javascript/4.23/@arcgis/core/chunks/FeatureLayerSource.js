/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../geometry.js";import e from"../Graphic.js";import s from"../request.js";import r from"../TimeExtent.js";import o from"../core/Error.js";import{i,h as a,b as n}from"../core/lang.js";import{J as l}from"./jsonMap.js";import{L as p}from"./Loadable.js";import{s as u}from"./object.js";import{debounce as m}from"../core/promiseUtils.js";import{dataComponents as d}from"../core/urlUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import h from"../geometry/Extent.js";import{fromJSON as j}from"../geometry/support/jsonUtils.js";import{a as b}from"./clientSideDefaults.js";import{u as f}from"./FeatureIndex.js";import{p as g}from"./executeForTopCount.js";import F from"../tasks/QueryTask.js";import S from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./Logger.js";import"../config.js";import"./string.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"./writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../PopupTemplate.js";import"../core/Collection.js";import"./Evented.js";import"./shared.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils3.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils4.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"./Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./timeUtils.js";import"./QueryEngineCapabilities.js";import"./defaultsJSON.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"../core/reactiveUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./assets.js";import"../intl.js";import"./messages.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./utils5.js";import"./scaleUtils.js";import"./floorFilterUtils.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/Query.js";import"./DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"./compilerUtils.js";import"./featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"./executeQueryJSON.js";import"../tasks/Task.js";const R=new l({originalAndCurrentFeatures:"original-and-current-features",none:"none"});const I=new Set(["Feature Layer","Table"]);let q=class extends p{constructor(){super(...arguments),this.type="feature-layer",this.refresh=m((async()=>{var t,e;await this.load();const s=null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate;if(null==s)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const r=s!==(null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate);return{dataChanged:r,updates:r?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(t){const e=i(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:s,infoFor3D:r,gdbVersion:o,spatialReference:i,fieldsIndex:l}=this.layer,p=a("featurelayer-pbf")&&t&&n(r)?"pbf":"json";return new F({url:e.path,format:p,fieldsIndex:l,infoFor3D:r,dynamicDataSource:s,gdbVersion:o,sourceSpatialReference:i})}async addAttachment(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],o=this.layer.parsedUrl.path+"/"+r+"/addAttachment",i=this._getLayerRequestOptions(),a=this._getFormDataForAttachment(e,i.query);try{const t=await s(o,{body:a});return this._createFeatureEditResult(t.data.addAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}async updateAttachment(t,e,r){await this.load();const o=t.attributes[this.layer.objectIdField],i=this.layer.parsedUrl.path+"/"+o+"/updateAttachment",a=this._getLayerRequestOptions({query:{attachmentId:e}}),n=this._getFormDataForAttachment(r,a.query);try{const t=await s(i,{body:n});return this._createFeatureEditResult(t.data.updateAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(o,t)}}async applyEdits(t,e){await this.load();const r=t.addFeatures.map(this._serializeFeature,this),o=t.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(t.deleteFeatures,null==e?void 0:e.globalIdUsed);f(r,o,this.layer.spatialReference);const a=[],n=[],l=[...t.deleteAttachments];for(const e of t.addAttachments)a.push(await this._serializeAttachment(e));for(const e of t.updateAttachments)n.push(await this._serializeAttachment(e));const p=a.length||n.length||l.length?{adds:a,updates:n,deletes:l}:null,u={gdbVersion:(null==e?void 0:e.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==e?void 0:e.rollbackOnFailureEnabled,useGlobalIds:null==e?void 0:e.globalIdUsed,returnEditMoment:null==e?void 0:e.returnEditMoment,usePreviousEditMoment:null==e?void 0:e.usePreviousEditMoment,sessionId:null==e?void 0:e.sessionId};null!=e&&e.returnServiceEditsOption?(u.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:o,deletes:i,attachments:p}]),u.returnServiceEditsOption=R.toJSON(null==e?void 0:e.returnServiceEditsOption),u.returnServiceEditsInSourceSR=null==e?void 0:e.returnServiceEditsInSourceSR):(u.adds=r.length?JSON.stringify(r):null,u.updates=o.length?JSON.stringify(o):null,u.deletes=i.length?null!=e&&e.globalIdUsed?JSON.stringify(i):i.join(","):null,u.attachments=p&&JSON.stringify(p));const m=this._getLayerRequestOptions({method:"post",query:u}),d=null!=e&&e.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,c=await s(d+"/applyEdits",m);return this._createEditsResult(c)}async deleteAttachments(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],o=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await s(o,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then((async()=>{const e=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:o,url:i}=this.layer,{data:a}=await s(`${i}/${o}`,e),{id:n,extent:l,fullExtent:p,timeExtent:u}=a,m=l||p;return{id:n,fullExtent:m&&h.fromJSON(m),timeExtent:u&&r.fromJSON({start:u[0],end:u[1]})}}))}async queryAttachments(t,e={}){const{parsedUrl:r}=this.layer,o=r.path;await this.load();const i=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:e}=t,r=[];for(const t of e){const e=o+"/"+t+"/attachments";r.push(s(e,i))}return Promise.all(r).then((t=>e.map(((e,s)=>({parentObjectId:e,attachmentInfos:t[s].data.attachmentInfos}))))).then((t=>g(t,o)))}return this.queryTask.executeAttachmentQuery(t,i)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...null==t?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:r}=await s(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=r}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!I.has(r))throw new o("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(t){var e;if("Table"!==t.type&&t.geometryType&&(null==t||null==(e=t.drawingInfo)||!e.renderer)&&!t.defaultSymbol){const e=b(t.geometryType).renderer;u("drawingInfo.renderer",e,t)}return"esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t){const{geometry:e,attributes:s}=t;return n(e)?{attributes:s}:"mesh"===e.type||"extent"===e.type?null:{geometry:e.toJSON(),attributes:s}}async _serializeAttachment(t){const{feature:e,attachment:s}=t,{globalId:r,name:o,contentType:i,data:a,uploadId:n}=s,l={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(l.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),n)l.uploadId=n;else if(a){const t=await async function(t){if("string"==typeof t){return d(t)||{data:t}}return new Promise(((e,s)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(d(r.result)),r.onerror=t=>s(t)}))}(a);l.contentType=t.mediaType,l.data=t.data,a instanceof File&&(l.name=a.name)}return o&&(l.name=o),i&&(l.contentType=i),l}_getFeatureIds(t,e){const s=t[0];return s?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map((t=>t.attributes&&t.attributes[e]))}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map((t=>t.objectId))}_getGlobalIdsFromFeatureIdentifier(t){return t.map((t=>t.globalId))}_createEditsResult(t){var e;const s=t.data,{layerId:r}=this.layer,o=[];let i=null;if(Array.isArray(s))for(const t of s)o.push({id:t.id,editedFeatures:t.editedFeatures}),t.id===r&&(i={addResults:t.addResults,updateResults:t.updateResults,deleteResults:t.deleteResults,attachments:t.attachments,editMoment:t.editMoment});else i=s;const a=null==(e=i)?void 0:e.attachments,n={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(n.editMoment=i.editMoment),o.length>0){n.editedFeatureResults=[];for(const t of o){const{adds:e,updates:s,deletes:r,spatialReference:o}=t.editedFeatures,i=o?new S(o):null;n.editedFeatureResults.push({layerId:t.id,editedFeatures:{adds:(null==e?void 0:e.map((t=>this._createEditedFeature(t,i))))||[],updates:(null==s?void 0:s.map((t=>({original:this._createEditedFeature(t[0],i),current:this._createEditedFeature(t[1],i)}))))||[],deletes:(null==r?void 0:r.map((t=>this._createEditedFeature(t,i))))||[],spatialReference:i}})}}return n}_createEditedFeature(t,s){return new e({attributes:t.attributes,geometry:j({...t.geometry,spatialReference:s})})}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new o("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const s=e.details.messages&&e.details.messages[0]||e.message,r=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new o("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const t in e){const r=e[t];null!=r&&(s.set?s.set(t,r):s.append(t,r))}return s}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:s,dynamicDataSource:r}=this.layer;return{...t,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}};t([c()],q.prototype,"type",void 0),t([c({constructOnly:!0})],q.prototype,"layer",void 0),t([c({readOnly:!0})],q.prototype,"queryTask",null),q=t([y("esri.layers.graphics.sources.FeatureLayerSource")],q);const _=q;export{_ as default};