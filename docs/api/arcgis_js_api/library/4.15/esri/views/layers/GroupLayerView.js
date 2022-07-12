// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/accessorSupport/decorators ./LayerView".split(" "),function(m,n,g,d,h,e,k,c,l){return function(f){function a(b){b=f.call(this,b)||this;b.layerViews=new h;return b}g(a,f);a.prototype.initialize=function(){var b=this;this._watchHandles=new k;this._watchHandles.add(this.layerViews.on("change",function(a){return b._layerViewsChangeHandler(a)}));
this._watchHandles.add(this.layerViews.on("after-changes",this._layerViewsAfterChangesHandler.bind(this)));this._watchHandles.add(this.layer.watch("visibilityMode",function(){return b._visibilityModeHandler()},!0));this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0));this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});this._layerViewsAfterChangesHandler()};a.prototype.destroy=function(){this._watchHandles&&(this._watchHandles.destroy(),
this._watchHandles=null)};Object.defineProperty(a.prototype,"layerViews",{set:function(b){this._set("layerViews",e.referenceSetter(b,this._get("layerViews")))},enumerable:!0,configurable:!0});a.prototype.isUpdating=function(){return this.layerViews.some(function(b){return b.updating})};a.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(function(b){return b._isOverridden("visible")})};a.prototype._findLayerViewForLayer=function(b){return b&&this.layerViews.find(function(a){return a.layer===
b})};a.prototype._firstVisibleOnLayerOrder=function(){var b=this,a=this.layer.layers.find(function(a){return(a=b._findLayerViewForLayer(a))&&a.visible});return a&&this._findLayerViewForLayer(a)};a.prototype._enforceExclusiveVisibility=function(b){this._hasLayerViewVisibleOverrides()&&(b||(b=this._firstVisibleOnLayerOrder(),!b&&0<this.layerViews.length&&(b=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(function(a){a.visible=a===b}))};a.prototype._layerViewsChangeHandler=
function(b){var a=this;this._watchHandles.remove("visible");this._watchHandles.add(this.layerViews.map(function(b){return b.watch("visible",function(c){return a._layerViewVisibleHandler(c,b)},!0)}).toArray(),"visible");b=b.added[b.added.length-1];var c=null;b&&b.visible&&(c=b);this._enforceVisibility(c)};a.prototype._layerViewsAfterChangesHandler=function(){var b=this;this._watchHandles.remove("updating");this._watchHandles.add(this.layerViews.map(function(a){return a.watch("updating",function(){return b._updateUpdating()},
!0)}).toArray(),"updating");this._updateUpdating()};a.prototype._enforceVisibility=function(b){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":var a=this.visible;this.layerViews.forEach(function(b){b.visible=a});break;case "exclusive":this._enforceExclusiveVisibility(b)}};a.prototype._visibilityModeHandler=function(){this._enforceVisibility()};a.prototype._layerViewVisibleHandler=function(b,a){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":b!==
this.visible&&(a.visible=this.visible);break;case "exclusive":this._enforceExclusiveVisibility(b&&a)}};a.prototype._visibleHandler=function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()};a.prototype._updateUpdating=function(){this.notifyChange("updating")};d([c.property({cast:e.castForReferenceSetter})],a.prototype,"layerViews",null);d([c.property()],a.prototype,"view",void 0);return a=d([c.subclass("esri.views.layers.GroupLayerView")],
a)}(c.declared(l))});