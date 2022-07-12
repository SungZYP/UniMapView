// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/compilerUtils ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../camera/constraintUtils ../Constraints ./InteractiveController ../utils/navigationUtils ../utils/navigationUtils ../utils/viewUtils ../../support/cameraUtils ../../support/cameraUtilsInternal ../../support/earthUtils ../../support/geometryUtils ../../support/mathUtils ../../support/stack ../../webgl-engine/lib/Camera ../../../navigation/gamepadAndKeyboardUtils".split(" "),
function(x,y,F,G,q,k,z,g,H,p,r,I,J,t,A,K,L,B,v,M,h,C,l){Object.defineProperty(y,"__esModule",{value:!0});x=function(w){function e(a,b,c){var d=w.call(this)||this;d.view=a;d.gamepadDevice=b;d.disableMovements=c;d.transformation={translation:[0,0,0],heading:0,tilt:0,zoom:0};d.keysButtonState=[0,0,0,0,0,0,0,0,0,0,0,0];d.tmpCamera=new C.default;d.constraintOptions={selection:15,interactionType:0,interactionStartCamera:new C.default,interactionFactor:0,interactionDirection:null,tiltMode:1};return d}F(e,
w);e.prototype.handleEventGamepad=function(a){var b=l.extractTransformation(a,this.view.navigation.gamepad,this.transformation);("end"===a.action||l.isZeroTransformation(b))&&this.finishController()};e.prototype.activateDirection=function(a){this.keysButtonState[a]=1;l.extractTransformationKeyboard(this.keysButtonState,this.transformation)};e.prototype.deactivateDirection=function(a){this.keysButtonState[a]=0;a=l.extractTransformationKeyboard(this.keysButtonState,this.transformation);l.isZeroTransformation(a)&&
this.finishController()};e.prototype.onControllerStart=function(a){this.filteredSurfaceElevation=this.view.pointsOfInterest.cameraOnSurface.location.z;this.headingStart=this.view.camera.heading;w.prototype.onControllerStart.call(this,a)};e.prototype.updateFilteredSurfaceElevation=function(a){this.filteredSurfaceElevation+=1*(this.view.pointsOfInterest.cameraOnSurface.location.z-this.filteredSurfaceElevation)*a};e.prototype.stepController=function(a,b){this.updateStartHeading();this.updateFilteredSurfaceElevation(a);
this.currentCamera.copyViewFrom(b);this.updateCameraCenter();this.constraintOptions.interactionStartCamera.copyFrom(this.currentCamera);this.calculateControlTransformation(a,this.currentCamera,n);this.applyDisabledMovementTypes(n);this.applyPan(n.pan);this.applyRotate(n.rotate);this.applyZoom(n.zoom);this.applyAscend(n.ascend);this.constraintOptions.interactionType=0;this.constraintOptions.selection=8;p.applyAll(this.view,this.currentCamera,this.constraintOptions);w.prototype.stepController.call(this,
a,b)};e.prototype.updateStartHeading=function(){0!==this.transformation.heading&&(this.headingStart=this.view.camera.heading)};e.prototype.applyRotate=function(a){if(a.enabled){var b=this.currentCamera,c=b.center,d=b.up,f=b.eye;g.vec3.subtract(c,c,f);g.vec3.transformMat4(c,c,a.matrix);g.vec3.add(c,c,f);g.vec3.transformMat4(d,d,a.matrix);b.markViewDirty();this.constraintOptions.interactionType=3;this.constraintOptions.selection=7;p.applyAll(this.view,b,this.constraintOptions)}};e.prototype.applyPan=
function(a,b){void 0===b&&(b=this.currentCamera);if(a.enabled){var c=b.center,d=b.eye,f=b.up;g.vec3.transformMat4(d,d,a.matrix);g.vec3.transformMat4(c,c,a.matrix);this.view.state.isGlobal&&g.vec3.transformMat4(f,f,a.matrix);b.markViewDirty();this.constraintOptions.interactionType=4;this.constraintOptions.selection=15;p.applyAll(this.view,b,this.constraintOptions)}};e.prototype.applyZoom=function(a){if(a){var b=this.currentCamera,c=b.eye,b=b.viewForward;g.vec3.add(c,c,g.vec3.scale(h.sv3d.get(),b,a));
this.currentCamera.markViewDirty();g.vec3.copy(u,b);g.vec3.negate(u,u);this.constraintOptions.interactionDirection=u;this.constraintOptions.interactionType=1;this.constraintOptions.selection=7;p.applyAll(this.view,this.currentCamera,this.constraintOptions);this.constraintOptions.interactionDirection=null}};e.prototype.applyAscend=function(a){if(a){var b=this.currentCamera,c=b.center,b=b.eye,d=this.view.renderCoordsHelper.worldUpAtPosition(b,h.sv3d.get());this.constraintOptions.interactionDirection=
g.vec3.copy(u,d);this.view.state.isGlobal?(d=g.vec3.length(b),a=(d+a)/d,g.vec3.scale(b,b,a),g.vec3.scale(c,c,a)):(a=g.vec3.scale(h.sv3d.get(),d,a),g.vec3.add(b,b,a),g.vec3.add(c,c,a));this.currentCamera.markViewDirty();this.updateCameraCenter();this.constraintOptions.interactionType=5;this.constraintOptions.selection=8;p.applyAll(this.view,this.currentCamera,this.constraintOptions)&&this.updateCameraCenter();this.constraintOptions.selection=7;p.applyAll(this.view,this.currentCamera,this.constraintOptions);
this.constraintOptions.interactionDirection=null}};e.prototype.calculateControlTransformation=function(a,b,c){c.zoom=0;c.ascend=0;c.pan.enabled=!1;k.mat4.identity(c.pan.matrix);c.rotate.enabled=!1;k.mat4.identity(c.rotate.matrix);a=this.computeVelocities(a);this.view.state.isLocal?this.calculateControlTransformationLocal(a,b,c):this.calculateControlTransformationGlobal(a,b,c)};e.prototype.updateCameraCenter=function(){var a=this.currentCamera;this.view.renderCoordsHelper.intersectManifoldClosestSilhouette(a.ray,
this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,a.center);this.currentCamera.markViewDirty()};e.prototype.calculateControlTransformationLocal=function(a,b,c){var d=b.viewRight,f=b.viewForward,e=this.transformation,m=this.view.navigation.gamepad,f=g.vec3.set(h.sv3d.get(),f[0],f[1],0);g.vec3.normalize(f,f);var l=e.translation[0]*a.pan;0!==l&&(l=g.vec3.scale(h.sv3d.get(),d,l),k.mat4.translate(c.pan.matrix,c.pan.matrix,l),c.pan.enabled=!0);switch(m.mode){case "pan":m=-e.translation[1]*
a.pan;0!==m&&(m=g.vec3.scale(h.sv3d.get(),f,m),k.mat4.translate(c.pan.matrix,c.pan.matrix,m),c.pan.enabled=!0);c.zoom=e.zoom*a.zoom;break;case "zoom":c.zoom=(-e.translation[1]+e.zoom)*a.zoom;break;default:G.neverReached(m.mode)}c.ascend=e.translation[2]*a.ascend;m=-e.heading*a.rotate;0!==m&&(k.mat4.rotate(c.rotate.matrix,c.rotate.matrix,m,this.view.renderCoordsHelper.worldUpAtPosition(b.eye,h.sv3d.get())),c.rotate.enabled=!0);a=e.tilt*a.rotate;b=A.viewAngle(this.view.renderCoordsHelper,b.center,b.eye);
if(b=q.clamp(b+a,r.TiltDefault.min,r.TiltDefault.max)-b)k.mat4.rotate(c.rotate.matrix,c.rotate.matrix,b,d),c.rotate.enabled=!0};e.prototype.calculateControlTransformationGlobal=function(a,b,c){var d=b.eye,f=b.viewRight,e=this.transformation,m=this.view.navigation.gamepad,d=g.vec3.cross(h.sv3d.get(),f,d);g.vec3.normalize(d,d);g.vec3.negate(d,d);J.panMotionToRotationMatrix(this.beginCamera,b,e,a,this.view.camera.heading,this.headingStart,this.view.camera.tilt,c,m);this.tmpCamera.copyFrom(this.currentCamera);
this.applyPan(n.pan,this.tmpCamera);m=this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude;c.ascend=e.translation[2]*a.ascend;d=-e.heading*a.rotate;0!==d&&(k.mat4.rotate(c.rotate.matrix,c.rotate.matrix,d,this.tmpCamera.eye),c.rotate.enabled=!0);b=this.clampTiltDeltaGlobalToValidRange(e.tilt*a.rotate,b.ray,m);0!==b&&(k.mat4.rotate(c.rotate.matrix,c.rotate.matrix,b,this.tmpCamera.viewRight),c.rotate.enabled=!0);c.zoom=e.zoom*a.zoom};e.prototype.clampTiltDeltaGlobalToValidRange=
function(a,b,c){var d=t.onSurfaceTiltToEyeTiltGlobal(r.TiltDefault.min,b.origin,c),f=0,e=0,f=h.sv3d.get();this.view.renderCoordsHelper.intersectManifold(b,c,f)?(f=A.viewAngle(this.view.renderCoordsHelper,f,b.origin),f=t.onSurfaceTiltToEyeTiltGlobal(f,b.origin,c),e=t.onSurfaceTiltToEyeTiltGlobal(r.TiltDefault.max,b.origin,c)):(v.sphere.closestPointOnSilhouette(v.sphere.wrap(c+B.earthRadius),b,f),f=q.acosClamped(-g.vec3.dot(b.direction,g.vec3.normalize(f,f))),f=t.offSurfaceTiltToEyeTiltGlobal(f,b.origin,
c),e=t.offSurfaceTiltToEyeTiltGlobal(r.TiltDefault.max,b.origin,c));return q.clamp(f+a,d,e)-f};e.prototype.getPointAbsoluteSurfaceElevation=function(a,b,c){var d=this.view.renderCoordsHelper,f=d.getAltitude(a);b+=Math.abs(f-b);g.vec3.copy(c,a);d.setAltitude(b,c);return b};e.prototype.clampedDistanceToSurface=function(a,b){var c=this.view.renderCoordsHelper,d=this.view.state.camera,f=K.headingTiltToDirectionUp(this.view,b,0,D,N).direction,f=c.intersectManifoldClosestSilhouette(v.ray.wrap(b,f),a,h.sv3d.get()),
f=g.vec3.distance(b,f);a=c.intersectManifoldClosestSilhouette(v.ray.wrap(b,M.directionFromTo(h.sv3d.get(),b,d.center)),a,h.sv3d.get());b=g.vec3.distance(b,a);return Math.min(f,b)};e.prototype.computeHeadingRotateRadius=function(a){var b=this.view,c=b.renderCoordsHelper,d=b.state,b=d.isGlobal,d=c.intersectManifoldClosestSilhouette(d.camera.ray,this.filteredSurfaceElevation,h.sv3d.get());if(b)return b=g.vec3.subtract(h.sv3d.get(),a,d),c=g.vec3.length(b),g.vec3.scale(b,b,1/c),a=g.vec3.normalize(h.sv3d.get(),
a),a=q.acosClamped(g.vec3.dot(a,b)),c*Math.sin(Math.min(O,a));a=g.vec3.copy(h.sv3d.get(),a);c.setAltitude(this.filteredSurfaceElevation,a);return g.vec3.distance(d,a)};e.prototype.minimumAscendVelocity=function(){return this.view.state.constraints.collision.enabled?0:P};e.prototype.computeVelocities=function(a){var b=this.filteredSurfaceElevation,c=b+B.earthRadius,d=this.view.state,f=d.camera,e=d.isGlobal,g=h.sv3d.get(),l=this.getPointAbsoluteSurfaceElevation(f.eye,b,g),k=this.clampedDistanceToSurface(b,
g),n=f.width/2,p=E*f.width,d=E*f.width,f=k*Math.tan(.5*f.fovX)/n,r=f/c,c=f/this.computeHeadingRotateRadius(g),e=(e?r:f)*p*a,b=l-b,b=Math.max(this.minimumAscendVelocity()*a,Math.pow(2,p*a/n)*b-b),k=Math.pow(2,p*a/n)*k-k;a*=q.clamp(c*d,Q,R);return{pan:e,ascend:b,zoom:k,rotate:a}};e.prototype.applyDisabledMovementTypes=function(a){void 0===this.disableMovements||void 0!==this.disableMovements.mode&&this.view.state.mode!==this.disableMovements.mode||(a.zoom=this.disableMovements.zoom?0:a.zoom,a.ascend=
this.disableMovements.ascend?0:a.ascend,a.pan.enabled=!this.disableMovements.pan,this.disableMovements.pan&&k.mat4.identity(a.pan.matrix),a.rotate.enabled=!this.disableMovements.rotate,this.disableMovements.rotate&&k.mat4.identity(a.rotate.matrix))};e.activatesFor=function(a,b){a=l.extractTransformation(b,a.navigation.gamepad,S);return!("end"===b.action||l.isZeroTransformation(a))};return e}(I.InteractiveController);y.GamepadKeyboardController=x;var S={translation:[0,0,0],heading:0,tilt:0,zoom:0},
D=80,O=q.deg2rad(D),E=.75,P=5,Q=q.deg2rad(30),R=q.deg2rad(80),n={zoom:0,ascend:0,pan:{enabled:!1,matrix:z.mat4f64.create()},rotate:{enabled:!1,matrix:z.mat4f64.create()}},u=H.vec3f64.create(),N=L.createDirectionUp()});