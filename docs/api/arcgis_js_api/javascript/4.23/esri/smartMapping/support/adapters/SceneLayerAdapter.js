// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/arrayUtils ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/support/fieldType ../../../layers/support/fieldUtils ../../../rest/support/FeatureSet ../../statistics/support/statsWorker ../../statistics/support/WorkerClient ../utils ./FeatureLayerAdapter ./LayerAdapter ./support/utils ../../../statistics/utils".split(" "),
function(q,A,B,C,r,x,u,G,H,w,P,I,J,D,E,v,K,L,M,N,t,O){w=function(F){function y(b){return F.call(this,b)||this}q._inheritsLoose(y,F);var l=y.prototype;l.destroy=function(){var b;this._featureLayerAdapter=null;null==(b=this.workerClient)?void 0:b.destroy()};l._hasCachedStatistics=function(b){return this.layer.hasCachedStatistics(b)};l._updateQuery=function(b,a=[],c=[]){if(!c.length)return b;const d=this.layer.objectIdField;b=b.clone();a=a.filter(f=>{f=this.layer.getField(f);return-1===c.indexOf(f.name)});
const e=a.some(f=>this.layer.getField(f).name===d);b.outFields=e?a:[...a,d];return b};l._fetchFeaturesFromMemory=function(){var b=q._asyncToGenerator(function*(a,c,d){if(!a)throw new r("scene-layer-adapter:insufficient-data","view is required to fetch the features from layerView");a=yield a.whenLayerView(this.layer);var e=new AbortController;const f=G.whenFalseOnce(a,"updating",e.signal);yield u.timeout(f,5E3,e);e=yield t.getMissingFields(this,d,a);c=this._updateQuery(c,d,e);c=(yield a.queryFeatures(c)).features;
return e.length?a.whenGraphicAttributes(c,e):c});return function(a,c,d){return b.apply(this,arguments)}}();l._fetchFeaturesJSONFromMemory=function(){var b=q._asyncToGenerator(function*(a,c,d){return this._fetchFeaturesFromMemory(a,c,d).then(t.ensureFeaturesJSON)});return function(a,c,d){return b.apply(this,arguments)}}();l._fetchFeaturesForStats=function(b,a){return L.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression}).then(c=>this.getSampleFeatures({sampleSize:-1,
view:b.view,returnGeometry:b.returnGeometry,requiredFields:c,signal:b.signal},a))};l._processStatsFromMemoryParams=function(){var b=q._asyncToGenerator(function*(a){const c=a.features;if(null!=c&&c.length)return c.length&&"declaredClass"in c[0]&&"esri.Graphic"===c[0].declaredClass?{graphics:c}:{featuresJSON:c};const {view:d,field:e,normalizationField:f,valueExpression:h,signal:k}=a;a=yield this._fetchFeaturesForStats({field:e,valueExpression:h,normalizationField:f,view:d,signal:k});if(null==a||!a.length)throw new r("scene-layer-adapter:insufficient-data",
"No features are available to calculate statistics");return{graphics:a}});return function(a){return b.apply(this,arguments)}}();l._generateFeatureSetForCachedHistogram=function(b,a=b.minimum,c=b.maximum,d){const e=[];for(var f=0;f<d;f++)e[f]=0;f=b.counts.length;const h=b.minimum,k=b.maximum;for(let m=0;m<f;m++){var g=(m+.5)/f;g=((1-g)*h+g*k-a)/(c-a)*d;0<=g&&g<=d&&(e[g===d?d-1:Math.floor(g)]+=b.counts[m])}const n=[];e.forEach((m,p)=>{const z=new B({attributes:{}});z.attributes.EXPR_1=p+1;z.attributes.countOFExpr=
m;n.push(z)});b=new E;b.features=n;return b};l._getCachedStatistics=function(b,a){const c=this.layer;return b.valueExpression||b.sqlExpression||b.sqlWhere||b.minValue||b.maxValue?Promise.reject(new r("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression', 'sqlWhere', 'minValue' or 'maxValue' is specified")):c.queryCachedStatistics(a&&a.name,{signal:b.signal}).then(d=>{d=d.stats;const {min:e,max:f,totalValuesCount:h}=d;let {avg:k,
stddev:g,sum:n,variance:m,count:p}=d;if(0!==e||0!==f)k=0===k?null:k,n=0===n?null:n,g=0===g?null:g,m=0===m?null:m,p=0===p?null:p;null==p&&(null!=n&&null!=k?p=Math.round(n/k):null!=h&&(p=h));return{avg:k,count:p,max:f,min:e,stddev:g,sum:n,variance:m}})};l._getNormalizationTotal=function(){var b=q._asyncToGenerator(function*(a,c,d){a=(c?yield this.workerClient.summaryStatistics({field:a},c):yield v.summaryStatistics({attribute:{field:a},features:d})).sum;if(null==a)throw new r("scene-layer-adapter:invalid",
"invalid normalizationTotal");return a});return function(a,c,d){return b.apply(this,arguments)}}();l._getSummaryStatisticsFromMemory=function(){var b=q._asyncToGenerator(function*(a,c){const {view:d,field:e,normalizationField:f,valueExpression:h}=a,{featuresJSON:k,graphics:g}=yield this._processStatsFromMemoryParams(a),n={field:e,valueExpression:h,normalizationType:a.normalizationType,normalizationField:f,normalizationTotal:a.normalizationTotal,minValue:a.minValue,maxValue:a.maxValue};a.valueExpression&&
d&&k&&(n.fieldType=null!=c&&c.type?J.kebabDict.toJSON(c.type):null,n.viewInfoParams=t.getViewInfoParams(d));"percent-of-total"===a.normalizationType&&null==a.normalizationTotal&&(n.normalizationTotal=yield this._getNormalizationTotal(e,k,g));return k?this.workerClient.summaryStatistics(n,k):v.summaryStatistics({attribute:n,features:g})});return function(a,c){return b.apply(this,arguments)}}();l._getCachedStatisticsForUniqueValues=function(b,a){const c=this.layer,d=a&&a.name,e=a&&this.getFieldDomain(b.field);
return b.valueExpression||b.sqlExpression||b.sqlWhere?Promise.reject(new r("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression' or 'sqlWhere' is specified")):c.queryCachedStatistics(d,{signal:b.signal}).then(f=>{var h=f.stats;if(!h.mostFrequentValues)return Promise.reject();f=f.labels&&f.labels.labels;const k={},g=[],n="countOF"+d;h.mostFrequentValues.forEach(m=>{const p=new B({attributes:{}});p.attributes[d]=a&&a.name!==c.objectIdField&&
(D.isNumericField(a)||D.isDateField(a))?Number(m.value):m.value;p.attributes[n]=m.count;g.push(p)});f&&f.forEach(m=>{k[m.value]=m.label});h=new E;h.features=g;return t.getUniqueValuesFromFeatureSet(h,this,b.field,b.view,k,b.signal)}).then(f=>O.createUVResult(f,e,b.returnAllCodedValues))};l._getUniqueValuesFromMemory=function(){var b=q._asyncToGenerator(function*(a,c){c=c&&this.getFieldDomain(a.field);const {view:d,field:e,valueExpression:f,returnAllCodedValues:h}=a;c={field:e,valueExpression:f,domain:c,
returnAllCodedValues:h};const {featuresJSON:k,graphics:g}=yield this._processStatsFromMemoryParams(a);a.valueExpression&&d&&k&&(c.viewInfoParams=t.getViewInfoParams(d));return k?this.workerClient.uniqueValues(c,k):v.uniqueValues({attribute:c,features:g})});return function(a,c){return b.apply(this,arguments)}}();l._getCachedStatisticsForHistogram=function(b,a){const c=this.layer;return b.valueExpression||b.sqlExpression||b.sqlWhere||b.normalizationType?Promise.reject(new r("scene-layer-adapter:not-supported",
"This Layer does not support calculating statistics when 'valueExpression' or 'sqlExpression' or 'sqlWhere' or 'normalizationType' is specified")):c.queryCachedStatistics(a&&a.name,{signal:b.signal}).then(d=>{var e=d.stats;const {minValue:f,maxValue:h}=b;d=null!=f?f:e.min;const k=null!=h?h:e.max,g=b.numBins||10;e=this._generateFeatureSetForCachedHistogram(e.histogram,d,k,g);return t.getHistogramFromFeatureSet(e,d,k,g)})};l._getClassBreaksFromMemory=function(){var b=q._asyncToGenerator(function*(a){const {view:c,
field:d,normalizationField:e,valueExpression:f}=a,{featuresJSON:h,graphics:k}=yield this._processStatsFromMemoryParams(a),g={field:d,valueExpression:f,normalizationType:a.normalizationType,normalizationField:e,normalizationTotal:a.normalizationTotal,minValue:a.minValue,maxValue:a.maxValue,standardDeviationInterval:a.standardDeviationInterval,classificationMethod:a.classificationMethod,numClasses:a.numClasses};a.valueExpression&&c&&h&&(g.viewInfoParams=t.getViewInfoParams(c));"percent-of-total"===
a.normalizationType&&null==a.normalizationTotal&&(g.normalizationTotal=yield this._getNormalizationTotal(d,h,k));return h?this.workerClient.classBreaks(g,h):v.classBreaks({attribute:g,features:k})});return function(a){return b.apply(this,arguments)}}();l._getHistogramFromMemory=function(){var b=q._asyncToGenerator(function*(a){const {view:c,field:d}=a,{featuresJSON:e,graphics:f}=yield this._processStatsFromMemoryParams(a),h={field:d,valueExpression:a.valueExpression,normalizationType:a.normalizationType,
normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal,minValue:a.minValue,maxValue:a.maxValue,standardDeviationInterval:a.standardDeviationInterval,classificationMethod:a.classificationMethod,numBins:a.numBins};a.valueExpression&&c&&e&&(h.viewInfoParams=t.getViewInfoParams(c));"percent-of-total"===a.normalizationType&&null==a.normalizationTotal&&(h.normalizationTotal=yield this._getNormalizationTotal(d,e,f));return e?this.workerClient.histogram(h,e):v.histogram({attribute:h,
features:f})});return function(a){return b.apply(this,arguments)}}();l.getField=function(b=""){return this.layer.getField(b)};l.getFieldUsageInfo=function(b){b=this.getField(b);if(!b)return null;b=this.layer.getFieldUsageInfo(b.name);return{supportsLabelingInfo:b.supportsLabelingInfo,supportsPopupTemplate:b.supportsPopupTemplate,supportsRenderer:b.supportsRenderer,supportsLayerQuery:b.supportsLayerQuery,supportsStatistics:!0}};l.getFieldDomain=function(b,a){return this._featureLayerAdapter?this._featureLayerAdapter.getFieldDomain(b,
a):null};l.summaryStatistics=function(b){const a=this.getField(b.field);return this._featureLayerAdapter?this._featureLayerAdapter.summaryStatistics(b):this._hasCachedStatistics(a&&a.name)?this._getCachedStatistics(b,a).catch(()=>{u.throwIfAborted(b.signal);return this._getSummaryStatisticsFromMemory(b,a)}):this._getSummaryStatisticsFromMemory(b,a)};l.uniqueValues=function(b){const a=this.getField(b.field);return this._featureLayerAdapter?this._featureLayerAdapter.uniqueValues(b):this._hasCachedStatistics(a&&
a.name)?this._getCachedStatisticsForUniqueValues(b,a).catch(()=>{u.throwIfAborted(b.signal);return this._getUniqueValuesFromMemory(b,a)}):this._getUniqueValuesFromMemory(b,a)};l.histogram=function(b){const a=this.getField(b.field);return this._featureLayerAdapter?this._featureLayerAdapter.histogram(b):this._hasCachedStatistics(a&&a.name)?this._getCachedStatisticsForHistogram(b,a).catch(()=>{u.throwIfAborted(b.signal);return this._getHistogramFromMemory(b)}):this._getHistogramFromMemory(b)};l.classBreaks=
function(b){const a=this.getField(b.field);return this._featureLayerAdapter?this._featureLayerAdapter.classBreaks(b):this._hasCachedStatistics(a&&a.name)?Promise.reject(new r("scene-layer-adapter:not-supported","Cached stats not supported")):this._getClassBreaksFromMemory(b)};l.queryFeatureCount=function(b){return this._featureLayerAdapter?this._featureLayerAdapter.queryFeatureCount(b):Promise.reject(new r("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support count query"))};
l.generateRenderer=function(b,a){return this._featureLayerAdapter?this._featureLayerAdapter.generateRenderer(b,a):Promise.reject(new r("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support generateRenderer operation"))};l.heatmapStatistics=function(b){return this._featureLayerAdapter?this._featureLayerAdapter.heatmapStatistics(b):Promise.reject(new r("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support heatmapStatistics operation"))};
l.predominantCategories=function(){var b=q._asyncToGenerator(function*(a){if(this._featureLayerAdapter)return this._featureLayerAdapter.predominantCategories(a);throw new r("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support predominantCategories");});return function(a){return b.apply(this,arguments)}}();l.getSampleFeatures=function(){var b=q._asyncToGenerator(function*(a,c){const {view:d,sampleSize:e,requiredFields:f,returnGeometry:h,signal:k}=a;var g=
"json"===c;const n=this.layer.createQuery();n.outFields=f;n.returnGeometry=!!h;n.where=null;n.num=e;let m=[];try{if(m=g?yield this._fetchFeaturesJSONFromMemory(d,n,f):yield this._fetchFeaturesFromMemory(d,n,f),m.length&&0<e&&e<=m.length)return C.pickRandom(m,e,1)}catch(p){u.throwIfAborted(k)}g=null;this._featureLayerAdapter&&(a={...a},delete a.view,g=yield this._featureLayerAdapter.getSampleFeatures(a,c));return g&&g.length?g:C.pickRandom(m,m.length,1)});return function(a,c){return b.apply(this,arguments)}}();
l.load=function(b){var a=this;const c=this.layer.load(b).then(function(){var d=q._asyncToGenerator(function*(e){a.workerClient=K.WorkerClient.getInstance();yield a.workerClient.open(x.unwrap(x.unwrap(b).signal));const f=e.associatedLayer;a.geometryType=e.geometryType;if(x.isSome(f))return a._featureLayerAdapter=new M({layer:f}),a._featureLayerAdapter.load(b).then(()=>{a.objectIdField=a._featureLayerAdapter.objectIdField;a.supportsSQLExpression=a._featureLayerAdapter.supportsSQLExpression;a.minScale=
a._featureLayerAdapter.minScale;a.maxScale=a._featureLayerAdapter.maxScale;a.fullExtent=a._featureLayerAdapter.fullExtent});a.objectIdField=e.objectIdField;a.supportsSQLExpression=!1;a.hasQueryEngine=!1;a.fullExtent=e.fullExtent});return function(e){return d.apply(this,arguments)}}());this.addResolvingPromise(c);return Promise.resolve(this)};return y}(N);A.__decorate([H.property({constructOnly:!0})],w.prototype,"layer",void 0);return w=A.__decorate([I.subclass("esri.smartMapping.support.adapters.SceneLayerAdapter")],
w)});