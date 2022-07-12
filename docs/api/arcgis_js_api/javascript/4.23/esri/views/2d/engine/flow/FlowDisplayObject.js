// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../DisplayObject".split(" "),function(k,l,p,m,d,q,f){f=function(n){function e(){var a=n.apply(this,arguments)||this;a._displayData=null;return a}l._inheritsLoose(e,n);var g=e.prototype;g.clear=function(){m.isSome(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())};g.setTransform=function(a){var {displayData:b}=
this;if(!m.isNone(b)){var h=[0,0];a.toScreen(h,[b.extent.xmin,b.extent.ymax]);b=(b.extent.xmax-b.extent.xmin)/b.size[0]/a.resolution;var r=p.deg2rad(a.rotation),{dvs:c}=this.transforms;d.fromTranslation(c,[-1,1,0]);d.scale(c,c,[2/(a.size[0]*a.pixelRatio),-2/(a.size[1]*a.pixelRatio),1]);d.translate(c,c,[h[0],h[1],0]);d.rotate(c,c,r);d.scale(c,c,[b*a.pixelRatio,b*a.pixelRatio,1])}};g._createTransforms=function(){return{dvs:q.create()}};l._createClass(e,[{key:"displayData",get:function(){return this._displayData},
set:function(a){this._displayData=a;this.requestRender()}}]);return e}(f.DisplayObject);k.FlowDisplayObject=f;Object.defineProperty(k,"__esModule",{value:!0})});