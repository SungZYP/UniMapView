// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../Manipulator3D"],function(a,d,e,f){Object.defineProperty(d,"__esModule",{value:!0});a=function(){function a(){this.grabbingState=0;this.firstSelected=this.zManipulator=null;this.numSelected=0;this.firstGrabbedXY=null}a.prototype.update=function(a){var b=this;this.grabbingState=0;this.zManipulator=null;this.numSelected=0;this.firstGrabbedXY=this.firstSelected=null;a.forEachManipulator(function(a,c){0===c&&(b.zManipulator=a);a instanceof f.Manipulator3D&&
(a.selected&&(0===b.numSelected&&(b.firstSelected=a),b.numSelected++),e.isNone(b.firstGrabbedXY)&&a.grabbing&&1===c&&(b.firstGrabbedXY=a));if(a.grabbing)switch(b.grabbingState|=1,c){case 0:b.grabbingState|=2;break;case 1:b.grabbingState|=4}})};return a}();d.ManipulatorState=a});