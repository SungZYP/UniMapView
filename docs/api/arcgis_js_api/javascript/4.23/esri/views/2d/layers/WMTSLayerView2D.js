// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/spatialReferenceUtils ./BitmapTileLayerView2D ./LayerView2D ./support/imageUtils ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(f,l,g,m,r,J,K,L,y,t,z,A,u,B,v,C,D,E,F){const G=[102113,102100,3857,3785,900913],H=[0,0],I=g.getLogger("esri.views.2d.layers.WMTSLayerView2D");g=function(h){function k(){var a=h.apply(this,arguments)||this;a._tileStrategy=null;a._fetchQueue=null;a._tileRequests=new Map;a.layer=null;return a}f._inheritsLoose(k,h);var d=k.prototype;d.update=function(a){this._fetchQueue.pause();this._fetchQueue.state=a.state;this._tileStrategy.update(a);this._fetchQueue.resume()};d.attach=function(){if(this.tileMatrixSet){var {tileInfo:a}=
this.tileMatrixSet;this._tileInfoView=new B(a);this._fetchQueue=new C({tileInfoView:this._tileInfoView,concurrency:16,process:(b,c)=>this.fetchTile(b,c)});this._tileStrategy=new D({cachePolicy:"keep",resampling:!0,acquireTile:b=>this.acquireTile(b),releaseTile:b=>this.releaseTile(b),tileInfoView:this._tileInfoView});this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],()=>this._refresh()),this.declaredClass);h.prototype.attach.call(this)}};d.detach=function(){var a,b;h.prototype.detach.call(this);
this.handles.remove(this.declaredClass);null==(a=this._tileStrategy)?void 0:a.destroy();null==(b=this._fetchQueue)?void 0:b.destroy();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};d.moveStart=function(){this.requestUpdate()};d.viewChange=function(){this.requestUpdate()};d.moveEnd=function(){this.requestUpdate()};d.releaseTile=function(a){this._fetchQueue.abort(a.key.id);this._bitmapView.removeChild(a);a.once("detach",()=>a.destroy());this.requestUpdate()};d.acquireTile=function(a){a=
this._bitmapView.createTile(a);const b=a.bitmap;[b.x,b.y]=this._tileInfoView.getTileCoords(H,a.key);b.resolution=this._tileInfoView.getTileResolution(a.key);[b.width,b.height]=this._tileInfoView.tileInfo.size;this._enqueueTileFetch(a);this._bitmapView.addChild(a);this.requestUpdate();return a};d.doRefresh=function(){var a=f._asyncToGenerator(function*(){this.updateRequested||this.suspended||this._refresh()});return function(){return a.apply(this,arguments)}}();d.isUpdating=function(){var a,b;return null!=
(a=null==(b=this._fetchQueue)?void 0:b.updating)?a:!1};d.fetchTile=function(){var a=f._asyncToGenerator(function*(b,c={}){var e="tilemapCache"in this.layer?this.layer.tilemapCache:null;const {signal:n,resamplingLevel:w=0}=c;if(!e)return this._fetchImage(b,n);const p=new v(0,0,0,0);let x;try{yield e.fetchAvailabilityUpsample(b.level,b.row,b.col,p,{signal:n}),x=yield this._fetchImage(p,n)}catch(q){if(m.isAbortError(q))throw q;if(3>w&&(e=this._tileInfoView.getTileParentId(b.id)))return e=new v(e),c=
yield this.fetchTile(e,{...c,resamplingLevel:w+1}),u.resampleImage(this._tileInfoView,c,e,b);throw q;}return u.resampleImage(this._tileInfoView,x,p,b)});return function(b){return a.apply(this,arguments)}}();d.canResume=function(){const a=h.prototype.canResume.call(this);return a?null!==this.tileMatrixSet:a};d.supportsSpatialReference=function(a){return this.layer.activeLayer.tileMatrixSets.some(b=>t.equals(b.tileInfo.spatialReference,a))};d._enqueueTileFetch=function(){var a=f._asyncToGenerator(function*(b){if(!this._fetchQueue.has(b.key.id)){try{const c=
yield this._fetchQueue.push(b.key);b.bitmap.source=c;b.bitmap.width=this._tileInfoView.tileInfo.size[0];b.bitmap.height=this._tileInfoView.tileInfo.size[1];b.once("attach",()=>this.requestUpdate())}catch(c){m.isAbortError(c)||I.error(c)}this.requestUpdate()}});return function(b){return a.apply(this,arguments)}}();d._fetchImage=function(){var a=f._asyncToGenerator(function*(b,c){return this.layer.fetchTile(b.level,b.row,b.col,{signal:c})});return function(b,c){return a.apply(this,arguments)}}();d._refresh=
function(){this._fetchQueue.reset();this._tileStrategy.tiles.forEach(a=>{if(a.bitmap.source){var b={id:a.key.id,fulfilled:!1,promise:this._fetchQueue.push(a.key).then(c=>{a.bitmap.source=c}).catch(c=>{m.isAbortError(c)||(a.bitmap.source=null)}).finally(()=>{a.requestRender();b.fulfilled=!0})};this._tileRequests.set(a,b)}})};d._getTileMatrixSetBySpatialReference=function(a){const b=this.view.spatialReference;if(!a.tileMatrixSets)return null;let c=a.tileMatrixSets.find(e=>t.equals(e.tileInfo.spatialReference,
b));!c&&b.isWebMercator&&(c=a.tileMatrixSets.find(e=>G.includes(e.tileInfo.spatialReference.wkid)));return c};f._createClass(k,[{key:"tileMatrixSet",get:function(){const a=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);if(!a)return null;a.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=a.id);return a}}]);return k}(F.RefreshableLayerView(z.BitmapTileLayerView2D(A.LayerView2DMixin(E))));l.__decorate([r.property()],g.prototype,"_fetchQueue",void 0);
l.__decorate([r.property({readOnly:!0})],g.prototype,"tileMatrixSet",null);return g=l.__decorate([y.subclass("esri.views.2d.layers.WMTSLayerView2D")],g)});