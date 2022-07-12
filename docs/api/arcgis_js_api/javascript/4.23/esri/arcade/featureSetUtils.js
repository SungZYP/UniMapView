// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../kernel ../request ./featureSetCollection ./featureset/actions/AttributeFilter ./featureset/actions/GroupBy ./featureset/actions/OrderBy ./featureset/actions/SpatialFilter ./featureset/actions/Top ./featureset/sources/FeatureLayerDynamic ./featureset/sources/FeatureLayerMemory ./featureset/sources/FeatureLayerRelated ./featureset/support/cache ./featureset/support/FeatureSet ./featureset/support/shared ../core/promiseUtils ../core/sql/WhereClause ../layers/FeatureLayer ../portal/Portal ../portal/PortalItem".split(" "),
function(t,x,D,w,A,E,F,G,H,I,J,K,L,m,M,B,n,N,u,O,P){function y(c,f){if(m.applicationCache){var e=m.applicationCache.getLayerInfo(c);if(e)return e.then(g=>n.resolve(new u({url:c,outFields:f,sourceJSON:g})));const b=new u({url:c,outFields:f});e=n.create((g,d)=>{b.load().then(()=>{g(b.sourceJSON)},l=>{d(l)})});m.applicationCache&&(m.applicationCache.setLayerInfo(c,e),e=e.catch(g=>{m.applicationCache.clearLayerInfo(c);throw g;}));return e.then(()=>n.resolve(b))}return n.resolve(new u({url:c,outFields:f}))}
function z(c,f,e,b,g,d=null){return y(c,["*"]).then(l=>n.resolve(v(l,f,e,b,g,d)))}function v(c,f=null,e=null,b=!0,g=null,d=null){return!0===c._hasMemorySource()?new K({layer:c,spatialReference:f,outFields:e,includeGeometry:b,lrucache:g,interceptor:d}):new J({layer:c,spatialReference:f,outFields:e,includeGeometry:b,lrucache:g,interceptor:d})}function Q(c){if(null!==m.applicationCache){var f=m.applicationCache.getLayerInfo(c);if(null!==f)return f}f=w(c,{responseType:"json",query:{f:"json"}}).then(e=>
e.data?n.resolve(e.data):n.resolve(null));null!==m.applicationCache&&(m.applicationCache.setLayerInfo(c,f),f=f.catch(e=>{m.applicationCache.clearLayerInfo(c);throw e;}));return f}function R(c,f){const e="QUERYDATAELEMTS:"+f.toString()+":"+c;if(null!==m.applicationCache){const b=m.applicationCache.getLayerInfo(e);if(null!==b)return b}c=w(c+"/queryDataElements",{method:"post",responseType:"json",query:{layers:JSON.stringify([f.toString()]),f:"json"}}).then(b=>{if(b.data&&(b=b.data,b.layerDataElements&&
b.layerDataElements[0]))return b.layerDataElements[0];throw Error("Not Found");});null!==m.applicationCache&&(m.applicationCache.setLayerInfo(e,c),c=c.catch(b=>{m.applicationCache.clearLayerInfo(e);throw b;}));return c}function C(c){if(null!==m.applicationCache){var f=m.applicationCache.getLayerInfo(c);if(null!==f)return f}f=w(c,{responseType:"json",query:{f:"json"}}).then(e=>e.data?(e=e.data,e.layers||(e.layers=[]),e.tables||(e.tables=[]),n.resolve(e)):n.resolve({layers:[],tables:[]}));null!==m.applicationCache&&
(m.applicationCache.setLayerInfo(c,f),f=f.catch(e=>{m.applicationCache.clearLayerInfo(c);throw e;}));return f}E.registerAction();F.registerAction();G.registerAction();H.registerAction();I.registerAction();let S=function(c){function f(b,g=null,d=null,l=null){var a=c.call(this)||this;a._map=b;a._overridespref=g;a.lrucache=d;a.interceptor=l;a._instantLayers=[];return a}x._inheritsLoose(f,c);var e=f.prototype;e._makeAndAddFeatureSet=function(b,g=!0,d=null){const l=v(b,this._overridespref,null===d?["*"]:
d,g,this.lrucache,this.interceptor);this._instantLayers.push({featureset:l,opitem:b,includeGeometry:g,outFields:JSON.stringify(d)});return l};e.featureSetByName=function(b,g=!0,d=null){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return this._map.load().then(()=>{try{return this.featureSetByName(b,g,d)}catch(a){return n.reject(a)}});null===d&&(d=["*"]);d=d.slice(0);d=d.sort();var l=JSON.stringify(d);for(let a=0;a<this._instantLayers.length;a++){const h=this._instantLayers[a];
if(h.opitem.title===b&&h.includeGeometry===g&&h.outFields===l)return this.resolvePromise(this._instantLayers[a].featureset)}if(l=this._map.allLayers.find(a=>a instanceof u&&a.title===b?!0:!1))return this.resolvePromise(this._makeAndAddFeatureSet(l,g,d));if(this._map.tables){const a=this._map.tables.find(h=>h.title&&h.title===b||h.title&&h.title===b?!0:!1);if(a){if(a instanceof u)return this.resolvePromise(this._makeAndAddFeatureSet(a,g,d));a._materializedTable||(a._materializedTable=new u(a.outFields?
a:{...a,outFields:["*"]}));return a._materializedTable.load().then(()=>this.resolvePromise(this._makeAndAddFeatureSet(a._materializedTable,g,d)))}}return this.resolvePromise(null)};e.featureSetById=function(b,g=!0,d=["*"]){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return this._map.load().then(()=>{try{return this.featureSetById(b,g,d)}catch(a){return n.reject(a)}});null===d&&(d=["*"]);d=d.slice(0);d=d.sort();var l=JSON.stringify(d);for(let a=0;a<this._instantLayers.length;a++){const h=
this._instantLayers[a];if(h.opitem.id===b&&h.includeGeometry===g&&h.outFields===l)return this.resolvePromise(this._instantLayers[a].featureset)}if(l=this._map.allLayers.find(a=>a instanceof u&&a.id===b?!0:!1))return this.resolvePromise(this._makeAndAddFeatureSet(l,g,d));if(this._map.tables){const a=this._map.tables.find(h=>h.id===b?!0:!1);if(a){if(a instanceof u)return this.resolvePromise(this._makeAndAddFeatureSet(a,g,d));a._materializedTable||(a._materializedTable=new u({...a,outFields:["*"]}));
return a._materializedTable.load().then(()=>this.resolvePromise(this._makeAndAddFeatureSet(a._materializedTable,g,d)))}}return this.resolvePromise(null)};return f}(A),T=function(c){function f(b,g=null,d=null,l=null){var a=c.call(this)||this;a._url=b;a._overridespref=g;a.lrucache=d;a.interceptor=l;a.metadata=null;a._instantLayers=[];return a}x._inheritsLoose(f,c);var e=f.prototype;e._makeAndAddFeatureSet=function(b,g=!0,d=null){const l=v(b,this._overridespref,null===d?["*"]:d,g,this.lrucache);this._instantLayers.push({featureset:l,
opitem:b,includeGeometry:g,outFields:JSON.stringify(d)});return l};e._loadMetaData=function(){return C(this._url).then(b=>this.metadata=b)};e.load=function(){return this._loadMetaData()};e.clone=function(){return new f(this._url,this._overridespref,this.lrucache,this.interceptor)};e.featureSetByName=function(b,g=!0,d=null){null===d&&(d=["*"]);d=d.slice(0);d=d.sort();const l=JSON.stringify(d);for(let a=0;a<this._instantLayers.length;a++){const h=this._instantLayers[a];if(h.opitem.title===b&&h.includeGeometry===
g&&h.outFields===l)return this.resolvePromise(this._instantLayers[a].featureset)}return this._loadMetaData().then(a=>{let h=null;for(const k of a.layers?a.layers:[])k.name===b&&(h=k);if(!h)for(const k of a.tables?a.tables:[])k.name===b&&(h=k);return h?y(this._url+"/"+h.id,["*"]).then(k=>this._makeAndAddFeatureSet(k,g,d)):this.resolvePromise(null)})};e.featureSetById=function(b,g=!0,d=["*"]){null===d&&(d=["*"]);d=d.slice(0);d=d.sort();const l=JSON.stringify(d);b=null!==b&&void 0!==b?b.toString():"";
for(let a=0;a<this._instantLayers.length;a++){const h=this._instantLayers[a];if(h.opitem.id===b&&h.includeGeometry===g&&h.outFields===l)return this.resolvePromise(this._instantLayers[a].featureset)}return this._loadMetaData().then(a=>{let h=null;for(const k of a.layers?a.layers:[])null!==k.id&&void 0!==k.id&&k.id.toString()===b&&(h=k);if(!h)for(const k of a.tables?a.tables:[])null!==k.id&&void 0!==k.id&&k.id.toString()===b&&(h=k);return h?y(this._url+"/"+h.id,["*"]).then(k=>this._makeAndAddFeatureSet(k,
g,d)):this.resolvePromise(null)})};x._createClass(f,[{key:"url",get:function(){return this._url}}]);return f}(A);t.constructAssociationMetaDataFeatureSetFromUrl=function(c,f){var e=3,b=[],g=null,d={},l=null;return C(c).then(a=>{if(a.controllerDatasetLayers&&void 0!==a.controllerDatasetLayers.utilityNetworkLayerId&&null!==a.controllerDatasetLayers.utilityNetworkLayerId){if(a.layers)for(const k of a.layers)d[k.id]=k.name;if(a.tables)for(const k of a.tables)d[k.id]=k.name;const h=a.controllerDatasetLayers.utilityNetworkLayerId;
return R(c,h).then(k=>{if(k){(g=k)&&g.dataElement&&void 0!==g.dataElement.schemaGeneration&&(e=g.dataElement.schemaGeneration);l={};g.dataElement.domainNetworks||(g.dataElement.domainNetworks=[]);for(const q of g.dataElement.domainNetworks){for(const p of q.edgeSources?q.edgeSources:[])k={layerId:p.layerId,sourceId:p.sourceId,className:d[p.layerId]?d[p.layerId]:null},k.className&&(l[k.className]=k);for(const p of q.junctionSources?q.junctionSources:[])k={layerId:p.layerId,sourceId:p.sourceId,className:d[p.layerId]?
d[p.layerId]:null},k.className&&(l[k.className]=k)}if(g.dataElement.terminalConfigurations)for(const q of g.dataElement.terminalConfigurations)for(const p of q.terminals)b.push({terminalId:p.terminalId,terminalName:p.terminalName});return Q(c+"/"+h).then(q=>{if(q.systemLayers&&void 0!==q.systemLayers.associationsTableId&&null!==q.systemLayers.associationsTableId){const p=[];4<=e&&(p.push("STATUS"),p.push("PERCENTALONG"));return z(c+"/"+q.systemLayers.associationsTableId.toString(),f,["OBJECTID","FROMNETWORKSOURCEID",
"TONETWORKSOURCEID","FROMGLOBALID","TOGLOBALID","TOTERMINALID","FROMTERMINALID","ASSOCIATIONTYPE","ISCONTENTVISIBLE","GLOBALID",...p],!1,null,null).then(r=>r.load()).then(r=>4<=e?(r=r.filter(N.WhereClause.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)",r.getFieldsIndex())),r.load()):r).then(r=>({lkp:l,associations:r,
unVersion:e,terminals:b}))}return{associations:null,unVersion:e,lkp:null,terminals:[]}})}return{associations:null,unVersion:e,lkp:null,terminals:[]}})}return{associations:null,unVersion:e,lkp:null,terminals:[]}})};t.constructFeatureSet=v;t.constructFeatureSetFromPortalItem=function(c,f,e,b,g,d,l,a=null){if(m.applicationCache){const h=m.applicationCache.getLayerInfo(c+":"+d.url);if(h)return h.then(k=>{try{const q=new u({url:B.extractServiceUrl(k.url)+"/"+f,outFields:["*"]});return n.resolve(v(q,e,
b,g,l,a))}catch(q){return n.reject(q)}},k=>n.reject(k))}return n.create((h,k)=>{const q=(new P({id:c,portal:d})).load();m.applicationCache&&m.applicationCache.setLayerInfo(c+":"+d.url,q);q.then(p=>{try{const r=new u({url:B.extractServiceUrl(p.url)+"/"+f,outFields:["*"]});h(v(r,e,b,g,l,a))}catch(r){k(r)}},p=>{m.applicationCache&&m.applicationCache.clearLayerInfo(c+":"+d.url);k(p)})})};t.constructFeatureSetFromRelationship=function(c,f,e,b=null,g=null,d=!0,l=null,a=null){let h=c.serviceUrl();if(!h)return null;
h="/"===h.charAt(h.length-1)?h+f.relatedTableId.toString():h+"/"+f.relatedTableId.toString();return z(h,b,g,d,l,a).then(k=>new L({layer:c,relatedLayer:k,relationship:f,objectId:e,spatialReference:b,outFields:g,includeGeometry:d,lrucache:l,interceptor:a}))};t.constructFeatureSetFromUrl=z;t.convertToFeatureSet=function(c,f,e,b,g){if(null===c)return null;if(c instanceof u){switch(f){case "datasource":return v(c,g,c.outFields,!0,e,b).getDataSourceFeatureSet();case "parent":return v(c,g,c.outFields,!0,
e,b);case "root":return v(c,g,c.outFields,!0,e,b)}return null}if(c instanceof M)switch(f){case "datasource":return c.getDataSourceFeatureSet();case "parent":return c;case "root":return c.getRootFeatureSet()}return null};t.createFeatureSetCollectionFromMap=function(c,f,e=null,b=null){return new S(c,f,e,b)};t.createFeatureSetCollectionFromService=function(c,f,e=null,b=null){return new T(c,f,e,b)};t.getPortal=function(c,f){return null===c?f:new O({url:c.field("url")})};t.initialiseMetaDataCache=function(){null===
m.applicationCache&&(m.applicationCache=new m)};t.lookupUser=function(c,f,e){return D.id.findCredential(c.restUrl)?"loaded"===c.loadStatus&&""===f&&c.user&&c.user.sourceJSON&&!1===e?n.resolve(c.user.sourceJSON):""===f?w(c.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===e?{}:{returnUserLicenseTypeExtensions:!0}}}).then(b=>b.data&&(b=b.data)&&b.username?n.resolve(b):n.resolve(null)):w(c.restUrl+"/community/users/"+f,{responseType:"json",query:{f:"json"}}).then(b=>b.data?(b=b.data,
b.error?null:n.resolve(b)):n.resolve(null)):n.resolve(null)};Object.defineProperty(t,"__esModule",{value:!0})});