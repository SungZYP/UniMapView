// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../definitions ../../enums ../../number ../../TurboLine ../../materialKey/MaterialKey ./templateUtils".split(" "),function(v,r,w,x,m,y,q,z){const A=(c,n,l)=>(h,a,b,f,d,e,k,g,p,t,u)=>{b=m.i1616to32(u,Math.ceil(16*c._halfWidth));k=m.i8888to32(Math.round(16*k),Math.round(16*g),Math.round(16*p),Math.round(16*t));d=m.i8888to32(16*d,16*e,0,c._bitset);e=c.out;e.vertexBounds(h,a,n,l);e.vertexWrite(m.i1616to32(8*h,8*
a));e.vertexWrite(c.id);e.vertexWrite(c._fillColor);e.vertexWrite(k);e.vertexWrite(b);e.vertexWrite(c._tl);e.vertexWrite(c._br);e.vertexWrite(d);e.vertexWrite(m.i1616to32(Math.ceil(16*c._halfReferenceWidth),0));e.vertexWrite(c.minMaxZoom);e.vertexEnd();return c.offset+c.vertexCount++},B=(c,n,l)=>(h,a,b,f,d,e,k,g,p,t,u)=>{b=m.i8888to32(0,0,16*c._halfWidth,16*c._halfReferenceWidth);k=m.i8888to32(16*k+128,16*g+128,16*p+128,16*t+128);g=c.out;p=c._bitset<<24|c.id;g.vertexBounds(h,a,n,l);g.vertexWrite(m.i1616to32(8*
h,8*a));g.vertexWrite(p);g.vertexWrite(c._fillColor);c.key.simple||(g.vertexWrite(0),g.vertexWrite(0));g.vertexWrite(b);g.vertexWrite(k);c.key.simple||g.vertexWrite(c.minMaxZoom);g.vertexEnd();return c.offset+c.vertexCount++},C=c=>(n,l,h)=>{const a=c.out;a.indexWrite(n);a.indexWrite(l);a.indexWrite(h);c.indexCount+=3};return c=>function(n){function l(...a){a=n.call(this,...a)||this;a.tessellationProperties={};a._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0};a.geometryType=x.WGLGeometryType.LINE;
return a}v._inheritsLoose(l,n);var h=l.prototype;h.writeGeometry=function(a,b,f,d){this._writeGeometry(a,b,f,d)};h._initializeTessellator=function(a){var b=q.LineMaterialKey.load(this._materialKey);const f=q.FillMaterialKey.load(this._materialKey);var d=this._tessellationOptions;b=b.vvSizeFieldStops||b.vvSizeMinMaxValue||b.vvSizeScaleStops||b.vvSizeUnitValue;a=this.tessellationProperties._halfWidth<w.THIN_LINE_HALF_WIDTH_THRESHOLD&&!a&&!b;this.tessellationProperties.minMaxZoom=this._minMaxZoom;d.wrapDistance=
65535;d.textured=this._isDashed||this._hasPattern;d.offset=this.tessellationProperties.offset;d.halfWidth=this.tessellationProperties._halfWidth;d=a?0:1;this._lineTessellator=new y.LineTessellation((f.outlinedFill?B:A)(this.tessellationProperties,d,d),C(this.tessellationProperties),a)};h._write=function(a,b,f,d){f="esriGeometryPoint"===b.geometryType;a.recordStart(b.getDisplayId(),this._materialKey,this.geometryType,f);this._writeGeometry(a,b,d,f);a.recordEnd()};h._writeGeometry=function(a,b,f,d){f=
null!=f?f:b.readLegacyGeometryForDisplay();d=this._getLines(f,d);r.isNone(d)||this._writeVertices(a,b,d)};h._getLines=function(a,b){if(r.isNone(a))return null;a=a.paths||a.rings;return r.isNone(a)?null:z.clipLinesMarshall(a,b?256:16)};h._writeVertices=function(a,b,f){const d=b.getDisplayId(),e=a.vertexCount(),k=this.tessellationProperties;b=this._tessellationOptions;k.out=a;k.id=d;k.indexCount=0;k.vertexCount=0;k.offset=e;b.capType=this._capType;b.joinType=this._joinType;a=q.FillMaterialKey.load(this._materialKey);
this.tessellationProperties.key=a.outlinedFill?a:q.LineMaterialKey.load(this._materialKey);for(const {line:g,start:p}of f)b.initialDistance=p%65535,this._lineTessellator.tessellate(g,b)};return l}(c)});