// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(e,f){const h=b=>function(c){function d(){var a=c.apply(this,arguments)||this;a._isDisposed=!1;return a}f._inheritsLoose(d,c);d.prototype.dispose=function(){for(const g of null!=(a=this._managedDisposables)?a:[]){var a;a=this[g];this[g]=null;a&&"function"===typeof a.dispose&&a.dispose()}this._isDisposed=!0};f._createClass(d,[{key:"isDisposed",get:function(){return this._isDisposed}}]);return d}(b);let k=function(b){function c(){return b.apply(this,
arguments)||this}f._inheritsLoose(c,b);return c}(h(function(){return function(){}}()));e.AutoDisposable=k;e.AutoDisposableMixin=h;e.autoDispose=function(){return(b,c)=>{if(!b.hasOwnProperty("_managedDisposables")){var d,a;b._managedDisposables=null!=(d=null==(a=b._managedDisposables)?void 0:a.slice())?d:[]}b._managedDisposables.unshift(c)}};Object.defineProperty(e,"__esModule",{value:!0})});