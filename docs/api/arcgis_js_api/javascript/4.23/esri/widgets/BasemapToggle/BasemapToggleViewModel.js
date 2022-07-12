// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/compilerUtils ../../core/Evented ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../geometry/projection ../../geometry/support/spatialReferenceUtils ../../support/basemapDefinitions ../../support/basemapUtils".split(" "),function(k,d,q,b,r,m,f,z,A,w,
x,n,t,y,g){b=function(u){function h(a){a=u.call(this,a)||this;a._basemapCache={};a._loadingProjectionEngine=!1;a.nextBasemap=g.ensureType("hybrid",a._basemapCache);a.view=null;a.toggle=a.toggle.bind(k._assertThisInitialized(a));return a}k._inheritsLoose(h,u);var l=h.prototype;l.initialize=function(){m.watch(()=>this.nextBasemap,a=>{a&&!a.loaded&&a.load().catch(()=>{})},m.initial)};l.destroy=function(){this.view=null;g.destroyCache(this._basemapCache);this._basemapCache=null};l.castNextBasemap=function(a){return g.ensureType(a,
this._basemapCache)};l.toggle=function(){var a=k._asyncToGenerator(function*(){if("disabled"!==this.state){var {activeBasemap:c,nextBasemap:e}=this,v="spatialReferenceLocked"in this.view?this.view.spatialReferenceLocked:!0;if(!v){yield m.whenOnce(()=>!this._nextBasemapSpatialReferenceTask.updating);if(e!==this.nextBasemap||c!==this.activeBasemap)return;const {spatialReference:p}=this._nextBasemapSpatialReferenceTask;!r.isSome(p)||t.equals(this.view.spatialReference,p)||n.isLoaded()||n.canProjectWithoutEngine(this.view.spatialReference,
p)||(this._loadingProjectionEngine=!0,yield n.load(),this._loadingProjectionEngine=!1);if(e!==this.nextBasemap||c!==this.activeBasemap)return}this.view.map.basemap=e;v||!r.isSome(this._nextBasemapSpatialReferenceTask.spatialReference)||t.equals(this.view.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(this.view.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference);this.nextBasemap=c;this.emit("toggle",{previous:c,current:e})}});return function(){return a.apply(this,
arguments)}}();h.getThumbnailUrl=function(a){if(!a)return null;var {thumbnailUrl:c}=a;return c?c:(c=g.getWellKnownBasemapId(a))?y.esriBasemapDefinitions[c].thumbnailUrl:(a=a.baseLayers.find(e=>!!q.typeCast(e)().get("portalItem.thumbnailUrl")))?q.typeCast(a)().get("portalItem.thumbnailUrl"):null};k._createClass(h,[{key:"_nextBasemapSpatialReferenceTask",get:function(){return g.findSpatialReference(this.view,this.nextBasemap)}},{key:"activeBasemap",get:function(){var a,c,e;return g.ensureType(null!=
(a=null==(c=this.view)?void 0:null==(e=c.map)?void 0:e.basemap)?a:"topo",this._basemapCache)}},{key:"state",get:function(){var a;return null!=(a=this.view)&&a.ready?this._loadingProjectionEngine?"loading":"ready":"disabled"}}]);return h}(b.EventedAccessor);d.__decorate([f.property()],b.prototype,"_loadingProjectionEngine",void 0);d.__decorate([f.property({readOnly:!0})],b.prototype,"_nextBasemapSpatialReferenceTask",null);d.__decorate([f.property({readOnly:!0})],b.prototype,"activeBasemap",null);
d.__decorate([f.property()],b.prototype,"nextBasemap",void 0);d.__decorate([w.cast("nextBasemap")],b.prototype,"castNextBasemap",null);d.__decorate([f.property({readOnly:!0})],b.prototype,"state",null);d.__decorate([f.property()],b.prototype,"view",void 0);d.__decorate([f.property()],b.prototype,"toggle",null);return b=d.__decorate([x.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],b)});