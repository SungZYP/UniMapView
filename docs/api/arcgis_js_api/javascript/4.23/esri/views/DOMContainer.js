// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/domUtils ../core/reactiveUtils ../core/scheduling ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./overlay/ViewOverlay ../widgets/Popup".split(" "),function(q,t,f,m,k,u,g,B,C,D,y,v,w){function x(e){e&&(m.empty(e),e.parentNode&&e.parentNode.removeChild(e))}const l=[0,0];q.DOMContainer=e=>{e=function(n){function p(...b){var a=
n.call(this,...b)||this;a._freqInfo={freq:16,time:750};a._overlayRenderTaskHandle=null;a.height=0;a.position=null;a.resizing=!1;a.root=null;a.surface=null;a.suspended=!0;a.ui=null;a.userContent=null;a.width=0;a.widthBreakpoint=null;a.handles.add([a.watch("cursor",c=>{const d=a.surface;d&&d.setAttribute("data-cursor",c)}),a.watch("interacting",c=>{const d=a.surface;d&&d.setAttribute("data-interacting",c.toString())})]);return a}t._inheritsLoose(p,n);var h=p.prototype;h.initialize=function(){this.handles.add(this.watch("ui",
(b,a)=>this._handleUIChange(b,a)));this._wireUI(this.ui);this.handles.add([this.on("focus",()=>this.notifyChange("focused")),this.on("blur",()=>this.notifyChange("focused"))])};h.destroy=function(){this.destroyed||(this.ui&&(this.ui.destroy(),this.ui=null),this.popup&&!this.popup.destroyed&&this.popup.destroy(),this.container=null)};h.blur=function(){this.surface&&this.surface.blur()};h.focus=function(){this.surface&&this.surface.focus()};h.pageToContainer=function(b,a,c){const d=this.position;b-=
d[0];a-=d[1];c?(c[0]=b,c[1]=a):c=[b,a];return c};h.containerToPage=function(b,a,c){const d=this.position;b+=d[0];a+=d[1];c?(c[0]=b,c[1]=a):c=[b,a];return c};h._handleUIChange=function(b,a){a&&(this.handles.remove("ui"),a.destroy());b&&this._wireUI(b);this._set("ui",b)};h._wireUI=function(b){this.handles.remove("ui");b&&(b.view=this,this.handles.add([k.watch(()=>this.root,a=>{if(a){{const c=document.createElement("div");a.appendChild(c);a=c}}else a=null;b.container=a},k.initial),k.watch(()=>this.popup,
(a,c)=>{c&&b.remove(c,"popup");a&&(a.view=b.view,b.add(a,{key:"popup",position:"manual"}))},k.initial)],"ui"))};h._stopMeasuring=function(){this.handles.remove("measuring");this._get("resizing")&&this._set("resizing",!1)};h._startMeasuring=function(){const b=this._freqInfo;b.freq=16;b.time=750;this.handles.add([(()=>{const a=()=>{b.freq=16;b.time=750};window.addEventListener("resize",a);return{remove(){window.removeEventListener("resize",a)}}})(),u.addFrameTask({prepare:a=>{const c=this._measure(),
d=this._freqInfo;d.time+=a.deltaTime;c&&(d.freq=16,this._get("resizing")||this._set("resizing",!0));d.time<d.freq||(d.time=0,this._position()||c?d.freq=16:d.freq=Math.min(750,2*d.freq),!c&&512<=d.freq&&this._get("resizing")&&this._set("resizing",!1))}})],"measuring");this._measure();this._position()};h._measure=function(){var b=this.container;const a=b?b.clientWidth:0;b=b?b.clientHeight:0;if(0===a||0===b)return this.suspended||this._set("suspended",!0),!1;const c=this.width,d=this.height;if(a===c&&
b===d)return this.suspended&&this._set("suspended",!1),!1;this._set("width",a);this._set("height",b);this.suspended&&this._set("suspended",!1);this.emit("resize",{oldWidth:c,oldHeight:d,width:a,height:b});return!0};h._position=function(){var b=this.container;const a=this.position;{const c=(b.ownerDocument||window.document).defaultView;b=b.getBoundingClientRect();l[0]=b.left+c.pageXOffset;l[1]=b.top+c.pageYOffset}return a&&l[0]===a[0]&&l[1]===a[1]?!1:(this._set("position",[l[0],l[1]]),!0)};h.forceDOMReadyCycle=
function(){};t._createClass(p,[{key:"container",set:function(b){var a=this._get("container");if(a!==b)if(this.handles.remove("dom-size"),this._stopMeasuring(),a&&(a.classList.remove("esri-view"),this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null),this.overlay.destroy(),this._set("overlay",null),x(this.root),this._set("root",null),m.reparent(this.userContent,a),x(this.userContent),this._set("userContent",null)),b){b.classList.add("esri-view");
a=document.createElement("div");a.className="esri-view-user-storage";m.reparent(b,a);b.appendChild(a);this._set("userContent",a);a=document.createElement("div");a.className="esri-view-root";b.insertBefore(a,b.firstChild);this._set("root",a);const c=document.createElement("div");c.className="esri-view-surface";c.setAttribute("role","application");c.tabIndex=0;a.appendChild(c);this._set("surface",c);const d=new v;a.appendChild(d.surface);this._set("overlay",d);d.watch("needsRender",r=>{r&&!this._overlayRenderTaskHandle?
this._overlayRenderTaskHandle=u.addFrameTask({render:()=>{this.overlay.render()}}):this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null)});this.forceDOMReadyCycle();this.handles.add(k.watch(()=>this.size,r=>{const [z,A]=r;z>=document.body.clientWidth||A>=document.body.clientHeight?c.classList.add("esri-view-surface--inset-outline"):c.classList.remove("esri-view-surface--inset-outline")},k.initial),"dom-size");this._set("container",b);this._startMeasuring()}else this._set("width",
0),this._set("height",0),this._set("position",null),this._set("suspended",!0),this._set("surface",null),this._set("container",null)}},{key:"focused",get:function(){const b=document.activeElement===this.surface;return document.hasFocus()&&b}},{key:"popup",get:function(){return this._get("popup")||new w({view:this})},set:function(b){const a=this._get("popup");a&&a!==b&&a.destroy();this._set("popup",b)}},{key:"size",get:function(){return[this.width,this.height]}}]);return p}(e);f.__decorate([g.property({value:null,
cast:n=>m.byId(n)})],e.prototype,"container",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"focused",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"height",void 0);f.__decorate([g.property({type:w})],e.prototype,"popup",null);f.__decorate([g.property({type:v})],e.prototype,"overlay",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"position",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"resizing",void 0);f.__decorate([g.property({readOnly:!0})],
e.prototype,"root",void 0);f.__decorate([g.property({value:null,readOnly:!0})],e.prototype,"size",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"surface",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"suspended",void 0);f.__decorate([g.property()],e.prototype,"ui",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"userContent",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"width",void 0);f.__decorate([g.property()],e.prototype,"widthBreakpoint",
void 0);return e=f.__decorate([y.subclass("esri.views.DOMContainer")],e)};q.isDOMContainer=function(e){return e&&"focus"in e};Object.defineProperty(q,"__esModule",{value:!0})});