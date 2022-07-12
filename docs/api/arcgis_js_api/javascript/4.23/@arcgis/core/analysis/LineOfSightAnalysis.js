/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{A as t}from"../chunks/Analysis.js";import r from"./LineOfSightAnalysisObserver.js";import o from"./LineOfSightAnalysisTarget.js";import e from"../core/Collection.js";import{c as i,r as n}from"../chunks/collectionUtils.js";import{b as p,i as c}from"../core/lang.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import l from"../geometry/Extent.js";import{f as u,e as h}from"../chunks/aaBoundingRect.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Clonable.js";import"../chunks/Identifiable.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../chunks/mathUtils.js";import"../chunks/common.js";const j=e.ofType(o);let g=class extends t{constructor(s){super(s),this.type="line-of-sight",this.observer=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}get targets(){return this._get("targets")||new j}set targets(s){this._set("targets",n(s,this.targets,j))}get extent(){if(p(this.observer)||p(this.observer.position))return null;const s=this.observer.position,t=u(s.x,s.y,s.x,s.y);for(const s of this.targets)c(s.position)&&h(t,s.position,t);return l.fromBounds(t,s.spatialReference)}get requiredPropertiesForEditing(){return[this.observer]}};s([a({type:["line-of-sight"]})],g.prototype,"type",void 0),s([a({type:r})],g.prototype,"observer",void 0),s([a({cast:i,type:j,nonNullable:!0})],g.prototype,"targets",null),s([a({value:null})],g.prototype,"extent",null),s([a({readOnly:!0})],g.prototype,"requiredPropertiesForEditing",null),s([a({readOnly:!0})],g.prototype,"nonEditableMessage",void 0),g=s([m("esri.analysis.LineOfSightAnalysis")],g);const y=g;export{y as default};