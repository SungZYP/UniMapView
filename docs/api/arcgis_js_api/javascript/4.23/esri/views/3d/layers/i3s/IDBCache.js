// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/byteSizeEstimations ../../../../core/Error ../../../../core/maybe ../../../../core/promiseUtils".split(" "),function(m,n,t,u,p,q){function l(e){return new Promise((g,b)=>{e.oncomplete=()=>g();e.onerror=()=>b(e.error);e.onabort=()=>b(e.error)})}function h(e){return new Promise((g,b)=>{"done"===e.readyState?null!=e.error?b(e.error):g(e.result):(e.onsuccess=()=>g(e.result),e.onerror=()=>b(e.error))})}let v=function(){function e(b,
d,a=14){this._version=a;this._quotaReductionPromise=this._db=null;this._miss=this._hit=this._gcCounter=0;this._destroyed=!1;this.gcFrequency=50;this.maxByteSize=t.ByteSizeUnit.GIGABYTES;this.quotaReductionFactor=.2;this._dbName=b;this._storeName=d}var g=e.prototype;g.init=function(){return Promise.resolve().then(()=>{const b=indexedDB.open(this._dbName,this._version);b.onupgradeneeded=d=>{var a=b.result;const c=b.transaction,f=a.objectStoreNames.contains(this._storeName)?c.objectStore(this._storeName):
a.createObjectStore(this._storeName);a=a.objectStoreNames.contains("last_access")?c.objectStore("last_access"):a.createObjectStore("last_access");a.indexNames.contains("date")||a.createIndex("date","date",{unique:!1});a.indexNames.contains("byteSize")||a.createIndex("byteSize","byteSize",{unique:!1});d.oldVersion<this._version&&(f.clear(),a.clear())};return h(b)}).then(b=>{this._destroyed?b.close():this._db=b})};g.destroy=function(){this._db&&(this._db.close(),this._db=null);this._destroyed=!0};g.getHitRate=
function(){return this._hit/(this._hit+this._miss)};g.put=function(b,d){return null==this._db?Promise.reject(new u("indexedb:not-initialized","IndexedDB Cache is not initialized")):(null!=this._quotaReductionPromise?this._quotaReductionPromise:Promise.resolve()).then(()=>this._put(b,d)).catch(a=>{if(a&&"QuotaExceededError"===a.name)return null==this._quotaReductionPromise&&(this._quotaReductionPromise=this._getCacheSize().then(c=>this._removeLeastRecentlyAccessed(d.byteSize+Math.ceil(c*this.quotaReductionFactor))),
this._quotaReductionPromise.then(()=>this._quotaReductionPromise=null,()=>this._quotaReductionPromise=null)),this._quotaReductionPromise.then(()=>this._put(b,d));throw a;}).then(()=>{this._gcCounter--;0>this._gcCounter&&null!=this._db&&(this._gcCounter=this.gcFrequency,this._getCacheSize().then(a=>this._removeLeastRecentlyAccessed(a-this.maxByteSize)))})};g.get=function(b,d){if(null==this._db)return Promise.resolve(null);let a=null;return Promise.resolve().then(()=>{const c=this._db.transaction(this._storeName,
"readonly");a=q.onAbort(d,()=>{c.abort()});const f=c.objectStore(this._storeName).get(b);return h(f)}).then(c=>{null==c?++this._miss:this._db&&(++this._hit,this._db.transaction("last_access","readwrite").objectStore("last_access").put({date:Date.now(),byteSize:c.byteSize},b));p.isSome(a)&&a.remove();return c}).catch(()=>{++this._miss;q.throwIfAborted(d);p.isSome(a)&&a.remove();return null})};g.remove=function(b){var d=this;return null==this._db?Promise.resolve():Promise.resolve().then(n._asyncToGenerator(function*(){const a=
d._db.transaction([d._storeName,"last_access"],"readwrite");var c=a.objectStore(d._storeName),f=a.objectStore("last_access");c=c.delete(b);f=f.delete(b);yield Promise.all([h(c),h(f),l(a)])}))};g._put=function(b,d){const a=this._db.transaction([this._storeName,"last_access"],"readwrite");var c=a.objectStore(this._storeName);const f=a.objectStore("last_access");c=c.put(d,b);b=f.put({date:Date.now(),byteSize:d.byteSize},b);return Promise.all([h(c),h(b),l(a)])};g._removeLeastRecentlyAccessed=function(b){if(!(0>=
b)){var d=this._db.transaction([this._storeName,"last_access"],"readwrite"),a=d.objectStore(this._storeName),c=d.objectStore("last_access"),f=0,r=c.index("date").openCursor(null,"next");r.onsuccess=()=>{const k=r.result;null!=k&&(null!=k.value.byteSize&&(f+=k.value.byteSize),a.delete(k.primaryKey),c.delete(k.primaryKey),f<b&&k.continue())};return l(d)}};g._getCacheSize=function(){const b=this._db.transaction("last_access");let d=0;const a=b.objectStore("last_access").index("byteSize").openKeyCursor();
a.onsuccess=()=>{const c=a.result;if(c){var f=c.key;null!=f&&(d+=f);c.continue()}};return l(b).then(()=>d)};n._createClass(e,[{key:"initialized",get:function(){return null!=this._db}}]);return e}();m.IDBCache=v;m.whenRequest=h;m.whenTransaction=l;Object.defineProperty(m,"__esModule",{value:!0})});