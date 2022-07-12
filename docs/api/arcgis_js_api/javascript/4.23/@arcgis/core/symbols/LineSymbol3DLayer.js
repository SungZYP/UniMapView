/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{i as r}from"../core/lang.js";import{p as s}from"../chunks/screenUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import n from"./LineStyleMarker3D.js";import p from"./Symbol3DLayer.js";import m from"./patterns/LineStylePattern3D.js";import{s as a}from"../chunks/utils4.js";import{w as l}from"../chunks/colors.js";import{s as c}from"../chunks/materialUtils.js";import{S as u}from"../chunks/Symbol3DMaterial.js";import{a as j,l as h}from"../chunks/symbolLayerUtils3D.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/Clonable.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/JSONSupport.js";import"../chunks/lineMarkers.js";import"../chunks/writer.js";import"./patterns/StylePattern3D.js";import"../chunks/opacityUtils.js";import"../chunks/aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/aaBoundingRect.js";var k;let y=k=class extends p{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=s(1),this.pattern=null,this.marker=null}clone(){const t={enabled:this.enabled,material:r(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,pattern:r(this.pattern)?this.pattern.clone():null,marker:r(this.marker)?this.marker.clone():null};return new k(t)}static fromSimpleLineSymbol(t){var r,o,e;const i={enabled:!0,size:null!=(r=t.width)?r:s(1),cap:t.cap||"butt",join:t.join||"miter",pattern:t.style&&"inside-frame"!==t.style?new m({style:t.style}):null,material:new u({color:(t.color||l).clone()}),marker:t.marker?new n({placement:t.marker.placement,style:t.marker.style,color:null!=(o=null==(e=t.marker.color)?void 0:e.clone())?o:null}):null};return new k(i)}};t([o({type:u,json:{write:!0}})],y.prototype,"material",void 0),t([e({Line:"line"},{readOnly:!0})],y.prototype,"type",void 0),t([o({type:j,json:{write:!0,default:"miter"}})],y.prototype,"join",void 0),t([o({type:h,json:{write:!0,default:"butt"}})],y.prototype,"cap",void 0),t([o(c)],y.prototype,"size",void 0),t([o(a)],y.prototype,"pattern",void 0),t([o({types:{key:"type",base:n,typeMap:{style:n}},json:{write:!0}})],y.prototype,"marker",void 0),y=k=t([i("esri.symbols.LineSymbol3DLayer")],y);const d=y;export{d as default};
