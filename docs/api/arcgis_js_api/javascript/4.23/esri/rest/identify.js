// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../geometry/support/normalizeUtils ./utils ./operations/identify ./support/IdentifyParameters ./support/IdentifyResult".split(" "),function(k,l,m,n,f,p,q,r){function g(){g=l._asyncToGenerator(function*(a,b,d){b=t(b);const h=b.geometry?[b.geometry]:[],e=f.parseUrl(a);e.path+="/identify";return n.normalizeCentralMeridian(h).then(c=>{c=p.identifyToIdentifyRESTParameters(b,{geometry:c&&c[0]});c=f.encode({...e.query,f:"json",...c});c=f.asValidOptions(c,
d);return m(e.path,c).then(u).then(v=>w(v,b.sublayers))})});return g.apply(this,arguments)}function u(a){a=a.data;a.results=a.results||[];const b={results:[]};b.results=a.results.map(d=>r.fromJSON(d));return b}function t(a){return a=q.from(a)}function w(a,b){if(null==b||!b.length)return a;for(const d of a.results){const h=b.find(e=>d.layerId===e.id);d.feature.sourceLayer=h}return a}k.identify=function(a,b,d){return g.apply(this,arguments)};Object.defineProperty(k,"__esModule",{value:!0})});