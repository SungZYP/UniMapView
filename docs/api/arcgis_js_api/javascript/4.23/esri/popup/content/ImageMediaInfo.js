// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./mixins/MediaInfo ./support/ImageMediaInfoValue".split(" "),function(h,c,d,a,n,p,k,l,m){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.refreshInterval=null;b.type="image";b.value=null;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({altText:this.altText,
title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})};return f}(l);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"refreshInterval",void 0);c.__decorate([d.property({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);c.__decorate([d.property({type:m,json:{write:!0}})],a.prototype,"value",void 0);return a=e=c.__decorate([k.subclass("esri.popup.content.ImageMediaInfo")],a)});