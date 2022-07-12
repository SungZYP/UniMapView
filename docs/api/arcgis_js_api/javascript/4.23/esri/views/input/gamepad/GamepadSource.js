// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/scheduling","./GamepadInputDevice","./GamepadState"],function(l,n,p,q,g){let r=function(){function k(a,c){this.element=a;this.input=c;this._hasEventListeners=!1;this._onConnectGamepad=b=>{this._connectGamepad(b.gamepad)};this._onDisconnectGamepad=b=>{b=b.gamepad;const d=b.index,e=this.inputDevices[d];e&&(this._emitGamepadEvent(b,g.extractState(e),!1),this.inputDevices.splice(d,1),this.latestUpdate.splice(d,1),this.input.gamepad.devices.remove(e),
this.ensurePollingState())};this.frameTask=null;this.latestUpdate=[];this.inputDevices=[];this.callback=null;a=window.isSecureContext;if(this.supported="getGamepads"in window.navigator&&a)this._forEachGamepad(b=>this._connectGamepad(b)),window.addEventListener("gamepadconnected",this._onConnectGamepad),window.addEventListener("gamepaddisconnected",this._onDisconnectGamepad),this.ensurePollingState()}var f=k.prototype;f.destroy=function(){this.hasEventListeners=!1;this.supported&&(window.removeEventListener("gamepadconnected",
this._onConnectGamepad),window.removeEventListener("gamepaddisconnected",this._onDisconnectGamepad))};f._connectGamepad=function(a){const c=new q(a);"unknown"!==c.deviceType&&(this.inputDevices[a.index]=c,this.input.gamepad.devices.add(c));this.ensurePollingState()};f.ensurePollingState=function(){this.eventsEnabled?this._startPolling():this._stopPolling()};f._startPolling=function(){null==this.frameTask&&(this.frameTask=p.addFrameTask({update:()=>this._readGamepadState()}))};f._stopPolling=function(){null!=
this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=[])};f._readGamepadState=function(){const a=document.hasFocus(),c=this.element.contains(document.activeElement),b="document"===this.input.gamepad.enabledFocusMode&&!a||"view"===this.input.gamepad.enabledFocusMode&&!c;this._forEachGamepad(d=>{var e=this.inputDevices[d.index];if(e){var h=this.latestUpdate[d.index];e=g.extractState(e);var m=b||g.stateIdle(e);h&&(h.timestamp===d.timestamp||!h.active&&m||g.stateEqual(h.state,
e))||this._emitGamepadEvent(d,e,!m)}})};f._forEachGamepad=function(a){const c=window.navigator.getGamepads();for(let b=0;b<c.length;b++){const d=c[b];this._validate(d)&&a(d)}};f._emitGamepadEvent=function(a,c,b){var d=this.latestUpdate[a.index];if((d=d&&d.active)||b)this.latestUpdate[a.index]={timestamp:a.timestamp,state:c,active:b},this.callback&&this.callback({device:this.inputDevices[a.index],state:c,action:!d&&b?"start":d&&b?"update":"end"})};f._validate=function(a){if(!a||!a.connected)return!1;
for(let c=0;c<a.axes.length;c++)if(isNaN(a.axes[c]))return!1;return!0};n._createClass(k,[{key:"hasEventListeners",set:function(a){this._hasEventListeners!==a&&(this._hasEventListeners=a,this.ensurePollingState())}},{key:"eventsEnabled",get:function(){return this.supported&&0<this.inputDevices.length&&this._hasEventListeners}},{key:"onEvent",set:function(a){this.callback=a}}]);return k}();l.GamepadSource=r;Object.defineProperty(l,"__esModule",{value:!0})});