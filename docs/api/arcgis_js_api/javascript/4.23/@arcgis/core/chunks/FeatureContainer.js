/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{a as t,m as e}from"./mat2d.js";import{d as s,m as i}from"./mat3.js";import{c as r}from"./mat3f32.js";import{t as a}from"./vec2.js";import{c as n}from"./vec2f32.js";import{k as o,D as d,A as h,e as u,f as l,g as _,h as c,J as p,K as E,n as f,m as x,L as m,O as R}from"./definitions.js";import{T as g}from"./TiledDisplayObject.js";import{i as v,b as T,Z as y,m as b,h as S,u as k,U as C,C as D,o as z}from"../core/lang.js";import{createResolver as w}from"../core/promiseUtils.js";import{Q as M}from"./Queue.js";import O from"../core/Error.js";import{L as F}from"./Logger.js";import{e as A,f as P,g as V}from"./visualVariablesUtils.js";import{g as L,y as N,z as I,i as U}from"./Utils16.js";import{f as j,a as B,b as q,c as K,T as Y,d as Q,e as G}from"./enums.js";import{F as X}from"./FramebufferObject.js";import{T as Z}from"./Texture.js";import{T as $}from"./TileContainer.js";import H from"../Color.js";import{e as J}from"./screenUtils.js";import{g as W}from"./unitUtils.js";import{m as tt}from"./lengthUtils.js";import{g as et}from"./capabilities2.js";class st extends g{constructor(t,e,s){super(t,e,s,o,o)}destroy(){super.destroy(),this._transforms&&st.TransformCache.release(this.key.hash)}setTransform(r,o){const d=o/(r.resolution*r.pixelRatio),h=this.transforms.tileMat3,[u,l]=r.toScreenNoRotation([0,0],[this.x,this.y]),_=this.width/this.rangeX*d,c=this.height/this.rangeY*d;s(h,_,0,0,0,c,0,u,l,1),i(this.transforms.dvs,r.displayViewMat3,h);const p=this.transforms.labelMat2d,E=r.getScreenTransform(p,o),f=n();a(f,[this.x,this.y],E),t(p,f),e(p,r.viewMat2d,p)}_createTransforms(){return st.TransformCache.acquire(this.key.hash)}}st.TransformCache=new class{acquire(t){return{refCount:1,version:-1,labelMat2d:r(),tileMat3:r(),dvs:r()}}release(t){}};class it{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,s=t.byteLength/rt.BYTES_PER_RECORD-e){const i=new rt(new Int32Array(t,e*rt.BYTES_PER_RECORD,s*rt.ELEMENTS_PER_RECORD));return new it(i)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const t=this._cursor.size();if(e<t)return this._cursor._index=e,!0;e-=t,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor();for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var t;const e=new it(null==(t=this._head)?void 0:t.copy());if(!e._head)return e;let s=e._head,i=e._head._link;for(;i;)s._link=i.copy(),s=i,i=s._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(v(s)&&(s._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0;s=e,e=e._link}return!1}}it.ELEMENTS_PER_RECORD=d,it.BYTES_PER_RECORD=it.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class rt{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new rt(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=2147483647,++this._deletedCount;this.next()&&this.id===t;)this.id=2147483647,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(T(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id)}if(!this._offsets.instance.has(t))return!1;const e=this._index;return this._index=this._offsets.instance.get(t),2147483647!==this.id||(this._index=e,!1)}get id(){return this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*rt.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*rt.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*rt.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/rt.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&2147483647===this.id;);return this._index<this.size()}peekId(){const t=(this._index+1)*rt.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new rt(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}rt.ELEMENTS_PER_RECORD=d,rt.BYTES_PER_RECORD=rt.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;const at=F.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),nt=A(P,at);class ot{constructor(t,e,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:a}=t,n=L(r);this.shared=s,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new n(k(i))),this._resetRange()}destroy(){b(this._texture,(t=>t.dispose()));for(const t in this._fbos)b(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:Y.TEXTURE_2D,wrapMode:j.CLAMP_TO_EDGE,pixelFormat:B.RGBA,dataType:this.pixelType,samplingMode:K.NEAREST,width:this.size,height:this.size}}setData(t,e,s){const i=V(t),r=k(this.data),a=i*this.texelSize+e;!r||a>=r.length||(r[a]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(t,e){if(T(this.data))return null;const s=V(t)*this.texelSize+e;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return z(this._texture,(()=>this._initTexture(t)))}getFBO(t,e=0){if(T(this._fbos[e])){const s={colorTarget:Q.TEXTURE,depthStencilTarget:G.NONE},i=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new X(t,s,i)}return this._fbos[e]}get locked(){return!(this.pixelType!==q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!S("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const e=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const i=k(this.data).buffer,r=this.getTexture(t),a=4,n=(e-e%this.size)/this.size,o=(s-s%this.size)/this.size,d=n,h=this.size,u=o,l=n*this.size*a,_=(h+u*this.size)*a-l,c=L(this.pixelType),p=new c(i,l*c.BYTES_PER_ELEMENT,_),E=this.size,f=u-d+1;if(f>this.size)return void at.error(new O("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,d,E,f,p)}catch(t){}e()}}update(t){const{data:e,start:s,end:i}=t;if(v(e)){const i=this.data,r=s*this.texelSize;for(let s=0;s<e.length;s++){const a=1<<s%this.texelSize;t.layout&a&&(i[r+s]=e[s])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(t,e){const s=this.size;if(this.size=e,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=L(this.pixelType);this.destroy(),this.data=new i(k(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new Z(t,this._textureDesc,z(this.data,void 0));if(v(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(t),o=N(r),d=new(L(r))(new ArrayBuffer(s*i*o*this.texelSize)),h=t.getBoundFramebufferObject(),{x:u,y:l,width:_,height:c}=t.getViewport();t.bindFramebuffer(n),n.readPixels(0,0,s,i,a,r,d),e.updateData(0,0,0,2*s,i/2,d),t.setViewport(u,l,_,c),t.bindFramebuffer(h)}return this.destroy(),this._texture=e,this._texture}}class dt{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:s,size:i}=t;if(this.shared=s,this.size=i,nt("Initializing AttributeStoreView",t),T(this._data))this._data=y(e,(t=>new ot(t,i,s)));else for(let t=0;t<this._data.length;t++){const r=this._data[t],a=e[t];v(a)&&(T(r)?this._data[t]=new ot(a,i,s):r.resize(a,i))}this._initialized=!0}destroy(){b(this._data,(t=>y(t,(t=>t.destroy())))),b(this._defaultTexture,(t=>t.dispose()))}isEmpty(){const t=this._data;return T(t)}isUpdating(){const t=v(this._pendingAttributeUpdate),e=t;return S("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}\n  -> hasPendingUpdate ${t}`),e}getBlock(t){if(T(this._data))return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,h,0,0)}getData(t,e,s,i){if(!this._data)return 0;const r=k(this._data)[e];if(T(r))return 0;const a=r.getData(t,s);return v(a)?a:i}setData(t,e,s,i){const r=k(this._data)[e];k(r).setData(t,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void at.error(new O("mapview-webgl","Tried to update attribute data with a pending update"));const e=w();return nt("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},e.promise}update(){if(this._initialized&&v(this._pendingAttributeUpdate)){const{data:t,resolver:e}=this._pendingAttributeUpdate,s=k(this._data);for(let e=0;e<t.blocks.length;e++){const i=t.blocks[e],r=s[e];b(r,(t=>b(i,(s=>{nt(`Updating block ${e}`,s),t.update(s)}))))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){this.update();const s=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(s,u),void(e&&(t.bindTexture(s,l),t.bindTexture(s,_),t.bindTexture(s,c),t.bindTexture(s,p)));const i=k(this._data);this._locked&&!this._forceNextUpload||(C(i,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(D(i[E],s,(e=>e.getTexture(t))),u),e&&(t.bindTexture(D(i[f],s,(e=>e.getTexture(t))),p),t.bindTexture(D(i[x],s,(e=>e.getTexture(t))),l),t.bindTexture(D(i[h],s,(e=>e.getTexture(t))),_),t.bindTexture(D(i[m],s,(e=>e.getTexture(t))),c))}_getDefaultTexture(t){if(T(this._defaultTexture)){const e={wrapMode:j.CLAMP_TO_EDGE,pixelFormat:B.RGBA,dataType:q.UNSIGNED_BYTE,samplingMode:K.NEAREST,width:1,height:1};this._defaultTexture=new Z(t,e,new Uint8Array(4))}return this._defaultTexture}}function ht(t,e){const s=e.length;if(t<e[0].value||1===s)return e[0].size;for(let i=1;i<s;i++)if(t<e[i].value){const s=(t-e[i-1].value)/(e[i].value-e[i-1].value);return e[i-1].size+s*(e[i].size-e[i-1].size)}return e[s-1].size}function ut(t,e,s=0){if(T(e))return t[s+0]=0,t[s+1]=0,t[s+2]=0,void(t[s+3]=0);const{r:i,g:r,b:a,a:n}=e;t[s+0]=i*n/255,t[s+1]=r*n/255,t[s+2]=a*n/255,t[s+3]=n}class lt{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops;switch(e.type){case"static":return e;case"level-dependent":return z(e.levels[t],(()=>{let s=1/0,i=0;for(const r in e.levels){const e=parseFloat(r),a=Math.abs(t-e);a<s&&(s=a,i=e)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((t-i)/2),a=k(e.levels[i]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:k(a.sizes),values:n}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){v(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,s){if(this._updateEffects(s),this._vvInfo=e,"dot-density"===t.type)this._updateDotDensityInfo(t)}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:et().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(t){v(t)?this.outsideLabelsVisible=t.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(t,e){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!t)return;const i=t.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const t=i.minMaxValue;let s,r;if(I(t.minSize)&&I(t.maxSize))if(U(t.minSize)&&U(t.maxSize))s=J(t.minSize),r=J(t.maxSize);else{const i=e.scale;s=J(ht(i,t.minSize.stops)),r=J(ht(i,t.maxSize.stops))}this.vvSizeMinMaxValue.set([t.minDataValue,t.maxDataValue,s,r])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=J(ht(e.scale,i.scaleStops.stops))),i.unitValue){const t=W(e.spatialReference)/tt[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=t/e.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=t.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=t.opacity;a&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=t.rotation;n&&(s.vvRotationEnabled=!0,s.vvRotationType=n.type)}_updateDotDensityInfo(t){const e=t.attributes;this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed;for(let t=0;t<R;t++){const s=t>=e.length?new H([0,0,0,0]):e[t].color;ut(this.ddColors,s,4*t)}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0;ut(this.ddBackgroundColor,t.backgroundColor)}}class _t extends ${constructor(t){super(t),this._rendererInfo=new lt,this._materialItemsRequestQueue=new M,this.attributeView=new dt((()=>this.onAttributeStoreUpdate()))}destroy(){this.removeAllChildren(),this.children.forEach((t=>t.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,s){this._rendererInfo.setInfo(t,e,s),this.requestRender()}async getMaterialItems(t,e){if(!t||0===t.length)return null;const s=w();return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:s}),this.requestRender(),s.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop();for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}createRenderParams(t){const e=super.createRenderParams(t);return e.rendererInfo=this._rendererInfo,e.attributeView=this.attributeView,e}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:s,resolver:i}){const{painter:r,pixelRatio:a}=t,n=e.map((t=>r.textureManager.rasterizeItem(t.symbol,a,t.glyphIds,s)));Promise.all(n).then((t=>{if(!this.stage)return void i.reject();const s=t.map(((t,s)=>({id:e[s].id,mosaicItem:t})));i.resolve(s)}),i.reject)}}export{it as D,_t as F,st as W};
