// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./support/clientSideDefaults ../../../rest/support/FeatureSet ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/support/typeUtils".split(" "),
function(f,p,k,L,u,z,A,B,v,C,D,m,M,N,E,F,G,H,I,J){const w=B.getLogger("esri.layers.graphics.sources.GeoJSONSource");f.GeoJSONSource=function(x){function q(){var a=x.apply(this,arguments)||this;a.type="geojson";a.refresh=C.debounce(function(){var b=p._asyncToGenerator(function*(e){yield a.load();const {extent:g,timeExtent:h}=yield a._connection.invoke("refresh",e);a.sourceJSON.extent=g;h&&(a.sourceJSON.timeInfo.timeExtent=[h.start,h.end]);return{dataChanged:!0,updates:{extent:a.sourceJSON.extent,timeInfo:a.sourceJSON.timeInfo}}});
return function(e){return b.apply(this,arguments)}}());return a}p._inheritsLoose(q,x);var c=q.prototype;c.load=function(a){a=v.isSome(a)?a.signal:null;this.addResolvingPromise(this._startWorker(a));return Promise.resolve(this)};c.destroy=function(){var a;null==(a=this._connection)?void 0:a.close();this._connection=null};c.applyEdits=function(a){return this.load().then(()=>this._applyEdits(a))};c.openPorts=function(){return this.load().then(()=>this._connection.openPorts())};c.queryFeatures=function(a,
b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatures",a?a.toJSON():null,b)).then(e=>G.fromJSON(e))};c.queryFeaturesJSON=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatures",a?a.toJSON():null,b))};c.queryFeatureCount=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatureCount",a?a.toJSON():null,b))};c.queryObjectIds=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryObjectIds",a?a.toJSON():null,
b))};c.queryExtent=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryExtent",a?a.toJSON():null,b)).then(e=>({count:e.count,extent:H.fromJSON(e.extent)}))};c.querySnapping=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("querySnapping",a,b))};c._applyEdits=function(a){if(!this._connection)throw new u("geojson-layer-source:edit-failure","Memory source not loaded");const b=this.layer.objectIdField,e=[],g=[],h=[];if(a.addFeatures)for(const d of a.addFeatures)e.push(this._serializeFeature(d));
if(a.deleteFeatures)for(const d of a.deleteFeatures)"objectId"in d&&null!=d.objectId?g.push(d.objectId):"attributes"in d&&null!=d.attributes[b]&&g.push(d.attributes[b]);if(a.updateFeatures)for(const d of a.updateFeatures)h.push(this._serializeFeature(d));return this._connection.invoke("applyEdits",{adds:e,updates:h,deletes:g}).then(({extent:d,timeExtent:l,featureEditResults:r})=>{this.sourceJSON.extent=d;l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]);return this._createEditsResult(r)})};
c._createEditsResult=function(a){return{addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};c._createFeatureEditResult=function(a){const b=!0===a.success?null:a.error||{code:void 0,description:void 0};
return{objectId:a.objectId,globalId:a.globalId,error:b?new u("geojson-layer-source:edit-failure",b.description,{code:b.code}):null}};c._serializeFeature=function(a){const {attributes:b}=a;return(a=this._geometryForSerialization(a))?{geometry:a.toJSON(),attributes:b}:{attributes:b}};c._geometryForSerialization=function(a){({geometry:a}=a);return v.isNone(a)?null:"mesh"===a.type||"extent"===a.type?I.fromExtent(a.extent):a};c._startWorker=function(){var a=p._asyncToGenerator(function*(b){this._connection=
yield D.open("GeoJSONSourceWorker",{strategy:z("feature-layers-workers")?"dedicated":"local",signal:b});const {fields:e,spatialReference:g,hasZ:h,geometryType:d,objectIdField:l,url:r,timeInfo:y,customParameters:K}=this.layer;var t="defaults"===this.layer.originOf("spatialReference");t={url:r,customParameters:K,fields:e&&e.map(n=>n.toJSON()),geometryType:J.featureGeometryTypeKebabDictionary.toJSON(d),hasZ:h,objectIdField:l,timeInfo:y?y.toJSON():null,spatialReference:t?null:g&&g.toJSON()};b=yield this._connection.invoke("load",
t,{signal:b});for(const n of b.warnings)w.warn(n.message,{layer:this.layer,warning:n});b.featureErrors.length&&w.warn(`Encountered ${b.featureErrors.length} validation errors while loading features`,b.featureErrors);this.sourceJSON=b.layerDefinition;this.capabilities=F.createCapabilities(this.sourceJSON.hasZ,!0)});return function(b){return a.apply(this,arguments)}}();return q}(A);k.__decorate([m.property()],f.GeoJSONSource.prototype,"capabilities",void 0);k.__decorate([m.property()],f.GeoJSONSource.prototype,
"type",void 0);k.__decorate([m.property({constructOnly:!0})],f.GeoJSONSource.prototype,"layer",void 0);k.__decorate([m.property()],f.GeoJSONSource.prototype,"sourceJSON",void 0);f.GeoJSONSource=k.__decorate([E.subclass("esri.layers.graphics.sources.GeoJSONSource")],f.GeoJSONSource);f.default=f.GeoJSONSource;Object.defineProperty(f,"__esModule",{value:!0})});