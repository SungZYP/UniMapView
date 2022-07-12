// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../analysis/SlicePlane ../../../../../core/clock ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/scheduling ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/mat4 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/boundedPlane ../../../../../geometry/support/plane ../../../../../geometry/support/ray ../../../../../geometry/support/vectorStacks ../../manipulatorUtils ./sliceToolConfig ./sliceToolUtils ./images/Factory ../../editingTools/dragEventPipeline3D ../../../support/geometryUtils/ray ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/IntersectorInterfaces ../../../../interactive/dragEventPipeline ../../../../interactive/InteractiveToolBase ../../../../support/screenUtils".split(" "),
function(G,q,K,L,H,d,C,M,y,t,p,W,X,N,D,l,z,h,r,O,n,P,m,f,I,A,Q,R,S,B,T,w){function J(u,v,e,a){e=f.createShiftPlane(e,h.normal(a),u.direction,r.create());a=z.create();return r.intersectRay(e,u,a)?{type:"shift",creatingPointerId:v,hasBeenDragged:!1,shiftPlane:e,depth:0,startPoint:a}:null}function E(u){return"mouse"!==u.pointerType||0===u.button}p=function(u){function v(a){var b=u.call(this,a)||this;b.clock=L.clock;b._previewPlaneOpacity=1;b.analysisView=null;b.layersMode="none";b.shiftManipulator=null;
b.rotateHeadingManipulator=null;b.rotateTiltManipulator=null;b.resizeManipulators=null;b.disableEngineLayers=!1;b._handles=new H;b._viewHandles=new H;b._frameTask=null;b._prevPointerMoveTimeout=null;b._previewPlaneGridVisualElement=null;b._previewPlaneOutlineVisualElement=null;b._startPlane=h.create();b._previewPlane=null;b._activeKeyModifiers={};b._lastCursorPosition=y.createScreenPoint();b._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},
{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}];b._intersector=R.newIntersector(a.view.state.viewingMode);b._intersector.options.store=S.StoreResults.MIN;return b}G._inheritsLoose(v,u);var e=v.prototype;e.initialize=function(){var a=()=>{if("creating"===this.toolState||"created"===this.toolState)throw Error("Unexpected toolState");return!this.destroyed};if(a()&&a()){if(null==this.analysis)throw Error("SliceTool requires valid model, but null was provided.");this.analysisViewData=this.analysisView;
this.rotateHeadingImage=I.getRotateHeadingTexture(this.view.toolViewManager.textures);this.rotateTiltImage=I.getTiltRotateTexture(this.view.toolViewManager.textures);var b=c=>{this._updateManipulatorsInteractive(c);c.grabbing||(d.isSome(this.analysisViewData.plane)&&h.copy(this.analysisViewData.plane,this._startPlane),this.inputState=null)};this.shiftManipulator=f.createShiftManipulator(this.view);this.manipulators.add(this.shiftManipulator);this.shiftManipulator.events.on("grab-changed",c=>{this._onShiftGrab(c);
b(this.shiftManipulator)});this._handles.add(this._createShiftDragPipeline(this.shiftManipulator));this.rotateHeadingManipulator=f.createRotateManipulator(this.view,this.rotateHeadingImage.texture);this.manipulators.add(this.rotateHeadingManipulator);this.rotateHeadingManipulator.events.on("grab-changed",c=>{this._onRotateHeadingGrab(c);b(this.rotateHeadingManipulator)});this._handles.add(this._createRotateHeadingDragPipeline(this.rotateHeadingManipulator));this.rotateTiltManipulator=f.createRotateManipulator(this.view,
this.rotateTiltImage.texture);this.manipulators.add(this.rotateTiltManipulator);this.rotateTiltManipulator.events.on("grab-changed",c=>{this._onRotateTiltGrab(c);b(this.rotateTiltManipulator)});this._handles.add(this._createRotateTiltDragPipeline(this.rotateTiltManipulator));this.resizeManipulators=this._resizeHandles.map((c,g)=>{const k=f.createResizeManipulator(this.view,c);k.events.on("grab-changed",x=>{this._onResizeGrab(x,g);b(k)});this._handles.add(this._createResizeDragPipeline(k));return k});
this.manipulators.addMany(this.resizeManipulators);this._previewPlaneGridVisualElement=f.createGridVisualElement(this.view);this._previewPlaneOutlineVisualElement=f.createOutlineVisualElement(this.view);this._previewPlaneOutlineVisualElement.width=m.PLANE_PREVIEW_OUTLINE_WIDTH;this._handles.add(this.analysisViewData.watch("plane",()=>this._updateManipulators(),!0));this.startToolCreation();a=C.watch(()=>this.state,c=>{"sliced"===c&&this.finishToolCreation()},C.syncAndInitial);this._handles.add([a,
C.watch(()=>this.view.state.camera,()=>this._onCameraChange())])}};e.destroy=function(){this.rotateHeadingImage=d.releaseMaybe(this.rotateHeadingImage);this.rotateTiltImage=d.releaseMaybe(this.rotateTiltImage);this._handles=d.destroyMaybe(this._handles);this._viewHandles=d.destroyMaybe(this._viewHandles);this._removeFrameTask();this._clearPointerMoveTimeout();this._previewPlaneOutlineVisualElement=d.destroyMaybe(this._previewPlaneOutlineVisualElement);this._previewPlaneGridVisualElement=d.destroyMaybe(this._previewPlaneGridVisualElement)};
e.enterExcludeLayerMode=function(){d.isNone(this.analysisViewData.plane)||(this._set("layersMode","exclude"),this.active||(this.view.activeTool=this))};e.exitExcludeLayerMode=function(){d.isNone(this.analysisViewData.plane)||(this._set("layersMode","none"),this.active&&(this.view.activeTool=null))};e.onDeactivate=function(){this._updateMouseCursor();this._set("layersMode","none");this._updatePreviewPlane(null)};e.onShow=function(){this._updateVisibility(!0)};e.onHide=function(){this._updateVisibility(!1)};
e._updateVisibility=function(a){this.analysis.visible=a;this._updateMouseCursor();this._updateManipulators();a||this._clearPointerMoveTimeout()};e.onInputEvent=function(a){switch(a.type){case "pointer-drag":if(!E(a))break;this._isPlacingSlicePlane?this._onClickPlacePlane(a)&&(a.stopPropagation(),this._updateMouseCursor()):this._onPointerDrag(a)&&a.stopPropagation();break;case "pointer-move":this._onPointerMove(a);this._updateMouseCursor();break;case "pointer-up":this._onPointerUp(a)&&a.stopPropagation();
break;case "immediate-click":if(!E(a))break;this._onClickPlacePlane(a)&&(a.stopPropagation(),this._updateMouseCursor());break;case "click":if(!E(a))break;this._onClickExcludeLayer(a)&&a.stopPropagation();break;case "drag":this.inputState&&a.stopPropagation();break;case "key-down":this._onKeyDown(a)&&a.stopPropagation();break;case "key-up":this._onKeyUp(a)&&a.stopPropagation()}};e.onEditableChange=function(){this.analysisView&&(this.analysisView.editable=this.editable)};e._onPointerDrag=function(a){const b=
this.inputState;if(a.pointerId===this._creatingPointerId&&d.isSome(b)&&"shift"===b.type){const c=w.createScreenPointFromEvent(a);this.shiftManipulator.events.emit("drag",{action:b.hasBeenDragged?"update":"start",pointerType:a.pointerType,start:c,screenPoint:c});return b.hasBeenDragged=!0}return!1};e._onPointerMove=function(a){this._lastCursorPosition.x=a.x;this._lastCursorPosition.y=a.y;this._resetPointerMoveTimeout();"touch"!==a.pointerType&&this._updatePreviewPlane(w.createScreenPointFromEvent(a),
this._activeKeyModifiers)};e._onCameraChange=function(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers);this._updateManipulators()};e._onPointerUp=function(a){return a.pointerId===this._creatingPointerId&&d.isSome(this.analysisViewData.plane)?(a=w.createScreenPointFromEvent(a),this.shiftManipulator.events.emit("drag",{action:"end",start:a,screenPoint:a}),h.copy(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0):!1};e._onClickPlacePlane=function(a){if("exclude"===
this.layersMode)return!1;if(this._isPlacingSlicePlane){var b=w.createScreenPointFromEvent(a);const c=h.create();if(this._pickPlane(b,!1,this._activeKeyModifiers,c))return h.copy(c,this._startPlane),this.analysis.shape=f.planeToShape(c,this.view,this.view.spatialReference,new K),"pointer-drag"===a.type&&(b=this._calculatePickRay(b),this.inputState=J(b,a.pointerId,c.origin,c)),!0}return!1};e._onClickExcludeLayer=function(a){if("exclude"!==this.layersMode||!this.created)return!1;this.view.hitTest(w.createScreenPointFromEvent(a)).then(b=>
{b.results.length?(b=(b=b.results[0])&&b.graphic)&&(b=b.sourceLayer||b.layer)&&this.analysis.excludedLayers.push(b):b.ground.layer?this.analysis.excludedLayers.push(b.ground.layer):this.analysis.excludeGroundSurface=!0});this._set("layersMode","none");this.active&&(this.view.activeTool=null);return!0};e._onKeyDown=function(a){return a.key===m.forceVerticalModifier||a.key===m.forceHorizontalModifier?(this._activeKeyModifiers[a.key]=!0,d.isSome(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,
this._activeKeyModifiers),!0):!1};e._onKeyUp=function(a){return a.key!==m.forceVerticalModifier&&a.key!==m.forceHorizontalModifier||!this._activeKeyModifiers[a.key]?!1:(delete this._activeKeyModifiers[a.key],d.isSome(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)};e._onShiftGrab=function(a){"start"!==a.action||d.isNone(this.analysisViewData.plane)||(a=this._calculatePickRay(a.screenPoint),h.copy(this.analysisViewData.plane,this._startPlane),this.inputState=
J(a,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane))};e._createShiftDragPipeline=function(a){return B.createManipulatorDragEventPipeline(a,(b,c,g)=>{b=this.inputState;if(!d.isNone(b)&&"shift"===b.type){var k=d.isSome(this.analysisViewData.plane)?h.copy(this.analysisViewData.plane,h.create()):null;c.next(A.screenToRenderPlane(this.view,b.shiftPlane)).next(this._shiftDragAdjustSensitivity(b)).next(this._shiftDragUpdatePlane(b));g.next(()=>{d.isSome(k)&&this._updateBoundedPlane(k)})}})};
e._shiftDragAdjustSensitivity=function(a){return b=>{if(d.isNone(this.analysisViewData.plane))return null;const c=Math.min((1-Math.abs(l.dot(h.normal(this.analysisViewData.plane),b.ray.direction)/l.length(b.ray.direction)))/.001,1),g=-r.signedDistance(this._startPlane.plane,b.renderEnd),k=-r.signedDistance(this._startPlane.plane,a.startPoint);a.depth=a.depth*(1-c)+g*c-k;return b}};e._shiftDragUpdatePlane=function(a){return()=>{if(!d.isNone(this.analysisViewData.plane)){var b=l.copy(n.sv3d.get(),this._startPlane.origin),
c=l.copy(n.sv3d.get(),h.normal(this._startPlane));l.scale(c,c,-a.depth);l.add(c,c,b);b=h.fromValues(c,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,h.create());this._updateBoundedPlane(b)}}};e._onRotateHeadingGrab=function(a){if("start"===a.action&&!d.isNone(this.analysisViewData.plane)){var b=f.createRotatePlane(this.analysisViewData.plane,this.view.renderCoordsHelper,f.RotationAxis.HEADING,r.create());a=this._calculatePickRay(a.screenPoint);var c=z.create();r.intersectRay(b,
a,c)&&(h.copy(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:b,startPoint:c})}};e._createRotateHeadingDragPipeline=function(a){return B.createManipulatorDragEventPipeline(a,(b,c,g)=>{b=this.inputState;if(!d.isNone(b)&&"rotate"===b.type){var k=d.isSome(this.analysisViewData.plane)?h.copy(this.analysisViewData.plane,h.create()):null;c.next(A.screenToRenderPlane(this.view,b.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(b)).next(this._rotateDragUpdatePlaneFromRotate());
g.next(()=>{d.isSome(k)&&this._updateBoundedPlane(k)})}})};e._onRotateTiltGrab=function(a){if("start"===a.action&&!d.isNone(this.analysisViewData.plane)){var b=f.createRotatePlane(this.analysisViewData.plane,this.view.renderCoordsHelper,f.RotationAxis.TILT,r.create());a=this._calculatePickRay(a.screenPoint);var c=z.create();r.intersectRay(b,a,c)&&(h.copy(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:b,startPoint:c})}};e._createRotateTiltDragPipeline=function(a){return B.createManipulatorDragEventPipeline(a,
(b,c,g)=>{b=this.inputState;if(!d.isNone(b)&&"rotate"===b.type){var k=d.isSome(this.analysisViewData.plane)?h.copy(this.analysisViewData.plane,h.create()):null;c.next(A.screenToRenderPlane(this.view,b.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(b)).next(this._rotateDragUpdatePlaneFromRotate());g.next(()=>{d.isSome(k)&&this._updateBoundedPlane(k)})}})};e._rotateDragRenderPlaneToRotate=function(a){return b=>{if(d.isNone(this.analysisViewData.plane))return null;const c=r.normal(a.rotatePlane),
g=P.calculateInputRotationTransform(a.startPoint,b.renderEnd,this.analysisViewData.plane.origin,c);return{...b,rotateAxis:c,rotateAngle:g}}};e._rotateDragUpdatePlaneFromRotate=function(){return a=>{if(!d.isNone(this.analysisViewData.plane)){var b=D.fromRotation(n.sm4d.get(),a.rotateAngle,a.rotateAxis);a=l.transformMat4(n.sv3d.get(),this._startPlane.basis1,b);b=l.transformMat4(n.sv3d.get(),this._startPlane.basis2,b);a=h.fromValues(this.analysisViewData.plane.origin,a,b,h.create());this._updateBoundedPlane(a)}}};
e._onResizeGrab=function(a,b){if("start"===a.action&&!d.isNone(this.analysisViewData.plane)){a=this._calculatePickRay(a.screenPoint);var c=n.sv3d.get();r.intersectRay(this.analysisViewData.plane.plane,a,c)&&(h.copy(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:b,startPoint:z.clone(c)})}};e._createResizeDragPipeline=function(a){return B.createManipulatorDragEventPipeline(a,(b,c,g)=>{b=this.inputState;if(!d.isNone(b)&&"resize"===b.type&&!d.isNone(this.analysisViewData.plane)){var k=
h.copy(this.analysisViewData.plane,h.create());c.next(A.screenToRenderPlane(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(b));g.next(()=>{this._updateBoundedPlane(k)})}})};e._resizeDragUpdatePlane=function(a){return b=>{d.isNone(this.analysisViewData.plane)||(b=f.resizePlane(this._resizeHandles[a.activeHandleIdx],a.startPoint,b.renderEnd,this.view.state.camera,this._startPlane,h.copy(this.analysisViewData.plane)),this._updateBoundedPlane(b))}};e._updateBoundedPlane=
function(a){const b=this.analysisViewData;if(d.isSome(b))b.plane=a;else throw Error("valid internal object expected");};e._updatePreviewPlane=function(a,b={}){let c=this._previewPlane;this._previewPlane=null;if(d.isNone(a))this._removeFrameTask(),this._updateManipulators();else{if(!this.analysisViewData.plane&&this.active){const g=d.isSome(c)?c:h.create();c=d.isSome(c)?h.copy(c,U):null;this._pickPlane(a,!0,b,g)&&(a=m.PREVIEW_FADE_DOT_THRESHOLD,b=!1,d.isSome(c)&&(b=l.dot(c.plane,g.plane)<a||l.dot(l.normalize(n.sv3d.get(),
c.basis1),l.normalize(n.sv3d.get(),g.basis1))<a),b&&(this._previewPlaneOpacity=0),this._previewPlane=g)}d.isSome(this._previewPlane)&&d.isNone(this._frameTask)&&0===this._previewPlaneOpacity?this._frameTask=M.addFrameTask({update:({deltaTime:g})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+g/(1E3*m.PREVIEW_FADE_DURATION_SECONDS),1);this._updateManipulators();1===this._previewPlaneOpacity&&this._removeFrameTask()}}):d.isNone(this._previewPlane)&&d.isSome(this._frameTask)?this._removeFrameTask():
d.isSome(this._previewPlane)&&this._updateManipulators()}};e._removeFrameTask=function(){this._frameTask=d.removeMaybe(this._frameTask)};e._calculatePickRay=function(a){const b=O.create();a=y.screenPointObjectToArray(a,V);Q.fromScreen(this.view.state.camera,a,b);l.normalize(b.direction,b.direction);return b};e._pickMinResult=function(a){a=y.screenPointObjectToArray(a,n.sv2d.get());this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector);return this._intersector.results.min};
e._pickPlane=function(a,b,c,g){var k=this._pickMinResult(a);a=n.sv3d.get();if(!k.getIntersectionPoint(a))return!1;k=k.getTransformedNormal(n.sv3d.get());const x=this.view.state.camera;0<l.dot(k,x.viewForward)&&l.scale(k,k,-1);const F=f.calculatePlaneHalfSize(a,x);b=(b?1:-1)*F*m.INITIAL_DEPTH_OFFSET_FRAC;b=l.scale(n.sv3d.get(),k,b);l.add(b,b,a);a=this.analysis.tiltEnabled?f.SliceOrientation.TILTED:f.SliceOrientation.HORIZONTAL_OR_VERTICAL;f.createPlane(b,k,F,F,x,c[m.forceVerticalModifier]?f.SliceOrientation.VERTICAL:
c[m.forceHorizontalModifier]?f.SliceOrientation.HORIZONTAL:a,this.view.renderCoordsHelper,g);return!0};e._updateMouseCursor=function(){this._set("cursor",null);this._isPlacingSlicePlane||"exclude"===this.layersMode?this._set("cursor","crosshair"):d.isSome(this._creatingPointerId)&&this._set("cursor","grabbing")};e._clearPointerMoveTimeout=function(){this._prevPointerMoveTimeout=d.removeMaybe(this._prevPointerMoveTimeout)};e._resetPointerMoveTimeout=function(){this._clearPointerMoveTimeout();this.shiftManipulator.state|=
f.DidPointerMoveRecentlyFlag;this.rotateHeadingManipulator.state|=f.DidPointerMoveRecentlyFlag;this.rotateTiltManipulator.state|=f.DidPointerMoveRecentlyFlag;this._prevPointerMoveTimeout=this.clock.setTimeout(()=>{this.shiftManipulator.state&=~f.DidPointerMoveRecentlyFlag;this.rotateHeadingManipulator.state&=~f.DidPointerMoveRecentlyFlag;this.rotateTiltManipulator.state&=~f.DidPointerMoveRecentlyFlag},m.POINTER_MOVE_TIMER_MS)};e._updateManipulators=function(){if(!this.disableEngineLayers){var a=null,
b=!1;if(d.isSome(this.analysisViewData.plane))a=this.analysisViewData.plane,b=!1;else if(d.isSome(this._previewPlane))a=this._previewPlane,b=!0;else{this.shiftManipulator.available=!1;this.rotateHeadingManipulator.available=!1;this.rotateTiltManipulator.available=!1;this.resizeManipulators.forEach(g=>g.available=!1);this._previewPlaneOutlineVisualElement.visible=!1;this._previewPlaneGridVisualElement.visible=!1;return}var c=f.calculateBoundedPlaneTranslateRotate(a,n.sm4d.get());b?(this.shiftManipulator.available=
!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(g=>g.available=!1),this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach(g=>g.available=!0),f.updateShiftRestartHandle(this.shiftManipulator,c,a,this.view.state.camera),
f.updateRotateHeadingHandle(this.rotateHeadingManipulator,c,a,this.view.renderCoordsHelper),f.updateRotateTiltHandle(this.rotateTiltManipulator,c,a),this.resizeManipulators.forEach((g,k)=>f.updateResizeHandle(g,this._resizeHandles[k],c,a)),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);b=l.set(n.sv3d.get(),l.length(a.basis1),l.length(a.basis2),1);b=D.fromScaling(n.sm4d.get(),b);b=D.multiply(b,c,b);this._previewPlaneOutlineVisualElement.transform=
b;this._previewPlaneGridVisualElement.transform=b;this._updateMaterials()}};e._updateMaterials=function(){this._previewPlaneOutlineVisualElement.color=[m.PLANE_OUTLINE_COLOR[0],m.PLANE_OUTLINE_COLOR[1],m.PLANE_OUTLINE_COLOR[2],m.PLANE_OUTLINE_COLOR[3]*this._previewPlaneOpacity];this._previewPlaneGridVisualElement.backgroundColor=[m.PLANE_BACKGROUND_COLOR[0],m.PLANE_BACKGROUND_COLOR[1],m.PLANE_BACKGROUND_COLOR[2],m.PLANE_BACKGROUND_COLOR[3]*this._previewPlaneOpacity];this._previewPlaneGridVisualElement.gridColor=
[0,0,0,0]};e._updateManipulatorsInteractive=function(a){a.grabbing?(this.shiftManipulator.interactive=this.shiftManipulator===a,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===a,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===a,this.resizeManipulators.forEach(b=>{b.interactive=b===a})):(this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,this.resizeManipulators.forEach(b=>{b.interactive=
!0}))};e.testData=function(){return{plane:this.analysisViewData.plane}};G._createClass(v,[{key:"state",get:function(){const a=!!this.analysisViewData.plane,b=!!this.inputState;return a?a&&b?"slicing":a&&!b?"sliced":"ready":"ready"}},{key:"cursor",get:function(){return this._get("cursor")}},{key:"analysis",set:function(a){if(null==a)throw Error("SliceTool requires valid model, but null was provided.");this._handles.remove("analysis");this._set("analysis",a)}},{key:"inputState",get:function(){return this._get("inputState")},
set:function(a){this._set("inputState",a);this.analysisView.showGrid=d.isSome(a)&&"resize"===a.type;this._updateMaterials()}},{key:"_isPlacingSlicePlane",get:function(){return!this.inputState&&!this.analysisViewData.plane&&this.active}},{key:"_creatingPointerId",get:function(){return d.isSome(this.inputState)&&"shift"===this.inputState.type?this.inputState.creatingPointerId:null}}]);return v}(T.InteractiveToolBase);q.__decorate([t.property()],p.prototype,"clock",void 0);q.__decorate([t.property({constructOnly:!0})],
p.prototype,"view",void 0);q.__decorate([t.property({constructOnly:!0})],p.prototype,"analysisView",void 0);q.__decorate([t.property()],p.prototype,"analysisViewData",void 0);q.__decorate([t.property({readOnly:!0})],p.prototype,"state",null);q.__decorate([t.property({readOnly:!0,value:null})],p.prototype,"cursor",null);q.__decorate([t.property()],p.prototype,"analysis",null);q.__decorate([t.property({readOnly:!0})],p.prototype,"layersMode",void 0);q.__decorate([t.property({value:null})],p.prototype,
"inputState",null);p=q.__decorate([N.subclass("esri.views.3d.interactive.analysisTools.slice.SliceTool")],p);const U=h.create(),V=y.createScreenPointArray();return p});