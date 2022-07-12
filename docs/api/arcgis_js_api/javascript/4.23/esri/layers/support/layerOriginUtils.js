// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../core/accessorSupport/PropertyOrigin"],function(g,f){function n(a,c,d){const b=f.writableNameToId(d),{id:e,properties:h}=c;c=h.map(k=>a.originIdOf(k)<b?"source":"overridden").reduce((k,p)=>k===p?k:"overridden");return{id:e,properties:[...h],status:c}}function l(a){return a.type in m}const m={feature:[{id:"blend-mode",properties:["blendMode"]},{id:"charts",properties:["charts"]},{id:"custom-parameters",properties:["customParameters"]},{id:"definition-expression",properties:["definitionExpression"]},
{id:"effect",properties:["effect","featureEffect"]},{id:"feature-reduction",properties:["featureReduction"]},{id:"floor-info",properties:["floorInfo"]},{id:"form-template",properties:["formTemplate"]},{id:"labels",properties:["labelingInfo","labelsVisible"]},{id:"legend-enabled",properties:["legendEnabled"]},{id:"opacity",properties:["opacity"]},{id:"order-by",properties:["orderBy"]},{id:"popup",properties:["popupTemplate","popupEnabled"]},{id:"refresh-interval",properties:["refreshInterval"]},{id:"renderer",
properties:["renderer"]},{id:"scale-range",properties:["minScale","maxScale"]},{id:"use-view-time",properties:["useViewTime"]}]};g.clearOverrides=function(a,c){l(a)&&m[a.type].map(d=>{d.properties.forEach(b=>{{const e=f.writableNameToId(c);a.revert(b,f.idToReadableName(e-1))}})})};g.disconnectFromSource=function(a,c){l(a)&&m[a.type].map(d=>{d.properties.forEach(b=>{{const e=f.writableNameToId(c),h=a.originIdOf(b);h<e&&h!==f.OriginId.COMPUTED&&a.updateOrigin(b,f.idToWritableName(e))}})})};g.getLayerOriginInfo=
function(a,c){if(l(a)){var d=m[a.type].map(b=>n(a,b,c));return{propertyGroupOriginInfos:d,status:d.map(b=>b.status).reduce((b,e)=>b===e?b:"mixed")}}};g.isSupportedLayer=l;Object.defineProperty(g,"__esModule",{value:!0})});