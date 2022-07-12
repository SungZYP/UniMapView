// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f32 ./Object3DVisualElement ../../layers/graphics/lineUtils ../../webgl-engine/lib/Material ../../webgl-engine/materials/RibbonLineMaterial".split(" "),function(u,v,h,w,A,l,k,p,r,t,x,B,C){t=function(y){function q(a){var b=y.call(this,a)||this;b._renderOccluded=B.RenderOccludedFlag.OccludeAndTransparent;
b._width=1;b._color=r.fromValues(1,0,1,1);b._innerWidth=1;b._innerColor=null;b._stipplePattern=null;b._stippleOffColor=null;b._stipplePreferContinuous=!0;b._writeDepthEnabled=!0;b._falloff=0;b._polygonOffset=!1;b.applyProps(a);return b}v._inheritsLoose(q,y);var f=q.prototype;f.setGeometryFromRenderSpacePoint=function(a){const b=[];b.push([[a[0]-1E3,a[1]+0,a[2]+0],[a[0]+1E3,a[1]+0,a[2]+0]]);b.push([[a[0]-0,a[1]-1E3,a[2]+0],[a[0]+0,a[1]+1E3,a[2]+0]]);b.push([[a[0]-0,a[1]+0,a[2]-1E3],[a[0]+0,a[1]+0,
a[2]+1E3]]);this.geometry=b};f.setGeometryFromExtent=function(a){const b=this.view.spatialReference,d=k.create(),c=k.create(),e=[];l.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);l.set(d,a[2],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);l.set(d,a[2],a[3],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);l.set(d,a[0],a[3],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);
e.push([c[0],c[1],c[2]]);l.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);l.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);this.geometry=[e]};f.setGeometryFromFrustum=function(a){const b=[];a.lines.forEach(d=>{b.push([d.origin[0],d.origin[1],d.origin[2]]);b.push([d.endpoint[0],d.endpoint[1],d.endpoint[2]])});this.geometry=[b]};f.setGeometryFromBoundedPlane=function(a){const b=[],d=a.origin,c=a.basis1;
a=a.basis2;const e=k.create(),g=k.create(),m=k.create(),n=k.create();e[0]=d[0]-.5*c[0]-.5*a[0];e[1]=d[1]-.5*c[1]-.5*a[1];e[2]=d[2]-.5*c[2]-.5*a[2];g[0]=d[0]-.5*c[0]+.5*a[0];g[1]=d[1]-.5*c[1]+.5*a[1];g[2]=d[2]-.5*c[2]+.5*a[2];m[0]=d[0]+.5*c[0]+.5*a[0];m[1]=d[1]+.5*c[1]+.5*a[1];m[2]=d[2]+.5*c[2]+.5*a[2];n[0]=d[0]+.5*c[0]-.5*a[0];n[1]=d[1]+.5*c[1]-.5*a[1];n[2]=d[2]+.5*c[2]-.5*a[2];b.push([e[0],e[1],e[2]]);b.push([g[0],g[1],g[2]]);b.push([m[0],m[1],m[2]]);b.push([n[0],n[1],n[2]]);b.push([e[0],e[1],e[2]]);
this.geometry=[b]};f.setGeometryFromSegment=function(a){const b=a.endRenderSpace;this.transform=w.fromTranslation(z,b);({points:a}=a.createRenderGeometry(b,this.view.renderCoordsHelper));this.geometry=[a]};f.setGeometryFromSegments=function(a,b=k.ZEROS){this.transform=w.fromTranslation(z,b);this.geometry=a.map(d=>d.createRenderGeometry(b,this.view.renderCoordsHelper).points)};f.createExternalResources=function(){this._material=new C.RibbonLineMaterial(this.materialParameters)};f.destroyExternalResources=
function(){this._material=null};f.createGeometries=function(a){const b=this._createLineGeometries();if(0!==b.length)for(let d=0;d<b.length;++d){const c=x.createGeometry(b[d]);a.addGeometry(c,this._material)}};f.forEachExternalMaterial=function(a){a(this._material)};f._updateMaterial=function(){this.attached&&this._material.setParameters(this.materialParameters)};f._createLineGeometries=function(){const a=this.geometry;if(h.isNone(a)||0===a.length)return[];const b=[];a.forEach(d=>{const c=new Float64Array(3*
d.length);d.forEach((e,g)=>{c[3*g]=e[0];c[3*g+1]=e[1];c[3*g+2]=e[2]});b.push({overlayInfo:null,attributeData:{position:c},removeDuplicateStartEnd:x.RemoveDuplicateStartEnd.KEEP})});return b};v._createClass(q,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this.recreateGeometry()}},{key:"width",get:function(){return this._width},
set:function(a){a!==this._width&&(this._width=a,this._updateMaterial())}},{key:"color",get:function(){return this._color},set:function(a){p.exactEquals(a,this._color)||(p.copy(this._color,a),this._updateMaterial())}},{key:"innerWidth",get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this._updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(a){if(h.isSome(a)){if(h.isNone(this._innerColor)||!p.exactEquals(a,this._innerColor))this._innerColor=
p.copy(r.create(),a),this._updateMaterial()}else h.isSome(this._innerColor)&&(this._innerColor=null,this._updateMaterial())}},{key:"stipplePattern",get:function(){return this._stipplePattern},set:function(a){const b=h.isSome(a)!==h.isSome(this._stipplePattern);this._stipplePattern=a;b?this.recreate():this._updateMaterial()}},{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(a){if(h.isNone(a)||h.isNone(this._stippleOffColor)||!p.exactEquals(a,this._stippleOffColor))this._stippleOffColor=
h.isSome(a)?r.clone(a):null,this._updateMaterial()}},{key:"stipplePreferContinuous",get:function(){return this._stipplePreferContinuous},set:function(a){this._stipplePreferContinuous!==a&&(this._stipplePreferContinuous=a,this._updateMaterial())}},{key:"writeDepthEnabled",get:function(){return this._writeDepthEnabled},set:function(a){this._writeDepthEnabled!==a&&(this._writeDepthEnabled=a,this._updateMaterial())}},{key:"falloff",get:function(){return this._falloff},set:function(a){a!==this._falloff&&
(this._falloff=a,this._updateMaterial())}},{key:"polygonOffset",get:function(){return this._polygonOffset},set:function(a){a!==this._polygonOffset&&(this._polygonOffset=a,this._updateMaterial())}},{key:"materialParameters",get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,polygonOffset:this._polygonOffset,
renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}}]);return q}(t.Object3DVisualElement);const z=A.create();u.LineVisualElement=t;Object.defineProperty(u,"__esModule",{value:!0})});