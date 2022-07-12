// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/vec2f64 ../../chunks/vec3 ../../chunks/vec3f64 ../3d/state/utils/navigationUtils ./FilteredFiniteDifference ./FilteredValue ./Momentum".split(" "),function(m,v,w,f,h,r,n,t,p){let u=function(g){function d(a,c,e,k,l,q=0,x){a=g.call(this,a,c,e)||this;a.angularVelocity1=k;a.axis1=l;a.angularVelocity2=q;a.axis2=x;return a}v._inheritsLoose(d,g);var b=d.prototype;b.value1=function(a){return g.prototype.valueFromInitialVelocity.call(this,
this.angularVelocity1,a)};b.value2=function(a){return g.prototype.valueFromInitialVelocity.call(this,this.angularVelocity2,a)};return d}(p.Momentum);p=function(){function g(b=300,a=12,c=.84){this.minimumInitialVelocity=b;this.stopVelocity=a;this.friction=c;this.enabled=!0;this.tmpAxis1=h.create();this.tmpAxis2=h.create();this.tmpAngles=w.create();this.time=new n.FilteredFiniteDifference(.3);this.screen=[new n.FilteredFiniteDifference(.4),new n.FilteredFiniteDifference(.4)];this.angle1=new t.FilteredValue(.6);
this.angle2=new t.FilteredValue(.6);this.axis1=h.create();this.axis2=h.create();this.lastScene=h.create()}var d=g.prototype;d.addMomentumDirectRotation=function(b,a,c,e,k,l){if(this.enabled){if(this.time.hasLastValue){if(.01>this.time.computeDelta(c))return;e=r.rotationAngleAndAxisDirectRotation(this.lastScene,a,this.tmpAxis2,e,k,l);this.angle2.update(0);1E-5>f.squaredLength(this.tmpAxis2)?e=0:f.normalize(this.axis1,this.tmpAxis2);this.angle1.update(e);f.copy(this.lastScene,a)}this.screen[0].update(b[0]);
this.screen[1].update(b[1]);this.time.update(c)}};d.addMomentumPreserveHeading=function(b,a,c,e,k,l,q){if(this.enabled){if(this.time.hasLastValue){if(.01>this.time.computeDelta(c))return;r.rotationAnglesAndAxesHeadingPreserving(this.lastScene,a,this.tmpAxis2,this.tmpAxis1,this.tmpAngles,e,k,l,q,!1);1E-5>f.squaredLength(this.tmpAxis2)?(this.angle1.update(0),this.angle2.update(0)):(this.angle1.update(this.tmpAngles[1]),this.angle2.update(this.tmpAngles[0]),f.normalize(this.axis1,this.tmpAxis1),f.normalize(this.axis2,
this.tmpAxis2));f.copy(this.lastScene,a)}this.screen[0].update(b[0]);this.screen[1].update(b[1]);this.time.update(c)}};d.reset=function(){this.screen[0].reset();this.screen[1].reset();this.angle1.reset();this.angle2.reset();this.time.reset()};d.evaluateMomentum=function(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;var b=this.screen[0].filteredDelta;const a=this.screen[1].filteredDelta;b=Math.sqrt(b*b+a*a)/this.time.filteredDelta;return Math.abs(b)<this.minimumInitialVelocity?null:
this.createMomentum(b,this.stopVelocity,this.friction)};d.createMomentum=function(b,a,c){return new u(b,a,c,this.angle1.filteredValue/this.time.filteredDelta,this.axis1,this.angle2.filteredValue/this.time.filteredDelta,this.axis2)};return g}();m.PanSphericalMomentum=u;m.PanSphericalMomentumEstimator=p;Object.defineProperty(m,"__esModule",{value:!0})});