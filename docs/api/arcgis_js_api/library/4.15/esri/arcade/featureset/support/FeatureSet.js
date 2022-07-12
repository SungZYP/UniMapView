// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../support/FeatureSetIterator ../support/IdSet ../support/shared ./cache ./stats ../../../core/promiseUtils ../../../core/sql/WhereClause ../../../geometry/geometryEngineAsync ../../../geometry/SpatialReference ../../../layers/support/FieldsIndex".split(" "),function(A,B,w,v,l,q,n,h,p,r,x,y){return function(){function b(a){this.recentlyUsedQueries=null;this._idstates=[];this._mainSetInUse=this._wset=this._parent=null;this._maxProcessing=200;this._maxQuery=500;this._totalCount=
-1;this._databaseType=l.FeatureServiceDatabaseType.NotEvaluated;this._databaseTypeProbed=null;this.declaredRootClass="esri.arcade.featureset.support.FeatureSet";this._featureCache=[];this.fields=this.types=null;this.objectIdField=this.geometryType="";this.spatialReference=null;this.loaded=this._transparent=this.hasZ=this.hasM=!1;this._fieldsIndex=this._loadPromise=null;a&&a.lrucache&&(this.recentlyUsedQueries=a.lrucache)}b.prototype.optimisePagingFeatureQueries=function(a){this._parent&&this._parent.optimisePagingFeatureQueries(a)};
b.prototype._hasMemorySource=function(){return!0};b.prototype.prop=function(a,c){if(void 0===c)return this[a];void 0!==this[a]&&(this[a]=c);return this};b.prototype.end=function(){return null!==this._parent&&!0===this._parent._transparent?this._parent.end():this._parent};b.prototype._ensureLoaded=function(){return this.load()};b.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=h.create(function(c,e){!0===a._parent.loaded?(a._initialiseFeatureSet(),c(a)):a._parent.load().then(function(){try{a._initialiseFeatureSet(),
c(a)}catch(d){e(d)}},e)}));return this._loadPromise};b.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.objectIdField=this.typeIdField="",this.spatialReference=
new x({wkid:4326}),this.geometryType=l.layerGeometryEsriConstants.point)};b.prototype.getField=function(a,c){var e;if(c=c||this.fields)a=a.toLowerCase(),c.some(function(c){c&&c.name.toLowerCase()===a&&(e=c);return!!e});return e};b.prototype.getFieldsIndex=function(){null===this._fieldsIndex&&(this._fieldsIndex=new y(this.fields));return this._fieldsIndex};b.prototype._maxProcessingRate=function(){return null!==this._parent?Math.min(this._maxProcessing,this._parent._maxProcessingRate()):Math.min(this._maxProcessing,
this._maxQueryRate())};b.prototype._maxQueryRate=function(){return null!==this._parent?Math.max(this._maxQuery,this._parent._maxQueryRate()):this._maxQuery};b.prototype._checkCancelled=function(a){if(null!==a&&a.aborted)throw Error("Operation has been cancelled.");};b.prototype.nativeCapabilities=function(){return this._parent.nativeCapabilities()};b.prototype._canDoAggregates=function(a,c,e,d,g){return null===this._parent?h.resolve(!1):this._parent._canDoAggregates(a,c,e,d,g)};b.prototype._getAggregatePagesDataSourceDefinition=
function(a,c,e,d,g,b,k){return null===this._parent?h.reject(Error("Should never be called")):this._parent._getAggregatePagesDataSourceDefinition(a,c,e,d,g,b,k)};b.prototype._getAgregagtePhysicalPage=function(a,c,e){return null===this._parent?h.reject(Error("Should never be called")):this._parent._getAgregagtePhysicalPage(a,c,e)};b.prototype.databaseType=function(){var a=this;if(this._databaseType===l.FeatureServiceDatabaseType.NotEvaluated){if(null!==q.applicationCache){var c=q.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
if(null!==c)return c}if(null!==this._databaseTypeProbed)return this._databaseTypeProbed;var e=[{thetype:l.FeatureServiceDatabaseType.SqlServer,testwhere:"(CAST( '2015-01-01' as DATETIME) \x3d CAST( '2015-01-01' as DATETIME)) AND OBJECTID\x3c0"},{thetype:l.FeatureServiceDatabaseType.Oracle,testwhere:"(TO_DATE('2003-11-18','YYYY-MM-DD') \x3d TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID\x3c0"},{thetype:l.FeatureServiceDatabaseType.StandardisedNoInterval,testwhere:"(date '2015-01-01 10:10:10' \x3d date '2015-01-01 10:10:10') AND OBJECTID\x3c0"}],
c=h.create(function(c,g){a._getDatabaseTypeImpl(e,0).then(function(d){a._databaseType=d;c(a._databaseType)},function(a){g(a)})});null!==q.applicationCache&&(q.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(),c),c=c.catch(function(c){q.applicationCache.clearDatabaseType(a._cacheableFeatureSetSourceKey());throw c;}));return this._databaseTypeProbed=c}return h.resolve(this._databaseType)};b.prototype._cacheableFeatureSetSourceKey=function(){return"MUSTBESET"};b.prototype._getDatabaseTypeImpl=
function(a,c){var e=this;return c>=a.length?h.resolve(l.FeatureServiceDatabaseType.StandardisedNoInterval):this._runDatabaseProbe(a[c].testwhere).then(function(d){return!0===d?a[c].thetype:e._getDatabaseTypeImpl(a,c+1)})};b.prototype._runDatabaseProbe=function(a){return null!==this._parent?this._parent._runDatabaseProbe(a):h.reject(Error("Not Implemented"))};b.prototype.isTable=function(){return this._parent.isTable()};b.prototype._featureFromCache=function(a){if(void 0!==this._featureCache[a])return this._featureCache[a]};
b.prototype._isInFeatureSet=function(a){return l.IdState.Unknown};b.prototype._getSet=function(a){throw Error("Not implemented in abstract class");};b.prototype._getFeature=function(a,c,e){var d=this;try{return this._checkCancelled(e),void 0!==this._featureFromCache(c)?h.resolve(this._featureFromCache(c)):this._getFeatures(a,c,this._maxProcessingRate(),e).then(function(){d._checkCancelled(e);return void 0!==d._featureFromCache(c)?d._featureFromCache(c):h.reject(Error("Feature Not Found"))})}catch(g){return h.reject(g)}};
b.prototype._getFeatureBatch=function(a,c){var e=this;try{this._checkCancelled(c);var d=new v([],a,!1,null),g=[];return this._getFeatures(d,-1,a.length,c).then(function(){e._checkCancelled(c);for(var d=0;d<a.length;d++){var b=a[d];void 0!==e._featureFromCache(b)&&g.push(e._featureFromCache(b))}return g})}catch(f){return h.reject(f)}};b.prototype._getFeatures=function(a,c,e,d){return h.resolve("success")};b.prototype._getFilteredSet=function(a,c,e,d,b){throw Error("Not implemented in abstract class");
};b.prototype._refineSetBlock=function(a,c,e){var d=this;try{if(!0===this._checkIfNeedToExpandCandidatePage(a,this._maxQueryRate()))return this._expandPagedSet(a,this._maxQueryRate(),0,0,e).then(function(){return d._refineSetBlock(a,c,e)});this._checkCancelled(e);var b=a._candidates.length;this._refineKnowns(a,c);var f=b-a._candidates.length;return 0===a._candidates.length||f>=c?h.resolve(a):this._refineIfParentKnown(a,c-f,e).then(function(){d._checkCancelled(e);d._refineKnowns(a,c-f);f=b-a._candidates.length;
if(f<c&&0<a._candidates.length){var g=c-f,h=d._prepareFetchAndRefineSet(a._candidates);return d._fetchAndRefineFeatures(h,h.length>g?g:a._candidates.length,e).then(function(){d._checkCancelled(e);d._refineKnowns(a,c-f);return a})}return a})}catch(k){return h.reject(k)}};b.prototype._fetchAndRefineFeatures=function(a,c,e){return null};b.prototype._prepareFetchAndRefineSet=function(a){for(var c=[],e=0;e<a.length;e++)this._isPhysicalFeature(a[e])&&c.push(a[e]);return c};b.prototype._isPhysicalFeature=
function(a){return null===this._parent?!0:this._parent._isPhysicalFeature(a)};b.prototype._refineKnowns=function(a,c){var e=0,d=null,b=[];c=this._maxQueryRate();for(var f=0;f<a._candidates.length&&"GETPAGES"!==a._candidates[f];f++){var k=!1,h=this._candidateIdTransform(a._candidates[f]);h!==a._candidates[f]&&(k=!0);var m=this._isInFeatureSet(h);if(m===l.IdState.InFeatureSet)!0===k?0>a._known.indexOf(h)&&(a._known.push(h),e+=1):(a._known.push(a._candidates[f]),e+=1),null===d?d={start:f,end:f}:d.end===
f-1?d.end=f:(b.push(d),d={start:f,end:f});else if(m===l.IdState.NotInFeatureSet)null===d?d={start:f,end:f}:d.end===f-1?d.end=f:(b.push(d),d={start:f,end:f}),e+=1;else if(m===l.IdState.Unknown&&(e+=1,!0===a._ordered))break;if(e>=c)break}null!==d&&b.push(d);for(c=b.length-1;0<=c;c--)a._candidates.splice(b[c].start,b[c].end-b[c].start+1)};b.prototype._refineIfParentKnown=function(a,c,e){var d=new v([],[],a._ordered,null);d._candidates=a._candidates.slice(0);return this._parent._refineSetBlock(d,c,e)};
b.prototype._candidateIdTransform=function(a){return this._parent._candidateIdTransform(a)};b.prototype._checkIfNeedToExpandKnownPage=function(a,c){if(null===a.pagesDefinition)return!1;for(var e=0,d=a._lastFetchedIndex;d<a._known.length;d++){if("GETPAGES"===a._known[d])return!0;if(void 0===this._featureCache[a._known[d]]&&(e+=1,e>=c))break}return!1};b.prototype._checkIfNeedToExpandCandidatePage=function(a,c){if(null===a.pagesDefinition)return!1;for(var e=0,d=0;d<a._candidates.length;d++){if("GETPAGES"===
a._candidates[d])return!0;e+=1;if(e>=c)break}return!1};b.prototype._expandPagedSet=function(a,c,e,d,b){return null===this._parent?h.reject(Error("Parent Paging not implemented")):this._parent._expandPagedSet(a,c,e,d,b)};b.prototype._expandPagedSetFeatureSet=function(a,c,e,d,b){var g=this;0<a._known.length&&"GETPAGES"===a._known[a._known.length-1]&&(d=1);0===d&&0<a._candidates.length&&"GETPAGES"===a._candidates[a._candidates.length-1]&&(d=2);return 0===d?h.resolve("finished"):this._getPage(a,d,b).then(function(d){return e+
d<c?g._expandPagedSet(a,c,e+d,0,b):"success"})};b.prototype._getPage=function(a,c,e){var d=this,b=1===c?a._known:a._candidates;if(a.pagesDefinition.internal.set.length>a.pagesDefinition.resultOffset||!0===a.pagesDefinition.internal.fullyResolved){--b.length;for(var f=0,k=0;k<a.pagesDefinition.resultRecordCount&&!(a.pagesDefinition.resultOffset+k>=a.pagesDefinition.internal.set.length);k++)b[b.length]=a.pagesDefinition.internal.set[a.pagesDefinition.resultOffset+k],f++;a.pagesDefinition.resultOffset+=
f;k=!1;!0===a.pagesDefinition.internal.fullyResolved&&a.pagesDefinition.internal.set.length<=a.pagesDefinition.resultOffset&&(k=!0);!1===k&&b.push("GETPAGES");return h.resolve(f)}return this._getPhysicalPage(a,c,e).then(function(){return d._getPage(a,c,e)})};b.prototype._getPhysicalPage=function(a,c,e){return null};b.prototype._clonePageDefinition=function(a){return null===this._parent?null:this._parent._clonePageDefinition(a)};b.prototype._first=function(a){return this.iterator(a).next()};b.prototype.first=
function(a){return this._first(a)};b.prototype.calculateStatistic=function(a,c,e,d){var b=this;return this._ensureLoaded().then(function(){return b._stat(a,c,"",null,null,e,d).then(function(g){return!1===g.calculated?b._manualStat(a,c,e,d).then(function(a){return a.result}):g.result})})};b.prototype._manualStat=function(a,c,e,d){switch(a.toLowerCase()){case "count":return n.count(this,d).then(function(a){return{calculated:!0,result:a}});case "distinct":return n.distinct(this,c,e).then(function(a){return{calculated:!0,
result:a}});case "avg":case "mean":return n.mean(this,c,d).then(function(a){return{calculated:!0,result:a}});case "stdev":return n.stdev(this,c,d).then(function(a){return{calculated:!0,result:a}});case "variance":return n.variance(this,c,d).then(function(a){return{calculated:!0,result:a}});case "sum":return n.sum(this,c,d).then(function(a){return{calculated:!0,result:a}});case "min":return n.min(this,c,d).then(function(a){return{calculated:!0,result:a}});case "max":return n.max(this,c,d).then(function(a){return{calculated:!0,
result:a}});default:return h.resolve({calculated:!0,result:0})}};b.prototype._stat=function(a,c,e,d,b,f,k){var g=this;return this._parent._stat(a,c,e,d,b,f,k).then(function(h){return!1===h.calculated?null===b&&""===e&&null===d?g._manualStat(a,c,f,k):{calculated:!1}:h})};b.prototype._unionAllGeomSelf=function(a){var c=this,e=this.iterator(this._defaultTracker(a)),d=[];return h.create(function(a,b){c._unionShapeInBatches(d,e,a,b)})};b.prototype._unionAllGeom=function(a){var c=this;return h.create(function(b,
d){var e=c.iterator(c._defaultTracker(a));c._unionShapeInBatches([],e,b,d)})};b.prototype._unionShapeInBatches=function(a,c,b,d){var e=this;c.next().then(function(g){try{null!==g&&null!==g.geometry&&a.push(g.geometry),30<a.length||null===g&&1<a.length?r.union(a).then(function(f){try{null===g?b(f):(a=[f],e._unionShapeInBatches(a,c,b,d))}catch(t){d(t)}},d):null===g?1===a.length?b(a[0]):b(null):e._unionShapeInBatches(a,c,b,d)}catch(k){d(k)}},d)};b.prototype.iterator=function(a){return new w(this,a)};
b.prototype.intersection=function(a,c){void 0===c&&(c=!1);return b._featuresetFunctions.intersection.bind(this)(a,c)};b.prototype.difference=function(a,c,e){void 0===c&&(c=!1);void 0===e&&(e=!0);return b._featuresetFunctions.difference.bind(this)(a,c,e)};b.prototype.symmetricDifference=function(a,c,e){void 0===c&&(c=!1);void 0===e&&(e=!0);return b._featuresetFunctions.symmetricDifference.bind(this)(a,c,e)};b.prototype.morphShape=function(a,c,e,d){void 0===e&&(e="unknown");void 0===d&&(d=null);return b._featuresetFunctions.morphShape.bind(this)(a,
c,e,d)};b.prototype.morphShapeAndAttributes=function(a,c,e){void 0===e&&(e="unknown");return b._featuresetFunctions.morphShapeAndAttributes.bind(this)(a,c,e)};b.prototype.union=function(a,c){void 0===c&&(c=!1);return b._featuresetFunctions.union.bind(this)(a,c)};b.prototype.intersects=function(a){return b._featuresetFunctions.intersects.bind(this)(a)};b.prototype.envelopeIntersects=function(a){return b._featuresetFunctions.envelopeIntersects.bind(this)(a)};b.prototype.contains=function(a){return b._featuresetFunctions.contains.bind(this)(a)};
b.prototype.overlaps=function(a){return b._featuresetFunctions.overlaps.bind(this)(a)};b.prototype.relate=function(a,c){return b._featuresetFunctions.relate.bind(this)(a,c)};b.prototype.within=function(a){return b._featuresetFunctions.within.bind(this)(a)};b.prototype.touches=function(a){return b._featuresetFunctions.touches.bind(this)(a)};b.prototype.top=function(a){return b._featuresetFunctions.top.bind(this)(a)};b.prototype.crosses=function(a){return b._featuresetFunctions.crosses.bind(this)(a)};
b.prototype.buffer=function(a,c,e,d){void 0===d&&(d=!0);return b._featuresetFunctions.buffer.bind(this)(a,c,e,d)};b.prototype.filter=function(a,c){void 0===c&&(c=null);return b._featuresetFunctions.filter.bind(this)(a,c)};b.prototype.orderBy=function(a){return b._featuresetFunctions.orderBy.bind(this)(a)};b.prototype.dissolve=function(a,c){return b._featuresetFunctions.dissolve.bind(this)(a,c)};b.prototype.groupby=function(a,c){return b._featuresetFunctions.groupby.bind(this)(a,c)};b.prototype.reduce=
function(a,c,b){var d=this;void 0===c&&(c=null);return h.create(function(e,f){d._reduceImpl(d.iterator(d._defaultTracker(b)),a,c,0,e,f,0)})};b.prototype._reduceImpl=function(a,c,b,d,g,f,k){var e=this;try{k++,1E3<k?setTimeout(function(){k=0;e._reduceImpl(a,c,b,d,g,f,k)}):a.next().then(function(l){try{if(null===l)g(b);else{var m=c(b,l,d,e);h.isPromiseLike(m)?m.then(function(b){e._reduceImpl(a,c,b,d+1,g,f,k)},f):e._reduceImpl(a,c,m,d+1,g,f,k)}}catch(z){f(z)}},f)}catch(m){f(m)}};b.prototype.removeField=
function(a){return b._featuresetFunctions.removeField.bind(this)(a)};b.prototype.addField=function(a,c,e){void 0===e&&(e=null);return b._featuresetFunctions.addField.bind(this)(a,c,e)};b.prototype.sumArea=function(a,c,b){void 0===c&&(c=!1);var d=l.convertSquareUnitsToCode(a);return this.reduce(function(a,b){return null===b.geometry?0:c?r.geodesicArea(b.geometry,d).then(function(c){return a+c}):r.planarArea(b.geometry,d).then(function(c){return a+c})},0,b)};b.prototype.sumLength=function(a,c,b){void 0===
c&&(c=!1);var d=l.convertLinearUnitsToCode(a);return this.reduce(function(a,b){return null===b.geometry?0:c?r.geodesicLength(b.geometry,d).then(function(c){return a+c}):r.planarLength(b.geometry,d).then(function(c){return a+c})},0,b)};b.prototype._substituteVars=function(a,c){if(null!==c){var b={},d;for(d in c)b[d.toLowerCase()]=c[d];a.parameters=b}};b.prototype.distinct=function(a,c,b,d){var e=this;void 0===c&&(c=1E3);void 0===b&&(b=null);return this.load().then(function(){var g=p.WhereClause.create(a,
e.getFieldsIndex());e._substituteVars(g,b);return e.calculateStatistic("distinct",g,c,e._defaultTracker(d))})};b.prototype.min=function(a,c,b){var d=this;void 0===c&&(c=null);return this.load().then(function(){var e=p.WhereClause.create(a,d.getFieldsIndex());d._substituteVars(e,c);return d.calculateStatistic("min",e,-1,d._defaultTracker(b))})};b.prototype.max=function(a,c,b){var d=this;void 0===c&&(c=null);return this.load().then(function(){var e=p.WhereClause.create(a,d.getFieldsIndex());d._substituteVars(e,
c);return d.calculateStatistic("max",e,-1,d._defaultTracker(b))})};b.prototype.avg=function(a,c,b){var d=this;void 0===c&&(c=null);return this.load().then(function(){var e=p.WhereClause.create(a,d.getFieldsIndex());d._substituteVars(e,c);return d.calculateStatistic("avg",e,-1,d._defaultTracker(b))})};b.prototype.sum=function(a,c,b){var d=this;void 0===c&&(c=null);return this.load().then(function(){var e=p.WhereClause.create(a,d.getFieldsIndex());d._substituteVars(e,c);return d.calculateStatistic("sum",
e,-1,d._defaultTracker(b))})};b.prototype.stdev=function(a,c,b){var d=this;void 0===c&&(c=null);return this.load().then(function(){var e=p.WhereClause.create(a,d.getFieldsIndex());d._substituteVars(e,c);return d.calculateStatistic("stdev",e,-1,d._defaultTracker(b))})};b.prototype.variance=function(a,c,b){var d=this;void 0===c&&(c=null);return this.load().then(function(){var e=p.WhereClause.create(a,d.getFieldsIndex());d._substituteVars(e,c);return d.calculateStatistic("variance",e,-1,d._defaultTracker(b))})};
b.prototype.count=function(a){var c=this;return this.load().then(function(){return c.calculateStatistic("count",p.WhereClause.create("1",c.getFieldsIndex()),-1,c._defaultTracker(a))})};b.prototype._defaultTracker=function(a){return a?a:{aborted:!1}};b.prototype.forEach=function(a,c){var b=this;return h.create(function(d,e){b._forEachImpl(b.iterator(b._defaultTracker(c)),a,b,d,e,0)})};b.prototype._forEachImpl=function(a,c,b,d,g,f){var e=this;try{f++,1E3<f?setTimeout(function(){f=0;e._forEachImpl(a,
c,b,d,g,f)},0):a.next().then(function(k){try{if(null===k)d(b);else{var l=c(k);void 0===l||null===l?e._forEachImpl(a,c,b,d,g,f):h.isPromiseLike(l)?l.then(function(){try{e._forEachImpl(a,c,b,d,g,f)}catch(u){g(u)}},g):e._forEachImpl(a,c,b,d,g,f)}}catch(u){g(u)}},g)}catch(t){g(t)}};b.prototype.convertToJSON=function(a){for(var c={layerDefinition:{geometryType:this.geometryType,fields:[]},featureSet:{features:[],geometryType:this.geometryType}},b=0;b<this.fields.length;b++)c.layerDefinition.fields.push(l.esriFieldToJson(this.fields[b]));
return this.reduce(function(a,b){a={geometry:b.geometry&&b.geometry.toJSON(),attributes:{}};for(var d in b.attributes)a.attributes[d]=b.attributes[d];c.featureSet.features.push(a);return 1},0,a).then(function(){return c})};b.prototype.castToText=function(){return"object, FeatureSet"};b.prototype.queryAttachments=function(a,c,b,d){return this._parent.queryAttachments(a,c,b,d)};b.prototype.serviceUrl=function(){return this._parent.serviceUrl()};b.prototype.relationshipMetaData=function(){return this._parent.relationshipMetaData()};
b.prototype.schema=function(){for(var a=[],c=0,b=this.fields;c<b.length;c++)a.push(l.esriFieldToJson(b[c]));return{objectIdField:this.objectIdField,typeIdField:this.typeIdField,geometryType:void 0===l.layerGeometryEsriConstants[this.geometryType]?"":l.layerGeometryEsriConstants[this.geometryType],hasZ:this.hasZ,hasM:this.hasM,fields:a}};b.prototype.convertToText=function(a,b){var c=this;return"schema"===a?this._ensureLoaded().then(function(){return JSON.stringify(c.schema())}):"featureset"===a?this._ensureLoaded().then(function(){var a=
[];return c.reduce(function(b,c){b={geometry:c.geometry?c.geometry.toJSON():null,attributes:c.attributes};null!==b.geometry&&b.geometry.spatialReference&&delete b.geometry.spatialReference;a.push(b);return 1},0,b).then(function(){var b=c.schema();b.features=a;b.spatialReference=c.spatialReference.toJSON();return JSON.stringify(b)})}):h.resolve(this.castToText())};b.prototype.getFeatureByObjectId=function(a,b){return this._parent.getFeatureByObjectId(a,b)};b._featuresetFunctions={};return b}()});