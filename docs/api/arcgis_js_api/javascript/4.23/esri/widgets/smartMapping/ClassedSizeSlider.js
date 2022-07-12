// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/maybe ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../renderers/support/ClassBreakInfo ./SmartMappingSliderBase ./ClassedSizeSlider/ClassedSizeSliderViewModel ./support/utils ../support/widgetUtils ../support/decorators/messageBundle ../../core/Logger ../support/jsxFactory".split(" "),
function(C,g,f,x,D,M,N,E,l,F,G,H,I,y,J,K,O,k){var t;const z={trackFillColor:new f([149,149,149]),trackBackgroundColor:new f([224,224,224])};f=t=function(A){function m(a,c){a=A.call(this,a,c)||this;a._rampNode=null;a.breaks=null;a.label=void 0;a.messages=null;a.style={...z};a.viewModel=new I;return a}C._inheritsLoose(m,A);var h=m.prototype;h.castStyle=function(a){return{...z,...a}};m.fromRendererResult=function(a,c){({renderer:{classBreakInfos:a}}=a);a=a.map(b=>{const d=b.symbol;let e;switch(d.type){case "simple-line":e=
d.width;break;case "simple-marker":e=d.size;break;case "picture-marker":e=d.height}return{min:b.minValue,max:b.maxValue,size:e}});return new t({breaks:a,histogramConfig:{bins:c?c.bins:[]}})};h.updateClassBreakInfos=function(a){const c=this.breaks;if(c.length!==a.length)console.error(`Number of input breakInfos must match number of slider breaks: ${c.length}`);else return a.map((b,d)=>{b=b.symbol;switch(b.type){case "simple-line":b.width=c[d].size;break;case "simple-marker":b.size=c[d].size;break;
case "picture-marker":{const e=c[d].size,u=b.width,v=b.height;b.height=e;b.width=e/v*u}}return new G({minValue:c[d].min,maxValue:c[d].max,symbol:b})})};h.updateFromRendererResult=function(a,c){({renderer:{classBreakInfos:a}}=a);a=a.map(b=>{const d=b.symbol;let e;switch(d.type){case "simple-line":e=d.width;break;case "simple-marker":e=d.size;break;case "picture-marker":e=d.height}return{min:b.minValue,max:b.maxValue,size:e}});this.set({breaks:a});null!=c&&c.bins&&(this.histogramConfig.bins=c.bins)};
h.render=function(){const {state:a,label:c,visibleElements:b}=this,d="disabled"===a,e=this.classes("esri-classed-size-slider","esri-widget","esri-widget--panel",{["esri-disabled"]:d,["esri-classed-size-slider--interactive-track"]:b.interactiveTrack});return k.tsx("div",{"aria-label":c,class:e},d?null:this.renderContent(this.renderRamp(),"esri-classed-size-slider__slider-container","esri-classed-size-slider__histogram-container"))};h.renderRamp=function(){const {style:{trackBackgroundColor:a}}=this;
return k.tsx("div",{afterCreate:J.storeNode,bind:this,class:"esri-classed-size-slider__ramp","data-node-ref":"_rampNode"},k.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},k.tsx("rect",{x:"0",y:"0",fill:y.getFillFromColor(a),height:"100%",width:"100%"}),this.renderPath()))};h.renderPath=function(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:c=0}=this._rampNode;if(x.isSome(a)&&x.isSome(c)){var {breaks:b,viewModel:{max:d,min:e},style:{trackFillColor:u}}=this,v=d-e,w=c/b.length,L=b.map(n=>a-
Math.round((n.min-e)/v*a)+1).reverse(),B=b[0].size>b[b.length-1].size||!1,p=B?w:c,q=`M${p} 0 `;L.forEach((n,r)=>{r=w*(r+1);q+=`L${p} ${n} `;p=B?w+r:c-r;q+=`L${p} ${n} `});q+=`L0 ${a} L0 ${a} L0 0 Z`;return k.tsx("path",{d:q,fill:y.getFillFromColor(u)})}}};return m}(H.SmartMappingSliderBase);g.__decorate([D.aliasOf("viewModel.breaks")],f.prototype,"breaks",void 0);g.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],f.prototype,"label",void 0);g.__decorate([l.property(),
K.messageBundle("esri/widgets/smartMapping/ClassedSizeSlider/t9n/ClassedSizeSlider")],f.prototype,"messages",void 0);g.__decorate([l.property()],f.prototype,"style",void 0);g.__decorate([E.cast("style")],f.prototype,"castStyle",null);g.__decorate([l.property()],f.prototype,"viewModel",void 0);return f=t=g.__decorate([F.subclass("esri.widgets.smartMapping.ClassedSizeSlider")],f)});