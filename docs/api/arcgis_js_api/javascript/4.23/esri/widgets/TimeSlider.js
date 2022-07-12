// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../TimeInterval ../core/arrayUtils ../core/Collection ../core/compilerUtils ../core/maybe ../core/reactiveUtils ../core/timeUtils ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ../intl/date ./Slider ./Widget ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils ./support/widgetThemeUtils ./TimeSlider/TimeSliderViewModel".split(" "),
function(P,H,e,a,Z,aa,ba,d,I,Q,m,la,ma,q,ca,A,da,ea,J,R,na,fa,c,ha,ia,K){const ja=new aa([{minor:new a({value:100,unit:"milliseconds"}),major:new a({value:1,unit:"seconds"}),format:{second:"numeric"}},{minor:new a({value:500,unit:"milliseconds"}),major:new a({value:5,unit:"seconds"}),format:{second:"numeric"}},{minor:new a({value:1,unit:"seconds"}),major:new a({value:20,unit:"seconds"}),format:{minute:"numeric",second:"numeric"}},{minor:new a({value:2,unit:"seconds"}),major:new a({value:30,unit:"seconds"}),
format:{minute:"numeric",second:"numeric"}},{minor:new a({value:10,unit:"seconds"}),major:new a({value:1,unit:"minutes"}),format:{minute:"numeric"}},{minor:new a({value:15,unit:"seconds"}),major:new a({value:5,unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new a({value:1,unit:"minutes"}),major:new a({value:20,unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new a({value:5,unit:"minutes"}),major:new a({value:2,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},
{minor:new a({value:15,unit:"minutes"}),major:new a({value:6,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},{minor:new a({value:1,unit:"hours"}),major:new a({value:1,unit:"days"}),format:{day:"numeric",month:"short"}},{minor:new a({value:6,unit:"hours"}),major:new a({value:1,unit:"weeks"}),format:{day:"numeric",month:"short"}},{minor:new a({value:1,unit:"days"}),major:new a({value:1,unit:"months"}),format:{month:"long"}},{minor:new a({value:2,unit:"days"}),major:new a({value:1,unit:"months"}),
format:{month:"short"}},{minor:new a({value:3,unit:"days"}),major:new a({value:1,unit:"months"}),format:{month:"short"}},{minor:new a({value:4,unit:"days"}),major:new a({value:3,unit:"months"}),format:{month:"short",year:"numeric"}},{minor:new a({value:1,unit:"weeks"}),major:new a({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new a({value:1,unit:"months"}),major:new a({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new a({value:2,unit:"months"}),major:new a({value:2,unit:"years"}),
format:{year:"numeric"}},{minor:new a({value:1,unit:"years"}),major:new a({value:1,unit:"decades"}),format:{year:"numeric"}},{minor:new a({value:2,unit:"years"}),major:new a({value:5,unit:"decades"}),format:{year:"numeric"}},{minor:new a({value:5,unit:"decades"}),major:new a({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:1,unit:"centuries"}),major:new a({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:2,unit:"centuries"}),
major:new a({value:20,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:5,unit:"centuries"}),major:new a({value:50,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:10,unit:"centuries"}),major:new a({value:100,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:20,unit:"centuries"}),major:new a({value:200,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:50,unit:"centuries"}),major:new a({value:500,
unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:100,unit:"centuries"}),major:new a({value:1E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:200,unit:"centuries"}),major:new a({value:1E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:500,unit:"centuries"}),major:new a({value:5E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:1E3,unit:"centuries"}),major:new a({value:1E4,unit:"centuries"}),
format:{era:"short",year:"numeric"}}]);a=function(S){function B(b,f){b=S.call(this,b,f)||this;b._ignoreNextSliderUpdate=!1;b._slider=new da({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1,thumbsConstrained:!1});b._tickFormat=null;b.actions=null;b.disabled=!1;b.effectiveStops=null;b.fullTimeExtent=null;b.iconClass="esri-icon-time-clock";b.label=void 0;b.labelFormatFunction=null;b.loop=!1;b.messages=null;b.messagesCommon=null;b.mode="time-window";b.playRate=1E3;b.stops={count:10};
b.tickConfigs=null;b.timeExtent=null;b.timeVisible=!1;b.view=null;b.viewModel=new K;return b}H._inheritsLoose(B,S);var h=B.prototype;h.initialize=function(){this.own([I.watch(()=>this._slider.values,b=>{this._ignoreNextSliderUpdate?this._ignoreNextSliderUpdate=!1:(b=this.viewModel.valuesToTimeExtent(b),d.isSome(this.timeExtent)?d.isSome(b)?this.timeExtent.equals(b)||(this.timeExtent=b):this.timeExtent=null:d.isSome(b)&&(this.timeExtent=b))}),I.watch(()=>this.effectiveStops,()=>this._updateSliderSteps(),
I.initial)])};h.loadDependencies=function(){return Promise.all([new Promise((b,f)=>P(["../chunks/calcite-action"],b,f)),new Promise((b,f)=>P(["../chunks/calcite-action-menu"],b,f))])};h.destroy=function(){this._slider.destroy();this._tickFormat=null};B.getPropertiesFromWebMap=function(){var b=H._asyncToGenerator(function*(f,u){return K.getPropertiesFromWebMap(f,u)});return function(f,u){return b.apply(this,arguments)}}();h.next=function(){};h.play=function(){};h.previous=function(){};h.stop=function(){return null};
h.render=function(){const {_slider:b,actions:f,domNode:u,effectiveStops:D,fullTimeExtent:l,interactive:v,messages:L,messagesCommon:r,mode:T,tickConfigs:M,timeExtent:g,timeVisible:E,viewModel:{state:U,timeExtentValues:N}}=this;if(d.isSome(l)){const {start:k,end:V}=l;if(d.isSome(k)&&d.isSome(V)){var w=k.getTime(),x=V.getTime(),y=b.min!==w||b.max!==x;y&&(b.min=w,b.max=x);if(d.isSome(M))b.tickConfigs!==M&&(b.tickConfigs=M);else{var n,t=(null==(n=b.trackElement)?void 0:n.offsetWidth)||400;const ka=(x-
w)/t,z=ja.find(C=>C.minor.toMilliseconds()>3*ka);if(n=this._tickFormat!==z&&null!=z)this._tickFormat=z;if(y||n)y={mode:"position",values:this._getTickPositions(z.minor),labelsVisible:!1,tickCreatedFunction:(C,O)=>{O.classList.add("minorTick")}},n={mode:"position",values:this._getTickPositions(z.major),labelsVisible:!0,tickCreatedFunction:(C,O)=>{O.classList.add("majorTick")},labelFormatFunction:C=>A.formatDate(C,z.format)},b.tickConfigs=[y,n]}}}if(y=d.isNone(this.fullTimeExtent)||d.isNone(this.timeExtent)||
this.timeExtent.isAllTime||this.timeExtent.isEmpty||d.isSome(this.timeExtent.start)&&(this.timeExtent.start<this.fullTimeExtent.start||this.timeExtent.start>this.fullTimeExtent.end)||d.isSome(this.timeExtent.end)&&(this.timeExtent.end>this.fullTimeExtent.end||this.timeExtent.end<this.fullTimeExtent.start))switch(this._ignoreNextSliderUpdate=!0,T){case "time-window":b.values=[b.min,b.max];break;case "instant":case "cumulative-from-end":b.values=[b.min];break;case "cumulative-from-start":b.values=[b.max]}else d.isSome(N)?
Z.equals(b.values,N)||(b.values=N):b.values=null;b.disabled=!v;w="ready"===U;t="playing"===U;var p=y||!v||d.isNone(D)||0===D.length;n="auto"===this.layout?858>u.clientWidth?"compact":"wide":this.layout;w=c.tsx("div",{class:"esri-time-slider__animation"},c.tsx("button",{"aria-disabled":p?"true":"false","aria-label":t?r.control.stop:r.control.play,bind:this,class:this.classes("esri-widget--button","esri-time-slider__animation-button",p&&"esri-button--disabled"),disabled:p,title:t?r.control.stop:r.control.play,
onclick:this._playOrStopClick,type:"button"},c.tsx("div",{class:this.classes((w||p)&&"esri-icon-play",t&&"esri-icon-pause")})));x=d.isSome(this.labelFormatFunction)?c.tsx("div",{key:"extent",bind:this,class:"esri-time-slider__time-extent-date","data-type":"extent","data-layout":n,"data-date":d.applySome(g,k=>[k.start,k.end]),afterCreate:this._createLabel,afterUpdate:this._createLabel}):d.isNone(g)||d.isSome(g)&&g.isAllTime?[c.tsx("div",{class:this.classes("esri-time-slider__warning","esri-icon-notice-triangle")}),
c.tsx("div",{key:"warning-text",class:"esri-time-slider__warning-text"},L.noTimeExtent)]:g.isEmpty?[c.tsx("div",{class:this.classes("esri-time-slider__warning","esri-icon-notice-triangle")}),c.tsx("div",{key:"warning-text",class:"esri-time-slider__warning-text"},L.emptyTimeExtent)]:[d.isSome(g.start)&&c.tsx("div",{key:"start-date-group",class:"esri-time-slider__time-extent-group"},c.tsx("div",{key:"start-date",class:"esri-time-slider__time-extent-date"},this._formatDate(g.start)),E&&c.tsx("div",{key:"start-time",
class:"esri-time-slider__time-extent-time"},this._formatTime(g.start))),d.isSome(g.start)&&d.isSome(g.end)&&g.start.getTime()!==g.end.getTime()&&c.tsx("div",{key:"separator",class:"esri-time-slider__time-extent-separator"},"\u2013"),d.isSome(g.end)&&(d.isNone(g.start)||g.start.getTime()!==g.end.getTime())&&c.tsx("div",{key:"end-date-group",class:"esri-time-slider__time-extent-group"},c.tsx("div",{key:"end-date",class:"esri-time-slider__time-extent-date"},this._formatDate(g.end)),E&&c.tsx("div",{key:"end-time",
class:"esri-time-slider__time-extent-time"},this._formatTime(g.end)))];x=c.tsx("div",{class:this.classes("esri-time-slider__time-extent",!v&&"esri-button--disabled")},[x]);var F=d.isSome(this.labelFormatFunction)?c.tsx("div",{key:"min-date",bind:this,class:"esri-time-slider__min-date","data-date":d.applySome(l,k=>k.start),"data-type":"min","data-layout":n,afterCreate:this._createLabel,afterUpdate:this._createLabel}):d.isSome(l)&&d.isSome(l.start)&&[c.tsx("div",{key:"min-date",class:"esri-time-slider__min-date"},
this._formatDate(l.start)),E&&c.tsx("div",{key:"min-time",class:"esri-time-slider__min-time"},this._formatTime(l.start))];F=c.tsx("div",{class:this.classes("esri-time-slider__min",!v&&"esri-button--disabled")},[F]);const W=c.tsx("div",{class:"esri-time-slider__slider"},b.render());var G=d.isSome(this.labelFormatFunction)?c.tsx("div",{key:"max-date",bind:this,class:"esri-time-slider__max-date","data-date":d.applySome(l,k=>k.end),"data-type":"max","data-layout":n,afterCreate:this._createLabel,afterUpdate:this._createLabel}):
d.isSome(l)&&d.isSome(l.end)&&[c.tsx("div",{key:"max-date",class:"esri-time-slider__max-date"},this._formatDate(l.end)),E&&c.tsx("div",{key:"max-time",class:"esri-time-slider__max-time"},this._formatTime(l.end))];G=c.tsx("div",{class:this.classes("esri-time-slider__max",!v&&"esri-button--disabled")},[G]);const X=c.tsx("div",{class:"esri-time-slider__previous"},c.tsx("button",{"aria-disabled":p?"true":"false","aria-label":r.pagination.previous,bind:this,class:this.classes("esri-widget--button","esri-time-slider__previous-button",
(t||p)&&"esri-button--disabled"),disabled:p,title:r.pagination.previous,onclick:this._previousClick,type:"button"},c.tsx("div",{class:"esri-icon-reverse"})));t=c.tsx("div",{class:"esri-time-slider__next"},c.tsx("button",{"aria-disabled":p?"true":"false","aria-label":r.pagination.next,bind:this,class:this.classes("esri-widget--button","esri-time-slider__next-button",(t||p)&&"esri-button--disabled"),disabled:p,title:r.pagination.next,onclick:this._nextClick,type:"button"},c.tsx("div",{class:"esri-icon-forward"})));
const Y=(p=0<(null==f?void 0:f.length))&&c.tsx("div",{class:"esri-time-slider__actions",title:r.options},c.tsx("calcite-action-menu",{label:r.options,class:"esri-time-slider__actions-button"},f.toArray().map(k=>c.tsx("calcite-action",{bind:this,icon:k.icon,id:k.id,onCalciteActionClick:()=>this.viewModel.triggerAction(k),text:k.title,textEnabled:!0}))));return c.tsx("div",{class:this.classes("esri-time-slider","esri-widget",`${"esri-time-slider__mode--"}${T}`,`${"esri-time-slider__layout--"}${n}`,
!v&&"esri-disabled",y&&"esri-time-slider--out-of-bounds",p&&"esri-time-slider--has-actions",ia.getCalciteThemeClass()),afterCreate:k=>{this.own(ha.onResize(k,()=>this.scheduleRender()))},"aria-label":L.widgetLabel},"wide"===n&&c.tsx("div",{class:"esri-time-slider__row"},c.tsx("div",{class:"esri-time-slider__playback-controls"},[w,x,F,W,G,X,t]),Y),"compact"===n&&[c.tsx("div",{key:"time-slider-row-1",class:"esri-time-slider__row"},[x,Y]),c.tsx("div",{key:"time-slider-row-2",class:"esri-time-slider__row"},
[W]),c.tsx("div",{key:"time-slider-row-3",class:"esri-time-slider__row"},[F,X,w,t,G])])};h.updateWebDocument=function(b){var f;null==(f=this.viewModel)?void 0:f.updateWebDocument(b)};h._createLabel=function(b){if(!d.isNone(this.labelFormatFunction)){var f=b.getAttribute("data-type"),u=b.getAttribute("data-layout");this.labelFormatFunction(b["data-date"],f,b,u)}};h._getTickPositions=function(b){var {fullTimeExtent:f}=this;if(d.isNone(f)||d.isNone(f.start)||d.isNone(f.end))return[];const {start:u,end:D}=
f;f=[];const {value:l,unit:v}=b;for(b=Q.truncateDate(u,v);b.getTime()<=D.getTime();)b.getTime()>=u.getTime()&&f.push(b.getTime()),b=Q.offsetDate(b,l,v);return f};h._formatDate=function(b){return b?A.formatDate(b,A.convertDateFormatToIntlOptions("short-date")):null};h._formatTime=function(b){return b?A.formatDate(b,A.convertDateFormatToIntlOptions("long-time")):null};h._updateSliderSteps=function(){this._slider.steps=d.isSome(this.effectiveStops)&&0<this.effectiveStops.length?this.effectiveStops.map(b=>
b.getTime()):null};h._playOrStopClick=function(){switch(this.viewModel.state){case "ready":this.viewModel.play();break;case "playing":this.viewModel.stop();break;case "disabled":break;default:ba.neverReached(this.viewModel.state)}};h._previousClick=function(){this.viewModel.previous()};h._nextClick=function(){this.viewModel.next()};H._createClass(B,[{key:"interactive",get:function(){return!this.disabled&&this.viewModel&&"disabled"!==this.viewModel.state}},{key:"layout",set:function(b){-1===["auto",
"compact","wide"].indexOf(b)&&(b="auto");this._set("layout",b)}}]);return B}(ea);e.__decorate([m.aliasOf("viewModel.actions")],a.prototype,"actions",void 0);e.__decorate([q.property()],a.prototype,"disabled",void 0);e.__decorate([m.aliasOf("viewModel.effectiveStops")],a.prototype,"effectiveStops",void 0);e.__decorate([m.aliasOf("viewModel.fullTimeExtent")],a.prototype,"fullTimeExtent",void 0);e.__decorate([q.property()],a.prototype,"iconClass",void 0);e.__decorate([q.property({readOnly:!0})],a.prototype,
"interactive",null);e.__decorate([q.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0);e.__decorate([q.property()],a.prototype,"labelFormatFunction",void 0);e.__decorate([q.property({value:"auto"})],a.prototype,"layout",null);e.__decorate([m.aliasOf("viewModel.loop")],a.prototype,"loop",void 0);e.__decorate([q.property(),R.messageBundle("esri/widgets/TimeSlider/t9n/TimeSlider")],a.prototype,"messages",void 0);e.__decorate([q.property(),R.messageBundle("esri/t9n/common")],
a.prototype,"messagesCommon",void 0);e.__decorate([m.aliasOf("viewModel.mode")],a.prototype,"mode",void 0);e.__decorate([m.aliasOf("viewModel.playRate")],a.prototype,"playRate",void 0);e.__decorate([m.aliasOf("viewModel.stops")],a.prototype,"stops",void 0);e.__decorate([q.property()],a.prototype,"tickConfigs",void 0);e.__decorate([m.aliasOf("viewModel.timeExtent")],a.prototype,"timeExtent",void 0);e.__decorate([q.property({nonNullable:!0})],a.prototype,"timeVisible",void 0);e.__decorate([m.aliasOf("viewModel.view")],
a.prototype,"view",void 0);e.__decorate([q.property({type:K}),fa.vmEvent("trigger-action")],a.prototype,"viewModel",void 0);e.__decorate([m.aliasOf("viewModel.next")],a.prototype,"next",null);e.__decorate([m.aliasOf("viewModel.play")],a.prototype,"play",null);e.__decorate([m.aliasOf("viewModel.previous")],a.prototype,"previous",null);e.__decorate([m.aliasOf("viewModel.stop")],a.prototype,"stop",null);e.__decorate([J.accessibleHandler()],a.prototype,"_playOrStopClick",null);e.__decorate([J.accessibleHandler()],
a.prototype,"_previousClick",null);e.__decorate([J.accessibleHandler()],a.prototype,"_nextClick",null);return a=e.__decorate([ca.subclass("esri.widgets.TimeSlider")],a)});