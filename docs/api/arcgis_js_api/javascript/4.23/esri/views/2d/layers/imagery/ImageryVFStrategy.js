// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Extent ../../engine/imagery/RasterVFDisplayObject".split(" "),function(n,h,f,t,u,q,l,B,C,D,v,w,x){const y=
t.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");f=function(r){function m(c){var a=r.call(this,c)||this;a.update=q.debounce((g,e)=>a._update(g,e).catch(d=>{q.isAbortError(d)||y.error(d)}));return a}n._inheritsLoose(m,r);var p=m.prototype;p.redraw=function(c){if(this.container.children.length){var a=this.container.children[0];a.symbolizerParameters=c;a.invalidateVAO();this.container.symbolTypes="wind_speed"===c.style?["scalar","triangle"]:"simple_scalar"===c.style?["scalar"]:["triangle"];
this.container.requestRender()}};p._update=function(){var c=n._asyncToGenerator(function*(a,g,e){if(a.stationary){var {extent:d,spatialReference:b}=a.state,k=new w({xmin:d.xmin,ymin:d.ymin,xmax:d.xmax,ymax:d.ymax,spatialReference:b}),[z,A]=a.state.size;this._loading=this.fetchPixels(k,z,A,e);e=yield this._loading;this._addToDisplay(e,g,a.state);this._loading=null}});return function(a,g,e){return c.apply(this,arguments)}}();p._addToDisplay=function(c,a,g){if(u.isNone(c.pixelBlock))this.container.children.forEach(k=>
k.destroy()),this.container.removeAllChildren();else{var {extent:e,pixelBlock:d}=c,b=new x.RasterVFDisplayObject(d);b.offset=[0,0];b.symbolizerParameters=a;b.rawPixelData=c;b.invalidateVAO();b.x=e.xmin;b.y=e.ymax;b.pixelRatio=g.pixelRatio;b.rotation=g.rotation;b.resolution=g.resolution;b.width=d.width*a.symbolTileSize;b.height=d.height*a.symbolTileSize;this.container.children.forEach(k=>k.destroy());this.container.removeAllChildren();this.container.symbolTypes="wind_speed"===a.style?["scalar","triangle"]:
"simple_scalar"===a.style?["scalar"]:["triangle"];this.container.addChild(b)}};n._createClass(m,[{key:"updating",get:function(){return!!this._loading}}]);return m}(f);h.__decorate([l.property()],f.prototype,"fetchPixels",void 0);h.__decorate([l.property()],f.prototype,"container",void 0);h.__decorate([l.property()],f.prototype,"_loading",void 0);h.__decorate([l.property()],f.prototype,"updating",null);return f=h.__decorate([v.subclass("esri.views.2d.layers.imagery.ImageryVFStrategy")],f)});