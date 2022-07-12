// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../geometry ../../../../core/maybe ../../../../geometry/support/triangulationUtils ./elevationAlignmentUtils ../../support/projectionUtils ../../terrain/OverlayRenderer ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Util".split(" "),function(w,d,x,m,h,n,t,u,v,p,g){function q(a,c,b){for(var k=[],e=0;e<a.length;e++){var f=a[e],g=f.index,f=f.count;if(!(1>=f)){var l=3*g,d=l+3*f;k.push({index:g,count:f,position:c.subarray(l,
d),mapPosition:b?b.subarray(l,d):void 0})}}return k}function r(a,c,b){for(var g=[],e=function(a,e,f,d){if(1>=e)return"continue";var k=3*a,h=k+3*e;f=f.map(function(b){return b-a});g.push({index:a,count:e,holeIndices:f,pathLengths:d,position:c.subarray(k,h),mapPosition:b?b.subarray(k,h):void 0})},f=0;f<a.length;f++){var d=a[f];e(d.index,d.count,d.holeIndices,d.pathLengths)}return g}Object.defineProperty(d,"__esModule",{value:!0});d.createColorGeometryData=function(a){var c={},b={};b[g.VertexAttrConstants.POSITION]=
{size:3,data:a.attributeData.position};c[g.VertexAttrConstants.POSITION]=a.indices;if(h.isSome(a.attributeData.color)){var d=new Uint32Array(a.indices.length);b[g.VertexAttrConstants.COLOR]={size:4,data:a.attributeData.color};c[g.VertexAttrConstants.COLOR]=d}h.isSome(a.attributeData.mapPosition)&&(b.mapPos={size:3,data:a.attributeData.mapPosition},c.mapPos=a.indices);return new p.GeometryData(b,c)};d.createWaterGeometryData=function(a){var c={},b={};b[g.VertexAttrConstants.POSITION]={size:3,data:a.attributeData.position};
c[g.VertexAttrConstants.POSITION]=a.indices;b[g.VertexAttrConstants.UV0]={size:2,data:a.attributeData.uv0};c[g.VertexAttrConstants.UV0]=a.indices;h.isSome(a.attributeData.mapPosition)&&(b.mapPos={size:3,data:a.attributeData.mapPosition},c.mapPos=a.indices);return new p.GeometryData(b,c)};d.geometryAsPolygon=function(a){switch(a.type){case "extent":if(a instanceof m.Extent)return m.Polygon.fromExtent(a);break;case "polygon":return a}return null};d.geometryToRenderInfo=function(a,c,b,d){var e=n.pathsToTriangulationInfo(a.rings,
a.hasZ,1),f=new Float64Array(e.position.length);a=t.applyPerVertexElevationAlignment(e.position,a.spatialReference,0,f,0,e.position,0,e.position.length/3,c,b,d);c=null!=a;return{position:e.position,mapPosition:f,polygons:r(e.polygons,e.position,f),outlines:q(e.outlines,e.position,f),projectionSuccess:c,sampledElevation:a}};d.geometryToRenderInfoDraped=function(a,c){var b=n.pathsToTriangulationInfo(a.rings,!1,1);a=u.bufferToBuffer(b.position,a.spatialReference,0,b.position,c,0,b.position.length/3);
for(c=2;c<b.position.length;c+=3)b.position[c]=v.DRAPED_Z;return{position:b.position,polygons:r(b.polygons,b.position),outlines:q(b.outlines,b.position),projectionSuccess:a}}});