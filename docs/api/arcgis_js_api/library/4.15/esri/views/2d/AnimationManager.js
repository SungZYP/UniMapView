// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../geometry ../../Viewpoint ../../core/Accessor ../../core/scheduling ../../core/accessorSupport/decorators ../ViewAnimation ./unitBezier ./viewpointUtils".split(" "),function(h,m,g,p,q,r,t,k,e,n,l,u){Object.defineProperty(m,"__esModule",{value:!0});var v=function(){function e(b,a,f,c){var d=b.targetGeometry,e=a.targetGeometry;c?"string"===typeof c&&(c=l.parse(c)||l.easingFunctions.ease):c=l.easingFunctions.ease;
this.easing=c;this.duration=f;this.sCenterX=d.x;this.sCenterY=d.y;this.sScale=b.scale;this.sRotation=b.rotation;this.tCenterX=e.x;this.tCenterY=e.y;this.tScale=a.scale;this.tRotation=a.rotation;this.dCenterX=this.tCenterX-this.sCenterX;this.dCenterY=this.tCenterY-this.sCenterY;this.dScale=this.tScale-this.sScale;this.dRotation=this.tRotation-this.sRotation;180<this.dRotation?this.dRotation-=360:-180>this.dRotation&&(this.dRotation+=360)}e.prototype.applyRatio=function(b,a){var f=this.easing(a),c,
d;1<=a?(a=this.tCenterX,c=this.tCenterY,d=this.tRotation,f=this.tScale):(a=this.sCenterX+f*this.dCenterX,c=this.sCenterY+f*this.dCenterY,d=this.sRotation+f*this.dRotation,f=this.sScale+f*this.dScale);b.targetGeometry.x=a;b.targetGeometry.y=c;b.scale=f;b.rotation=d};return e}();h=function(h){function b(a){a=h.call(this,a)||this;a.duration=200;a.transition=null;a.easing=l.easingFunctions.ease;a.view=null;a.viewpoint=null;a.viewpoint=new r({targetGeometry:new q.Point,scale:0,rotation:0});a._updateTask=
k.addFrameTask({postRender:a._postRender.bind(a)});a._updateTask.pause();return a}p(b,h);b.prototype.destroy=function(){this._updateTask.remove();this._updateTask=null};b.prototype.animate=function(a,b,c){var d=this;this.stop();u.copy(this.viewpoint,b);this.transition=new v(this.viewpoint,a.target,c&&c.duration||this.duration,c&&c.easing||this.easing);b=function(){d.animation===a&&d._updateTask&&("finished"===a.state&&(d.transition.applyRatio(d.viewpoint,1),d.view.state&&(d.view.state.viewpoint=d.viewpoint.clone())),
d.animation=null,d.updateFunction=null)};a.when(b,b);this._startTime=k.now();this._updateTask.resume();return this.animation=a};b.prototype.animateContinous=function(a,b){var c=this;this.stop();this.updateFunction=b;this.viewpoint=a;var d=new n({target:a.clone()});a=function(){c.animation===d&&c._updateTask&&(c.animation=null,c.updateFunction=null)};d.when(a,a);this._startTime=k.now();this._updateTask.resume();return this.animation=d};b.prototype.stop=function(){this.animation&&(this.animation.stop(),
this.updateFunction=this.animation=null)};b.prototype._postRender=function(a){var b=this.animation;b&&b.state!==n.State.STOPPED?(this.updateFunction?this.updateFunction(this.viewpoint,a.deltaTime):(a=(k.now()-this._startTime)/this.transition.duration,b=1<=a,this.transition.applyRatio(this.viewpoint,a),b&&this.animation.finish()),this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())):this._updateTask.pause()};g([e.property()],b.prototype,"animation",void 0);g([e.property()],b.prototype,
"duration",void 0);g([e.property()],b.prototype,"transition",void 0);g([e.property()],b.prototype,"easing",void 0);g([e.property()],b.prototype,"view",void 0);g([e.property()],b.prototype,"viewpoint",void 0);return b=g([e.subclass("esri.views.2d.AnimationManager")],b)}(e.declared(t));m.default=h});