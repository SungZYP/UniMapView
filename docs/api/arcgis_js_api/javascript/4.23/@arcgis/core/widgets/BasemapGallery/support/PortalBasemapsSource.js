/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import s from"../../../Basemap.js";import r from"../../../core/Collection.js";import o from"../../../core/Error.js";import e from"../../../core/Handles.js";import{L as a}from"../../../chunks/Loadable.js";import{L as i}from"../../../chunks/Logger.js";import{a as p}from"../../../chunks/Promise.js";import{isAbortError as l}from"../../../core/promiseUtils.js";import{init as m}from"../../../core/watchUtils.js";import{property as n}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as c}from"../../../core/accessorSupport/decorators/subclass.js";import h from"../../../portal/Portal.js";import u from"./LocalBasemapsSource.js";import"../../../chunks/collectionUtils.js";import"../../../chunks/deprecate.js";import"../../../chunks/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../core/urlUtils.js";import"../../../chunks/writer.js";import"../../../geometry/SpatialReference.js";import"../../../portal/PortalItem.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../chunks/reader.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/locale.js";import"../../../portal/PortalQueryParams.js";import"../../../chunks/jsonMap.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../chunks/messages.js";import"../../../chunks/writeUtils.js";import"../../../chunks/Evented.js";import"../../../chunks/shared.js";const j=r.ofType(s),d="esri.widgets.BasemapGallery.support.PortalBasemapsSource",y=i.getLogger(d);let k=class extends(a.LoadableMixin(p(u))){constructor(t){super(t),this._handles=new e,this.basemaps=new j,this.filterFunction=null,this.portal=h.getDefault(),this.query=null,this.updateBasemapsCallback=null}initialize(){this._handles.add([m(this,["filterFunction","loadStatus","portal.basemapGalleryGroupQuery","portal.user","query","updateBasemapsCallback"],(()=>this.refresh()))])}destroy(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null}get state(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"}load(t){return this.addResolvingPromise(this.portal.load(t)),this.notifyChange("state"),Promise.resolve(this)}async refresh(){if("ready"!==this.state)return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const t=this.portal,s=new AbortController;this._lastPortalBasemapFetchController=s,this.notifyChange("state");try{const r=await t.fetchBasemaps(this._toQueryString(this.query),s);this._updateBasemaps(r)}catch(t){if(l(t))throw t;y.warn(new o("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:t})),this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")}_toQueryString(t){return t&&"string"!=typeof t?Object.keys(t).map((s=>`${s}:${t[s]}`)).join(" AND "):t}_updateBasemaps(t=[]){let s=this.filterFunction?t.filter(this.filterFunction):t;s=this.updateBasemapsCallback?this.updateBasemapsCallback(s):s,this.basemaps.removeAll(),this.basemaps.addMany(s)}};t([n({readOnly:!0,type:j})],k.prototype,"basemaps",void 0),t([n()],k.prototype,"filterFunction",void 0),t([n({type:h})],k.prototype,"portal",void 0),t([n()],k.prototype,"query",void 0),t([n({readOnly:!0})],k.prototype,"state",null),t([n()],k.prototype,"updateBasemapsCallback",void 0),k=t([c(d)],k);const f=k;export{f as default};