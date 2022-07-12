// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../Accessor","../Collection","../maybe","./utils"],function(h,t,u,f,y){function v(a){return a instanceof u?Object.keys(a.items):a instanceof t?y.getProperties(a).keys():a?Object.keys(a):[]}function q(a,b){return a instanceof u?a.items[b]:a[b]}function z(a,b){return Array.isArray(a)&&Array.isArray(b)?a.length!==b.length:!1}function k(a){return a?a.declaredClass:null}function w(a,b){const e=a.diff;if(e&&"function"===typeof e)return e(a,b);const l=v(a),m=v(b);if(0!==l.length||0!==
m.length){if(!l.length||!m.length||z(a,b))return{type:"complete",oldValue:a,newValue:b};var n=m.filter(d=>-1===l.indexOf(d)),c=l.filter(d=>-1===m.indexOf(d));c=l.filter(d=>-1<m.indexOf(d)&&q(a,d)!==q(b,d)).concat(n,c).sort();if((n=k(a))&&-1<A.indexOf(n)&&c.length)return{type:"complete",oldValue:a,newValue:b};var r;n=a instanceof t&&b instanceof t;for(const d of c){c=q(a,d);const g=q(b,d);!(n||"function"!==typeof c&&"function"!==typeof g)||c===g||null==c&&null==g||(c=e&&e[d]&&"function"===typeof e[d]?
e[d](c,g):"object"===typeof c&&"object"===typeof g&&k(c)===k(g)?w(c,g):{type:"complete",oldValue:c,newValue:g},f.isSome(c)&&(f.isSome(r)?r.diff[d]=c:r={type:"partial",diff:{[d]:c}}))}return r}}function x(a,b){if(f.isNone(a))return!1;b=b.split(".");for(const e of b){if("complete"===a.type)break;if("partial"===a.type){if(a=a.diff[e],!a)return!1}else return!1}return!0}function p(a){if(f.isNone(a))return!0;switch(a.type){case "complete":return!1;case "collection":for(const b of a.added)if(!p(b))return!1;
for(const b of a.removed)if(!p(b))return!1;for(const b of a.changed)if(!p(b))return!1;return!0;case "partial":for(const b in a.diff)if(!p(a.diff[b]))return!1;return!0}}const A=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];h.diff=function(a,b){if(!("function"===typeof a||"function"===typeof b||f.isNone(a)&&f.isNone(b)))return f.isNone(a)||f.isNone(b)||"object"===typeof a&&"object"===typeof b&&k(a)!==k(b)?{type:"complete",
oldValue:a,newValue:b}:w(a,b)};h.hasDiff=x;h.hasDiffAny=function(a,b){for(const e of b)if(x(a,e))return!0;return!1};h.isEmpty=p;Object.defineProperty(h,"__esModule",{value:!0})});