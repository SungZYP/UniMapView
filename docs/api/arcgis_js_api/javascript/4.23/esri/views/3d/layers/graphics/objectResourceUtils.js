// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/devEnvironmentUtils ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/buffer/BufferView ../../../../chunks/vec32 ../../../../chunks/vec42 ../../../../geometry/support/buffer/utils ../../glTF/DefaultLoadingContext ../../glTF/loader ../../glTF/internal/indexUtils ./wosrLoader ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Texture ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/DefaultMaterial_COLOR_GAMMA ../../../webgl/enums ../../../../chunks/vec22 ../../../../chunks/vec43 ../../../../chunks/vec33".split(" "),
function(I,W,X,d,S,Y,Z,aa,x,M,N,q,J,O,D,ba,ca,P,T,A,da,F,u,ea,E,Q,fa,U,ha){function R(){R=W._asyncToGenerator(function*(c,e){var m=V(X.adjustStaticAGOUrl(c));if("wosr"===m.fileType)return c=yield e.cache?e.cache.loadWOSR(m.url,e):T.load(m.url,e),m=T.processLoadResult(c,e),{lods:[m],referenceBoundingBox:m.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:c.remove};c=yield e.cache?e.cache.loadGLTF(m.url,e,e.usePBR):ca.load(new ba.DefaultLoadingContext(e.streamDataRequester),m.url,e,e.usePBR);var v=
d.get(c.model.meta,"ESRI_proxyEllipsoid");if(c.meta.isEsriSymbolResource&&d.isSome(v)&&-1!==c.meta.uri.indexOf("/RealisticTrees/"))a:for(var n=0;n<c.model.lods.length;++n){var y=c.model.lods[n];c.customMeta.esriTreeRendering=!0;for(var r of y.parts){y=r.attributes.normal;if(d.isNone(y))break a;const h=r.attributes.position,B=h.count,G=M.create(),l=M.create(),a=M.create(),t=D.createBuffer(q.BufferViewVec4u8,B),b=D.createBuffer(q.BufferViewVec3f,B),z=Z.invert(aa.create(),r.transform);for(let f=0;f<
B;f++){h.getVec(f,l);y.getVec(f,G);x.transformMat4(l,l,r.transform);x.subtract(a,l,v.center);x.divide(a,a,v.radius);const p=a[2];var w=x.length(a);w=Math.min(.45+.55*w*w,1);x.divide(a,a,v.radius);x.transformMat4(a,a,z);x.normalize(a,a);n+1!==c.model.lods.length&&1<c.model.lods.length&&(-1<p?x.lerp(a,a,G,.2):x.lerp(a,a,G,Math.min(-4*p-3.8,1)));b.setVec(f,a);t.set(f,0,255*w);t.set(f,1,255*w);t.set(f,2,255*w);t.set(f,3,255)}r.attributes.normal=b;r.attributes.color=t}}r=c.meta.isEsriSymbolResource?{usePBR:e.usePBR,
isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]};e={...e.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=m.specifiedLodIndex)return v=K(c,r,e,m.specifiedLodIndex),n=v[0].boundingBox,0!==m.specifiedLodIndex&&(n=K(c,r,e,0)[0].boundingBox),{lods:v,referenceBoundingBox:n,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove};m=K(c,r,e);return{lods:m,referenceBoundingBox:m[0].boundingBox,
isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}});return R.apply(this,arguments)}function V(c){const e=c.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:null!=e[4]?Number(e[4]):null}:c.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:c,specifiedLodIndex:null}:{fileType:"unknown",url:c,specifiedLodIndex:null}}function K(c,e,m,v){const n=c.model,y=Y.create(),r=[],w=new Map,h=new Map;n.lods.forEach((B,G)=>{if(void 0===v||
G===v){var l={name:B.name,stageResources:{textures:[],materials:[],geometries:[]},lodThreshold:d.isSome(B.lodThreshold)?B.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:N.empty()};r.push(l);B.parts.forEach(a=>{var t=a.material+(a.attributes.normal?"_normal":"")+(a.attributes.color?"_color":"")+(a.attributes.texCoord0?"_texCoord0":"")+(a.attributes.tangent?"_tangent":"");const b=n.materials.get(a.material),z=d.isSome(a.attributes.texCoord0);var f=d.isSome(a.attributes.normal);
a:{switch(b.alphaMode){case "BLEND":var p=A.AlphaDiscardMode.Blend;break a;case "MASK":p=A.AlphaDiscardMode.Mask;break a;case "OPAQUE":case null:case void 0:p=A.AlphaDiscardMode.Opaque;break a}p=void 0}if(!w.has(t)){if(z){if(d.isSome(b.textureColor)&&!h.has(b.textureColor)){var g=n.textures.get(b.textureColor);h.set(b.textureColor,new F.Texture(g.data,{...g.parameters,preMultiplyAlpha:p!==A.AlphaDiscardMode.Opaque}))}d.isSome(b.textureNormal)&&!h.has(b.textureNormal)&&(g=n.textures.get(b.textureNormal),
h.set(b.textureNormal,new F.Texture(g.data,g.parameters)));d.isSome(b.textureOcclusion)&&!h.has(b.textureOcclusion)&&(g=n.textures.get(b.textureOcclusion),h.set(b.textureOcclusion,new F.Texture(g.data,g.parameters)));d.isSome(b.textureEmissive)&&!h.has(b.textureEmissive)&&(g=n.textures.get(b.textureEmissive),h.set(b.textureEmissive,new F.Texture(g.data,g.parameters)));d.isSome(b.textureMetallicRoughness)&&!h.has(b.textureMetallicRoughness)&&(g=n.textures.get(b.textureMetallicRoughness),h.set(b.textureMetallicRoughness,
new F.Texture(g.data,g.parameters)))}g=b.color[0]**(1/E.COLOR_GAMMA);var C=b.color[1]**(1/E.COLOR_GAMMA),k=b.color[2]**(1/E.COLOR_GAMMA),H=b.emissiveFactor[0]**(1/E.COLOR_GAMMA);const ia=b.emissiveFactor[1]**(1/E.COLOR_GAMMA),ja=b.emissiveFactor[2]**(1/E.COLOR_GAMMA),L=d.isSome(b.textureColor)&&z?h.get(b.textureColor):null;w.set(t,new ea.DefaultMaterial({...e,transparent:p===A.AlphaDiscardMode.Blend,customDepthTest:A.DepthTestFunction.Lequal,textureAlphaMode:p,textureAlphaCutoff:b.alphaCutoff,diffuse:[g,
C,k],ambient:[g,C,k],opacity:b.opacity,doubleSided:b.doubleSided,doubleSidedType:"winding-order",cullFace:b.doubleSided?A.CullFaceOptions.None:A.CullFaceOptions.Back,vertexColors:!!a.attributes.color,vertexTangents:!!a.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:d.isSome(L)?L.id:void 0,colorMixMode:b.colorMixMode,normalTextureId:d.isSome(b.textureNormal)&&z?h.get(b.textureNormal).id:void 0,textureAlphaPremultiplied:d.isSome(L)&&
!!L.params.preMultiplyAlpha,occlusionTextureId:d.isSome(b.textureOcclusion)&&z?h.get(b.textureOcclusion).id:void 0,emissiveTextureId:d.isSome(b.textureEmissive)&&z?h.get(b.textureEmissive).id:void 0,metallicRoughnessTextureId:d.isSome(b.textureMetallicRoughness)&&z?h.get(b.textureMetallicRoughness).id:void 0,emissiveFactor:[H,ia,ja],mrrFactors:[b.metallicFactor,b.roughnessFactor,e.mrrFactors[2]],isSchematic:!1,...m}))}a:{f=a.indices||a.attributes.position.count;switch(a.primitiveType){case Q.PrimitiveType.TRIANGLES:f=
P.trianglesToTriangles(f);break a;case Q.PrimitiveType.TRIANGLE_STRIP:f=P.triangleStripToTriangles(f);break a;case Q.PrimitiveType.TRIANGLE_FAN:f=P.triangleFanToTriangles(f);break a}f=void 0}p=f;f=a.attributes.position.count;g=D.createBuffer(q.BufferViewVec3f,f);J.transformMat4(g,a.attributes.position,a.transform);g=[[u.VertexAttribute.POSITION,{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]];C=[[u.VertexAttribute.POSITION,p]];d.isSome(a.attributes.normal)&&(k=D.createBuffer(q.BufferViewVec3f,
f),S.normalFromMat4(y,a.transform),J.transformMat3(k,a.attributes.normal,y),g.push([u.VertexAttribute.NORMAL,{data:k.typedBuffer,size:k.elementCount,exclusive:!0}]),C.push([u.VertexAttribute.NORMAL,p]));d.isSome(a.attributes.tangent)&&(k=D.createBuffer(q.BufferViewVec4f,f),S.normalFromMat4(y,a.transform),O.transformMat3(k,a.attributes.tangent,y),g.push([u.VertexAttribute.TANGENT,{data:k.typedBuffer,size:k.elementCount,exclusive:!0}]),C.push([u.VertexAttribute.TANGENT,p]));d.isSome(a.attributes.texCoord0)&&
(k=D.createBuffer(q.BufferViewVec2f,f),fa.normalizeIntegerBuffer(k,a.attributes.texCoord0),g.push([u.VertexAttribute.UV0,{data:k.typedBuffer,size:k.elementCount,exclusive:!0}]),C.push([u.VertexAttribute.UV0,p]));d.isSome(a.attributes.color)&&(k=D.createBuffer(q.BufferViewVec4u8,f),4===a.attributes.color.elementCount?a.attributes.color instanceof q.BufferViewVec4f?O.scale(k,a.attributes.color,255):a.attributes.color instanceof q.BufferViewVec4u8?U.copy(k,a.attributes.color):a.attributes.color instanceof
q.BufferViewVec4u16&&O.scale(k,a.attributes.color,1/256):(U.fill(k,255,255,255,255),H=new q.BufferViewVec3u8(k.buffer,0,4),a.attributes.color instanceof q.BufferViewVec3f?J.scale(H,a.attributes.color,255):a.attributes.color instanceof q.BufferViewVec3u8?ha.copy(H,a.attributes.color):a.attributes.color instanceof q.BufferViewVec3u16&&J.scale(H,a.attributes.color,1/256)),g.push([u.VertexAttribute.COLOR,{data:k.typedBuffer,size:k.elementCount,exclusive:!0}]),C.push([u.VertexAttribute.COLOR,p]));a=new da.Geometry(g,
C);l.stageResources.geometries.push(a);l.stageResources.materials.push(w.get(t));z&&(d.isSome(b.textureColor)&&l.stageResources.textures.push(h.get(b.textureColor)),d.isSome(b.textureNormal)&&l.stageResources.textures.push(h.get(b.textureNormal)),d.isSome(b.textureOcclusion)&&l.stageResources.textures.push(h.get(b.textureOcclusion)),d.isSome(b.textureEmissive)&&l.stageResources.textures.push(h.get(b.textureEmissive)),d.isSome(b.textureMetallicRoughness)&&l.stageResources.textures.push(h.get(b.textureMetallicRoughness)));
l.numberOfVertices+=f;t=a.boundingInfo;d.isSome(t)&&(N.expandWithVec3(l.boundingBox,t.getBBMin()),N.expandWithVec3(l.boundingBox,t.getBBMax()))})}});return r}I.fetch=function(c,e){return R.apply(this,arguments)};I.gltfToEngineResources=K;I.parseUrl=V;Object.defineProperty(I,"__esModule",{value:!0})});