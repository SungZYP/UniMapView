// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils","../../../ViewingMode"],function(l,C,h,D){function t(b,d,a){const c=a.parameters;a=a.paddingPixelsOverride;n.scale=Math.min(c.divisor/(d-c.offset),1);n.factor=Math.abs(b*b*b);n.minPixelSize=c.minPixelSize;n.paddingPixels=a;return n}function u(b,d){return 0===b?d.minPixelSize:d.minPixelSize*(1+2*d.paddingPixels/b)}function r(b,d){return Math.max(h.lerp(b*d.scale,b,d.factor),u(b,d))}let A=function(){function b(a,
c,e,f={camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0},g){this.viewingMode=a;this.description=c;this.ellipsoidRadius=e;this.parameters=f;this._paddingPixelsOverride=g;this.viewingMode===D.ViewingMode.Local?(this.coverageCompensation=this._surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this._surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=
this._calculateCurvatureDependentParametersGlobal)}var d=b.prototype;d.update=function(a){if(this.parameters&&this.parameters.camera.fovY===a.fovY&&this.parameters.camera.distance===a.distance)return!1;this._calculateParameters(a,this.ellipsoidRadius,this.parameters);return!0};d.overridePadding=function(a){return a!==this.paddingPixelsOverride?new b(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,a):this};d._calculateParameters=function(a,c,e){const {scaleStart:f,scaleFallOffRange:g,
minPixelSize:m}=this.description,{fovY:k,distance:q}=a;var p=this.calculateCurvatureDependentParameters(a,c);c=this.coverageCompensation(a,c,p);const {tiltAngle:v,scaleFallOffFactor:w}=p,x=Math.sin(v)*q,y=.5*Math.PI-v-k*(.5-f*c);p=x/Math.cos(y);c=(p-x/Math.cos(y+k*g*c)*w)/(1-w);e.camera.fovY=a.fovY;e.camera.distance=a.distance;e.offset=c;e.divisor=p-c;e.minPixelSize=m;return e};d._calculateCurvatureDependentParametersLocal=function(a,c,e=z){e.tiltAngle=this.description.curvatureDependent.min.tiltAngle;
e.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor;return e};d._calculateCurvatureDependentParametersGlobal=function(a,c,e=z){const f=this.description.curvatureDependent;a=1+a.distance/c;a=Math.sqrt(a*a-1);const [g,m]=[f.min.curvature,f.max.curvature];a=h.clamp((a-g)/(m-g),0,1);const [k,q]=[f.min,f.max];e.tiltAngle=h.lerp(k.tiltAngle,q.tiltAngle,a);e.scaleFallOffFactor=h.lerp(k.scaleFallOffFactor,q.scaleFallOffFactor,a);return e};d._surfaceCoverageCompensationLocal=function(a,
c,e){return(a.fovY-e.tiltAngle)/a.fovY};d._surfaceCoverageCompensationGlobal=function(a,c,e){const f=c*c;e=e.tiltAngle+.5*Math.PI;const {fovY:g,distance:m}=a;a=m*m+f-2*Math.cos(e)*m*c;const k=Math.sqrt(a);return(Math.acos(Math.sqrt(a-f)/k)-Math.asin(c/(k/Math.sin(e)))+.5*g)/g};C._createClass(b,[{key:"paddingPixelsOverride",get:function(){return this._paddingPixelsOverride||this.parameters.paddingPixels}}]);return b}();const B={curvatureDependent:{min:{curvature:h.deg2rad(10),tiltAngle:h.deg2rad(12),
scaleFallOffFactor:.5},max:{curvature:h.deg2rad(70),tiltAngle:h.deg2rad(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},n={scale:0,factor:0,minPixelSize:0,paddingPixels:0},z={tiltAngle:0,scaleFallOffFactor:0};l.applyPrecomputedScaleFactor=function(b,d,a=[0,0]){d=Math.min(Math.max(d.scale,u(b[1],d)/Math.max(1E-5,b[1])),1);a[0]=b[0]*d;a[1]=b[1]*d;return a};l.applyScaleFactor=r;l.getLabelSettings=function(b,d){const {curvatureDependent:a,scaleStart:c,scaleFallOffRange:e}=
B;return new A(b,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:.7},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:.95}},scaleStart:c,scaleFallOffRange:e,minPixelSize:14},d)};l.getSettings=function(b,d){return new A(b,B,d)};l.precomputeScaleFactor=function(b,d,a,c){b=t(b,d,a);b.minPixelSize=0;b.paddingPixels=0;b=r(1,b);c.scale=b;c.factor=0;c.minPixelSize=a.parameters.minPixelSize;c.paddingPixels=a.paddingPixelsOverride};
l.scale=function(b,d,a,c){return r(b,t(d,a,c))};Object.defineProperty(l,"__esModule",{value:!0})});