// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Home/HomeViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils".split(" "),function(l,c,g,b,x,y,e,q,r,m,t,n,z,u,
k,A){b=function(p){function h(a,d){a=p.call(this,a,d)||this;a.goToOverride=null;a.iconClass="esri-icon-home";a.label=void 0;a.messages=null;a.messagesCommon=null;a.view=null;a.viewModel=new m;a.viewpoint=null;return a}l._inheritsLoose(h,p);var f=h.prototype;f.cancelGo=function(){return null};f.go=function(){return null};f.render=function(){var a;const d=null==(a=this.viewModel)?void 0:a.state;({homeTitle:a}=this);return k.tsx("div",{bind:this,class:this.classes("esri-home esri-widget--button esri-widget",
{["esri-disabled"]:"disabled"===d}),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":a,title:a},this.renderIcon(),this.renderText())};f.renderIcon=function(){var a;const d=null==(a=this.viewModel)?void 0:a.state;return k.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon esri-icon-home",{["esri-icon-loading-indicator"]:"going-home"===d,["esri-rotating"]:"going-home"===d})})};f.renderText=function(){const {messages:a}=this;return k.tsx("span",{class:"esri-icon-font-fallback-text"},
a.button)};f._go=function(){const {viewModel:a}=this;"going-home"===a.state?a.cancelGo():a.go()};l._createClass(h,[{key:"homeTitle",get:function(){var a;const d=null==(a=this.viewModel)?void 0:a.state,{messagesCommon:v,messages:w}=this;return"going-home"===d?v.cancel:w.title}}]);return h}(r);c.__decorate([g.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"homeTitle",null);c.__decorate([e.property()],b.prototype,"iconClass",
void 0);c.__decorate([e.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([e.property(),n.messageBundle("esri/widgets/Home/t9n/Home")],b.prototype,"messages",void 0);c.__decorate([e.property(),n.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);c.__decorate([g.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([e.property({type:m}),u.vmEvent("go")],b.prototype,"viewModel",void 0);c.__decorate([g.aliasOf("viewModel.viewpoint")],
b.prototype,"viewpoint",void 0);c.__decorate([g.aliasOf("viewModel.cancelGo")],b.prototype,"cancelGo",null);c.__decorate([g.aliasOf("viewModel.go")],b.prototype,"go",null);c.__decorate([t.accessibleHandler()],b.prototype,"_go",null);return b=c.__decorate([q.subclass("esri.widgets.Home")],b)});