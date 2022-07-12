// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/time ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/set ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../camera/constraintUtils ../../../camera/constraintUtils/common ../PointToPointAnimationController ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../../animation/easing".split(" "),
function(g,t,u,v,B,C,D,E,F,w,d,f,x,k,y,n,z,A){g.ZoomStepController=function(p){function l(){var b=p.apply(this,arguments)||this;b.zoomLocation=f.create();b.tmpCamera=new n.default;b.tmpRayDir=f.create();b.tmpCenter=f.create();b.constraintOptions={selection:k.ConstraintTypes.ALL,interactionType:k.InteractionType.ZOOM,interactionFactor:null,interactionStartCamera:new n.default,interactionDirection:null,tiltMode:k.TiltMode.TUMBLE};return b}t._inheritsLoose(l,p);var m=l.prototype;m.zoomStep=function(b,
c){if(this.active){var a=this.view.state,{interactionStartCamera:e}=this.constraintOptions;this.animation.finished?e.copyFrom(a.camera):this.animation.cameraAt(1,e);this.tmpCamera.copyFrom(a.camera);a=z.newIntersector(this.view.state.viewingMode);0<b?(this.intersectionHelper.intersectScreenFreePointFallback(c,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,a,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,
a,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:d.copy(this.zoomLocation,this.tmpCamera.center);b=.6**b;c=this.view._stage.renderView.getMinimalDepthForArea(this.view.getVoxelWasmPerSceneView(),c[0],c[1],this.view.state.camera,60);a=Math.max(14*Math.abs(this.view.camera.position.z),20);if(c=c?Math.min(c,a):a)a=f.create(),d.subtract(a,this.zoomLocation,this.tmpCamera.eye),c<d.length(a)&&(d.normalize(a,a),d.add(this.zoomLocation,this.tmpCamera.eye,d.scale(a,a,c)));this._updateCamera(this.tmpCamera,
b,this.zoomLocation);this.begin(this.tmpCamera)}};m.animationSettings=function(){return{apex:null,duration:v.Milliseconds(600),easing:A.outExpo}};m._updateCamera=function(b,c,a){d.subtract(this.tmpRayDir,a,b.eye);const e=d.length(this.tmpRayDir);let h=e*c;const q=Math.max(4,1.01*b.nearFar[0]);1>=c&&h<q&&(h=q,c=h/e);1E-6>Math.abs(e-h)||(d.scale(this.tmpRayDir,this.tmpRayDir,c),b.eye=d.subtract(r,a,this.tmpRayDir),b.center=d.lerp(r,b.center,a,1-c),x.applyAll(this.view,b,this.constraintOptions))};return l}(y.PointToPointAnimationController);
g.ZoomStepController=u.__decorate([w.subclass("esri.views.3d.state.controllers.local.ZoomStepController")],g.ZoomStepController);const r=f.create();Object.defineProperty(g,"__esModule",{value:!0})});