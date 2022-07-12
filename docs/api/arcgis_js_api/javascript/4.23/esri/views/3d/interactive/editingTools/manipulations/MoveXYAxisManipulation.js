// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../Color ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/vectorStacks ../../../../../support/elevationInfoUtils ../../Manipulator3D ../dragEventPipeline3D ../ManipulatorType ../settings ./config ./Manipulation ./moveUtils ../../../webgl-engine/lib/basicInterfaces ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Material ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/dragEventPipeline ../../../../interactive/interfaces".split(" "),
function(y,z,G,H,I,J,A,h,K,t,B,f,L,M,N,C,O,n,u,P,Q,D,R,S,p,E){u=function(F){function q(a){var b=F.call(this)||this;b._handles=new I;b._arrowManipulatorInfos=[];b._opaqueMaterial=b._createMaterial();b._transparentMaterial=b._createMaterial(.5);b._angle=0;b._scale=1;b._radius=n.DISC_RADIUS;b._updateAfterDrag=!1;b.events=new H;b._tool=a.tool;b._view=a.view;null!=a.radius&&(b._radius=a.radius);b._createManipulators();b.forEachManipulator(c=>b._tool.manipulators.add(c));return b}z._inheritsLoose(q,F);
var g=q.prototype;g.destroy=function(){this.forEachManipulator(a=>{this._tool.manipulators.remove(a);a.destroy()});this._handles=A.destroyMaybe(this._handles);this._view=this._tool=null;this._arrowManipulatorInfos.length=0};g.forEachManipulator=function(a){for(const {manipulator:b}of this._arrowManipulatorInfos)a(b,C.ManipulatorType.TRANSLATE_XY)};g.createGraphicDragPipeline=function(a,b,c){const d=b.graphic,e=L.getGraphicEffectiveElevationInfo(d),k=A.unwrap(d.geometry).spatialReference;return P.createGraphicMoveDragPipeline(b,
c,l=>this.createDragPipeline((m,v,r,w,x)=>l(m,a(m,v,r,w,x),r),e,k,d),this._view.state.viewingMode)};g.createDragPipeline=function(a,b,c,d){return J.handlesGroup(this._arrowManipulatorInfos.map(({manipulator:e},k)=>p.createManipulatorDragEventPipeline(e,(l,m,v,r,w)=>{m=m.next(x=>({...x,manipulatorType:C.ManipulatorType.TRANSLATE_XY})).next(p.dragAtLocation(this._view,l.elevationAlignedLocation)).next(N.screenToMapXYAtLocation(this._view,l.elevationAlignedLocation,b,c,d)).next(p.constrainToMapAxis(l.location,
this.angle+(k+1)*Math.PI*.5)).next(p.addScreenDelta());a(l,m,v,r,w)})))};g._updateManipulators=function(){for(let a=0;a<this._arrowManipulatorInfos.length;a++)this._updateArrowManipulator(this._arrowManipulatorInfos[a],a);this._updateManipulatorTransform()};g._updateArrowManipulator=function({manipulator:a,transform:b},c){var d=this._radius/n.DISC_RADIUS,e=n.DISC_TRANSLATE_ARROW_SIZE*d;const k=e*Math.sqrt(3)/2;e=D.createExtrudedTriangle(k,e/2,e/2,n.DISC_HEIGHT);D.transformInPlace(e,h.fromTranslation(f.sm4d.get(),
t.set(f.sv3d.get(),0,-k/3,0)));a.renderObjects=[{geometry:e,material:this._opaqueMaterial,stateMask:E.ManipulatorStateFlags.Focused},{geometry:e,material:this._transparentMaterial,stateMask:E.ManipulatorStateFlags.Unfocused}];a.radius=k/3*2.4;a=h.fromZRotation(f.sm4d.get(),c*Math.PI/2);d=h.fromTranslation(f.sm4d.get(),t.set(f.sv3d.get(),0,n.DISC_TRANSLATE_ARROW_OFFSET*d,0));h.multiply(b,a,d)};g._createManipulators=function(){for(let a=0;4>a;a++){const b=this._createArrowManipulator(a);this._arrowManipulatorInfos.push(b)}this._updateManipulatorTransform()};
g._updateManipulatorTransform=function(){var a=this.angle;a=h.fromRotation(f.sm4d.get(),a,B.fromValues(0,0,1));var b=h.fromScaling(f.sm4d.get(),t.set(f.sv3d.get(),this.displayScale,this.displayScale,this.displayScale));a=h.multiply(f.sm4d.get(),b,a);for(const c of this._arrowManipulatorInfos)b=h.multiply(f.sm4d.get(),a,c.transform),c.manipulator.modelTransform=b};g._createArrowManipulator=function(a){const b=new M.Manipulator3D({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,
touchMultiplier:1,collisionType:{type:"disc",direction:B.fromValues(0,0,1)}}),c={manipulator:b,transform:K.create()};this._updateArrowManipulator(c,a);this._handles.add(b.events.on("drag",d=>{this._updateAfterDrag&&"end"===d.action&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)}));return c};g._createMaterial=function(a=1){const b=G.toUnitRGBA(O.colors.main);b[3]*=a;return new S.ColorMaterial({color:b,transparent:1!==a,cullFace:Q.CullFaceOptions.Back,renderOccluded:R.RenderOccludedFlag.Transparent})};
z._createClass(q,[{key:"orthogonalAvailable",set:function(a){this._arrowManipulatorInfos[1].manipulator.available=a;this._arrowManipulatorInfos[3].manipulator.available=a}},{key:"angle",get:function(){return this._angle},set:function(a){this._angle=a;this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}},{key:"displayScale",get:function(){return this._scale},set:function(a){this._scale=a;this._updateManipulatorTransform()}},{key:"radius",get:function(){return this._radius},set:function(a){this._radius!==
a&&(this._radius=a,this._updateManipulators())}},{key:"test",get:function(){return{arrowManipulators:this._arrowManipulatorInfos.map(({manipulator:a})=>a)}}}]);return q}(u.Manipulation);y.MoveXYAxisManipulation=u;Object.defineProperty(y,"__esModule",{value:!0})});