// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../../core/BidiText ../../core/floatRGBA ../../core/lang ../../core/Logger ../../core/mathUtils ../../core/maybe ../../core/screenUtils ../../geometry/support/aaBoundingRect ../../geometry/support/boundsUtils ./CIMPlacements ./CIMSymbolDrawHelper ./enums ./utils ../../views/2d/engine/vectorTiles/GeometryUtils ../../views/2d/engine/webgl/definitions ../../views/2d/engine/webgl/mesh/templates/shapingUtils".split(" "),function(x,W,M,X,N,H,O,Y,E,B,Z,P,C,n,p,F,Q,aa){function G(d,
a){switch(a.type){case "CIMSymbolReference":return G(d,a.symbol);case "CIMPointSymbol":d.drawSymbol(a,{x:0,y:0});break;case "CIMLineSymbol":d.drawSymbol(a,{paths:[[[0,0],[0,1]]]});break;case "CIMPolygonSymbol":d.drawSymbol(a,{rings:[[[0,0],[0,1],[0,0]]]});break;case "CIMTextSymbol":d.drawSymbol(a,{x:0,y:0});break;case "CIMVectorMarker":{const b=new P.Placement;d.drawMarker(a,b)}}return d.envelope()}function ba(d){if(!d)return 0;switch(d.type){case "CIMMarkerPlacementAlongLineSameSize":return Math.abs(d.offset);
case "CIMMarkerPlacementAlongLineRandomSize":return Math.abs(d.offset);case "CIMMarkerPlacementAtExtremities":return Math.abs(d.offset);case "CIMMarkerPlacementAtMeasuredUnits":return Math.abs(d.offset);case "CIMMarkerPlacementAtRatioPositions":return Math.abs(d.offset);case "CIMMarkerPlacementInsidePolygon":return 0;case "CIMMarkerPlacementOnLine":return Math.abs(d.offset);case "CIMMarkerPlacementOnVertices":return Math.abs(d.offset);case "CIMMarkerPlacementPolygonCenter":return 0;default:return 0}}
function ca(d){if(!d)return 0;switch(d.type){case "CIMGeometricEffectArrow":return Math.abs(.5*d.width);case "CIMGeometricEffectBuffer":return Math.abs(d.size);case "CIMGeometricEffectExtension":return Math.abs(d.length);case "CIMGeometricEffectJog":return Math.abs(.5*d.length);case "CIMGeometricEffectMove":return Math.max(Math.abs(p.getValue(d.offsetX)),Math.abs(p.getValue(d.offsetY)));case "CIMGeometricEffectOffset":return Math.abs(d.offset);case "CIMGeometricEffectOffsetTangent":return Math.abs(d.offset);
case "CIMGeometricEffectRadial":return Math.abs(d.length);case "CIMGeometricEffectRegularPolygon":return Math.abs(d.radius);case "CIMGeometricEffectRotate":return 0;case "CIMGeometricEffectScale":return 0;case "CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(d.fromWidth),Math.abs(d.toWidth));case "CIMGeometricEffectWave":return Math.abs(d.amplitude);default:return 0}}function R(d){if(!d)return 0;let a=0;for(const b of d)a+=ca(b);return a}const S=Math.PI,da=S/2,v=96/72,T=Math.PI/180,I=
H.getLogger("esri.symbols.cim.CIMSymbolHelper");H=function(){function d(){}var a=d.prototype;a.getSymbolInflateSize=function(b,c,e,g,h){b||(b=[0,0,0,0]);return c?this._getInflateSize(b,c,e,g,h):b};d.safeSize=function(b){const c=Math.max(Math.abs(b[0]),Math.abs(b[2]));b=Math.max(Math.abs(b[1]),Math.abs(b[3]));return Math.sqrt(c*c+b*b)};a._vectorMarkerBounds=function(b,c,e,g){let h=!0;const l=B.create();if(c&&c.markerGraphics)for(const f of c.markerGraphics)c=[0,0,0,0],f.geometry&&(Z.getBoundsXY(l,
f.geometry),c[0]=0,c[1]=0,c[2]=0,c[3]=0,this.getSymbolInflateSize(c,f.symbol,e,0,g),l[0]+=c[0],l[1]+=c[1],l[2]+=c[2],l[3]+=c[3],h?(b[0]=l[0],b[1]=l[1],b[2]=l[2],b[3]=l[3],h=!1):(b[0]=Math.min(b[0],l[0]),b[1]=Math.min(b[1],l[1]),b[2]=Math.max(b[2],l[2]),b[3]=Math.max(b[3],l[3])));return b};a._getInflateSize=function(b,c,e,g,h){return void 0!==c.symbolLayers?(b=this._getLayersInflateSize(b,c.symbolLayers,e,g,h),c=R(c.effects),0<c&&(b[0]-=c,b[1]-=c,b[2]+=c,b[3]+=c),b):this._getTextInflatedSize(b,c,h)};
a._getLayersInflateSize=function(b,c,e,g,h){let l=!0;if(!c)return b;for(const t of c)if(t){var f=[0,0,0,0];switch(t.type){case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":c=t;var k=c.width;k=c.capStyle===n.LineCapStyle.Square||c.joinStyle===n.LineJoinStyle.Miter?k/1.4142135623730951:k/2;f[0]=-k;f[1]=-k;f[2]=k;f[3]=k;break;case "CIMCharacterMarker":case "CIMVectorMarker":case "CIMPictureMarker":c=t;if("CIMVectorMarker"===t.type){if(k=t,f=this._vectorMarkerBounds(f,k,e,h),k.frame){var m=
(k.frame.xmin+k.frame.xmax)/2,q=(k.frame.ymin+k.frame.ymax)/2;f[0]-=m;f[1]-=q;f[2]-=m;f[3]-=q;k=k.size/(k.frame.ymax-k.frame.ymin);f[0]*=k;f[1]*=k;f[2]*=k;f[3]*=k}}else"CIMPictureMarker"===t.type?(f=t,m=e.getResource(f.url),k=1,Y.isSome(m)&&m.height&&(k=m.width/m.height),m=c.size/2,f=c.size*k*f.scaleX/2,f=[-f,-m,f,m]):(f=c.size/2,f=[-f,-f,f,f]);c.anchorPoint&&("Absolute"===c.anchorPointUnits?(k=c.anchorPoint.x,m=c.anchorPoint.y):(k=c.anchorPoint.x*(f[2]-f[0]),m=c.anchorPoint.y*(f[3]-f[1])),f[0]-=
k,f[1]-=m,f[2]-=k,f[3]-=m);k=p.getValue(c.rotation);c.rotateClockwise&&(k=-k);g&&(k-=g);k&&(m=T*k,k=Math.cos(m),m=Math.sin(m),q=B.create([F.C_INFINITY,F.C_INFINITY,-F.C_INFINITY,-F.C_INFINITY]),B.expandPointInPlace(q,[f[0]*k-f[1]*m,f[0]*m+f[1]*k]),B.expandPointInPlace(q,[f[0]*k-f[3]*m,f[0]*m+f[3]*k]),B.expandPointInPlace(q,[f[2]*k-f[1]*m,f[2]*m+f[1]*k]),B.expandPointInPlace(q,[f[2]*k-f[3]*m,f[2]*m+f[3]*k]),f=q);k=p.getValue(c.offsetX);m=p.getValue(c.offsetY);if(g){var r=T*g;q=Math.cos(r);r=Math.sin(r);
const y=k*r+m*q;k=k*q-m*r;m=y}f[0]+=k;f[1]+=m;f[2]+=k;f[3]+=m;c=ba(c.markerPlacement);0<c&&(f[0]-=c,f[1]-=c,f[2]+=c,f[3]+=c)}c=R(t.effects);0<c&&(f[0]-=c,f[1]-=c,f[2]+=c,f[3]+=c);l?(b[0]=f[0],b[1]=f[1],b[2]=f[2],b[3]=f[3],l=!1):(b[0]=Math.min(b[0],f[0]),b[1]=Math.min(b[1],f[1]),b[2]=Math.max(b[2],f[2]),b[3]=Math.max(b[3],f[3]))}return b};a._getTextInflatedSize=function(b,c,e){var g,h;const l=null!=(g=c.height)?g:10;b[0]=-l/2;b[1]=-l/2;b[2]=l/2;b[3]=l/2;if(!e)return b;e=e.get(c);if(!e)return b;const {text:f,
mosaicItem:k}=e;if(!k||0===k.glyphMosaicItems.length)return b;e=C.lineGapType2LineHeight(c.lineGapType,null!=(h=c.lineGap)?h:0,l);h=M.bidiText(f)[1];c=aa.shapeGlyphs(k.glyphMosaicItems,h,{scale:l/Q.GLYPH_SIZE,angle:p.getValue(c.angle),xOffset:p.getValue(c.offsetX),yOffset:p.getValue(c.offsetY),hAlign:C.horizontalAlignment2HAlign(c.horizontalAlignment),vAlign:C.verticalAlignment2VAlign(c.verticalAlignment),maxLineWidth:512,lineHeight:Q.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(e||1,4)),decoration:c.font.decoration||
"none",isCIM:!0}).boundsT;b[0]=c.x-c.halfWidth;b[1]=-c.y-c.halfHeight;b[2]=c.x+c.halfWidth;b[3]=-c.y+c.halfHeight;return b};return d}();let A=function(){function d(){}d.getEnvelope=function(a,b){b=new C.EnvDrawHelper(b);if(Array.isArray(a)){let c;for(const e of a)c?c.union(G(b,e)):c=G(b,e);return c}return G(b,a)};d.getTextureAnchor=function(a,b){a=this.getEnvelope(a,b);if(!a)return[0,0,0];b=a.height*v+2;return[(a.x+.5*a.width)*v/(a.width*v+2),-(a.y+.5*a.height)*v/b,b]};d.rasterize=function(a,b,c,
e,g=!0){var h=c||this.getEnvelope(b,e);if(!h)return[null,0,0,0,0];const l=(h.x+.5*h.width)*v,f=(h.y+.5*h.height)*v;a.width=h.width*v;a.height=h.height*v;c||(a.width+=2,a.height+=2);c=a.getContext("2d");h=C.Transformation.createScale(v,-v);h.translate(.5*a.width-l,.5*a.height+f);e=new C.CanvasDrawHelper(c,e,h);switch(b.type){case "CIMPointSymbol":e.drawSymbol(b,{type:"point",x:0,y:0});break;case "CIMVectorMarker":h=new P.Placement,e.drawMarker(b,h)}b=c.getImageData(0,0,a.width,a.height);b=new Uint8Array(b.data);
if(g)for(e=0;e<b.length;e+=4)g=b[e+3]/255,b[e]*=g,b[e+1]*=g,b[e+2]*=g;return[b,a.width,a.height,-l/a.width,-f/a.height]};d.fromTextSymbol=function(a){const {angle:b,color:c,font:e,haloColor:g,haloSize:h,horizontalAlignment:l,kerning:f,text:k,verticalAlignment:m,xoffset:q,yoffset:r}=a;let t,y;if(e){var D=e.family;var z=e.style;var w=e.weight;t=e.size;y=e.decoration}a=!1;k&&(a=M.bidiText(k)[1]);var ea=n.BlockProgression.BTT,fa=n.FontEffects.Normal,ha=n.FontEncoding.Unicode;D=D||"Arial";b:{if(w)switch(w.toLowerCase()){case "bold":case "bolder":w=
"bold";break b}w=""}b:{if(z)switch(z.toLowerCase()){case "italic":case "oblique":z="italic";break b}z=""}w=w&&z?`${w}-${z}`:`${w}${z}`;return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:b,blockProgression:ea,depth3D:1,extrapolateBaselines:!0,fontEffects:fa,
fontEncoding:ha,fontFamilyName:D,fontStyleName:w,fontType:n.FontType.Unspecified,haloSize:h,height:t,hinting:n.GlyphHinting.Default,horizontalAlignment:ia(null!=l?l:"center"),kerning:f,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:p.getValue(q),offsetY:p.getValue(r),strikethrough:"line-through"===y,underline:"underline"===y,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:u(c)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",
enable:!0,color:u(g)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:a?n.TextReadingDirection.RTL:n.TextReadingDirection.LTR,verticalAlignment:ja(null!=m?m:"baseline"),verticalGlyphOrientation:n.VerticalGlyphOrientation.Right,wordSpacing:100,billboardMode3D:n.BillBoardMode.FaceNearPlane},textString:k}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}};d.fromPictureFillSymbol=function(a){const {height:b,outline:c,width:e,
xoffset:g,xscale:h,yoffset:l,yscale:f}=a,k=[],m={type:"CIMPolygonSymbol",symbolLayers:k};if(c){const {cap:r,join:t,miterLimit:y,width:D}=c;k.push({type:"CIMSolidStroke",color:u(c.color),capStyle:J(r),joinStyle:K(t),miterLimit:y,width:D})}let q=a.url;"esriPFS"===a.type&&a.imageData&&(q=a.imageData);a="angle"in a?a.angle:0;k.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:n.TextureFilter.Picture,tintColor:null,url:q,height:b*(f||1),width:e*(h||1),offsetX:p.getValue(g),offsetY:p.getValue(l),
rotation:p.getValue(-a),colorSubstitutions:null});return m};d.fromSimpleFillSymbol=function(a){const {color:b,style:c,outline:e}=a;a=[];const g={type:"CIMPolygonSymbol",symbolLayers:a};var h=null;if(e){const {cap:f,join:k,style:m}=e;"solid"!==m&&"none"!==m&&"esriSLSSolid"!==m&&"esriSLSNull"!==m&&(h=[{type:"CIMGeometricEffectDashes",dashTemplate:L(m,f),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]);a.push({type:"CIMSolidStroke",color:u(e.color),capStyle:J(f),joinStyle:K(k),miterLimit:e.miterLimit,
width:e.width,effects:h})}if(c&&"solid"!==c&&"none"!==c&&"esriSFSSolid"!==c&&"esriSFSNull"!==c){h={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:u(b),capStyle:n.LineCapStyle.Butt,joinStyle:n.LineJoinStyle.Miter,width:.75}]};let f=0;var l=O.nextPowerOfTwo(Math.ceil(window.devicePixelRatio));l=U(c)?8*l:10*l;switch(c){case "vertical":case "esriSFSVertical":f=90;break;case "forward-diagonal":case "esriSFSForwardDiagonal":f=-45;break;case "backward-diagonal":case "esriSFSBackwardDiagonal":f=
45;break;case "cross":case "esriSFSCross":f=0;break;case "diagonal-cross":case "esriSFSDiagonalCross":f=-45}a.push({type:"CIMHatchFill",lineSymbol:h,offsetX:0,offsetY:0,rotation:f,separation:l});"cross"===c||"esriSFSCross"===c?a.push({type:"CIMHatchFill",lineSymbol:N.clone(h),offsetX:0,offsetY:0,rotation:90,separation:l}):("diagonal-cross"===c||"esriSFSDiagonalCross"===c)&&a.push({type:"CIMHatchFill",lineSymbol:N.clone(h),offsetX:0,offsetY:0,rotation:45,separation:l})}else!c||"solid"!==c&&"esriSFSSolid"!==
c||a.push({type:"CIMSolidFill",enable:!0,color:u(b)});return g};d.fromSimpleLineSymbol=function(a){const {cap:b,color:c,join:e,marker:g,miterLimit:h,style:l,width:f}=a;a=null;"solid"!==l&&"none"!==l&&"esriSLSSolid"!==l&&"esriSLSNull"!==l&&(a=[{type:"CIMGeometricEffectDashes",dashTemplate:L(l,b),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]);const k=[];if(g){let m;switch(g.placement){case "begin-end":m=n.ExtremityPlacement.Both;break;case "begin":m=n.ExtremityPlacement.JustBegin;
break;case "end":m=n.ExtremityPlacement.JustEnd;break;default:m=n.ExtremityPlacement.None}const q=d.fromSimpleMarker(g,f,c).symbolLayers[0];q.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:m,offsetAlongLine:0};k.push(q)}"none"!==l&&"esriSLSNull"!==l&&k.push({type:"CIMSolidStroke",color:u(c),capStyle:J(b),joinStyle:K(e),miterLimit:h,width:f,effects:a});return{type:"CIMLineSymbol",symbolLayers:k}};d.fromPictureMarker=function(a){const {angle:b,height:c,
width:e,xoffset:g,yoffset:h}=a;let l=a.url;"esriPMS"===a.type&&a.imageData&&(l=a.imageData);return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:n.TextureFilter.Picture,tintColor:null,url:l,size:c,width:e,offsetX:p.getValue(g),offsetY:p.getValue(h),rotation:p.getValue(-b)}]}};d.fromSimpleMarker=function(a,b,c){var e,{style:g}=a;c=null!=(e=a.color)?e:c;if("path"===g){b=[];"outline"in a&&a.outline&&(e=a.outline,b.push({type:"CIMSolidStroke",
enable:!0,width:E.pt2px(Math.round(E.px2pt(e.width))),color:u(e.color)}));b.push({type:"CIMSolidFill",enable:!0,color:u(c),path:a.path});const [k,m]=V("square");return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:p.getValue(-a.angle),size:p.getValue(a.size||6),offsetX:p.getValue(a.xoffset),offsetY:p.getValue(a.yoffset),frame:k,markerGraphics:[{type:"CIMMarkerGraphic",geometry:m,symbol:{type:"CIMPolygonSymbol",symbolLayers:b}}]}]}}const [h,l]=V(g);let f;l&&h&&(e=[],
"outline"in a&&a.outline?(g=a.outline,e.push({type:"CIMSolidStroke",enable:!0,width:.667<g.width?E.pt2px(Math.round(E.px2pt(g.width))):g.width,color:u(g.color)})):!b||"line-marker"!==a.type||"cross"!==a.style&&"x"!==a.style||e.push({type:"CIMSolidStroke",enable:!0,width:b,color:u(c)}),e.push({type:"CIMSolidFill",enable:!0,color:u(c)}),c={type:"CIMPolygonSymbol",symbolLayers:e},f={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:p.getValue(-a.angle),size:p.getValue(a.size||
6*b),offsetX:p.getValue(a.xoffset),offsetY:p.getValue(a.yoffset),frame:h,markerGraphics:[{type:"CIMMarkerGraphic",geometry:l,symbol:c}]}]});return f};d.fromCIMHatchFill=function(a){var b;const c=null!=(b=a.separation)?b:4;b=c/2;for(var e=this._getLineSymbolPeriod(a.lineSymbol)||4;4>e;)e*=2;e/=2;return{type:"CIMVectorMarker",frame:{xmin:-e,xmax:e,ymin:-b,ymax:b},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-e,0],[e,0]]]},symbol:a.lineSymbol}],size:c}};d._getLineSymbolPeriod=function(a){if(a){const b=
this._getEffectsRepeat(a.effects);if(b)return b;if(a.symbolLayers)for(const c of a.symbolLayers)if((a=this._getEffectsRepeat(c.effects))||c&&(a=this._getPlacementRepeat(c.markerPlacement)))return a}return 0};d._getEffectsRepeat=function(a){if(a)for(var b of a)if(b)switch(b.type){case "CIMGeometricEffectDashes":if((a=b.dashTemplate)&&a.length){b=0;for(const c of a)b+=c;a.length&1&&(b*=2);return b}break;case "CIMGeometricEffectWave":return b.period;default:I.error(`unsupported geometric effect type ${b.type}`)}return 0};
d._getPlacementRepeat=function(a){if(a)switch(a.type){case "CIMMarkerPlacementAlongLineSameSize":case "CIMMarkerPlacementAlongLineRandomSize":case "CIMMarkerPlacementAlongLineVariableSize":if((a=a.placementTemplate)&&a.length){let b=0;for(const c of a)b+=c;a.length&1&&(b*=2);return b}}return 0};d.fromCIMInsidePolygon=function(a){var b=a.markerPlacement;const c={type:a.type,...a,markerPlacement:null,anchorPoint:null};let e,g;!0===b.shiftOddRows?(a=b.stepX/2,e=b.stepY,g=2*b.stepY,b=[{x:-a,y:0},{x:a,
y:0},{x:0,y:e},{x:0,y:-e}].map(h=>({type:"CIMMarkerGraphic",geometry:h,symbol:{type:"CIMPointSymbol",symbolLayers:[c]}}))):(a=b.stepX/2,e=b.stepY/2,g=b.stepY,b=[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMPointSymbol",symbolLayers:[c]}}]);return{type:"CIMVectorMarker",frame:{xmin:-a,xmax:a,ymin:-e,ymax:e},markerGraphics:b,size:g}};d.getFillColor=function(a){if(!a)return null;switch(a.type){case "CIMPolygonSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=d.getFillColor(b),
null!=a)return a;break;case "CIMTextSymbol":return d.getFillColor(a.symbol);case "CIMSolidFill":return a.color}};d.getStrokeColor=function(a){if(a)switch(a.type){case "CIMPolygonSymbol":case "CIMLineSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=d.getStrokeColor(b),void 0!==a)return a;break;case "CIMTextSymbol":return d.getStrokeColor(a.symbol);case "CIMSolidStroke":return a.color}};d.getStrokeWidth=function(a){if(a)switch(a.type){case "CIMPolygonSymbol":case "CIMLineSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=
d.getStrokeWidth(b),void 0!==a)return a;break;case "CIMTextSymbol":return d.getStrokeWidth(a.symbol);case "CIMSolidStroke":case "CIMGradientStroke":case "CIMPictureStroke":return a.width}};d.getSize=function(a){if(a)switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":{let b=0;if(a.symbolLayers)for(const c of a.symbolLayers)a=d.getSize(c),a>b&&(b=a);return b}case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":return a.width;case "CIMCharacterMarker":case "CIMPictureMarker":case "CIMVectorMarker":return a.size}};
d.getMarkerScaleRatio=function(a){if(a)switch(a.type){case "CIMVectorMarker":if(!1!==a.scaleSymbolsProportionally&&a.frame)return a.size/(a.frame.ymax-a.frame.ymin)}return 1};return d}(),ka=function(){function d(){}d.rasterizeSimpleFill=function(a,b,c){"solid"!==b&&"none"!==b&&"esriSFSSolid"!==b&&"esriSFSNull"!==b||console.error("Unexpected: style does not require rasterization");c=O.nextPowerOfTwo(Math.ceil(c));var e=U(b)?8*c:16*c;const g=2*c;a.width=e;a.height=e;const h=a.getContext("2d");h.strokeStyle=
"#FFFFFF";h.lineWidth=c;h.beginPath();if("vertical"===b||"cross"===b||"esriSFSCross"===b||"esriSFSVertical"===b)h.moveTo(e/2,-g),h.lineTo(e/2,e+g);if("horizontal"===b||"cross"===b||"esriSFSCross"===b||"esriSFSHorizontal"===b)h.moveTo(-g,e/2),h.lineTo(e+g,e/2);if("forward-diagonal"===b||"diagonal-cross"===b||"esriSFSDiagonalCross"===b||"esriSFSForwardDiagonal"===b)h.moveTo(-g,-g),h.lineTo(e+g,e+g),h.moveTo(e-g,-g),h.lineTo(e+g,g),h.moveTo(-g,e-g),h.lineTo(g,e+g);if("backward-diagonal"===b||"diagonal-cross"===
b||"esriSFSBackwardDiagonal"===b||"esriSFSDiagonalCross"===b)h.moveTo(e+g,-g),h.lineTo(-g,e+g),h.moveTo(g,-g),h.lineTo(-g,g),h.moveTo(e+g,e-g),h.lineTo(e-g,e+g);h.stroke();b=h.getImageData(0,0,a.width,a.height);b=new Uint8Array(b.data);for(e=0;e<b.length;e+=4)c=b[e+3]/255,b[e]*=c,b[e+1]*=c,b[e+2]*=c;return[b,a.width,a.height]};d.rasterizeSimpleLine=function(a,b){return this.rasterizeDash(a,b)};d.rasterizeDash=function(a,b){var c="Butt"===b,e="Square"===b;b=!c&&!e;1===a.length%2&&(a=[...a,...a]);var g=
0;for(var h of a)g+=h;h=Math.round(15.5*g);g=new Float32Array(31*h);let l=0,f=0,k=.5,m=!0;for(var q of a){l=f;for(f+=15.5*q;k<=f;){for(a=.5;31>a;){const r=b?(a-15.5)*(a-15.5):Math.abs(a-15.5);g[(a-.5)*h+k-.5]=m?c?Math.max(Math.max(l+7.75-k,r),Math.max(k-f+7.75,r)):r:b?Math.min((k-l)*(k-l)+r,(k-f)*(k-f)+r):e?Math.min(Math.max(k-l,r),Math.max(f-k,r)):Math.min(Math.max(k-l+7.75,r),Math.max(f+7.75-k,r));a++}k++}m=!m}c=g.length;q=new Uint8Array(4*c);for(e=0;e<c;++e)X.packFloatRGBA((b?Math.sqrt(g[e]):g[e])/
15.5,q,4*e);return[q,h,31]};return d}(),la=function(){function d(){}d.findApplicableOverrides=function(a,b,c){if(a&&b){if(a.primitiveName){let e=!1;for(const g of c)if(g.primitiveName===a.primitiveName){e=!0;break}if(!e)for(const g of b)g.primitiveName===a.primitiveName&&c.push(g)}switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a.effects)for(const e of a.effects)d.findApplicableOverrides(e,b,c);if(a.symbolLayers)for(const e of a.symbolLayers)d.findApplicableOverrides(e,
b,c);break;case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":case "CIMSolidFill":case "CIMPictureFill":case "CIMHatchFill":case "CIMGradientFill":case "CIMVectorMarker":case "CIMCharacterMarker":case "CIMPictureMarker":if(a.effects)for(const e of a.effects)d.findApplicableOverrides(e,b,c);a.markerPlacement&&d.findApplicableOverrides(a.markerPlacement,b,c);if("CIMVectorMarker"===a.type){if(a.markerGraphics)for(const e of a.markerGraphics)d.findApplicableOverrides(e,b,c),d.findApplicableOverrides(e.symbol,
b,c)}else"CIMCharacterMarker"===a.type?d.findApplicableOverrides(a.symbol,b,c):"CIMHatchFill"===a.type&&d.findApplicableOverrides(a.lineSymbol,b,c)}}};d.findEffectOverrides=function(a,b,c){if(b&&a){var e=a.length;for(let h=0;h<e;h++){var g=a[h];if(g=null==g?void 0:g.primitiveName){let l=!1;for(const f of c)if(f.primitiveName===g){l=!0;break}if(!l)for(const f of b)f.primitiveName===g&&c.push(f)}}}};d.applyOverrides=function(a,b,c,e){if(b){if(a.primitiveName)for(const h of b)if(h.primitiveName===a.primitiveName){var g=
(g=h.propertyName)?g.charAt(0).toLowerCase()+g.substr(1):g;e&&e.push({cim:a,nocapPropertyName:g,value:a[g]});h.expression&&(h.value=d.toValue(h.propertyName,h.expression));if(c){let l=!1;for(const f of c)f.primitiveName===a.primitiveName&&(l=!0);l||c.push(h)}a[g]=h.value}switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a.effects)for(const h of a.effects)d.applyOverrides(h,b,c,e);if(a.symbolLayers)for(const h of a.symbolLayers)d.applyOverrides(h,b,c,e);break;case "CIMSolidStroke":case "CIMSolidFill":case "CIMVectorMarker":if(a.effects)for(const h of a.effects)d.applyOverrides(h,
b,c,e);if("CIMVectorMarker"===a.type&&a.markerGraphics)for(const h of a.markerGraphics)d.applyOverrides(h,b,c,e),d.applyOverrides(h.symbol,b,c,e)}}};d.restoreOverrides=function(a){for(const b of a)b.cim[b.nocapPropertyName]=b.value};d.buildOverrideKey=function(a){let b="";for(const c of a)void 0!==c.value&&(b+=`${c.primitiveName}${c.propertyName}${JSON.stringify(c.value)}`);return b};d.toValue=function(a,b){return"DashTemplate"===a?b.split(" ").map(c=>Number(c)):"Color"===a?(a=(new W(b)).toRgba(),
a[3]*=255,a):b};return d}();const J=d=>{if(!d)return n.LineCapStyle.Butt;switch(d){case "butt":return n.LineCapStyle.Butt;case "square":return n.LineCapStyle.Square;case "round":return n.LineCapStyle.Round}},K=d=>{if(!d)return n.LineJoinStyle.Miter;switch(d){case "miter":return n.LineJoinStyle.Miter;case "round":return n.LineJoinStyle.Round;case "bevel":return n.LineJoinStyle.Bevel}},ia=d=>{if(!d)return"Center";switch(d){case "left":return"Left";case "right":return"Right";case "center":return"Center";
case "justify":return"Justify"}},ja=d=>{if(!d)return"Center";switch(d){case "baseline":return"Baseline";case "top":return"Top";case "middle":return"Center";case "bottom":return"Bottom"}},u=d=>{if(!d)return[0,0,0,0];const {r:a,g:b,b:c,a:e}=d;return[a,b,c,255*e]},L=(d,a)=>{a="butt"===a;switch(d){case "dash":case "esriSLSDash":return a?[4,3]:[3,4];case "dash-dot":case "esriSLSDashDot":return a?[4,3,1,3]:[3,4,0,4];case "dot":case "esriSLSDot":return a?[1,3]:[0,4];case "long-dash":case "esriSLSLongDash":return a?
[8,3]:[7,4];case "long-dash-dot":case "esriSLSLongDashDot":return a?[8,3,1,3]:[7,4,0,4];case "long-dash-dot-dot":case "esriSLSDashDotDot":return a?[8,3,1,3,1,3]:[7,4,0,4,0,4];case "short-dash":case "esriSLSShortDash":return a?[4,1]:[3,2];case "short-dash-dot":case "esriSLSShortDashDot":return a?[4,1,1,1]:[3,2,0,2];case "short-dash-dot-dot":case "esriSLSShortDashDotDot":return a?[4,1,1,1,1,1]:[3,2,0,2,0,2];case "short-dot":case "esriSLSShortDot":return a?[1,1]:[0,2];case "solid":case "esriSLSSolid":case "none":return I.error("Unexpected: style does not require rasterization"),
[0,0];default:return I.error(`Tried to rasterize SLS, but found an unexpected style: ${d}!`),[0,0]}},V=d=>{if("circle"===d||"esriSMSCircle"===d){var a=Math.acos(.995);d=Math.ceil(S/a/4);0===d&&(d=1);a=da/d;d*=4;var b=[];b.push([50,0]);for(let c=1;c<d;c++)b.push([50*Math.cos(c*a),-50*Math.sin(c*a)]);b.push([50,0]);a={rings:[b]};b={xmin:-50,ymin:-50,xmax:50,ymax:50}}else"cross"===d||"esriSMSCross"===d?(a={rings:[[[0,50],[0,0],[50,0],[50,-0],[0,-0],[0,-50],[-0,-50],[-0,-0],[-50,-0],[-50,0],[-0,0],[-0,
50],[0,50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"diamond"===d||"esriSMSDiamond"===d?(a={rings:[[[-50,0],[0,50],[50,0],[0,-50],[-50,0]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"square"===d||"esriSMSSquare"===d?(a={rings:[[[-50,-50],[-50,50],[50,50],[50,-50],[-50,-50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"x"===d||"esriSMSX"===d?(a={rings:[[[0,0],[50,50],[50,50],[0,0],[50,-50],[50,-50],[0,-0],[-50,-50],[-50,-50],[-0,0],[-50,50],[-50,50],[0,0]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50}):"triangle"===
d||"esriSMSTriangle"===d?(d=2/3*100,b=d-100,a={rings:[[[-57.735026918962575,b],[0,d],[57.735026918962575,b],[-57.735026918962575,b]]]},b={xmin:-57.735026918962575,ymin:b,xmax:57.735026918962575,ymax:d}):"arrow"===d&&(a={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50});return[b,a]},U=d=>"vertical"===d||"horizontal"===d||"cross"===d||"esriSFSCross"===d||"esriSFSVertical"===d||"esriSFSHorizontal"===d;x.CIMSimbolInflatedSizeHelper=H;x.CIMSymbolHelper=
A;x.OverrideHelper=la;x.SymbolHelper=ka;x.slsDashToTemplateArray=L;x.symbolToCIM=function(d){if(!d||!d.type)return null;let a;switch(d.type){case "cim":return d.data;case "web-style":return d;case "simple-marker":a=A.fromSimpleMarker(d);break;case "picture-marker":a=A.fromPictureMarker(d);break;case "simple-line":a=A.fromSimpleLineSymbol(d);break;case "simple-fill":a=A.fromSimpleFillSymbol(d);break;case "picture-fill":a=A.fromPictureFillSymbol(d);break;case "text":a=A.fromTextSymbol(d)}return{type:"CIMSymbolReference",
symbol:a}};Object.defineProperty(x,"__esModule",{value:!0})});