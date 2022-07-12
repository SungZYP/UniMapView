// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass".split(" "),function(a,g,b,h,c,m,n,p,l,k){a.I3SNodePageDefinition=function(d){function e(){var f=d.apply(this,arguments)||this;f.nodesPerPage=null;f.rootIndex=0;f.lodSelectionMetricType=
null;return f}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([c.property({type:Number})],a.I3SNodePageDefinition.prototype,"nodesPerPage",void 0);b.__decorate([c.property({type:Number})],a.I3SNodePageDefinition.prototype,"rootIndex",void 0);b.__decorate([c.property({type:String})],a.I3SNodePageDefinition.prototype,"lodSelectionMetricType",void 0);a.I3SNodePageDefinition=b.__decorate([k.subclass("esri.layer.support.I3SNodePageDefinition")],a.I3SNodePageDefinition);a.I3SMaterialTexture=
function(d){function e(){var f=d.apply(this,arguments)||this;f.factor=1;return f}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([c.property({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],a.I3SMaterialTexture.prototype,"id",void 0);b.__decorate([c.property({type:Number})],a.I3SMaterialTexture.prototype,"factor",void 0);a.I3SMaterialTexture=b.__decorate([k.subclass("esri.layer.support.I3SMaterialTexture")],a.I3SMaterialTexture);a.I3SMaterialPBRMetallicRoughness=function(d){function e(){var f=
d.apply(this,arguments)||this;f.baseColorFactor=[1,1,1,1];f.baseColorTexture=null;f.metallicRoughnessTexture=null;f.metallicFactor=1;f.roughnessFactor=1;return f}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([c.property({type:[Number]})],a.I3SMaterialPBRMetallicRoughness.prototype,"baseColorFactor",void 0);b.__decorate([c.property({type:a.I3SMaterialTexture})],a.I3SMaterialPBRMetallicRoughness.prototype,"baseColorTexture",void 0);b.__decorate([c.property({type:a.I3SMaterialTexture})],
a.I3SMaterialPBRMetallicRoughness.prototype,"metallicRoughnessTexture",void 0);b.__decorate([c.property({type:Number})],a.I3SMaterialPBRMetallicRoughness.prototype,"metallicFactor",void 0);b.__decorate([c.property({type:Number})],a.I3SMaterialPBRMetallicRoughness.prototype,"roughnessFactor",void 0);a.I3SMaterialPBRMetallicRoughness=b.__decorate([k.subclass("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a.I3SMaterialPBRMetallicRoughness);a.I3SMaterialDefinition=function(d){function e(){var f=
d.apply(this,arguments)||this;f.alphaMode="opaque";f.alphaCutoff=.25;f.doubleSided=!1;f.cullFace="none";f.normalTexture=null;f.occlusionTexture=null;f.emissiveTexture=null;f.emissiveFactor=null;f.pbrMetallicRoughness=null;return f}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([l.enumeration({opaque:"opaque",mask:"mask",blend:"blend"})],a.I3SMaterialDefinition.prototype,"alphaMode",void 0);b.__decorate([c.property({type:Number})],a.I3SMaterialDefinition.prototype,"alphaCutoff",void 0);
b.__decorate([c.property({type:Boolean})],a.I3SMaterialDefinition.prototype,"doubleSided",void 0);b.__decorate([l.enumeration({none:"none",back:"back",front:"front"})],a.I3SMaterialDefinition.prototype,"cullFace",void 0);b.__decorate([c.property({type:a.I3SMaterialTexture})],a.I3SMaterialDefinition.prototype,"normalTexture",void 0);b.__decorate([c.property({type:a.I3SMaterialTexture})],a.I3SMaterialDefinition.prototype,"occlusionTexture",void 0);b.__decorate([c.property({type:a.I3SMaterialTexture})],
a.I3SMaterialDefinition.prototype,"emissiveTexture",void 0);b.__decorate([c.property({type:[Number]})],a.I3SMaterialDefinition.prototype,"emissiveFactor",void 0);b.__decorate([c.property({type:a.I3SMaterialPBRMetallicRoughness})],a.I3SMaterialDefinition.prototype,"pbrMetallicRoughness",void 0);a.I3SMaterialDefinition=b.__decorate([k.subclass("esri.layer.support.I3SMaterialDefinition")],a.I3SMaterialDefinition);a.I3STextureFormat=function(d){function e(){return d.apply(this,arguments)||this}g._inheritsLoose(e,
d);return e}(h.JSONSupport);b.__decorate([c.property({type:String,json:{read:{source:["name","index"],reader:(d,e)=>null!=d?d:`${e.index}`}}})],a.I3STextureFormat.prototype,"name",void 0);b.__decorate([l.enumeration({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],a.I3STextureFormat.prototype,"format",void 0);a.I3STextureFormat=b.__decorate([k.subclass("esri.layer.support.I3STextureFormat")],a.I3STextureFormat);a.I3STextureSetDefinition=function(d){function e(){var f=
d.apply(this,arguments)||this;f.atlas=!1;return f}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([c.property({type:[a.I3STextureFormat]})],a.I3STextureSetDefinition.prototype,"formats",void 0);b.__decorate([c.property({type:Boolean})],a.I3STextureSetDefinition.prototype,"atlas",void 0);a.I3STextureSetDefinition=b.__decorate([k.subclass("esri.layer.support.I3STextureSetDefinition")],a.I3STextureSetDefinition);a.I3SGeometryAttribute=function(d){function e(){return d.apply(this,arguments)||
this}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([l.enumeration({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],a.I3SGeometryAttribute.prototype,"type",void 0);b.__decorate([c.property({type:Number})],a.I3SGeometryAttribute.prototype,"component",void 0);a.I3SGeometryAttribute=b.__decorate([k.subclass("esri.layer.support.I3SGeometryAttribute")],a.I3SGeometryAttribute);a.I3SGeometryCompressedAttributes=function(d){function e(){return d.apply(this,
arguments)||this}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([l.enumeration({draco:"draco"})],a.I3SGeometryCompressedAttributes.prototype,"encoding",void 0);b.__decorate([c.property({type:[String]})],a.I3SGeometryCompressedAttributes.prototype,"attributes",void 0);a.I3SGeometryCompressedAttributes=b.__decorate([k.subclass("esri.layer.support.I3SGeometryCompressedAttributes")],a.I3SGeometryCompressedAttributes);a.I3SGeometryBuffer=function(d){function e(){var f=d.apply(this,arguments)||
this;f.offset=0;return f}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([c.property({type:Number})],a.I3SGeometryBuffer.prototype,"offset",void 0);b.__decorate([c.property({type:a.I3SGeometryAttribute})],a.I3SGeometryBuffer.prototype,"position",void 0);b.__decorate([c.property({type:a.I3SGeometryAttribute})],a.I3SGeometryBuffer.prototype,"normal",void 0);b.__decorate([c.property({type:a.I3SGeometryAttribute})],a.I3SGeometryBuffer.prototype,"uv0",void 0);b.__decorate([c.property({type:a.I3SGeometryAttribute})],
a.I3SGeometryBuffer.prototype,"color",void 0);b.__decorate([c.property({type:a.I3SGeometryAttribute})],a.I3SGeometryBuffer.prototype,"uvRegion",void 0);b.__decorate([c.property({type:a.I3SGeometryAttribute})],a.I3SGeometryBuffer.prototype,"featureId",void 0);b.__decorate([c.property({type:a.I3SGeometryAttribute})],a.I3SGeometryBuffer.prototype,"faceRange",void 0);b.__decorate([c.property({type:a.I3SGeometryCompressedAttributes})],a.I3SGeometryBuffer.prototype,"compressedAttributes",void 0);a.I3SGeometryBuffer=
b.__decorate([k.subclass("esri.layer.support.I3SGeometryBuffer")],a.I3SGeometryBuffer);a.I3SGeometryDefinition=function(d){function e(){return d.apply(this,arguments)||this}g._inheritsLoose(e,d);return e}(h.JSONSupport);b.__decorate([l.enumeration({triangle:"triangle"})],a.I3SGeometryDefinition.prototype,"topology",void 0);b.__decorate([c.property()],a.I3SGeometryDefinition.prototype,"geometryBuffers",void 0);a.I3SGeometryDefinition=b.__decorate([k.subclass("esri.layer.support.I3SGeometryDefinition")],
a.I3SGeometryDefinition);Object.defineProperty(a,"__esModule",{value:!0})});