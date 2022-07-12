// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../ArcadePortal ../Dictionary ../Feature ../featureSetCollection ../featureSetUtils ../FunctionWrapper ../ImmutableArray ../../chunks/languageUtils ../featureset/actions/Adapted ../featureset/actions/AttributeFilter ../featureset/actions/OrderBy ../featureset/actions/Top ../featureset/sources/Empty ../featureset/sources/FeatureLayerMemory ../featureset/support/OrderbyClause ../featureset/support/shared ../featureset/support/sqlUtils ./fieldStats ../../core/promiseUtils ../../core/sql/WhereClause ../../layers/FeatureLayer ../../layers/support/Field".split(" "),
function(S,L,C,Z,T,B,aa,ba,c,v,U,ca,da,ea,fa,ha,M,V,N,A,z,O,H){function ia(d,e,p,b){if(1===b.length){if(c.isArray(b[0]))return N.calculateStat(d,b[0],-1);if(c.isImmutableArray(b[0]))return N.calculateStat(d,b[0].toArray(),-1)}return N.calculateStat(d,b,-1)}function P(d,e,p){const b=d.getVariables();if(0<b.length){const q=[];for(let a=0;a<b.length;a++)q.push(e.evaluateIdentifier(p,{name:b[a]}));return A.all(q).then(a=>{const g={};for(let n=0;n<b.length;n++)g[b[n]]=a[n];d.parameters=g;return d})}return A.resolve(d)}
function r(d,e,p=null){for(const b in d)if(b.toLowerCase()===e.toLowerCase())return d[b];return p}function W(d){if(null===d)return null;const e={type:r(d,"type",""),name:r(d,"name","")};if("range"===e.type)e.range=r(d,"range",[]);else{e.codedValues=[];for(const p of r(d,"codedValues",[]))e.codedValues.push({name:r(p,"name",""),code:r(p,"code",null)})}return e}function Q(d){if(null===d)return null;const e={},p=r(d,"wkt",null);null!==p&&(e.wkt=p);d=r(d,"wkid",null);null!==d&&(e.wkid=d);return e}function X(d){if(null===
d)return null;const e={hasZ:r(d,"hasz",!1),hasM:r(d,"hasm",!1)};var p=r(d,"spatialreference",null);p&&(e.spatialReference=Q(p));p=r(d,"x",null);if(null!==p)return e.x=p,e.y=r(d,"y",null),e;p=r(d,"rings",null);if(null!==p)return e.rings=p,e;p=r(d,"paths",null);if(null!==p)return e.paths=p,e;p=r(d,"points",null);if(null!==p)return e.points=p,e;for(const b of"xmin xmax ymin ymax zmin zmax mmin mmax".split(" "))p=r(d,b,null),null!==p&&(e[b]=p);return e}S.registerFunctions=function(d){"async"===d.mode&&
(d.functions.getuser=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,1,2);let g=c.defaultUndefined(a[1],""),n=!0===g;g=!0===g||!1===g?"":c.toString(g);if(a[0]instanceof L)return b=null,e.services&&e.services.portal&&(b=e.services.portal),b=B.getPortal(a[0],b),B.lookupUser(b,g,n).then(l=>{if(l){l=JSON.parse(JSON.stringify(l));for(const f of["lastLogin","created","modified"])void 0!==l[f]&&null!==l[f]&&(l[f]=new Date(l[f]));return C.convertObjectToArcadeDictionary(l)}return null});
let m=null;c.isFeatureSet(a[0])&&(m=a[0]);if(m)return n=!1,g?null:m.load().then(()=>m.getOwningSystemUrl()).then(l=>{if(!l)return g?null:m.getIdentityUser().then(k=>k?C.convertObjectToArcadeDictionary({username:k}):null);let f=null;e.services&&e.services.portal&&(f=e.services.portal);f=B.getPortal(new L(l),f);return B.lookupUser(f,g,n).then(k=>{if(k){k=JSON.parse(JSON.stringify(k));for(const h of["lastLogin","created","modified"])void 0!==k[h]&&null!==k[h]&&(k[h]=new Date(k[h]));return C.convertObjectToArcadeDictionary(k)}return null})});
throw Error("Invalid Parameter");})},d.signatures.push({name:"getuser",min:"1",max:"2"}),d.functions.featuresetbyid=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,2,4);if(a[0]instanceof T){b=c.toString(a[1]);q=c.defaultUndefined(a[2],null);const g=c.toBoolean(c.defaultUndefined(a[3],!0));null===q&&(q=["*"]);if(!1===c.isArray(q))throw Error("Invalid Parameter");return a[0].featureSetById(b,g,q)}throw Error("Invalid Parameter");})},d.signatures.push({name:"featuresetbyid",min:"2",
max:"4"}),d.functions.getfeatureset=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,1,2);if(c.isFeature(a[0]))return b=c.defaultUndefined(a[1],"datasource"),null===b&&(b="datasource"),b=c.toString(b).toLowerCase(),B.convertToFeatureSet(a[0].fullSchema(),b,e.lrucache,e.interceptor,e.spatialReference);throw Error("Invalid Parameter");})},d.signatures.push({name:"getfeatureset",min:"1",max:"2"}),d.functions.featuresetbyportalitem=function(e,p){return d.standardFunctionAsync(e,
p,(b,q,a)=>{c.pcCheck(a,2,5);if(null===a[0])throw Error("Portal is required");if(a[0]instanceof L){b=c.toString(a[1]);q=c.toString(a[2]);var g=c.defaultUndefined(a[3],null);const n=c.toBoolean(c.defaultUndefined(a[4],!0));null===g&&(g=["*"]);if(!1===c.isArray(g))throw Error("Invalid Parameter");let m=null;e.services&&e.services.portal&&(m=e.services.portal);m=B.getPortal(a[0],m);return B.constructFeatureSetFromPortalItem(b,q,e.spatialReference,g,n,m,e.lrucache,e.interceptor)}if(!1===c.isString(a[0]))throw Error("Portal is required");
b=c.toString(a[0]);q=c.toString(a[1]);g=c.defaultUndefined(a[2],null);a=c.toBoolean(c.defaultUndefined(a[3],!0));null===g&&(g=["*"]);if(!1===c.isArray(g))throw Error("Invalid Parameter");if(e.services&&e.services.portal)return B.constructFeatureSetFromPortalItem(b,q,e.spatialReference,g,a,e.services.portal,e.lrucache,e.interceptor);throw Error("Portal is required");})},d.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),d.functions.featuresetbyname=function(e,p){return d.standardFunctionAsync(e,
p,(b,q,a)=>{c.pcCheck(a,2,4);if(a[0]instanceof T){b=c.toString(a[1]);q=c.defaultUndefined(a[2],null);const g=c.toBoolean(c.defaultUndefined(a[3],!0));null===q&&(q=["*"]);if(!1===c.isArray(q))throw Error("Invalid Parameter");return a[0].featureSetByName(b,g,q)}throw Error("Invalid Parameter");})},d.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),d.functions.featureset=function(e,p){return d.standardFunction(e,p,(b,q,a)=>{c.pcCheck(a,1,1);q=a[0];b={layerDefinition:{geometryType:"",objectIdField:"",
globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(c.isString(q))q=JSON.parse(q),void 0!==q.layerDefinition?(b.layerDefinition=q.layerDefinition,b.featureSet=q.featureSet,q.layerDefinition.spatialReference&&(b.layerDefinition.spatialReference=q.layerDefinition.spatialReference)):(b.featureSet.features=q.features,b.featureSet.geometryType=q.geometryType,b.layerDefinition.geometryType=b.featureSet.geometryType,b.layerDefinition.objectIdField=q.objectIdFieldName,
b.layerDefinition.typeIdField=q.typeIdFieldName,b.layerDefinition.globalIdField=q.globalIdFieldName,b.layerDefinition.fields=q.fields,q.spatialReference&&(b.layerDefinition.spatialReference=q.spatialReference));else if(a[0]instanceof C)if(q=JSON.parse(a[0].castToText()),a=r(q,"layerdefinition"),null!==a){b.layerDefinition.geometryType=r(a,"geometrytype","");b.featureSet.geometryType=b.layerDefinition.geometryType;b.layerDefinition.globalIdField=r(a,"globalidfield","");b.layerDefinition.objectIdField=
r(a,"objectidfield","");b.layerDefinition.typeIdField=r(a,"typeidfield","");var g=r(a,"spatialreference",null);g&&(b.layerDefinition.spatialReference=Q(g));for(const h of r(a,"fields",[]))g={name:r(h,"name",""),alias:r(h,"alias",""),type:r(h,"type",""),nullable:r(h,"nullable",!0),editable:r(h,"editable",!0),length:r(h,"length",null),domain:W(r(h,"domain"))},b.layerDefinition.fields.push(g);var n=r(q,"featureset",null);if(n){g={};for(var m of b.layerDefinition.fields)g[m.name.toLowerCase()]=m.name;
for(var l of r(n,"features",[])){n={};m=r(l,"attributes",{});for(var f in m)n[g[f.toLowerCase()]]=m[f];b.featureSet.features.push({attributes:n,geometry:X(r(l,"geometry",null))})}}}else{b.layerDefinition.geometryType=r(q,"geometrytype","");b.featureSet.geometryType=b.layerDefinition.geometryType;b.layerDefinition.objectIdField=r(q,"objectidfieldname","");b.layerDefinition.typeIdField=r(q,"typeidfieldname","");if(l=r(q,"spatialreference",null))b.layerDefinition.spatialReference=Q(l);for(const h of r(q,
"fields",[]))l={name:r(h,"name",""),alias:r(h,"alias",""),type:r(h,"type",""),nullable:r(h,"nullable",!0),editable:r(h,"editable",!0),length:r(h,"length",null),domain:W(r(h,"domain"))},b.layerDefinition.fields.push(l);l={};for(const h of b.layerDefinition.fields)l[h.name.toLowerCase()]=h.name;for(g of r(q,"features",[])){f={};m=r(g,"attributes",{});for(n in m)f[l[n.toLowerCase()]]=m[n];b.featureSet.features.push({attributes:f,geometry:X(r(g,"geometry",null))})}}else throw Error("Invalid Parameter");
if(b.layerDefinition&&b.featureSet){b:{l=" esriGeometryPoint esriGeometryPolyline esriGeometryPolygon esriGeometryMultipoint esriGeometryEnvelope".split(" ");for(k of l)if(k===b.layerDefinition.geometryType){var k=!0;break b}k=!1}k=!1===k||null===b.layerDefinition.objectIdField||""===b.layerDefinition.objectIdField||!1===c.isArray(b.layerDefinition.fields)||!1===c.isArray(b.featureSet.features)?!1:!0}else k=!1;if(!1===k)throw Error("Invalid Parameter");return fa.create(b,e.spatialReference)})},d.signatures.push({name:"featureset",
min:"1",max:"1"}),d.functions.filter=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,2,2);if(c.isArray(a[0])||c.isImmutableArray(a[0])){const g=[];let n=a[0];n instanceof ba&&(n=n.toArray());let m=null;if(a[1]instanceof aa)m=d.arcadeCustomFunctionHandler(a[1]);else if(a[1]instanceof c.NativeFunction)m=(...l)=>a[1].fn(e,{preparsed:!0,arguments:l});else if(a[1]instanceof c.SizzleFunction)m=(...l)=>{if(l.length!==a[1].paramCount)throw Error("Invalid parameters");return a[1].fn(...l)};
else throw Error("Invalid Parameter");return n.reduce((l,f,k)=>l.then(h=>{0<k&&!0===h&&g.push(n[k-1]);h=m(f);return A.isPromiseLike(h)?h:A.resolve(h)}),Promise.resolve(!1)).then(l=>{!0===l&&0<n.length&&g.push(n[n.length-1]);return g})}return c.isFeatureSet(a[0])?a[0].load().then(g=>{const n=z.WhereClause.create(a[1],g.getFieldsIndex()),m=n.getVariables();if(0<m.length){g=[];for(let l=0;l<m.length;l++)g.push(d.evaluateIdentifier(e,{name:m[l]}));return A.all(g).then(l=>{const f={};for(let k=0;k<m.length;k++)f[m[k]]=
l[k];n.parameters=f;return new U({parentfeatureset:a[0],whereclause:n})})}return A.resolve(new U({parentfeatureset:a[0],whereclause:n}))}):d.failDefferred("Filter cannot accept this parameter type")})},d.signatures.push({name:"filter",min:"2",max:"2"}),d.functions.orderby=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,2,2);return c.isFeatureSet(a[0])?(b=new ha(a[1]),A.resolve(new ca({parentfeatureset:a[0],orderbyclause:b}))):d.failDefferred("Order cannot accept this parameter type")})},
d.signatures.push({name:"orderby",min:"2",max:"2"}),d.functions.top=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,2,2);return c.isFeatureSet(a[0])?A.resolve(new da({parentfeatureset:a[0],topnum:a[1]})):c.isArray(a[0])?c.toNumber(a[1])>=a[0].length?a[0].slice(0):a[0].slice(0,c.toNumber(a[1])):c.isImmutableArray(a[0])?c.toNumber(a[1])>=a[0].length()?a[0].slice(0):a[0].slice(0,c.toNumber(a[1])):d.failDefferred("Top cannot accept this parameter type")})},d.signatures.push({name:"top",
min:"2",max:"2"}),d.functions.first=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,1,1);return c.isFeatureSet(a[0])?a[0].first(b.abortSignal).then(g=>{if(null!==g){const n=Z.createFromGraphicLikeObject(g.geometry,g.attributes,a[0]);n._underlyingGraphic=g;g=n}return g}):c.isArray(a[0])?0===a[0].length?A.resolve(null):A.resolve(a[0][0]):c.isImmutableArray(a[0])?0===a[0].length()?A.resolve(null):A.resolve(a[0].get(0)):null})},d.signatures.push({name:"first",min:"1",max:"1"}),
d.functions.attachments=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,1,2);var g=-1,n=-1,m=null,l=!1;if(1<a.length)if(a[1]instanceof C)a[1].hasField("minsize")&&(g=c.toNumber(a[1].field("minsize"))),a[1].hasField("metadata")&&(l=c.toBoolean(a[1].field("metadata"))),a[1].hasField("maxsize")&&(n=c.toNumber(a[1].field("maxsize"))),a[1].hasField("types")&&(b=c.toStringArray(a[1].field("types"),!1),0<b.length&&(m=b));else if(null!==a[1])throw Error("Invalid Parameter");if(c.isFeature(a[0])){let f=
a[0]._layer;f instanceof O&&(f=B.constructFeatureSet(f,e.spatialReference,["*"],!0,e.lrucache,e.interceptor));return null===f||!1===c.isFeatureSet(f)?[]:f.load().then(()=>f.queryAttachments(a[0].field(f.objectIdField),g,n,m,l))}if(null===a[0])return[];throw Error("Invalid Parameter");})},d.signatures.push({name:"attachments",min:"1",max:"2"}),d.functions.featuresetbyrelationshipname=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,2,4);const g=a[0],n=c.toString(a[1]);let m=c.defaultUndefined(a[2],
null);const l=c.toBoolean(c.defaultUndefined(a[3],!0));null===m&&(m=["*"]);if(!1===c.isArray(m))throw Error("Invalid Parameter");if(null===a[0])return null;if(!c.isFeature(a[0]))throw Error("Invalid Parameter");b=g._layer;b instanceof O&&(b=B.constructFeatureSet(b,e.spatialReference,["*"],!0,e.lrucache,e.interceptor));return null===b||!1===c.isFeatureSet(b)?null:b.load().then(f=>{const k=f.relationshipMetaData().filter(x=>x.name===n);if(0===k.length)return null;if(void 0!==k[0].relationshipTableId&&
null!==k[0].relationshipTableId&&-1<k[0].relationshipTableId)return B.constructFeatureSetFromRelationship(f,k[0],g.field(f.objectIdField),f.spatialReference,m,l,e.lrucache,e.interceptor);let h=f.serviceUrl();if(!h)return null;h="/"===h.charAt(h.length-1)?h+k[0].relatedTableId.toString():h+"/"+k[0].relatedTableId.toString();return B.constructFeatureSetFromUrl(h,f.spatialReference,m,l,e.lrucache,e.interceptor).then(x=>x.load().then(()=>x.relationshipMetaData()).then(t=>{t=t.filter(y=>y.id===k[0].id);
if(!1===g.hasField(k[0].keyField)||null===g.field(k[0].keyField))return f.getFeatureByObjectId(g.field(f.objectIdField),[k[0].keyField]).then(y=>{if(y){const G=z.WhereClause.create(t[0].keyField+"\x3d @id",x.getFieldsIndex());G.parameters={id:y.attributes[k[0].keyField]};return x.filter(G)}return new ea({parentfeatureset:x})});const w=z.WhereClause.create(t[0].keyField+"\x3d @id",x.getFieldsIndex());w.parameters={id:g.field(k[0].keyField)};return x.filter(w)}))})})},d.signatures.push({name:"featuresetbyrelationshipname",
min:"2",max:"4"}),d.functions.featuresetbyassociation=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,2,3);const g=a[0],n=c.toString(c.defaultUndefined(a[1],"")).toLowerCase(),m=c.isString(a[2])?c.toString(a[2]):null;if(null===a[0])return null;if(!c.isFeature(a[0]))throw Error("Invalid Parameter");let l=g._layer;l instanceof O&&(l=B.constructFeatureSet(l,e.spatialReference,["*"],!0,e.lrucache,e.interceptor));return null===l||!1===c.isFeatureSet(l)?null:l.load().then(()=>{const f=
l.serviceUrl();return B.constructAssociationMetaDataFeatureSetFromUrl(f,e.spatialReference)}).then(f=>{var k=null,h=null;let x=!1;if(null!==m&&""!==m&&void 0!==m){for(var t of f.terminals)t.terminalName===m&&(h=t.terminalId);null===h&&(x=!0)}var w=f.associations.getFieldsIndex();t=w.get("TOGLOBALID").name;const y=w.get("FROMGLOBALID").name,G=w.get("TOTERMINALID").name,R=w.get("FROMTERMINALID").name,I=w.get("FROMNETWORKSOURCEID").name,J=w.get("TONETWORKSOURCEID").name;var E=w.get("ASSOCIATIONTYPE").name;
const ja=w.get("ISCONTENTVISIBLE").name,ka=w.get("OBJECTID").name;for(var K of l.fields)if("global-id"===K.type){k=g.field(K.name);break}let F=null;K=new v.SqlExpressionAdapted(new H({name:"percentalong",alias:"percentalong",type:"double"}),z.WhereClause.create("0",f.associations.getFieldsIndex()));let Y=new v.SqlExpressionAdapted(new H({name:"side",alias:"side",type:"string"}),z.WhereClause.create("''",f.associations.getFieldsIndex()));var u={};for(var D in f.lkp)u[D]=f.lkp[D].sourceId;D=new v.StringToCodeAdapted(new H({name:"classname",
alias:"classname",type:"string"}),null,u);u="";switch(n){case "midspan":u=`((${t}='${k}') OR ( ${y}='${k}')) AND (${E} IN (5))`;D.codefield=z.WhereClause.create(`CASE WHEN (${t}='${k}') THEN ${I} ELSE ${J} END`,f.associations.getFieldsIndex());h=M.cloneField(v.AdaptedFeatureSet.findField(f.associations.fields,y));h.name="globalid";h.alias="globalid";F=new v.SqlExpressionAdapted(h,z.WhereClause.create(`CASE WHEN (${y}='${k}') THEN ${t} ELSE ${y} END`,f.associations.getFieldsIndex()));K=4<=f.unVersion?
new v.OriginalField(v.AdaptedFeatureSet.findField(f.associations.fields,w.get("PERCENTALONG").name)):new v.SqlExpressionAdapted(new H({name:"percentalong",alias:"percentalong",type:"double"}),z.WhereClause.create("0",f.associations.getFieldsIndex()));break;case "junctionedge":u=`((${t}='${k}') OR ( ${y}='${k}')) AND (${E} IN (4,6))`;D.codefield=z.WhereClause.create(`CASE WHEN (${t}='${k}') THEN ${I} ELSE ${J} END`,f.associations.getFieldsIndex());h=M.cloneField(v.AdaptedFeatureSet.findField(f.associations.fields,
y));h.name="globalid";h.alias="globalid";F=new v.SqlExpressionAdapted(h,z.WhereClause.create(`CASE WHEN (${y}='${k}') THEN ${t} ELSE ${y} END`,f.associations.getFieldsIndex()));Y=new v.SqlExpressionAdapted(new H({name:"side",alias:"side",type:"string"}),z.WhereClause.create(`CASE WHEN (${E}=4) THEN 'from' ELSE 'to' END`,f.associations.getFieldsIndex()));break;case "connected":w=`${t}='@T'`;E=`${y}='@T'`;null!==h&&(w+=` AND ${G}=@A`,E+=` AND ${R}=@A`);u="(("+w+") OR ("+E+"))";u=c.multiReplace(u,"@T",
k);w=c.multiReplace(w,"@T",k);null!==h&&(w=c.multiReplace(w,"@A",h.toString()),u=c.multiReplace(u,"@A",h.toString()));D.codefield=z.WhereClause.create("CASE WHEN "+w+` THEN ${I} ELSE ${J} END`,f.associations.getFieldsIndex());k=M.cloneField(v.AdaptedFeatureSet.findField(f.associations.fields,y));k.name="globalid";k.alias="globalid";F=new v.SqlExpressionAdapted(k,z.WhereClause.create("CASE WHEN "+w+` THEN ${y} ELSE ${t} END`,f.associations.getFieldsIndex()));break;case "container":u=`${t}='${k}' AND ${E} = 2`,
null!==h&&(u+=` AND ${G} = `+h.toString()),D.codefield=I,u="( "+u+" )",F=new v.FieldRename(v.AdaptedFeatureSet.findField(f.associations.fields,y),"globalid","globalid");case "content":u=`(${y}='${k}' AND ${E} = 2)`;null!==h&&(u+=` AND ${R} = `+h.toString());D.codefield=J;u="( "+u+" )";F=new v.FieldRename(v.AdaptedFeatureSet.findField(f.associations.fields,t),"globalid","globalid");break;case "structure":u=`(${t}='${k}' AND ${E} = 3)`;null!==h&&(u+=` AND ${G} = `+h.toString());D.codefield=I;u="( "+
u+" )";F=new v.FieldRename(v.AdaptedFeatureSet.findField(f.associations.fields,y),"globalid","globalId");break;case "attached":u=`(${y}='${k}' AND ${E} = 3)`;null!==h&&(u+=` AND ${R} = `+h.toString());D.codefield=J;u="( "+u+" )";F=new v.FieldRename(v.AdaptedFeatureSet.findField(f.associations.fields,t),"globalid","globalId");break;default:throw Error("Invalid Parameter");}x&&(u="1 \x3c\x3e 1");return new v.AdaptedFeatureSet({parentfeatureset:f.associations,adaptedFields:[new v.OriginalField(v.AdaptedFeatureSet.findField(f.associations.fields,
ka)),new v.OriginalField(v.AdaptedFeatureSet.findField(f.associations.fields,ja)),F,Y,D,K],extraFilter:u?z.WhereClause.create(u,f.associations.getFieldsIndex()):null})})})},d.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),d.functions.groupby=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>{c.pcCheck(a,3,3);return c.isFeatureSet(a[0])?a[0].load().then(g=>{const n=[],m=[];var l=!1,f=[];if(c.isString(a[1]))f.push(a[1]);else if(a[1]instanceof C)f.push(a[1]);else if(c.isArray(a[1]))f=
a[1];else if(c.isImmutableArray(a[1]))f=a[1].toArray();else return d.failDefferred("Illegal Value: GroupBy");for(var k of f)if(c.isString(k)){f=z.WhereClause.create(c.toString(k),g.getFieldsIndex());var h=!0===V.isSingleField(f)?c.toString(k):"%%%%FIELDNAME";n.push({name:h,expression:f});"%%%%FIELDNAME"===h&&(l=!0)}else if(k instanceof C){f=k.hasField("name")?k.field("name"):"%%%%FIELDNAME";h=k.hasField("expression")?k.field("expression"):"";"%%%%FIELDNAME"===f&&(l=!0);if(!f)return d.failDefferred("Illegal Value: GroupBy");
n.push({name:f,expression:z.WhereClause.create(h?h:f,g.getFieldsIndex())})}else return d.failDefferred("Illegal Value: GroupBy");f=[];if(c.isString(a[2]))f.push(a[2]);else if(c.isArray(a[2]))f=a[2];else if(c.isImmutableArray(a[2]))f=a[2].toArray();else if(a[2]instanceof C)f.push(a[2]);else return d.failDefferred("Illegal Value: GroupBy");for(const t of f)if(t instanceof C){k=t.hasField("name")?t.field("name"):"";f=t.hasField("statistic")?t.field("statistic"):"";h=t.hasField("expression")?t.field("expression"):
"";if(!k||!f||!h)return d.failDefferred("Illegal Value: GroupBy");m.push({name:k,statistic:f.toLowerCase(),expression:z.WhereClause.create(h,g.getFieldsIndex())})}else return d.failDefferred("Illegal Value: GroupBy");if(l){l={};for(const t of g.fields)l[t.name.toLowerCase()]=1;for(const t of n)"%%%%FIELDNAME"!==t.name&&(l[t.name.toLowerCase()]=1);for(const t of m)"%%%%FIELDNAME"!==t.name&&(l[t.name.toLowerCase()]=1);g=0;for(var x of n)if("%%%%FIELDNAME"===x.name){for(;1===l["field_"+g.toString()];)g++;
l["field_"+g.toString()]=1;x.name="FIELD_"+g.toString()}}x=[];for(const t of n)x.push(P(t.expression,d,e));for(const t of m)x.push(P(t.expression,d,e));return 0<x.length?A.all(x).then(()=>A.resolve(a[0].groupby(n,m))):A.resolve(a[0].groupby(n,m))}):d.failDefferred("Illegal Value: GroupBy")})},d.signatures.push({name:"groupby",min:"3",max:"3"}),d.functions.distinct=function(e,p){return d.standardFunctionAsync(e,p,(b,q,a)=>c.isFeatureSet(a[0])?(c.pcCheck(a,2,2),a[0].load().then(g=>{const n=[];var m=
[];if(c.isString(a[1]))m.push(a[1]);else if(a[1]instanceof C)m.push(a[1]);else if(c.isArray(a[1]))m=a[1];else if(c.isImmutableArray(a[1]))m=a[1].toArray();else return d.failDefferred("Illegal Value: GroupBy");var l=!1;for(const h of m)if(c.isString(h)){m=z.WhereClause.create(c.toString(h),g.getFieldsIndex());var f=!0===V.isSingleField(m)?c.toString(h):"%%%%FIELDNAME";n.push({name:f,expression:m});"%%%%FIELDNAME"===f&&(l=!0)}else if(h instanceof C){m=h.hasField("name")?h.field("name"):"%%%%FIELDNAME";
f=h.hasField("expression")?h.field("expression"):"";"%%%%FIELDNAME"===m&&(l=!0);if(!m)return d.failDefferred("Illegal Value: GroupBy");n.push({name:m,expression:z.WhereClause.create(f?f:m,g.getFieldsIndex())})}else return d.failDefferred("Illegal Value: GroupBy");if(l){l={};for(const h of g.fields)l[h.name.toLowerCase()]=1;for(const h of n)"%%%%FIELDNAME"!==h.name&&(l[h.name.toLowerCase()]=1);g=0;for(var k of n)if("%%%%FIELDNAME"===k.name){for(;1===l["field_"+g.toString()];)g++;l["field_"+g.toString()]=
1;k.name="FIELD_"+g.toString()}}k=[];for(const h of n)k.push(P(h.expression,d,e));return 0<k.length?A.all(k).then(()=>A.resolve(a[0].groupby(n,[]))):A.resolve(a[0].groupby(n,[]))})):ia("distinct",b,q,a))})};Object.defineProperty(S,"__esModule",{value:!0})});