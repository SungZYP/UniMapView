// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../layers/support/TileInfo"],function(n,d,k){Object.defineProperty(d,"__esModule",{value:!0});d.areSchemasOverlapping=function(a,b){if(a===b)return!0;if(!a&&null!=b||null!=a&&!b||!a.spatialReference.equals(b.spatialReference)||a.dpi!==b.dpi)return!1;var c=a.origin,f=b.origin;if(1E-6<=Math.abs(c.x-f.x)||1E-6<=Math.abs(c.y-f.y))return!1;a.lods[0].scale>b.lods[0].scale?(c=a,a=b):c=b;for(b=c.lods[0].scale;b>=a.lods[a.lods.length-1].scale-1E-6;b/=2)if(1E-6>Math.abs(b-
a.lods[0].scale))return!0;return!1};d.unionTileInfos=function(a,b){if(a===b)return a;if(!a&&null!=b)return b;if(null!=a&&!b)return a;var c=a.size[0],f=a.format,d=a.dpi,l={x:a.origin.x,y:a.origin.y},m=a.spatialReference.toJSON(),e=a.lods[0].scale>b.lods[0].scale?a.lods[0]:b.lods[0];a=(a.lods[a.lods.length-1].scale<=b.lods[b.lods.length-1].scale?a.lods[a.lods.length-1]:b.lods[b.lods.length-1]).scale;b=[];for(var g=e.scale,e=e.resolution,h=0;g>a;)b.push({level:h,resolution:e,scale:g}),h++,g/=2,e/=2;
return new k({size:[c,c],dpi:d,format:f||"pbf",origin:l,lods:b,spatialReference:m})}});