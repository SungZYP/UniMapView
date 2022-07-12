/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import"../../symbols.js";import s from"../../core/Error.js";import{f as t}from"../../chunks/messages.js";import o,{L as r}from"../../layers/support/LabelClass.js";import{e,p as i}from"../../chunks/screenUtils.js";import{b as n,s as p}from"../../chunks/shapingUtils.js";import{g as m,a as l}from"../../chunks/alignmentUtils.js";import{M as a,G as u}from"../../chunks/definitions.js";import{g as c,a as j,c as h,b as y,d as b}from"../../chunks/clusterUtils.js";import{i as k}from"../../chunks/clusterUtils2.js";import d from"../../symbols/TextSymbol.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../symbols/CIMSymbol.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../chunks/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../chunks/Rect.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df32.js";import"../../chunks/vec2.js";import"../../chunks/vec2f32.js";import"../../chunks/number2.js";import"../../chunks/MD5.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/utils12.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/assets.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../chunks/utils13.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/utils10.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";let f=async function(s,t,o){var r,i,c;const j=m("center"),h=l("middle"),y=t.textureManager.rasterizeItem(s.toJSON(),window.devicePixelRatio||1,null,o),[,b]=n(s.text),k=(await y).glyphMosaicItems;return p(k,b,{angle:null!=(r=s.angle)?r:0,xOffset:e(null!=(i=s.xoffset)?i:0),yOffset:e(null!=(c=s.yoffset)?c:0),lineHeight:a*Math.max(.25,s.lineHeight),maxLineWidth:Math.max(32,Math.min(e(s.lineWidth),512)),decoration:s.font.decoration,scale:Math.min(Math.round(e(s.font.size)),127)/u,hAlign:j,vAlign:h,isCIM:!1}).boundsT};async function S(s,t){await t.when();const o=s.clone();o.text="9";const r=await async function(s,t,o){return f(s,t,o)}(o,t);return 4*i(r.width)}async function g(t){const{layer:o,renderer:r,view:e}=t;await Promise.all([o.load(),e.when()]);const i=r||o.renderer;return k(i)?{layer:o,renderer:i,view:e}:Promise.reject(new s("clusters-label-schemes:invalid-parameters","'renderer' is not valid"))}async function v(s){const{renderer:t,view:e,statInfo:i}=s,n=null==i?void 0:i.statisticType,p=i?j(i.attributeInfo,n):h,m="type"===n?function(s,t,o){const r="unique-value"===s.type?s.uniqueValueInfos:[];return y(r,t,o)}(t,p,s.noneValueLabel):function(s){return`\n  $feature["${s}"];\n  var value = $feature["${s}"];\n  var num = Count(Text(Round(value)));\n  var label = When(\n    num < 4, Text(value, "#.#"),\n    num == 4, Text(value / Pow(10, 3), "#.0k"),\n    num <= 6, Text(value / Pow(10, 3), "#k"),\n    num == 7, Text(value / Pow(10, 6), "#.0m"),\n    num > 7, Text(value / Pow(10, 6), "#m"),\n    Text(value, "#,###")\n  );\n  return label;\n  `}(p),l=function(s){const t=new d({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});return new o({symbol:t,deconflictionStrategy:"none",labelPlacement:"center-center",labelExpressionInfo:new r({expression:s})})}(m);return{name:i?`clusters-${n}-${b(p,n)}`:"clusters-count",labelingInfo:[l],clusterMinSize:await S(l.symbol,e),fieldName:p}}async function M(s){const[{renderer:o,layer:r,view:e},i]=await Promise.all([g(s),t("esri/smartMapping/t9n/smartMapping")]);if(!o)return null;let n=null;const p=[],m=function(s){const t=new Map;for(const o of s)"size"===o.attributeInfo.vvType?t.set(o.statisticHash,o):t.has(o.statisticHash)||t.set(o.statisticHash,o);return[...t.values()]}(c(r,o,!1));for(const s of m){const t=await v({renderer:o,view:e,statInfo:s,noneValueLabel:i.clusters.predominantNoneValue});"size"===s.attributeInfo.vvType?n=t:p.push(t)}const l=await v({renderer:o,view:e});return n?p.unshift(l):n=l,{primaryScheme:n,secondarySchemes:p}}export{M as getLabelSchemes};
