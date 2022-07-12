// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/handleUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../support/elevationInfoUtils ../Manipulator3D ./GrabbingState ./ManipulatorState ./ManipulatorType ./settings ../visualElements/ExtendedLineVisualElement ../visualElements/LaserlineVisualElement ../visualElements/OutlineVisualElement ../../layers/graphics/GraphicState ../../webgl-engine/lib/Material".split(" "),function(v,l,D,u,w,E,y,F,z,G,H,g,
I,J,K,L,M){function A(a,b){const {view:d,graphic:e}=a,c=new K.OutlineVisualElement({view:d,geometry:x(e)?e.geometry:null,elevationInfo:y.getGraphicEffectiveElevationInfo(e),attached:!1});g.settings.visualElements.lineGraphics.shadowStyle.apply(c);g.settings.visualElements.lineGraphics.outline.apply(c);const k=[b.watch("displaying",()=>{c.attached=b.displaying}),b.watch("isDraped",h=>c.isDraped=h),b.on("changed",()=>c.geometry=x(e)?e.geometry:null),l.destroyHandle(c)];c.attached=b.displaying;return{visualElement:c,
remove:()=>l.handlesGroup(k).remove()}}function N(a,b,d){const {graphic:e,view:c}=a,k=[];var h=y.getGraphicEffectiveElevationInfo(e);const O="on-the-ground"===h.mode||!h.offset&&"absolute-height"!==h.mode,m=new G.ManipulatorState,n=new I.ExtendedLineVisualElement({view:c,extensionType:g.settings.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:M.RenderOccludedFlag.OccludeAndTransparent});g.settings.visualElements.pointGraphics.shadowStyle.apply(n);
h=D.deg2rad(g.settings.visualElements.heightPlaneAngleCutoff);const r=new J.LaserlineVisualElement({view:c,attached:!1,angleCutoff:h});g.settings.visualElements.heightPlane.apply(r);let B=1,C=1;const q=()=>{m.update(a);if(d.displaying&&(!O||!d.isDraped&&x(e)&&e.geometry.hasZ)){b.laserlineEnabled=!0;var f=m.grabbingState&z.GrabbingState.XY?g.settings.visualElements.laserlineAlphaMultiplier:1;f!==B&&(B=f,g.settings.visualElements.lineGraphics.shadowStyle.apply(b,f),g.settings.visualElements.pointGraphics.shadowStyle.apply(n,
f));f=m.grabbingState&z.GrabbingState.Z?g.settings.visualElements.laserlineAlphaMultiplier:1;f!==C&&(C=f,g.settings.visualElements.heightPlane.apply(r,f));f=1===m.numSelected?m.firstSelected:1<m.numSelected&&u.isSome(m.firstGrabbedXY)?m.firstGrabbedXY:null;u.isSome(f)?(n.setStartEndFromWorldDownAtLocation(f.renderLocation),n.attached=!0):n.attached=!1;P(a,b,r,m)}else b.laserlineEnabled=!1,n.attached=!1,r.attached=!1};g.settings.visualElements.zVerticalLine.apply(n);k.push(d.on("changed",q),d.watch("displaying",
q),b.events.on("attachment-origin-changed",q),l.destroyHandle(n),l.destroyHandle(r));const t=[];h=()=>{l.handlesGroup(t).remove();t.length=0;a.forEachManipulator(f=>t.push(f.events.on("grab-changed",q)));a.forEachManipulator(f=>t.push(f.events.on("select-changed",q)));q()};h();k.push(a.onManipulatorsChanged(h),l.refHandle(()=>l.handlesGroup(t)));return l.handlesGroup(k)}function P(a,b,d,e){if(0<e.numSelected){w.set(p,0,0,0);let c=0;a.forEachManipulator((k,h)=>{h===H.ManipulatorType.TRANSLATE_XY&&
k.selected&&k instanceof F.Manipulator3D&&(w.add(p,p,k.renderLocation),c++)});0<c?(d.heightManifoldTarget=w.scale(p,p,1/c),d.attached=!0):d.attached=!1}else b=b.attachmentOrigin,u.isSome(b)&&a.view.renderCoordsHelper.toRenderCoords(b,p)?(d.heightManifoldTarget=p,d.attached=!0):d.attached=!1}function x(a){return u.isSome(a.geometry)&&("polygon"===a.geometry.type||"polyline"===a.geometry.type)}const p=E.create();v.createGeometryRepresentationVisualElement=A;v.createVisualElements=function(a){const {view:b,
graphic:d}=a,e=new L.GraphicState({graphic:d}),c=A(a,e);a=N(a,c.visualElement,e);const k=[c,a,b.maskOccludee(d),b.trackGraphicState(e)];return{visualElement:c.visualElement,remove:()=>l.handlesGroup(k).remove()}};Object.defineProperty(v,"__esModule",{value:!0})});