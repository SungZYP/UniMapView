// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(function(){function a(b){return"function"===typeof d[b]?d[b]=d[b](globalThis):d[b]}var g,h;let d;if(null!=(g=globalThis.dojoConfig)&&g.has||null!=(h=globalThis.esriConfig)&&h.has){var k,l;d={...null==(k=globalThis.dojoConfig)?void 0:k.has,...null==(l=globalThis.esriConfig)?void 0:l.has}}else d={};a.add=(b,c,e,f)=>{if(f||"undefined"===typeof d[b])d[b]=c;return e&&a(b)};a.cache=d;a.add("esri-deprecation-warnings",!0);(()=>{a.add("host-webworker","undefined"!==typeof globalThis.WorkerGlobalScope&&
self instanceof globalThis.WorkerGlobalScope);var b="undefined"!==typeof window&&"undefined"!==typeof location&&"undefined"!==typeof document&&window.location===location&&window.document===document;a.add("host-browser",b);a.add("dom",b);if(a("host-browser")){var c=navigator;b=c.userAgent;c=c.appVersion;const f=parseFloat(c);a.add("edge",parseFloat(b.split("Edge/")[1])||void 0);a.add("webkit",!a("edge")&&parseFloat(b.split("WebKit/")[1])||void 0);a.add("chrome",!a("edge")&&parseFloat(b.split("Chrome/")[1])||
void 0);a.add("safari",!c.includes("Safari")||a("chrome")||a("edge")?void 0:parseFloat(c.split("Version/")[1]));a.add("mac",c.includes("Macintosh"));if(b.match(/(iPhone|iPod|iPad)/)){const m=RegExp.$1.replace(/P/,"p");var e=b.match(/OS ([\d_]+)/)?RegExp.$1:"1";e=parseFloat(e.replace(/_/,".").replace(/_/g,""));a.add(m,e);a.add("ios",e)}a.add("trident",parseFloat(c.split("Trident/")[1])||void 0);a("webkit")||(!b.includes("Gecko")||a("trident")||a("edge")||a.add("mozilla",f),a("mozilla")&&a.add("ff",
parseFloat(b.split("Firefox/")[1]||b.split("Minefield/")[1])||void 0))}})();(()=>{if(globalThis.navigator){var b=navigator.userAgent;const c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(b);b=/iPhone/i.test(b);c&&a.add("esri-mobile",c);b&&a.add("esri-iPhone",b);a.add("esri-geolocation",!!navigator.geolocation)}a.add("esri-canvas-svg-support",!a("trident"));a.add("esri-wasm","WebAssembly"in globalThis);a.add("esri-shared-array-buffer",()=>{const c=!1===globalThis.crossOriginIsolated;
return"SharedArrayBuffer"in globalThis&&!c});a.add("esri-atomics","Atomics"in globalThis);a.add("esri-workers","Worker"in globalThis);a.add("web-feat:cache","caches"in globalThis);a.add("esri-workers-arraybuffer-transfer",!a("safari")||12<=Number(a("safari")));a.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]);a.add("featurelayer-simplify-payload-size-factors",[1,1,4]);a.add("featurelayer-snapshot-enabled",!0);a.add("featurelayer-snapshot-point-min-threshold",8E4);a.add("featurelayer-snapshot-point-max-threshold",
4E5);a.add("featurelayer-snapshot-point-coverage",.1);a.add("featurelayer-advanced-symbols",!1);a.add("featurelayer-pbf",!0);a.add("featurelayer-pbf-statistics",!1);a.add("feature-layers-workers",!0);a.add("feature-polyline-generalization-factor",1);a.add("mapview-transitions-duration",200);a.add("mapview-srswitch-adjust-rotation-scale-threshold",24E6);a.add("mapserver-pbf-enabled",!1);!a("host-webworker")&&a("host-browser")&&(a.add("esri-csp-restrictions",()=>{try{new Function}catch{return!0}return!1}),
a.add("esri-image-decode",()=>{if("decode"in new Image){const c=new Image;c.src='data:image/svg+xml;charset\x3dUTF-8,\x3csvg version\x3d"1.1" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3c/svg\x3e';c.decode().then(()=>{a.add("esri-image-decode",!0,!0,!0)}).catch(()=>{a.add("esri-image-decode",!1,!0,!0)})}else return!1}),a.add("esri-url-encodes-apostrophe",()=>{const c=window.document.createElement("a");c.href="?'";return c.href.includes("?%27")}))})();return a});