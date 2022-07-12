// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./NavigationToggle/NavigationToggleViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/jsxFactory ./support/widgetUtils".split(" "),function(k,c,p,b,x,y,e,q,r,l,t,u,z,f,A){b=
function(m){function g(a,d){a=m.call(this,a,d)||this;a.iconClass="esri-icon-pan2";a.label=void 0;a.messages=null;a.view=null;a.viewModel=new l;return a}k._inheritsLoose(g,m);var h=g.prototype;h.toggle=function(){return this.viewModel.toggle()};h.render=function(){const a="disabled"===this.get("viewModel.state");var d="pan"===this.get("viewModel.navigationMode");const v={["esri-navigation-toggle__button--active"]:d};d={["esri-navigation-toggle__button--active"]:!d};const w=a?-1:0,n=this.messages.toggle;
return f.tsx("div",{bind:this,class:this.classes("esri-navigation-toggle esri-widget",{["esri-disabled"]:a,["esri-navigation-toggle--horizontal"]:"horizontal"===this.layout}),onclick:this._toggle,onkeydown:this._toggle,tabIndex:w,"aria-label":n,title:n},f.tsx("div",{class:this.classes("esri-navigation-toggle__button esri-widget--button","esri-navigation-toggle__button--pan",v)},f.tsx("span",{class:"esri-icon-pan"})),f.tsx("div",{class:this.classes("esri-navigation-toggle__button esri-widget--button",
"esri-navigation-toggle__button--rotate",d)},f.tsx("span",{class:"esri-icon-rotate"})))};h._toggle=function(){this.toggle()};k._createClass(g,[{key:"layout",set:function(a){"horizontal"!==a&&(a="vertical");this._set("layout",a)}}]);return g}(r);c.__decorate([e.property()],b.prototype,"iconClass",void 0);c.__decorate([e.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([e.property({value:"vertical"})],b.prototype,"layout",null);c.__decorate([e.property(),
u.messageBundle("esri/widgets/NavigationToggle/t9n/NavigationToggle")],b.prototype,"messages",void 0);c.__decorate([p.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([e.property({type:l})],b.prototype,"viewModel",void 0);c.__decorate([t.accessibleHandler()],b.prototype,"_toggle",null);return b=c.__decorate([q.subclass("esri.widgets.NavigationToggle")],b)});