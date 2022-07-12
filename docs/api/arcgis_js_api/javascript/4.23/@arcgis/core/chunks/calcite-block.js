/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{H as t,c as e,h as i,p as a,a as n}from"../widgets/Widget.js";import{g as r}from"./dom.js";import{H as o,d as s}from"./popover2.js";import{c,d as l}from"./conditionalSlot.js";import{d as m}from"./action.js";import{d}from"./action-menu.js";import{d as p}from"./icon.js";import{d as u}from"./loader.js";import{d as g}from"./scrim.js";import{d as f}from"./tooltip-manager.js";import"./tslib.es6.js";import"../intl.js";import"./number.js";import"./jsonMap.js";import"./object.js";import"../core/lang.js";import"./locale.js";import"./Logger.js";import"../config.js";import"./string.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./assets.js";import"./deprecate.js";import"./domUtils.js";import"./Evented.js";import"../core/Accessor.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./tracking.js";import"./ensureType.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"./shared.js";import"./Promise.js";import"../core/reactiveUtils.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./widgetThemeUtils.js";import"./guid.js";import"./resources.js";import"./popper.js";import"./observers.js";import"./array.js";import"./resources2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const h="handle",b="handle--activated",k="drag";let w=class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleNudge=e(this,"calciteHandleNudge",7),this.activated=!1,this.textTitle="handle",this.handleKeyDown=t=>{switch(t.key){case" ":this.activated=!this.activated;break;case"ArrowUp":case"ArrowDown":if(!this.activated)return;const e=t.key.toLowerCase().replace("arrow","");this.calciteHandleNudge.emit({handle:this.el,direction:e})}},this.handleBlur=()=>{this.activated=!1}}async setFocus(){this.handleButton.focus()}render(){return i("span",{"aria-pressed":this.activated.toString(),class:{[h]:!0,[b]:this.activated},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:t=>{this.handleButton=t},role:"button",tabindex:"0",title:this.textTitle},i("calcite-icon",{icon:k,scale:"s"}))}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}.handle{display:-ms-flexbox;display:flex;cursor:move;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-border-3);padding:0.75rem 0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}"}};function x(){if("undefined"==typeof customElements)return;["calcite-handle","calcite-icon"].forEach((t=>{switch(t){case"calcite-handle":customElements.get(t)||customElements.define(t,w);break;case"calcite-icon":customElements.get(t)||p()}}))}w=a(w,[1,"calcite-handle",{activated:[1540],textTitle:[513,"text-title"],setFocus:[64]}]),x();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const y="article",v="content",j="header-container",D="icon",z="status-icon",_="toggle",E="toggle-icon",H="title",S="heading",T="header",C="summary",B="control-container",L="valid",U="invalid",q="loading",A="Collapse",O="Expand",I="Loading",K="Options",N="icon",F="control",P="header-menu-actions",W={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle",refresh:"refresh"};let M=class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockToggle=e(this,"calciteBlockToggle",7),this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.intlLoading=I,this.intlOptions=K,this.loading=!1,this.open=!1,this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()}}connectedCallback(){c(this)}disconnectedCallback(){l(this)}renderScrim(){const{disabled:t,loading:e}=this,a=i("slot",null);return[e||t?i("calcite-scrim",{loading:e}):null,a]}renderIcon(){const{el:t,status:e}=this,a=this.loading&&!this.open,n=a?W.refresh:W[e],o=r(t,N)||n,s=n?i("calcite-icon",{class:{[z]:!0,[L]:"valid"==e,[U]:"invalid"==e,[q]:a},icon:n,scale:"m"}):i("slot",{key:"icon-slot",name:N});return o?i("div",{class:D},s):null}renderTitle(){const{heading:t,headingLevel:e,summary:a}=this;return t||a?i("div",{class:H},i(o,{class:S,level:e||4},t),a?i("div",{class:C},a):null):null}render(){const{collapsible:t,disabled:e,el:a,intlCollapse:o,intlExpand:s,loading:c,open:l,intlLoading:m}=this,d=l?o||A:s||O,p=i("header",{class:T},this.renderIcon(),this.renderTitle()),u=!!r(a,F),g=!!r(a,P),f=l?W.opened:W.closed,h=i("div",{class:j},this.dragHandle?i("calcite-handle",null):null,t?i("button",{"aria-expanded":t?l.toString():null,"aria-label":d,class:_,onClick:this.onHeaderClick,title:d},p,u||g?null:i("calcite-icon",{"aria-hidden":"true",class:E,icon:f,scale:"s"})):p,c?i("calcite-loader",{inline:!0,"is-active":!0,label:m}):u?i("div",{class:B},i("slot",{name:F})):null,g?i("calcite-action-menu",{label:this.intlOptions||K},i("slot",{name:P})):null);return i(n,{tabIndex:e?-1:null},i("article",{"aria-busy":c.toString(),class:{[y]:!0}},h,i("div",{class:v,hidden:!l},this.renderScrim())))}get el(){return this}static get style(){return'@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-direction:column;flex-direction:column;border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-align:center;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.summary{margin-top:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{-webkit-margin-start:0.75rem;margin-inline-start:0.75rem;-webkit-margin-end:0px;margin-inline-end:0px;margin-block:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.toggle-icon{margin-top:0.75rem;margin-bottom:0.75rem;-ms-flex-item-align:center;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:1rem;margin-inline-end:1rem;-webkit-margin-start:auto;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{position:relative}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{-webkit-animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}.control-container{margin:0px;display:-ms-flexbox;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}'}};function G(){if("undefined"==typeof customElements)return;["calcite-block","calcite-action","calcite-action-menu","calcite-handle","calcite-icon","calcite-loader","calcite-popover","calcite-scrim","calcite-tooltip-manager"].forEach((t=>{switch(t){case"calcite-block":customElements.get(t)||customElements.define(t,M);break;case"calcite-action":customElements.get(t)||m();break;case"calcite-action-menu":customElements.get(t)||d();break;case"calcite-handle":customElements.get(t)||x();break;case"calcite-icon":customElements.get(t)||p();break;case"calcite-loader":customElements.get(t)||u();break;case"calcite-popover":customElements.get(t)||s();break;case"calcite-scrim":customElements.get(t)||g();break;case"calcite-tooltip-manager":customElements.get(t)||f()}}))}M=a(M,[1,"calcite-block",{collapsible:[4],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[2,"heading-level"],intlCollapse:[1,"intl-collapse"],intlExpand:[1,"intl-expand"],intlLoading:[1,"intl-loading"],intlOptions:[1,"intl-options"],loading:[516],open:[1540],status:[513],summary:[1]}]),G();const J=M,Q=G;export{J as CalciteBlock,Q as defineCustomElement};