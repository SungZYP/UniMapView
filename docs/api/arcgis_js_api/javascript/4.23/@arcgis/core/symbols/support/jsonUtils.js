/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{readSymbol as o}from"../../symbols.js";import s from"../../core/Error.js";import{i as t,b as r}from"../../core/lang.js";import e from"../Symbol3D.js";import{t as i}from"../../chunks/symbolConversion.js";import m from"../WebStyleSymbol.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../CIMSymbol.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../ExtrudeSymbol3DLayer.js";import"../Symbol3DLayer.js";import"../../chunks/utils3.js";import"../edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../edges/SketchEdges3D.js";import"../edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../FillSymbol.js";import"../SimpleLineSymbol.js";import"../LineSymbol.js";import"../LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../FillSymbol3DLayer.js";import"../patterns/LineStylePattern3D.js";import"../patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../Font.js";import"../IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../LabelSymbol3D.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../TextSymbol3DLayer.js";import"../../chunks/Clonable.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../callouts/Callout3D.js";import"../callouts/LineCallout3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../LineSymbol3DLayer.js";import"../LineStyleMarker3D.js";import"../ObjectSymbol3DLayer.js";import"../PathSymbol3DLayer.js";import"../WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../LineSymbol3D.js";import"../MarkerSymbol.js";import"../MeshSymbol3D.js";import"../PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../PictureMarkerSymbol.js";import"../PointSymbol3D.js";import"../PolygonSymbol3D.js";import"../SimpleFillSymbol.js";import"../SimpleMarkerSymbol.js";import"../TextSymbol.js";function p(o,s,r,e){const i=n(o,{},{context:e,isLabelSymbol:!1});t(i)&&(s[r]=i)}function l(o,s,r,e){const i=n(o,{},{context:e,isLabelSymbol:!0});t(i)&&(s[r]=i)}function n(o,p,l){if(r(o))return null;const{context:n,isLabelSymbol:j}=l;if(n&&"web-scene"===n.origin&&!(o instanceof e)&&!(o instanceof m)){const r=i(o,{retainCIM:!0,hasLabelingContext:j});return t(r.symbol)?r.symbol.write(p,n):(n.messages&&n.messages.push(new s("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:o,context:n,error:r.error})),null)}return n&&"web-map"===n.origin&&"web-style"===o.type?(n.messages&&n.messages.push(new s("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:o,context:n})),null):o.write(p,n)}function j(s,t){return o(s,null,t)}export{j as fromJSON,p as write,l as writeLabelSymbol};