// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../config ../kernel ../request ../core/Error ../core/jsonMap ../core/maybe ../core/screenUtils ../core/urlUtils ../geometry/Polygon ../layers/support/fieldUtils ../renderers/visualVariables/support/visualVariableUtils ./geoprocessor/execute ./geoprocessor/submitJob ./support/fileFormat ./support/layoutTemplate ./support/printTaskUtils ./support/PrintTemplate ../support/apiKeyUtils ../views/support/floorFilterUtils".split(" "),function(A,u,ha,ra,
ia,sa,ja,C,z,B,ta,ua,va,wa,xa,ya,za,p,Aa,Ba,Ca){function L(){L=u._asyncToGenerator(function*(a,b,c){const d=M(a);let e=D.get(d);return Promise.resolve().then(()=>{if(e)return{data:e.gpMetadata};e={gpServerUrl:d,is11xService:!1,legendLayerNameMap:{},legendLayers:[]};return ia(d,{query:{f:"json"}})}).then(g=>{e.gpMetadata=g.data;e.cimVersion=e.gpMetadata.cimVersion;e.is11xService=!!e.cimVersion;D.set(d,e);return ka(b,e)}).then(g=>{const f=la(e);let l;const h=m=>"sync"===f?m.results&&m.results[0]&&m.results[0].value:
l.fetchResultData("Output_File",null,c).then(n=>n.value);return"async"===f?xa.submitJob(a,g,null,c).then(m=>{l=m;return m.waitForJobCompletion({interval:b.updateDelay}).then(h)}):wa.execute(a,g,null,c).then(h)})});return L.apply(this,arguments)}function N(){N=u._asyncToGenerator(function*(a){a=M(a);a=D.get(a);return la(a)});return N.apply(this,arguments)}function ka(a,b){return O.apply(this,arguments)}function O(){O=u._asyncToGenerator(function*(a,b){b=b||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};
var c=a.template||new Aa;null==c.showLabels&&(c.showLabels=!0);var d=c.exportOptions;let e;const g=za.toJSON(c.layout);d&&(e={dpi:d.dpi},"map_only"===g.toLowerCase()||""===g)&&(e.outputSize=[d.width,d.height]);d=c.layoutOptions;let f;if(d){let h;if("Miles"===d.scalebarUnit||"Kilometers"===d.scalebarUnit){var l="Kilometers";h="Miles"}else if("Meters"===d.scalebarUnit||"Feet"===d.scalebarUnit)l="Meters",h="Feet";f={titleText:d.titleText,authorText:d.authorText,copyrightText:d.copyrightText,customTextElements:d.customTextElements,
scaleBarOptions:{metricUnit:ma.toJSON(l),metricLabel:na[l],nonMetricUnit:ma.toJSON(h),nonMetricLabel:na[h]}}}l=null;null!=d&&d.legendLayers&&(l=d.legendLayers.map(h=>{b.legendLayerNameMap[h.layerId]=h.title;const m={id:h.layerId};h.subLayerIds&&(m.subLayerIds=h.subLayerIds);return m}));d=yield Da(a,c,b);if(d.operationalLayers){const h=/[\u4E00-\u9FFF\u0E00-\u0E7F\u0900-\u097F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF]/,m=/[\u0600-\u06FF]/,n=q=>{const v=q.text,k=(q=q.font)&&q.family&&q.family.toLowerCase();
v&&q&&("arial"===k||"arial unicode ms"===k)&&(q.family=h.test(v)?"Arial Unicode MS":"Arial","normal"!==q.style&&m.test(v)&&(q.family="Arial Unicode MS"))},t=()=>{throw new sa("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap");};d.operationalLayers.forEach(q=>{var v,k,E;null!=(v=q.featureCollection)&&v.layers?q.featureCollection.layers.forEach(w=>{var r,x,oa,pa;null!=(r=w.layerDefinition)&&null!=(x=r.drawingInfo)&&null!=(oa=x.renderer)&&oa.symbol&&
(r=w.layerDefinition.drawingInfo.renderer,"esriTS"===r.symbol.type?n(r.symbol):"CIMSymbolReference"!==r.symbol.type||b.is11xService||t());null!=(pa=w.featureSet)&&pa.features&&w.featureSet.features.forEach(H=>{H.symbol&&("esriTS"===H.symbol.type?n(H.symbol):"CIMSymbolReference"!==H.symbol.type||b.is11xService||t())})}):!b.is11xService&&null!=(k=q.layerDefinition)&&null!=(E=k.drawingInfo)&&E.renderer&&JSON.stringify(q.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&t()})}a.outSpatialReference&&
(d.mapOptions.spatialReference=a.outSpatialReference.toJSON());Object.assign(d,{exportOptions:e,layoutOptions:f||{}});Object.assign(d.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:b.legendLayers.slice()}});b.legendLayers.length=0;D.set(b.gpServerUrl,b);c={Web_Map_as_JSON:JSON.stringify(d),Format:ya.toJSON(c.format),Layout_Template:g};a.extraParameters&&Object.assign(c,a.extraParameters);return c});return O.apply(this,arguments)}function Da(a,b,c){return P.apply(this,arguments)}function P(){P=
u._asyncToGenerator(function*(a,b,c){var d=a.view;let e=d.spatialReference;const g={operationalLayers:yield Ea(d,b,c)};a=c.ssExtent||a.extent||d.extent;e&&e.isWrappable&&(a=a.clone()._normalize(!0),e=a.spatialReference);g.mapOptions={extent:a&&a.toJSON(),spatialReference:e&&e.toJSON(),showAttribution:b.attributionVisible};c.ssExtent=null;d.background&&(g.background=d.background.toJSON());d.rotation&&(g.mapOptions.rotation=-d.rotation);b.scalePreserved&&(g.mapOptions.scale=b.outScale||d.scale);C.isSome(d.timeExtent)&&
(b=C.isSome(d.timeExtent.start)?d.timeExtent.start.getTime():null,d=C.isSome(d.timeExtent.end)?d.timeExtent.end.getTime():null,g.mapOptions.time=[b,d]);return g});return P.apply(this,arguments)}function M(a){const b=a.lastIndexOf("/GPServer/");0<b&&(a=a.slice(0,b+9));return a}function Ea(a,b,c){return Q.apply(this,arguments)}function Q(){Q=u._asyncToGenerator(function*(a,b,c){const d=[],e={layerView:null,printTemplate:b,view:a};let g=0;b.scalePreserved&&(g=b.outScale||a.scale);var f=p.getVisibleLayerViews(a,
g);for(const l of f){f=l.layer;if(!f.loaded||p.isGroupLayer(f))continue;let h;e.layerView=l;if(h=p.isScreenshotRequired(l)?yield F(f,e,c):p.isBingMapsLayer(f)?{culture:f.culture,key:f.key,type:`BingMaps${"aerial"===f.style?"Aerial":"hybrid"===f.style?"Hybrid":"Road"}`}:p.isCSVLayer(f)?yield Fa(f,e,c):p.isFeatureLayer(f)?yield Ga(f,e,c):p.isGeoJSONLayer(f)?yield Ha(f,e,c):p.isGraphicsLayer(f)?yield Ia(f,e,c):p.isImageryLayer(f)?Ja(f,c):p.isImageryTileLayer(f)?yield Ka(f,e,c):p.isKMLLayer(f)?yield La(f,
e,c):p.isMapImageLayer(f)?Ma(f,e,c):p.isMapNotesLayer(f)?yield Na(e,c):p.isOpenStreetMapLayer(f)?{type:"OpenStreetMap"}:p.isStreamLayer(f)?yield Oa(f,e,c):p.isTileLayer(f)?Pa(f,c):p.isVectorTileLayer(f)?yield Qa(f,e,c):p.isWebTileLayer(f)?Ra(f):p.isWMSLayer(f)?Sa(f):p.isWMTSLayer(f)?Ta(f):yield F(f,e,c))Array.isArray(h)?d.push(...h):(h.id=f.id,h.title=c.legendLayerNameMap[f.id]||f.title,h.opacity=f.opacity,h.minScale=f.minScale||0,h.maxScale=f.maxScale||0,p.isBlendLayer(f)&&f.blendMode&&"normal"!==
f.blendMode&&(h.blendMode=f.blendMode),d.push(h))}g&&d.forEach(l=>{l.minScale=0;l.maxScale=0});a.graphics&&a.graphics.length&&(a=yield y(null,a.graphics,b,c))&&d.push(a);return d});return Q.apply(this,arguments)}function Fa(a,b,c){return R.apply(this,arguments)}function R(){R=u._asyncToGenerator(function*(a,b,c){a.legendEnabled&&c.legendLayers.push({id:a.id});var d=b.layerView;b=b.printTemplate;if(c.is11xService&&!d.filter)c={type:"CSV"},a.write(c,{origin:"web-map"}),delete c.popupInfo,delete c.layerType,
c.showLabels=b.showLabels&&a.labelsVisible;else return d=yield I(d),y(a,d,b,c);return c});return R.apply(this,arguments)}function y(a,b,c,d){return S.apply(this,arguments)}function S(){S=u._asyncToGenerator(function*(a,b,c,d){let e;const g=p.createPolygonLayer(),f=p.createPolylineLayer(),l=p.createPointLayer(),h=p.createMultipointLayer(),m=p.createPointLayer();m.layerDefinition.name="textLayer";delete m.layerDefinition.drawingInfo;if(a){"esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===
a.declaredClass?g.layerDefinition.name=f.layerDefinition.name=l.layerDefinition.name=h.layerDefinition.name=d.legendLayerNameMap[a.id]||a.get("arcgisProps.title")||a.title:"esri.layers.GraphicsLayer"===a.declaredClass&&(b=a.graphics.items);if(a.renderer){var n=a.renderer.toJSON();g.layerDefinition.drawingInfo.renderer=n;f.layerDefinition.drawingInfo.renderer=n;l.layerDefinition.drawingInfo.renderer=n;h.layerDefinition.drawingInfo.renderer=n}if(c.showLabels&&a.labelsVisible&&"function"===typeof a.write){var t,
q;if(n=null==(t=a.write({},{origin:"web-map"}).layerDefinition)?void 0:null==(q=t.drawingInfo)?void 0:q.labelingInfo)e=!0,g.layerDefinition.drawingInfo.labelingInfo=n,f.layerDefinition.drawingInfo.labelingInfo=n,l.layerDefinition.drawingInfo.labelingInfo=n,h.layerDefinition.drawingInfo.labelingInfo=n}}null!=a&&a.renderer||e||(delete g.layerDefinition.drawingInfo,delete f.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo,delete h.layerDefinition.drawingInfo);t=null==a?void 0:a.fieldsIndex;
q=null==a?void 0:a.renderer;if(t){var v=new Set;e&&(yield ua.collectLabelingFields(v,a));q&&"function"===typeof q.collectRequiredFields&&(yield q.collectRequiredFields(v,t));v=Array.from(v);t=t.fields.map(r=>r.toJSON());g.layerDefinition.fields=t;f.layerDefinition.fields=t;l.layerDefinition.fields=t;h.layerDefinition.fields=t}t=b&&b.length;let k;for(q=0;q<t;q++){var E;n=b[q]||b.getItemAt(q);if(!1!==n.visible&&n.geometry&&(k=n.toJSON(),k.hasOwnProperty("popupTemplate")&&delete k.popupTemplate,k.geometry&&
k.geometry.z&&delete k.geometry.z,!k.symbol||!k.symbol.outline||"esriCLS"!==k.symbol.outline.type||d.is11xService)){!d.is11xService&&k.symbol&&k.symbol.outline&&k.symbol.outline.color&&k.symbol.outline.color[3]&&(k.symbol.outline.color[3]=255);var w=a&&a.renderer&&("valueExpression"in a.renderer&&a.renderer.valueExpression||"hasVisualVariables"in a.renderer&&a.renderer.hasVisualVariables());if(!k.symbol&&a&&a.renderer&&w&&!d.is11xService){w=a.renderer;const r=yield w.getSymbolAsync(n);if(!r)continue;
k.symbol=r.toJSON();"hasVisualVariables"in w&&w.hasVisualVariables()&&p.applyVisualVariables(k.symbol,{renderer:w,graphic:n,symbol:r})}k.symbol&&(k.symbol.angle||delete k.symbol.angle,J(k.symbol)?k.symbol=yield K(k.symbol,d):k.symbol.text&&delete k.attributes);if(!(c&&c.forceFeatureAttributes||null==(E=v))&&E.length){const r={};v.forEach(x=>{k.attributes&&k.attributes.hasOwnProperty(x)&&(r[x]=k.attributes[x])});k.attributes=r}"polygon"===n.geometry.type?g.featureSet.features.push(k):"polyline"===
n.geometry.type?f.featureSet.features.push(k):"point"===n.geometry.type?k.symbol&&k.symbol.text?m.featureSet.features.push(k):l.featureSet.features.push(k):"multipoint"===n.geometry.type?h.featureSet.features.push(k):"extent"===n.geometry.type&&(k.geometry=ta.fromExtent(n.geometry).toJSON(),g.featureSet.features.push(k))}}a=[g,f,h,l,m].filter(r=>0<r.featureSet.features.length);for(const r of a)b=r.featureSet.features.every(x=>x.symbol),!b||c&&c.forceFeatureAttributes||r.featureSet.features.forEach(x=>
{delete x.attributes}),b&&delete r.layerDefinition.drawingInfo,r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.renderer&&(yield qa(r.layerDefinition.drawingInfo.renderer,d));return a.length?{featureCollection:{layers:a},showLabels:e}:null});return S.apply(this,arguments)}function Ga(a,b,c){return T.apply(this,arguments)}function T(){T=u._asyncToGenerator(function*(a,b,c){var d,e;const g=a.renderer;var f=parseFloat(c.cimVersion);if(a.featureReduction&&(!c.is11xService||2.9>f)||"dot-density"===
(null==g?void 0:g.type)&&(!c.is11xService||2.6>f))return F(a,b,c);a.legendEnabled&&c.legendLayers.push({id:a.id});f=b.layerView;const {printTemplate:l,view:h}=b;b=g&&("valueExpression"in g&&g.valueExpression||"hasVisualVariables"in g&&g.hasVisualVariables());const m="feature-layer"!==(null==(d=a.source)?void 0:d.type)&&"ogc-feature"!==(null==(e=a.source)?void 0:e.type);if(!c.is11xService&&b||f.filter||m||!g||"field"in g&&null!=g.field&&("string"!==typeof g.field||!a.getField(g.field)))f=yield I(f),
d=yield y(a,f,l,c);else{var n,t;d=a.write();d={id:d.id,title:d.title,opacity:d.opacity,minScale:d.minScale,maxScale:d.maxScale,url:d.url,layerType:d.layerType,customParameters:d.customParameters,layerDefinition:d.layerDefinition};d.showLabels=l.showLabels&&a.labelsVisible;G(d,a);null!=(n=d.layerDefinition)&&null!=(t=n.drawingInfo)&&t.renderer&&(delete d.layerDefinition.minScale,delete d.layerDefinition.maxScale,yield qa(d.layerDefinition.drawingInfo.renderer,c),"visualVariables"in g&&g.visualVariables&&
g.visualVariables[0]&&(a=g.visualVariables[0],"size"===a.type&&a.maxSize&&"number"!==typeof a.maxSize&&a.minSize&&"number"!==typeof a.minSize&&(a=va.getSizeRangeAtScale(a,h.scale),d.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=a.minSize,d.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=a.maxSize)));if(a=Ca.getFloorFilterClause(f))d.layerDefinition||(d.layerDefinition={}),d.layerDefinition.definitionExpression=d.layerDefinition.definitionExpression?`(${d.layerDefinition.definitionExpression}) AND (${a})`:
a}return d});return T.apply(this,arguments)}function Ha(a,b,c){return U.apply(this,arguments)}function U(){U=u._asyncToGenerator(function*(a,{layerView:b,printTemplate:c},d){a.legendEnabled&&d.legendLayers.push({id:a.id});b=yield I(b);return y(a,b,c,d)});return U.apply(this,arguments)}function Ia(a,b,c){return V.apply(this,arguments)}function V(){V=u._asyncToGenerator(function*(a,{printTemplate:b},c){return y(a,null,b,c)});return V.apply(this,arguments)}function Ja(a,b){a.legendEnabled&&b.legendLayers.push({id:a.id});
var c=a.write();c={layerType:c.layerType,customParameters:c.customParameters};c.bandIds=a.bandIds;c.compressionQuality=a.compressionQuality;c.format=a.format;c.interpolation=a.interpolation;if(a.mosaicRule||a.definitionExpression)c.mosaicRule=a.exportImageServiceParameters.mosaicRule.toJSON();if(a.renderingRule||a.renderer)if(b.is11xService)a.renderingRule&&(c.renderingRule=a.renderingRule.toJSON()),a.renderer&&(c.layerDefinition=c.layerDefinition||{},c.layerDefinition.drawingInfo=c.layerDefinition.drawingInfo||
{},c.layerDefinition.drawingInfo.renderer=a.renderer.toJSON());else if(b=a.exportImageServiceParameters.combineRendererWithRenderingRule())c.renderingRule=b.toJSON();G(c,a);return c}function Ka(a,b,c){return W.apply(this,arguments)}function W(){W=u._asyncToGenerator(function*(a,b,c){var d;if("flow"===(null==(d=a.renderer)?void 0:d.type))return F(a,b,c);a.legendEnabled&&c.legendLayers.push({id:a.id});b=a.write()||{};b={bandIds:b.bandIds,customParameters:b.customParameters,interpolation:b.interpolation,
layerDefinition:b.layerDefinition,layerType:"ArcGISImageServiceLayer"};G(b,a);return b});return W.apply(this,arguments)}function La(a,b,c){return X.apply(this,arguments)}function X(){X=u._asyncToGenerator(function*(a,b,c){const d=b.printTemplate;if(c.is11xService)return c={type:"kml"},a.write(c,{origin:"web-map"}),delete c.layerType,c.url=B.normalize(a.url),c;{const e=[];b=b.layerView;b.allVisibleMapImages.forEach((g,f)=>{f={id:`${a.id}_image${f}`,type:"image",title:a.id,minScale:a.minScale||0,maxScale:a.maxScale||
0,opacity:a.opacity,extent:g.extent};"data:image/png;base64,"===g.href.substr(0,22)?f.imageData=g.href.substr(22):f.url=g.href;e.push(f)});b=[...b.allVisiblePoints.items,...b.allVisiblePolylines.items,...b.allVisiblePolygons.items];c={id:a.id,...yield y(null,b,d,c)};e.push(c);return e}});return X.apply(this,arguments)}function Ma(a,{view:b},c){let d;const e={id:a.id,subLayerIds:[]};let g=[];const f=b.scale,l=h=>{var m=0===f;const n=0===h.minScale||f<=h.minScale,t=0===h.maxScale||f>=h.maxScale;h.visible&&
(m||n&&t)&&(h.sublayers?h.sublayers.forEach(l):(m=h.toExportImageJSON(),g.unshift({id:h.id,name:h.title,layerDefinition:{drawingInfo:m.drawingInfo,definitionExpression:m.definitionExpression,source:m.source}}),e.subLayerIds.push(h.id)))};a.sublayers&&a.sublayers.forEach(l);g.length&&(g=g.map(({id:h,name:m,layerDefinition:n})=>({id:h,name:m,layerDefinition:n})),d=(h=>({layerType:h.layerType,customParameters:h.customParameters}))(a.write()),d.layers=g,d.visibleLayers=a.capabilities.exportMap.supportsDynamicLayers?
void 0:e.subLayerIds,G(d,a),a.legendEnabled&&c.legendLayers.push(e));return d}function Na(a,b){return Y.apply(this,arguments)}function Y(){Y=u._asyncToGenerator(function*({layerView:a,printTemplate:b},c){const d=[];a=a.layer;if(C.isSome(a.featureCollections))for(var e of a.featureCollections){var g=yield y(e,e.source,b,c);g&&d.push(...g.featureCollection.layers)}else if(C.isSome(a.sublayers))for(g of a.sublayers)(e=yield y(null,g.graphics,b,c))&&d.push(...e.featureCollection.layers);return{featureCollection:{layers:d}}});
return Y.apply(this,arguments)}function F(a,b,c){return Z.apply(this,arguments)}function Z(){Z=u._asyncToGenerator(function*(a,{printTemplate:b,view:c},d){const e={type:"image"};a={format:"png",ignoreBackground:!0,layers:[a],rotation:0};const g=d.ssExtent||c.extent.clone();let f=96,l=!0,h=!0;if(b.exportOptions){const m=b.exportOptions;0<m.dpi&&(f=m.dpi);0<m.width&&(l=m.width%2===c.width%2);0<m.height&&(h=m.height%2===c.height%2)}"map-only"!==b.layout||!b.scalePreserved||b.outScale&&b.outScale!==c.scale||
96!==f||l&&h||(a.area={x:0,y:0,width:c.width,height:c.height},l||--a.area.width,h||--a.area.height,d.ssExtent||(b=c.toMap(z.createScreenPoint(a.area.width,a.area.height)),g.ymin=b.y,g.xmax=b.x,d.ssExtent=g));e.extent=g.clone()._normalize(!0).toJSON();c=yield c.takeScreenshot(a);({data:c}=B.dataComponents(c.dataUrl));e.imageData=c;return e});return Z.apply(this,arguments)}function Oa(a,b,c){return aa.apply(this,arguments)}function aa(){aa=u._asyncToGenerator(function*(a,{layerView:b,printTemplate:c},
d){a.legendEnabled&&d.legendLayers.push({id:a.id});b=yield I(b);return y(a,b,c,d)});return aa.apply(this,arguments)}function Pa(a,b){a.legendEnabled&&b.legendLayers.push({id:a.id});b=a.write();b={layerType:b.layerType,customParameters:b.customParameters};G(b,a);return b}function Qa(a,b,c){return ba.apply(this,arguments)}function ba(){ba=u._asyncToGenerator(function*(a,b,c){if(c.is11xService&&a.serviceUrl&&a.styleUrl){const d=ca(a.styleUrl,a.apiKey),e=ca(a.serviceUrl,a.apiKey);if(!d&&!e||"2.1.0"!==
c.cimVersion)return b={type:"VectorTileLayer"},b.styleUrl=B.normalize(a.styleUrl),b.token=d,e!==d&&(b.additionalTokens=[{url:a.serviceUrl,token:e}]),b}return F(a,b,c)});return ba.apply(this,arguments)}function Ra(a){const b={type:"WebTiledLayer",urlTemplate:a.urlTemplate.replace(/\${/g,"{"),credits:a.copyright};a.subDomains&&0<a.subDomains.length&&(b.subDomains=a.subDomains);return b}function Sa(a){let b;const c=[],d=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(d):e.name&&c.unshift(e.name))};a.sublayers&&
a.sublayers.forEach(d);c.length&&(b={type:"wms",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,transparentBackground:a.imageTransparency,visibleLayers:c,url:B.normalize(a.url),version:a.version});return b}function Ta(a){const b=a.activeLayer;return{type:"wmts",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,format:b.imageFormat,layer:b.id,style:b.styleId,tileMatrixSet:b.tileMatrixSetId,url:B.normalize(a.url)}}function G(a,b){b.url&&
(a.url=B.normalize(a.url||b.url),a.token=ca(a.url,b.apiKey))}function ca(a,b){var c,d;return Ba.supportsApiKey(a)&&(b||ha.apiKey)?b||ha.apiKey:null==(c=ra.id)?void 0:null==(d=c.findCredential(a))?void 0:d.token}function K(a,b){return da.apply(this,arguments)}function da(){da=u._asyncToGenerator(function*(a,b){b.canvas||(b.canvas=document.createElement("canvas"));b.canvas.width=1024;b.canvas.height=1024;b=b.canvas.getContext("2d");var c;if(a.path){var d=new Path2D(a.path);d.closePath();b.fillStyle=
Array.isArray(a.color)?`rgba(${a.color[0]},${a.color[1]},${a.color[2]},${a.color[3]/255})`:"rgb(0,0,0)";b.fill(d);var e=p.getContextBoundingBox(b);if(!e)return null;b.clearRect(0,0,1024,1024);const g=z.pt2px(a.size)/Math.max(e.width,e.height);b.scale(g,g);const f=1024/g;b.translate(f/2-e.width/2-e.x,f/2-e.height/2-e.y);Array.isArray(a.color)&&b.fill(d);null!=(c=a.outline)&&c.width&&Array.isArray(a.outline.color)&&(c=a.outline,b.lineWidth=z.pt2px(c.width)/g,b.lineJoin="round",b.strokeStyle=`rgba(${c.color[0]},${c.color[1]},${c.color[2]},${c.color[3]/
255})`,b.stroke(d),e.width+=b.lineWidth,e.height+=b.lineWidth);e.width*=g;e.height*=g;e=b.getImageData(512-e.width/2,512-e.height/2,Math.ceil(e.width),Math.ceil(e.height));c=e.width;d=e.height;b.canvas.width=c;b.canvas.height=d;b.putImageData(e,0,0)}else e=(yield ia("image/svg+xml"===a.contentType?"data:image/svg+xml;base64,"+a.imageData:a.url,{responseType:"image"})).data,c=z.pt2px(a.width),d=z.pt2px(a.height),b.canvas.width=c,b.canvas.height=d,b.drawImage(e,0,0,b.canvas.width,b.canvas.height);return{type:"esriPMS",
imageData:b.canvas.toDataURL("image/png").substr(22),angle:a.angle,contentType:"image/png",height:z.px2pt(d),width:z.px2pt(c),xoffset:a.xoffset,yoffset:a.yoffset}});return da.apply(this,arguments)}function qa(a,b){return ea.apply(this,arguments)}function ea(){ea=u._asyncToGenerator(function*(a,b){const c=a.type;if("simple"===c&&J(a.symbol))a.symbol=yield K(a.symbol,b);else if("uniqueValue"===c||"classBreaks"===c)if(J(a.defaultSymbol)&&(a.defaultSymbol=yield K(a.defaultSymbol,b)),a=a["uniqueValue"===
c?"uniqueValueInfos":"classBreakInfos"])for(const d of a)J(d.symbol)&&(d.symbol=yield K(d.symbol,b))});return ea.apply(this,arguments)}function I(a){return fa.apply(this,arguments)}function fa(){fa=u._asyncToGenerator(function*(a){return a.queryFeatures(a.createQuery()).then(b=>b.features)});return fa.apply(this,arguments)}function la(a){return a.gpMetadata&&a.gpMetadata.executionType?Ua.fromJSON(a.gpMetadata.executionType):"sync"}function J(a){return a&&(a.path||"image/svg+xml"===a.contentType||
a.url&&a.url.endsWith(".svg"))}const na={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},ma=new ja.JSONMap({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Ua=new ja.JSONMap({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),D=new Map;A.execute=function(a,b,c){return L.apply(this,arguments)};A.getGpPrintParams=ka;A.getGpServerUrl=M;A.getMode=function(a){return N.apply(this,arguments)};A.printCacheMap=D;Object.defineProperty(A,"__esModule",
{value:!0})});