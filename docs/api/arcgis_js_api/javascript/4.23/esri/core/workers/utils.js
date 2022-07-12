// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../has"],function(c,h){function f(a){return a&&"object"===typeof a&&("result"in a||"transferList"in a)}function g(a){if(!a||!a.length)return null;if(h("esri-workers-arraybuffer-transfer"))return a;a=a.filter(b=>!(b instanceof ArrayBuffer||b&&b.constructor&&"ArrayBuffer"===b.constructor.name));return a.length?a:null}c.MessageType=void 0;(function(a){a[a.HANDSHAKE=0]="HANDSHAKE";a[a.OPEN=1]="OPEN";a[a.OPENED=2]="OPENED";a[a.RESPONSE=3]="RESPONSE";a[a.INVOKE=4]="INVOKE";a[a.ABORT=
5]="ABORT";a[a.CLOSE=6]="CLOSE";a[a.OPEN_PORT=7]="OPEN_PORT";a[a.ON=8]="ON"})(c.MessageType||(c.MessageType={}));let k=0;c.isTranferableResult=f;c.newJobId=function(){return k++};c.postMessage=function(a,b,e,d){b.type===c.MessageType.OPEN_PORT?a.postMessage(b,[b.port]):b.type!==c.MessageType.INVOKE&&b.type!==c.MessageType.RESPONSE?a.postMessage(b):(f(e)?(d=g(e.transferList),b.data=e.result):(d=g(d),b.data=e),d?a.postMessage(b,d):a.postMessage(b))};c.receiveMessage=function(a){return a?(a=a.data)?
"string"===typeof a?JSON.parse(a):a:null:null};c.toInvokeError=function(a){return a?"string"===typeof a?JSON.stringify({name:"message",message:a}):a.toJSON?JSON.stringify(a):JSON.stringify({name:a.name,message:a.message,details:a.details||{stack:a.stack}}):null};Object.defineProperty(c,"__esModule",{value:!0})});