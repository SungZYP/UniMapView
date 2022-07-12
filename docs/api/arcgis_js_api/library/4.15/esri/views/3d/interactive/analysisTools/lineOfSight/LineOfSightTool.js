// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../Color ../../../../../core/Collection ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/now ../../../../../core/screenUtils ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../geometry/Point ../../../../../layers/graphics/dehydratedFeatures ./lineOfSightToolConfig ./lineOfSightToolUtils ../../../support/geometryUtils ../../../support/LaserLineRenderer ../../../support/stack ../../../terrain/tileUtils ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../../interactive/InteractiveToolBase ../../../../support/Scheduler ../../../../../widgets/LineOfSight/LineOfSightTarget".split(" "),
function(B,C,J,v,G,H,K,L,M,N,z,n,O,e,l,D,P,I,k,w,Q,R,S,T,U,V,W,h,F){Object.defineProperty(C,"__esModule",{value:!0});C.LineOfSightTargetCollection=H.ofType(F);B=function(B){function c(a){a=B.call(this,a)||this;a.deferCreation=!0;a.cursor="crosshair";a.observer=null;a.targets=new C.LineOfSightTargetCollection;a.configuration=null;a.updating=!1;a._handles=new K;a._observer=null;a._tracker=null;a._analyses=new H;a._screenPixelSize=0;a._hasFocusedManipulator=!1;a._showTracker=!0;a._lastClick=0;return a}
J(c,B);c.prototype.initialize=function(){var a=this,b=z.init(this,"state",function(b){switch(b){case "created":a.complete();break;default:a.create()}},!0),d=this.configuration=new I.Configuration;this._intersector=new T.Intersector(this.view.viewingMode);this._intersector.options.hud=!1;this._intersector.options.store=0;this._engineLayer=new U("line-of-sight-analysis",{isPickable:!1});var p=this.view._stage;p.addToViewContent([this._engineLayer.id]);p.add(0,this._engineLayer);this._createEngineResources();
this._observer={location:null,intersection:null,manipulator:this._addManipulator({size:d.observerManipulatorSize,color:d.observerManipulatorColor,visible:!1})};this._tracker=this._createLineOfSightAnalysis(new F({location:new D}));this._tracker.point.manipulator.available=!1;this._tracker.point.manipulator.interactive=!1;d=this._handles;d.add([b,this.view.state.watch("camera",function(){return a._onCameraChange()}),this.view.watch("map.ground.opacity",function(b,d){return a._onGroundOpacityChange(b,
d)}),z.init(this.view,"slicePlane",function(){return a._onSlicePlaneChange()}),z.init(this,"observer",function(b,d){return a._onObserverChange(b,d)},!0),z.on(this,"targets","change",function(b){return a._onTargetCollectionChange(b)},function(b){return a._onTargetsChange(b)},null,!0),z.watch(this.configuration,"laserLineEnabled laserLineGlowColor laserLineGlowWidth laserLineInnerColor laserLineInnerWidth laserLineGlobalAlpha lineOfSightInnerWidth lineOfSightOuterWidth lineOfSightVisibleInnerColor lineOfSightVisibleOuterColor lineOfSightOccludedInnerColor lineOfSightOccludedOuterColor lineOfSightUndefinedInnerColor lineOfSightUndefinedOuterColor lineOfSightUndefinedStipplePattern lineOfSightUndefinedStipplePatternOffColor".split(" "),
function(){return a._createEngineResources()}),z.watch(this.configuration,["observerManipulatorSize","observerManipulatorColor"],function(){return a._recreateManipulator(a._observer)}),z.watch(this.configuration,["targetManipulatorSize","targetManipulatorVisibleColor","targetManipulatorOccludedColor","targetManipulatorUndefinedColor"],function(){return a._analyses.forEach(function(b){return a._recreateManipulator(b.point)})})]);(b=this.view.pointsOfInterest)&&d.add([b.contentGeometryUpdates.events.on("request-update",
function(){return a._onContentChange()}),this.view.elevationProvider.on("elevation-change",function(){return a._onContentChange()})]);if(b=this.view.resourceController&&this.view.resourceController.scheduler)this._frameTask=b.registerTask(h.Task.LINE_OF_SIGHT_TOOL,function(b){return a._updateAnalyses(b)},function(){return a.updating}),d.add(this._frameTask);this.continue()};c.prototype.destroy=function(){var a=this;this.detach();this._handles.destroy();this._handles=null;this.manipulators.remove(this._observer.manipulator);
this._destroyLineOfSightAnalysis(this._tracker);this._analyses.forEach(function(b){a._destroyLineOfSightAnalysis(b)});var b=this.view._stage;b.removeFromViewContent([this._engineLayer.id]);b.remove(0,this._engineLayer.id);this._removeEngineResources();this._engineLayer=null;b.removeRenderPlugin(this._engineResources.laserLineRenderer);this.observer=this._intersector=this._engineResources=this._engineResources.laserLineRenderer=null;this._set("targets",null)};Object.defineProperty(c.prototype,"state",
{get:function(){return this._showTracker?"creating":this.observer?"created":"ready"},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"isSupported",{get:function(){return"3d"===this.get("view.type")},enumerable:!0,configurable:!0});c.prototype.continue=function(){this.view.activeTool=this;this._showTracker=!0;this._setCursor();this._setTrackerVisibility()};c.prototype.stop=function(){this._showTracker=!1;this._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE);this._setCursor();this._setTrackerVisibility();
this._updateLaserLineRenderer(t,u)};c.prototype.onInputEvent=function(a){switch(a.type){case "double-click":this._doubleClickHandler(a);break;case "immediate-click":var b=M();250<b-this._lastClick&&this._clickHandler(a);this._lastClick=b;break;case "key-down":this._keyDownHandler(a);break;case "pointer-move":this._pointerMoveHandler(a)}};c.prototype._setDirty=function(a){this.updating?a===h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE&&this._frameTask&&(this._frameTask.task=a):(this._set("updating",!0),this._frameTask&&
(this._frameTask.task=a))};c.prototype._setCursor=function(){this._set("cursor",this._showTracker&&!this._hasFocusedManipulator?"crosshair":null)};c.prototype._setTrackerVisibility=function(){this._tracker.shouldRender=this._showTracker&&!this._hasFocusedManipulator};c.prototype._addManipulator=function(a){var b=this,d=k.createSphereManipulator(this.view,a);d.events.on("drag",function(a){return b._onManipulatorDrag(d,a)});d.events.on("focus-changed",function(a){return b._onManipulatorFocus(a)});this.manipulators.add(d);
return d};c.prototype._removeManipulator=function(a){this.manipulators.remove(a)};c.prototype._recreateManipulator=function(a){var b=this.configuration,d=a.manipulator;this._removeManipulator(d);a.manipulator=this._addManipulator(a===this._observer?{size:b.observerManipulatorSize,color:b.observerManipulatorColor,visible:d.available}:{size:b.targetManipulatorSize,customColor1:b.targetManipulatorVisibleColor,customColor2:b.targetManipulatorOccludedColor,customColor3:b.targetManipulatorUndefinedColor});
a.manipulator.location=d.location;this._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE)};c.prototype._onManipulatorFocus=function(a){"focus"===a.action?this._hasFocusedManipulator=!0:"unfocus"===a.action&&(this._hasFocusedManipulator=!1,this._showTracker||this._updateLaserLineRenderer(t,u));this._setCursor();this._setTrackerVisibility()};c.prototype._onManipulatorDrag=function(a,b){if(b.screenPoint&&(this._hasFocusedManipulator=!0,b=this._getScreenPointIntersection(b.screenPoint))){if(a===this._observer.manipulator)this.observer=
b.point,this._observer.intersection=b,this.view.renderCoordsHelper.toRenderCoords(b.point,t),w.lineSegment.fromPoints(t,t,u);else{var d=this._analyses.find(function(b){return b.point.manipulator===a});d.target.location=b.point;d.point.intersection=b;this.view.renderCoordsHelper.toRenderCoords(b.point,t);this.view.renderCoordsHelper.toRenderCoords(this.observer,u.origin);w.lineSegment.fromPoints(u.origin,t,u)}this._updateLaserLineRenderer(t,u)}};c.prototype._updateLaserLineRenderer=function(a,b){var d=
this._engineResources.laserLineRenderer,c=this.configuration.laserLineEnabled&&this._hasFocusedManipulator;c?(d.heightPlaneEnabled=c,d.heightPlanePosition=a,d.lineVerticalPlaneEnabled=0!==e.vec3.length(b.vector),d.lineVerticalPlaneSegment=b):(d.heightPlaneEnabled=!1,d.lineVerticalPlaneEnabled=!1)};c.prototype._createLaserLineRenderer=function(){var a=this.configuration;return new Q.LaserLineRenderer(this.view.renderCoordsHelper,{glowColor:G.toUnitRGB(a.laserLineGlowColor),glowWidth:a.laserLineGlowWidth,
innerColor:G.toUnitRGB(a.laserLineInnerColor),innerWidth:a.laserLineInnerWidth,globalAlpha:a.laserLineGlobalAlpha})};c.prototype._removeEngineResources=function(){var a=this.view._stage;a.remove(3,this._engineResources.visibleLineMaterialInner.id);a.remove(3,this._engineResources.visibleLineMaterialOuter.id);a.remove(3,this._engineResources.occludedLineMaterialInner.id);a.remove(3,this._engineResources.occludedLineMaterialOuter.id);a.remove(3,this._engineResources.undefinedLineMaterialInner.id);a.remove(3,
this._engineResources.undefinedLineMaterialOuter.id)};c.prototype._createEngineResources=function(){var a=this.view._stage,b=this.configuration;this._engineResources&&(this._removeEngineResources(),a.removeRenderPlugin(this._engineResources.laserLineRenderer));this._engineResources={laserLineRenderer:this._createLaserLineRenderer(),visibleLineMaterialInner:k.createPolylineMaterial(b.lineOfSightInnerWidth,b.lineOfSightVisibleInnerColor),visibleLineMaterialOuter:k.createPolylineMaterial(b.lineOfSightOuterWidth,
b.lineOfSightVisibleOuterColor),occludedLineMaterialInner:k.createPolylineMaterial(b.lineOfSightInnerWidth,b.lineOfSightOccludedInnerColor),occludedLineMaterialOuter:k.createPolylineMaterial(b.lineOfSightOuterWidth,b.lineOfSightOccludedOuterColor),undefinedLineMaterialInner:k.createPolylineMaterial(b.lineOfSightInnerWidth,b.lineOfSightUndefinedInnerColor),undefinedLineMaterialOuter:k.createPolylineMaterial(b.lineOfSightOuterWidth,b.lineOfSightUndefinedOuterColor)};a.addRenderPlugin(this._engineResources.laserLineRenderer.renderSlots,
this._engineResources.laserLineRenderer);a.add(3,this._engineResources.visibleLineMaterialInner);a.add(3,this._engineResources.visibleLineMaterialOuter);a.add(3,this._engineResources.occludedLineMaterialInner);a.add(3,this._engineResources.occludedLineMaterialOuter);a.add(3,this._engineResources.undefinedLineMaterialInner);a.add(3,this._engineResources.undefinedLineMaterialOuter);this._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE)};c.prototype._onObserverChange=function(a,b){a||a===b?(this._observer.location=
a,this._observer.intersection=null,this._observer.manipulator.available=!0,this._observer.manipulator.location=a,this._tracker.point.manipulator.location=a,this._analyses.forEach(function(a){a.isDirty=!0;a.isValid=!1}),this._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE)):(this._observer.manipulator.available=!1,this.targets.removeAll())};c.prototype._onTargetsChange=function(a){var b=this;this._analyses.forEach(function(a){b._destroyLineOfSightAnalysis(a)});this._analyses.removeAll();a.items&&this._onTargetCollectionChange({target:a,
added:a.items,removed:[],moved:[]})};c.prototype._onTargetCollectionChange=function(a){var b=this;a.added.forEach(function(a){if(!b._analyses.some(function(b){return b.target===a})){var d=b._createLineOfSightAnalysis(a);b._analyses.add(d)}b._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE)});a.removed.forEach(function(a){var d=b._analyses.find(function(b){return b.point.location===a.location});b._destroyLineOfSightAnalysis(d);b._analyses.remove(d)})};c.prototype._onTargetLocationChange=function(a,
b){a.isValid=!1;a.point.location=b;a.point.intersection=null;a.point.manipulator.location=b;a.isDirty=!0;this._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE)};c.prototype._onGroundOpacityChange=function(a,b){!this._analyses.length||1!==a&&1!==b||a===b||(this._setDirty(h.Task.LINE_OF_SIGHT_TOOL),this._analyses.forEach(function(a){return a.isDirty=!0}))};c.prototype._onContentChange=function(){this._analyses.forEach(function(a){a.isDirty=!0;a.shouldIntersect=!0});this._setDirty(h.Task.LINE_OF_SIGHT_TOOL)};
c.prototype._onCameraChange=function(){if(this._analyses.length){var a=!1;if(this.observer){this.view.renderCoordsHelper.toRenderCoords(this.observer,x);var b=this.view.state.camera.computeScreenPixelSizeAt(x),a=a||.1<Math.abs((b-this._screenPixelSize)/this._screenPixelSize)}this._analyses.some(function(a){return!a.isValid})&&(a=!0);a&&(this._setDirty(h.Task.LINE_OF_SIGHT_TOOL),this._analyses.forEach(function(a){return a.isDirty=!0}))}};c.prototype._onSlicePlaneChange=function(){this._analyses.length&&
(this._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE),this._analyses.forEach(function(a){return a.isDirty=!0}))};c.prototype._addPointFromClickEvent=function(a){if((a=this._getScreenPointIntersection(a))&&a.point)if(this.observer){var b=new F({location:a.point}),d=this._createLineOfSightAnalysis(b);this._analyses.add(d);d.point.intersection=a;this.targets.add(b)}else this.observer=a.point,this._observer.intersection=a};c.prototype._clickHandler=function(a){this._showTracker&&this._addPointFromClickEvent({x:a.x,
y:a.y})};c.prototype._doubleClickHandler=function(a){this._showTracker&&(this.stop(),a.stopPropagation())};c.prototype._keyDownHandler=function(a){this._showTracker&&"Escape"===a.key&&(this.stop(),a.stopPropagation())};c.prototype._pointerMoveHandler=function(a){this._showTracker&&(a=this._getScreenPointIntersection({x:a.x,y:a.y}))&&(this.view.renderCoordsHelper.toRenderCoords(this.observer?this.observer:a.point,u.origin),this.view.renderCoordsHelper.toRenderCoords(a.point,t),w.lineSegment.fromPoints(u.origin,
t,u),this._updateLaserLineRenderer(t,u),this._tracker.point.manipulator.location=a.point,this._tracker.isDirty=!0,this._setDirty(h.Task.LINE_OF_SIGHT_TOOL_INTERACTIVE))};c.prototype._getScreenPointIntersection=function(a){a=N.screenPointObjectToArray(a,R.sv2d.get());a=w.ray.fromScreen(this.view.state.camera,a,E);return this._getRayIntersection(a)};c.prototype._getRayIntersection=function(a){this.view.sceneIntersectionHelper.intersectToolIntersectorRay(a,this._intersector);var b=this._intersector.results.min;
if(!b||!b.getIntersectionPoint(x))return null;var d=new D;this.view.renderCoordsHelper.fromRenderCoords(x,d,this.view.spatialReference);var c=l.vec3f64.create();e.vec3.copy(c,b.normal);var f=0<e.vec3.dot(c,a.direction)?-1:1;e.vec3.scale(c,c,f);var m=b.toGraphic(this.view);if(L.isSome(m)){var f=m.layer,g=m.sourceLayer,k=void 0;if(g)switch(g.type){case "scene":k=P.getObjectId(m,g.objectIdField);break;case "integrated-mesh":b=b.target;k=b.metadata.nodeIndex+"/"+b.metadata.componentIndex;break;default:k=
m.uid}else k=m.uid;return{type:"Graphic",id:f.uid+"/"+k,ray:w.ray.copy(a),normal:c,point:d}}return"TerrainRenderer"===b.intersector?(b=b.target,{type:"Terrain",id:b.metadata.tile.lij.slice(),ray:w.ray.copy(a),normal:c,point:d}):null};c.prototype._createLineOfSightAnalysis=function(a){var b=this,c=this.configuration,p={isValid:!1,isDirty:!0,shouldRender:!0,shouldIntersect:!1,point:{location:a.location,manipulator:k.createSphereManipulator(this.view,{size:c.targetManipulatorSize,customColor1:c.targetManipulatorVisibleColor,
customColor2:c.targetManipulatorOccludedColor,customColor3:c.targetManipulatorUndefinedColor}),intersection:null},isTargetVisible:!1,hasIntersection:!1,target:a,targetHandle:null,engine:{points:{observer:l.vec3f64.create(),target:l.vec3f64.create(),intersection:l.vec3f64.create(),intersectionObserver:l.vec3f64.create(),intersectionTarget:l.vec3f64.create()},visualization:new V}};p.point.manipulator.location=a.location;p.point.manipulator.events.on("drag",function(a){return b._onManipulatorDrag(p.point.manipulator,
a)});p.point.manipulator.events.on("focus-changed",function(a){return b._onManipulatorFocus(a)});p.targetHandle=z.init(a,"location",function(a){return b._onTargetLocationChange(p,a)},!0);this.manipulators.add(p.point.manipulator);this.view._stage.add(1,p.engine.visualization);this._engineLayer.addObject(p.engine.visualization);return p};c.prototype._destroyLineOfSightAnalysis=function(a){a.targetHandle.remove();this.manipulators.remove(a.point.manipulator);this.view._stage.remove(1,a.engine.visualization.id);
this._engineLayer.removeObject(a.engine.visualization)};c.prototype._canComputeAnalysis=function(a){this.view.renderCoordsHelper.toRenderCoords(this.observer,x);var b=this.view.frustum.intersectsPoint(x);this.view.renderCoordsHelper.toRenderCoords(a.point.location,x);a=this.view.frustum.intersectsPoint(x);return b&&a};c.prototype._canUpdateFromIntersectionResult=function(a,b){return a&&b&&a.type===b.type?"Terrain"===a.type?(a=a.id,b=b.id,a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]||S.tilesAreRelated(a,
b)):"Graphic"===a.type||"I3S"===a.type?a.id===b.id:!1:!1};c.prototype._updateFromIntersectionResult=function(a){var b;if("Terrain"===a.type){this.view.renderCoordsHelper.toRenderCoords(a.point,g);this.view.renderCoordsHelper.worldUpAtPosition(g,f);var c=this.view.basemapTerrain.elevationBounds;b=this.view.renderCoordsHelper.getAltitude(g);c=c?Math.abs(c.max-c.min)/Math.abs(b):100;b=0<b?1:-1;e.vec3.normalize(f,f);e.vec3.scale(f,f,b*c);e.vec3.add(q,g,f);w.ray.fromPoints(q,g,E);b=this._getRayIntersection(E)}else b=
this._getRayIntersection(a.ray);return this._canUpdateFromIntersectionResult(b,a)?b.point:null};c.prototype._updateAnalyses=function(a){var b=this;if(this.observer){if(this._analyses.some(function(a){return a.shouldIntersect})){var c=this._observer.intersection;if(c=c&&this._updateFromIntersectionResult(c))this._observer.manipulator.location=c}this._set("updating",this._updateAnalysis(this._tracker,"tracker")||this._analyses.items.some(function(c,d){return b._updateAnalysis(c,""+d,a)}))}else this._set("updating",
!1)};c.prototype._updateAnalysis=function(a,b,c){if(!a.shouldRender)return a.engine.visualization.removeAllGeometries(),a.isDirty=!1;if(!a.isDirty)return!1;if(a.shouldIntersect){var d=a.point.intersection;if(d=d&&this._updateFromIntersectionResult(d))a.point.manipulator.location=d;a.shouldIntersect=!1}this.view.renderCoordsHelper.toRenderCoords(a.point.manipulator.location,a.engine.points.target);this.view.renderCoordsHelper.toRenderCoords(this._observer.manipulator.location,a.engine.points.observer);
var l="tracker"===b?!0:this._canComputeAnalysis(a),d=a.engine,m=d.points.observer,h=d.points.target;this._screenPixelSize=this.view.state.camera.computeScreenPixelSizeAt(m);this._observer.intersection?e.vec3.copy(f,this._observer.intersection.normal):e.vec3.subtract(f,h,m);var n=this._screenPixelSize;e.vec3.normalize(f,f);e.vec3.scale(f,f,Math.min(n,1));e.vec3.add(q,m,f);a.point.intersection?e.vec3.copy(f,a.point.intersection.normal):e.vec3.subtract(f,m,h);n=this.view.state.camera.computeScreenPixelSizeAt(h);
e.vec3.normalize(f,f);e.vec3.scale(f,f,Math.min(n,1));e.vec3.add(g,h,f);l?(l=w.ray.fromPoints(q,g,E),this.view.sceneIntersectionHelper.intersectToolIntersectorRay(l,this._intersector),a.hasIntersection=this._intersector.results.min?this._intersector.results.min.getIntersectionPoint(r):!1,a.isTargetVisible=!0,a.hasIntersection&&(e.vec3.copy(d.points.intersection,r),e.vec3.copy(d.points.intersectionObserver,q),e.vec3.copy(d.points.intersectionTarget,g),this.view.renderCoordsHelper.fromRenderCoords(d.points.intersection,
x,this.view.spatialReference),l=1-e.vec3.dist(g,h)/e.vec3.dist(m,h),a.isTargetVisible=e.vec3.dist(m,d.points.intersection)>=l*e.vec3.dist(m,h)),a.isValid=!0,m=new D(x,this.view.spatialReference),a.target.intersectedLocation=a.isTargetVisible?null:m,a.target.intersectedGraphic=a.isTargetVisible?null:this._intersector.results.min.toGraphic(this.view),a.target.visible=a.hasIntersection?a.isTargetVisible:!1):a.isValid?(e.vec3.copy(r,d.points.intersection),m=e.vec3.dist(a.engine.points.intersectionObserver,
d.points.intersection)/e.vec3.dist(a.engine.points.intersectionObserver,a.engine.points.intersectionTarget),e.vec3.sub(A,q,a.engine.points.intersectionObserver),e.vec3.scale(A,A,1-m),e.vec3.add(r,r,A),e.vec3.sub(A,g,a.engine.points.intersectionTarget),e.vec3.scale(A,A,m),e.vec3.add(r,r,A)):(a.hasIntersection=!1,a.target.intersectedLocation=null,a.target.intersectedGraphic=null,a.target.visible=void 0);y[12]=d.points.observer[0];y[13]=d.points.observer[1];y[14]=d.points.observer[2];e.vec3.subtract(q,
q,d.points.observer);e.vec3.subtract(g,g,d.points.observer);e.vec3.subtract(r,r,d.points.observer);a.engine.visualization.removeAllGeometries();a.isValid?(a.point.manipulator.state=a.isTargetVisible?16:32,a.engine.visualization.addGeometry(k.createPolylineGeometry(q,a.isTargetVisible?g:r,b+"-visible-inner"),this._engineResources.visibleLineMaterialInner,y),a.isTargetVisible?a.engine.visualization.addGeometry(k.createPolylineGeometry(q,a.isTargetVisible?g:r,b+"-visible-outer"),this._engineResources.visibleLineMaterialOuter,
y):(a.engine.visualization.addGeometry(k.createPolylineGeometry(r,g,b+"-occluded-inner"),this._engineResources.occludedLineMaterialInner,y),a.engine.visualization.addGeometry(k.createPolylineGeometry(q,g,b+"-occluded-outer"),this._engineResources.occludedLineMaterialOuter,y))):(a.point.manipulator.state=64,a.engine.visualization.addGeometry(k.createPolylineGeometry(q,g,b+"-observer-inner"),this._engineResources.undefinedLineMaterialInner,y),a.engine.visualization.addGeometry(k.createPolylineGeometry(q,
g,b+"-observer-inner"),this._engineResources.undefinedLineMaterialOuter,y));a.isDirty=!1;return c?(c.madeProgress(),c.done):!1};v([n.property({constructOnly:!0})],c.prototype,"view",void 0);v([n.property({dependsOn:["_showTracker","observer"],readOnly:!0})],c.prototype,"state",null);v([n.property({readOnly:!0})],c.prototype,"cursor",void 0);v([n.property({dependsOn:["view.type"],readOnly:!0})],c.prototype,"isSupported",null);v([n.property({type:D})],c.prototype,"observer",void 0);v([n.property({type:C.LineOfSightTargetCollection,
nonNullable:!0})],c.prototype,"targets",void 0);v([n.property({type:I.Configuration})],c.prototype,"configuration",void 0);v([n.property({readOnly:!0})],c.prototype,"updating",void 0);v([n.property()],c.prototype,"_showTracker",void 0);return c=v([n.subclass("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool")],c)}(n.declared(W.InteractiveToolBase));C.LineOfSightTool=B;var x=l.vec3f64.create(),q=l.vec3f64.create(),g=l.vec3f64.create(),r=l.vec3f64.create(),f=l.vec3f64.create(),E=
w.ray.create(),A=l.vec3f64.create(),y=O.mat4f64.create(),t=l.vec3f64.create(),u=w.lineSegment.create()});