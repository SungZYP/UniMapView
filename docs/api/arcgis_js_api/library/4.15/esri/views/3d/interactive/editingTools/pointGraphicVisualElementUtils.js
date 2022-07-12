// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/declareExtendsHelper ../../../../core/compilerUtils ../../../../core/handleUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../support/elevationInfoUtils ./ManipulatorState ./settings ../visualElements/LaserlineVisualElement ../visualElements/LineVisualElement ../visualElements/PointVisualElement ../../layers/graphics/elevationAlignmentUtils ../../layers/graphics/ElevationContext ../../layers/graphics/GraphicState ../../support/projectionUtils".split(" "),
function(W,y,X,Y,G,h,H,t,I,z,A,J,E,K,b,F,L,M,N,O,P,B){function Q(a,g,c,d){var e=a.view,u=a.graphic,v=new L.LineVisualElement({view:e,infinite:b.settings.visualElements.zVerticalLine.infiniteType,attached:!1}),p=new F.LaserlineVisualElement({view:e,intersectsLineInfinite:!0,attached:!1}),q=H.deg2rad(b.settings.visualElements.heightPlaneAngleCutoff),w=new F.LaserlineVisualElement({view:e,attached:!1,angleCutoff:q}),r=null,q=E.getGraphicEffectiveElevationInfo(a.graphic),y=O.fromElevationInfo(q),z="on-the-ground"===
q.mode||!q.offset&&"absolute-height"!==q.mode,m=new K.ManipulatorState,C=b.settings.visualElements.heightPlane.bindStyle(w),D=b.settings.visualElements.pointGraphics.shadowStyle.bindStyle(p),l=function(){m.update(a);var c=!1;v.infinite=b.settings.visualElements.zVerticalLine.infiniteType;var h=z&&(g.isDraped||!x(u)||!u.geometry.hasZ);if(!h)switch(b.settings.visualElements.pointGraphics.shadowEnabled){case "always":c=!0;break;case "grab-xy":c=!!(m.grabbingState&4)}var n=!1;switch(b.settings.zManipulator.enabled){case "always":n=
!0;break;case "not-grab-z":n=!m.grabbingState}n&&t.isSome(r)?(r.remove(),r=null):!n&&t.isNone(r)&&t.isSome(m.zManipulator)&&(r=m.zManipulator.disableDisplay());n=!0;if(!h&&x(u)){var k=u.geometry,l=N.evaluateElevationAlignmentAtPoint(u.geometry,e.elevationProvider,y,e.renderCoordsHelper);I.vec3.set(f,k.x,k.y,l);B.vectorToVector(f,k.spatialReference,f,e.renderCoordsHelper.spatialReference);v.worldDownAtLocation=f;p.intersectsWorldUpAtLocation=f}else n=!1;k=A.empty(R);l=!1;if(!h)switch(b.settings.visualElements.heightPlane.enabled){case "always":l=
!0;break;case "grab-z":l=!!(m.grabbingState&2)}m.grabbingState&2?C.updateGlobalAlpha(b.settings.visualElements.laserlineAlphaMultiplier):C.updateGlobalAlpha(1);l&&g.displaying&&d.calculateMapBounds(k)&&B.vectorToVector(A.getMin(k,f),e.spatialReference,f,e.renderCoordsHelper.spatialReference)?(w.heightPlane=f,w.attached=!0):w.attached=!1;k=!1;switch(b.settings.visualElements.zVerticalLine.enabled){case "never":k=!1;break;case "always":k=!0;break;case "grab":k=!!(m.grabbingState&1);break;case "grab-xy":k=
!!(m.grabbingState&4);break;case "grab-z":k=!!(m.grabbingState&2);break;default:G.neverReached(b.settings.visualElements.zVerticalLine.enabled)}m.grabbingState&4?D.updateGlobalAlpha(b.settings.visualElements.laserlineAlphaMultiplier):D.updateGlobalAlpha(1);p.attached=n&&g.displaying&&!h&&c;v.attached=n&&g.displaying&&!h&&c&&k};c.push(b.settings.zManipulator.watch("enabled",l),b.settings.visualElements.pointGraphics.watch("shadowEnabled",l),b.settings.visualElements.zVerticalLine.bindStyle(v),b.settings.visualElements.zVerticalLine.watch(["enabled",
"infinite"],l),D,g.watch(["displaying","isDraped"],l),g.on("changed",l),h.refHandle(function(){return r}),C);a.forEachManipulator(function(a){c.push(a.events.on("grab-changed",l))});c.push(h.destroyHandle(p));c.push(h.destroyHandle(v));c.push(h.destroyHandle(w));l()}function S(a,b,c){var d=a.graphic,d=new M.PointVisualElement({view:a.view,geometry:x(d)?d.geometry:null,elevationInfo:E.getGraphicEffectiveElevationInfo(d),attached:!1});T(a,d,b,c);c.push(h.destroyHandle(d));return d}function T(a,g,c,
d){var e=function(){g.attached=c.displaying&&b.settings.visualElements.pointGraphics.outlineEnabled};U(a,g,c,d);d.push(b.settings.visualElements.pointGraphics.outline.bindStyle(g),c.watch("displaying",e),b.settings.visualElements.pointGraphics.watch("outlineEnabled",e));e()}function U(a,b,c,d){var e=a.view,g=a.graphic,f=null,p=function(){t.isSome(f)&&(f.remove(),f=null);c.isDraped&&x(g)&&(f=V(e,g.geometry,function(){b.geometry=g.geometry}))};a=function(){p();b.geometry=x(g)?g.geometry:null};d.push(c.on("changed",
a),h.refHandle(function(){return f}));a()}function V(a,b,c){B.pointToVector(b,f,a.elevationProvider.spatialReference);var d=f[0],e=f[1];return a.elevationProvider.on("elevation-change",function(a){J.containsXY(a.extent,d,e)&&c()})}function x(a){return t.isSome(a.geometry)&&"point"===a.geometry.type}Object.defineProperty(y,"__esModule",{value:!0});y.createVisualElements=function(a){var b=a.view,c=new P.GraphicState({graphic:a.graphic}),d=[],e=S(a,c,d);Q(a,c,d,e);d.push(b.trackGraphicState(c));return{visualElement:e,
remove:function(){h.handlesGroup(d).remove()}}};var f=z.vec3f64.create(),R=A.create()});