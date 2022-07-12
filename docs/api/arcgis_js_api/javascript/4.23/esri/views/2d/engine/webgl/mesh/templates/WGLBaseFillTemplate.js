// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../layers/graphics/featureConversionUtils ../../enums ../../number ../../materialKey/MaterialKey ./templateUtils ./WGLLineTemplate".split(" "),function(t,p,q,u,v,w,m,x){return y=>function(r){function n(...a){a=r.call(this,...a)||this;a.forceLibtess=!1;a._bitset=0;a._lineTemplate=null;a.geometryType=u.WGLGeometryType.FILL;return a}t._inheritsLoose(n,r);var g=n.prototype;g._maybeAddLineTemplate=function(a){this._lineTemplate=
x.fromFillOutline(a)};g._write=function(a,b,d,c){d="esriGeometryPoint"===b.geometryType;const e=w.FillMaterialKey.load(this._materialKey);a.recordStart(b.getDisplayId(),this._materialKey,this.geometryType,d);this._writeGeometry(a,b,e,c,d);e.outlinedFill&&p.isSome(this._lineTemplate)&&this._lineTemplate.writeGeometry(a,b,c,d);a.recordEnd()};g._writeGeometry=function(a,b,d,c,e){c=this._getGeometry(b,c,e);p.isNone(c)||(e=[],100<c.maxLength||this.forceLibtess||!m.triangulate(e,c)?(c=m.triangulateLibtess(c),
this._writeVertices(a,b,c,[c.length/2],d)):e.length&&this._writeVertices(a,b,c.coords,c.lengths,d,e))};g._writeVertex=function(a,b,d,c,e,f){const h=v.i1616to32(1*c,1*e);a.vertexBounds(c,e,0,0);a.vertexWrite(h);a.vertexWrite(b);d.dotDensity?a.vertexWriteF32(1/Math.abs(f.readGeometryArea())):(a.vertexWrite(this.fillColor),d.simple||(a.vertexWrite(this.tl),a.vertexWrite(this.br)),a.vertexWrite(this.aux2),a.vertexWrite(this.aux3),d.simple||a.vertexWrite(this._minMaxZoom))};g._writeVertices=function(a,
b,d,c,e,f){var h=b.getDisplayId();h|=this._bitset<<24;var k=c.reduce((l,z)=>l+z);const A=e.dotDensity?4:10;c=a.vertexCount();a.vertexEnsureSize(A*k);k=0;if(f)for(const l of f)this._writeVertex(a,h,e,d[2*l],d[2*l+1],b),k++;else for(f=0;f<d.length;f+=2)this._writeVertex(a,h,e,Math.round(d[f]),Math.round(d[f+1]),b),k++;a.indexEnsureSize(k);for(b=0;b<k;b++)a.indexWrite(b+c)};g._getGeometry=function(a,b,d){return(a=b?q.deltaDecodeGeometry(q.convertFromGeometry(b),2):a.readGeometryForDisplay())?m.clipMarshall(a,
d?256:8):null};return n}(y)});