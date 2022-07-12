// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/Error","../../../../../rest/query/operations/pbfFeatureServiceParser"],function(m,x,r){let t=function(){function a(){this.fieldMap=new Map;this.fields=[];this.hasFeatures=!1;this.vertexCount=this.objectIdFieldIndex=this.featureCount=this.fieldCount=0;this.offsets={attributes:[],geometry:[]};this.centroid=[]}var g=a.prototype;g.hasField=function(f){return this.fieldMap.has(f)};g.isDateField=function(f){var k;return null==(k=this.fieldMap.get(f))?void 0:k.isDate};
g.getFieldIndex=function(f){var k;return null==(k=this.fieldMap.get(f))?void 0:k.index};return a}();m.FeatureSetHeader=t;m.parseHeader=function(a,g,f=!1){const k=a.pos(),b=new t;let l=0,h=0,u=null,v=null,w=null,n=!1;for(;a.next();)switch(a.tag()){case 1:u=a.getString();break;case 3:v=a.getString();break;case 12:w=a.processMessage(r.parseTransform);break;case 9:b.exceededTransferLimit=a.getBool();if(b.exceededTransferLimit){b.offsets.geometry=f?new Float64Array(8E3):new Int32Array(8E3);b.centroid=
f?new Float64Array(16E3):new Int32Array(16E3);for(var d=0;d<b.centroid.length;d++)b.centroid[d]=268435455}break;case 13:d=a;var e=d.getLength();e=d.pos()+e;for(var c={name:"",isDate:!1};d.pos()<e&&d.next();)switch(d.tag()){case 1:c.name=d.getString();break;case 2:"esriFieldTypeDate"===r.parseFieldType(d.getEnum())&&(c.isDate=!0);break;default:d.skip()}d=c;c=d.name;e=d.name.toLowerCase().trim();c={fieldName:c,index:l++,isDate:d.isDate};b.fields.push(c);b.fieldMap.set(d.name,c);b.fieldMap.set(e,c);
break;case 15:d=a.getLength();d=a.pos()+d;b.exceededTransferLimit||(e=b.centroid,b.offsets.geometry.push(0),e.push(268435455),e.push(268435455));!n&&b.exceededTransferLimit&&(n=!0,b.offsets.attributes=f?new Float64Array(8E3*l):new Uint32Array(8E3*l));for(e=h*l;a.pos()<d&&a.next();)switch(a.tag()){case 1:n?b.offsets.attributes[e++]=a.pos():b.offsets.attributes.push(a.pos());c=a.getLength();a.skipLen(c);break;case 2:if(g)for(c=a.getLength(),c=a.pos()+c;a.pos()<c&&a.next();)switch(a.tag()){case 3:a.getUInt32();
var p=a.getSInt64(),q=a.getSInt64();b.centroid[2*h]=p;b.centroid[2*h+1]=q;break;default:a.skip()}else b.offsets.geometry[h]=a.pos(),c=a.getLength(),b.vertexCount+=c,a.skipLen(c);break;case 4:c=a.getLength();for(c=a.pos()+c;a.pos()<c&&a.next();)switch(a.tag()){case 3:a.getUInt32();p=a.getSInt64();q=a.getSInt64();b.centroid[2*h]=p;b.centroid[2*h+1]=q;break;default:a.skip()}break;default:a.skip()}h++;b.hasFeatures=!0;break;default:a.skip()}g=u||v;if(!g)throw new x("FeatureSet has no objectId or globalId field name");
b.featureCount=h;b.fieldCount=l;b.objectIdFieldIndex=b.getFieldIndex(g);b.transform=w;b.displayIds=new Uint32Array(b.featureCount);b.groupIds=new Uint16Array(b.featureCount);a.move(k);return b};Object.defineProperty(m,"__esModule",{value:!0})});