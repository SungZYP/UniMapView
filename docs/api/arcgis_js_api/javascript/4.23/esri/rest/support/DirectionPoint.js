// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../PopupTemplate ../../symbols ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../geometry/Point ./networkEnums ../../symbols/support/jsonUtils".split(" "),function(D,d,l,E,b,c,e,I,J,K,F,G,m,g,H){var k;b=k=function(n){function h(a){a=
n.call(this,a)||this;a.alternateName=null;a.arrivalTime=null;a.arrivalTimeOffset=null;a.azimuth=null;a.branchName=null;a.directionPointType=null;a.displayText=null;a.exitName=null;a.geometry=null;a.intersectingName=null;a.level=null;a.name=null;a.objectId=null;a.popupTemplate=null;a.sequence=null;a.shortVoiceInstruction=null;a.stopId=null;a.symbol=null;a.towardName=null;a.voiceInstruction=null;return a}D._inheritsLoose(h,n);var p=h.prototype;p.readArrivalTime=function(a,f){return c.isSome(f.attributes.ArrivalTime)?
new Date(f.attributes.ArrivalTime):null};h.fromPortalJSON=function(a){var f,q,r,t,u,v,w,x,y,z,A,B,C;return new k({alternateName:null!=(f=a.attributes.AlternateName)?f:null,arrivalTime:c.isSome(a.attributes.ArrivalTime)?new Date(a.attributes.ArrivalTime):null,arrivalTimeOffset:null!=(q=a.attributes.ArrivalUTCOffset)?q:null,azimuth:null!=(r=a.attributes.Azimuth)?r:null,branchName:null!=(t=a.attributes.BranchName)?t:null,directionPointType:g.directionPointTypeJsonMap.fromJSON(a.attributes.DirectionPointType),
displayText:null!=(u=a.attributes.DisplayText)?u:null,exitName:null!=(v=a.attributes.ExitName)?v:null,geometry:m.fromJSON(a.geometry),intersectingName:null!=(w=a.attributes.IntersectingName)?w:null,level:null!=(x=a.attributes.Level)?x:null,name:null!=(y=a.attributes.Name)?y:null,objectId:a.attributes.__OBJECTID,popupTemplate:c.isSome(a.popupInfo)?l.fromJSON(a.popupInfo):null,sequence:a.attributes.Sequence,shortVoiceInstruction:null!=(z=a.attributes.ShortVoiceInstruction)?z:null,stopId:null!=(A=a.attributes.StopID)?
A:null,symbol:c.isSome(a.symbol)?H.fromJSON(a.symbol):null,towardName:null!=(B=a.attributes.TowardName)?B:null,voiceInstruction:null!=(C=a.attributes.VoiceInstruction)?C:null})};p.toPortalJSON=function(){const a={geometry:c.isSome(this.geometry)?this.geometry.toJSON():null,attributes:{__OBJECTID:c.unwrap(this.objectId),DirectionPointType:c.isSome(this.directionPointType)?g.directionPointTypeJsonMap.toJSON(this.directionPointType):null,Sequence:c.unwrap(this.sequence),StopID:this.stopId},symbol:c.isSome(this.symbol)?
this.symbol.toJSON():null,popupInfo:c.isSome(this.popupTemplate)?this.popupTemplate.toJSON():null};c.isSome(this.alternateName)&&(a.attributes.AlternateName=this.alternateName);c.isSome(this.arrivalTime)&&(a.attributes.ArrivalTime=this.arrivalTime.getTime());c.isSome(this.arrivalTimeOffset)&&(a.attributes.ArrivalUTCOffset=this.arrivalTimeOffset);c.isSome(this.azimuth)&&(a.attributes.Azimuth=this.azimuth);c.isSome(this.branchName)&&(a.attributes.BranchName=this.branchName);c.isSome(this.displayText)&&
(a.attributes.DisplayText=this.displayText);c.isSome(this.exitName)&&(a.attributes.ExitName=this.exitName);c.isSome(this.intersectingName)&&(a.attributes.IntersectingName=this.intersectingName);c.isSome(this.level)&&(a.attributes.Level=this.level);c.isSome(this.name)&&(a.attributes.Name=this.name);c.isSome(this.shortVoiceInstruction)&&(a.attributes.ShortVoiceInstruction=this.shortVoiceInstruction);c.isSome(this.towardName)&&(a.attributes.TowardName=this.towardName);c.isSome(this.voiceInstruction)&&
(a.attributes.VoiceInstruction=this.voiceInstruction);return a};return h}(b.JSONSupport);b.fields=[{name:"__OBJECTID",alias:"OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AlternateName",alias:"Alternative Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"ArrivalTime",alias:"Maneuver Starts at",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"ArrivalUTCOffset",alias:"Offset from UTC in Minutes",
type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Azimuth",alias:"Azimuth",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"BranchName",alias:"Signpost Branch Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"DirectionPointType",alias:"Directions Item Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriDirectionPointType",codedValues:[{name:"Unknown",code:0},
{name:"",code:1},{name:"Arrive at stop",code:50},{name:"Depart at stop",code:51},{name:"Go straight",code:52},{name:"Take ferry",code:100},{name:"Take off ferry",code:101},{name:"Keep center at fork",code:102},{name:"Take roundabout",code:103},{name:"Make U-Turn",code:104},{name:"Pass the door",code:150},{name:"Take stairs",code:151},{name:"",code:152},{name:"Take escalator",code:153},{name:"Take pedestrian ramp",code:154},{name:"Keep left at fork",code:200},{name:"Ramp left",code:201},{name:"Take left-handed roundabout",
code:202},{name:"Make left-handed U-Turn",code:203},{name:"Bear left",code:204},{name:"Turn left",code:205},{name:"Make sharp left",code:206},{name:"Turn left, followed by turn left",code:207},{name:"Turn left, followed by turn right",code:208},{name:"Keep right at fork",code:300},{name:"Ramp right",code:301},{name:"Take right-handed roundabout",code:302},{name:"Make right-handed U-Turn",code:303},{name:"Bear right",code:304},{name:"Turn right",code:305},{name:"Make sharp right",code:306},{name:"Turn right, followed by turn left",
code:307},{name:"Turn right, followed by turn right",code:308},{name:"Indicates up direction of elevator",code:400},{name:"Indicates up direction of escalator",code:401},{name:"Take up-stairs",code:402},{name:"Indicates down direction of elevator",code:500},{name:"Indicates down direction of escalator",code:501},{name:"Take down-stairs",code:502},{name:"General event",code:1E3},{name:"Landmark",code:1001},{name:"Time zone change",code:1002},{name:"Heavy traffic segment",code:1003},{name:"Scale cost barrier crossing",
code:1004},{name:"Administrative Border crossing",code:1005},{name:"Restriction violation",code:1006}]}},{name:"DisplayText",alias:"Text to Display",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"ExitName",alias:"Highway Exit Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"IntersectingName",alias:"Intersecting Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},
{name:"Level",alias:"3D Logical Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Name",alias:"Primary Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"ShortVoiceInstruction",alias:"Voice Instruction",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"StopID",alias:"Stop ID",
type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TowardName",alias:"Signpost Toward Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"VoiceInstruction",alias:"Voice Full Instruction",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null}];b.popupInfo={title:"{DisplayText}",fieldInfos:[{fieldName:"DirectionPointType",label:"Directions Item Type",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},
{fieldName:"DisplayText",label:"Text to Display",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Sequence",label:"Sequence",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"StopID",label:"Stop ID",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalTime",label:"Maneuver Starts at",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},
stringFieldOption:"textbox"},{fieldName:"ArrivalUTCOffset",label:"Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Azimuth",label:"Azimuth",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Name",label:"Primary Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"AlternateName",label:"Alternative Feature Name",
isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ExitName",label:"Highway Exit Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"IntersectingName",label:"Intersecting Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BranchName",label:"Signpost Branch Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"TowardName",label:"Signpost Toward Name",isEditable:!1,tooltip:"",
visible:!0,stringFieldOption:"textbox"},{fieldName:"ShortVoiceInstruction",label:"Voice Instruction",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"VoiceInstruction",label:"Voice Full Instruction",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]};d.__decorate([e.property({json:{read:!1}})],b.prototype,"alternateName",void 0);d.__decorate([e.property()],b.prototype,"arrivalTime",void 0);d.__decorate([F.reader("arrivalTime",
["attributes.ArrivalTime"])],b.prototype,"readArrivalTime",null);d.__decorate([e.property({json:{read:{source:"attributes.ArrivalUTCOffset"}}})],b.prototype,"arrivalTimeOffset",void 0);d.__decorate([e.property({json:{read:{source:"attributes.Azimuth"}}})],b.prototype,"azimuth",void 0);d.__decorate([e.property({json:{read:{source:"attributes.BranchName"}}})],b.prototype,"branchName",void 0);d.__decorate([e.property({type:g.directionPointTypeJsonMap.apiValues,json:{read:{source:"attributes.DirectionPointType",
reader:g.directionPointTypeJsonMap.read}}})],b.prototype,"directionPointType",void 0);d.__decorate([e.property({json:{read:{source:"attributes.DisplayText"}}})],b.prototype,"displayText",void 0);d.__decorate([e.property({json:{read:{source:"attributes.ExitName"}}})],b.prototype,"exitName",void 0);d.__decorate([e.property({type:m})],b.prototype,"geometry",void 0);d.__decorate([e.property({json:{read:!1}})],b.prototype,"intersectingName",void 0);d.__decorate([e.property({json:{read:!1}})],b.prototype,
"level",void 0);d.__decorate([e.property({json:{read:{source:"attributes.Name"}}})],b.prototype,"name",void 0);d.__decorate([e.property({json:{read:{source:"attributes.ObjectID"}}})],b.prototype,"objectId",void 0);d.__decorate([e.property({type:l,json:{read:!1}})],b.prototype,"popupTemplate",void 0);d.__decorate([e.property({json:{read:{source:"attributes.Sequence"}}})],b.prototype,"sequence",void 0);d.__decorate([e.property({json:{read:!1}})],b.prototype,"shortVoiceInstruction",void 0);d.__decorate([e.property({json:{read:{source:"attributes.StopID"}}})],
b.prototype,"stopId",void 0);d.__decorate([e.property({types:E.symbolTypes,json:{read:!1}})],b.prototype,"symbol",void 0);d.__decorate([e.property({json:{read:{source:"attributes.TowardName"}}})],b.prototype,"towardName",void 0);d.__decorate([e.property({json:{read:!1}})],b.prototype,"voiceInstruction",void 0);return b=k=d.__decorate([G.subclass("esri.rest.support.DirectionPoint")],b)});