// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/domUtils ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ./Component ../../widgets/support/widgetUtils".split(" "),function(A,B,q,u,h,m,v,w,r,g,l,x){function n(f){return"object"!==typeof f||f instanceof l||"declaredClass"in f||!("component"in f||"index"in f||"position"in f)?null:f}function p(f,b){var a=
b.bottom,c=b.left,y=b.right;f.style.top=b.top;f.style.bottom=a;f.style.left=c;f.style.right=y}var z={left:0,top:0,bottom:0,right:0},t={bottom:30,top:15,right:15,left:15};return function(f){function b(a){a=f.call(this,a)||this;a._cornerNameToContainerLookup={};a._positionNameToContainerLookup={};a._components=[];a._componentToKey=new Map;a._handles=new w;a.view=null;a._initContainers();return a}u(b,f);b.prototype.initialize=function(){this._handles.add([r.init(this,"view.padding, container",this._applyViewPadding.bind(this)),
r.init(this,"padding",this._applyUIPadding.bind(this))])};b.prototype.destroy=function(){this.container=null;for(var a=0,c=this._components;a<c.length;a++)c[a].destroy();this._components.length=0;this._handles.destroy();this._componentToKey.clear()};Object.defineProperty(b.prototype,"container",{set:function(a){var c=this._get("container");a!==c&&(a&&(a.classList.add("esri-ui"),this._attachContainers(a)),c&&(c.classList.remove("esri-ui"),p(c,{top:"",bottom:"",left:"",right:""}),m.empty(c)),this._set("container",
a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"height",{get:function(){var a=this.get("view.height")||0;if(0===a)return a;var c=this._getViewPadding();return Math.max(a-(c.top+c.bottom),0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"padding",{get:function(){return this._get("padding")},set:function(a){a?this._override("padding",a):this._clearOverride("padding")},enumerable:!0,configurable:!0});b.prototype.castPadding=function(a){return"number"===typeof a?
{bottom:a,top:a,right:a,left:a}:q({},t,a)};Object.defineProperty(b.prototype,"width",{get:function(){var a=this.get("view.width")||0;if(0===a)return a;var c=this._getViewPadding();return Math.max(a-(c.left+c.right),0)},enumerable:!0,configurable:!0});b.prototype.add=function(a,c){var b=this,d,e;if(Array.isArray(a))a.forEach(function(a){return b.add(a,c)});else{var k=n(a);k&&(d=k.index,c=k.position,a=k.component,e=k.key);c&&"object"===typeof c&&(d=c.index,e=c.key,c=c.position);!a||c&&!this._isValidPosition(c)||
(a instanceof l||(a=new l({node:a})),this._place({component:a,position:c,index:d}),this._components.push(a),e&&this._componentToKey.set(a,e))}};b.prototype.remove=function(a,c){var b=this;if(a){if(Array.isArray(a))return a.map(function(a){return b.remove(a,c)});var d=this._find(a);if(d){var e=this._componentToKey;if(!e.has(a)||e.get(a)===c)return e=this._components.indexOf(d),d.node.parentNode&&d.node.parentNode.removeChild(d.node),this._componentToKey.delete(a),this._components.splice(e,1)[0]}}};
b.prototype.empty=function(a){var c=this;if(Array.isArray(a))return a.map(function(a){return c.empty(a)}).reduce(function(a,c){return a.concat(c)});a=a||"manual";return"manual"===a?Array.prototype.slice.call(this._manualContainer.children).filter(function(a){return!a.classList.contains("esri-ui-corner")}).map(function(a){return c.remove(a)}):this._isValidPosition(a)?Array.prototype.slice.call(this._cornerNameToContainerLookup[a].children).map(this.remove,this):null};b.prototype.move=function(a,c){var b=
this;Array.isArray(a)&&a.forEach(function(a){return b.move(a,c)});if(a){var d,e=n(a)||n(c);e&&(d=e.index,c=e.position,a=e.component||a);(!c||this._isValidPosition(c))&&(a=this.remove(a))&&this.add(a,{position:c,index:d})}};b.prototype.find=function(a){return a?(a=this._findById(a))&&(a.widget||a.node):null};b.prototype._find=function(a){return a?a instanceof l?this._findByComponent(a):"string"===typeof a?this._findById(a):this._findByNode(a.domNode||a):null};b.prototype._getViewPadding=function(){return this.get("view.padding")||
z};b.prototype._attachContainers=function(a){a.appendChild(this._innerContainer);a.appendChild(this._manualContainer)};b.prototype._initContainers=function(){var a=document.createElement("div");a.classList.add("esri-ui-inner-container");a.classList.add("esri-ui-corner-container");var c=document.createElement("div");c.classList.add("esri-ui-inner-container");c.classList.add("esri-ui-manual-container");var b=document.createElement("div");b.classList.add("esri-ui-top-left");b.classList.add("esri-ui-corner");
a.appendChild(b);var d=document.createElement("div");d.classList.add("esri-ui-top-right");d.classList.add("esri-ui-corner");a.appendChild(d);var e=document.createElement("div");e.classList.add("esri-ui-bottom-left");e.classList.add("esri-ui-corner");a.appendChild(e);var f=document.createElement("div");f.classList.add("esri-ui-bottom-right");f.classList.add("esri-ui-corner");a.appendChild(f);this._innerContainer=a;this._manualContainer=c;a=x.isRTL();this._cornerNameToContainerLookup={"top-left":b,
"top-right":d,"bottom-left":e,"bottom-right":f,"top-leading":a?d:b,"top-trailing":a?b:d,"bottom-leading":a?f:e,"bottom-trailing":a?e:f};this._positionNameToContainerLookup=q({manual:c},this._cornerNameToContainerLookup)};b.prototype._isValidPosition=function(a){return!!this._positionNameToContainerLookup[a]};b.prototype._place=function(a){var c=a.component,b=a.index;a=this._positionNameToContainerLookup[a.position||"manual"];var d=-1<b,e=c.widget;e&&!e._started&&"function"===typeof e.postMixInProperties&&
"function"===typeof e.buildRendering&&"function"===typeof e.postCreate&&"function"===typeof e.startup&&c.widget.startup();d?(d=Array.prototype.slice.call(a.children),0===b?a.firstChild?m.insertBefore(c.node,a.firstChild):a.appendChild(c.node):b>=d.length?a.appendChild(c.node):m.insertBefore(c.node,d[b])):a.appendChild(c.node)};b.prototype._applyViewPadding=function(){var a=this.container;a&&p(a,this._toPxPosition(this._getViewPadding()))};b.prototype._applyUIPadding=function(){var a=this._innerContainer;
a&&p(a,this._toPxPosition(this.padding))};b.prototype._toPxPosition=function(a){return{top:this._toPxUnit(a.top),left:this._toPxUnit(a.left),right:this._toPxUnit(a.right),bottom:this._toPxUnit(a.bottom)}};b.prototype._toPxUnit=function(a){return 0===a?"0":a+"px"};b.prototype._findByComponent=function(a){var c=null,b;this._components.some(function(d){(b=d===a)&&(c=d);return b});return c};b.prototype._findById=function(a){var c=null,b;this._components.some(function(d){(b=d.id===a)&&(c=d);return b});
return c};b.prototype._findByNode=function(a){var c=null,b;this._components.some(function(d){(b=d.node===a)&&(c=d);return b});return c};h([g.property()],b.prototype,"container",null);h([g.property({dependsOn:["view.height"]})],b.prototype,"height",null);h([g.property({value:t})],b.prototype,"padding",null);h([g.cast("padding")],b.prototype,"castPadding",null);h([g.property()],b.prototype,"view",void 0);h([g.property({dependsOn:["view.width"]})],b.prototype,"width",null);return b=h([g.subclass("esri.views.ui.UI")],
b)}(g.declared(v.EventedAccessor))});