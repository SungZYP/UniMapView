// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/compilerUtils ../../../../core/MapUtils ../../../../core/urlUtils ../../../../core/Version ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/quat ../../../../chunks/quatf64 ../../../../geometry/support/buffer/BufferView ../../../../chunks/scalar ./BinaryStreamReader ./enums ./fillDefaults ./pathUtils ../../../webgl/enums".split(" "),function(E,m,H,I,u,F,t,y,J,K,l,z,G,A,B,L,k){function M(f){switch(f.componentType){case k.DataType.BYTE:return new l.BufferViewVec2i8(f.raw,
f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case k.DataType.UNSIGNED_BYTE:return new l.BufferViewVec2u8(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case k.DataType.SHORT:return new l.BufferViewVec2i16(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case k.DataType.UNSIGNED_SHORT:return new l.BufferViewVec2u16(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case k.DataType.UNSIGNED_INT:return new l.BufferViewVec2u32(f.raw,
f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case k.DataType.FLOAT:return new l.BufferViewVec2f(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);default:H.neverReached(f.componentType)}}function N(f){return C.apply(this,arguments)}function C(){C=m._asyncToGenerator(function*(f){return new Promise((h,d)=>{const a=new Blob([f]),b=new FileReader;b.onload=()=>{h(JSON.parse(b.result))};b.onerror=c=>{d(c)};b.readAsText(a)})});return C.apply(this,arguments)}function O(f,
h){return D.apply(this,arguments)}function D(){D=m._asyncToGenerator(function*(f,h){return new Promise((d,a)=>{const b=new Blob([f],{type:h}),c=URL.createObjectURL(b),e=new Image;e.addEventListener("load",()=>{URL.revokeObjectURL(c);"decode"in e?e.decode().then(()=>d(e),()=>d(e)):d(e)});e.addEventListener("error",g=>{URL.revokeObjectURL(c);a(g)});e.src=c})});return D.apply(this,arguments)}let T=function(){function f(d,a,b,c,e){this.context=d;this.errorContext=a;this.uri=b;this.json=c;this.glbBuffer=
e;this.bufferLoaders=new Map;this.textureLoaders=new Map;this.textureCache=new Map;this.materialCache=new Map;this.nodeParentMap=new Map;this.nodeTransformCache=new Map;this.baseUri=L.splitURI(this.uri).dirPart;this._checkVersionSupported();this._checkRequiredExtensionsSupported();a.errorUnsupportedIf(null==c.scenes,"Scenes must be defined.");a.errorUnsupportedIf(null==c.meshes,"Meshes must be defined");a.errorUnsupportedIf(null==c.nodes,"Nodes must be defined.");this._computeNodeParents()}f.load=
function(){var d=m._asyncToGenerator(function*(a,b,c,e){if(u.isDataProtocol(c)){var g=u.dataComponents(c);if("model/gltf-binary"!==g.mediaType)try{const n=JSON.parse(g.isBase64?atob(g.data):g.data);return new f(a,b,c,n)}catch{}g=u.dataToArrayBuffer(c);if(f._isGLBData(g))return this._fromGLBData(a,b,c,g)}if(c.endsWith(".gltf"))return e=yield a.loadJSON(c,e),new f(a,b,c,e);g=yield a.loadBinary(c,e);if(f._isGLBData(g))return this._fromGLBData(a,b,c,g);e=yield a.loadJSON(c,e);return new f(a,b,c,e)});
return function(a,b,c,e){return d.apply(this,arguments)}}();f._isGLBData=function(d){d=new G.BinaryStreamReader(d);return 4<=d.remainingBytes()&&1179937895===d.readUint32()};f._fromGLBData=function(){var d=m._asyncToGenerator(function*(a,b,c,e){e=yield f._parseGLBData(b,e);return new f(a,b,c,e.json,e.binaryData)});return function(a,b,c,e){return d.apply(this,arguments)}}();f._parseGLBData=function(){var d=m._asyncToGenerator(function*(a,b){const c=new G.BinaryStreamReader(b);a.assert(12<=c.remainingBytes(),
"GLB binary data is insufficiently large.");var e=c.readUint32(),g=c.readUint32();const n=c.readUint32();a.assert(1179937895===e,"Magic first 4 bytes do not fit to expected GLB value.");a.assert(b.byteLength>=n,"GLB binary data is smaller than header specifies.");a.errorUnsupportedIf(2!==g,"An unsupported GLB container version was detected. Only version 2 is supported.");b=0;let p,q;for(;8<=c.remainingBytes();)e=c.readUint32(),g=c.readUint32(),0===b?(a.assert(1313821514===g,"First GLB chunk must be JSON."),
a.assert(0<=e,"No JSON data found."),p=yield N(c.readUint8Array(e))):1===b?(a.errorUnsupportedIf(5130562!==g,"Second GLB chunk expected to be BIN."),q=c.readUint8Array(e)):a.warnUnsupported("More than 2 GLB chunks detected. Skipping."),b+=1;p||a.error("No GLB JSON chunk detected.");return{json:p,binaryData:q}});return function(a,b){return d.apply(this,arguments)}}();var h=f.prototype;h.getBuffer=function(){var d=m._asyncToGenerator(function*(a,b){const c=this.json.buffers[a],e=this.errorContext;if(null==
c.uri)return e.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;a=yield this._getBufferLoader(a,b);e.assert(a.byteLength===c.byteLength,"Buffer byte lengths should match.");return a});return function(a,b){return d.apply(this,arguments)}}();h._getBufferLoader=function(){var d=m._asyncToGenerator(function*(a,b){const c=this.bufferLoaders.get(a);if(c)return c;b=this.context.loadBinary(this._resolveUri(this.json.buffers[a].uri),b).then(e=>new Uint8Array(e));this.bufferLoaders.set(a,
b);return b});return function(a,b){return d.apply(this,arguments)}}();h.getAccessor=function(){var d=m._asyncToGenerator(function*(a,b){var c=this.errorContext;c.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");a=this.json.accessors[a];c.errorUnsupportedIf(null==(null==a?void 0:a.bufferView),"Some accessor does not specify a bufferView.");c.errorUnsupportedIf(a.type in[A.AttributeType.MAT2,A.AttributeType.MAT3,A.AttributeType.MAT4],`AttributeType ${a.type} is not supported`);c=this.json.bufferViews[a.bufferView];
b=yield this.getBuffer(c.buffer,b);const e=P[a.type],g=Q[a.componentType],n=e*g,p=c.byteStride||n;return{raw:b.buffer,byteStride:p,byteOffset:b.byteOffset+(c.byteOffset||0)+(a.byteOffset||0),entryCount:a.count,isDenselyPacked:p===n,componentCount:e,componentByteSize:g,componentType:a.componentType,min:a.min,max:a.max,normalized:!!a.normalized}});return function(a,b){return d.apply(this,arguments)}}();h.getIndexData=function(){var d=m._asyncToGenerator(function*(a,b){if(null==a.indices)return null;
a=yield this.getAccessor(a.indices,b);if(a.isDenselyPacked)switch(a.componentType){case k.DataType.UNSIGNED_BYTE:return new Uint8Array(a.raw,a.byteOffset,a.entryCount);case k.DataType.UNSIGNED_SHORT:return new Uint16Array(a.raw,a.byteOffset,a.entryCount);case k.DataType.UNSIGNED_INT:return new Uint32Array(a.raw,a.byteOffset,a.entryCount)}else switch(a.componentType){case k.DataType.UNSIGNED_BYTE:return z.makeDense(this._wrapAccessor(l.BufferViewUint8,a));case k.DataType.UNSIGNED_SHORT:return z.makeDense(this._wrapAccessor(l.BufferViewUint16,
a));case k.DataType.UNSIGNED_INT:return z.makeDense(this._wrapAccessor(l.BufferViewUint32,a))}});return function(a,b){return d.apply(this,arguments)}}();h.getPositionData=function(){var d=m._asyncToGenerator(function*(a,b){const c=this.errorContext;c.errorUnsupportedIf(null==a.attributes.POSITION,"No POSITION vertex data found.");a=yield this.getAccessor(a.attributes.POSITION,b);c.errorUnsupportedIf(a.componentType!==k.DataType.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+
v[a.componentType]);c.errorUnsupportedIf(3!==a.componentCount,"POSITION vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return this._wrapAccessor(l.BufferViewVec3f,a)});return function(a,b){return d.apply(this,arguments)}}();h.getNormalData=function(){var d=m._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.NORMAL,"No NORMAL vertex data found.");a=yield this.getAccessor(a.attributes.NORMAL,b);c.errorUnsupportedIf(a.componentType!==
k.DataType.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+v[a.componentType]);c.errorUnsupportedIf(3!==a.componentCount,"NORMAL vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return this._wrapAccessor(l.BufferViewVec3f,a)});return function(a,b){return d.apply(this,arguments)}}();h.getTangentData=function(){var d=m._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.TANGENT,"No TANGENT vertex data found.");a=
yield this.getAccessor(a.attributes.TANGENT,b);c.errorUnsupportedIf(a.componentType!==k.DataType.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+v[a.componentType]);c.errorUnsupportedIf(4!==a.componentCount,"TANGENT vertex attribute must have 4 components, but found "+a.componentCount.toFixed());return new l.BufferViewVec4f(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount)});return function(a,b){return d.apply(this,arguments)}}();h.getTextureCoordinates=
function(){var d=m._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");a=yield this.getAccessor(a.attributes.TEXCOORD_0,b);c.errorUnsupportedIf(2!==a.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+a.componentCount.toFixed());if(a.componentType===k.DataType.FLOAT)return this._wrapAccessor(l.BufferViewVec2f,a);c.errorUnsupportedIf(!a.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0.");
return M(a)});return function(a,b){return d.apply(this,arguments)}}();h.getVertexColors=function(){var d=m._asyncToGenerator(function*(a,b){const c=this.errorContext;c.assert(null!=a.attributes.COLOR_0,"No COLOR_0 vertex data found.");a=yield this.getAccessor(a.attributes.COLOR_0,b);c.errorUnsupportedIf(4!==a.componentCount&&3!==a.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+a.componentCount.toFixed());if(4===a.componentCount){if(a.componentType===k.DataType.FLOAT)return this._wrapAccessor(l.BufferViewVec4f,
a);if(a.componentType===k.DataType.UNSIGNED_BYTE)return this._wrapAccessor(l.BufferViewVec4u8,a);if(a.componentType===k.DataType.UNSIGNED_SHORT)return this._wrapAccessor(l.BufferViewVec4u16,a)}else if(3===a.componentCount){if(a.componentType===k.DataType.FLOAT)return this._wrapAccessor(l.BufferViewVec3f,a);if(a.componentType===k.DataType.UNSIGNED_BYTE)return this._wrapAccessor(l.BufferViewVec3u8,a);if(a.componentType===k.DataType.UNSIGNED_SHORT)return this._wrapAccessor(l.BufferViewVec3u16,a)}c.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+
v[a.componentType])});return function(a,b){return d.apply(this,arguments)}}();h.hasPositions=function(d){return void 0!==d.attributes.POSITION};h.hasNormals=function(d){return void 0!==d.attributes.NORMAL};h.hasVertexColors=function(d){return void 0!==d.attributes.COLOR_0};h.hasTextureCoordinates=function(d){return void 0!==d.attributes.TEXCOORD_0};h.hasTangents=function(d){return void 0!==d.attributes.TANGENT};h.getMaterial=function(){var d=m._asyncToGenerator(function*(a,b,c){var e=this.materialCache.get(a.material);
if(!e){e=null!=a.material?B.material(this.json.materials[a.material]):B.material();const g=e.pbrMetallicRoughness,n=this.hasVertexColors(a),p=this.getTexture(g.baseColorTexture,b),q=this.getTexture(e.normalTexture,b),w=c?this.getTexture(e.occlusionTexture,b):null,r=c?this.getTexture(e.emissiveTexture,b):null;b=c?this.getTexture(g.metallicRoughnessTexture,b):null;a=null!=a.material?a.material:-1;e={alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,color:g.baseColorFactor,doubleSided:!!e.doubleSided,
colorTexture:yield p,normalTexture:yield q,name:e.name,id:a,occlusionTexture:yield w,emissiveTexture:yield r,emissiveFactor:e.emissiveFactor,metallicFactor:g.metallicFactor,roughnessFactor:g.roughnessFactor,metallicRoughnessTexture:yield b,vertexColors:n,ESRI_externalColorMixMode:e.extras.ESRI_externalColorMixMode}}return e});return function(a,b,c){return d.apply(this,arguments)}}();h.getTexture=function(){var d=m._asyncToGenerator(function*(a,b){if(!a)return null;this.errorContext.errorUnsupportedIf(0!==
(a.texCoord||0),"Only TEXCOORD with index 0 is supported.");const c=a.index,e=this.errorContext;a=this.json.textures[c];const g=B.textureSampler(null!=a.sampler?this.json.samplers[a.sampler]:{});e.errorUnsupportedIf(null==a.source,"Source is expected to be defined for a texture.");const n=this.json.images[a.source],p=yield this._loadTextureImageData(c,a,b);return I.getOrCreateMapValue(this.textureCache,c,()=>{const q=r=>33071===r||33648===r||10497===r,w=r=>{e.error(`Unexpected TextureSampler WrapMode: ${r}. Using default REPEAT(10497).`);
return 10497};return{data:p,wrapS:q(g.wrapS)?g.wrapS:w(g.wrapS),wrapT:q(g.wrapT)?g.wrapT:w(g.wrapT),minFilter:g.minFilter,name:n.name,id:c}})});return function(a,b){return d.apply(this,arguments)}}();h.getNodeTransform=function(d){if(void 0===d)return R;var a=this.nodeTransformCache.get(d);if(!a){a=this.getNodeTransform(this._getNodeParent(d));const b=this.json.nodes[d];if(b.matrix)a=t.multiply(y.create(),a,b.matrix);else if(b.translation||b.rotation||b.scale)a=y.clone(a),b.translation&&t.translate(a,
a,b.translation),b.rotation&&(x[3]=J.getAxisAngle(x,b.rotation),t.rotate(a,a,x[3],x)),b.scale&&t.scale(a,a,b.scale);this.nodeTransformCache.set(d,a)}return a};h._wrapAccessor=function(d,a){return new d(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*(a.entryCount-1)+a.componentByteSize*a.componentCount)};h._resolveUri=function(d){return u.makeAbsolute(d,this.baseUri)};h._getNodeParent=function(d){return this.nodeParentMap.get(d)};h._checkVersionSupported=function(){const d=F.Version.parse(this.json.asset.version,
"glTF");S.validate(d)};h._checkRequiredExtensionsSupported=function(){const d=this.json,a=this.errorContext;d.extensionsRequired&&0!==d.extensionsRequired.length&&a.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+d.extensionsRequired.join(", "))};h._computeNodeParents=function(){this.json.nodes.forEach((d,a)=>{d.children&&d.children.forEach(b=>{this.nodeParentMap.set(b,a)})})};h._loadTextureImageData=function(){var d=m._asyncToGenerator(function*(a,b,
c){const e=this.textureLoaders.get(a);if(e)return e;b=this._createTextureLoader(b,c);this.textureLoaders.set(a,b);return b});return function(a,b,c){return d.apply(this,arguments)}}();h._createTextureLoader=function(){var d=m._asyncToGenerator(function*(a,b){a=this.json.images[a.source];if(a.uri)return this.context.loadImage(this._resolveUri(a.uri),b);const c=this.errorContext;c.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined.");c.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");
const e=this.json.bufferViews[a.bufferView];b=yield this.getBuffer(e.buffer,b);c.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer");return O(new Uint8Array(b.buffer,b.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)});return function(a,b){return d.apply(this,arguments)}}();return f}();const S=new F.Version(2,0,"glTF"),R=t.fromXRotation(y.create(),Math.PI/2),x=K.create(),P={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Q={[k.DataType.BYTE]:1,[k.DataType.UNSIGNED_BYTE]:1,[k.DataType.SHORT]:2,
[k.DataType.UNSIGNED_SHORT]:2,[k.DataType.FLOAT]:4,[k.DataType.UNSIGNED_INT]:4},v={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};E.Resource=T;Object.defineProperty(E,"__esModule",{value:!0})});