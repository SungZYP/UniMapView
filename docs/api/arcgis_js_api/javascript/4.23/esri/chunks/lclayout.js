// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function($a){var T={exports:{}};(function(U,V){V=function(){var J="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;"undefined"!==typeof __filename&&(J=J||__filename);return function(z){function L(a){return f.locateFile?f.locateFile(a,A):A+a}function M(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&Fa)return Fa.decode(a.subarray(b,c));for(d="";b<c;){var g=a[b++];if(g&128){var h=a[b++]&63;if(192==(g&224))d+=String.fromCharCode((g&
31)<<6|h);else{var k=a[b++]&63;g=224==(g&240)?(g&15)<<12|h<<6|k:(g&7)<<18|h<<12|k<<6|a[b++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}return d}function Ga(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var h=0;h<a.length;++h){var k=a.charCodeAt(h);if(55296<=k&&57343>=k){var l=a.charCodeAt(++h);k=65536+((k&1023)<<10)|l&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=
k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-g}function Ha(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ab(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&ca[c];)++c;c<<=1;if(32<c-a&&Ia)return Ia.decode(x.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var g=Q[a+2*d>>1];if(0==
g)break;c+=String.fromCharCode(g)}return c}function bb(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var g=0;g<c;++g){var h=a.charCodeAt(g);Q[b>>1]=h;b+=2}Q[b>>1]=0;return b-d}function cb(a){return 2*a.length}function db(a,b){for(var c=0,d="";!(c>=b/4);){var g=q[a+4*c>>2];if(0==g)break;++c;65536<=g?(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023)):d+=String.fromCharCode(g)}return d}function eb(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;
var d=b;c=d+c-4;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var k=a.charCodeAt(++g);h=65536+((h&1023)<<10)|k&1023}q[b>>2]=h;b+=4;if(b+4>c)break}q[b>>2]=0;return b-d}function fb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}function gb(a,b){0<a%b&&(a+=b-a%b);return a}function Ja(a){qa=a;f.HEAP8=D=new Int8Array(a);f.HEAP16=Q=new Int16Array(a);f.HEAP32=q=new Int32Array(a);f.HEAPU8=x=new Uint8Array(a);f.HEAPU16=ca=new Uint16Array(a);
f.HEAPU32=F=new Uint32Array(a);f.HEAPF32=Ka=new Float32Array(a);f.HEAPF64=La=new Float64Array(a)}function N(a){if(f.onAbort)f.onAbort(a);a+="";W(a);Ma=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS\x3d1 for more info.");ra(a);throw a;}function da(a,b){return String.prototype.startsWith?a.startsWith(b):0===a.indexOf(b)}function Na(a){try{if(a==y&&X)return new Uint8Array(X);if(ea)return ea(a);throw"both async and sync fetching of the wasm failed";}catch(b){N(b)}}function hb(){if(!X&&
(fa||O)){if("function"===typeof fetch&&!da(y,"file://"))return fetch(y,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+y+"'";return a.arrayBuffer()}).catch(function(){return Na(y)});if(Oa)return new Promise(function(a,b){Oa(y,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Na(y)})}function ha(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.func;"number"===typeof c?void 0===b.arg?
Y.get(c)():Y.get(c)(b.arg):c(void 0===b.arg?null:b.arg)}}}function ib(a){this.excPtr=a;this.ptr=a-v.SIZE;this.set_type=function(b){q[this.ptr+v.TYPE_OFFSET>>2]=b};this.get_type=function(){return q[this.ptr+v.TYPE_OFFSET>>2]};this.set_destructor=function(b){q[this.ptr+v.DESTRUCTOR_OFFSET>>2]=b};this.get_destructor=function(){return q[this.ptr+v.DESTRUCTOR_OFFSET>>2]};this.set_refcount=function(b){q[this.ptr+v.REFCOUNT_OFFSET>>2]=b};this.set_caught=function(b){D[this.ptr+v.CAUGHT_OFFSET>>0]=b?1:0};
this.get_caught=function(){return 0!=D[this.ptr+v.CAUGHT_OFFSET>>0]};this.set_rethrown=function(b){D[this.ptr+v.RETHROWN_OFFSET>>0]=b?1:0};this.get_rethrown=function(){return 0!=D[this.ptr+v.RETHROWN_OFFSET>>0]};this.init=function(b,c){this.set_type(b);this.set_destructor(c);this.set_refcount(0);this.set_caught(!1);this.set_rethrown(!1)};this.add_ref=function(){q[this.ptr+v.REFCOUNT_OFFSET>>2]+=1};this.release_ref=function(){var b=q[this.ptr+v.REFCOUNT_OFFSET>>2];q[this.ptr+v.REFCOUNT_OFFSET>>2]=
b-1;return 1===b}}function sa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function B(a){for(var b="";x[a];)b+=Pa[x[a++]];return b}function jb(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function kb(a,b){a=jb(a);return function(){return b.apply(this,arguments)}}function ta(a,b){var c=kb(b,function(d){this.name=b;this.message=d;d=Error(d).stack;
void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}function C(a){throw new Qa(a);}function lb(a,b,c){function d(l){l=c(l);if(l.length!==a.length)throw new ua("Mismatched type converter count");for(var p=0;p<a.length;++p)G(a[p],l[p])}a.forEach(function(l){ia[l]=b});var g=Array(b.length),h=[],k=0;
b.forEach(function(l,p){R.hasOwnProperty(l)?g[p]=R[l]:(h.push(l),S.hasOwnProperty(l)||(S[l]=[]),S[l].push(function(){g[p]=R[l];++k;k===h.length&&d(g)}))});0===h.length&&d(g)}function G(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||C('type "'+d+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.ignoreDuplicateRegistrations)return;C("Cannot register type '"+d+"' twice")}R[a]=b;delete ia[a];
S.hasOwnProperty(a)&&(b=S[a],delete S[a],b.forEach(function(g){g()}))}function mb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=va.length?va.pop():E.length;E[b]={refcount:1,value:a};return b}}function wa(a){return this.fromWireType(F[a>>2])}function xa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function nb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ka[c>>
2])};case 3:return function(c){return this.fromWireType(La[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function ob(a,b,c,d,g){var h=b.length;2>h&&C("argTypes array size mismatch! Must at least get return value and 'this' types!");var k=null!==b[1]&&null!==c,l=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].destructorFunction){l=!0;break}var p="void"!==b[0].name,n=h-2,r=Array(n),u=[],w=[];return function(){arguments.length!==n&&C("function "+a+" called with "+arguments.length+
" arguments, expected "+n+" args!");w.length=0;u.length=k?2:1;u[0]=g;if(k){var e=b[1].toWireType(w,this);u[1]=e}for(var m=0;m<n;++m)r[m]=b[m+2].toWireType(w,arguments[m]),u.push(r[m]);var t=d.apply(null,u);if(l)for(;w.length;)e=w.pop(),w.pop()(e);else for(m=k?1:2;m<b.length;m++){var H=1===m?e:r[m-2];null!==b[m].destructorFunction&&b[m].destructorFunction(H)}if(p)return b[0].fromWireType(t)}}function pb(a,b,c){if(void 0===a[b].overloadTable){var d=a[b];a[b]=function(){a[b].overloadTable.hasOwnProperty(arguments.length)||
C("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].overloadTable+")!");return a[b].overloadTable[arguments.length].apply(this,arguments)};a[b].overloadTable=[];a[b].overloadTable[d.argCount]=d}}function qb(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].overloadTable&&void 0!==f[a].overloadTable[c])&&C("Cannot register public name '"+a+"' twice"),pb(f,a,a),f.hasOwnProperty(c)&&C("Cannot register multiple overloads of a function with the same number of arguments ("+
c+")!"),f[a].overloadTable[c]=b):(f[a]=b,void 0!==c&&(f[a].numArguments=c))}function rb(a,b){for(var c=[],d=0;d<a;d++)c.push(q[(b>>2)+d]);return c}function sb(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];-1!=a.indexOf("j")?(d=f["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=Y.get(b).apply(null,c);return d}}function tb(a,b){a=B(a);var c=-1!=a.indexOf("j")?sb(a,b):Y.get(b);"function"!==typeof c&&C("unknown function pointer with signature "+
a+": "+b);return c}function ub(a){a=Ra(a);var b=B(a);I(a);return b}function vb(a,b){function c(h){g[h]||R[h]||(ia[h]?ia[h].forEach(c):(d.push(h),g[h]=!0))}var d=[],g={};b.forEach(c);throw new Sa(a+": "+d.map(ub).join([", "]));}function wb(a,b,c){switch(b){case 0:return c?function(d){return D[d]}:function(d){return x[d]};case 1:return c?function(d){return Q[d>>1]}:function(d){return ca[d>>1]};case 2:return c?function(d){return q[d>>2]}:function(d){return F[d>>2]};default:throw new TypeError("Unknown integer type: "+
a);}}function Z(){if(!Z.strings){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ya||"./this.program"},b;for(b in Ta)a[b]=Ta[b];var c=[];for(b in a)c.push(b+"\x3d"+a[b]);Z.strings=c}return Z.strings}function ja(a){return 0===a%4&&(0!==a%100||0===a%400)}function za(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}function ka(a,b){for(a=new Date(a.getTime());0<
b;){var c=ja(a.getFullYear()),d=a.getMonth();c=(c?la:ma)[d];if(b>c-a.getDate())b-=c-a.getDate()+1,a.setDate(1),11>d?a.setMonth(d+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}function xb(a,b,c,d){function g(e,m,t){for(e="number"===typeof e?e.toString():e||"";e.length<m;)e=t[0]+e;return e}function h(e,m){return g(e,m,"0")}function k(e,m){function t(Ua){return 0>Ua?-1:0<Ua?1:0}var H;0===(H=t(e.getFullYear()-m.getFullYear()))&&0===(H=t(e.getMonth()-
m.getMonth()))&&(H=t(e.getDate()-m.getDate()));return H}function l(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function p(e){e=ka(new Date(e.tm_year+1900,0,1),e.tm_yday);var m=new Date(e.getFullYear(),0,4),t=new Date(e.getFullYear()+
1,0,4);m=l(m);t=l(t);return 0>=k(m,e)?0>=k(t,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var n=q[d+40>>2];d={tm_sec:q[d>>2],tm_min:q[d+4>>2],tm_hour:q[d+8>>2],tm_mday:q[d+12>>2],tm_mon:q[d+16>>2],tm_year:q[d+20>>2],tm_wday:q[d+24>>2],tm_yday:q[d+28>>2],tm_isdst:q[d+32>>2],tm_gmtoff:q[d+36>>2],tm_zone:n?n?M(x,n,void 0):"":""};c=c?M(x,c,void 0):"";n={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S",
"%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in n)c=c.replace(new RegExp(r,"g"),n[r]);var u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),w="January February March April May June July August September October November December".split(" ");n={"%a":function(e){return u[e.tm_wday].substring(0,
3)},"%A":function(e){return u[e.tm_wday]},"%b":function(e){return w[e.tm_mon].substring(0,3)},"%B":function(e){return w[e.tm_mon]},"%C":function(e){return h((e.tm_year+1900)/100|0,2)},"%d":function(e){return h(e.tm_mday,2)},"%e":function(e){return g(e.tm_mday,2," ")},"%g":function(e){return p(e).toString().substring(2)},"%G":function(e){return p(e)},"%H":function(e){return h(e.tm_hour,2)},"%I":function(e){e=e.tm_hour;0==e?e=12:12<e&&(e-=12);return h(e,2)},"%j":function(e){return h(e.tm_mday+za(ja(e.tm_year+
1900)?la:ma,e.tm_mon-1),3)},"%m":function(e){return h(e.tm_mon+1,2)},"%M":function(e){return h(e.tm_min,2)},"%n":function(){return"\n"},"%p":function(e){return 0<=e.tm_hour&&12>e.tm_hour?"AM":"PM"},"%S":function(e){return h(e.tm_sec,2)},"%t":function(){return"\t"},"%u":function(e){return e.tm_wday||7},"%U":function(e){var m=new Date(e.tm_year+1900,0,1),t=0===m.getDay()?m:ka(m,7-m.getDay());e=new Date(e.tm_year+1900,e.tm_mon,e.tm_mday);return 0>k(t,e)?(m=za(ja(e.getFullYear())?la:ma,e.getMonth()-1)-
31,t=31-t.getDate()+m+e.getDate(),h(Math.ceil(t/7),2)):0===k(t,m)?"01":"00"},"%V":function(e){var m=new Date(e.tm_year+1901,0,4),t=l(new Date(e.tm_year+1900,0,4));m=l(m);var H=ka(new Date(e.tm_year+1900,0,1),e.tm_yday);if(0>k(H,t))return"53";if(0>=k(m,H))return"01";e=t.getFullYear()<e.tm_year+1900?e.tm_yday+32-t.getDate():e.tm_yday+1-t.getDate();return h(Math.ceil(e/7),2)},"%w":function(e){return e.tm_wday},"%W":function(e){var m=new Date(e.tm_year,0,1),t=1===m.getDay()?m:ka(m,0===m.getDay()?1:7-
m.getDay()+1);e=new Date(e.tm_year+1900,e.tm_mon,e.tm_mday);return 0>k(t,e)?(m=za(ja(e.getFullYear())?la:ma,e.getMonth()-1)-31,t=31-t.getDate()+m+e.getDate(),h(Math.ceil(t/7),2)):0===k(t,m)?"01":"00"},"%y":function(e){return(e.tm_year+1900).toString().substring(2)},"%Y":function(e){return e.tm_year+1900},"%z":function(e){e=e.tm_gmtoff;var m=0<=e;e=Math.abs(e)/60;return(m?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.tm_zone},"%%":function(){return"%"}};for(r in n)0<=
c.indexOf(r)&&(c=c.replace(new RegExp(r,"g"),n[r](d)));r=yb(c,!1);if(r.length>b)return 0;D.set(r,a);return r.length-1}function yb(a,b,c){c=0<c?c:Ha(a)+1;c=Array(c);a=Ga(a,c,0,c.length);b&&(c.length=a);return c}function Aa(a){function b(){if(!na&&(na=!0,f.calledRun=!0,!Ma)){ha(Va);ha(zb);Wa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)Xa.unshift(f.postRun.shift());ha(Xa)}}if(!(0<P)){if(f.preRun)for("function"==
typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ya.unshift(f.preRun.shift());ha(Ya);0<P||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}z=z||{};var f="undefined"!==typeof z?z:{},Wa,ra;f.ready=new Promise(function(a,b){Wa=a;ra=b});var aa={},K;for(K in f)f.hasOwnProperty(K)&&(aa[K]=f[K]);var ya="./this.program",fa=!1,O=!1,Ba=!1,Za=!1;fa="object"===typeof window;O="function"===typeof importScripts;Ba="object"===typeof process&&
"object"===typeof process.versions&&"string"===typeof process.versions.node;Za=!fa&&!Ba&&!O;var A="",Ca,Da;if(Ba){A=O?require("path").dirname(A)+"/":__dirname+"/";var Ea=function(a,b){Ca||(Ca=require("fs"));Da||(Da=require("path"));a=Da.normalize(a);return Ca.readFileSync(a,b?null:"utf8")};var ea=function(a){a=Ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||N("Assertion failed: undefined");return a};1<process.argv.length&&(ya=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);process.on("uncaughtException",
function(a){throw a;});process.on("unhandledRejection",N);f.inspect=function(){return"[Emscripten Module object]"}}else if(Za)"undefined"!=typeof read&&(Ea=function(a){return read(a)}),ea=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"!==typeof a&&N("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error=
"undefined"!==typeof printErr?printErr:print);else if(fa||O){O?A=self.location.href:"undefined"!==typeof document&&document.currentScript&&(A=document.currentScript.src);J&&(A=J);A=0!==A.indexOf("blob:")?A.substr(0,A.lastIndexOf("/")+1):"";Ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText};O&&(ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var Oa=function(a,b,c){var d=
new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)}}f.print||console.log.bind(console);var W=f.printErr||console.warn.bind(console);for(K in aa)aa.hasOwnProperty(K)&&(f[K]=aa[K]);aa=null;f.thisProgram&&(ya=f.thisProgram);var X;f.wasmBinary&&(X=f.wasmBinary);f.noExitRuntime||!0;"object"!==typeof WebAssembly&&N("no native wasm support detected");var oa,Ma=!1,Fa="undefined"!==typeof TextDecoder?
new TextDecoder("utf8"):void 0,Ia="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0,qa,D,x,Q,ca,q,F,Ka,La;f.INITIAL_MEMORY||8388608;var Y,Ya=[],Va=[],zb=[],Xa=[],P=0,ba=null;f.preloadedImages={};f.preloadedAudios={};var y="lclayout.wasm";da(y,"data:application/octet-stream;base64,")||(y=L(y));var v={DESTRUCTOR_OFFSET:0,REFCOUNT_OFFSET:4,TYPE_OFFSET:8,CAUGHT_OFFSET:12,RETHROWN_OFFSET:13,SIZE:16},Pa=void 0,S={},R={},ia={},Qa=void 0,ua=void 0,va=[],E=[{},{value:void 0},{value:null},
{value:!0},{value:!1}],Sa=void 0,Ta={},la=[31,29,31,30,31,30,31,31,30,31,30,31],ma=[31,28,31,30,31,30,31,31,30,31,30,31];(function(){for(var a=Array(256),b=0;256>b;++b)a[b]=String.fromCharCode(b);Pa=a})();Qa=f.BindingError=ta(Error,"BindingError");ua=f.InternalError=ta(Error,"InternalError");f.count_emval_handles=function(){for(var a=0,b=5;b<E.length;++b)void 0!==E[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<E.length;++a)if(void 0!==E[a])return E[a];return null};Sa=f.UnboundTypeError=
ta(Error,"UnboundTypeError");var Ab={a:function(a){return pa(a+v.SIZE)+v.SIZE},b:function(a,b,c){(new ib(a)).init(b,c);throw a;},k:function(a,b,c,d,g){var h=sa(c);b=B(b);G(a,{name:b,fromWireType:function(k){return!!k},toWireType:function(k,l){return l?d:g},argPackAdvance:8,readValueFromPointer:function(k){if(1===c)var l=D;else if(2===c)l=Q;else if(4===c)l=q;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(l[k>>h])},destructorFunction:null})},j:function(a,b){b=B(b);
G(a,{name:b,fromWireType:function(c){var d=E[c].value;4<c&&0===--E[c].refcount&&(E[c]=void 0,va.push(c));return d},toWireType:function(c,d){return mb(d)},argPackAdvance:8,readValueFromPointer:wa,destructorFunction:null})},g:function(a,b,c){c=sa(c);b=B(b);G(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,g){if("number"!==typeof g&&"boolean"!==typeof g)throw new TypeError('Cannot convert "'+xa(g)+'" to '+this.name);return g},argPackAdvance:8,readValueFromPointer:nb(b,c),destructorFunction:null})},
e:function(a,b,c,d,g,h){var k=rb(b,c);a=B(a);g=tb(d,g);qb(a,function(){vb("Cannot call "+a+" due to unbound types",k)},b-1);lb([],k,function(l){var p=[l[0],null].concat(l.slice(1));l=a;p=ob(a,p,null,g,h);var n=b-1;if(!f.hasOwnProperty(l))throw new ua("Replacing nonexistant public symbol");void 0!==f[l].overloadTable&&void 0!==n?f[l].overloadTable[n]=p:(f[l]=p,f[l].argCount=n);return[]})},d:function(a,b,c,d,g){b=B(b);-1===g&&(g=4294967295);var h=sa(c),k=function(n){return n};if(0===d){var l=32-8*c;
k=function(n){return n<<l>>>l}}var p=-1!=b.indexOf("unsigned");G(a,{name:b,fromWireType:k,toWireType:function(n,r){if("number"!==typeof r&&"boolean"!==typeof r)throw new TypeError('Cannot convert "'+xa(r)+'" to '+this.name);if(r<d||r>g)throw new TypeError('Passing a number "'+xa(r)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+g+"]!");return p?r>>>0:r|0},argPackAdvance:8,readValueFromPointer:wb(b,h,0!==d),destructorFunction:null})},c:function(a,
b,c){function d(h){h>>=2;var k=F;return new g(qa,k[h+1],k[h])}var g=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=B(c);G(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ignoreDuplicateRegistrations:!0})},h:function(a,b){b=B(b);var c="std::string"===b;G(a,{name:b,fromWireType:function(d){var g=F[d>>2];if(c)for(var h=d+4,k=0;k<=g;++k){var l=d+4+k;if(k==g||0==x[l]){var p=l-h;h=h?M(x,h,p):"";if(void 0===n)var n=h;else n+=String.fromCharCode(0),
n+=h;h=l+1}}else{n=Array(g);for(k=0;k<g;++k)n[k]=String.fromCharCode(x[d+4+k]);n=n.join("")}I(d);return n},toWireType:function(d,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var h="string"===typeof g;h||g instanceof Uint8Array||g instanceof Uint8ClampedArray||g instanceof Int8Array||C("Cannot pass non-string to std::string");var k=(c&&h?function(){return Ha(g)}:function(){return g.length})(),l=pa(4+k+1);F[l>>2]=k;if(c&&h)Ga(g,x,l+4,k+1);else if(h)for(h=0;h<k;++h){var p=g.charCodeAt(h);255<p&&
(I(l),C("String has UTF-16 code units that do not fit in 8 bits"));x[l+4+h]=p}else for(h=0;h<k;++h)x[l+4+h]=g[h];null!==d&&d.push(I,l);return l},argPackAdvance:8,readValueFromPointer:wa,destructorFunction:function(d){I(d)}})},f:function(a,b,c){c=B(c);if(2===b){var d=ab;var g=bb;var h=cb;var k=function(){return ca};var l=1}else 4===b&&(d=db,g=eb,h=fb,k=function(){return F},l=2);G(a,{name:c,fromWireType:function(p){for(var n=F[p>>2],r=k(),u,w=p+4,e=0;e<=n;++e){var m=p+4+e*b;if(e==n||0==r[m>>l])w=d(w,
m-w),void 0===u?u=w:(u+=String.fromCharCode(0),u+=w),w=m+b}I(p);return u},toWireType:function(p,n){"string"!==typeof n&&C("Cannot pass non-string to C++ string type "+c);var r=h(n),u=pa(4+r+b);F[u>>2]=r>>l;g(n,u+4,r+b);null!==p&&p.push(I,u);return u},argPackAdvance:8,readValueFromPointer:wa,destructorFunction:function(p){I(p)}})},l:function(a,b){b=B(b);G(a,{isVoid:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(c,d){}})},i:function(){N()},m:function(a,b,c){x.copyWithin(a,
b,b+c)},n:function(a){var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.min(2147483648,gb(Math.max(a,d),65536));a:{try{oa.grow(d-qa.byteLength+65535>>>16);Ja(oa.buffer);var g=1;break a}catch(h){}g=void 0}if(g)return!0}return!1},p:function(a,b){var c=0;Z().forEach(function(d,g){var h=b+c;g=q[a+4*g>>2]=h;for(h=0;h<d.length;++h)D[g++>>0]=d.charCodeAt(h);D[g>>0]=0;c+=d.length+1});return 0},q:function(a,b){var c=Z();q[a>>2]=c.length;
var d=0;c.forEach(function(g){d+=g.length+1});q[b>>2]=d;return 0},o:function(a,b,c,d){return xb(a,b,c,d)}};(function(){function a(g,h){f.asm=g.exports;oa=f.asm.r;Ja(oa.buffer);Y=f.asm.t;Va.unshift(f.asm.s);P--;f.monitorRunDependencies&&f.monitorRunDependencies(P);0==P&&ba&&(g=ba,ba=null,g())}function b(g){a(g.instance)}function c(g){return hb().then(function(h){return WebAssembly.instantiate(h,d)}).then(g,function(h){W("failed to asynchronously prepare wasm: "+h);N(h)})}var d={a:Ab};P++;f.monitorRunDependencies&&
f.monitorRunDependencies(P);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(g){return W("Module.instantiateWasm callback failed with error: "+g),!1}(function(){return X||"function"!==typeof WebAssembly.instantiateStreaming||da(y,"data:application/octet-stream;base64,")||da(y,"file://")||"function"!==typeof fetch?c(b):fetch(y,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,d).then(b,function(h){W("wasm streaming compile failed: "+h);W("falling back to ArrayBuffer instantiation");
return c(b)})})})().catch(ra);return{}})();f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.s).apply(null,arguments)};var Ra=f.___getTypeName=function(){return(Ra=f.___getTypeName=f.asm.u).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.v).apply(null,arguments)};var pa=f._malloc=function(){return(pa=f._malloc=f.asm.w).apply(null,arguments)},I=f._free=function(){return(I=f._free=f.asm.x).apply(null,
arguments)};f.dynCall_viijii=function(){return(f.dynCall_viijii=f.asm.y).apply(null,arguments)};f.dynCall_iiiiij=function(){return(f.dynCall_iiiiij=f.asm.z).apply(null,arguments)};f.dynCall_iiiiijj=function(){return(f.dynCall_iiiiijj=f.asm.A).apply(null,arguments)};f.dynCall_iiiiiijj=function(){return(f.dynCall_iiiiiijj=f.asm.B).apply(null,arguments)};var na;ba=function b(){na||Aa();na||(ba=b)};f.run=Aa;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
Aa();return z.ready}}();U.exports=V})(T);T=Object.freeze(function(U,V){for(var J=0;J<V.length;J++){const z=V[J];if("string"!==typeof z&&!Array.isArray(z))for(const L in z)if("default"!==L&&!(L in U)){const M=Object.getOwnPropertyDescriptor(z,L);M&&Object.defineProperty(U,L,M.get?M:{enumerable:!0,get:()=>z[L]})}}return Object.freeze(U)}({__proto__:null,default:T.exports},[T.exports]));$a.lclayout=T});