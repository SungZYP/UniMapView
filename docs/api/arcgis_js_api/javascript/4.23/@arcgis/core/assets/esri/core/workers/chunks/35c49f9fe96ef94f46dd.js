"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9461],{99461:(e,n,i)=>{i.r(n),i.d(n,{a:()=>m,b:()=>f,c:()=>w,d:()=>v,e:()=>p,f:()=>x,g:()=>d,h:()=>F,m:()=>y,s:()=>h,u:()=>T,v:()=>z});var a=i(60991),t=i(76506),l=i(60947),o=i(14249),r=i(81716),s=i(60217);let u=null;async function f(e,n){if(!n)return[];const i=e.field,a=e.valueExpression,t=e.normalizationType,o=e.normalizationField,f=e.normalizationTotal,d=[],c=e.viewInfoParams;let m=null,p=null;if(a){if(!u){const{arcadeUtils:e}=await(0,s.l)();u=e}m=u.createFunction(a),p=c&&u.getViewInfo({viewingMode:c.viewingMode,scale:c.scale,spatialReference:new l.Z(c.spatialReference)})}return n.forEach((e=>{const n=e.attributes;let l;if(a){const n=u.createExecContext(e,p);l=u.executeFunction(m,n)}else n&&(l=n[i]);if(t&&isFinite(l)){const e=n&&parseFloat(n[o]);l=(0,r.b)(l,t,e,f)}d.push(l)})),d}function d(e){const n=e.field,i=e.normalizationType,a=e.normalizationField;let t;return"field"===i?t="(NOT "+a+" = 0)":"log"!==i&&"natural-log"!==i&&"square-root"!==i||(t=`(${n} > 0)`),t}function c(e,n){return new a.Z(e,n)}function m(e,n,i){const a=null!=n?e+" >= "+n:"",t=null!=i?e+" <= "+i:"";let l="";return l=a&&t?y(a,t):a||t,l?"("+l+")":""}function p(e,n,i,a){let t=null;return n?n.name!==e.objectIdField&&-1!==a.indexOf(n.type)||(t=c(i,"'field' should be one of these types: "+a.join(","))):t=c(i,"'field' is not defined in the layer schema"),t}function v(e,n,i){let a;return n?n.name!==e.objectIdField&&(0,o.H7)(n)||(a=c(i,"'field' should be one of these numeric types: "+o.v5.join(","))):a=c(i,"'field' is not defined in the layer schema"),a}function y(e,n){let i=(0,t.i)(e)?e:"";return(0,t.i)(n)&&n&&(i=i?"("+i+") AND ("+n+")":n),i}function z(e,n,i){const a=function(e){const n=e.layer;return e.fields.filter((e=>!n.getField(e)))}({layer:e,fields:n});if(a.length)return c(i,"Unknown fields: "+a.join(", ")+". You can only use fields defined in the layer schema");const t=function(e){const n=e.layer;return e.fields.filter((e=>{const i=n.getFieldUsageInfo(e);return!i||!i.supportsStatistics}))}({layer:e,fields:n});return t.length?c(i,"Unsupported fields: "+t.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}async function h(e){const{attribute:n,features:i}=e,{normalizationType:a,normalizationField:t,minValue:l,maxValue:o,fieldType:s}=n,u=await f({field:n.field,valueExpression:n.valueExpression,normalizationType:a,normalizationField:t,normalizationTotal:n.normalizationTotal,viewInfoParams:n.viewInfoParams},i),d=(0,r.i)({normalizationType:a,normalizationField:t,minValue:l,maxValue:o}),c={value:.5,fieldType:s},m="esriFieldTypeString"===s?(0,r.d)({values:u,supportsNullCount:d,percentileParams:c}):(0,r.e)({values:u,minValue:l,maxValue:o,useSampleStdDev:!a,supportsNullCount:d,percentileParams:c});return(0,r.p)(m,"esriFieldTypeDate"===s)}async function T(e){const{attribute:n,features:i}=e,a=await f({field:n.field,valueExpression:n.valueExpression,viewInfoParams:n.viewInfoParams},i),t=(0,r.f)(a);return(0,r.c)(t,n.domain,n.returnAllCodedValues)}async function w(e){const{attribute:n,features:i}=e,{field:a,normalizationType:t,normalizationField:l,normalizationTotal:o,classificationMethod:s}=n,u=await f({field:a,valueExpression:n.valueExpression,normalizationType:t,normalizationField:l,normalizationTotal:o,viewInfoParams:n.viewInfoParams},i),d=(0,r.h)(u,{field:a,normalizationType:t,normalizationField:l,normalizationTotal:o,classificationMethod:s,standardDeviationInterval:n.standardDeviationInterval,numClasses:n.numClasses,minValue:n.minValue,maxValue:n.maxValue});return(0,r.r)(d,s)}async function F(e){const{attribute:n,features:i}=e,{field:a,normalizationType:t,normalizationField:l,normalizationTotal:o,classificationMethod:s}=n,u=await f({field:a,valueExpression:n.valueExpression,normalizationType:t,normalizationField:l,normalizationTotal:o,viewInfoParams:n.viewInfoParams},i);return(0,r.j)(u,{field:a,normalizationType:t,normalizationField:l,normalizationTotal:o,classificationMethod:s,standardDeviationInterval:n.standardDeviationInterval,numBins:n.numBins,minValue:n.minValue,maxValue:n.maxValue})}const x=Object.freeze({__proto__:null,summaryStatistics:h,uniqueValues:T,classBreaks:w,histogram:F})}}]);