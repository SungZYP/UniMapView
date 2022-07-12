/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import e from"../../core/Collection.js";import{r}from"../../chunks/collectionUtils.js";import o from"../../core/Handles.js";import{L as i}from"../../chunks/Logger.js";import{i as p,o as l}from"../../core/lang.js";import{isAbortError as n}from"../../core/promiseUtils.js";import{watch as a,initial as m,whenOnce as u}from"../../core/reactiveUtils.js";import{property as h}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import d from"../../layers/BuildingSceneLayer.js";import j from"../../layers/support/BuildingFilter.js";import{c as y,f as b,s as k,g,a as f,b as S,d as v}from"../../chunks/filterUtils.js";import L from"./BuildingLevel.js";import I from"./BuildingPhase.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/Error.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../chunks/CollectionFlattener.js";import"../../core/HandleOwner.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../layers/Layer.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../request.js";import"../../kernel.js";import"../../chunks/Identifiable.js";import"../../layers/buildingSublayers/BuildingComponentSublayer.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../renderers/ClassBreaksRenderer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../portal/Portal.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../chunks/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../renderers/support/jsonUtils.js";import"../../layers/FeatureLayer.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../form/support/elements.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/FeatureIndex.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../chunks/assets.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../layers/support/Field.js";import"../../chunks/fieldType.js";import"../../chunks/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/CustomParametersMixin.js";import"../../chunks/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/OperationalLayer.js";import"../../chunks/commonProperties.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/OrderedLayer.js";import"../../chunks/PortalLayer.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/RefreshableLayer.js";import"../../chunks/ScaleRangeLayer.js";import"../../chunks/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../chunks/featureReductionUtils.js";import"../../layers/support/FeatureReductionSelection.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../chunks/labelingInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils2.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../support/popupUtils.js";import"../../layers/buildingSublayers/BuildingSublayer.js";import"../../chunks/capabilities.js";import"../../chunks/I3SIndexInfo.js";import"../../chunks/I3SLayerDefinitions.js";import"../../layers/buildingSublayers/BuildingGroupSublayer.js";import"../../chunks/SceneService.js";import"../../chunks/originUtils.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../chunks/saveUtils.js";import"../../chunks/uuid.js";import"../../chunks/resourceUtils.js";import"../../layers/support/BuildingSummaryStatistics.js";import"../../chunks/FetchAssociatedFeatureLayer.js";import"../../chunks/BuildingFilterBlock.js";let C=class extends t{constructor(){super(...arguments),this.id="root",this.parent=null,this.children=new e,this.layers=new e,this.level=0,this.collapsed=!0,this._handles=new o,this._childIds=new Set,this._layerUniqueIds=new Set}initialize(){this._handles.add([this.layers.on("before-add",(s=>{this._layerUniqueIds.has(s.item.uid)?s.preventDefault():this._layerUniqueIds.add(s.item.uid)})),this.layers.on("after-add",(({item:s})=>{this._handles.add([a((()=>s.visible),(()=>this.notifyChange("visible")),m),a((()=>s.title),(()=>this.notifyChange("title")),m)],s.uid)})),this.layers.on("before-remove",(({item:s})=>{this._handles.remove(s.uid),this.notifyChange("title"),this.notifyChange("visible")})),this.children.on("before-add",(s=>{this._childIds.has(s.item.id)?s.preventDefault():(s.item._set("parent",this),this._childIds.add(s.item.id))}))])}destroy(){this._handles.destroy(),this.children.forEach((s=>s.destroy()))}get hasChildren(){return this.children.length>0}get isRoot(){return 0===this.level}get isLeaf(){return!this.hasChildren}get isDiscipline(){return 1===this.level}get visible(){return U(this.layers,(s=>s.visible))}get title(){return U(this.layers,(s=>s.title))||this.layers.items.map((s=>s.title)).join(", ")||null}toggleVisibility(s){const t=void 0===s?!this.visible:s;this.layers.forEach((s=>{s.visible=t})),t&&p(this.parent)&&this.parent.toggleVisibility(!0)}toggleCollapsed(s){this.collapsed=void 0===s?!this.collapsed:s}expand(){this.collapsed=!1}expandAll(){this.expand(),this.children.forEach((s=>s.expandAll()))}collapse(){this.collapsed=!0}collapseAll(){this.collapse(),this.children.forEach((s=>s.collapseAll()))}toggleAllSiblingsVisibility(s){const t=void 0===s?!this.visible:s;this.toggleVisibility(t),p(this.parent)&&(this.parent.toggleVisibility(t),this.parent.children.forEach((s=>s.toggleVisibility(t))))}};function U(s,t){let e=null;for(const r of s.items){const s=t(r);if(p(e)&&e!==s)return null;e=s}return e}s([h({nonNullable:!0})],C.prototype,"id",void 0),s([h()],C.prototype,"parent",void 0),s([h({nonNullable:!0,readOnly:!0})],C.prototype,"children",void 0),s([h({nonNullable:!0,readOnly:!0})],C.prototype,"layers",void 0),s([h({nonNullable:!0})],C.prototype,"level",void 0),s([h({nonNullable:!0})],C.prototype,"collapsed",void 0),s([h({readOnly:!0})],C.prototype,"hasChildren",null),s([h({readOnly:!0})],C.prototype,"isRoot",null),s([h({readOnly:!0})],C.prototype,"isLeaf",null),s([h({readOnly:!0})],C.prototype,"isDiscipline",null),s([h({readOnly:!0})],C.prototype,"visible",null),s([h({readOnly:!0})],C.prototype,"title",null),C=s([c("esri.widgets.BuildingExplorer.support.LayerTreeNode")],C);let _=class extends t{constructor(s){super(s),this.root=new C,this.state="disabled",this._handles=new o,this._loadLayers=y(),this.layers=new e}initialize(){this._handles.add(this.layers.on("change",(()=>this._onLayersChange()))),this._onLayersChange()}destroy(){this._set("state","disabled"),this._handles.destroy(),this.root.destroy()}set layers(s){const t=this._get("layers");this._set("layers",r(s,t))}_updateLayerTree(){this.root.destroy(),this._set("root",new C({collapsed:!1}));const s=new Map,t=this.layers.length>1?"modelName":"id";return this.layers.forEach((e=>{const r=b(e);this._addNodesForSublayers(l(r,e),this.root,s,t)})),this}_addNodeForLayer(s,t,e,r){const o=String(s.get(r)).toLowerCase();if(!p(o)||s.isEmpty)return;const i=`${t.id}/${o}`;let l=e.get(i);l||(l=new C({id:o,level:t.level+1}),e.set(i,l)),l.layers.push(s),t.children.push(l),this._addNodesForSublayers(s,l,e,r)}_addNodesForSublayers(s,t,e,r){("building-scene"===s.type||"building-group"===s.type&&!s.isEmpty)&&s.sublayers.forEach((s=>this._addNodeForLayer(s,t,e,r)))}async _onLayersChange(){if(this._set("state","loading"),0!==this.layers.length)try{await this._loadLayers(this.layers),this._updateLayerTree(),this._set("state","ready")}catch(s){n(s)||this._set("state","failed")}}};s([h({readOnly:!0})],_.prototype,"root",void 0),s([h({type:e,nonNullable:!0})],_.prototype,"layers",null),s([h({readOnly:!0,nonNullable:!0})],_.prototype,"state",void 0),_=s([c("esri.widgets.BuildingExplorer.BuildingDisciplineViewModel")],_);const D=_,x=i.getLogger("esri.widgets.BuildingExplorer.BuildingExplorerViewModel");let w=class extends t{constructor(s){super(s),this.view=null,this.state="disabled",this.level=new L,this.phase=new I,this.disciplines=new D,this._handles=new o,this._loadLayers=y(),this.layers=new e}initialize(){this._handles.add([this.layers.on("change",(()=>this._onLayersChange())),a((()=>({state:this.state,layers:this.layers,filter:this._filter})),(({state:s,layers:t,filter:e})=>{"ready"===s&&k(t,e)}),{initial:!0})]),this._onLayersChange()}destroy(){this._handles.destroy(),this.level.destroyed||this.level.destroy(),this.phase.destroyed||this.phase.destroy(),this.disciplines.destroyed||this.disciplines.destroy()}get isSupported(){var s;return"3d"===(null==(s=this.view)?void 0:s.type)}set layers(s){const t=s.filter((s=>s instanceof d));t.length!==s.length&&x.error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget."),this._set("layers",r(t,this._get("layers")))}get _filter(){const s=this.level.filterExpressions,t=this.phase.filterExpressions,e=[],r=g([s.solid,t.solid]);p(r)&&e.push(r);const o=f([s.xRay,t.xRay]);return p(o)&&e.push(o),0===e.length?null:new j({id:S(),name:"Building Explorer Filter",filterBlocks:e})}async _onLayersChange(){const s=this.layers;if(this.level.layers=s,this.phase.layers=s,this.disciplines.layers=s,0!==s.length){this._set("state","loading");try{await this._loadLayers(s),await Promise.all([u((()=>"ready"===this.level.state)),u((()=>"ready"===this.phase.state)),u((()=>"ready"===this.disciplines.state))]),s.forEach(v),this._set("state","ready")}catch(s){n(s)||this._set("state","failed")}}else this._set("state","disabled")}};s([h({value:null})],w.prototype,"view",void 0),s([h()],w.prototype,"isSupported",null),s([h({type:e,nonNullable:!0})],w.prototype,"layers",null),s([h({readOnly:!0})],w.prototype,"state",void 0),s([h({readOnly:!0,type:L})],w.prototype,"level",void 0),s([h({readOnly:!0,type:I})],w.prototype,"phase",void 0),s([h({readOnly:!0,type:D})],w.prototype,"disciplines",void 0),s([h()],w.prototype,"_filter",null),w=s([c("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],w);const F=w;export{D as B,C as L,F as default};
