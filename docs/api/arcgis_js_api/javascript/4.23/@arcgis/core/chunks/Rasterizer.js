/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{b as e,s as a,a as r,R as t}from"./CIMSymbolHelper.js";import{g as i,c as n}from"./cimAnalyzer.js";import{r as s}from"./utils7.js";class o{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(s,o,m){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===s.type||"esriSFS"===s.type){const[a,r,t]=e.rasterizeSimpleFill(this._rasterizationCanvas,s.style,o);return{size:[r,t],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===s.type||"esriSLS"===s.type||"line"===s.type&&s.dashTemplate){let r,t;if("simple-line"===s.type||"esriSLS"===s.type)switch(r=a(s.style,s.cap),s.cap){case"butt":t="Butt";break;case"square":t="Square";break;default:t="Round"}else r=s.dashTemplate,t=s.cim.capStyle;const[i,n,o]=e.rasterizeSimpleLine(r,t);return{size:[n,o],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let l,c,f;if("simple-marker"===s.type||"esriSMS"===s.type||"line-marker"===s.type?(l=r.fromSimpleMarker(s),f=i(l)):s.cim&&"CIMHatchFill"===s.cim.type?(l=r.fromCIMHatchFill(s.cim),c=new t(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):s.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===s.cim.markerPlacement.type?(l=r.fromCIMInsidePolygon(s.cim),c=new t(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):(l=s.cim,f=i(l)),f&&!m){const[e,a,r]=n(f);return e?{size:[a,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[h,p,u,y,d]=r.rasterize(this._rasterizationCanvas,l,c,this._resourceManager,!m);return h?{size:[p,u],image:new Uint32Array(h.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:d}:null}rasterizeImageResource(e,a,r,t){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=a;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${a}px`),i.drawImage(r,0,0,e,a));const n=i.getImageData(0,0,e,a),o=new Uint8Array(n.data);if(t)for(const e of t)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[a,r,t,i]=e.oldColor,[n,s,m,l]=e.newColor;if(a===n&&r===s&&t===m&&i===l)continue;for(let e=0;e<o.length;e+=4)a===o[e]&&r===o[e+1]&&t===o[e+2]&&i===o[e+3]&&(o[e]=n,o[e+1]=s,o[e+2]=m,o[e+3]=l)}let m;for(let e=0;e<o.length;e+=4)m=o[e+3]/255,o[e]=o[e]*m,o[e+1]=o[e+1]*m,o[e+2]=o[e+2]*m;let l=o,c=e,f=a;const h=512;if(c>=h||f>=h){const r=c/f;r>1?(c=h,f=Math.round(h/r)):(f=h,c=Math.round(h*r)),l=new Uint8Array(4*c*f);const t=new Uint8ClampedArray(l.buffer);s(o,e,a,t,c,f,!1)}return{size:[c,f],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{o as R};