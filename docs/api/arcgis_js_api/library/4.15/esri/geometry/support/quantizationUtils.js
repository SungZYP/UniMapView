// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./jsonUtils"],function(L,e,t){function h(b,a){return Math.round((a-b.translate[0])/b.scale[0])}function p(b,a){return Math.round((b.translate[1]-a)/b.scale[1])}function v(b,a,c){for(var d=[],f,e,u,k,g=0;g<c.length;g++){var l=c[g];if(0<g){if(u=h(b,l[0]),k=p(b,l[1]),u!==f||k!==e)d.push(a(l,u-f,k-e)),f=u,e=k}else f=h(b,l[0]),e=p(b,l[1]),d.push(a(l,f,e))}return 0<d.length?d:null}function A(b,a,c,d){return v(b,c?d?q:g:d?g:r,a)}function B(b,a,c,d){var f=[];c=c?d?q:g:d?g:r;for(d=
0;d<a.length;d++){var e=v(b,c,a[d]);e&&3<=e.length&&f.push(e)}return f.length?f:null}function C(b,a,c,d){var f=[];c=c?d?q:g:d?g:r;for(d=0;d<a.length;d++){var e=v(b,c,a[d]);e&&2<=e.length&&f.push(e)}return f.length?f:null}function m(b,a){return a*b.scale[0]+b.translate[0]}function n(b,a){return b.translate[1]-a*b.scale[1]}function w(b,a,c){var d=Array(c.length);if(!c.length)return d;var f=b.scale,e=f[0],f=f[1],g=m(b,c[0][0]);b=n(b,c[0][1]);d[0]=a(c[0],g,b);for(var k=1;k<c.length;k++){var h=c[k],g=
g+h[0]*e;b-=h[1]*f;d[k]=a(h,g,b)}return d}function x(b,a,c){for(var d=Array(c.length),f=0;f<c.length;f++)d[f]=w(b,a,c[f]);return d}function D(b,a,c,d){return w(b,c?d?q:g:d?g:r,a)}function E(b,a,c,d){return x(b,c?d?q:g:d?g:r,a)}function F(b,a,c,d){return x(b,c?d?q:g:d?g:r,a)}function y(b,a,c){var d=c[0],f=d[0],d=d[1],e=Math.min(f,a[0]),g=Math.min(d,a[1]),k=Math.max(f,a[2]);a=Math.max(d,a[3]);for(var h=1;h<c.length;h++){var l=c[h],m=l[0],l=l[1],f=f+m,d=d+l;0>m&&(e=Math.min(e,f));0<m&&(k=Math.max(k,
f));0>l?g=Math.min(g,d):0<l&&(a=Math.max(a,d))}b[0]=e;b[1]=g;b[2]=k;b[3]=a;return b}function z(b,a){if(!a.length)return null;b[0]=b[1]=Number.POSITIVE_INFINITY;b[2]=b[3]=Number.NEGATIVE_INFINITY;for(var c=0;c<a.length;c++)y(b,b,a[c]);return b}function G(b,a,c,d,f){a.xmin=h(b,c.xmin);a.ymin=p(b,c.ymin);a.xmax=h(b,c.xmax);a.ymax=p(b,c.ymax);a!==c&&(d&&(a.zmin=c.zmin,a.zmax=c.zmax),f&&(a.mmin=c.mmin,a.mmax=c.mmax));return a}function H(b,a,c,d,f){a.points=A(b,c.points,d,f);return a}function I(b,a,c,d,
f){a.x=h(b,c.x);a.y=p(b,c.y);a!==c&&(d&&(a.z=c.z),f&&(a.m=c.m));return a}function J(b,a,c,d,f){b=B(b,c.rings,d,f);if(!b)return null;a.rings=b;return a}function K(b,a,c,d,f){b=C(b,c.paths,d,f);if(!b)return null;a.paths=b;return a}Object.defineProperty(e,"__esModule",{value:!0});var r=function(b,a,c){return[a,c]},g=function(b,a,c){return[a,c,b[2]]},q=function(b,a,c){return[a,c,b[2],b[3]]};e.toQuantizationTransform=function(b){return b?{originPosition:"upper-left"===b.originPosition?"upperLeft":"lower-left"===
b.originPosition?"lowerLeft":b.originPosition,scale:[b.tolerance,b.tolerance],translate:[b.extent.xmin,b.extent.ymax]}:null};e.equals=function(b,a){if(b===a||null==b&&null==a)return!0;if(null==b||null==a)return!1;var c,d,f,e;b&&"upperLeft"===b.originPosition?(c=b.translate[0],d=b.translate[1],b=b.scale[0]):(c=b.extent.xmin,d=b.extent.ymax,b=b.tolerance);a&&"upperLeft"===a.originPosition?(f=a.translate[0],e=a.translate[1],a=a.scale[0]):(f=a.extent.xmin,e=a.extent.ymax,a=a.tolerance);return c===f&&
d===e&&b===a};e.quantizeX=h;e.quantizeY=p;e.quantizeBounds=function(b,a,c){a[0]=h(b,c[0]);a[3]=p(b,c[1]);a[2]=h(b,c[2]);a[1]=p(b,c[3]);return a};e.quantizePoints=A;e.quantizeRings=B;e.quantizePaths=C;e.hydrateX=m;e.hydrateY=n;e.hydrateCoordsArray=w;e.hydrateCoordsArrayArray=x;e.hydrateBounds=function(b,a,c){return c?(a[0]=m(b,c[0]),a[1]=n(b,c[3]),a[2]=m(b,c[2]),a[3]=n(b,c[1]),a):[m(b,a[0]),n(b,a[3]),m(b,a[2]),n(b,a[1])]};e.hydratePoints=D;e.hydratePaths=E;e.hydrateRings=F;e.getQuantizedBoundsCoordsArray=
y;e.getQuantizedBoundsCoordsArrayArray=z;e.getQuantizedBoundsPoints=function(b){var a=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return y(a,a,b)};e.getQuantizedBoundsPaths=function(b){return z([0,0,0,0],b)};e.getQuantizedBoundsRings=function(b){return z([0,0,0,0],b)};e.quantizeExtent=G;e.quantizeMultipoint=H;e.quantizePoint=I;e.quantizePolygon=J;e.quantizePolyline=K;e.quantizeGeometry=function(b,a){return b&&a?t.isPoint(a)?I(b,{},a,!1,!1):
t.isPolyline(a)?K(b,{},a,!1,!1):t.isPolygon(a)?J(b,{},a,!1,!1):t.isMultipoint(a)?H(b,{},a,!1,!1):t.isExtent(a)?G(b,{},a,!1,!1):null:null};e.hydrateExtent=function(b,a,c,d,e){a.xmin=m(b,c.xmin);a.ymin=n(b,c.ymin);a.xmax=m(b,c.xmax);a.ymax=n(b,c.ymax);a!==c&&(d&&(a.zmin=c.zmin,a.zmax=c.zmax),e&&(a.mmin=c.mmin,a.mmax=c.mmax));return a};e.hydrateMultipoint=function(b,a,c,d,e){a.points=D(b,c.points,d,e);return a};e.hydratePoint=function(b,a,c,d,e){a.x=m(b,c.x);a.y=n(b,c.y);a!==c&&(d&&(a.z=c.z),e&&(a.m=
c.m));return a};e.hydratePolygon=function(b,a,c,d,e){a.rings=F(b,c.rings,d,e);return a};e.hydratePolyline=function(b,a,c,d,e){a.paths=E(b,c.paths,d,e);return a}});