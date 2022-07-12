/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import r from"../../core/Handles.js";import{L as s}from"../../chunks/Logger.js";import{b as o,x as n,m as i,o as a,i as c}from"../../core/lang.js";import{watch as p,syncAndInitial as h}from"../../core/reactiveUtils.js";import{property as u}from"../../core/accessorSupport/decorators/property.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import l from"../../views/3d/environment/CloudyWeather.js";import d from"../../views/3d/environment/FoggyWeather.js";import y from"../../views/3d/environment/RainyWeather.js";import{S as w,v as j}from"../../chunks/weather.js";import v from"../../views/3d/environment/SunnyWeather.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../chunks/JSONSupport.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";var g,k;!function(e){e.Disabled="disabled",e.Ready="ready",e.Error="error"}(g||(g={})),function(e){e.NotVisible="not-visible",e.LocalScene="local-scene",e.UnsupportedView="unsupported-view"}(k||(k={}));const f=s.getLogger("esri.widgets.Weather.WeatherViewModel");let _=class extends t{constructor(e){super(e),this.view=null,this._handles=new r,this._settingWeather=!1,this._weatherByType={sunny:new v,cloudy:new l,rainy:new y,snowy:new w,foggy:new d}}initialize(){this._handles.add([p((()=>this.current),(e=>{this._settingWeather||o(e)||(this._weatherByType={...this._weatherByType,[e.type]:e})}),h)])}destroy(){this._handles=n(this._handles)}get state(){const e=this.view;if(o(e)||!e.ready)return g.Disabled;switch(this.error){case"unsupported-view":case"local-scene":return g.Error;default:return g.Ready}}get error(){const e=this.view;return o(e)||!e.ready?null:"3d"!==e.type?k.UnsupportedView:"local"===e.viewingMode?k.LocalScene:e.environmentManager.weatherVisible?null:k.NotVisible}get current(){const e=i(this._environment,(e=>e.weather));return a(e,this._weatherByType.sunny)}set current(e){i(this._environment,(t=>t.weather=e))}get test(){return{...this._weatherByType}}get _environment(){const e=this.view;return c(e)&&"3d"===e.type?e.environment:null}setWeatherByType(e){if(!j(e,f))return;const t=this._environment;c(t)&&(this._settingWeather=!0,t.weather=this._weatherByType[e],this._settingWeather=!1)}};e([u()],_.prototype,"view",void 0),e([u()],_.prototype,"state",null),e([u()],_.prototype,"error",null),e([u()],_.prototype,"current",null),e([u()],_.prototype,"_environment",null),_=e([m("esri.widgets.Weather.WeatherViewModel")],_);const W=_;export{g as W,W as default};
