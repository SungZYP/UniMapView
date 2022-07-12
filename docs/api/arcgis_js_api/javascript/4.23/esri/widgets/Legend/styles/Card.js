// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../intl ../../../core/Handles ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../symbols/support/svgUtils ../../../symbols/support/utils ../../Widget ./support/relationshipUtils ./support/univariateUtils ../support/styleUtils ../../support/Heading ../../support/decorators/accessibleHandler ../../support/decorators/messageBundle ../../../core/Logger ../../support/jsxFactory ../../support/widgetUtils ../../../intl/substitute".split(" "),
function(K,u,t,L,D,v,S,T,U,M,N,E,O,P,r,p,A,Q,F,V,e,G,R){var y;(function(w){w.Auto="auto";w.Stack="stack";w.SideBySide="side-by-side"})(y||(y={}));const x=window.devicePixelRatio;t=function(w){function C(a,c){a=w.call(this,a,c)||this;a._handles=new L;a._hasIndicators=!1;a._selectedSectionName=null;a._sectionNames=[];a._sectionMap=new Map;a.activeLayerInfos=null;a.headingLevel=3;a.layout=y.Stack;a.messages=null;a.messagesCommon=null;a.type="card";a.view=null;return a}K._inheritsLoose(C,w);var n=C.prototype;
n.initialize=function(){this.own([this.watch("activeLayerInfos",a=>{this._handles.removeAll();this._watchForSectionChanges(a)})])};n.destroy=function(){this._handles.destroy();this._handles=null};n.render=function(){this._hasIndicators=this.layout===y.Auto&&768>=this.view.container.clientWidth||this.layout===y.Stack;var a=this.activeLayerInfos;a=a&&a.toArray().map(b=>this._renderLegendForLayer(b)).filter(b=>!!b);this._hasIndicators?this._selectedSectionName&&-1!==this._sectionNames.indexOf(this._selectedSectionName)||
(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):this._selectedSectionName=null;const c=this._sectionNames.length;var d=this._sectionNames.map((b,g)=>{g=R.substitute(this.messagesCommon.pagination.pageText,{index:g+1,total:c});return e.tsx("div",{key:b,role:"tab",id:b,"aria-label":g,"aria-controls":`${b}-panel`,"aria-selected":(this._selectedSectionName===b).toString(),tabIndex:this._selectedSectionName===b?0:-1,title:g,onclick:this._selectSection,onkeydown:this._focusSection,
bind:this,class:this.classes("esri-legend--card__carousel-indicator",{["esri-legend--card__carousel-indicator--activated"]:this._selectedSectionName===b}),"data-section-name":b})});d=this._hasIndicators&&1<c?e.tsx("div",{class:"esri-legend--card__carousel-indicator-container",key:"carousel-navigation",role:"tablist"},d):null;a=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):a&&a.length?a:null;return e.tsx("div",{class:this.classes("esri-legend--card",{["esri-legend--stacked"]:this._hasIndicators})},
a?a:e.tsx("div",{class:"esri-legend--card__message"},this.messages.noLegend),d)};n._selectSection=function(a){if(a=a.target.getAttribute("data-section-name"))this._selectedSectionName=a};n._focusSection=function(a){switch(a.key){case "ArrowLeft":case "ArrowRight":this._switchSectionOnArrowPress(a);break;case "Enter":case " ":this._selectSection(a)}};n._switchSectionOnArrowPress=function(a){const c=a.key,d="ArrowLeft"===c?-1:1;a=a.target.getAttribute("data-section-name");a=this._sectionNames.indexOf(a);
const b=this._sectionNames;let g=null;-1!==a&&(b[a+d]?g=document.getElementById(b[a+d]):"ArrowLeft"===c?g=document.getElementById(b[b.length-1]):"ArrowRight"===c&&(g=document.getElementById(b[0])),g&&g.focus())};n._watchForSectionChanges=function(a){this._generateSectionNames();a&&(a.forEach(c=>{const d=`activeLayerInfo-${c.layer.uid}-version-change`;this._handles.remove(d);this._watchForSectionChanges(c.children);this._handles.add(c.watch("version",()=>this._generateSectionNames()),d)}),this._handles.remove("activeLayerInfos-collection-change"),
this._handles.add(a.on("change",()=>this._watchForSectionChanges(a)),"activeLayerInfos-collection-change"))};n._generateSectionNames=function(){this._sectionNames.length=0;this._selectedSectionName=null;this.activeLayerInfos&&this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo,this)};n._getSectionName=function(a,c,d){return`${this.id}${a.uid}-type-${c.type}-${d}`};n._generateSectionNamesForActiveLayerInfo=function(a){a.children.forEach(this._generateSectionNamesForActiveLayerInfo,
this);a.legendElements&&a.legendElements.forEach((c,d)=>{this._sectionNames.push(this._getSectionName(a.layer,c,d))})};n._renderLegendForLayer=function(a){if(!a.ready)return null;if(a.children.length){var c=a.children.map(d=>this._renderLegendForLayer(d)).toArray();return e.tsx("div",{key:a.layer.uid,class:this.classes("esri-legend--card__service","esri-legend--card__group-layer")},e.tsx("div",{class:"esri-legend--card__service-caption-container"},a.title),c)}{if((c=a.legendElements)&&!c.length)return null;
const d=c.some(b=>"relationship-ramp"===b.type);c=c.map((b,g)=>this._renderLegendForElement(b,a,g,d)).filter(b=>!!b);return c.length?e.tsx("div",{key:a.layer.uid,class:this.classes("esri-legend--card__service",{["esri-legend--card__group-layer-child"]:!!a.parent})},e.tsx("div",{class:"esri-legend--card__service-caption-container"},e.tsx("div",{class:"esri-legend--card__service-caption-text"},a.title)),e.tsx("div",{class:"esri-legend--card__service-content"},c)):null}};n._renderLegendForElement=function(a,
c,d,b=!1){var g="color-ramp"===a.type,k="opacity-ramp"===a.type,f="size-ramp"===a.type;const l=c.layer;var h=null;"string"===typeof a.title?h=a.title:a.title&&(h=a.title,g=p.getTitle(this.messages,h,g||k),h=h.title?`${h.title} (${g})`:g);d=this._getSectionName(l,a,d);g=this._hasIndicators?e.tsx("div",null,e.tsx(A.Heading,{level:this.headingLevel,class:"esri-legend--card__carousel-title"},c.title),e.tsx(A.Heading,{level:A.incrementHeadingLevel(this.headingLevel),class:"esri-legend--card__layer-caption"},
h)):h?e.tsx(A.Heading,{level:this.headingLevel,class:"esri-legend--card__layer-caption"},h):null;h=c.effectList;k=null;"symbol-table"===a.type?(f=a.infos.map((m,q)=>this._renderLegendForElementInfo(m,c,a.legendType,q)).filter(m=>!!m),f.length&&(k=e.tsx("div",{class:this.classes({["esri-legend--card__label-container"]:!(f[0].properties.classes&&f[0].properties.classes["esri-legend--card__symbol-row"])&&!b,["esri-legend--card__relationship-label-container"]:b})},f))):"color-ramp"===a.type||"opacity-ramp"===
a.type||"heatmap-ramp"===a.type?k=this._renderLegendForRamp(a,l.opacity,h):f?k=this._renderSizeRamp(a,l.opacity):"relationship-ramp"===a.type?k=P.renderRelationshipRamp(a,this.id,l.opacity,h):"univariate-above-and-below-ramp"===a.type?k=this._renderUnivariateAboveAndBelowRamp(a,l.opacity,h):"univariate-color-size-ramp"===a.type&&(k=this._renderUnivariateColorSizeRamp(a,l.opacity,h));if(!k)return null;b=e.tsx("div",{key:d,class:"esri-legend--card__section",id:`${d}-panel`,role:"tabpanel","aria-labelledby":d,
tabIndex:0},[g,k]);this._sectionMap.set(d,b);return b};n._renderUnivariateAboveAndBelowRamp=function(a,c,d){const {sizeRampElement:b,colorRampElement:g}=r.getUnivariateAboveAndBelowRampElements(a,c,"horizontal");if(!b)return null;a=r.getUnivariateSizeRampSize(b,"full",!0,"horizontal");var k=r.getUnivariateColorRampSize(b,"above",!0,"horizontal"),f=r.getUnivariateColorRampSize(b,"below",!0,"horizontal");k=r.getUnivariateColorRampPreview(g,{width:k,height:12,rampAlignment:"horizontal",opacity:c,type:"above",
effectList:d});c=r.getUnivariateColorRampPreview(g,{width:f,height:12,rampAlignment:"horizontal",opacity:c,type:"below",effectList:d});d=r.getUnivariateColorRampMargin(b,"card");f=b.infos.map(m=>m.label);const l=f.length-1;f=f.map((m,q)=>0===q||q===l?e.tsx("div",{key:q},m):null);const h={marginTop:"3px",display:"flex"};G.isRTL(this.container)?h.marginRight=`${d}px`:h.marginLeft=`${d}px`;a={width:`${a}px`,display:"flex",flexDirection:"row",justifyContent:"space-between"};return e.tsx("div",{class:"esri-legend--card__layer-row",
key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},e.tsx("div",{class:this.classes("esri-legend--card__symbol-container","esri-legend__size-ramp--horizontal"),styles:{display:"flex",flexDirection:"row"}},b.infos.map((m,q)=>e.tsx("div",{key:q,class:"esri-legend--card__symbol",bind:m.preview,afterCreate:p.attachToNode}))),k?e.tsx("div",{class:"esri-univariate-above-and-below-ramp__color--card",styles:h,key:"color-ramp-preview"},e.tsx("div",{bind:k,afterCreate:p.attachToNode}),e.tsx("div",
{bind:c,afterCreate:p.attachToNode})):null,e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},e.tsx("div",{class:"esri-legend__ramp-labels",styles:a},f)))};n._renderUnivariateColorSizeRamp=function(a,c,d){const {sizeRampElement:b,colorRampElement:g}=r.getUnivariateColorSizeRampElements(a,"horizontal");if(!b)return null;a=r.getUnivariateSizeRampSize(b,"full",!1,"horizontal");var k=r.getUnivariateColorRampSize(b,"full",!1,"horizontal");c=r.getUnivariateColorRampPreview(g,{width:k,
height:12,rampAlignment:"horizontal",opacity:c,type:"full",effectList:d});const f=r.getUnivariateColorRampMargin(b,"card"),l=b.infos.length-1;d=b.infos.map((h,m)=>0===m||m===l?e.tsx("div",{key:m},h.label):null);k={marginTop:"3px",display:"flex"};G.isRTL(this.container)?k.marginRight=`${f}px`:k.marginLeft=`${f}px`;a={width:`${a}px`,display:"flex",flexDirection:"row",justifyContent:"space-between"};return e.tsx("div",{class:"esri-legend--card__layer-row",key:"size-ramp-preview",styles:{display:"flex",
flexDirection:"column"}},e.tsx("div",{class:this.classes("esri-legend--card__symbol-container","esri-legend__size-ramp--horizontal"),styles:{display:"flex",flexDirection:"row"}},b.infos.map((h,m)=>e.tsx("div",{key:m,class:"esri-legend--card__symbol",bind:h.preview,afterCreate:p.attachToNode}))),e.tsx("div",{class:"esri-univariate-above-and-below-ramp__color--card",styles:k,key:"color-ramp-preview"},e.tsx("div",{bind:c,afterCreate:p.attachToNode})),e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},
e.tsx("div",{class:"esri-legend__ramp-labels",styles:a},d)))};n._renderLegendForElementInfo=function(a,c,d,b){var g=c.layer;if(a.type)return this._renderLegendForElement(a,c,b);d=p.isImageryStretchedLegend(g,d);if(a.preview){var k;if(!a.symbol||-1===a.symbol.type.indexOf("simple-fill")){if(!a.label)return e.tsx("div",{key:b,bind:a.preview,afterCreate:p.attachToNode});c={["esri-legend--card__symbol-cell"]:this._hasIndicators};return e.tsx("div",{key:b,class:this.classes("esri-legend--card__layer-row",
{["esri-legend--card__symbol-row"]:this._hasIndicators})},e.tsx("div",{class:this.classes(c),bind:a.preview,afterCreate:p.attachToNode}),e.tsx("div",{class:this.classes("esri-legend--card__image-label",{["esri-legend--card__label-cell"]:this._hasIndicators})},p.getTitle(this.messages,a.label,!1)||""))}let l=d=255,h=255,m=0,q=255,z=255,B=255,H=0;const I=a.symbol.color&&a.symbol.color.a,J=a.symbol.outline&&a.symbol.outline.color&&a.symbol.outline.color.a;I&&(d=a.symbol.color.r,l=a.symbol.color.g,h=
a.symbol.color.b,m=a.symbol.color.a*g.opacity);J&&(q=a.symbol.outline.color.r,z=a.symbol.outline.color.g,B=a.symbol.outline.color.b,H=a.symbol.outline.color.a*g.opacity);var f=(g=null!=(f=null==(k=a.symbol.color)?void 0:k.isBright)?f:!0)?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)";c={background:I?`rgba(${d}, ${l}, ${h}, ${m})`:"none",color:g?"black":"white",textShadow:`-1px -1px 0 ${f},\n                                              1px -1px 0 ${f},\n                                              -1px 1px 0 ${f},\n                                              1px 1px 0 ${f}`,
border:J?`1px solid rgba(${q}, ${z}, ${B}, ${H})`:"none",filter:E.getCSSFilterFromEffectList(c.effectList)};return e.tsx("div",{key:b,class:"esri-legend--card__layer-row"},e.tsx("div",{class:"esri-legend--card__label-element",styles:c}," ",a.label," "))}if(a.src)return c=this._renderImage(a,g,d),e.tsx("div",{key:b,class:"esri-legend--card__layer-row"},c,e.tsx("div",{class:"esri-legend--card__image-label"},a.label||""))};n._renderImage=function(a,c,d){const {label:b,src:g,opacity:k}=a;d={["esri-legend--card__imagery-layer-image--stretched"]:d,
["esri-legend--card__symbol"]:!d};c={opacity:`${null!=k?k:c.opacity}`};return e.tsx("img",{alt:p.getTitle(this.messages,b,!1),src:g,border:0,width:a.width,height:a.height,class:this.classes(d),styles:c})};n._renderSizeRampLines=function(a){a=a.infos;var c=a[0],d=a[a.length-1],b=c.symbol;a=this._hasIndicators;c=D.pt2px(c.size+c.outlineSize)*x;d=D.pt2px(d.size+d.outlineSize)*x;const g=a?c:c+50*x,k=a?c/2+50*x:c;var f;b?-1<b.type.indexOf("3d")?(f=b.symbolLayers&&b.symbolLayers.length)?(f=b.symbolLayers.getItemAt(f-
1).get("resource.primitive"),f="triangle"===f||"cone"===f||"tetrahedron"===f):f=void 0:f="triangle"===b.style:f=void 0;if(b)if(-1<b.type.indexOf("3d")){var l=b.symbolLayers&&b.symbolLayers.length;l?(b=b.symbolLayers.getItemAt(l-1),b=b.resource&&b.resource.primitive,b="circle"===b||"cross"===b||"kite"===b||"sphere"===b||"cube"===b||"diamond"===b):b=void 0}else b=b.style,b="circle"===b||"diamond"===b||"cross"===b;else b=void 0;l=document.createElement("canvas");l.width=g;l.height=k;l.style.width=`${l.width/
x}px`;l.style.height=`${l.height/x}px`;const h=l.getContext("2d");if(a){h.beginPath();var m=g/2-d/2;h.moveTo(0,0);h.lineTo(m,k);m=g/2+d/2;h.moveTo(g,0);h.lineTo(m,k)}else h.beginPath(),h.moveTo(0,k/2-d/2),h.lineTo(g,0),h.moveTo(0,k/2+d/2),h.lineTo(g,k);h.strokeStyle="#ddd";h.stroke();return e.tsx("div",{bind:l,afterCreate:p.attachToNode,styles:a?{display:"flex",marginTop:`-${f?0:b?c/2:0}px`,marginBottom:`-${f?d:b?d/2:0}px`}:{display:"flex",marginRight:`-${f?0:b?c/2:0}px`,marginLeft:`-${f?0:b?d/2:
0}px`}})};n._renderSizeRamp=function(a,c){var d=a.infos;const b=d[0].label,g=d[d.length-1].label;let k=d[0].preview;d=d[d.length-1].preview;const f=this._hasIndicators,l={"flex-direction":f?"column":"row-reverse"};k&&(k=k.cloneNode(!0),k.style.display="flex");d&&(d=d.cloneNode(!0),d.style.display="flex");c={opacity:null!=c?`${c}`:""};return e.tsx("div",{class:this.classes("esri-legend--card__layer-row",{["esri-legend--card__size-ramp-row"]:f})},e.tsx("div",{class:"esri-legend--card__ramp-label"},
f?b:g),e.tsx("div",{class:"esri-legend--card__size-ramp-container",styles:l},e.tsx("div",{bind:k,afterCreate:p.attachToNode,class:"esri-legend--card__size-ramp-preview",styles:c}),this._renderSizeRampLines(a),e.tsx("div",{bind:d,afterCreate:p.attachToNode,class:"esri-legend--card__size-ramp-container",styles:c})),e.tsx("div",{class:"esri-legend--card__ramp-label"},f?g:b))};n._renderLegendForRamp=function(a,c,d){var b=a.infos;const g="heatmap-ramp"===a.type,k=b.length-1;var f=2<k&&!g?25*k:100,l=f+
20;const h=b.slice(0).reverse();h.forEach((z,B)=>{z.offset=g?z.ratio:B/k});const m=h.length-1;a=(a=0!==h.length%2&&h[h.length/2|0])&&e.tsx("div",{class:"esri-legend--card__interval-separators-container"},e.tsx("div",{class:"esri-legend--card__interval-separator"},"|"),e.tsx("div",{class:"esri-legend--card__ramp-label"},a.label));const q=b[b.length-1].label;b=b[0].label;f=N.renderSVG([[{shape:{type:"path",path:"M0 12.5 L10 0 L10 25 Z"},fill:h[0].color,stroke:{width:0}},{shape:{type:"rect",x:10,y:0,
width:f,height:25},fill:{type:"linear",x1:10,y1:0,x2:f+10,y2:0,colors:h},stroke:{width:0}},{shape:{type:"path",path:`M${f+10} 0 L${l} ${12.5} L${f+10} ${25} Z`},fill:h[m].color,stroke:{width:0}}]],l,25);({messages:l}=this);c={filter:E.getCSSFilterFromEffectList(d),opacity:null==c?null:`${c}`};return e.tsx("div",{class:"esri-legend--card__layer-row",styles:{justifyContent:"center"}},e.tsx("div",{class:"esri-legend--card__ramp-label"},g?l[q]:q),e.tsx("div",{class:"esri-legend--card__symbol-container"},
e.tsx("div",{styles:c},f),a),e.tsx("div",{class:"esri-legend--card__ramp-label"},g?l[b]:b))};return C}(O);u.__decorate([v.property()],t.prototype,"activeLayerInfos",void 0);u.__decorate([v.property()],t.prototype,"headingLevel",void 0);u.__decorate([v.property()],t.prototype,"layout",void 0);u.__decorate([v.property(),F.messageBundle("esri/widgets/Legend/t9n/Legend")],t.prototype,"messages",void 0);u.__decorate([v.property(),F.messageBundle("esri/t9n/common")],t.prototype,"messagesCommon",void 0);
u.__decorate([v.property({readOnly:!0})],t.prototype,"type",void 0);u.__decorate([v.property()],t.prototype,"view",void 0);u.__decorate([Q.accessibleHandler()],t.prototype,"_selectSection",null);return t=u.__decorate([M.subclass("esri.widgets.Legend.styles.Card")],t)});