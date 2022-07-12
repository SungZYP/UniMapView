// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Point ./FlowDisplayData ./FlowDisplayObject ../../../../geometry/Extent".split(" "),
function(n,g,f,t,u,p,h,v,m,E,F,G,w,x,y,z,A){function B(b,c){const d=new x({x:(b.xmax+b.xmin)/2,y:(b.ymax+b.ymin)/2,spatialReference:b.spatialReference});var a=b.xmax-b.xmin;const e=b.ymax-b.ymin,k=Math.abs(Math.cos(p.deg2rad(c))),l=Math.abs(Math.sin(p.deg2rad(c)));c=k*a+l*e;a=l*a+k*e;b=new A({xmin:d.x-c/2,ymin:d.y-a/2,xmax:d.x+c/2,ymax:d.y+a/2,spatialReference:b.spatialReference});b.centerAt(d);return b}const C=u.getLogger("esri.views.2d.engine.flow.FlowStrategy");f=function(b){function c(a){a=b.call(this,
a)||this;a._flowDisplayObject=new z.FlowDisplayObject;a._loading=null;return a}n._inheritsLoose(c,b);var d=c.prototype;d.initialize=function(){this.flowContainer.addChild(this._flowDisplayObject)};d.destroy=function(){this._clear();this.flowContainer.removeAllChildren()};d.update=function(a){var {flowStyle:e}=this.flowContainer;if(h.isNone(e))this._clear();else{var {extent:k,rotation:l,resolution:q,pixelRatio:D}=a.state;a=B(k,l);a.expand(1.15);e=new y(e,a,[Math.round((a.xmax-a.xmin)/q),Math.round((a.ymax-
a.ymin)/q)],D);if(h.isSome(this._loading)){if(this._loading.update(e))return;this._loading.destroy();this._loading=null}if(h.isNone(this._flowDisplayObject.displayData)||!this._flowDisplayObject.displayData.update(e))e.load().then(()=>{this._flowDisplayObject.clear();this._flowDisplayObject.displayData=this._loading;this._loading=null},r=>{v.isAbortError(r)||(C.error("A resource failed to load.",r),this._loading=null)}),this._loading=e}};d._clear=function(){this._flowDisplayObject.clear();h.isSome(this._loading)&&
(this._loading.destroy(),this._loading=null)};n._createClass(c,[{key:"updating",get:function(){return null!=this._loading}}]);return c}(t);g.__decorate([m.property()],f.prototype,"_loading",void 0);g.__decorate([m.property()],f.prototype,"flowContainer",void 0);g.__decorate([m.property()],f.prototype,"updating",null);return f=g.__decorate([w.subclass("esri.views.2d.engine.flow.FlowStrategy")],f)});