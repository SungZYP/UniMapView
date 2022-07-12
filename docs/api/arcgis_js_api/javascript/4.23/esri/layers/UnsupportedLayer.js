// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/MultiOriginJSONSupport ../core/scheduling ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./Layer ./mixins/PortalLayer".split(" "),function(m,d,n,b,p,e,u,v,w,q,r,t){b=function(f){function g(a){a=f.call(this,a)||this;a.resourceInfo=null;a.type="unsupported";return a}m._inheritsLoose(g,f);var h=g.prototype;h.initialize=
function(){this.addResolvingPromise(new Promise((a,k)=>{p.schedule(()=>{const c=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let l="Unsupported layer type";c&&(l+=" "+c);k(new n("layer:unsupported-layer-type",l,{layerType:c}))})}))};h.read=function(a,k){const c={resourceInfo:a};null!=a.id&&(c.id=a.id);null!=a.title&&(c.title=a.title);f.prototype.read.call(this,c,k)};h.write=function(a){return Object.assign(a||{},this.resourceInfo,{id:this.id})};return g}(t.PortalLayer(b.MultiOriginJSONMixin(r)));
d.__decorate([e.property({readOnly:!0})],b.prototype,"resourceInfo",void 0);d.__decorate([e.property({type:["show","hide"]})],b.prototype,"listMode",void 0);d.__decorate([e.property({json:{read:!1},readOnly:!0,value:"unsupported"})],b.prototype,"type",void 0);return b=d.__decorate([q.subclass("esri.layers.UnsupportedLayer")],b)});