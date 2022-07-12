// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/tsSupport/generatorHelper ../../../../../../core/tsSupport/awaiterHelper ../../../../../../core/Error ../../../../../../core/has ../../../../../../core/Logger ../../../../../../core/maybe ../../../../../../core/promiseUtils ../../../../../../geometry/support/jsonUtils ../../../../../../symbols/SimpleLineSymbol ../../definitions ../../enums ../../WGLDisplayObject ../MeshData ../VertexVector ../templates/WGLLabelTemplate ../templates/WGLLineTemplate ../templates/WGLMarkerTemplate ../templates/WGLTemplateStore".split(" "),
function(w,x,M,z,A,B,N,C,q,D,E,F,t,e,G,H,n,I,J,K,y){Object.defineProperty(x,"__esModule",{value:!0});var u=C.getLogger("esri.views.2d.engine.webgl.WGLMeshFactory"),L={esriGeometryPoint:"above-right above-center above-left center-center center-left center-right below-center below-left below-right".split(" "),esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};w=function(){function d(b,a,c,k,p,l){this._isDD=!1;this._labelsDebugTemplate=
null;this._isDD=q.isSome(c)&&"dot-density"===c.type;this._geometryType=b;this._idField=a;this._templateStore=k;this._setLabelTemplates(p,c,l)}d.prototype.update=function(b,a,c){this._isDD=q.isSome(a)&&"dot-density"===a.type;this._setLabelTemplates(b,a,c)};d.prototype._setLabelTemplates=function(b,a,c){b&&this._validateLabelingInfo(b)&&(this._labelTemplates=b.map(function(b){return I.default.fromLabelClass(a,b,c)}))};Object.defineProperty(d.prototype,"templates",{get:function(){return this._templateStore},
enumerable:!0,configurable:!0});d.prototype.createMeshData=function(b){var a=Array(5),c=this._labelTemplates&&0<this._labelTemplates.length,k="esriGeometryPolyline"===this._geometryType?t.HEURISTIC_GLYPHS_PER_LINE:t.HEURISTIC_GLYPHS_PER_FEATURE;a[e.WGLGeometryType.MARKER]=new n.VertexVectors(e.WGLGeometryType.MARKER,b);a[e.WGLGeometryType.FILL]=new n.VertexVectors(e.WGLGeometryType.FILL,b,this._isDD);a[e.WGLGeometryType.LINE]=new n.VertexVectors(e.WGLGeometryType.LINE,b);a[e.WGLGeometryType.TEXT]=
new n.VertexVectors(e.WGLGeometryType.TEXT,b);a[e.WGLGeometryType.LABEL]=new n.VertexVectors(e.WGLGeometryType.LABEL,c?k:0);return new H.MeshData([],a)};d.prototype.analyze=function(b,a,c,k,p){return A(this,void 0,void 0,function(){var l,m,d,f,g,h,e,n,r;return z(this,function(v){switch(v.label){case 0:return l=b,D.isAborted(p)?[2,[]]:q.isSome(a)?[4,a.analyze(this._idField,b,c,k,p)]:[3,2];case 1:v.sent(),v.label=2;case 2:m=0;for(d=l;m<d.length;m++){f=d[m];g=f.groupId;if(null==g||-1===g)g=a.match(this._idField,
f,this._geometryType,c,k);if(y.isDynamicId(g))for(h=this._templateStore.getDynamicTemplateGroup(g),e=0,n=h;e<n.length;e++)(r=n[e])&&r.analyze&&r.analyze(this._templateStore,f,c,k);f.groupId=g}return[2,this._templateStore.finalize(p).then(function(){return l})]}})})};d.prototype.write=function(b,a,c,k,d,l){var m=this._templateStore.getTemplateGroup(a.groupId),e=a.localId;if(null!=e){var f=new G(e);if(y.isDynamicId(a.groupId))for(var g=0;g<m.length;g++){var h=m[g];h.bindFeature(a,c,k)}if(m&&(a.geometry||
a.centroid)){c=f.displayRecords;h=a.insertAfter;void 0!==h&&(f.insertAfter=h);(k=this._geometryType)||(k=null!=a.centroid?"esriGeometryPolygon":E.getJsonType(a.geometry));for(g=0;g<m.length;g++){var h=m[g],p=b.get(h.geometryType);h.writeMesh(c,p,k,e,a)}q.isSome(l)&&(m=l&&this._findLabelRef(m),this._writeLabels(f,b,e,a,l,m,d));b.pushDisplayObject(f)}}};d.prototype._hasBadLabelClass=function(b,a){var c=b.labelPlacement,k=L[a];if(!b.symbol)return u.warn("No LabelClass symbol specified."),!0;if(!k)return u.error(new B("mapview-labeling:unsupported-geometry-type",
"Unable to create labels for Feature Layer, "+a+" is not supported")),!0;k.some(function(a){return a===c})||(k=k[0],c&&u.warn("Found invalid label placement type "+c+" for "+a+". Defaulting to "+k),b.labelPlacement=k);return!1};d.prototype._validateLabelingInfo=function(b){var a=this;return!b.some(function(b){return a._hasBadLabelClass(b,a._geometryType)})};d.prototype._findLabelRef=function(b){for(var a=0;a<b.length;a++){var c=b[a];if(c instanceof K.default)return c}return null};d.prototype._writeLabels=
function(b,a,c,k,e,d,m){for(var l=b.displayRecords,f=[],g=0;g<e.length;g++){var h=e[g];if(q.isSome(h)){var p=h.glyphs,n=h.rtl,h=this._labelTemplates[h.classIndex],r=a.get(h.geometryType);h.bindReferenceTemplate(d);h.bindTextInfo(p,n);h.writeMesh(l,r,this._geometryType,c,k,m,f)}}b.metrics=f;t.DEBUG_LABELS&&this._debugLabels(b,a)};d.prototype._debugLabels=function(b,a){var c=b.displayRecords,e=b.id,d=0;for(b=b.metrics;d<b.length;d++)for(var l=b[d],m=0,n=l.boxes?l.boxes.concat([l.bounds]):[l.bounds];m<
n.length;m++){var f=n[m],f={geometry:{paths:[[[l.anchor[0]+l.offsetX+f.center[0]-f.width/2,l.anchor[1]+l.offsetY+f.center[1]+f.height/2],[0,-f.height],[f.width,0],[0,f.height],[-f.width,0]]]},attributes:{}},g=this._getLabelDebugTemplate(),h=a.get(g.geometryType);g.writeMesh(c,h,"esriGeometryPolyline",e,f)}};d.prototype._getLabelDebugTemplate=function(){this._labelsDebugTemplate||(this._labelsDebugTemplate=this._createLabelsDebugTemplate());return this._labelsDebugTemplate};d.prototype._createLabelsDebugTemplate=
function(){var b=new F({style:"solid",width:1,color:[255,0,0,1]});return J.default.fromSimpleLine(null,!1,b,null,!1)};return d}();x.WGLMeshFactory=w});