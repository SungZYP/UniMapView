/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import e from"../../../core/Accessor.js";import o from"../../../core/Collection.js";import{E as i}from"../../../chunks/Evented.js";import{W as s,HandleOwnerMixin as n}from"../../../core/HandleOwner.js";import{i as r,b as a,I as l,r as p,J as c,x as u,m}from"../../../core/lang.js";import{property as h}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import{subclass as d}from"../../../core/accessorSupport/decorators/subclass.js";import{b as y,j as g,h as j,n as v,e as b,f,R as C,t as _,p as k,L as S}from"../../../chunks/mathUtils.js";import{A as O}from"../../../chunks/AnalysisView3D.js";import T from"../../../Color.js";import"../../../geometry.js";import L from"../../../core/Handles.js";import{h as w,m as I}from"../../../chunks/handleUtils.js";import{L as V}from"../../../chunks/Logger.js";import{createTask as P,ignoreAbortErrors as E}from"../../../core/promiseUtils.js";import{watch as A,initial as D,syncAndInitial as R,sync as U}from"../../../core/reactiveUtils.js";import{projectPoint as x,projectBoundingRect as z}from"../../../geometry/projection.js";import{a as M,j as H,d as F}from"../../../chunks/aaBoundingRect.js";import{e as G,c as B}from"../../../chunks/ray.js";import{LineOfSightAnalysisResult as N}from"./LineOfSightAnalysisResult.js";import{L as W}from"../../../chunks/LineOfSightRayIntersector.js";import{l as q,a as J,L as Q}from"../../../chunks/LineVisualElement.js";import{I as K}from"../../../chunks/Intersector.js";import{t as X}from"../../../chunks/intersectorUtilsConversions.js";import{I as Y,T as Z}from"../../../chunks/Scheduler.js";import $ from"../../../geometry/Point.js";import{c as tt}from"../../../chunks/mat4f64.js";import"../../../chunks/deprecate.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/Error.js";import"../../../chunks/object.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/shared.js";import"../../../chunks/common.js";import"../../../chunks/Promise.js";import"../../../chunks/colorUtils.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/JSONSupport.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../chunks/jsonMap.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/projectionEllipsoid.js";import"../../../chunks/mat4.js";import"../../../chunks/pe.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";import"../../../chunks/vectorStacks.js";import"../../../chunks/byteSizeEstimations.js";import"../../../chunks/quatf64.js";import"../../../chunks/vec2f64.js";import"../../../chunks/vec4f64.js";import"../../../chunks/screenUtils.js";import"../../../chunks/dehydratedFeatures.js";import"../../../chunks/aaBoundingBox.js";import"../../../chunks/quantizationUtils.js";import"../../../layers/support/Field.js";import"../../../chunks/enumeration.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/fieldType.js";import"../../../chunks/ray2.js";import"../../../chunks/vec2.js";import"../../../chunks/tileUtils.js";import"../../../chunks/ElevationProvider.js";import"../../../chunks/vec4f32.js";import"../../../chunks/Object3DVisualElement.js";import"../../../chunks/VisualElement.js";import"../../../chunks/basicInterfaces.js";import"../../../chunks/DefaultBufferWriter.js";import"../../../chunks/sphere.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/Material.js";import"../../../chunks/VertexAttribute.js";import"../../../chunks/ViewingMode.js";import"../../../chunks/Util.js";import"../../../chunks/utils2.js";import"../../../chunks/doublePrecisionUtils.js";import"../../../chunks/frustum.js";import"../../../chunks/plane.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../layers/support/fieldUtils.js";import"../../../chunks/arcadeOnDemand.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../chunks/date.js";import"../../../chunks/number.js";import"../../../chunks/locale.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../chunks/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/TextContent.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../support/actions/ActionBase.js";import"../../../chunks/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../symbols/Symbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils3.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils4.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../chunks/persistableUrlUtils.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/collectionUtils.js";import"../../../portal/Portal.js";import"../../../chunks/Loadable.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../chunks/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/Symbol3DVerticalOffset.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../chunks/glUtil3D.js";import"../../../chunks/geometryDataUtils.js";import"../../../chunks/triangle.js";import"../../../chunks/lineSegment.js";import"../../../chunks/BufferView.js";import"../../../chunks/ShaderBuilder.js";import"../../../chunks/mat4f32.js";import"../../../chunks/enums.js";import"../../../chunks/Texture.js";import"../../../chunks/context-util.js";import"../../../chunks/VertexElementDescriptor.js";import"../../../chunks/VertexArrayObject.js";import"../../../chunks/RenderSlot.js";import"../../../chunks/InterleavedLayout.js";import"../../../chunks/types.js";import"../../../chunks/lineUtils.js";import"../../../chunks/triangulationUtils.js";import"../../../chunks/earcut.js";import"../../../chunks/deduplicate.js";import"../../../chunks/compilerUtils.js";import"../../../core/watchUtils.js";import"../../../chunks/vec2f32.js";import"../../../chunks/FramebufferObject.js";import"../../../chunks/NestedMap.js";import"../../../chunks/Camera.js";import"../../../chunks/glUtil.js";import"../../../chunks/OrderIndependentTransparency.js";import"../../../chunks/VisualVariables.glsl.js";import"../../../chunks/vec3f32.js";import"../../../chunks/weather.js";import"../environment/CloudyWeather.js";import"../environment/FoggyWeather.js";import"../environment/RainyWeather.js";import"../environment/SunnyWeather.js";import"../../../chunks/ReadShadowMap.glsl.js";import"../../../chunks/MemCache.js";import"../../../chunks/heatmapUtils.js";import"../../../chunks/ScreenSpacePass.js";import"../../../chunks/floatRGBA.js";import"../../../chunks/boundedPlane.js";import"../../../chunks/verticalOffsetUtils.js";import"../../../chunks/mat3.js";import"../../../chunks/quat.js";import"../../../chunks/debugFlags.js";let et=class extends e{constructor(t){super(t),this.innerWidth=2,this.outerWidth=8,this.visibleInnerColor=new T([3,252,111,1]),this.visibleOuterColor=new T([3,252,111,.15]),this.occludedInnerColor=new T([252,3,69,1]),this.occludedOuterColor=new T([252,3,69,.1]),this.undefinedInnerColor=new T([255,255,255,1]),this.undefinedOuterColor=new T([127,127,127,.2])}};t([h({type:Number})],et.prototype,"innerWidth",void 0),t([h({type:Number})],et.prototype,"outerWidth",void 0),t([h({type:T})],et.prototype,"visibleInnerColor",void 0),t([h({type:T})],et.prototype,"visibleOuterColor",void 0),t([h({type:T})],et.prototype,"occludedInnerColor",void 0),t([h({type:T})],et.prototype,"occludedOuterColor",void 0),t([h({type:T})],et.prototype,"undefinedInnerColor",void 0),t([h({type:T})],et.prototype,"undefinedOuterColor",void 0),et=t([d("esri.views.3d.analysis.LineOfSight.LineOfSightConfiguration")],et);let ot=class extends e{constructor(t){super(t),this.elevationAlignedTargetLocation=null,this.inputPoints={isValid:!1,observer:y(),observerSurfaceNormal:null,target:y(),targetSurfaceNormal:null,observerAdjusted:y(),targetAdjusted:y()},this.computationResult={start:y(),end:y(),intersection:y(),isValid:!1,isTargetVisible:!1},this.result=null}notifyResultChanged(){this.notifyChange("computationResult")}notifyInputPointsChanged(){this.notifyChange("inputPoints")}};t([h()],ot.prototype,"target",void 0),t([h()],ot.prototype,"elevationAlignedTargetLocation",void 0),t([h()],ot.prototype,"inputPoints",void 0),t([h()],ot.prototype,"computationResult",void 0),t([h()],ot.prototype,"result",void 0),ot=t([d("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],ot);const it=V.getLogger("esri.views.3d.analysis.LineOfSight.LineOfSightController");let st=class extends(i.EventedMixin(e)){constructor(t){super(t),this.updateOnCameraChange=!0,this._updatingHandles=new s,this._frameTask=Y,this._handles=new L,this._computationHandles=new L,this._externalObserverUpdate=!0}initialize(){var t;const e=null==(t=this.view.resourceController)?void 0:t.scheduler;this._frameTask=e?e.registerTask(Z.LINE_OF_SIGHT_TOOL):Y,this._intersector=new W({view:this.view}),this._handles.add([this._connectObserver(),this._connectComputations(),this._connectTargets()])}destroy(){this._handles.destroy(),this._computationHandles.destroy(),this._computations.removeAll(),this._updatingHandles.destroy()}get updating(){return this._frameTask.updating||this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(t){this._frameTask.priority=t}get _computations(){return this.analysisViewData.computations}get _observerEngineLocation(){return this.analysisViewData.observerEngineLocation}set _observerEngineLocation(t){this.analysisViewData.observerEngineLocation=t}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._observerEngineLocation)}getLineOfSightComputationDependencies(t){const{inputPoints:e}=t;return{inputPoints:e}}_computeResult(t){const e=t.computation,{inputPoints:o,computationResult:i}=e,{observerAdjusted:s,targetAdjusted:n}=o,{start:r,end:a}=i;g(r,s),g(a,n);this._canCompute(e)?this._computeIntersection(t):this._interpolateIntersection(t),e.notifyResultChanged(),this.emit("result-changed",{target:t.computation.target,result:e.result})}_adjustStartEndPositions(t){const e=this._screenPixelSize,o=this.view,{inputPoints:i}=t,{observer:s,observerSurfaceNormal:n,target:a,targetSurfaceNormal:l,observerAdjusted:p,targetAdjusted:c}=i,u=at;r(n)?g(u,n):j(u,a,s);const m=e;v(u,u),b(u,u,Math.min(m,1)),f(p,s,u),r(l)?g(u,l):j(u,s,a);const h=o.state.camera.computeScreenPixelSizeAt(a);v(u,u),b(u,u,Math.min(h,1)),f(c,a,u)}_computeIntersection({computation:t,interpolationInfo:e}){const{view:o}=this,{sceneIntersectionHelper:i,renderCoordsHelper:s}=o;if(a(i))return;const n=this._intersector.intersector,{computationResult:l,inputPoints:p}=t,{observer:c,target:u}=p,{start:m,end:h}=l,d=G(m,h,lt);i.intersectToolIntersectorRay(d,n);const y=l.intersection,j=at;let v=!0;if(n.results.min.getIntersectionPoint(y)){g(e.originalIntersection,y),g(e.originalObserver,m),g(e.originalTarget,h),s.fromRenderCoords(y,j,o.spatialReference);const t=1-C(h,u)/C(m,u);v=C(c,y)>=t*C(c,u)}const b=new $(j,o.spatialReference);{const{result:e,target:i}=t;r(e)?(e.target=i,e.intersectedGraphic=v?null:X(n.results.min,o),e.intersectedLocation=v?null:b,e.visible=v):t.result=new N({target:i,elevationAlignedTargetLocation:t.elevationAlignedTargetLocation,intersectedGraphic:v?null:X(n.results.min,o),intersectedLocation:v?null:b,visible:v})}l.isValid=p.isValid=!0,l.isTargetVisible=v}_interpolateIntersection({computation:t,interpolationInfo:e}){const{computationResult:o,inputPoints:i}=t,{start:s,end:n,intersection:r}=o,{originalIntersection:a,originalObserver:l,originalTarget:p}=e;if(g(r,a),i.isValid){const t=at,e=C(l,a)/C(l,p);_(t,s,l),b(t,t,1-e),f(r,r,t),_(t,n,p),b(t,t,e),f(r,r,t),o.isValid=!0}else t.result=null,o.isValid=!1,o.isTargetVisible=!1}_canCompute(t){const e=this.analysisViewData.elevationAlignedObserver,o=this.view.frustum;if(a(e)||a(t.elevationAlignedTargetLocation)||a(o))return!1;const{observerAdjusted:i,targetAdjusted:s}=t.inputPoints,n=o.intersectsPoint(i),r=o.intersectsPoint(s);return n&&r}_onObserverPositionChange(t,e,o){if(this._externalObserverUpdate=o,a(t))return void(this.analysisViewData.elevationAlignedObserver=null);const i=this._applyProjectionAndElevationAlignment(t,e);if(a(i))return q(this.analysis,t.spatialReference,it),void(this.analysisViewData.elevationAlignedObserver=null);const s=y();this.analysisViewData.elevationAlignedObserver=i,this.view.renderCoordsHelper.toRenderCoords(this.analysisViewData.elevationAlignedObserver,s),this._observerEngineLocation=s,this.priority=Z.LINE_OF_SIGHT_TOOL_INTERACTIVE}_applyProjectionAndElevationAlignment(t,e){const o=r(e)&&e.type!==K.OBJECT;return J(t,this.view.spatialReference,this.view.elevationProvider,o)}_onObserverRenderSpacePositionChangeForComputation(t,e,o){const{inputPoints:i}=t;if(g(i.observer,e),r(o)){const t=this._intersector.updateFromIntersectionResult(o);r(t)&&this.view.renderCoordsHelper.toRenderCoords(t,i.observer),i.observerSurfaceNormal=k(o.normal)}else i.observerSurfaceNormal=null;this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=Z.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onTargetPositionChange(t,e,o,i=!0){const s=t.inputPoints;if(i&&(s.isValid=!1),t.elevationAlignedTargetLocation=this._applyProjectionAndElevationAlignment(e,o),a(t.elevationAlignedTargetLocation))q(this.analysis,e.spatialReference,it);else{if(this.view.renderCoordsHelper.toRenderCoords(t.elevationAlignedTargetLocation,s.target),r(o)){const t=this._intersector.updateFromIntersectionResult(o);r(t)&&this.view.renderCoordsHelper.toRenderCoords(t,s.target),s.targetSurfaceNormal=k(o.normal)}else s.targetSurfaceNormal=null;this._adjustStartEndPositions(t)}t.notifyInputPointsChanged(),this.priority=Z.LINE_OF_SIGHT_TOOL_INTERACTIVE}_connectComputationToTarget(t){return w([A((()=>t.target.position),(e=>{nt(e,t.target.intersection)||(t.target.intersection=null)}),D),A((()=>({computation:t,targetPosition:t.target.position,targetIntersection:t.target.intersection})),(({computation:t,targetPosition:e,targetIntersection:o})=>{r(e)&&this._onTargetPositionChange(t,e,o)}),R)])}_connectComputationToObserver(t){return A((()=>({computation:t,observer:this.analysisViewData.elevationAlignedObserver})),(({computation:t})=>{this._externalObserverUpdate&&(t.inputPoints.isValid=!1,t.notifyInputPointsChanged())}),R)}_connectComputationToRenderSpaceObserver(t){return A((()=>({computation:t,observer:this._observerEngineLocation,observerIntersection:r(this.analysis.observer)?this.analysis.observer.intersection:null})),(({computation:t,observer:e,observerIntersection:o})=>{this._onObserverRenderSpacePositionChangeForComputation(t,e,o)}),R)}_connectComputationToCamera(t){return A((()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty})),(({isDirty:e})=>{!this.updateOnCameraChange||t.inputPoints.isValid&&!e||t.notifyInputPointsChanged()}),U)}_connectComputationToSlicePlane(t){return A((()=>this.view.slicePlane),(()=>t.notifyInputPointsChanged()))}_connectComputationToElevation(t){return this.view.elevationProvider.on("elevation-change",(e=>{const o=this.analysis.observer,i=t.target;let s=null,n=null,l=null,p=null;const c=r(o)&&r(o.position)?o.position.spatialReference:r(i.position)?i.position.spatialReference:e.spatialReference;r(o)&&r(o.position)&&(s=ct,n=o.intersection,x(o.position,s,c)),r(i.position)&&(l=ut,p=i.intersection,x(i.position,l,c)),a(s)&&a(l)||(z(e.extent,e.spatialReference,pt,c),r(s)&&M(pt,s)&&this._onObserverPositionChange(s,n,!1),r(l)&&M(pt,l)&&this._onTargetPositionChange(t,l,p,!1),r(s)&&r(l)&&H(pt,s,l)&&t.notifyInputPointsChanged())}))}_connectComputationToTask(t){let e=c;const o={computation:t,interpolationInfo:{originalIntersection:y(),originalObserver:y(),originalTarget:y()}};return w([A((()=>this.getLineOfSightComputationDependencies(t)),(()=>{e=l(e),e=P((async t=>{await E(this._frameTask.schedule((()=>this._computeResult(o)),t))}))}),R),I((()=>e=l(e)))])}_connectComputation(t){const e=this._computationHandles;e.has(t)||e.add([this._connectComputationToTarget(t),this._connectComputationToObserver(t),this._connectComputationToRenderSpaceObserver(t),this._connectComputationToCamera(t),this._connectComputationToSlicePlane(t),this._connectComputationToElevation(t),this._connectComputationToTask(t)],t)}_disconnectAnalysis(t){this._computationHandles.remove(t)}_onComputationCollectionChange(t){t.added.forEach((t=>this._connectComputation(t))),t.removed.forEach((t=>this._disconnectAnalysis(t)))}_onTargetsChange(){return this._computations.removeAll(),this.analysis.targets.forEach((t=>this._addTarget(t))),this._updatingHandles.addOnCollectionChange((()=>this.analysis.targets),(t=>this._onTargetCollectionChange(t)))}_onTargetCollectionChange(t){t.added.forEach((t=>this._addTarget(t))),t.removed.forEach((t=>this._removeTarget(t)))}_onCursorTargetChange(t,e){r(e)&&this._removeTarget(e),r(t)&&this._addTarget(t)}_addTarget(t){this._computations.some((e=>e.target===t))||this._computations.add(new ot({target:t}))}_removeTarget(t){const e=this._computations.find((e=>e.target===t));this._computations.remove(e)}_connectObserver(){return w([A((()=>({observer:this.analysis.observer,observerPosition:r(this.analysis.observer)?this.analysis.observer.position:null,observerIntersection:r(this.analysis.observer)?this.analysis.observer.intersection:null})),(({observer:t,observerPosition:e,observerIntersection:o})=>{r(t)&&!nt(e,o)&&(t.intersection=null)}),D),A((()=>({observerPosition:r(this.analysis.observer)?this.analysis.observer.position:null,observerIntersection:r(this.analysis.observer)?this.analysis.observer.intersection:null})),(({observerPosition:t,observerIntersection:e})=>this._onObserverPositionChange(t,e,!0)),R)])}_connectComputations(){let t=null;return w([A((()=>this._computations),(()=>{p(t),t=this._updatingHandles.addOnCollectionChange((()=>this._computations),(t=>this._onComputationCollectionChange(t))),this._computations.forEach((t=>this._connectComputation(t)))}),R),I((()=>t=p(t)))])}_connectTargets(){let t=null;return w([A((()=>this.analysis.targets),(()=>{t=p(t),t=this._onTargetsChange()}),R),A((()=>this.analysisViewData.cursorTarget),((t,e)=>{this._onCursorTargetChange(t,e)})),I((()=>{t=p(t)}))])}get _isCameraDirty(){const t=this.analysisViewData.elevationAlignedObserver,{view:e}=this,{renderCoordsHelper:o}=e;if(a(t)||a(o))return!1;const i=at;o.toRenderCoords(t,i);const s=e.state.camera.computeScreenPixelSizeAt(i);return Math.abs((s-this._screenPixelSize)/this._screenPixelSize)>rt}};function nt(t,e){return a(e)||r(t)&&t.equals(e.point)}t([h({constructOnly:!0})],st.prototype,"analysis",void 0),t([h({constructOnly:!0})],st.prototype,"analysisViewData",void 0),t([h({constructOnly:!0})],st.prototype,"view",void 0),t([h()],st.prototype,"updating",null),t([h()],st.prototype,"priority",null),t([h()],st.prototype,"updateOnCameraChange",void 0),t([h()],st.prototype,"_computations",null),t([h()],st.prototype,"_observerEngineLocation",null),t([h()],st.prototype,"_screenPixelSize",null),t([h({readOnly:!0})],st.prototype,"_updatingHandles",void 0),t([h()],st.prototype,"_frameTask",void 0),t([h()],st.prototype,"_isCameraDirty",null),st=t([d("esri.views.3d.analysis.LineOfSight.LineOfSightController")],st);const rt=.1,at=y(),lt=B(),pt=F(),ct=new $,ut=new $;let mt=class extends e{constructor(t){super(t),this._lineOfSightVisualizations=[],this._handle=null,this._computationHandles=new L}initialize(){this._handle=this._connectAnalysis()}destroy(){this._handle=p(this._handle),this._computationHandles=u(this._computationHandles)}get visible(){return this.analysisViewData.visible}get testInfo(){return{visualizations:this._lineOfSightVisualizations}}get _configuration(){return this.analysisViewData.configuration}createLineOfSightVisualization(){const t=this._configuration,e={view:this.view,attached:!0,width:t.outerWidth,innerWidth:t.innerWidth},o=T.toUnitRGBA(t.visibleOuterColor),i=T.toUnitRGBA(t.visibleInnerColor),s=T.toUnitRGBA(t.occludedOuterColor),n=T.toUnitRGBA(t.occludedInnerColor),r=T.toUnitRGBA(t.undefinedOuterColor),a=T.toUnitRGBA(t.undefinedInnerColor),l={visibleLineVisualElement:new Q({...e,color:o,innerColor:i}),occludedLineVisualElement:new Q({...e,color:s,innerColor:n}),undefinedLineVisualElement:new Q({...e,color:r,innerColor:a})};return this._lineOfSightVisualizations.push(l),l}destroyLineOfSightVisualization(t){t.visibleLineVisualElement=u(t.visibleLineVisualElement),t.occludedLineVisualElement=u(t.occludedLineVisualElement),t.undefinedLineVisualElement=u(t.undefinedLineVisualElement),this._lineOfSightVisualizations.splice(this._lineOfSightVisualizations.indexOf(t),1)}updateLineOfSightVisualization(t,e){const o=this._configuration,{computationResult:i,inputPoints:s}=t,{start:n,end:r,intersection:l,isValid:p,isTargetVisible:c}=i,{observer:u}=s,m=gt;m[12]=u[0],m[13]=u[1],m[14]=u[2];const h=j(ht,n,u),d=j(dt,r,u),y=j(yt,l,u),{visibleLineVisualElement:g,occludedLineVisualElement:v,undefinedLineVisualElement:b}=e,f=a(this.analysisViewData.elevationAlignedObserver)||a(t.elevationAlignedTargetLocation),C=this.visible&&!f;g.visible=C,v.visible=C,b.visible=C,C&&(g.geometry=null,v.geometry=null,b.geometry=null,p?c?(g.geometry=[[S(h),S(d)]],g.transform=m,g.color=T.toUnitRGBA(o.visibleOuterColor)):(g.geometry=[[S(h),S(y)]],g.transform=m,g.color=T.toUnitRGBA(o.occludedOuterColor),v.geometry=[[S(y),S(d)]],v.transform=m):(b.geometry=[[S(h),S(d)]],b.transform=m))}getLineOfSightVisualizationDependencies(t){const{computationResult:e}=t,{occludedOuterColor:o,visibleOuterColor:i}=this._configuration;return{computationResult:e,occludedOuterColor:o,visibleOuterColor:i,visible:this.visible}}_connectComputation(t){const e=this._computationHandles;if(e.has(t))return;const o=this.createLineOfSightVisualization();e.add([A((()=>this.getLineOfSightVisualizationDependencies(t)),(()=>this.updateLineOfSightVisualization(t,o)),R),I((()=>this.destroyLineOfSightVisualization(o)))],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_connectAnalysis(){let t=null;return w([A((()=>this.analysisViewData.computations),(e=>{t=p(t),t=e.on("change",(t=>this._onComputationsCollectionChange(t))),this._onComputationsCollectionChange({target:e,added:e.items,removed:[],moved:[]})}),R),I((()=>t=p(t)))])}_onComputationsCollectionChange(t){t.added.forEach((t=>this._connectComputation(t))),t.removed.forEach((t=>this._disconnectComputation(t)))}};t([h({constructOnly:!0})],mt.prototype,"analysis",void 0),t([h({constructOnly:!0})],mt.prototype,"analysisViewData",void 0),t([h({constructOnly:!0})],mt.prototype,"view",void 0),t([h({readOnly:!0})],mt.prototype,"visible",null),t([h()],mt.prototype,"testInfo",null),t([h()],mt.prototype,"_configuration",null),mt=t([d("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],mt);const ht=y(),dt=y(),yt=y(),gt=tt();let jt=class extends(O(n(i.EventedMixin(e)))){constructor(t){super(t),this.type="line-of-sight-view-3d",this.computations=new o,this.elevationAlignedObserver=null,this.configuration=new et,this.observerEngineLocation=y(),this.cursorTarget=null}initialize(){const t=this.view,e=this.analysis;this._analysisController=new st({analysis:e,analysisViewData:this,view:t}),this._analysisVisualization=new mt({analysis:e,analysisViewData:this,view:t}),this.handles.add([this._analysisController.on("result-changed",(t=>{t.target!==this.cursorTarget&&this.emit("result-changed",t)}))])}destroy(){this._analysisController=u(this._analysisController),this._analysisVisualization=u(this._analysisVisualization)}get results(){return this.computations.map((t=>t.result))}get priority(){return this._analysisController.priority}set priority(t){this._analysisController.priority=t}get updating(){return r(this._analysisController)&&this._analysisController.updating}getResultForTarget(t){const e=this.computations.find((e=>e.target===t));return m(e,(t=>t.result))}get testInfo(){return{visualization:this._analysisVisualization,controller:this._analysisController}}};t([h()],jt.prototype,"type",void 0),t([h()],jt.prototype,"analysis",void 0),t([h({readOnly:!0})],jt.prototype,"results",null),t([h()],jt.prototype,"priority",null),t([h()],jt.prototype,"computations",void 0),t([h()],jt.prototype,"elevationAlignedObserver",void 0),t([h()],jt.prototype,"configuration",void 0),t([h()],jt.prototype,"observerEngineLocation",void 0),t([h()],jt.prototype,"cursorTarget",void 0),t([h()],jt.prototype,"updating",null),t([h()],jt.prototype,"_analysisController",void 0),t([h()],jt.prototype,"_analysisVisualization",void 0),jt=t([d("esri.views.3d.analysis.LineOfSightAnalysisView3D")],jt);const vt=jt;export{vt as default};
