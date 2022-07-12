// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Error ../../../../core/Logger ../../../../core/mathUtils ../../../../core/screenUtils ../../../../symbols/cim/enums ./color ./enums ./SymbolProperties ../../../webgl/enums ../../../webgl/Texture ../../../webgl/VertexElementDescriptor".split(" "),function(b,t,u,x,y,m,z,g,R,f,S,T){function p(a){const c={};for(const d of a)c[d.name]=d.strideInBytes;return c}function A(a){switch(a){case g.WGLGeometryType.MARKER:return U;case g.WGLGeometryType.FILL:return V;case g.WGLGeometryType.LINE:return W;
case g.WGLGeometryType.TEXT:return X;case g.WGLGeometryType.LABEL:return Y}}function B(a){switch(a%4){case 0:case 2:return 4;case 1:case 3:return 1}}function C(a){switch(a){case f.DataType.BYTE:case f.DataType.UNSIGNED_BYTE:return 1;case f.DataType.SHORT:case f.DataType.UNSIGNED_SHORT:return 2;case f.DataType.FLOAT:case f.DataType.INT:case f.DataType.UNSIGNED_INT:return 4}}function Z(a){const c={};for(const d in a){let e=0;c[d]=a[d].map(h=>{const k=new T.VertexElementDescriptor(h.name,h.count,h.type,
e,0,h.normalized||!1);e+=h.count*C(h.type);return k});c[d].forEach(h=>h.stride=e)}return c}const r=u.getLogger("esri.views.2d.engine.webgl.Utils");u=[{name:"geometry",strideInBytes:36}];const D=[{name:"geometry",strideInBytes:32}],E=[{name:"geometry",strideInBytes:20}],F=[{name:"geometry",strideInBytes:12}],G=[{name:"geometry",strideInBytes:40}],H=[{name:"geometry",strideInBytes:36}],I=[{name:"geometry",strideInBytes:36}],J=p(u),K=p(D),L=p(E),M=p(F),N=p(G),O=p(H),P=p(I),U=["geometry"],V=["geometry"],
W=["geometry"],X=["geometry"],Y=["geometry"],aa={["geometry"]:f.Usage.STATIC_DRAW},v=new Map,Q=a=>{if(!a)return!1;a=a.trim();return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(a)&&/[\dz]$/i.test(a)&&4<a.length?!0:!1};b.C_FILL_STRIDE_SPEC=K;b.C_FILL_STRIDE_SPEC_DD=M;b.C_FILL_STRIDE_SPEC_SIMPLE=L;b.C_FILL_VERTEX_DEF=D;b.C_FILL_VERTEX_DEF_DD=F;b.C_FILL_VERTEX_DEF_SIMPLE=E;b.C_ICON_STRIDE_SPEC=J;b.C_ICON_VERTEX_DEF=u;b.C_LABEL_STRIDE_SPEC=P;b.C_LABEL_VERTEX_DEF=I;b.C_LINE_STRIDE_SPEC=N;b.C_LINE_VERTEX_DEF=
G;b.C_TEXT_STRIDE_SPEC=O;b.C_TEXT_VERTEX_DEF=H;b.C_VBO_GEOMETRY="geometry";b.C_VBO_INFO=aa;b.C_VBO_PERINSTANCE="per_instance";b.C_VBO_PERINSTANCE_VV="per_instance_vv";b.allocateTypedArrayBuffer=function(a,c){switch(c%4){case 0:case 2:return new Uint32Array(Math.floor(a*c/4));case 1:case 3:return new Uint8Array(a*c)}};b.allocateTypedArrayBufferwithData=function(a,c){switch(c%4){case 0:case 2:return new Uint32Array(a);case 1:case 3:return new Uint8Array(a)}};b.charCodes=function(a){const c=[];for(let d=
0;d<a.length;d++)c.push(a.charCodeAt(d));return c};b.copyMeshData=function(a,c,d,e,h,k,l){for(const w in k){var q=k[w].stride,n=B(q);const ba=k[w].data,ca=d[w].data,da=q*h.vertexCount/n,ea=q*a/n;q=q*h.vertexFrom/n;for(n=0;n<da;++n)ca[n+ea]=ba[n+q]}d=h.indexCount;for(k=0;k<d;++k)e[k+c]=l[k+h.indexFrom]-h.vertexFrom+a};b.createGeometryData=function(a,c){const d=[];for(let e=0;5>e;++e){const h=A(e),k={};for(const l of h)k[l]={data:c(e,l)};d.push({data:a(e),buffers:k})}return d};b.createProgramDescriptor=
(a,c)=>{if(!v.has(a)){const h=Z(c);var d=h;var e={};for(const k in d){const l=d[k];e[k]=l.length?l[0].stride:0}d=e;e=new Map;for(const k in c)for(const l of c[k])e.set(l.name,l.location);c=e;v.set(a,{strides:d,bufferLayouts:h,attributes:c})}return v.get(a)};b.createTextureFromTexelData=function(a,c){let d,e;x.isPowerOfTwo(c.width)&&x.isPowerOfTwo(c.height)?(d=!0,e=f.TextureSamplingMode.LINEAR_MIPMAP_LINEAR):(d=!1,e=f.TextureSamplingMode.LINEAR);return new S.Texture(a,{target:f.TextureType.TEXTURE_2D,
pixelFormat:f.PixelFormat.RGBA,internalFormat:f.PixelFormat.RGBA,dataType:f.PixelType.UNSIGNED_BYTE,hasMipmap:d,samplingMode:e,wrapMode:f.TextureWrapMode.CLAMP_TO_EDGE,flipped:!0},c)};b.forEachGeometryType=function(a){a(g.WGLGeometryType.FILL);a(g.WGLGeometryType.LINE);a(g.WGLGeometryType.MARKER);a(g.WGLGeometryType.TEXT);a(g.WGLGeometryType.LABEL)};b.geometryToMappedGeometry=function(a){return{vertexFrom:void 0,vertexTo:void 0,geometry:a}};b.getBytes=C;b.getCapType=function(a){switch(a){case "butt":return m.CapType.BUTT;
case "round":return m.CapType.ROUND;case "square":return m.CapType.SQUARE;default:return r.error(new t("mapview-invalid-type",`Cap type ${a} is not a valid option. Defaulting to round`)),m.CapType.ROUND}};b.getJoinType=function(a){switch(a){case "miter":return m.JoinType.MITER;case "bevel":return m.JoinType.BEVEL;case "round":return m.JoinType.ROUND;default:return r.error(new t("mapview-invalid-type",`Join type ${a} is not a valid option. Defaulting to round`)),m.JoinType.ROUND}};b.getNamedBuffers=
A;b.getPMSResourceSize=function(a){const c="maxVVSize"in a&&a.maxVVSize;a="width"in a&&a.width||"size"in a&&a.size||0;return c?c:a};b.getPixelArrayCtor=function(a){switch(a){case f.PixelType.UNSIGNED_BYTE:return Uint8Array;case f.PixelType.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.PixelType.FLOAT:return Float32Array;default:r.error(new t("webgl-utils",`Unable to handle type ${a}`))}};b.getPixelBytes=function(a){switch(a){case f.PixelType.UNSIGNED_BYTE:return 1;case f.PixelType.UNSIGNED_SHORT_4_4_4_4:return 2;
case f.PixelType.FLOAT:return 4;default:r.error(new t("webgl-utils",`Unable to handle type ${a}`))}};b.getStrides=function(a,{fill:c}){switch(a){case g.WGLGeometryType.MARKER:return J;case g.WGLGeometryType.FILL:return"dot-density"===c?M:"simple"===c?L:K;case g.WGLGeometryType.LINE:return N;case g.WGLGeometryType.TEXT:return O;case g.WGLGeometryType.LABEL:return P}};b.getTextProperties=function(a){return R.TextProperties.pool.acquire(a.color?z.copyAndPremultiply(a.color):[255,255,255,255],a.haloColor?
z.copyAndPremultiply(a.haloColor):[255,255,255,255],y.pt2px(a.haloSize),y.pt2px(a.font.size),a.angle*Math.PI/180,a.xoffset/a.font.size,a.yoffset/a.font.size,"left"===a.horizontalAlignment?0:"right"===a.horizontalAlignment?1:.5,"top"===a.verticalAlignment?0:"bottom"===a.verticalAlignment?1:.5)};b.getTransformParams=function(a){const {transform:c,hasZ:d,hasM:e}=a;return{transform:c,hasZ:d,hasM:e}};b.getUrl=a=>"imageData"in a&&a.imageData&&"contentType"in a&&a.contentType?`data:${a.contentType};base64,${a.imageData}`:
"url"in a?a.url:null;b.getVVType=function(a){switch(a){case "opacity":return g.VVType.OPACITY;case "color":return g.VVType.COLOR;case "rotation":return g.VVType.ROTATION;case "size":return g.VVType.SIZE;default:return r.error(`Cannot interpret unknown vv: ${a}`),null}};b.is3D=a=>a.type&&-1!==a.type.toLowerCase().indexOf("3d");b.isDefined=function(a){return null!=a};b.isGIF=a=>"url"in a&&a.url&&a.url.includes(".gif")||"contentType"in a&&"image/gif"===a.contentType||"imageData"in a&&a.imageData.includes("data:image/gif");
b.isImageResource=a=>"url"in a&&a.url||"imageData"in a&&a.imageData;b.isNumber=function(a){return"number"===typeof a};b.isPNG=a=>"url"in a&&a.url&&a.url.includes(".png")||"contentType"in a&&"image/png"===a.contentType||"imageData"in a&&a.imageData.includes("data:image/png");b.isSVGImage=a=>a.includes("data:image/svg+xml");b.isSVGResource=a=>"path"in a&&Q(a.path);b.isSimple=function(a){switch(a.type){case "line":return"CIMSolidStroke"===a.cim.type&&!a.dashTemplate;case "fill":return"CIMSolidFill"===
a.cim.type;case "esriSFS":return"esriSFSSolid"===a.style||"esriSFSNull"===a.style;case "esriSLS":return"esriSLSSolid"===a.style||"esriSLSNull"===a.style;default:return!1}};b.isValidSVG=Q;b.shouldRepeat=function(a){switch("cim"in a?a.cim.type:a.type){case "esriSMS":case "esriPMS":case "CIMPointSymbol":case "CIMVectorMarker":case "CIMPictureMarker":case "CIMCharacterMarker":return!1;default:return!0}};b.strideToPackingFactor=B;Object.defineProperty(b,"__esModule",{value:!0})});