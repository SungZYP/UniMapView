// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators ../../libs/maquette/index".split(" "),function(m,g,p,d,q,e,r){var n={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",
center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};m=function(g){function b(a){a=g.call(this,a)||this;a.x=0;a.y=0;a.text="-";a.fontSize=14;a.anchor="center";a.visible=!0;a.backgroundColor="rgba(0, 0, 0, 0.6)";a.textColor="white";a.textShadowColor=[0,0,0];a.textShadowSize=1;return a}p(b,g);Object.defineProperty(b.prototype,"position",{get:function(){return[this.x,this.y]},set:function(a){this._set("x",a[0]);this._set("y",
a[1])},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"padding",{get:function(){return.5*this.fontSize},enumerable:!0,configurable:!0});b.prototype.render=function(){return r.h("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",backgroundColor:this.backgroundColor,color:this.textColor,padding:this.padding+"px",borderRadius:this.padding+"px",textShadow:"0 0 "+this.textShadowSize+
"px rgb("+this.textShadowColor[0]+", "+this.textShadowColor[1]+", "+this.textShadowColor[2]+")"}},[this.text])};b.prototype.renderCanvas=function(a){if(this.visible){var c=a.font.replace(/^(.*?)px/,"");a.font=this.fontSize+"px "+c;var h=this.padding,b=this.padding,k=a.measureText(this.text).width,f=this.fontSize,c=t[this.anchor];a.textAlign="center";a.textBaseline="middle";k+=2*h;h=f+2*h;this.roundedRect(a,this.x+c.x*k,this.y+c.y*h,k,h,b);a.fillStyle=this.backgroundColor;a.fill();b=this.x+(c.x+.5)*
k;c=this.y+(c.y+.5)*h;this._renderTextShadow(a,this.text,b,c);a.fillStyle=this.textColor;a.fillText(this.text,b,c)}};b.prototype._renderTextShadow=function(a,c,b,e){a.lineJoin="miter";a.fillStyle="rgba("+this.textShadowColor[0]+", "+this.textShadowColor[1]+", "+this.textShadowColor[2]+", "+1/l.length+")";for(var h=this.textShadowSize,f=0,d=l;f<d.length;f++){var g=d[f];a.fillText(c,b+h*g[0],e+h*g[1])}};b.prototype.roundedRect=function(a,c,b,d,e,f){a.beginPath();a.moveTo(c,b+f);a.arcTo(c,b,c+f,b,f);
a.lineTo(c+d-f,b);a.arcTo(c+d,b,c+d,b+f,f);a.lineTo(c+d,b+e-f);a.arcTo(c+d,b+e,c+d-f,b+e,f);a.lineTo(c+f,b+e);a.arcTo(c,b+e,c,b+e-f,f);a.closePath()};b.prototype._cssClasses=function(){var a={"esri-text-overlay-item":!0},b;for(b in n)a[n[b]]=this.anchor===b;return a};d([e.property()],b.prototype,"x",void 0);d([e.property()],b.prototype,"y",void 0);d([e.property({dependsOn:["x","y"]})],b.prototype,"position",null);d([e.property()],b.prototype,"text",void 0);d([e.property()],b.prototype,"fontSize",
void 0);d([e.property()],b.prototype,"anchor",void 0);d([e.property()],b.prototype,"visible",void 0);d([e.property({dependsOn:["fontSize"]})],b.prototype,"padding",null);return b=d([e.subclass("esri.views.overlay.TextOverlayItem")],b)}(e.declared(q));var t={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},
left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},l=[];for(g=0;360>g;g+=22.5)l.push([Math.cos(Math.PI*g/180),Math.sin(Math.PI*g/180)]);return m});