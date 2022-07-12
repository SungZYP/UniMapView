// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../core/lang ../../core/Logger ../../core/maybe ../../core/screenUtils ../../core/string ../../support/arcadeOnDemand ./CIMSymbolHelper ./enums ./SDFHelper ./utils ./effects/CIMEffectHelper ../../views/2d/arcade/callExpressionWithFeature ../../views/2d/engine/webgl/fontUtils".split(" "),function(Y,pa,qa,ea,ra,P,sa,A,S,D,N,V,u,fa,W,ta){function Z(a){switch(a){case "Butt":return N.CapType.BUTT;case "Square":return N.CapType.SQUARE;
default:return N.CapType.ROUND}}function aa(a){switch(a){case "Bevel":return N.JoinType.BEVEL;case "Miter":return N.JoinType.MITER;default:return N.JoinType.ROUND}}function ua(a){switch(a){default:return"left";case "Right":return"right";case "Center":return"center";case "Justify":return"justify"}}function va(a){switch(a){default:return"top";case "Center":return"middle";case "Baseline":return"baseline";case "Bottom":return"bottom"}}function wa(a){let h="",d="";a&&(a=a.toLowerCase(),-1!==a.indexOf("italic")?
h="italic":-1!==a.indexOf("oblique")&&(h="oblique"),-1!==a.indexOf("bold")?d="bold":-1!==a.indexOf("light")&&(d="lighter"));return{style:h,weight:d}}function ha(a,h,d,c){let b;a[h]?b=a[h]:(b={},a[h]=b);b[d]=c}function ia(a){return(a=a.markerPlacement)&&a.angleToLine?N.Alignment.MAP:N.Alignment.SCREEN}function ba(){ba=pa._asyncToGenerator(function*(a,h,d,c,b){c=null!=c?c:[];if(!a)return c;let f;const g={};if("CIMSymbolReference"===a.type){if(f=a.symbol,a=a.primitiveOverrides){var k=[];for(const p of a){var l=
p.valueExpressionInfo;l&&h?(l=S.createRendererExpression(l.expression,h.spatialReference,h.fields).then(q=>{q&&ha(g,p.primitiveName,p.propertyName,q)}),k.push(l)):null!=p.value&&ha(g,p.primitiveName,p.propertyName,p.value)}0<k.length&&(yield Promise.all(k))}}else return ja.error("Expect cim type to be 'CIMSymbolReference'"),c;k=[];ka(f,d,k);0<k.length&&(yield Promise.all(k));switch(f.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":xa(f,a,g,h,c,d,b)}return c});return ba.apply(this,
arguments)}function xa(a,h,d,c,b,f,g){if(a){var k=a.symbolLayers;if(k){var l=a.effects,p=D.CIMSymbolHelper.getSize(a);if("CIMPointSymbol"===a.type&&"Map"===a.angleAlignment)var q=N.Alignment.MAP;for(var v=k.length;v--;){var e=k[v];if(!e||!1===e.enable)continue;let B;l&&l.length&&(B=[...l]);var r=e.effects;r&&r.length&&(l?B.push(...r):B=[...r]);r=[];D.OverrideHelper.findEffectOverrides(B,h,r);r=0<r.length?ya(B,r,d,c):B;var n=[];D.OverrideHelper.findApplicableOverrides(e,h,n);switch(e.type){case "CIMSolidFill":za(e,
r,d,n,c,b);break;case "CIMPictureFill":Aa(e,r,d,n,c,f,b);break;case "CIMHatchFill":Ba(e,r,d,n,c,b);break;case "CIMGradientFill":{var t=d,w=c,y=b;const [E,L]=M(n,e.primitiveName,r,null);var x=A.numericHash(JSON.stringify(e)+L).toString();y.push({type:"fill",templateHash:x,materialHash:E?T(x,t,n,w):x,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:r,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}break;case "CIMSolidStroke":Ca(e,r,d,n,c,b,"CIMPolygonSymbol"===
a.type,p);break;case "CIMPictureStroke":Da(e,r,d,n,c,b,"CIMPolygonSymbol"===a.type,p);break;case "CIMGradientStroke":{t=d;w=c;y=b;x="CIMPolygonSymbol"===a.type;var z=p,C=e.primitiveName,F=void 0!==e.width?e.width:4,H=Z(e.capStyle),J=aa(e.joinStyle),G=e.miterLimit;const [E,L]=M(n,C,r,null),I=A.numericHash(JSON.stringify(e)+L).toString();y.push({type:"line",templateHash:I,materialHash:E?T(I,t,n,w):I,cim:e,materialOverrides:null,isOutline:x,colorLocked:e.colorLocked,effects:r,color:{r:128,g:128,b:128,
a:1},width:m(C,t,"Width",w,F),cap:m(C,t,"CapStyle",w,H),join:m(C,t,"JoinStyle",w,J),miterLimit:m(C,t,"MiterLimit",w,G),referenceWidth:z,zOrder:ca(e.name),dashTemplate:null,scaleDash:!1})}break;case "CIMCharacterMarker":da(e,r,d,n,c,b);break;case "CIMPictureMarker":if(da(e,r,d,n,c,b))break;"CIMLineSymbol"===a.type&&(q=ia(e));Ea(e,r,d,n,c,f,b,q,p);break;case "CIMVectorMarker":if(da(e,r,d,n,c,b))break;"CIMLineSymbol"===a.type&&(q=ia(e));t=d;w=c;y=b;x=f;z=q;C=p;F=g;if(J=e.markerGraphics){H=0;e.scaleSymbolsProportionally&&
(G=e.frame)&&(H=G.ymax-G.ymin);G=la(e.markerPlacement,n,t,w);for(const E of J)if(E&&(J=E.symbol))switch(J.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":Fa(e,r,G,E,n,t,w,y,x,z,C,H,F);break;case "CIMTextSymbol":Ga(e,r,G,E,t,n,w,y,z,C,H)}}break;default:ja.error("Cannot analyze CIM layer",e.type)}}}}}function za(a,h,d,c,b,f){const g=a.primitiveName,k=u.fromCIMColor(a.color),[l,p]=M(c,g,h,null),q=A.numericHash(JSON.stringify(a)+p).toString();f.push({type:"fill",templateHash:q,
materialHash:l?()=>q:q,cim:a,materialOverrides:null,colorLocked:a.colorLocked,color:m(g,d,"Color",b,k,O),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:h})}function Aa(a,h,d,c,b,f,g){const k=a.primitiveName,l=a.tintColor?u.fromCIMColor(a.tintColor):{r:255,g:255,b:255,a:1},[p,q]=M(c,k,h,null);c=A.numericHash(JSON.stringify(a)+q).toString();const v=A.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString();let e=u.getValue(a.scaleX);if("width"in a){const r=a.width;let n=1;f=
f.getResource(a.url);P.isSome(f)&&(n=f.width/f.height);e/=a.height/r*n}g.push({type:"fill",templateHash:c,materialHash:p?()=>v:v,cim:a,materialOverrides:null,colorLocked:a.colorLocked,effects:h,color:m(k,d,"TintColor",b,l,O),height:m(k,d,"Height",b,a.height),scaleX:m(k,d,"ScaleX",b,e),angle:m(k,d,"Rotation",b,u.getValue(a.rotation)),offsetX:m(k,d,"OffsetX",b,u.getValue(a.offsetX)),offsetY:m(k,d,"OffsetY",b,u.getValue(a.offsetY)),url:a.url})}function Ba(a,h,d,c,b,f){const g=["Rotation","OffsetX","OffsetY"],
k=c.filter(e=>e.primitiveName!==a.primitiveName&&-1===g.indexOf(e.propertyName)),l=a.primitiveName,[p,q]=M(c,l,h,null);c=A.numericHash(JSON.stringify(a)+q).toString();const v=A.numericHash(`${a.separation}${JSON.stringify(a.lineSymbol)}`).toString();f.push({type:"fill",templateHash:c,materialHash:p?T(v,d,k,b):v,cim:a,materialOverrides:k,colorLocked:a.colorLocked,effects:h,color:{r:255,g:255,b:255,a:1},height:m(l,d,"Separation",b,a.separation),scaleX:1,angle:m(l,d,"Rotation",b,u.getValue(a.rotation)),
offsetX:m(l,d,"OffsetX",b,u.getValue(a.offsetX)),offsetY:m(l,d,"OffsetY",b,u.getValue(a.offsetY))})}function Ca(a,h,d,c,b,f,g,k){const l=a.primitiveName,p=u.fromCIMColor(a.color),q=void 0!==a.width?a.width:4,v=Z(a.capStyle),e=aa(a.joinStyle),r=a.miterLimit,[n,t]=M(c,l,h,null),w=A.numericHash(JSON.stringify(a)+t).toString();let y;if(h&&h instanceof Array&&0<h.length&&(c=h[h.length-1],"CIMGeometricEffectDashes"===c.type&&"NoConstraint"===c.lineDashEnding&&null===c.offsetAlongLine)){h=[...h];var x=h.pop();
y=x.dashTemplate;x=x.scaleDash}f.push({type:"line",templateHash:w,materialHash:n?()=>w:w,cim:a,materialOverrides:null,isOutline:g,colorLocked:a.colorLocked,effects:h,color:m(l,d,"Color",b,p,O),width:m(l,d,"Width",b,q),cap:m(l,d,"CapStyle",b,v),join:m(l,d,"JoinStyle",b,e),miterLimit:m(l,d,"MiterLimit",b,r),referenceWidth:k,zOrder:ca(a.name),dashTemplate:y,scaleDash:x})}function Da(a,h,d,c,b,f,g,k){const l=A.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString(),p=a.primitiveName,
q=u.fromCIMColor(a.tintColor),v=void 0!==a.width?a.width:4,e=Z(a.capStyle),r=aa(a.joinStyle),n=a.miterLimit,[t,w]=M(c,p,h,null);c=A.numericHash(JSON.stringify(a)+w).toString();f.push({type:"line",templateHash:c,materialHash:t?()=>l:l,cim:a,materialOverrides:null,isOutline:g,colorLocked:a.colorLocked,effects:h,color:m(p,d,"TintColor",b,q,O),width:m(p,d,"Width",b,v),cap:m(p,d,"CapStyle",b,e),join:m(p,d,"JoinStyle",b,r),miterLimit:m(p,d,"MiterLimit",b,n),referenceWidth:k,zOrder:ca(a.name),dashTemplate:null,
scaleDash:!1,url:a.url})}function da(a,h,d,c,b,f){const g=a.markerPlacement;if(!g||"CIMMarkerPlacementInsidePolygon"!==g.type)return!1;const k=["Rotation","OffsetX","OffsetY"],l=c.filter(t=>t.primitiveName!==a.primitiveName&&-1===k.indexOf(t.propertyName)),p="url"in a?a.url:null,[q,v]=M(c,g.primitiveName,h,null);c=A.numericHash(JSON.stringify(a)+v).toString();let e=g.stepY,r=null,n=1;g.shiftOddRows&&(e*=2,r=function(t){return t?2*t:0},n=.5);f.push({type:"fill",templateHash:c,materialHash:q?T(c,d,
l,b):c,cim:a,materialOverrides:l,colorLocked:a.colorLocked,effects:h,color:{r:255,g:255,b:255,a:1},height:m(g.primitiveName,d,"StepY",b,e,r),scaleX:n,angle:m(g.primitiveName,d,"GridAngle",b,g.gridAngle),offsetX:m(g.primitiveName,d,"OffsetX",b,u.getValue(g.offsetX)),offsetY:m(g.primitiveName,d,"OffsetY",b,u.getValue(g.offsetY)),url:p});return!0}function Ea(a,h,d,c,b,f,g,k,l){var p;const q=a.primitiveName,v=u.getValue(a.size);let e=u.getValue(a.scaleX);const r=u.getValue(a.rotation),n=u.getValue(a.offsetX),
t=u.getValue(a.offsetY),w=a.tintColor?u.fromCIMColor(a.tintColor):{r:255,g:255,b:255,a:1},y=A.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString();var x=la(a.markerPlacement,c,d,b);const [z,C]=M(c,q,h,x);c=A.numericHash(JSON.stringify(a)+C).toString();x=null!=(p=a.anchorPoint)?p:{x:0,y:0};if("width"in a){p=a.width;let F=1;f=f.getResource(a.url);P.isSome(f)&&(F=f.width/f.height);e/=v/p*F}g.push({type:"marker",templateHash:c,materialHash:z?()=>y:y,cim:a,materialOverrides:null,colorLocked:a.colorLocked,
effects:h,scaleSymbolsProportionally:!1,alignment:k,size:m(q,d,"Size",b,v),scaleX:m(q,d,"ScaleX",b,e),rotation:m(q,d,"Rotation",b,r),offsetX:m(q,d,"OffsetX",b,n),offsetY:m(q,d,"OffsetY",b,t),color:m(q,d,"TintColor",b,w,O),anchorPoint:{x:x.x,y:-x.y},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:a.rotateClockwise,referenceSize:l,sizeRatio:1,markerPlacement:a.markerPlacement,url:a.url})}function Ga(a,h,d,c,b,f,g,k,l,
p,q){D.OverrideHelper.findApplicableOverrides(c,f,[]);var v=c.geometry;if("x"in v&&"y"in v){var e=c.symbol;var r=e.underline?"underline":e.strikethrough?"line-through":"none";var n=wa(e.fontStyleName),t=ta.getFontFamily(e.fontFamilyName);e.font={family:t,decoration:r,...n};var w=a.frame,y=v.x-.5*(w.xmin+w.xmax),x=v.y-.5*(w.ymin+w.ymax),z=a.size/q;q=a.primitiveName;v=u.getValue(e.height)*z;w=u.getValue(e.angle);y=u.getValue(a.offsetX)+(u.getValue(e.offsetX)+y)*z;x=u.getValue(a.offsetY)+(u.getValue(e.offsetY)+
x)*z;var C=u.fromCIMColor(D.CIMSymbolHelper.getFillColor(e)),F=u.fromCIMColor(D.CIMSymbolHelper.getStrokeColor(e)),H=D.CIMSymbolHelper.getStrokeWidth(e);H||(F=u.fromCIMColor(D.CIMSymbolHelper.getFillColor(e.haloSymbol)),H=e.haloSize*z);var [J,G]=M(f,q,h,d);f=JSON.stringify(a.effects)+Number(a.colorLocked)+JSON.stringify(a.anchorPoint)+a.anchorPointUnits+JSON.stringify(a.markerPlacement);f=A.numericHash(JSON.stringify(c)+f+G).toString();var B=m(c.primitiveName,b,"TextString",g,c.textString,u._adjustTextCase,
e.textCase);if(null!=B){({fontStyleName:c}=e);var E=t+(c?"-"+c.toLowerCase():"-regular");"string"===typeof B&&-1<B.indexOf("[")&&e.fieldMap&&(B=u.createLabelOverrideFunction(e.fieldMap,B,e.textCase));k.push({type:"text",templateHash:f,materialHash:J||"function"===typeof B||B.match(/\[(.*?)\]/)?(L,I,R)=>E+"-"+u.evaluateValueOrFunction(B,L,I,R):E+"-"+A.numericHash(B),cim:e,materialOverrides:null,colorLocked:a.colorLocked,effects:h,alignment:l,anchorPoint:{x:a.anchorPoint?a.anchorPoint.x:0,y:a.anchorPoint?
a.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,fontName:E,decoration:r,weight:m(q,b,"Weight",g,n.weight),style:m(q,b,"Size",g,n.style),size:m(q,b,"Size",g,v),angle:m(q,b,"Rotation",g,w),offsetX:m(q,b,"OffsetX",g,y),offsetY:m(q,b,"OffsetY",g,x),horizontalAlignment:ua(e.horizontalAlignment),verticalAlignment:va(e.verticalAlignment),text:B,color:C,outlineColor:F,outlineSize:H,referenceSize:p,sizeRatio:1,markerPlacement:d})}}}function Fa(a,h,d,c,b,f,g,k,l,p,q,v,e){var r=c.symbol;
const n=r.symbolLayers;if(n)if(e)ma(a,h,d,c,f,b,g,k,l,p,q,v);else if(e=n.length,n&&2===n.length&&n[0].enable&&n[1].enable&&"CIMSolidStroke"===n[0].type&&"CIMSolidFill"===n[1].type&&!n[0].effects&&!n[1].effects)Ha(a,h,d,c,n,b,f,g,k,p,q,v);else if(r=fa.CIMEffectHelper.applyEffects(r.effects,c.geometry,l.geometryEngine))for(;e--;){var t=n[e];if(t&&!1!==t.enable)switch(t.type){case "CIMSolidFill":case "CIMSolidStroke":{var w,y=fa.CIMEffectHelper.applyEffects(t.effects,r,l.geometryEngine),x=V.getExtent(y);
if(!x)continue;const [F,H,J]=V.getSDFMetrics(x,a.frame,a.size,a.anchorPoint,"Relative"!==a.anchorPointUnits);var z="CIMSolidFill"===t.type;y={type:"sdf",geom:y,asFill:z};var C=a.primitiveName;x=null!=(w=u.getValue(a.size))?w:10;const G=u.getValue(a.rotation),B=u.getValue(a.offsetX),E=u.getValue(a.offsetY),L=t.path,I=t.primitiveName,R=z?u.fromCIMColor(D.CIMSymbolHelper.getFillColor(t)):u.fromCIMColor(D.CIMSymbolHelper.getStrokeColor(t)),X=z?{r:0,g:0,b:0,a:0}:u.fromCIMColor(D.CIMSymbolHelper.getStrokeColor(t)),
K=D.CIMSymbolHelper.getStrokeWidth(t);if(!z&&!K)break;z=!1;let na="";for(const Q of b)if(Q.primitiveName===I||Q.primitiveName===C)void 0!==Q.value?na+=`-${Q.primitiveName}-${Q.propertyName}-${JSON.stringify(Q.value)}`:Q.valueExpressionInfo&&(z=!0);P.isSome(h)&&"function"===typeof h&&(z=!0);C=JSON.stringify({...a,markerGraphics:null});const oa=A.numericHash(JSON.stringify(y)+L).toString();t={type:"marker",templateHash:A.numericHash(JSON.stringify(c)+JSON.stringify(t)+C+na).toString(),materialHash:z?
()=>oa:oa,cim:y,materialOverrides:null,colorLocked:a.colorLocked,effects:h,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:H,y:J},isAbsoluteAnchorPoint:!1,size:m(a.primitiveName,f,"Size",g,x),rotation:m(a.primitiveName,f,"Rotation",g,G),offsetX:m(a.primitiveName,f,"OffsetX",g,B),offsetY:m(a.primitiveName,f,"OffsetY",g,E),scaleX:1,frameHeight:v,rotateClockwise:a.rotateClockwise,referenceSize:q,sizeRatio:F,color:m(I,f,"Color",g,R,O),outlineColor:m(I,f,"Color",g,X,
O),outlineWidth:m(I,f,"Width",g,K),markerPlacement:d,path:L};k.push(t);break}default:ma(a,h,d,c,f,b,g,k,l,p,q,v)}}}function Ha(a,h,d,c,b,f,g,k,l,p,q,v){var e=c.geometry;const r=b[0];b=b[1];var n=V.getExtent(e);if(n){var [t,w,y]=V.getSDFMetrics(n,a.frame,a.size,a.anchorPoint,"Relative"!==a.anchorPointUnits);e={type:"sdf",geom:e,asFill:!0};var x=a.primitiveName;n=u.getValue(a.size);var z=u.getValue(a.rotation),C=u.getValue(a.offsetX),F=u.getValue(a.offsetY),H=b.path,J=b.primitiveName,G=r.primitiveName,
B=u.fromCIMColor(D.CIMSymbolHelper.getFillColor(b)),E=u.fromCIMColor(D.CIMSymbolHelper.getStrokeColor(r)),L=D.CIMSymbolHelper.getStrokeWidth(r),I=!1,R="";for(const K of f)if(K.primitiveName===J||K.primitiveName===G||K.primitiveName===x)void 0!==K.value?R+=`-${K.primitiveName}-${K.propertyName}-${JSON.stringify(K.value)}`:K.valueExpressionInfo&&(I=!0);f=JSON.stringify({...a,markerGraphics:null});var X=A.numericHash(JSON.stringify(e)+H).toString();a={type:"marker",templateHash:A.numericHash(JSON.stringify(c)+
JSON.stringify(b)+JSON.stringify(r)+f+R).toString(),materialHash:I?()=>X:X,cim:e,materialOverrides:null,colorLocked:a.colorLocked,effects:h,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:w,y},isAbsoluteAnchorPoint:!1,size:m(a.primitiveName,g,"Size",k,n),rotation:m(a.primitiveName,g,"Rotation",k,z),offsetX:m(a.primitiveName,g,"OffsetX",k,C),offsetY:m(a.primitiveName,g,"OffsetY",k,F),scaleX:1,frameHeight:v,rotateClockwise:a.rotateClockwise,referenceSize:q,sizeRatio:t,
color:m(J,g,"Color",k,B,O),outlineColor:m(G,g,"Color",k,E,O),outlineWidth:m(G,g,"Width",k,L),markerPlacement:d,path:H};l.push(a)}}function ma(a,h,d,c,b,f,g,k,l,p,q,v){c={type:a.type,enable:!0,name:a.name,colorLocked:a.colorLocked,primitiveName:a.primitiveName,anchorPoint:a.anchorPoint,anchorPointUnits:a.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:a.rotateClockwise,rotation:0,size:a.size,billboardMode3D:a.billboardMode3D,depth3D:a.depth3D,frame:a.frame,markerGraphics:[c],scaleSymbolsProportionally:a.scaleSymbolsProportionally,
respectFrame:a.respectFrame,clippingPath:a.clippingPath};let e=[];const r=["Rotation","OffsetX","OffsetY"];e=f.filter(F=>F.primitiveName!==a.primitiveName||-1===r.indexOf(F.propertyName));var n="";for(var t of f)void 0!==t.value&&(n+=`-${t.primitiveName}-${t.propertyName}-${JSON.stringify(t.value)}`);const [w,y,x]=D.CIMSymbolHelper.getTextureAnchor(c,l);f=a.primitiveName;l=u.getValue(a.rotation);t=u.getValue(a.offsetX);const z=u.getValue(a.offsetY);n=A.numericHash(JSON.stringify(c)+n).toString();
const C=0<e.length||P.isSome(h)&&"function"===typeof h;h={type:"marker",templateHash:n,materialHash:C?T(n,b,e,g):n,cim:c,materialOverrides:e,colorLocked:a.colorLocked,effects:h,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:w,y},isAbsoluteAnchorPoint:!1,size:a.size,rotation:m(f,b,"Rotation",g,l),offsetX:m(f,b,"OffsetX",g,t),offsetY:m(f,b,"OffsetY",g,z),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:v,rotateClockwise:a.rotateClockwise,
referenceSize:q,sizeRatio:x/sa.pt2px(a.size),markerPlacement:d};k.push(h)}function ca(a){return a&&0===a.indexOf("Level_")&&(a=parseInt(a.substr(6),10),!isNaN(a))?a:0}function O(a){if(!a||0===a.length)return null;a=(new qa(a)).toRgba();return{r:a[0],g:a[1],b:a[2],a:a[3]}}function m(a,h,d,c,b,f,g){if(a=h[a]){const k=a[d];if("string"===typeof k||"number"===typeof k||k instanceof Array)return f?f.call(null,k,g):k;if(null!=k&&k instanceof S.ArcadeExpression)return(l,p,q)=>{l=W(k,l,{$view:q},c.geometryType,
p);null!==l&&f&&(l=f.call(null,l,g));return null!==l?l:b}}return b}function ya(a,h,d,c){for(const b of h)if(b.valueExpressionInfo){const f=d[b.primitiveName]&&d[b.primitiveName][b.propertyName];f instanceof S.ArcadeExpression&&(b.fn=(g,k,l)=>W(f,g,{$view:l},c.geometryType,k))}return(b,f,g)=>{for(var k of h)k.fn&&(k.value=k.fn(b,f,g));b=[];for(let p of a){var l;if(f=null==(l=p)?void 0:l.primitiveName){g=!1;for(const q of h)q.primitiveName===f&&(k=(k=q.propertyName)?k.charAt(0).toLowerCase()+k.substr(1):
k,null!=q.value&&q.value!==p[k]&&(g||(p=ea.clone(p),g=!0),p[k]=q.value))}b.push(p)}return b}}function la(a,h,d,c){const b=[];D.OverrideHelper.findApplicableOverrides(a,h,b);if(0===b.length)return a;for(const f of b)if(f.valueExpressionInfo){const g=d[f.primitiveName]&&d[f.primitiveName][f.propertyName];g instanceof S.ArcadeExpression&&(f.fn=(k,l,p)=>W(g,k,{$view:p},c.geometryType,l))}return(f,g,k)=>{for(const l of b)l.fn&&(l.value=l.fn(f,g,k));f=ea.clone(a);g=a.primitiveName;for(const l of b)l.primitiveName===
g&&(k=(k=l.propertyName)?k.charAt(0).toLowerCase()+k.substr(1):k,null!=l.value&&l.value!==f[k]&&(f[k]=l.value));return f}}function T(a,h,d,c){for(const b of d)if(b.valueExpressionInfo){const f=h[b.primitiveName]&&h[b.primitiveName][b.propertyName];f instanceof S.ArcadeExpression&&(b.fn=(g,k,l)=>W(f,g,{$view:l},c.geometryType,k))}return(b,f,g)=>{for(const k of d)k.fn&&(k.value=k.fn(b,f,g));return A.numericHash(a+D.OverrideHelper.buildOverrideKey(d)).toString()}}function M(a,h,d,c){let b=!1,f="";for(const g of a)g.primitiveName===
h&&(void 0!==g.value?f+=`-${g.primitiveName}-${g.propertyName}-${JSON.stringify(g.value)}`:g.valueExpressionInfo&&(b=!0));P.isSome(d)&&"function"===typeof d&&(b=!0);P.isSome(c)&&"function"===typeof c&&(b=!0);return[b,f]}function ka(a,h,d){if(a&&h)switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a=a.symbolLayers)for(const c of a)switch(Ia(c,h,d),c.type){case "CIMPictureFill":case "CIMHatchFill":case "CIMGradientFill":case "CIMPictureStroke":case "CIMGradientStroke":case "CIMCharacterMarker":case "CIMPictureMarker":"url"in
c&&c.url&&d.push(h.fetchResource(c.url,null));break;case "CIMVectorMarker":if(a=c.markerGraphics)for(const b of a)b&&(a=b.symbol)&&ka(a,h,d)}}}function Ia(a,h,d){a.effects&&!P.isSome(h.geometryEngine)&&(U?d.push(U):u.isGeometryEngineRequired(a.effects)&&(U=u.importGeometryEngine(),d.push(U),U.then(c=>h.geometryEngine=c)))}const ja=ra.getLogger("esri.symbols.cim.cimAnalyzer");let U;Y.analyzeCIMResource=function(a,h){if(!h||0===h.length)return a;a=JSON.parse(JSON.stringify(a));D.OverrideHelper.applyOverrides(a,
h);return a};Y.analyzeCIMSymbol=function(a,h,d,c,b){return ba.apply(this,arguments)};Object.defineProperty(Y,"__esModule",{value:!0})});