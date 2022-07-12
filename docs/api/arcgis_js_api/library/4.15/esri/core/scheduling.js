// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ./nextTick ./now ./PooledArray ./promiseUtils ./requestAnimationFrame".split(" "),function(B,b,n,k,p,e,x){function y(a){void 0===a&&(a=k());b.debug.rafId=null;0<c.length&&(b.debug.rafId=d());b.debug.executeFrameTasks(a)}function d(){return b.debug.requestNextFrame?b.debug.requestNextFrame(q):q()}function r(){c.forEach(function(a){a.removed&&f.push(a)});c.removeUnorderedMany(f.data,f.length);f.clear()}function t(){for(;l.length;){var a=l.shift();a.isActive&&(a.isActive=!1,a.callback())}b.debug.willDispatch=
!1}function q(){return x(y)}Object.defineProperty(b,"__esModule",{value:!0});b.now=k;var z=function(){return function(a){this.phases=a;this.paused=!1;this.ticks=-1;this.removed=!1}}(),A=function(){function a(a){this.callback=a;this.isActive=!0}a.prototype.remove=function(){this.isActive=!1};return a}(),g=-1,m=0,h={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},u=["prepare","preRender","render","postRender","update"],l=[],c=new p,v=function(){function a(a){this._task=a}a.prototype.remove=function(){this._task.removed=
!0};a.prototype.pause=function(){this._task.paused=!0};a.prototype.resume=function(){this._task.paused=!1};return a}();b.FrameTaskHandle=v;b.debug={frameTasks:c,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:function(a){void 0===a&&(a=!1);c.forEach(function(a){a.removed=!0});a&&r()},dispatch:t,executeFrameTasks:function(a){void 0===a&&(a=k());0>g&&(g=a);var b=a-g,w=0<m?m:1E3/60,f=Math.max(0,b-w);g=a;for(var e=function(d){var e=u[d];c.forEach(function(c){c.paused||c.removed||(0===
d&&c.ticks++,c.phases[e]&&(h.time=a,h.deltaTime=0===c.ticks?0:b,h.elapsedFrameTime=k()-a,h.frameDuration=w-f,c.phases[e].call(c,h)))})},d=0;d<u.length;d++)e(d);r()}};b.schedule=function(a){a=new A(a);l.push(a);b.debug.willDispatch||(b.debug.willDispatch=!0,n(t));return a};b.addFrameTask=function(a){a=new z(a);c.push(a);b.debug.rafId||(g=-1,b.debug.rafId=d());return new v(a)};b.setFrameDuration=function(a){m=Math.max(0,a)};b.requestNextFrame=d;var f=new p;b.waitTicks=function(a,b){void 0===a&&(a=1);
var c=e.createResolver(),d=function(){e.isAborted(b)?c.reject(e.createAbortError()):0===a?c():(--a,n(function(){return d()}))};d();return c.promise}});