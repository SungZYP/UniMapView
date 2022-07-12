// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./guid","./dom"],function(c,b,f,g){function e(){"undefined"!==typeof customElements&&["calcite-tab"].forEach(a=>{switch(a){case "calcite-tab":customElements.get(a)||customElements.define(a,c.Tab)}})}c.Tab=class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTabRegister=b.createEvent(this,"calciteTabRegister",7);this.active=!1;this.scale="m";this.guid=`calcite-tab-title-${f.guid()}`}render(){return b.h(b.Host,{"aria-expanded":this.active.toString(),
"aria-labelledby":this.labeledBy,id:this.el.id||this.guid,role:"tabpanel"},b.h("section",null,b.h("slot",null)))}componentDidLoad(){this.calciteTabRegister.emit()}componentWillRender(){var a;this.scale=null===(a=this.el.closest("calcite-tabs"))||void 0===a?void 0:a.scale}disconnectedCallback(){var a;null===(a=document.body)||void 0===a?void 0:a.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}tabChangeHandler(a){a.target.closest("calcite-tabs")===this.el.closest("calcite-tabs")&&
(this.tab?this.active=this.tab===a.detail.tab:this.getTabIndex().then(d=>{this.active=d===a.detail.tab}))}async getTabIndex(){return Array.prototype.indexOf.call(g.nodeListToArray(this.el.parentElement.children).filter(a=>a.matches("calcite-tab")),this.el)}async updateAriaInfo(a=[],d=[]){this.labeledBy=d[a.indexOf(this.el.id)]||null}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([active]) section{display:block}:host{display:none;height:100%;width:100%}:host([active]){display:block;height:100%;width:100%;overflow:auto}section{display:none;height:100%;width:100%}:host([scale\x3ds]){padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale\x3dm]){padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale\x3dl]){padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}"}};
c.Tab=b.proxyCustomElement(c.Tab,[1,"calcite-tab",{tab:[513],active:[1540],scale:[1537],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteTabChange","tabChangeHandler"]]]);e();c.defineCustomElement=e});