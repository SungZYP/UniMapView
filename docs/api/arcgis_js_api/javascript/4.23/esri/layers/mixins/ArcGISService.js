// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../support/arcgisLayerUrl".split(" "),function(e,f,c,l,m,g,p,q,r,n,h){e.ArcGISService=b=>{b=function(k){function d(){return k.apply(this,arguments)||this}f._inheritsLoose(d,k);f._createClass(d,[{key:"title",get:function(){if(this._get("title")&&
"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const a=h.parse(this.url);if(m.isSome(a)&&a.title)return a.title}return this._get("title")||""},set:function(a){this._set("title",a)}},{key:"url",set:function(a){this._set("url",h.sanitizeUrl(a,l.getLogger(this.declaredClass)))}}]);return d}(b);c.__decorate([g.property()],b.prototype,"title",null);c.__decorate([g.property({type:String})],b.prototype,"url",null);return b=c.__decorate([n.subclass("esri.layers.mixins.ArcGISService")],
b)};Object.defineProperty(e,"__esModule",{value:!0})});