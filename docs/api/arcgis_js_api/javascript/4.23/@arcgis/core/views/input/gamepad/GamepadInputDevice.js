/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";let o=class extends t{constructor(e){super(),this.nativeIndex=null,this._detectedDeviceType="unknown","standard"===e.mapping?this._detectedDeviceType="standard":i.test(e.id)?this._detectedDeviceType="spacemouse":this._detectedDeviceType="unknown",this.nativeIndex=e.index}get native(){return(navigator.getGamepads?navigator.getGamepads():[])[this.nativeIndex]}get deviceType(){return this._detectedDeviceType}get axisThreshold(){return n[this.deviceType]}};e([s({nonNullable:!0,readOnly:!0})],o.prototype,"nativeIndex",void 0),e([s({type:String,readOnly:!0})],o.prototype,"deviceType",null),e([s({type:Number,readOnly:!0})],o.prototype,"axisThreshold",null),o=e([r("esri.views.input.gamepad.GamepadInputDevice")],o);const i=new RegExp("^(3dconnexion|space(mouse|navigator|pilot|explorer))","i"),n={standard:.15,spacemouse:.025,unknown:0},p=o;export{p as default};
