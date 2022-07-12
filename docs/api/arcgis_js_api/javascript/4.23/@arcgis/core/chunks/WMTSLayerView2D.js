/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{L as t}from"./Logger.js";import{isAbortError as i}from"../core/promiseUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{e as o}from"../geometry/SpatialReference.js";import{B as a,r as l}from"./imageUtils.js";import{L as p}from"./LayerView2D.js";import{T as m}from"./TileInfoView.js";import{T as n}from"./TileKey.js";import{T as c,a as h}from"./TileStrategy.js";import u from"../views/layers/LayerView.js";import{R as j}from"./RefreshableLayerView.js";import"../config.js";import"./object.js";import"./string.js";import"../core/Error.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./tracking.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./writer.js";import"./BitmapTileContainer.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./common.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./mat3f32.js";import"./Bitmap.js";import"./mat3.js";import"./vec2f32.js";import"./DisplayObject.js";import"./Evented.js";import"./enums.js";import"./Texture.js";import"./context-util.js";import"./TiledDisplayObject.js";import"./brushes.js";import"./pixelUtils.js";import"../layers/support/PixelBlock.js";import"./DefaultVertexAttributeLayouts.js";import"./FramebufferObject.js";import"./VertexArrayObject.js";import"./VertexElementDescriptor.js";import"./definitions.js";import"./vec4f32.js";import"./Utils16.js";import"./enums2.js";import"./number2.js";import"./enums4.js";import"./ProgramTemplate.js";import"./Program.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./TileContainer.js";import"./WGLContainer.js";import"./Container.js";import"./EffectView.js";import"./parser.js";import"./colorUtils.js";import"./screenUtils.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../core/Collection.js";import"./shared.js";import"./collectionUtils.js";import"../core/reactiveUtils.js";import"./ClipRect.js";import"../geometry.js";import"./typeUtils.js";import"./jsonMap.js";import"./QueueProcessor.js";import"./Queue.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"./Identifiable.js";import"./Promise.js";const f=[102113,102100,3857,3785,900913],d=[0,0],y=t.getLogger("esri.views.2d.layers.WMTSLayerView2D");let g=class extends(j(a(p(u)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new m(e),this._fetchQueue=new c({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new h({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh())),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),null==(e=this._tileStrategy)||e.destroy(),null==(t=this._fetchQueue)||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(d,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e,t;return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}async fetchTile(e,t={}){const r="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:o=0}=t;if(!r)return this._fetchImage(e,s);const a=new n(0,0,0,0);let p;try{await r.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),p=await this._fetchImage(a,s)}catch(r){if(i(r))throw r;if(o<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const r=new n(i),s=await this.fetchTile(r,{...t,resamplingLevel:o+1});return l(this._tileInfoView,s,r,e)}}throw r}return l(this._tileInfoView,p,a,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some((t=>o(t.tileInfo.spatialReference,e)))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){i(e)||y.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{i(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),t.fulfilled=!0}))};this._tileRequests.set(e,t)}))}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>o(e.tileInfo.spatialReference,t)));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>f.includes(e.tileInfo.spatialReference.wkid)))),i}};e([r()],g.prototype,"_fetchQueue",void 0),e([r({readOnly:!0})],g.prototype,"tileMatrixSet",null),g=e([s("esri.views.2d.layers.WMTSLayerView2D")],g);const w=g;export{w as default};