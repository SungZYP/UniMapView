// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/visualVariables/OpacityVariable ./support/utils ../statistics/summaryStatistics ../support/utils ../support/adapters/support/layerUtils".split(" "),function(m,n,g,p,q,r,t,h,u,v,f){function w(b){return k.apply(this,arguments)}function k(){k=n._asyncToGenerator(function*(b){if(!(b&&b.layer&&(b.field||b.valueExpression||
b.sqlExpression)))throw new g("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(b.valueExpression&&!b.view)throw new g("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");b={...b};var a=f.createLayerAdapter(b.layer,f.featureCapableLayerTypes);b.layer=a;if(!a)throw new g("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+f.getLayerTypeLabels(f.featureCapableLayerTypes).join(", "));
var c=p.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);c=yield v.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=h.verifyBasicFieldValidity(a,c,"opacity-visual-variable:invalid-parameters"))throw a;return b});return k.apply(this,arguments)}function l(){l=n._asyncToGenerator(function*(b){var a=yield w(b);b=null;b=a.statistics?a.statistics:yield u({layer:a.layer,field:a.field,valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,
sqlWhere:a.sqlWhere,normalizationType:a.normalizationField?"field":void 0,normalizationField:a.normalizationField,minValue:a.minValue,maxValue:a.maxValue,view:a.view,signal:a.signal});var c=a.layer,d=a.field;c=(c=d&&"function"!==typeof d?c.getField(d):null)&&"date"===c.type;var e=h.createStopValues(b);e=(c=h.getDefaultDataRange(b,c,!0))||[e[0],e[4]];d=new t({field:d,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationField:a.normalizationField,stops:[{value:e[0],
opacity:.3},{value:e[1],opacity:1}],legendOptions:a.legendOptions});a=new r({type:"opacity",minSliderValue:null!=a.minValue?a.minValue:b.min,maxSliderValue:null!=a.maxValue?a.maxValue:b.max});a=new q({visualVariables:[a]});return b=Promise.resolve({visualVariable:d,statistics:b,defaultValuesUsed:!!c,authoringInfo:a})});return l.apply(this,arguments)}m.createVisualVariable=function(b){return l.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0})});