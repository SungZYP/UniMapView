// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../request"],function(e,c){e.serviceRequest=function(a,b,f,g,h=null){if(null!==h)return h.getToken().then(d=>{a=a+="?token\x3d"+d;if("get"===g.toLowerCase())return c(a,{responseType:"json",query:b});if(b)for(const k in b)a=-1<a.indexOf("?")?a+"\x26":a+"?",a+=encodeURIComponent(k)+"\x3d"+encodeURIComponent(b[k]);return c(a,{method:"post",query:f,responseType:"json"})});if("get"===g.toLowerCase())return c(a,{responseType:"json",query:b});if(b)for(const d in b)a=-1<a.indexOf("?")?
a+"\x26":a+"?",a+=encodeURIComponent(d)+"\x3d"+encodeURIComponent(b[d]);return c(a,{method:"post",responseType:"json",query:f})};Object.defineProperty(e,"__esModule",{value:!0})});