// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],function(e,g,c){c=function(f){function d(a,h){var b=f.call(this,!0)||this;b.key=a;b.registerIncoming("key-down",h,k=>b._handleKeyDown(k));return b}g._inheritsLoose(d,f);d.prototype._handleKeyDown=function(a){a.data.key===this.key&&(this.activate(),a.stopPropagation())};return d}(c.InputHandler);e.SingleKey=c;Object.defineProperty(e,"__esModule",{value:!0})});