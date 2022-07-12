/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{clone as r,l as s,e as o,b as i,i as n}from"../core/lang.js";import{s as a}from"./screenUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{L as l,d,e as m,n as y,f as u,b as h}from"./mathUtils.js";import{g as f,c as v,b as I,e as g}from"./ray.js";import{d as w}from"./vectorStacks.js";import{g as R}from"./dehydratedFeatures.js";import{i as j,a as O,t as C}from"./intersectorUtilsConversions.js";import{a as S}from"./ray2.js";import{t as b}from"./tileUtils.js";import{a as T,S as U,I as L}from"./Intersector.js";var _;let x=_=class extends e{constructor(t){super(t)}clone(){return new _({type:this.type,id:r(this.id),point:r(this.point),normal:r(this.normal),ray:r(this.ray)})}equals(t){return this.type===t.type&&this.id===t.id&&s(this.point,t.point)&&o(this.normal,t.normal)&&f(this.ray,t.ray)}};t([c()],x.prototype,"type",void 0),t([c({constructOnly:!0})],x.prototype,"id",void 0),t([c({constructOnly:!0})],x.prototype,"point",void 0),t([c({constructOnly:!0})],x.prototype,"normal",void 0),t([c({constructOnly:!0})],x.prototype,"ray",void 0),x=_=t([p("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],x);let A=class extends e{constructor(t){super(t)}initialize(){this.intersector=T(this.view.state.viewingMode),this.intersector.options.hud=!1,this.intersector.options.store=U.MIN}getScreenPointIntersection(t){const e=a(t,w.get()),r=S(this.view.state.camera,e,$);return this._getRayIntersection(r)}_getRayIntersection(t){if(i(t))return null;this.view.sceneIntersectionHelper.intersectToolIntersectorRay(t,this.intersector);const e=this.intersector.results.min;if(!e.getIntersectionPoint(E))return null;const r=this.view.renderCoordsHelper.fromRenderCoords(E,this.view.spatialReference),s=l(e.normal),o=d(s,t.direction)>0?-1:1;if(m(s,s,o),j(e))return new x({type:L.OBJECT,id:`${e.target.layerUid}/${e.target.nodeIndex}/${e.target.componentIndex}`,point:r,normal:s,ray:I(t)});if(O(e))return new x({type:L.TERRAIN,id:e.target.lij.slice(),point:r,normal:s,ray:I(t)});const a=C(e,this.view);if(n(a)){const e=a.layer,o=a.sourceLayer;let i;if(o)if("scene"===o.type)i=R(a,o.objectIdField);else i=a.uid;else i=a.uid;return new x({type:L.OBJECT,id:`${e.uid}/${i}`,point:r,normal:s,ray:I(t)})}return null}_canUpdateFromIntersectionResult(t,e){if(i(t)||!e||t.type!==e.type)return!1;switch(t.type){case L.TERRAIN:{const r=t.id,s=e.id;return r[0]===s[0]&&r[1]===s[1]&&r[2]===s[2]||b(r,s)}case L.OBJECT:case L.I3S:return t.id===e.id}}updateFromIntersectionResult(t){let e;if(t.type===L.TERRAIN&&n(t.point)){const r=E,s=F,o=H;this.view.renderCoordsHelper.toRenderCoords(t.point,s),this.view.renderCoordsHelper.worldUpAtPosition(s,o);const i=this.view.basemapTerrain.elevationBounds,n=this.view.renderCoordsHelper.getAltitude(s),a=i?Math.abs(i.max-i.min)/Math.abs(n):100,c=n>0?1:-1;y(o,o),m(o,o,c*a),u(r,s,o),g(r,s,$),e=this._getRayIntersection($)}else e=this._getRayIntersection(t.ray);return this._canUpdateFromIntersectionResult(e,t)?e.point:null}};t([c()],A.prototype,"view",void 0),t([c()],A.prototype,"intersector",void 0),A=t([p("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],A);const E=h(),F=h(),H=h(),$=v();export{A as L};