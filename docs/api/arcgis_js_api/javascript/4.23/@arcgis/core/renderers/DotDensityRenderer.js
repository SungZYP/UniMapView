/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import o from"../Color.js";import{clone as s}from"../core/lang.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../chunks/ensureType.js";import{e}from"../chunks/enumeration.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{collectArcadeFieldNames as n}from"../layers/support/fieldUtils.js";import l from"./Renderer.js";import{V as m}from"../chunks/VisualVariablesMixin.js";import a from"./support/AttributeColorInfo.js";import{a as u}from"../chunks/JSONSupport.js";import c from"../symbols/SimpleFillSymbol.js";import j from"../symbols/SimpleLineSymbol.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./support/AuthoringInfo.js";import"./support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./visualVariables/ColorVariable.js";import"./visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"./visualVariables/support/ColorStop.js";import"./visualVariables/OpacityVariable.js";import"./visualVariables/support/OpacityStop.js";import"../chunks/opacityUtils.js";import"./visualVariables/RotationVariable.js";import"./visualVariables/SizeVariable.js";import"../chunks/screenUtils.js";import"./visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../chunks/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";var y;let h=y=class extends u{constructor(){super(...arguments),this.unit=null}clone(){return new y({unit:this.unit})}};t([i({type:String,json:{write:!0}})],h.prototype,"unit",void 0),h=y=t([p("esri.renderers.support.DotDensityLegendOptions")],h);const b=h;var d;let k=d=class extends(m(l)){constructor(t){super(t),this.attributes=null,this.backgroundColor=new o([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new j,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(t){if(null==this.referenceScale)return this.dotValue;const o=t/this.referenceScale*this.dotValue;return o<1?1:o}getSymbol(){return new c({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((t,o)=>t+o.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new d({attributes:s(this.attributes),backgroundColor:s(this.backgroundColor),dotBlendingEnabled:s(this.dotBlendingEnabled),dotShape:s(this.dotShape),dotSize:s(this.dotSize),dotValue:s(this.dotValue),legendOptions:s(this.legendOptions),outline:s(this.outline),referenceScale:s(this.referenceScale),visualVariables:s(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map((t=>t.field||t.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(t,o){await this.collectVVRequiredFields(t,o);for(const s of this.attributes)s.valueExpression&&await n(t,o,s.valueExpression),s.field&&t.add(s.field)}};t([i({type:[a],json:{write:!0}})],k.prototype,"attributes",void 0),t([i({type:o,json:{write:!0}})],k.prototype,"backgroundColor",void 0),t([i({type:Boolean}),r("dotBlendingEnabled")],k.prototype,"blendDots",void 0),t([i({type:Boolean,json:{write:!0}})],k.prototype,"dotBlendingEnabled",void 0),t([i({type:String,json:{write:!1}})],k.prototype,"dotShape",void 0),t([i({type:Number,json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1}}}})],k.prototype,"dotSize",void 0),t([i({type:b,json:{write:!0}})],k.prototype,"legendOptions",void 0),t([i({type:j,json:{default:null,write:!0}})],k.prototype,"outline",void 0),t([i({type:Number,json:{write:!0}})],k.prototype,"dotValue",void 0),t([i({type:Number}),r("dotValue")],k.prototype,"referenceDotValue",void 0),t([i({type:Number,json:{write:!0}})],k.prototype,"referenceScale",void 0),t([i({type:Number,json:{write:!0}})],k.prototype,"seed",void 0),t([e({dotDensity:"dot-density"})],k.prototype,"type",void 0),k=d=t([p("esri.renderers.DotDensityRenderer")],k);const S=k;export{S as default};