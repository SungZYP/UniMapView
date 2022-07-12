// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators"],function(g,a,f,d,c){Object.defineProperty(a,"__esModule",{value:!0});a.RefreshableLayer=function(a){return function(a){function b(){var e=null!==a&&a.apply(this,arguments)||this;e.refreshInterval=0;return e}f(b,a);b.prototype.refresh=function(){this.emit("refresh")};d([c.property({type:Number,cast:function(a){return.1<=a?a:0>=a?0:.1},json:{write:!0,
origins:{"web-document":{write:!0}}}})],b.prototype,"refreshInterval",void 0);return b=d([c.subclass("esri.layers.mixins.RefreshableLayer")],b)}(c.declared(a))}});