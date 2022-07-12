/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import t from"../request.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import s from"./Network.js";import i from"./support/NamedTraceConfiguration.js";import n from"./support/TerminalConfiguration.js";import"../config.js";import"../chunks/object.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/JSONSupport.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/persistableUrlUtils.js";import"./support/TraceConfiguration.js";import"../chunks/typeUtils2.js";import"../chunks/jsonMap.js";import"./support/UNTraceConfiguration.js";import"./support/Terminal.js";let a=class extends s{constructor(r){super(r),this.sharedNamedTraceConfigurations=[],this.type="utility"}get serviceTerritoryFeatureLayerId(){var r;return null==(r=this.dataElement)?void 0:r.serviceTerritoryFeatureLayerId}get rulesTableId(){var r;return null==(r=this.sourceJSON)?void 0:r.systemLayers.rulesTableId}get rulesTableUrl(){return this.sourceJSON?`${this.featureServiceUrl}/${this.rulesTableId}`:null}get subnetworksTableId(){var r;return null==(r=this.sourceJSON)?void 0:r.systemLayers.subnetworksTableId}get subnetworksTableUrl(){return this.sourceJSON?`${this.featureServiceUrl}/${this.subnetworksTableId}`:null}get terminalConfigurations(){var r;return(null==(r=this.dataElement)?void 0:r.terminalConfigurations.map((r=>n.fromJSON(r))))||[]}get domainNetworkNames(){var r;return(null==(r=this.dataElement)?void 0:r.domainNetworks.map((r=>r.domainNetworkName)))||[]}async load(r){return this.addResolvingPromise(super.load(r)),this.addResolvingPromise(this._loadNamedTraceConfigurationsFromNetwork(r)),this}getTerminalConfiguration(r){let t=null,e=null;const o=r.layer;let s=null;if("feature"!==(null==o?void 0:o.type))return null;if(s=o.layerId,null===s)return null;const i=r.attributes;if(null==i)return null;for(const o of Object.keys(i))"ASSETGROUP"===o.toUpperCase()&&(t=r.getAttribute(o)),"ASSETTYPE"===o.toUpperCase()&&(e=r.getAttribute(o));if(!this.dataElement)return null;let a=null;const l=this.dataElement.domainNetworks;for(const r of l){var u;const o=null==(u=r.junctionSources)?void 0:u.find((r=>r.layerId===s));if(o){var p;const r=null==(p=o.assetGroups)?void 0:p.find((r=>r.assetGroupCode===t));if(r){var m;const t=null==(m=r.assetTypes)?void 0:m.find((r=>r.assetTypeCode===e));if(t){a=t.terminalConfigurationId;break}}}}if(null!=a){const r=this.dataElement.terminalConfigurations,t=null==r?void 0:r.find((r=>r.terminalConfigurationId===a));return t?n.fromJSON(t):null}return null}getTierNames(r){var t;const e=null==(t=this.dataElement)?void 0:t.domainNetworks.find((t=>t.domainNetworkName===r));return(null==e?void 0:e.tiers.map((r=>r.name)))||[]}async _loadNamedTraceConfigurationsFromNetwork(r){var t;if(0===(null==(t=this.sharedNamedTraceConfigurations)?void 0:t.length))return;const e=this.sharedNamedTraceConfigurations.map((r=>r.globalId)),o=await this._fetchTraceConfigData(this.networkServiceUrl,e,r);for(const r of this.sharedNamedTraceConfigurations){const t=null==o?void 0:o.find((t=>t.globalId===r.globalId));t&&r.read(t,{origin:"service"})}}_fetchTraceConfigData(r,e,o){return t(`${r}/traceConfigurations/query`,{responseType:"json",query:{globalIds:JSON.stringify(e),f:"json"},...o}).then((r=>r.data.traceConfigurations))}};r([e({type:[i],json:{origins:{"web-map":{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}},service:{read:{source:"traceConfigurations"}}},read:!1}})],a.prototype,"sharedNamedTraceConfigurations",void 0),r([e({type:["utility"],readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"type",void 0),r([e({readOnly:!0})],a.prototype,"serviceTerritoryFeatureLayerId",null),r([e({readOnly:!0})],a.prototype,"rulesTableId",null),r([e({readOnly:!0})],a.prototype,"rulesTableUrl",null),r([e({readOnly:!0})],a.prototype,"subnetworksTableId",null),r([e({readOnly:!0})],a.prototype,"subnetworksTableUrl",null),r([e({readOnly:!0})],a.prototype,"terminalConfigurations",null),r([e({readOnly:!0})],a.prototype,"domainNetworkNames",null),a=r([o("esri.networks.UtilityNetwork")],a);const l=a;export{l as default};