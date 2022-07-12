/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../PopupTemplate.js";import{symbolTypes as e}from"../../symbols.js";import{a as s}from"../../chunks/JSONSupport.js";import{b as r,i,clone as p,u as l}from"../../core/lang.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{r as m}from"../../chunks/reader.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{w as u}from"../../chunks/writer.js";import d from"../../geometry/Point.js";import{g as c}from"../../chunks/utils9.js";import{e as b,f as y,g as j,s as h,h as S}from"../../chunks/networkEnums.js";import{fromJSON as g}from"../../symbols/support/jsonUtils.js";import"../../core/Collection.js";import"../../chunks/ArrayPool.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/shared.js";import"../../core/accessorSupport/decorators/cast.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../chunks/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/symbolConversion.js";var f;let k=f=class extends s{constructor(t){super(t),this.addedCost=null,this.barrierType=null,this.costs=null,this.curbApproach=null,this.fullEdge=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sideOfEdge=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null}readCosts(t,o){return c(o.attributes,"Attr_")}writeCosts(t,o){if(!r(t)){o.attributes||(o.attributes={});for(const e in t)o.attributes[`Attr_${e}`]=t[e]}}static fromPortalJSON(t){var e,s;return new f({addedCost:null!=(e=t.attributes.AddedCost)?e:null,barrierType:i(t.attributes.BarrierType)?b.fromJSON(t.attributes.BarrierType):null,costs:i(t.attributes.Costs)?JSON.parse(t.attributes.Costs):null,curbApproach:i(t.attributes.CurbApproach)?y.fromJSON(t.attributes.CurbApproach):null,fullEdge:i(t.attributes.FullEdge)?j.fromJSON(t.attributes.FullEdge):null,geometry:d.fromJSON(t.geometry),name:null!=(s=t.attributes.Name)?s:null,objectId:t.attributes.__OBJECTID,popupTemplate:i(t.popupInfo)?o.fromJSON(t.popupInfo):null,status:i(t.attributes.Status)?S.fromJSON(t.attributes.Status):null,symbol:i(t.symbol)?g(t.symbol):null})}clone(){return new f(p({addedCost:this.addedCost,barrierType:this.barrierType,costs:this.costs,curbApproach:this.curbApproach,fullEdge:this.fullEdge,geometry:this.geometry,name:this.name,objectId:this.objectId,popupTemplate:this.popupTemplate,sideOfEdge:this.sideOfEdge,sourceId:this.sourceId,sourceOid:this.sourceOid,status:this.status,symbol:this.symbol}))}toPortalJSON(){return{geometry:i(this.geometry)?this.geometry.toJSON():null,attributes:{__OBJECTID:l(this.objectId),AddedCost:this.addedCost,BarrierType:i(this.barrierType)?b.toJSON(this.barrierType):null,Costs:i(this.costs)?JSON.stringify(this.costs):null,CurbApproach:i(this.curbApproach)?y.toJSON(this.curbApproach):null,FullEdge:i(this.fullEdge)?j.toJSON(this.fullEdge):null,Name:this.name,Status:i(this.status)?S.toJSON(this.status):null},symbol:i(this.symbol)?this.symbol.toJSON():null,popupInfo:i(this.popupTemplate)?this.popupTemplate.toJSON():null}}};k.fields=[{name:"__OBJECTID",alias:"OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AddedCost",alias:"Added Cost",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0,domain:null},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNABarrierType",codedValues:[{name:"Restriction",code:0},{name:"Scaled Cost",code:1},{name:"Added Cost",code:2}]}},{name:"Costs",alias:"Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"FullEdge",alias:"Full Edge",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAIntYesNo",codedValues:[{name:"No",code:0},{name:"Yes",code:1}]}},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"Status",alias:"Status",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAObjectStatus",codedValues:[{name:"OK",code:0},{name:"Not Located on Network",code:1},{name:"Network Unbuilt",code:2},{name:"Prohibited Street",code:3},{name:"Invalid Field Values",code:4},{name:"Cannot Reach",code:5},{name:"Time Window Violation",code:6}]}}],k.popupInfo={title:"Point Barriers",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BarrierType",label:"Barrier Type",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"AddedCost",label:"Added Cost",isEditable:!0,tooltip:"",visible:!0,format:{places:3,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([a({json:{read:!1}})],k.prototype,"addedCost",void 0),t([a({type:b.apiValues,json:{name:"attributes.BarrierType",read:{reader:b.read},write:{writer:b.write}}})],k.prototype,"barrierType",void 0),t([a()],k.prototype,"costs",void 0),t([m("costs",["attributes"])],k.prototype,"readCosts",null),t([u("costs")],k.prototype,"writeCosts",null),t([a({type:y.apiValues,json:{read:{source:"attributes.CurbApproach",reader:y.read}}})],k.prototype,"curbApproach",void 0),t([a({type:j.apiValues,json:{name:"attributes.FullEdge",read:{reader:j.read},write:{writer:j.write}}})],k.prototype,"fullEdge",void 0),t([a({type:d,json:{write:!0}})],k.prototype,"geometry",void 0),t([a({json:{name:"attributes.Name",write:!0}})],k.prototype,"name",void 0),t([a({json:{name:"attributes.ObjectID",write:!0}})],k.prototype,"objectId",void 0),t([a({type:o,json:{read:!1}})],k.prototype,"popupTemplate",void 0),t([a({type:h.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:h.read}}})],k.prototype,"sideOfEdge",void 0),t([a({json:{read:{source:"attributes.SourceID"}}})],k.prototype,"sourceId",void 0),t([a({json:{read:{source:"attributes.SourceOID"}}})],k.prototype,"sourceOid",void 0),t([a({type:S.apiValues,json:{read:{source:"attributes.Status",reader:S.read}}})],k.prototype,"status",void 0),t([a({types:e,json:{read:!1}})],k.prototype,"symbol",void 0),k=f=t([n("esri.rest.support.PointBarrier")],k);const C=k;export{C as default};
