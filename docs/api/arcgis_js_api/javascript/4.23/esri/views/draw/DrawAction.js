// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/maybe ../../core/promiseUtils ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/GraphicsLayer ../../layers/graphics/dehydratedFeatures ../ViewingMode ../2d/interactive/SnappingVisualizer2D ../interactive/coordinateHelper ../interactive/editGeometry/EditGeometry ../interactive/editGeometry/EditGeometryOperations ../interactive/snapping/SnappingContext".split(" "),
function(m,g,f,d,v,q,h,F,G,H,w,x,y,r,z,A,t,B,C){var n;f=n=function(u){function l(a){var c;var b=u.call(this,a)||this;b._hasZ=null;b._cursorScreenPoint=null;b._snappingTask=null;b._stagedVertex=null;b._stagedVertexUnsnapped=null;b._lastVertexUnsnapped=null;b._nativeEventHistory={undoStack:[],redoStack:[]};b.interactiveUndoDisabled=!1;b.history=[];b.redoHistory=[];b.snapToScene=!1;b.view=null;b.elevationInfo=null;b.defaultZ=0;b._coordinateHelper=A.createCoordinateHelper(a.hasZ,!1,a.view.spatialReference);
b._snappingManager=a.snappingManager;b._editGeometryOperations=new B.EditGeometryOperations(new t.EditGeometry(null!=(c=a.editGeometryType)?c:"polygon",b._coordinateHelper,r.ViewingMode.Local));b._snappingGraphicsLayer=new x({id:n.SNAPPING_GRAPHICS_LAYER_ID,listMode:"hide",internal:!0});b._snappingContext=new C.SnappingContext({editGeometryOperations:b._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:"mouse",visualizer:new z.SnappingVisualizer2D(b._snappingGraphicsLayer)});
b._activeComponent=new t.Component(a.view.spatialReference,r.ViewingMode.Local);b._editGeometryOperations.data.components.push(b._activeComponent);return b}m._inheritsLoose(l,u);var e=l.prototype;e.normalizeCtorArgs=function(a){a={...a};delete a.editGeometryType;return a};e.initialize=function(){"2d"===this.view.type&&this.view.map.layers.add(this._snappingGraphicsLayer)};e.destroy=function(){this._snappingTask=d.abortMaybe(this._snappingTask);this.view.map.layers.remove(this._snappingGraphicsLayer);
this._snappingGraphicsLayer.destroy();d.isSome(this._snappingManager)&&this._snappingManager.doneSnapping();this._editGeometryOperations.destroy()};e.canUndo=function(){return this._editGeometryOperations.canUndo};e.canRedo=function(){return this._editGeometryOperations.canRedo};e.undo=function(){this.canUndo&&this._editGeometryOperations.undo()};e.redo=function(){this.canRedo&&this._editGeometryOperations.redo()};e.getCoordsFromScreenPoint=function(a){a=this.screenToMap(a);return d.isSome(a)?a.hasZ?
[a.x,a.y,a.z]:[a.x,a.y]:null};e.getCoordsAndPointFromScreenPoint=function(a){a=this.screenToMap(a);return d.isSome(a)?a.hasZ?{vertex:[a.x,a.y,a.z],mapPoint:a}:{vertex:[a.x,a.y],mapPoint:a}:null};e._pushCursorVertex=function(a){var c=this;const b=y.makeDehydratedPoint(a[0],a[1],null,this.view.spatialReference);this._stagedVertexUnsnapped=b;d.isNone(this._snappingManager)?this._stagedVertex=b:(this._stagedVertex=this._snappingManager.update(b,this._snappingContext),this._snappingTask=v.createTask(function(){var p=
m._asyncToGenerator(function*(k){return d.isSome(c._snappingManager)?(k=yield c._snappingManager.snap(b,c._snappingContext,k),k.valid&&(c._stagedVertex=k.apply(),c.notifyChange("vertices")),k):null});return function(k){return p.apply(this,arguments)}}()))};e._popCursorVertex=function(){this._stagedVertexUnsnapped=this._stagedVertex=null;this.notifyChange("vertices")};e.getGeometryZValue=function(){return this.defaultZ};e.screenToMap=function(a){var c=null;"3d"===this.view.type?this.hasZ?(c=d.unwrapOr(this.elevationInfo,
D),c=this.view.sceneIntersectionHelper.intersectElevationFromScreen(q.createScreenPointArray(a.x,a.y),c,this.getGeometryZValue())):(c=d.unwrapOr(this.elevationInfo,E),c=this.view.sceneIntersectionHelper.intersectElevationFromScreen(q.createScreenPointArray(a.x,a.y),c,0),d.isSome(c)&&(c.z=void 0)):(c=this.view.toMap(a),d.isSome(c)&&(c.z=this.hasZ?this.getGeometryZValue():void 0));return c};e._isDuplicateOfLastVertex=function(a){const c=this._editGeometryOperations.data.components[0].getLastVertex();
if(d.isSome(c)&&a[0]===c[0]&&a[1]===c[1])return!0;const {x:b,y:p}=this._coordinateHelper.vectorToDehydratedPoint(a);return d.isSome(this._lastVertexUnsnapped)&&b===this._lastVertexUnsnapped.x&&p===this._lastVertexUnsnapped.y?!0:!1};e._vertexAddHandler=function(a){const c=d.isSome(this._stagedVertex)?this._coordinateHelper.pointToArray(this._stagedVertex):this.getCoordsFromScreenPoint(this._cursorScreenPoint);d.isSome(c)&&this._addVertex(c,a.native)};e._drawCompleteHandler=function(a){this._completeDrawing(a.native)};
m._createClass(l,[{key:"_committedVertices",get:function(){return this._editGeometryOperations.data.components[0].vertices.map(a=>a.pos)}},{key:"vertices",get:function(){return d.isSome(this._stagedVertex)?[...this._committedVertices,this._coordinateHelper.pointToArray(this._stagedVertex)]:this._committedVertices}},{key:"hasZ",get:function(){return d.isSome(this._hasZ)?this._hasZ:"3d"===this.view.type},set:function(a){this._hasZ=a;this.notifyChange("hasZ")}}]);return l}(f.EventedAccessor);f.SNAPPING_GRAPHICS_LAYER_ID=
"DrawAction-snapping-graphics-layer";g.__decorate([h.property({readOnly:!0})],f.prototype,"vertices",null);g.__decorate([h.property({type:Boolean,nonNullable:!0})],f.prototype,"interactiveUndoDisabled",void 0);g.__decorate([h.property({readOnly:!0})],f.prototype,"history",void 0);g.__decorate([h.property({readOnly:!0})],f.prototype,"redoHistory",void 0);g.__decorate([h.property()],f.prototype,"snapToScene",void 0);g.__decorate([h.property()],f.prototype,"view",void 0);g.__decorate([h.property()],
f.prototype,"elevationInfo",void 0);g.__decorate([h.property({nonNullable:!0})],f.prototype,"defaultZ",void 0);g.__decorate([h.property()],f.prototype,"hasZ",null);f=n=g.__decorate([w.subclass("esri.views.draw.DrawAction")],f);const D={mode:"absolute-height",offset:0},E={mode:"on-the-ground",offset:0};return f});