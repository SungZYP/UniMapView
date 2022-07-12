/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../core/lang.js";import{L as s}from"../../chunks/Logger.js";import{watch as o,initial as i}from"../../core/reactiveUtils.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import n,{C as p}from"./UI.js";import m from"../../widgets/Attribution.js";import c from"../../widgets/Compass.js";import a from"../../widgets/NavigationToggle.js";import u from"../../widgets/Zoom.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/handleUtils.js";import"../../chunks/watch.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/metadata.js";import"../../chunks/domUtils.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/widgetUtils.js";import"../../chunks/widgetThemeUtils.js";import"../../core/watchUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../widgets/Widget.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../../widgets/Attribution/AttributionViewModel.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/asyncUtils.js";import"../../core/HandleOwner.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/jsxFactory.js";import"../../widgets/Compass/CompassViewModel.js";import"../../chunks/GoTo.js";import"../../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../../widgets/Zoom/ZoomViewModel.js";s.getLogger("esri.views.ui.DefaultUI");let d=class extends n{constructor(t){super(t),this._defaultPositionLookup={attribution:"manual",compass:"top-leading","navigation-toggle":"top-leading",zoom:"top-leading"},this.components=[]}initialize(){this._handles.add([o((()=>this.components),this._componentsWatcher.bind(this),i),o((()=>this.view),this._updateViewAwareWidgets.bind(this),i)])}_add(t,s,o,i){if("string"==typeof t&&this._defaultPositionLookup[t]){if(this._find(t))return;t=this._createComponent(t)}super._add(t,s,o,i)}_removeComponents(t){t.forEach((t=>{const s=this._find(t);s&&(this.remove(s),s.destroy())}))}_updateViewAwareWidgets(t){this.components.forEach((s=>{const o=this._find(s),i=o&&o.widget;(function(t){return t&&void 0!==t.view})(i)&&(i.view=t)}))}_componentsWatcher(t,s){this._removeComponents(s),this._addComponents(t),this._adjustPadding(t)}_adjustPadding(t){if(-1===t.indexOf("attribution")&&!this._isOverridden("padding")){const{top:t}=this.padding;this.padding=t}}_addComponents(t){this.initialized&&t.forEach((t=>this.add(this._createComponent(t),this._defaultPositionLookup[t])))}_createComponent(t){const s=this._createWidget(t);if(s)return new p({id:t,node:s})}_createWidget(t){return"attribution"===t?this._createAttribution():"compass"===t?this._createCompass():"navigation-toggle"===t?this._createNavigationToggle():"zoom"===t?this._createZoom():void 0}_createAttribution(){return new m({view:this.view})}_createCompass(){return new c({view:this.view})}_createNavigationToggle(){return new a({view:this.view})}_createZoom(){return new u({view:this.view})}};t([e()],d.prototype,"components",void 0),d=t([r("esri.views.ui.DefaultUI")],d);const h=d;export{h as default};
