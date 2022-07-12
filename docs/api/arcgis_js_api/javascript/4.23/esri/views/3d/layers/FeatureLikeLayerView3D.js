// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ../../../rest/support/Query ./interfaces ./graphics/Graphics3DFeatureProcessor ./graphics/QueryEngine ./support/HeatmapFeatureProcessor ./support/projectExtentUtils ../webgl-engine/lib/basicInterfaces ../../support/Scheduler".split(" "),
function(p,l,f,q,h,r,g,F,G,H,t,u,v,w,x,y,z,A,B,C,D){p.FeatureLikeLayerView3D=e=>{e=function(m){function n(){var a=m.apply(this,arguments)||this;a.controller=null;a.updatePolicy=C.UpdatePolicy.SYNC;a.suspendResumeExtentMode="computed";a.slicePlaneEnabled=!1;a.drapeSourceType=x.DrapeSourceType.Features;a.fullExtentInLocalViewSpatialReference=null;a.suspendResumeExtent=null;a._controllerCreated=!1;a.clippingExtent=null;a.supportsHeightUnitConversion=!0;a.pendingController=null;a.queryEngine=null;return a}
l._inheritsLoose(n,m);var d=n.prototype;d.initialize=function(){var a=this;const b=this.layer;"isTable"in b&&b.isTable?this.addResolvingPromise(Promise.reject(new q("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:b}))):(this.addResolvingPromise(this._validateGeometryType()),this.updatingHandles.add(()=>this.layer.renderer,c=>this._recreateProcessor(c),r.initial),this.addResolvingPromise(l._asyncToGenerator(function*(){const c=yield B.toViewIfLocal(a);a.fullExtentInLocalViewSpatialReference=
c;yield a._initializeController()})()),this.updatingHandles.add(()=>this.updatePolicy,c=>this.processor.preferredUpdatePolicy=c),this.queryEngine=new z.default({layerView:this,priority:D.TaskPriority.FEATURE_QUERY_ENGINE}),this.notifyChange("updating"))};d.destroy=function(){this._destroyPendingController();this.controller=h.destroyMaybe(this.controller);this._set("processor",h.destroyMaybe(this.processor));this.queryEngine=h.destroyMaybe(this.queryEngine);this.loadedGraphics=null};d._destroyPendingController=
function(){this.pendingController=h.destroyMaybe(this.pendingController)};d.getGraphicFromGraphicUid=function(a){var b;let c=null;null==(b=this.loadedGraphics)?void 0:b.forEach(k=>{k.uid===a&&(c=u.hydrateGraphic(k,this.layer))});return c};d.whenGraphicBounds=function(a,b){var c;return null==(c=this.processor)?void 0:c.whenGraphicBounds(a,b)};d.computeAttachmentOrigin=function(a,b){var c;return null==(c=this.processor)?void 0:c.computeAttachmentOrigin(a,b)};d.queryFeatures=function(a,b){return this.queryEngine.executeQuery(this._ensureQuery(a),
h.get(b,"signal"))};d.queryObjectIds=function(a,b){return this.queryEngine.executeQueryForIds(this._ensureQuery(a),h.get(b,"signal"))};d.queryFeatureCount=function(a,b){return this.queryEngine.executeQueryForCount(this._ensureQuery(a),h.get(b,"signal"))};d.queryExtent=function(a,b){return this.queryEngine.executeQueryForExtent(this._ensureQuery(a),h.get(b,"signal"))};d._ensureQuery=function(a){return h.isNone(a)?this.createQuery():w.from(a)};d.highlight=function(a){return this.processor.highlight(a,
this.layer.objectIdField)};d.maskOccludee=function(a){return this.processor.maskOccludee(a)};d.canResume=function(){var a;return m.prototype.canResume.call(this)&&!(null!=(a=this.processor)&&a.scaleVisibilitySuspended)};d.getSuspendInfo=function(){const a=m.prototype.getSuspendInfo.call(this);return this.processor?{...a,...this.processor.suspendInfo}:a};d.isUpdating=function(){var a,b,c;return!this.processor||this.processor.destroyed?!1:!(this._controllerCreated&&(null==(a=this.controller)||!a.updating)&&
null!=(b=this.view)&&null!=(c=b.basemapTerrain)&&c.ready&&!this.processor.updating)};d._initializeController=function(){var a=l._asyncToGenerator(function*(){const b=this.createController();this.pendingController=b;yield b.when();this._setControllerWhenInitialized(b)});return function(){return a.apply(this,arguments)}}();d._setControllerWhenInitialized=function(){var a=l._asyncToGenerator(function*(b){try{yield this.when()}catch(c){}this._controllerCreated=!0;this.notifyChange("updating");!this.isResolved()||
this.destroyed?this._destroyPendingController():(yield r.whenOnce(()=>{var c,k;return null==(c=this.view)?void 0:null==(k=c.basemapTerrain)?void 0:k.ready}),this.beforeSetController(b),this.pendingController=null,this.controller=b,this.loadedGraphics=b.graphics,this.notifyChange("updating"))});return function(b){return a.apply(this,arguments)}}();d._updateClippingExtent=function(a){this.clippingExtent=a;if(!this.controller)return!1;switch(this.controller.type){case "stream":return!1;case "feature-tile-3d":return this.controller.extent=
a,!0}};d._validateGeometryType=function(){var a=l._asyncToGenerator(function*(){switch(this.layer.geometryType){case "multipatch":case "multipoint":return Promise.reject(new q("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ${geometryType}",{geometryType:this.layer.geometryType}))}});return function(){return a.apply(this,arguments)}}();d._recreateProcessor=function(a){var b,c;a="heatmap"===(null==a?void 0:a.type);const k="heatmap"===(null==(b=this.processor)?void 0:b.type);
b=this.processor;b&&a===k||(a=a?new A.HeatmapFeatureProcessor({owner:this}):new y({owner:this,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!0,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!0,preferredUpdatePolicy:this.updatePolicy,updateClippingExtent:E=>this._updateClippingExtent(E)}),this._set("processor",a),null==b?void 0:b.destroy(),null==(c=this.queryEngine)?void 0:c.clear(),this.addResolvingPromise(a.setup()))};
d._getResourceInfo=function(){var a,b;const c=this.controller instanceof v.FeatureTileController3D?this.controller:null;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:null!=(a=null==c?void 0:c.maximumNumberOfFeatures)?a:-1,totalNumberOfFeatures:null!=(b=null==c?void 0:c.serviceDataCount)?b:-1,nodes:0,...this.processor.performanceInfo}};l._createClass(n,[{key:"legendEnabled",get:function(){var a;return this.canResume()&&(null==(a=this.processor)?void 0:a.legendEnabled)}},
{key:"graphics3DProcessor",get:function(){var a;return"graphics-3d"===(null==(a=this.processor)?void 0:a.type)?this.processor:null}},{key:"heatmapProcessor",get:function(){var a;return"heatmap"===(null==(a=this.processor)?void 0:a.type)?this.processor:null}},{key:"performanceInfo",get:function(){return this._getResourceInfo()}}]);return n}(e);f.__decorate([g.property()],e.prototype,"loadedGraphics",void 0);f.__decorate([g.property()],e.prototype,"suspended",void 0);f.__decorate([g.property({readOnly:!0})],
e.prototype,"legendEnabled",null);f.__decorate([g.property()],e.prototype,"updating",void 0);f.__decorate([g.property()],e.prototype,"controller",void 0);f.__decorate([g.property()],e.prototype,"processor",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"updatePolicy",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"suspendResumeExtentMode",void 0);f.__decorate([g.property({type:Boolean})],e.prototype,"slicePlaneEnabled",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,
"suspendInfo",void 0);f.__decorate([g.property()],e.prototype,"graphics3DProcessor",null);f.__decorate([g.property()],e.prototype,"heatmapProcessor",null);return e=f.__decorate([t.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],e)};Object.defineProperty(p,"__esModule",{value:!0})});