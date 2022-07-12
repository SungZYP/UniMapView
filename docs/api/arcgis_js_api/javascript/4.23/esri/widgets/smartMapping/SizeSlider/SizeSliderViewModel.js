// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../SmartMappingPrimaryHandleSliderViewModel".split(" "),function(n,l,p,f,z,A,t,u){f=function(q){function g(a){a=q.call(this,a)||this;a.persistSizeRangeEnabled=!1;return a}n._inheritsLoose(g,q);g.prototype.updateStops=function(a){const {primaryHandleEnabled:v,
persistSizeRangeEnabled:w,stops:x}=this,h=this.getValuesFromStops();if(null!=h&&h.length&&(a.sort((b,e)=>b.value>e.value?1:-1).forEach(b=>{h[b.index]=b.value}),x.forEach((b,e)=>b.value=h[e]),v&&w)){({stops:a}=this);var c=this.getValuesFromStops(),d=a.map(k=>k.size);const b=Math.max(...d),e=Math.min(...d);d=Math.max(...c);c=Math.min(...c);const m=a[5===a.length?2:1].value;d=Math.abs(d-m);c=Math.abs(c-m);const r=d>c?d:c,y=b-e;0!==r&&a.forEach(k=>{k.size=Math.abs(k.value-m)/r*y+e})}};n._createClass(g,
[{key:"stops",get:function(){return this.stops}}]);return g}(u);l.__decorate([p.property()],f.prototype,"persistSizeRangeEnabled",void 0);l.__decorate([p.property()],f.prototype,"stops",null);return f=l.__decorate([t.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],f)});