/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"./Widget.js";import p from"./LineOfSight/LineOfSightViewModel.js";import{a as n}from"../chunks/accessibleHandler.js";import{m}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as l}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../core/Error.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../analysis/LineOfSightAnalysis.js";import"../chunks/Analysis.js";import"../chunks/Clonable.js";import"../chunks/Identifiable.js";import"../analysis/LineOfSightAnalysisObserver.js";import"../geometry/Point.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../analysis/LineOfSightAnalysisTarget.js";import"../chunks/collectionUtils.js";import"../geometry/Extent.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/lineSegment.js";import"../chunks/vectorStacks.js";import"../chunks/byteSizeEstimations.js";import"../chunks/quatf64.js";import"../chunks/mat4f64.js";import"../chunks/vec2f64.js";import"../chunks/vec4f64.js";import"../chunks/LineOfSightRayIntersector.js";import"../chunks/screenUtils.js";import"../chunks/ray.js";import"../chunks/dehydratedFeatures.js";import"../chunks/aaBoundingBox.js";import"../chunks/quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../layers/support/Field.js";import"../chunks/enumeration.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/intersectorUtilsConversions.js";import"../chunks/Intersector.js";import"../chunks/mat4.js";import"../chunks/ViewingMode.js";import"../chunks/boundedPlane.js";import"../chunks/sphere.js";import"../chunks/plane.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/mat3.js";import"../chunks/quat.js";import"../chunks/vec3f32.js";import"../chunks/utils2.js";import"../chunks/Util.js";import"../chunks/vec2.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/ray2.js";import"../chunks/tileUtils.js";import"../chunks/manipulatorUtils.js";import"../chunks/DefaultBufferWriter.js";import"../chunks/mathUtils2.js";import"../chunks/basicInterfaces.js";import"../chunks/Material.js";import"../chunks/VertexAttribute.js";import"../chunks/frustum.js";import"../geometry/projection.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../Graphic.js";import"../geometry.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/glUtil3D.js";import"../chunks/geometryDataUtils.js";import"../chunks/triangle.js";import"../chunks/BufferView.js";import"../chunks/ShaderBuilder.js";import"../chunks/mat4f32.js";import"../chunks/enums.js";import"../chunks/Texture.js";import"../chunks/context-util.js";import"../chunks/VertexElementDescriptor.js";import"../chunks/VertexArrayObject.js";import"../chunks/RenderSlot.js";import"../chunks/InterleavedLayout.js";import"../chunks/types.js";import"../chunks/compilerUtils.js";import"../chunks/ElevationProvider.js";import"../chunks/Camera.js";import"../chunks/interfaces.js";import"../chunks/GeometryUtil.js";import"../chunks/ColorMaterial.js";import"../chunks/OrderIndependentTransparency.js";import"../chunks/VertexColor.glsl.js";import"../chunks/manipulatorUtils2.js";import"../chunks/elevationInfoUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/LaserlineVisualElement.js";import"../chunks/VisualElement.js";import"../chunks/glUtil.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/ScreenSpacePass.js";import"../chunks/InteractiveToolBase.js";import"../chunks/drawUtils.js";import"../chunks/DOMContainer.js";import"../core/HandleOwner.js";import"./Popup.js";import"../chunks/throttle.js";import"../core/watchUtils.js";import"./Feature.js";import"./Attachments.js";import"../chunks/unitFormatUtils.js";import"./Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./Feature/FeatureViewModel.js";import"../chunks/languageUtils.js";import"../chunks/datetime.js";import"../chunks/number3.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"../chunks/executeForTopCount.js";import"../chunks/utils5.js";import"../chunks/scaleUtils.js";import"../chunks/floorFilterUtils.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../chunks/executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"../layers/Layer.js";import"../chunks/FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../chunks/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/_commonjsHelpers.js";import"../chunks/CustomParametersMixin.js";import"../chunks/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/OrderedLayer.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/Heading.js";import"./support/widget.js";import"../chunks/vmEvent.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils6.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"../chunks/GoTo.js";import"./LineOfSight/LineOfSightTarget.js";import"../chunks/InteractiveAnalysisViewModel.js";import"../chunks/InteractiveToolViewModel.js";const u="esri-button",a="esri-button--disabled",j="esri-icon-line-of-sight",c="esri-line-of-sight esri-widget esri-widget--panel",h="esri-line-of-sight__container",k="esri-line-of-sight__actions",y="esri-line-of-sight__hint",d="esri-line-of-sight__hint-text",b="esri-line-of-sight__panel--error",f="esri-line-of-sight__new-analysis-button esri-button--primary",g="esri-line-of-sight__secondary-button esri-button--secondary";let S=class extends i{constructor(s,t){super(s,t),this.iconClass=j,this.label=void 0,this.messages=null,this.view=null,this.viewModel=new p}get analysis(){return this.viewModel.analysis}set analysis(s){this.viewModel.analysis=s}render(){return l("div",{class:c,role:"presentation"},this.renderContainerNode())}renderContainerNode(){if(!this.visible)return null;if(!this.viewModel.supported)return this._renderUnsupportedMessage();let s=null;const t=[this._renderNewAnalysisButton()];return"creating"===this.viewModel.state?(s=this._renderHint(),t.unshift(this._renderDoneButton())):"created"===this.viewModel.state&&this.viewModel.targets.length>0&&t.unshift(this._renderContinueButton()),l("div",{class:h},s,l("div",{class:k},t))}_renderUnsupportedMessage(){return l("div",{class:b,key:"esri-line-of-sight__unsupported"},l("p",null,this.messages.unsupported))}_renderHint(){return l("div",{class:y,key:"esri-line-of-sight__hint"},l("p",{class:d},this.messages.hint))}_renderNewAnalysisButton(){return this._renderButton(this._onNewAnalysis,this.messages.newAnalysis,f,"esri-line-of-sight__new-button")}_renderDoneButton(){return this._renderButton(this._onDone,this.messages.done,g,"esri-line-of-sight__done-button")}_renderContinueButton(){return this._renderButton(this._onContinue,this.messages.continueAnalysis,g,"esri-line-of-sight__continue-button")}_renderButton(s,t,r,o){const e="disabled"===this.viewModel.state;return l("button",{disabled:e,class:this.classes(r,u,e&&a),bind:this,onclick:s,key:o,type:"button"},t)}_onNewAnalysis(){t(this.viewModel.start())}_onDone(){this.viewModel.stop()}_onContinue(){this.viewModel.continue()}};s([r("viewModel.active")],S.prototype,"active",void 0),s([o({constructOnly:!0,nonNullable:!0})],S.prototype,"analysis",null),s([o()],S.prototype,"iconClass",void 0),s([o({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],S.prototype,"label",void 0),s([o(),m("esri/widgets/LineOfSight/t9n/LineOfSight")],S.prototype,"messages",void 0),s([r("viewModel.view")],S.prototype,"view",void 0),s([o({type:p})],S.prototype,"viewModel",void 0),s([r("viewModel.visible")],S.prototype,"visible",void 0),s([n()],S.prototype,"_onNewAnalysis",null),s([n()],S.prototype,"_onDone",null),s([n()],S.prototype,"_onContinue",null),S=s([e("esri.widgets.LineOfSight")],S);const U=S;export{U as default};