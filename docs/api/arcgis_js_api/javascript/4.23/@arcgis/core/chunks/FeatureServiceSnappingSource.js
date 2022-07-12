/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{HandleOwnerMixin as r,HandleOwner as s}from"../core/HandleOwner.js";import{m as o,d as i}from"./handleUtils.js";import{i as p,b as n}from"../core/lang.js";import{initial as l,watch as a,sync as m}from"../core/reactiveUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{s as j}from"./mathUtils.js";import{c}from"./vec4f64.js";import{c as y,g as f,h}from"./boundedPlane.js";import{s as g}from"./layerViewUtils.js";import{init as b}from"../core/watchUtils.js";import{V as v}from"./FeatureTileDescriptor3D.js";import{c as S}from"./queryEngineUtils.js";import w from"../core/Handles.js";import I from"../geometry/Polygon.js";import{t as O,f as k}from"./aaBoundingRect.js";import{T as U}from"./TileTreeDebugger.js";import{whenOrAbort as T}from"../core/promiseUtils.js";import{W as C}from"./WorkerHandle.js";import{f as H}from"./typeUtils.js";import P from"../geometry/Point.js";import F from"../layers/support/LOD.js";import M from"../layers/support/TileInfo.js";import{d as R}from"./debugFlags.js";import"./deprecate.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./get.js";import"./utils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Error.js";import"../core/Collection.js";import"./Evented.js";import"./shared.js";import"./common.js";import"./vectorStacks.js";import"./byteSizeEstimations.js";import"./quatf64.js";import"./mat4f64.js";import"./vec2f64.js";import"./mat4.js";import"./sphere.js";import"./ray.js";import"./lineSegment.js";import"./plane.js";import"../widgets/Sketch/SketchViewModel.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"./enumeration.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polyline.js";import"./extentUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils3.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils4.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"./Loadable.js";import"./Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"./Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../geometry/projection.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../layers/GraphicsLayer.js";import"./GraphicsCollection.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../layers/Layer.js";import"./BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./ScaleRangeLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./DOMContainer.js";import"./domUtils.js";import"./projector.js";import"./widgetUtils.js";import"../widgets/Popup.js";import"../intl.js";import"./messages.js";import"./throttle.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"./jsxWidgetSupport.js";import"./widgetThemeUtils.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"./languageUtils.js";import"./datetime.js";import"./number3.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils5.js";import"./scaleUtils.js";import"./floorFilterUtils.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./compilerUtils.js";import"./featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"./executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"./FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"./CustomParametersMixin.js";import"./FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"./OperationalLayer.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./OrderedLayer.js";import"./PortalLayer.js";import"./asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./RefreshableLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaultsJSON.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./versionUtils.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./utils6.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./InputManager.js";import"./Queue.js";import"./actions.js";import"./GoTo.js";import"./elevationInfoUtils.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"./keybindings.js";import"./vec2.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"../core/sql/WhereClause.js";import"./utils11.js";import"./generateRendererUtils.js";import"./projectionSupport.js";import"./json.js";import"./utils17.js";import"./Settings2.js";import"./RightAngleSnappingHint.js";import"./geometry2dUtils.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./screenUtils2.js";import"./PointSnappingHint.js";function D(e,t){return h(t.extent,L),f(L,j(E,e.x,e.y,0))}const L=y(),E=c();let x=class extends(r(t)){constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=p(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort(((e,r)=>D(t,e)-D(t,r))),e}_scaleEnabled(){return g(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||n(this.tileInfo))return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=t,s=[];for(const{row:o,colFrom:i,colTo:p}of e)for(let e=i;e<=p;e++){const i={id:null,level:r,row:o,col:t.normalizeCol(e)};this.tileInfo.updateTileInfo(i),s.push(i)}return s}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featuresTilingScheme)?void 0:t.tileInfo)?e:null}get tileSize(){return p(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.handles.add(this.watch("view.state.viewpoint",(()=>this.notifyChange("tilesCoveringView")),!0))}};e([u({readOnly:!0})],x.prototype,"tiles",null),e([u({readOnly:!0})],x.prototype,"_scaleEnabled",null),e([u({readOnly:!0})],x.prototype,"tilesCoveringView",null),e([u({readOnly:!0})],x.prototype,"tileInfo",null),e([u({readOnly:!0})],x.prototype,"tileSize",null),e([u({constructOnly:!0})],x.prototype,"view",void 0),e([u({constructOnly:!0})],x.prototype,"layer",void 0),e([u()],x.prototype,"pointOfInterest",void 0),x=e([d("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],x);let V=class extends s{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=this.effectivePointOfInterest;if(p(t)){const r=e.map((e=>D(t,e)));for(let s=1;s<r.length;s++)if(r[s-1]>r[s])return e.sort(((e,r)=>D(t,e)-D(t,r))),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles(null==(e=this.view.featureTiles)||null==(t=e.tiles)?void 0:t.toArray()).map(z)}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tilingScheme.toTileInfo())?e:null}get tileSize(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tileSize)?e:256}get effectivePointOfInterest(){var e;const t=this.pointOfInterest;return p(t)?t:null==(e=this.view.pointsOfInterest)?void 0:e.focus.location}initialize(){this.handles.add(b(this.view,"featureTiles",(e=>{this.handles.remove(_),e&&this.handles.add(e.addClient(),_)})))}_filterTiles(e){if(n(e))return[];return e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>A&&e.measures.visibility===v.VISIBLE_ON_SURFACE))}};function z({lij:[e,t,r],extent:s}){return{id:`${e}/${t}/${r}`,level:e,row:t,col:r,extent:s}}e([u({readOnly:!0})],V.prototype,"tiles",null),e([u({readOnly:!0})],V.prototype,"tilesCoveringView",null),e([u({readOnly:!0})],V.prototype,"tileInfo",null),e([u({readOnly:!0})],V.prototype,"tileSize",null),e([u({constructOnly:!0})],V.prototype,"view",void 0),e([u()],V.prototype,"pointOfInterest",void 0),e([u()],V.prototype,"effectivePointOfInterest",null),V=e([d("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],V);const A=50,_="feature-tiles";let N=class extends U{constructor(e){super(e),this.handles=new w}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.handles.add(o((()=>clearInterval(e))))}destroy(){this.handles.destroy()}getTiles(){if(!this.debugInfo)return[];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this.debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state)}));const r=r=>{var s;const o=t.get(r),i=null!=(s=e.get(r))?s:"?";return o?`${o}:${i}\n${r}`:`store:${i}\n${r}`},s=new Map;return this.debugInfo.storedTiles.forEach((e=>{s.set(e.data.id,e.data)})),this.debugInfo.pendingTiles.forEach((e=>{s.set(e.data.id,e.data)})),Array.from(s.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:I.fromExtent(O(e.extent,this.view.spatialReference)),label:r(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this.debugInfo=e,this.update()}))}};e([u({constructOnly:!0})],N.prototype,"handle",void 0),N=e([d("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],N);let B=class extends s{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy()}initialize(){this.workerHandle=new J(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",(({updating:e})=>this.workerHandleUpdating=e)),this.workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const r=this._serviceInfoFromLayer(e.layer);if(n(r))return;const s={configuration:this._convertConfiguration(e.configuration),serviceInfo:r,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",s,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const r=this._convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",r,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const r={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:p(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(r,t)}async updateTiles(e,t){const r={tiles:e.tiles,tileInfo:p(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",r,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var r,s,o,i,p,n;const l=this.editId++,a={id:l};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",a,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));const m=await this.updatingHandles.addPromise(T(e.result,t)),u={id:l,edits:{addedFeatures:null!=(r=null==(s=m.addedFeatures)?void 0:s.map((({objectId:e})=>e)))?r:[],deletedFeatures:null!=(o=null==(i=m.deletedFeatures)?void 0:i.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t}))))?o:[],updatedFeatures:null!=(p=null==(n=m.updatedFeatures)?void 0:n.map((({objectId:e})=>e)))?p:[]}};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",u,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}_convertConfiguration(e){return{filter:p(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}_serviceInfoFromLayer(e){var t;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map((e=>e.toJSON())),geometryType:H.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null==(t=e.timeInfo)?void 0:t.toJSON()}}};e([u({constructOnly:!0})],B.prototype,"schedule",void 0),e([u({readOnly:!0})],B.prototype,"updating",null),e([u({readOnly:!0})],B.prototype,"availability",void 0),e([u()],B.prototype,"workerHandleUpdating",void 0),B=e([d("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],B);class J extends C{constructor(e){super("FeatureServiceSnappingSourceWorker","fetchCandidates",e,{strategy:"dedicated"})}getTransferList(){return[]}}let Q=class extends t{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[{id:"0/0/0",level:0,row:0,col:0,extent:k(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new M({origin:new P({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new F({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};e([u({readOnly:!0})],Q.prototype,"tiles",null),e([u({readOnly:!0})],Q.prototype,"tileInfo",null),e([u({readOnly:!0})],Q.prototype,"tileSize",null),e([u({constructOnly:!0})],Q.prototype,"layer",void 0),e([u()],Q.prototype,"pointOfInterest",void 0),Q=e([d("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],Q);let G=class extends(r(t)){constructor(e){super(e)}get updateTilesParameters(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){const e=this.view;if(p(e))switch(e.type){case"2d":this.tilesOfInterest=new x({view:e,layer:this.layer}),this.workerHandle=new B;break;case"3d":{const t=e.resourceController;this.tilesOfInterest=new V({view:e}),this.workerHandle=new B({schedule:e=>t.schedule(e)});break}}else this.tilesOfInterest=new Q({layer:this.layer}),this.workerHandle=new B;this.handles.add([i(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add((()=>this.updateTilesParameters),(()=>this.workerHandle.updateTiles(this.updateTilesParameters,null)),l),this.handles.add([a((()=>this.configuration),(e=>this.workerHandle.configure(e,null)),m)]),p(e)&&this.handles.add(a((()=>R.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(t=>{t&&!this.debug?(this.debug=new N({view:e,handle:this.workerHandle}),this.handles.add(i(this.debug),"debug")):!t&&this.debug&&this.handles.remove("debug")}),l)),this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this.workerHandle.applyEdits(e,null)})))}refresh(){this.workerHandle.refresh(null)}async fetchCandidates(e,t){return this.tilesOfInterest.pointOfInterest=e.coordinateHelper.vectorToPoint(e.point),(await this.workerHandle.fetchCandidates({...e,filter:null},t)).candidates.map((t=>S(t,e.coordinateHelper)))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};e([u({constructOnly:!0})],G.prototype,"spatialReference",void 0),e([u({constructOnly:!0})],G.prototype,"layerSource",void 0),e([u({constructOnly:!0})],G.prototype,"view",void 0),e([u()],G.prototype,"tilesOfInterest",void 0),e([u({readOnly:!0})],G.prototype,"updateTilesParameters",null),e([u({readOnly:!0})],G.prototype,"updating",null),e([u({readOnly:!0})],G.prototype,"configuration",null),e([u({readOnly:!0})],G.prototype,"availability",null),G=e([d("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],G);export{G as FeatureServiceSnappingSource};