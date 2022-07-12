// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/restHelper","./Theme"],function(l,m,n,h,g){return function(){function e(a){this.themes=null;a=a.themeDictionary;var c=new Map,b;for(b in a)c.set(b,new g(a[b]));this.themes=c}e.prototype.getThemes=function(a){var c=[];this.themes.forEach(function(b){b.isBasemapSupported(a)&&c.push({name:b.name,label:b.label,description:b.description,basemaps:b.supportedBasemaps.slice()})});return c};e.prototype.filterSchemesByName=
function(a){var c=a.name;a=h(a,["name"]);if(c){var b=this.getSchemes(a);if(b){a=null;for(var d=0,b=[b.primaryScheme].concat(b.secondarySchemes);d<b.length;d++){var e=b[d];if(e.name.toLowerCase()===c.toLowerCase()){a=e;break}}return a}}};e.prototype.filterSchemesByTag=function(a){var c=a.includedTags,b=a.excludedTags;a=h(a,["includedTags","excludedTags"]);if(!c&&!b)return[];var d=this.getSchemes(a);if(!d)return[];var e=!(c&&c.length),g=!(b&&b.length),k=[];a=function(a){var d=e?!0:c.some(function(b){return-1<
a.tags.indexOf(b)}),f=!g&&b.some(function(b){return-1<a.tags.indexOf(b)});d&&!f&&k.push(a)};for(var f=0,d=[d.primaryScheme].concat(d.secondarySchemes);f<d.length;f++)a(d[f]);return k};e.prototype.getRawSchemes=function(a){var c=this.themes.get(a.theme);if(c)return c.getRawSchemes({basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme})};return e}()});