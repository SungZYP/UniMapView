// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/compilerUtils ../../core/Evented ../../core/watchUtils ../../core/accessorSupport/decorators ../../support/basemapDefinitions ../../support/basemapUtils ../../support/basemapUtils".split(" "),function(p,q,h,d,f,k,l,c,m,n,e){return function(g){function b(a){a=g.call(this,a)||this;a._basemapCache={};a.nextBasemap=e.ensureType("hybrid",a._basemapCache);a.view=null;a.toggle=a.toggle.bind(a);
return a}h(b,g);b.prototype.initialize=function(){l.init(this,"nextBasemap",function(a){a&&!a.loaded&&a.load().catch(function(){})})};b.prototype.destroy=function(){this.view=null};Object.defineProperty(b.prototype,"activeBasemap",{get:function(){return e.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)},enumerable:!0,configurable:!0});b.prototype.castNextBasemap=function(a){return e.ensureType(a,this._basemapCache)};Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?
"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.toggle=function(){if("disabled"!==this.state){var a=this.activeBasemap,b=this.nextBasemap;this.view.map.basemap=b;this.nextBasemap=a;this.emit("toggle",{previous:a,current:b})}};b.getThumbnailUrl=function(a){if(!a)return null;var b=a.thumbnailUrl;return b?b:(b=n.getWellKnownBasemapId(a))?m.esriBasemapDefinitions[b].thumbnailUrl:(a=a.baseLayers.find(function(a){return!!f.typeCast(a)().get("portalItem.thumbnailUrl")}))?f.typeCast(a)().get("portalItem.thumbnailUrl"):
null};d([c.property({dependsOn:["view.map.basemap"],readOnly:!0})],b.prototype,"activeBasemap",null);d([c.property()],b.prototype,"nextBasemap",void 0);d([c.cast("nextBasemap")],b.prototype,"castNextBasemap",null);d([c.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);d([c.property()],b.prototype,"view",void 0);d([c.property()],b.prototype,"toggle",null);return b=d([c.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],b)}(c.declared(k.EventedAccessor))});