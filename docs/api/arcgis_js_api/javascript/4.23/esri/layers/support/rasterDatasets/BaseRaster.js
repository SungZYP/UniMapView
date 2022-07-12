// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../request ../../../core/Error ../../../core/JSONSupport ../../../core/Logger ../../../core/maybe ../../../core/Promise ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../arcgisLayerUrl ../commonProperties ../RasterStorageInfo ../TileInfo ./RawBlockCache ../rasterFormats/RasterCodec ../rasterFunctions/pixelUtils ../rasterFunctions/rasterProjectionHelper ../rasterFunctions/vectorFieldUtils ../../../geometry/Point ../../../geometry/Extent".split(" "),
function(z,C,A,aa,R,ba,ca,x,da,ea,D,na,oa,pa,fa,ha,ia,ja,S,E,ka,G,v,T,L,M){A=function(U){function N(){var b=U.apply(this,arguments)||this;b.rasterJobHandler=null;b.datasetName=null;b.datasetFormat=null;b.rasterInfo=null;b.ioConfig={sampling:"closest"};return b}z._inheritsLoose(N,U);var q=N.prototype;q.init=function(){var b=z._asyncToGenerator(function*(){const a=v.load();this.addResolvingPromise(a);yield this.when()});return function(){return b.apply(this,arguments)}}();q.normalizeCtorArgs=function(b){b&&
b.ioConfig&&(b={...b,ioConfig:{resolution:null,bandIds:null,sampling:"closest",tileInfo:S.create(),...b.ioConfig}});return b};q.open=function(){var b=z._asyncToGenerator(function*(a){throw new R("BaseRaster:open-not-implemented","open() is not implemented");});return function(a){return b.apply(this,arguments)}}();q.fetchTile=function(){var b=z._asyncToGenerator(function*(a,c,e,f={}){const d=f.tileInfo||this.rasterInfo.storageInfo.tileInfo;a=this.getTileExtentFromTileInfo(a,c,e,d);return this.fetchPixels(a,
d.size[0],d.size[1],f)});return function(a,c,e){return b.apply(this,arguments)}}();q.identify=function(){var b=z._asyncToGenerator(function*(a,c={}){c=this._getRequestOptionsWithSliceId(c);const {spatialReference:e,extent:f}=this.rasterInfo;var {datumTransformation:d}=c;d=v.projectPoint(a,e,d);if(!f.intersects(d)||x.isSome(this.rasterInfo.transform)&&(d=this.rasterInfo.transform.inverseTransform(d),!this.rasterInfo.nativeExtent.intersects(d)))return{location:d,value:null};let g=0;if(c.srcResolution)g=
v.snapPyramid(c.srcResolution,this.rasterInfo,this.ioConfig.sampling).pyramidLevel;else if(g=yield this.computeBestPyramidLevelForLocation(a,c),null==g)return{location:d,value:null};a=this.identifyPixelLocation(d,g,null);if(null===a)return{location:d,value:null};const {row:h,col:m,rowOffset:k,colOffset:l}=a;a=E.getRasterId(this.url,c.sliceId);const n=`${g}/${h}/${m}`;let t=E.getBlock(a,null,n);x.isNone(t)&&(t=this.fetchRawTile(g,h,m,c),E.putBlock(a,null,n,t));c=yield t;if(x.isNone(c)||!c.pixels||
0===c.pixels.length)return{location:d,value:null};const r=k*this.rasterInfo.storageInfo.blockHeight+l;c=!c.mask||c.mask[r]?c.pixels.map(u=>u[r]):null;a=this.rasterInfo.dataType;return("vector-magdir"===a||"vector-uv"===a)&&1<(null==c?void 0:c.length)?(a="vector-magdir"===a?[c[0],c[1]]:T.uvComponentToVector([c[0],c[1]]),{location:d,value:c,magdirValue:a,pyramidLevel:g}):{location:d,value:c,pyramidLevel:g}});return function(a){return b.apply(this,arguments)}}();q.fetchPixels=function(){var b=z._asyncToGenerator(function*(a,
c,e,f={}){a=v.snapExtent(a);f=this._getRequestOptionsWithSliceId(f);if(f.requestRawData)return this._fetchPixels(a,c,e,f);var d=v.getWorldWidth(a.spatialReference),g=v.getWorldWrapCount(a);if(x.isNone(d)||0===g||1===g&&this._isGlobalWrappableSource)return this._fetchPixels(a,c,e,f);if(3<=g)return{extent:a,pixelBlock:null};const h=[],{xmin:m,xmax:k}=a,l=Math.round(d/(k-m)*c),n=l-Math.round((d/2-m)/(k-m)*c);let t=0;const r=[];for(let p=0;p<=g;p++){var u=new M({xmin:0===p?m:-d/2,xmax:p===g?k-d*p:d/2,
ymin:a.ymin,ymax:a.ymax,spatialReference:a.spatialReference});const w=0===p?l-n:p===g?c-t:l;t+=w;r.push(w);u=f.disableWrapAround&&0<p?null:this._fetchPixels(u,w,e,f);h.push(u)}d=(yield Promise.all(h)).map(p=>null==p?void 0:p.pixelBlock);g=null;c={width:c,height:e};g=this.rasterJobHandler?(yield this.rasterJobHandler.mosaicAndTransform({srcPixelBlocks:d,srcMosaicSize:c,destDimension:null,coefs:null,sampleSpacing:null,interpolation:"nearest",alignmentInfo:null,blockWidths:r},f)).pixelBlock:G.mosaic(d,
c,{blockWidths:r});f=v.projectExtent(a,this.rasterInfo.spatialReference,f.datumTransformation);return{extent:a,srcExtent:f,pixelBlock:g}});return function(a,c,e){return b.apply(this,arguments)}}();q.fetchRawPixels=function(){var b=z._asyncToGenerator(function*(a,c,e,f={}){c={x:Math.floor(c.x),y:Math.floor(c.y)};const d=yield this._fetchRawTiles(a,c,e,f),{nativeExtent:g,nativePixelSize:h,storageInfo:m}=this.rasterInfo;var k=2**a,l=h.x*k;k*=h.y;l=new M({xmin:g.xmin+l*c.x,xmax:g.xmin+l*(c.x+e.width-
1),ymin:g.ymax-k*(c.y+e.height-1),ymax:g.ymax-k*c.y,spatialReference:g.spatialReference});if(!d)return{extent:l,srcExtent:l,pixelBlock:null};const {pixelBlocks:n,mosaicSize:t}=d;if(1===n.length&&x.isSome(n[0])&&n[0].width===e.width&&n[0].height===e.height)return{extent:l,srcExtent:l,pixelBlock:d.pixelBlocks[0]};a={x:c.x%(0<a?m.pyramidBlockWidth:m.blockWidth),y:c.y%(0<a?m.pyramidBlockHeight:m.blockHeight)};e=this.rasterJobHandler?(yield this.rasterJobHandler.mosaicAndTransform({srcPixelBlocks:n,srcMosaicSize:t,
destDimension:e,clipOffset:a,clipSize:e,coefs:null,sampleSpacing:null,interpolation:f.interpolation,alignmentInfo:null,blockWidths:null},f)).pixelBlock:G.mosaic(n,t,{clipOffset:a,clipSize:e});return{extent:l,srcExtent:l,pixelBlock:e}});return function(a,c,e){return b.apply(this,arguments)}}();q.fetchRawTile=function(b,a,c,e){throw new R("BaseRaster:read-not-implemented","fetchRawTile() is not implemented");};q.computeExtent=function(b){return v.projectExtent(this.rasterInfo.extent,b)};q.decodePixelBlock=
function(b,a){return!this.rasterJobHandler||a.useCanvas?ka.decode(b,a):this.rasterJobHandler.decode({data:b,options:a})};q.request=function(){var b=z._asyncToGenerator(function*(a,c,e){var f,d;const {customFetchParameters:g}=this.ioConfig,{range:h,query:m,headers:k}=c;e=null!=(f=null!=(d=e)?d:c.retryCount)?f:this.ioConfig.retryCount;f=h?{Range:`bytes=${h.from}-${h.to}`}:null;try{return yield aa(a,{...c,query:{...m,...g},headers:{...k,...f}})}catch(l){if(0<e)return e--,this.request(a,c,e);throw l;
}});return function(a,c,e){return b.apply(this,arguments)}}();q.getSliceIndex=function(b){const {multidimensionalInfo:a}=this.rasterInfo;if(!x.isSome(a)||!x.isSome(b)||0===b.length)return null;let c=0;const e=b[0].variableName;for(let g=0;g<a.variables.length;g++){var f=a.variables[g];const h=f.dimensions;if(f.name!==e){c+=h.map(k=>this._getDimensionValuesCount(k)).reduce((k,l)=>k+l);break}f=h.map(k=>this._getDimensionValuesCount(k));const m=h.length;for(let k=0;k<m;k++){var d=b.find(l=>l.dimensionName===
h[k].name);if(null==d)return null;d=Array.isArray(d.values[0])?d.values[0][0]:d.values[0];d=this._getIndexFromDimensions(d,h[k]);if(-1===d)return null;f.shift();c=k===m-1?c+d:c+d*f.reduce((l,n)=>l+n)}}return c};q.getTileExtentFromTileInfo=function(b,a,c,e){b=e.lodAt(b);return this.getTileExtent({x:b.resolution,y:b.resolution},a,c,e.origin,e.spatialReference,e.size)};q.updateTileInfo=function(){const {storageInfo:b,spatialReference:a,extent:c,pixelSize:e}=this.rasterInfo;if(!b.tileInfo){const d=[];
var f=b.maximumPyramidLevel||0;let g=Math.max(e.x,e.y),h=1/.0254*96*g;for(let m=0;m<=f;m++)d.push({level:f-m,resolution:g,scale:h}),g*=2,h*=2;f=new L({x:c.xmin,y:c.ymax,spatialReference:a});b.tileInfo=new S({origin:f,size:[b.blockWidth,b.blockHeight],spatialReference:a,lods:d});b.isVirtualTileInfo=!0}};q.createRemoteDatasetStorageInfo=function(b,a=512,c=512,e){const {width:f,height:d,nativeExtent:g,pixelSize:h,spatialReference:m}=b,k=new L({x:g.xmin,y:g.ymax,spatialReference:m});null==e&&(e=Math.max(0,
Math.round(Math.log(Math.max(f,d))/Math.LN2-8)));const l=this.computeBlockBoundary(g,512,512,{x:g.xmin,y:g.ymax},[h],e);b.storageInfo=new ja({blockWidth:a,blockHeight:c,pyramidBlockWidth:a,pyramidBlockHeight:c,origin:k,firstPyramidLevel:1,maximumPyramidLevel:e,blockBoundary:l})};q.computeBestPyramidLevelForLocation=function(){var b=z._asyncToGenerator(function*(a,c){return 0});return function(a){return b.apply(this,arguments)}}();q.computeBlockBoundary=function(b,a,c,e,f,d=0,g=2){if(1===f.length&&
0<d){f=[...f];let {x:k,y:l}=f[0];for(let n=0;n<d;n++)k*=g,l*=g,f.push({x:k,y:l})}d=[];const {x:h,y:m}=e;for(e=0;e<f.length;e++){const {x:k,y:l}=f[e];d.push({minCol:Math.floor((b.xmin-h+.1*k)/a/k),maxCol:Math.floor((b.xmax-h-.1*k)/a/k),minRow:Math.floor((m-b.ymax+.1*l)/c/l),maxRow:Math.floor((m-b.ymin-.1*l)/c/l)})}return d};q.getPyramidPixelSize=function(b){const {nativePixelSize:a}=this.rasterInfo,{pyramidResolutions:c,pyramidScalingFactor:e}=this.rasterInfo.storageInfo;if(0===b)return a;if(x.isSome(c)&&
c.length)return c[b-1];b=e**b;return{x:a.x*b,y:a.y*b}};q.identifyPixelLocation=function(b,a,c){const {spatialReference:e,nativeExtent:f}=this.rasterInfo,{blockWidth:d,blockHeight:g,maximumPyramidLevel:h,origin:m}=this.rasterInfo.storageInfo;b=v.projectPoint(b,e,c);if(!f.intersects(b)||0>a||a>h)return null;c=this.getPyramidPixelSize(a);const {x:k,y:l}=c;c=(m.y-b.y)/l/g;const n=(b.x-m.x)/k/d;return{pyramidLevel:a,row:Math.floor(c),col:Math.floor(n),rowOffset:Math.min(g-1,Math.floor((c-Math.floor(c))*
g)),colOffset:Math.min(d-1,Math.floor((n-Math.floor(n))*d)),srcLocation:b}};q.getTileExtent=function(b,a,c,e,f,d){const [g,h]=d;c=e.x+c*g*b.x;a=e.y-a*h*b.y;return new M({xmin:c,xmax:c+g*b.x,ymin:a-h*b.y,ymax:a,spatialReference:f})};q.getBlockWidthHeight=function(b){return{blockWidth:0<b?this.rasterInfo.storageInfo.pyramidBlockWidth:this.rasterInfo.storageInfo.blockWidth,blockHeight:0<b?this.rasterInfo.storageInfo.pyramidBlockHeight:this.rasterInfo.storageInfo.blockHeight}};q.isBlockOutside=function(b,
a,c){b=this.rasterInfo.storageInfo.blockBoundary[b];return!b||b.maxRow<a||b.maxCol<c||b.minRow>a||b.minCol>c};q._fetchPixels=function(){var b=z._asyncToGenerator(function*(a,c,e,f={}){var d=v.getWorldWrapCount(a);if(2<=d)return{extent:a,pixelBlock:null};var g=this._getSourceDataInfo(a,c,e,f);const {pyramidLevel:h,pyramidResolution:m,srcResolution:k,srcExtent:l,srcWidth:n,srcHeight:t}=g;if(0===n||0===t)return{extent:a,srcExtent:l,pixelBlock:null};var r=x.unwrap(this.rasterInfo.transform),u="gcs-shift"===
(null==r?void 0:r.type),p=x.isSome(v.getWorldWidth(a.spatialReference));if(u||!p)d=v.getWorldWrapCount(g.srcExtent,u);var w=this.rasterInfo.storageInfo,y={x:Math.floor((l.xmin-w.origin.x)/m.x+.1),y:Math.floor((w.origin.y-l.ymax)/m.y+.1)};g=yield this._fetchRawTiles(h,y,{width:n,height:t,wrapCount:d},f);if(!g)return{extent:a,srcExtent:l,pixelBlock:null};u=0<h?w.pyramidBlockWidth:w.blockWidth;const F=0<h?w.pyramidBlockHeight:w.blockHeight,B=u===n&&F===t&&0===y.x%u&&0===y.y%F;y=new L({x:(a.xmax-a.xmin)/
c,y:(a.ymax-a.ymin)/e,spatialReference:a.spatialReference});const O=!a.spatialReference.equals(this.rasterInfo.spatialReference);({datumTransformation:w}=f);if(!O&&B&&1===g.pixelBlocks.length&&u===c&&F===e&&k.x===y.x&&k.y===y.y)return{extent:a,srcExtent:l,pixelBlock:g.pixelBlocks[0]};u=p&&x.isSome(v.getWorldWidth(l.spatialReference));(p=f.requestProjectedLocalDirections&&this.rasterInfo.dataType.startsWith("vector"))&&!this.rasterJobHandler&&(yield v.load());d=this.rasterJobHandler?yield this.rasterJobHandler.getProjectionOffsetGrid({projectedExtent:a,
srcBufferExtent:g.extent,pixelSize:y.toJSON(),datumTransformation:w,rasterTransform:r,hasWrapAround:0<d||u,isAdaptive:!1!==this.ioConfig.optimizeProjectionAccuracy,includeGCSGrid:p},f):v.getProjectionOffsetGrid({projectedExtent:a,srcBufferExtent:g.extent,pixelSize:y,datumTransformation:w,rasterTransform:r,hasWrapAround:0<d||u,isAdaptive:!1,includeGCSGrid:p});r=!f.requestRawData;u={rows:d.spacing[0],cols:d.spacing[1]};y=x.unwrap(this._getRasterTileAlignmentInfo(h,g.extent.xmin));const {pixelBlocks:H,
mosaicSize:I,isPartiallyFilled:P}=g;g=null;this.rasterJobHandler?(c=yield this.rasterJobHandler.mosaicAndTransform({srcPixelBlocks:H,srcMosaicSize:I,destDimension:r?{width:c,height:e}:null,coefs:r?d.coefficients:null,sampleSpacing:r?u:null,projectDirections:p,gcsGrid:p?d.gcsGrid:null,isUV:"vector-uv"===this.rasterInfo.dataType,interpolation:f.interpolation,alignmentInfo:y,blockWidths:null},f),{pixelBlock:r,localNorthDirections:g}=c):(y=G.mosaic(H,I,{alignmentInfo:y}),r=r?G.approximateTransform(y,
{width:c,height:e},d.coefficients,u,f.interpolation):y,p&&d.gcsGrid&&(g=G.getLocalArithmeticNorthRotations({width:c,height:e},d.gcsGrid),r=T.convertToLocalDirections(r,this.rasterInfo.dataType,g)));return f.requestRawData||p?{srcExtent:l,pixelBlock:r,transformGrid:d,localNorthDirections:g,extent:a,isPartiallyFilled:P}:{srcExtent:l,extent:a,pixelBlock:r}});return function(a,c,e){return b.apply(this,arguments)}}();q._fetchRawTiles=function(){var b=z._asyncToGenerator(function*(a,c,e,f){const {origin:d,
blockBoundary:g}=this.rasterInfo.storageInfo,{blockWidth:h,blockHeight:m}=this.getBlockWidthHeight(a);let {x:k,y:l}=c,{width:n,height:t,wrapCount:r}=e;var u=this._getRasterTileAlignmentInfo(a,0);f.buffer&&(k-=f.buffer.cols,l-=f.buffer.rows,n+=2*f.buffer.cols,t+=2*f.buffer.rows);var p=0,w=0;let y=0;r&&x.isSome(u)&&({worldColumnCountFromOrigin:w,originColumnOffset:y,rightPadding:p}=u,w*u.blockWidth-p>=k+n&&(p=0));c=Math.floor(k/h);e=Math.floor(l/m);const F=Math.floor((k+n+p-1)/h);p=Math.floor((l+t+
p-1)/m);var B=g[a];if(!B)return null;const {minRow:O,minCol:H,maxCol:I,maxRow:P}=B;if(0===r&&(p<O||F<H||e>P||c>I))return null;B=[];let V=!1;const la=null==this.ioConfig.allowPartialFill?f.allowPartialFill:this.ioConfig.allowPartialFill;for(let J=e;J<=p;J++)for(let K=c;K<=F;K++){let Q=K;!f.disableWrapAround&&r&&x.isSome(u)&&w<=K&&(Q=K-w-y);if(J>=O&&Q>=H&&P>=J&&I>=Q){const W=this._fetchRawTile(a,J,Q,f);la?B.push(new Promise(X=>{W.then(ma=>X(ma)).catch(()=>{V=!0;X(null)})})):B.push(W)}else B.push(null)}if(0===
B.length)return null;f=yield Promise.all(B);u={height:(p-e+1)*m,width:(F-c+1)*h};({spatialReference:w}=this.rasterInfo);a=this.getPyramidPixelSize(a);const {x:Y,y:Z}=a;return{extent:new M({xmin:d.x+c*h*Y,xmax:d.x+(F+1)*h*Y,ymin:d.y-(p+1)*m*Z,ymax:d.y-e*m*Z,spatialReference:w}),pixelBlocks:f,mosaicSize:u,isPartiallyFilled:V}});return function(a,c,e,f){return b.apply(this,arguments)}}();q._fetchRawTile=function(b,a,c,e){var f=this.rasterInfo.storageInfo.blockBoundary[b];if(!f)return Promise.resolve(null);
const {minRow:d,minCol:g,maxCol:h,maxRow:m}=f;if(a<d||c<g||a>m||c>h)return Promise.resolve(null);const k=E.getRasterId(this.url,e.sliceId),l=`${b}/${a}/${c}`;f=E.getBlock(k,e.registryId,l);if(x.isNone(f)){const n=new AbortController;f=this.fetchRawTile(b,a,c,{...e,signal:n.signal});E.putBlock(k,e.registryId,l,f,n);f.catch(()=>E.deleteBlock(k,e.registryId,l))}if(e.signal)ea.onAbort(e,()=>{E.decreaseRefCount(k,e.registryId,l)});return f};q._getIndexFromDimensions=function(b,a){const {extent:c,interval:e,
unit:f,values:d}=a;if(null!=d&&d.length)return Array.isArray(d[0])?d.findIndex(k=>k[0]<=b&&k[1]>=b):d.indexOf(b);if(b>c[1])return-1;const g=c[0];let h=-1;if("ISO8601"===f){var m;switch((null==(m=a.intervalUnit)?void 0:m.toLowerCase())||"seconds"){case "seconds":h=Math.round((b-g)/1E3/e);break;case "minutes":h=Math.round((b-g)/6E4/e);break;case "hours":h=Math.round((b-g)/36E5/e);break;case "days":h=Math.round((b-g)/864E5/e);break;case "years":h=Math.round(((new Date(b)).getUTCFullYear()-(new Date(g)).getUTCFullYear())/
e);break;case "decades":h=Math.round(((new Date(b)).getUTCFullYear()-(new Date(g)).getUTCFullYear())/10/e)}return h}return Math.round((b-g)/e)};q._getDimensionValuesCount=function(b){const {extent:a,interval:c,unit:e,values:f}=b;let d=(null==f?void 0:f.length)||0;if(d)return d;const g=a[0];if(0===d&&"ISO8601"===e){var h;switch((null==(h=b.intervalUnit)?void 0:h.toLowerCase())||"seconds"){case "seconds":d=Math.round((a[1]-a[0])/1E3/c);break;case "minutes":d=Math.round((a[1]-a[0])/6E4/c);break;case "hours":d=
Math.round((a[1]-a[0])/36E5/c);break;case "days":d=Math.round((a[1]-a[0])/864E5/c);break;case "years":d=Math.round(((new Date(a[1])).getUTCFullYear()-(new Date(g)).getUTCFullYear())/c);break;case "decades":d=Math.round(((new Date(a[1])).getUTCFullYear()-(new Date(g)).getUTCFullYear())/10/c)}return d}return Math.round((a[1]-a[0])/c)};q._getRasterTileAlignmentInfo=function(b,a){null==this._rasterTileAlighmentInfo&&(this._rasterTileAlighmentInfo=v.getRasterDatasetAlignmentInfo(this.rasterInfo));return x.isSome(this._rasterTileAlighmentInfo.pyramidsInfo)?
{startX:a,halfWorldWidth:this._rasterTileAlighmentInfo.halfWorldWidth,hasGCSSShiftTransform:this._rasterTileAlighmentInfo.hasGCSSShiftTransform,...this._rasterTileAlighmentInfo.pyramidsInfo[b]}:null};q._getSourceDataInfo=function(b,a,c,e={}){const f={datumTransformation:e.datumTransformation,pyramidLevel:0,pyramidResolution:null,srcExtent:null,srcHeight:0,srcResolution:null,srcWidth:0};e.srcResolution&&(f.srcResolution=e.srcResolution,this._updateSourceDataInfo(b,f));var d=this.rasterInfo.storageInfo.maximumPyramidLevel||
0;const {srcWidth:g,srcHeight:h,pyramidLevel:m}=f;var k=g/a;const l=h/c,n=m<d&&16<=k*l;if(n||m===d&&(8<k||8<l)||0===g||0===h){var t=new L({x:(b.xmax-b.xmin)/a,y:(b.ymax-b.ymin)/c,spatialReference:b.spatialReference});t=v.projectResolution(t,this.rasterInfo.spatialReference,b,f.datumTransformation);const r=!t||e.srcResolution&&t.x+t.y<e.srcResolution.x+e.srcResolution.y;n&&e.srcResolution&&r&&(k=Math.round(Math.log(Math.max(k,l))/Math.LN2)-1,d-m+3>=k&&(d=2**k,t={x:e.srcResolution.x*d,y:e.srcResolution.y*
d}));t&&(f.srcResolution=t,this._updateSourceDataInfo(b,f))}if(8<f.srcWidth/a||8<f.srcHeight/c)f.srcWidth=0,f.srcHeight=0;return f};q._updateSourceDataInfo=function(b,a){a.srcWidth=0;a.srcHeight=0;var c=this.rasterInfo.spatialReference;const {srcResolution:e,datumTransformation:f}=a,{pyramidLevel:d,pyramidResolution:g,excessiveReading:h}=v.snapPyramid(e,this.rasterInfo,this.ioConfig.sampling);h||(b=a.srcExtent||v.projectExtent(b,c,f),null!=b&&((c=x.unwrap(this.rasterInfo.transform))&&(b=c.inverseTransform(b)),
a.srcExtent=b,c=Math.ceil((b.xmax-b.xmin)/g.x-.1),b=Math.ceil((b.ymax-b.ymin)/g.y-.1),a.pyramidLevel=d,a.pyramidResolution=g,a.srcWidth=c,a.srcHeight=b))};q._getRequestOptionsWithSliceId=function(b){x.isSome(this.rasterInfo.multidimensionalInfo)&&null==b.sliceId&&(b={...b,sliceId:this.getSliceIndex(b.multidimensionalDefinition)});return b};z._createClass(N,[{key:"_isGlobalWrappableSource",get:function(){const {rasterInfo:b}=this,a=v.getWorldWidth(b.spatialReference);return x.isSome(a)&&b.extent.width>=
a/2}},{key:"url",set:function(b){this._set("url",ha.sanitizeUrl(b,ca.getLogger(this.declaredClass)))}}]);return N}(da.EsriPromiseMixin(ba.JSONSupport));C.__decorate([D.property()],A.prototype,"_rasterTileAlighmentInfo",void 0);C.__decorate([D.property({readOnly:!0})],A.prototype,"_isGlobalWrappableSource",null);C.__decorate([D.property(ia.url)],A.prototype,"url",null);C.__decorate([D.property({type:String,json:{write:!0}})],A.prototype,"datasetName",void 0);C.__decorate([D.property({type:String,json:{write:!0}})],
A.prototype,"datasetFormat",void 0);C.__decorate([D.property()],A.prototype,"rasterInfo",void 0);C.__decorate([D.property()],A.prototype,"ioConfig",void 0);C.__decorate([D.property()],A.prototype,"sourceJSON",void 0);return A=C.__decorate([fa.subclass("esri.layers.support.rasterDatasets.BaseRaster")],A)});