// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ./summaryStatistics ./support/ageUtils ../support/adapters/support/layerUtils".split(" "),function(n,g,p,q,c,d){function r(a){return h.apply(this,arguments)}function h(){h=n._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.startTime&&a.endTime&&a.unit))throw new g("summary-statistics-for-age:missing-parameters","'layer', 'startTime', 'endTime' and 'unit' parameters are required");const {layer:e,...k}=a;var b=d.createLayerAdapter(e,
d.featureCapableLayerTypes);a={layerAdapter:b,...k};if(!b)throw new g("summary-statistics-for-age:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(d.featureCapableLayerTypes).join(", "));const f=a.view,l=p.isSome(a.signal)?{signal:a.signal}:null;yield Promise.all([f&&f.when(),b.load(l)]);if(b=c.verifyDates(b,a.startTime,a.endTime,"summary-statistics-for-age:invalid-parameters"))throw b;if(-1===c.supportedAgeUnits.indexOf(a.unit))throw new g("summary-statistics-for-age:invalid-parameters",
`Supported units are: ${c.supportedAgeUnits.join(", ")}`);return a});return h.apply(this,arguments)}function m(){m=n._asyncToGenerator(function*(a){const {layerAdapter:e,...k}=yield r(a),{view:b,startTime:f,endTime:l,unit:t,minValue:u,maxValue:v,signal:w}=k,{valueExpression:x,statisticsQuery:y}=c.getAgeExpressions({layer:e,startTime:f,endTime:l,unit:t});return q({layer:e,valueExpression:x,...y,minValue:u,maxValue:v,view:b,signal:w})});return m.apply(this,arguments)}return function(a){return m.apply(this,
arguments)}});