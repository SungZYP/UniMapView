/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Collection.js";import s from"../../core/Error.js";import{E as r}from"../../chunks/Evented.js";import{HandleOwnerMixin as o}from"../../core/HandleOwner.js";import{L as i}from"../../chunks/Logger.js";import{i as l}from"../../core/lang.js";import{whenFalse as a}from"../../core/watchUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import c from"../../geometry/Point.js";import{q as m}from"../../chunks/featureQueryAll.js";import h from"../../rest/support/FeatureSet.js";import{trace as u}from"../../rest/networks/trace.js";import d from"../../rest/networks/support/TraceLocation.js";import g from"../../rest/networks/support/TraceParameters.js";import{cut as y,planarLength as f}from"../../geometry/geometryEngine.js";import j from"../../geometry/Polyline.js";import{project as b,load as w}from"../../geometry/projection.js";import k from"../../Graphic.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/shared.js";import"../../chunks/tracking.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/metadata.js";import"../../chunks/watch.js";import"../../core/Handles.js";import"../../core/reactiveUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../geometry/SpatialReference.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../rest/support/Query.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/enumeration.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../rest/support/StatisticDefinition.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../chunks/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/utils5.js";import"../../chunks/scaleUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/floorFilterUtils.js";import"../../rest/networks/support/TraceResult.js";import"../../rest/networks/support/AggregatedGeometry.js";import"../../rest/networks/support/FunctionResult.js";import"../../rest/networks/support/NetworkElement.js";import"../../networks/support/TraceConfiguration.js";import"../../chunks/typeUtils2.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/hydrated.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";function _(e,t){const s=[],r=new Map;for(const s of t){const t=e.getLayerIdBySourceId(s.networkSourceId);let o=r.get(t);void 0===o&&(o=[]),o.push(s.objectId),r.set(t,o)}const o=e.featureServiceUrl;return r.forEach(((e,t)=>s.push({layerUrl:`${o}/${t}`,objectIds:e}))),s}class S{constructor(){}getPercentageAlong(e,t,s){let r=e;const o=this._createPolyline(e.paths,s.wkid);if("point"===t.type){const e=t.x-50,i=t.x+50,l=[[e,t.y-50],[i,t.y+50]];r=this._createPolyline(l,t.spatialReference.wkid);r=b(r,s);const a=y(o,r);if(a.length>0){const e=f(o,"feet");let t;t=a[0].paths[0][0][0]===o.paths[0][0][0]?f(a[0],"feet"):f(a[1],"feet");return[t/e]}return[.5]}r=b(t,s);const i=y(o,r);if(i.length>0){const e=f(o,"feet");return[f(i[0],"feet")/e]}return[.5]}async projectGeometry(e,t){return await w(),b(e,t)}_createPolyline(e,t){return new j({hasZ:!1,hasM:!0,paths:e,spatialReference:{wkid:t}})}}const I=[227,27,21,.6],v=[21,244,21,.6],F=[{color:[255,0,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff0000"},{color:[255,0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff00ff"},{color:[217,188,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#D9BCFF"},{color:[0,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#00ff00"},{color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ffff00"}];class O{constructor(){this._geometryHandler=new S}getFlagGraphic(e,t,s,r){const o="starting-point"===t?v:I;if("polygon"===e.type){e=e.centroid}if(r){return this.makeGraphic(e,o,s.attributes,null,r)}return this.makeGraphic(e,o,s.attributes)}getHighlightColor(e){return F[e]}makeGraphic(e,t,s,r,o){let i,l=e;switch(e.type){case"multipoint":i={type:"simple-marker",color:t,size:12,outline:{color:t,width:0}},r&&(l=e);break;case"point":i=o||{type:"simple-marker",color:t,size:12,outline:{color:t,width:0}},r&&(l=e);break;case"polyline":i={type:"simple-line",color:t,width:12},r&&(l=e);break;case"polygon":i={type:"simple-fill",color:t,outline:{color:t,width:12}},r&&(l=e)}return new k({geometry:l,symbol:i,attributes:s||null})}}const P="esri.widgets.UtilityNetworkTrace.UtilityNetworkTraceViewModel",T=i.getLogger(P);let E=class extends(o(r.EventedAccessor)){constructor(e){super(e),this._activeProgress=!1,this._clickHandler=null,this._flags=[],this._geometryHandler=null,this._graphicHandler=null,this._highlightHandler=[],this._traces=[],this._traceResults=[],this._unObject=null,this.defaultGraphicColor={color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#FFFF00"},this.flags=[],this.gdbVersion="sde.DEFAULT",this.selectedTraces=[],this.selectOnComplete=!0,this.showGraphicsOnComplete=!0,this.showSelectionAttributes=!0}initialize(){this._geometryHandler=new S,this._graphicHandler=new O}destroy(){this.view=null}get state(){var e;return null!=(e=this.view)&&e.ready?"ready":"loading"}get view(){return this._get("view")}set view(e){e&&"2d"!==e.type&&T.error(new s("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)}addFlagByHit(e,t){return new Promise(((s,r)=>{this.view.popup.autoOpenEnabled=!1,this._clickHandler&&this._clickHandler.remove(),this.emit("add-flag",{type:e}),this._clickHandler=this.view.on("click",(o=>{this.queryFlagByHitTest(o,e,t).then((r=>{this.view.popup.autoOpenEnabled=!0,this._clickHandler.remove(),this.emit("add-flag-complete",{type:e,symbol:t}),s(r)})).catch((s=>{this.view.popup.autoOpenEnabled=!0,this._clickHandler.remove(),this.emit("add-flag-error",{type:e,symbol:t}),r(s)}))}))}))}addFlagsOnLoad(){return new Promise((async e=>{const t=[];await this.view.when();const s=a(this.view,"updating",(async()=>{await Promise.all(this.flags.map((async e=>{if(e.mapPoint){const s=new c({x:e.mapPoint.x,y:e.mapPoint.y,spatialReference:e.mapPoint.spatialReference.wkid}),r={screenPoint:this.view.toScreen(s),mapPoint:s};await this.queryFlagByHitTest(r,e.type)||("barrier"===e.type?t.push("barrier"):t.push("starting-point"))}}))),s.remove(),e(t)}))}))}async addResultGraphicToView(e,t){for(const s in e.results.aggregatedGeometry)if("line,multipoint,polygon".indexOf(s)>-1&&null!==e.results.aggregatedGeometry[s]){e.results.aggregatedGeometry[s].spatialReference=this._unObject.spatialReference,e.graphicEnabled=!0;const r=await this._geometryHandler.projectGeometry(e.results.aggregatedGeometry[s],this.view.spatialReference),o={globalid:e.trace.globalId};if(null!==r){const e=this._graphicHandler.makeGraphic(r,t.color,o,this.view.spatialReference);this.view.graphics.add(e)}}}addTerminal(e,t){const s=[...this._flags];s.forEach((s=>{s.globalId===t.globalId&&-1===t.selectedTerminals.indexOf(parseInt(e,10))&&s.selectedTerminals.push(parseInt(e,10))})),this._flags=s}callTrace(){return new Promise((async e=>{const t=this._traces.filter((e=>e.selected));t.length>0&&(this._traceResults.length>0&&this._traceResults.forEach((e=>{this.removeResultGraphicFromView(e)})),this._traceResults=[],this.removeSelection(),await Promise.all(t.map((async(e,t)=>{const s=e,r=new g({gdbVersion:this.gdbVersion,moment:null,traceType:s.traceType,traceLocations:this._flags,namedTraceConfigurationGlobalId:s.globalId,traceConfiguration:null,outSpatialReference:null,resultTypes:null});await this.executeTrace(s,this._unObject.networkServiceUrl,r).then((e=>{if(e.hasOwnProperty("results")){const s={...e},r=[...s.results.elements];s.results.elements.length=0;const o=new Map;for(const e of r)o.has(e.globalId)||(o.set(e.globalId,!0),s.results.elements.push(e));const i=[...this._traceResults];i.splice(t,0,s),this._traceResults=i,null!==s.results&&(this.selectOnComplete&&this.mergeSelection(!0,s.trace),this.showGraphicsOnComplete&&this.addResultGraphicToView(s,s.graphicColor)),this._activeProgress=!1}else{this._activeProgress=!1;const s=[...this._traceResults];s.splice(t,0,e),this._traceResults=s}})).catch((e=>{throw this._activeProgress=!1,e}))}))),e(!0))}))}changeResultGraphicColor(e,t){const s=[...this._traceResults];s.length>0&&s.forEach((s=>{s.trace.globalId===t.trace.globalId&&(s.graphicColor=e,s.graphicEnabled=!0)})),this._traceResults=s,this.removeResultGraphicFromView(t),this.addResultGraphicToView(t,e)}changeFlagSymbol(e,t){this._flags.length>0&&this._flags.forEach((s=>{s.type===e&&t&&(s.mapGraphic.symbol=t)}))}checkCanTrace(){const e={status:!0,issues:[]};let t=[];return this._flags.some((e=>"starting-point"===e.type))?(t=this._traces.filter((e=>e.selected)),t.length<=0&&(e.status=!1,e.issues=["noTrace"])):(t=this._traces.filter((e=>!0===e.selected)),t.length>0?(e.status=!1,e.issues=["noStart"]):(e.status=!1,e.issues=["noStart","noTrace"])),e}checkSelectionExist(){let e=!1;return this._highlightHandler.some((t=>{t&&(e=!0)})),e}clearResult(e){let t=this._traceResults;if(t.length>0){const s=t.filter((t=>t.trace.globalId===e.globalId));s.length>0&&this.removeResultGraphicFromView(s[0]),t=t.filter((t=>t.trace.globalId!==e.globalId))}this._traceResults=t,0===t.length?(this.removeSelection(),this.emit("clear-selection",{resultSet:[]})):this.mergeSelection(!1,e)}executeTrace(e,t,s){const r=this._processFlags(s.traceLocations);return s.traceLocations=r,u(t,s).then((t=>({trace:e,results:t,selectionEnabled:!1,graphicEnabled:!1,graphicColor:this.defaultGraphicColor,status:"success"}))).catch((t=>({trace:e,results:null,selectionEnabled:!1,graphicEnabled:!1,graphicColor:this.defaultGraphicColor,status:t.message})))}getValidSources(){let e=[];const t=this._unObject.dataElement.domainNetworks;for(const s of t)e=e.concat(s.junctionSources),e=e.concat(s.edgeSources);return e}async loadUtilityNetwork(){var e;await this.view.when();const t=this.view.map;if(null!=(e=t.utilityNetworks)&&e.length){const e=t.utilityNetworks.getItemAt(0);await e.load(),this._unObject=e;try{await t.loadAll(),this._populateOutfields()}catch(e){this._populateOutfields()}return e}return null}manageFilterBarrier(e,t){const s=[...this._flags];s.forEach((s=>{s.globalId===t.globalId&&"barrier"===t.type&&s.id===t.id&&(s.isFilterBarrier=e)})),this._flags=s}mergeSelection(e,t){let s=[];const r=[...this._traceResults],o=t.globalId;r.forEach((t=>{o===t.trace.globalId&&(t.selectionEnabled=e),t.selectionEnabled&&null!==t.results.elements&&(s=s.concat(t.results.elements))})),this.selectResults([...new Set(s)])}queryFeaturesById(e){return new Promise((async s=>{const r=_(this._unObject,e),o=this._getUniqueMapLayerViews(this.view),i={layerUrl:r[0].layerUrl,objectIds:r[0].objectIds,outFields:["*"]},l=o.filter((e=>e.layer.parsedUrl.path===r[0].layerUrl));if(l.length>0){const e=await Promise.all(l.map((async e=>{const s=new t,r=e.layer;s.add(r);const o={layers:s,layerInfos:[i],returnGeometry:!0,outSpatialReference:this.view.spatialReference},l=await async function(e){const t=e.layers,s=e.layerInfos,r=e.returnGeometry||!1,o=e.outSpatialReference;return await Promise.all(t.map((e=>e.load()))),(await Promise.all(t.map((async e=>{var t;const i=s.find((t=>{var s;return t.layerUrl===(null==(s=e.parsedUrl)?void 0:s.path)}));if(!i||null==(t=i.objectIds)||!t.length)return{layer:e,featureSet:void 0};const l=e.createQuery();l.returnGeometry=r,l.outFields=i.outFields||["*"],l.outSpatialReference=o,l.gdbVersion=e.gdbVersion,l.objectIds=i.objectIds;const a=h.fromJSON(await m(e,l));return{layer:e,featureSet:a}})))).filter((e=>void 0!==e.featureSet))}(o);return l[0]}))),r=e.filter((e=>e.featureSet.features.length>0));if(r.length>0){let e=[];r.forEach((t=>{e=e.concat(t.featureSet.features)})),r[0].featureSet.features.length=0,r[0].featureSet.features=r[0].featureSet.features.concat(e),s(r[0])}else s(null)}else s(null)}))}queryFlagByHitTest(e,t,s){return this._lookupFlagByHit(e).then((e=>{if(e.length>0){const r=[...this._flags],o=s;return e.forEach((e=>{const s=e.graphic,i=s.attributes.hasOwnProperty("GLOBALID")?s.attributes.GLOBALID:s.attributes.globalid;if(r.filter((e=>e.globalId===i)).length<=0){const e=this._graphicHandler.getFlagGraphic(s.mapPoint,t,s,o);this.view.graphics.add(e),r.push({...s,type:t,globalId:s.attributes.globalid?s.attributes.globalid:s.attributes.GLOBALID,details:s,mapGraphic:e,id:r.length+1})}else if(null!==s.percentAlong){const e=this._graphicHandler.getFlagGraphic(s.mapPoint,t,s,o);this.view.graphics.add(e),r.push({...s,type:t,globalId:s.attributes.globalid?s.attributes.globalid:s.attributes.GLOBALID,details:s,mapGraphic:e,id:r.length+1})}})),this._flags=r,!0}return!1}))}removeResultGraphicFromView(e){const t=this.view.graphics;e.graphicEnabled=!1;t.filter((t=>t.attributes[t.attributes.hasOwnProperty("GLOBALID")?"GLOBALID":"globalid"]===e.trace.globalId)).forEach((e=>{this.view.graphics.remove(e)}))}removeFlag(e){const t=this._flags.filter((t=>{if(t.id!==e.id)return t}));this._removeGraphic(e),this._flags=t}removeSelection(){this._highlightHandler.forEach((e=>{e&&e.remove()})),this._highlightHandler=[]}removeTerminal(e,t){const s=[...this._flags];s.forEach((s=>{if(s.globalId===t.globalId&&t.selectedTerminals.indexOf(parseInt(e,10))>-1){const r=t.selectedTerminals.indexOf(parseInt(e,10));s.selectedTerminals.splice(r,1)}})),this._flags=s}reset(){this._flags=[],this._traceResults=[];const e=[...this._traces];e.forEach((e=>{e.selected=!1})),this._traces=e,this.view.graphics.removeAll(),this.removeSelection(),this.emit("clear-selection",{resultSet:[]})}selectFeaturesById(e){const t=_(this._unObject,e);this._getUniqueMapLayerViews(this.view).forEach((e=>{e.layer.parsedUrl.path===t[0].layerUrl&&this._highlightHandler.push(e.highlight(t[0].objectIds))}))}selectResults(e){if(e.length>0){this.removeSelection();const t=this._groupResultsByNetworkSource(e),s=[];for(const e in t)this.selectFeaturesById(t[e]),s.push(this.queryFeaturesById(t[e]));Promise.all(s).then((e=>{this.emit("select-features",{resultSet:e})}))}else this.removeSelection(),this.emit("clear-selection",{resultSet:[]})}selectTraces(e,t){const s=[...this._traces];s.forEach((s=>{t===s.globalId&&(s.selected=e)})),this._traces=s}selectTracesOnLoad(){this._unObject.hasOwnProperty("sharedNamedTraceConfigurations")&&(this._traces=[...this._unObject.sharedNamedTraceConfigurations],this._traces.forEach((e=>{e.selected=!1,-1!==this.selectedTraces.indexOf(e.globalId)&&(e.selected=!0)})))}zoomToAsset(e){this.view.goTo(e).catch((e=>{console.error(e)}))}_getUniqueMapLayerViews(e){const t=[];return e.layerViews.filter((e=>"feature"===e.layer.type||"group"===e.layer.type)).forEach((e=>{"group"===e.type?e.layerViews.forEach((e=>{t.push(e)})):t.find((t=>t.layer.layerId===e.layer.layerId))||t.push(e)})),t}_processFlags(e){const t=[];return e.forEach((e=>{if(null!==e.selectedTerminals&&e.selectedTerminals.length>0)e.selectedTerminals.forEach((s=>{const r=new d({globalId:e.globalId,percentAlong:e.percentAlong,terminalId:s,type:e.type,isFilterBarrier:e.isFilterBarrier});t.push(r)}));else{const s=new d({globalId:e.globalId,percentAlong:e.percentAlong,terminalId:null,type:e.type,isFilterBarrier:e.isFilterBarrier});t.push(s)}})),t}_getDisplayField(e){const t=e.layer;let s=t.displayField,r="";for(const o in e.attributes){const i=o.toLowerCase();if(i===s.toLowerCase())if(r=e.attributes[o],"assetgroup"===i||"assettype"===i){let o=e.attributes[t.typeIdField.toUpperCase()];o||(o=e.attributes[t.typeIdField.toLowerCase()]),s=t.typeIdField,r=this._checkSubtype(t,o)}else r=this._checkDomain(t.fields,o,r)}return{field:s,value:r}}_checkSubtype(e,t){let s=t;if(null!==e.types&&e.types.length>0){const r=e.types.filter((e=>e.id===t));r.length>0&&(s=r[0].name)}return s}_checkDomain(e,t,s){let r=s;const o=e.filter((e=>e.name.toLowerCase()===t.toLowerCase()));if(o.length>0&&null!==o[0].domain){const e=o[0].domain.codedValues.filter((e=>e.code===s));e.length>0&&(r=e[0].name)}return r}_groupBy(e,t){return e.reduce((function(e,s){return(e[s[t]]=e[s[t]]||[]).push(s),e}),{})}_groupResultsByNetworkSource(e){if(e.length>0){if(e[0].hasOwnProperty("results")){const t=e[0].results.elements;return this._groupBy(t,"networkSourceId")}return this._groupBy(e,"networkSourceId")}if(e.hasOwnProperty("results")){const t=e.results.elements;return this._groupBy(t,"networkSourceId")}return[]}_lookupFlagByHit(e){return this.view.hitTest(e.screenPoint,{exclude:this.view.graphics}).then((t=>{const s=[];if(t.results.length>0){const r=t.results[0];if(r.graphic&&l(r.graphic.geometry))if("polyline"===r.graphic.geometry.type){const t=this._geometryHandler.getPercentageAlong(r.graphic.geometry,e.mapPoint,r.graphic.geometry.spatialReference),o=this._getDisplayField(r.graphic);r.graphic.terminalId=null,r.graphic.isFilterBarrier=!1,r.graphic.allTerminals=null,r.graphic.selectedTerminals=null,r.graphic.percentAlong=t,r.graphic.displayValue=o,r.graphic.mapPoint=r.mapPoint,s.push(r)}else if(("point"===r.graphic.geometry.type||"polygon"===r.graphic.geometry.type)&&null!==this._unObject){const e=this._unObject.getTerminalConfiguration(r.graphic),t=this._getDisplayField(r.graphic);r.graphic.terminalId=e?e.terminals[0].id?e.terminals[0].id:null:1,r.graphic.isFilterBarrier=!1,r.graphic.allTerminals=e||null,r.graphic.selectedTerminals=[e?e.terminals[0].id?e.terminals[0].id:null:1],r.graphic.percentAlong=null,r.graphic.displayValue=t,r.graphic.mapPoint=r.mapPoint,s.push(r)}}return s}))}async _populateOutfields(){const e=this.view.map,t=this.getValidSources();e.layers.forEach((e=>{"group"===e.type?e.layers.forEach((e=>{t.some((t=>t.layerId===e.layerId))&&e.fields.some((e=>"assetgroup"===e.name.toLowerCase()))&&(e.outFields=["assetgroup","assettype","globalid","objectid"])})):t.some((t=>t.layerId===e.layerId))&&e.fields.some((e=>"assetgroup"===e.name.toLowerCase()))&&(e.outFields=["assetgroup","assettype","globalid","objectid"])}))}_removeGraphic(e){this.view.graphics.remove(e.mapGraphic)}};e([n()],E.prototype,"defaultGraphicColor",void 0),e([n()],E.prototype,"flags",void 0),e([n()],E.prototype,"gdbVersion",void 0),e([n()],E.prototype,"selectedTraces",void 0),e([n()],E.prototype,"selectOnComplete",void 0),e([n()],E.prototype,"showGraphicsOnComplete",void 0),e([n()],E.prototype,"showSelectionAttributes",void 0),e([n({readOnly:!0})],E.prototype,"state",null),e([n({value:null})],E.prototype,"view",null),E=e([p(P)],E);const L=E;export{O as G,L as default};
