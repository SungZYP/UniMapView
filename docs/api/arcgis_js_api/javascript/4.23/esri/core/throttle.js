// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){g.throttle=function(m,a,h,d){let e=null,c=1E3;"number"===typeof a?(c=a,d=h):(e=null!=a?a:null,c=h);let b=0,k;const f=()=>{b=0;m.apply(d,k)};a=(...l)=>{e&&e.apply(d,l);k=l;c?b||(b=setTimeout(f,c)):f()};a.remove=()=>{b&&(clearTimeout(b),b=0)};a.forceUpdate=()=>{b&&(clearTimeout(b),f())};a.hasPendingUpdates=()=>!!b;return a};Object.defineProperty(g,"__esModule",{value:!0})});