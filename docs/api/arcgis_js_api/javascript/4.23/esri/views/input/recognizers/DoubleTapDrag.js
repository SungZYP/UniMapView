// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/clock ../../../core/MapUtils ../../../core/screenUtils ../DragEventSeparator ../InputHandler ./SingleAndDoubleClick ./support".split(" "),function(q,r,u,v,l,w,p,m,x){p=function(t){function n(a=m.DefaultParameters.maximumDoubleClickDelay,c=m.DefaultParameters.maximumDoubleClickDistance,e=m.DefaultParameters.maximumDoubleTouchDelay,b=m.DefaultParameters.maximumDoubleTouchDistance,h=u.clock){var d=t.call(this,!1)||this;d.maximumDoubleClickDelay=
a;d.maximumDoubleClickDistance=c;d.maximumDoubleTouchDelay=e;d.maximumDoubleTouchDistance=b;d._clock=h;d._doubleTapDragReady=!1;d._doubleTapDragActive=!1;d._dragStartCenter=l.createScreenPoint(0,0);d._pointerState=new Map;d._doubleTapDrag=d.registerOutgoing("double-tap-drag");d._dragEventSeparator=new w.DragEventSeparator({start:(g,k)=>d._dragStart(g,k),update:(g,k)=>d._dragUpdate(k),end:(g,k)=>d._dragEnd(k)});d.registerIncoming("drag",g=>d._dragEventSeparator.handle(g));d.registerIncoming("pointer-down",
g=>d._handlePointerDown(g));d.registerIncoming("pointer-up",()=>d._handlePointerUp());return d}r._inheritsLoose(n,t);var f=n.prototype;f.onUninstall=function(){this._pointerState.forEach(a=>{null!=a.doubleTapTimeout&&(a.doubleTapTimeout.remove(),a.doubleTapTimeout=null)})};f._clearPointerDown=function(a){const c=this._pointerState.get(a);c&&(c.doubleTapTimeout.remove(),c.doubleTapTimeout=null,this._pointerState.delete(a),this.refreshHasPendingInputs())};f._createDoubleTapDragData=function(a,c,e){const {button:b,
buttons:h,pointer:d,pointers:g,pointerType:k,timestamp:y}=e;return{action:a,delta:c,button:b,buttons:h,pointer:d,pointers:g,pointerType:k,timestamp:y}};f._dragStart=function(a,c){if(this._doubleTapDragReady&&1===a){this._doubleTapDragReady=!1;this._doubleTapDragActive=!0;var {data:e,modifiers:b}=c;({center:a}=e);this._dragStartCenter=a;a=this._createDoubleTapDragData("begin",l.createScreenPoint(0,0),e);this._doubleTapDrag.emit(a,void 0,b);c.stopPropagation()}};f._dragUpdate=function(a){if(this._doubleTapDragActive){var {data:c,
modifiers:e}=a,{center:b}=c;b=l.createScreenPoint(b.x-this._dragStartCenter.x,b.y-this._dragStartCenter.y);b=this._createDoubleTapDragData("update",b,c);this._doubleTapDrag.emit(b,void 0,e);a.stopPropagation()}};f._dragEnd=function(a){if(this._doubleTapDragActive){var {data:c,modifiers:e}=a,{center:b}=c;b=l.createScreenPoint(b.x-this._dragStartCenter.x,b.y-this._dragStartCenter.y);b=this._createDoubleTapDragData("end",b,c);this._doubleTapDrag.emit(b,void 0,e);this._doubleTapDragActive=!1;a.stopPropagation()}};
f._handlePointerDown=function(a){const {data:c}=a,e=this._pointerId(c),b=this._pointerState.get(e);var {pointerType:h}=c.native;b?(h="touch"===h?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance,this._clearPointerDown(e),x.manhattanDistance(b.event.data,c)>h?this._storePointerDown(a):this._doubleTapDragReady=!0):this._storePointerDown(a)};f._handlePointerUp=function(){this._doubleTapDragReady=!1};f._pointerId=function(a){({native:a}=a);const {pointerId:c,button:e,pointerType:b}=a;return"mouse"===
b?`${c}:${e}`:`${b}`};f._storePointerDown=function(a){var {data:c}=a;const {pointerType:e}=c.native,b=this._pointerId(c);c=this._clock.setTimeout(()=>this._clearPointerDown(b),"touch"===e?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay);this._pointerState.set(b,{event:a,doubleTapTimeout:c});this.refreshHasPendingInputs()};r._createClass(n,[{key:"hasPendingInputs",get:function(){return v.someMap(this._pointerState,a=>null!=a.doubleTapTimeout)}}]);return n}(p.InputHandler);q.DoubleTapDrag=
p;Object.defineProperty(q,"__esModule",{value:!0})});