// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/mat3f64 ../../../../../core/libs/gl-matrix-2/vec2f64 ../../../../../core/libs/gl-matrix-2/vec4f64 ../../../support/geometryUtils ../shaderLibrary/attributes/VertexPosition.glsl".split(" "),function(a,b,f,e,g,c,d){Object.defineProperty(b,"__esModule",{value:!0});a=function(){return function(){this.identifier=0;this.integratedMesh=this.transparent=!1;this.viewTransform=new d.VertexPosition.ViewProjectionTransform;this.transformNormal_ViewFromGlobal=
f.mat3f64.create();this.cameraNearFar=e.vec2f64.create();this.slicePlane=c.boundedPlane.create();this.shadowsEnabled=this.ambientOcclusionEnabled=this.slicePlaneEnabled=!0;this.sceneHasOcludees=!1}}();b.MaterialPassesParameters=a;a=function(){return function(){this.identifier=1;this.viewTransform=new d.VertexPosition.ViewProjectionTransform;this.cameraNearFar=e.vec2f64.create();this.slicePlane=c.boundedPlane.create()}}();b.ShadowMapPassParameters=a;a=function(){return function(){this.identifier=2;
this.viewTransform=new d.VertexPosition.ViewProjectionTransform;this.slicePlane=c.boundedPlane.create();this.viewport=g.vec4f64.create()}}();b.HighlightPassParameters=a});