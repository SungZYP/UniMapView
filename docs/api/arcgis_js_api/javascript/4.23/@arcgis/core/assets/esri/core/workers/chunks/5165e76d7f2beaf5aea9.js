"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[208],{9352:(e,t,i)=>{i.r(t),i.d(t,{DictionaryLoader:()=>b});var s=i(48027),r=i(82058),o=i(60991),n=i(92143),l=i(89241),a=i(76506),u=i(50406),c=i(40642),p=i(60217),d=i(63571);i(54174),i(82426),i(29794),i(91306),i(31450),i(71552),i(88762),i(32101),i(91700),i(6906),i(74569),i(21801),i(34250),i(60474),i(66396),i(22723),i(86656),i(17533),i(6540),i(73796),i(74673),i(21972),i(23639),i(91055),i(19657),i(97714),i(60947),i(2906),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(59465),i(14249),i(30776);const y=n.L.getLogger("esri.renderers.support.DictionaryLoader"),h={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class b{constructor(e,t,i){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new l.L(100),this.url=e,this.config=t,this.fieldMap=i}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){let i;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{i=await this._dictionaryPromise}catch(e){if((0,u.D_)(e))return this._dictionaryPromise=null,null}const r={};if(this.fieldMap)for(const t of this._symbolFields){const i=this.fieldMap[t];if(i&&null!=e.attributes[i]){const s=""+e.attributes[i];r[t]=s}else r[t]=""}const o=i(r,t);if(!o||"string"!=typeof o)return null;const n=(0,c.n)(o).toString(),l=this._symbolCache.get(n);if(l)return l.catch((()=>{this._symbolCache.pop(n)})),l;const p=o.split(";"),d=[],y=[];for(const e of p)if(e)if(e.includes("po:")){const t=e.substr(3).split("|");if(3===t.length){const e=t[0],i=t[1];let r=t[2];if("DashTemplate"===i)r=r.split(" ").map((e=>Number(e)));else if("Color"===i){const e=new s.Z(r).toRgba();r=[e[0],e[1],e[2],255*e[3]]}else r=Number(r);y.push({primitiveName:e,propertyName:i,value:r})}}else if(e.includes("|")){for(const t of e.split("|"))if(this._itemNames.has(t)){d.push(t);break}}else this._itemNames.has(e)&&d.push(e);const h=!(0,a.i)(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,b=this._cimPartsToCIMSymbol(d,y,h,t);return this._symbolCache.put(n,b,1),b}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void y.error("no valid URL!");const t=(0,a.i)(e)?e.abortOptions:null,i=(0,r.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...t}),[{data:s}]=await Promise.all([i,(0,p.l)()]);if(!s)throw this._dictionaryPromise=null,new o.Z("esri.renderers.DictionaryRenderer","Bad dictionary data!");const n=s.expression,l=s.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+s.cimRefTemplateUrl,this._itemNames=new Set(s.itemsNames),this._symbolFields=l.symbol;const u={};if(this.config){const e=this.config;for(const t in e)u[t]=e[t]}if(l.configuration)for(const e of l.configuration)u.hasOwnProperty(e.name)||(u[e.name]=e.value);const c=[];if((0,a.i)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const i=this.fieldMap[t],s=e.fields.filter((e=>e.name===i));s.length>0&&c.push({...s[0],name:t})}return this._dictionaryPromise=(0,p.c)(n,(0,a.i)(e)?e.spatialReference:null,c,u).then((e=>{const t={scale:0};return(i,s)=>{const r=e.repurposeFeature({geometry:null,attributes:i});return t.scale=(0,a.i)(s)?s.scale:void 0,e.evaluate({$feature:r,$view:t})}})).catch((e=>(y.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}async _cimPartsToCIMSymbol(e,t,i,s){const r=new Array(e.length);for(let t=0;t<e.length;t++)r[t]=this._getSymbolPart(e[t],s);const o=await Promise.all(r),n=this.fieldMap;for(const e of o)f(e,n);return new d.Z({data:this._combineSymbolParts(o,t,i)})}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const i=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),s=(0,r.default)(i,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,s);try{return(await s).data}catch(t){return this._ongoingRequests.delete(e),Promise.reject(t)}}_combineSymbolParts(e,t,i){if(!e||0===e.length)return null;const s={...e[0]};if(e.length>1){s.symbolLayers=[];for(const t of e){const e=t;s.symbolLayers.unshift(...e.symbolLayers)}}return i&&(s.callout=h),{type:"CIMSymbolReference",symbol:s,primitiveOverrides:t}}}function f(e,t){if(!e)return;const i=e.symbolLayers;if(!i)return;let s=i.length;for(;s--;){const e=i[s];e&&!1!==e.enable&&"CIMVectorMarker"===e.type&&m(e,t)}}function m(e,t){const i=e.markerGraphics;if(i)for(const e of i){if(!e)continue;const i=e.symbol;if(i)switch(i.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":f(i,t);break;case"CIMTextSymbol":i.fieldMap=t}}}},71206:(e,t,i)=>{i.d(t,{Z:()=>h});var s,r=i(29768),o=i(76506),n=i(34250),l=(i(91306),i(17533)),a=i(2906),u=i(14249),c=i(65684),p=i(74071),d=i(9352);i(92143),i(31450),i(71552),i(40642),i(60474),i(66396),i(22723),i(86656),i(60991),i(6540),i(60217),i(74569),i(21801),i(73796),i(74673),i(21972),i(23639),i(91055),i(19657),i(6906),i(50406),i(97714),i(60947),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(12158),i(74864),i(63683),i(94479),i(48027),i(54174),i(82426),i(29794),i(59465),i(45702),i(51127),i(51723),i(23243),i(51669),i(6090),i(3977),i(36741),i(34394),i(11253),i(90319),i(38822),i(52228),i(74057),i(23761),i(86748),i(15324),i(76996),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(55531),i(30582),i(593),i(85699),i(96055),i(47776),i(18033),i(6331),i(62048),i(4292),i(75626),i(72652),i(29641),i(30493),i(70821),i(82673),i(34229),i(37029),i(96467),i(63571),i(30776),i(63130),i(25696),i(59877),i(42775),i(95834),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(94216),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(22739),i(20543),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(36834),i(85339),i(8487),i(17817),i(90814),i(15459),i(61847),i(16796),i(16955),i(22401),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589),i(48190),i(85557),i(53785),i(95587),i(89241),i(91700);let y=s=class extends((0,p.V)(c.Z)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new d.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,i,s){null!=s&&s.origin||super.writeVisualVariables(e,t,i,s)}clone(){return new s({config:(0,o.d9)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,o.d9)(this.fieldMap),url:(0,o.d9)(this.url),visualVariables:(0,o.d9)(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await(0,u.io)(e,t,this.scaleExpression);for(const i in this.fieldMap){const s=this.fieldMap[i];t.has(s)&&e.add(s)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};(0,r._)([(0,n.Cb)({type:d.DictionaryLoader})],y.prototype,"_loader",null),(0,r._)([(0,n.Cb)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],y.prototype,"config",void 0),(0,r._)([(0,n.Cb)({type:Object,json:{write:!0}})],y.prototype,"fieldMap",void 0),(0,r._)([(0,n.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],y.prototype,"scaleExpression",void 0),(0,r._)([(0,a.w)("scaleExpression")],y.prototype,"writeData",null),(0,r._)([(0,n.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],y.prototype,"scaleExpressionTitle",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"url",void 0),(0,r._)([(0,a.w)("visualVariables")],y.prototype,"writeVisualVariables",null),y=s=(0,r._)([(0,l.j)("esri.renderers.DictionaryRenderer")],y);const h=y},51979:(e,t,i)=>{i.d(t,{Z:()=>S});var s,r=i(29768),o=i(48027),n=i(76506),l=i(63136),a=(i(91306),i(59465)),u=i(34250),c=i(17533),p=i(14249),d=i(65684),y=i(74071),h=i(32037),b=i(74673),f=i(5909),m=i(78548);i(54174),i(82426),i(29794),i(92143),i(31450),i(71552),i(40642),i(60474),i(66396),i(22723),i(86656),i(60991),i(57251),i(6540),i(60217),i(74569),i(21801),i(73796),i(97714),i(60947),i(2906),i(21972),i(23639),i(91055),i(19657),i(6906),i(50406),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(32422),i(12158),i(74864),i(63683),i(94479),i(45702),i(51127),i(51723),i(23243),i(51669),i(6090),i(3977),i(36741),i(34394),i(11253),i(90319),i(38822),i(52228),i(74057),i(23761),i(86748),i(15324),i(76996),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(55531),i(30582),i(593),i(85699),i(96055),i(47776),i(18033),i(6331),i(62048),i(4292),i(75626),i(72652),i(29641),i(30493),i(70821),i(82673),i(34229),i(37029),i(96467),i(63571),i(30776),i(63130),i(25696),i(59877),i(42775),i(95834),i(57150),i(76726),i(20444),i(76393),i(2497),i(49906),i(46527),i(11799),i(48649),i(94216),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(22739),i(20543),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(36834),i(85339),i(8487),i(17817),i(90814),i(15459),i(61847),i(16796),i(16955),i(22401),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(60669),i(48208),i(51589),i(48190),i(85557),i(53785),i(95587);let g=s=class extends b.a{constructor(){super(...arguments),this.unit=null}clone(){return new s({unit:this.unit})}};(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],g.prototype,"unit",void 0),g=s=(0,r._)([(0,c.j)("esri.renderers.support.DotDensityLegendOptions")],g);const _=g;var w;let v=w=class extends((0,y.V)(d.Z)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new o.Z([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new m.Z,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new f.Z({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new w({attributes:(0,n.d9)(this.attributes),backgroundColor:(0,n.d9)(this.backgroundColor),dotBlendingEnabled:(0,n.d9)(this.dotBlendingEnabled),dotShape:(0,n.d9)(this.dotShape),dotSize:(0,n.d9)(this.dotSize),dotValue:(0,n.d9)(this.dotValue),legendOptions:(0,n.d9)(this.legendOptions),outline:(0,n.d9)(this.outline),referenceScale:(0,n.d9)(this.referenceScale),visualVariables:(0,n.d9)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map((e=>e.field||e.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const i of this.attributes)i.valueExpression&&await(0,p.io)(e,t,i.valueExpression),i.field&&e.add(i.field)}};(0,r._)([(0,u.Cb)({type:[h.Z],json:{write:!0}})],v.prototype,"attributes",void 0),(0,r._)([(0,u.Cb)({type:o.Z,json:{write:!0}})],v.prototype,"backgroundColor",void 0),(0,r._)([(0,u.Cb)({type:Boolean}),(0,l.B)("dotBlendingEnabled")],v.prototype,"blendDots",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],v.prototype,"dotBlendingEnabled",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!1}})],v.prototype,"dotShape",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1}}}})],v.prototype,"dotSize",void 0),(0,r._)([(0,u.Cb)({type:_,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,r._)([(0,u.Cb)({type:m.Z,json:{default:null,write:!0}})],v.prototype,"outline",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{write:!0}})],v.prototype,"dotValue",void 0),(0,r._)([(0,u.Cb)({type:Number}),(0,l.B)("dotValue")],v.prototype,"referenceDotValue",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{write:!0}})],v.prototype,"referenceScale",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{write:!0}})],v.prototype,"seed",void 0),(0,r._)([(0,a.e)({dotDensity:"dot-density"})],v.prototype,"type",void 0),v=w=(0,r._)([(0,c.j)("esri.renderers.DotDensityRenderer")],v);const S=v},60698:(e,t,i)=>{i.d(t,{Z:()=>h});var s,r=i(29768),o=i(48027),n=i(76506),l=i(34250),a=(i(91306),i(59465)),u=i(17533),c=i(14249),p=i(65684),d=i(90811);i(54174),i(82426),i(29794),i(92143),i(31450),i(71552),i(40642),i(60474),i(66396),i(22723),i(86656),i(60991),i(57251),i(6540),i(60217),i(74569),i(21801),i(73796),i(74673),i(21972),i(23639),i(91055),i(19657),i(6906),i(50406),i(97714),i(60947),i(2906),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(32422),i(12158),i(74864),i(63683),i(94479),i(45702),i(51127);let y=s=class extends p.Z{constructor(e){super(e),this.blurRadius=10,this.referenceScale=0,this.colorStops=[new d.Z({ratio:0,color:new o.Z("rgba(255, 140, 0, 0)")}),new d.Z({ratio:.75,color:new o.Z("rgba(255, 140, 0, 1)")}),new d.Z({ratio:.9,color:new o.Z("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap"}async collectRequiredFields(e,t){const i=this.field;i&&"string"==typeof i&&(0,c.AB)(e,t,i)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new s({blurRadius:this.blurRadius,referenceScale:this.referenceScale,colorStops:(0,n.d9)(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}};(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],y.prototype,"blurRadius",void 0),(0,r._)([(0,l.Cb)({type:Number})],y.prototype,"referenceScale",void 0),(0,r._)([(0,l.Cb)({type:[d.Z],json:{write:!0}})],y.prototype,"colorStops",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],y.prototype,"field",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:{overridePolicy:(e,t,i)=>({enabled:null==i})}}})],y.prototype,"fieldOffset",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],y.prototype,"maxPixelIntensity",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],y.prototype,"minPixelIntensity",void 0),(0,r._)([(0,a.e)({heatmap:"heatmap"})],y.prototype,"type",void 0),y=s=(0,r._)([(0,u.j)("esri.renderers.HeatmapRenderer")],y);const h=y},86758:(e,t,i)=>{i.d(t,{Z:()=>y});var s,r=i(29768),o=i(76506),n=i(34250),l=(i(91306),i(59465)),a=i(17533),u=i(65684),c=i(74071),p=i(43022);i(92143),i(31450),i(71552),i(40642),i(60474),i(66396),i(22723),i(86656),i(60991),i(57251),i(6540),i(74673),i(21972),i(23639),i(91055),i(19657),i(6906),i(50406),i(12158),i(97714),i(74864),i(86787),i(63683),i(94479),i(48027),i(54174),i(82426),i(29794),i(45702),i(51127),i(2906),i(14249),i(60217),i(74569),i(21801),i(73796),i(60947),i(91597),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(32422),i(51723),i(23243),i(51669),i(6090),i(3977),i(36741),i(34394),i(11253),i(90319),i(38822),i(52228),i(74057),i(23761),i(86748),i(15324),i(76996),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(55531),i(30582),i(593),i(85699),i(96055),i(47776),i(18033),i(6331),i(62048),i(4292),i(75626),i(72652),i(29641),i(30493),i(70821),i(82673),i(34229),i(37029),i(96467),i(63571),i(30776),i(63130),i(25696),i(59877),i(42775),i(95834),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(94216),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(22739),i(20543),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(36834),i(85339),i(8487),i(17817),i(90814),i(15459),i(61847),i(16796),i(16955),i(22401),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589),i(48190),i(85557),i(53785),i(95587),i(16218),i(9075);let d=s=class extends((0,c.V)(u.Z)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map((i=>i.collectRequiredFields(e,t))))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new s({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:(0,o.d9)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,r._)([(0,n.Cb)(p.a)],d.prototype,"symbol",void 0),(0,r._)([(0,l.e)({simple:"simple"})],d.prototype,"type",void 0),d=s=(0,r._)([(0,a.j)("esri.renderers.SimpleRenderer")],d);const y=d},32037:(e,t,i)=>{i.d(t,{Z:()=>h});var s,r=i(29768),o=i(48027),n=i(74673),l=i(92143),a=i(34250),u=(i(76506),i(86787)),c=i(17533),p=i(91306);i(54174),i(82426),i(29794),i(31450),i(71552),i(40642),i(21972),i(23639),i(60474),i(66396),i(22723),i(86656),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991);const d=l.L.getLogger("esri.renderers.support.AttributeColorInfo");let y=s=class extends n.a{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(d.error(".field: field must be a string value"),null):(0,p.n)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new s({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,r._)([(0,a.Cb)({type:o.Z,json:{type:[Number],write:!0}})],y.prototype,"color",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"field",void 0),(0,r._)([(0,u.p)("field")],y.prototype,"castField",null),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"valueExpression",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"valueExpressionTitle",void 0),y=s=(0,r._)([(0,c.j)("esri.renderers.support.AttributeColorInfo")],y);const h=y},90811:(e,t,i)=>{i.d(t,{Z:()=>c});var s,r=i(29768),o=i(48027),n=i(74673),l=i(34250),a=(i(76506),i(91306),i(17533));i(54174),i(82426),i(29794),i(92143),i(31450),i(71552),i(40642),i(21972),i(23639),i(60474),i(66396),i(22723),i(86656),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991);let u=s=class extends n.a{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new s({color:this.color,ratio:this.ratio})}};(0,r._)([(0,l.Cb)({type:o.Z,json:{write:!0}})],u.prototype,"color",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],u.prototype,"ratio",void 0),u=s=(0,r._)([(0,a.j)("esri.renderers.support.HeatmapColorStop")],u);const c=u},20208:(e,t,i)=>{i.d(t,{r:()=>p,a:()=>h,w:()=>d});var s=i(17533),r=i(55306),o=i(71206),n=i(51979),l=i(60698),a=i(65684),u=i(86758),c=i(95310);i(76506),i(86656),i(66396),i(22723),i(6540),i(92143),i(31450),i(71552),i(40642),i(91306),i(60991),i(96467),i(63571),i(34250),i(60474),i(59465),i(57251),i(97714),i(2906),i(14249),i(60217),i(74569),i(21801),i(73796),i(74673),i(21972),i(23639),i(91055),i(19657),i(6906),i(50406),i(60947),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(32422),i(30776),i(48027),i(54174),i(82426),i(29794),i(63130),i(25696),i(59877),i(42775),i(95834),i(34394),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(94216),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(15324),i(76996),i(34635),i(10401),i(49900),i(88762),i(82058),i(22739),i(20543),i(3482),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(36834),i(85339),i(8487),i(17817),i(90814),i(15459),i(61847),i(16796),i(16955),i(22401),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589),i(74071),i(51723),i(23243),i(51669),i(6090),i(3977),i(36741),i(11253),i(90319),i(38822),i(52228),i(74057),i(23761),i(86748),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(1648),i(8925),i(33921),i(45154),i(16769),i(55531),i(30582),i(593),i(85699),i(96055),i(47776),i(18033),i(6331),i(62048),i(4292),i(75626),i(72652),i(29641),i(30493),i(70821),i(82673),i(34229),i(37029),i(48190),i(85557),i(53785),i(95587),i(94070),i(43022),i(16218),i(9075),i(12158),i(74864),i(63683),i(94479),i(45702),i(51127),i(9352),i(89241),i(91700),i(63136),i(32037),i(90811),i(93939),i(238),i(71831);const p={key:"type",base:a.Z,typeMap:{heatmap:l.Z,simple:u.Z,"unique-value":c.Z,"class-breaks":r.Z,"dot-density":n.Z,dictionary:o.Z},errorContext:"renderer"},d={key:"type",base:a.Z,typeMap:{simple:u.Z,"unique-value":c.Z,"class-breaks":r.Z},errorContext:"renderer"},y=(0,s.c)({types:p});function h(e,t,i){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(i&&i.messages&&i.messages.push(new s.W("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:i})),null):y(e,t,i):null}}}]);