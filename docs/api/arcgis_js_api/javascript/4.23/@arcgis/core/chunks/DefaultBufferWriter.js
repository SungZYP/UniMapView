/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{clone as t,b as e,t as s,v as i,w as r,i as n,o,x as a}from"../core/lang.js";import{c as h,m as l,b as c,r as d,n as m}from"./mat4.js";import{c as u,b as f,I as _}from"./mat4f64.js";import{v as g,g as p,u as b,p as y,j as v,q as j,s as A,b as S,e as x,f as O,K as T,L as M,O as R}from"./mathUtils.js";import{c as L,d as E,e as N,i as B,g as V}from"./sphere.js";import{m as w}from"./mathUtils2.js";import{O as P,U as D,R as z}from"./basicInterfaces.js";import{C as I,b as C}from"./Material.js";import{O as U}from"./ArrayPool.js";import{g as W}from"./watch.js";import{a as H,r as F}from"./Util.js";import{a as q,r as G}from"./utils2.js";import{E as k}from"./Evented.js";import X from"../core/Handles.js";import{P as Z}from"../core/scheduling.js";import{i as K}from"./frustum.js";import{w as Q}from"./ray.js";import{b as Y,O as J}from"./vec4f64.js";import{projectPoint as $}from"../geometry/projection.js";import{i as tt,m as et}from"./aaBoundingBox.js";import{b as st}from"./aaBoundingRect.js";import{g as it,a as rt,r as nt}from"../geometry/Polygon.js";import{m as ot}from"./dehydratedFeatures.js";import at from"../Graphic.js";import{fromJSON as ht}from"../geometry/support/jsonUtils.js";import{V as lt}from"./VertexAttribute.js";import{d as ct,w as dt}from"./glUtil3D.js";import{a as mt}from"./RenderSlot.js";import{n as ut}from"./InterleavedLayout.js";function ft(t){return"declaredClass"in t}function _t(t){return"declaredClass"in t}function gt(e,s){if(!e)return null;if(function(t){return"declaredClass"in t}(e))return e;const i=new at({layer:s,sourceLayer:s});return i.visible=e.visible,i.symbol=t(e.symbol),i.attributes=t(e.attributes),i.geometry=pt(e.geometry),i}function pt(t){return e(t)?null:ft(t)?t:ht(function(t){const e=t.spatialReference.toJSON();switch(t.type){case"point":{const{x:s,y:i,z:r,m:n}=t;return{x:s,y:i,z:r,m:n,spatialReference:e}}case"polygon":{const{rings:s,hasZ:i,hasM:r}=t;return{rings:bt(s),hasZ:i,hasM:r,spatialReference:e}}case"polyline":{const{paths:s,hasZ:i,hasM:r}=t;return{paths:bt(s),hasZ:i,hasM:r,spatialReference:e}}case"extent":{const{xmin:s,xmax:i,ymin:r,ymax:n,zmin:o,zmax:a,mmin:h,mmax:l,hasZ:c,hasM:d}=t;return{xmin:s,xmax:i,ymin:r,ymax:n,zmin:o,zmax:a,mmin:h,mmax:l,hasZ:c,hasM:d,spatialReference:e}}case"multipoint":{const{points:s,hasZ:i,hasM:r}=t;return{points:vt(s)?yt(s):s,hasZ:i,hasM:r,spatialReference:e}}default:return}}(t))}function bt(t){return function(t){for(const e of t)if(0!==e.length)return vt(e);return!1}(t)?t.map((t=>yt(t))):t}function yt(t){return t.map((t=>r(t)))}function vt(t){return t.length&&(s(t[0])||i(t[0]))}function jt(t,e){if(!t)return null;let s;if(_t(t)){if(null==e)return t.clone();if(_t(e))return e.copy(t)}return null!=e?(s=e,s.x=t.x,s.y=t.y,s.spatialReference=t.spatialReference,t.hasZ?(s.z=t.z,s.hasZ=t.hasZ):(s.z=null,s.hasZ=!1),t.hasM?(s.m=t.m,s.hasM=!0):(s.m=null,s.hasM=!1)):(s=ot(t.x,t.y,t.z,t.spatialReference),t.hasM&&(s.m=t.m,s.hasM=!0)),s}class At{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(t,e,s,i,r,n){this.id=W(),this.geometry=t,this.material=e,this.transformation=s,this.instanceParameters=i,this.origin=r,this._shaderTransformation=n,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return n(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(t){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(g(t,t,this.getStaticTransformation()),!0)}}At.pool=new U(At);class St{constructor(t){this.channel=t,this.id=W()}}class xt extends I{constructor(t={}){super(),this.type=C.Object,this._geometryRecords=new Array,this._geometries=new Array,this._objectTransformation=u(),this._bvObjectSpace=new Tt,this._bvWorldSpace=new Tt,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.castShadow=null==t.castShadow||t.castShadow,this.metadata=t.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new Ot),this.transformation=u();const{geometries:e,materials:s,transformations:i,origins:r}=t;if(Array.isArray(e)){H(s.length===e.length,"Object3D: materials don't match geometries"),H(i.length===e.length,"Object3D: transformations don't match geometries"),this._geometryRecords.length=e.length,this._geometries.length=e.length;for(let t=0;t<e.length;t++)this._geometries[t]=e[t],this._geometryRecords[t]=At.pool.acquire(e[t],s[t],f(i[t]),{highlights:null,occludees:null,visible:this._visible},r&&r[t])}}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get transformation(){return this._objectTransformation}set transformation(t){h(this._objectTransformation,t),this._invalidateBoundingVolume(),this._emit("objectTransformation",this)}dispose(){this._geometryRecords.length=0,this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(t){H(null==this._parentLayer||null==t,"Object3D can only be added to a single Layer"),this._parentLayer=t}addGeometry(t,e,s,i,r){s=s||_,this._geometries.push(t);const o=At.pool.acquire(t,e,s,{highlights:null,occludees:null,visible:this._visible},i,r);return this._geometryRecords.push(o),this._hasVolatileTransformation=this._hasVolatileTransformation||n(o.shaderTransformation),this._emit("objectGeometryAdded",{object:this,record:o}),this._invalidateBoundingVolume(),o}removeGeometry(t){const e=this._geometryRecords.splice(t,1)[0];return this._hasVolatileTransformation=n(e.shaderTransformation)?this._geometryRecords.some((t=>n(t.shaderTransformation))):this._hasVolatileTransformation,e.dispose(),this._geometries.splice(t,1),this._emit("objectGeometryRemoved",{object:this,record:e}),this._invalidateBoundingVolume(),e}removeAllGeometries(){for(;this.geometryRecords.length>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(t){this._emit("vertexAttrsUpdated",{object:this,record:t}),this._invalidateBoundingVolume()}get isVisible(){return this._visible}setVisible(t){if(this._visible!==t){this._visible=t;for(const t of this._geometryRecords)t.instanceParameters.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const t=new St(P.MaskOccludee);for(const e of this._geometryRecords)e.instanceParameters.occludees=q(e.instanceParameters.occludees,t);return this._emit("occlusionChanged",this),t}removeOcclude(t){for(const e of this._geometryRecords)e.instanceParameters.occludees=G(e.instanceParameters.occludees,t);this._emit("occlusionChanged",this)}highlight(){const t=new St(P.Highlight);for(const e of this._geometryRecords)e.instanceParameters.highlights=q(e.instanceParameters.highlights,t);return this._emit("highlightChanged",this),t}removeHighlight(t){for(const e of this._geometryRecords)e.instanceParameters.highlights=G(e.instanceParameters.highlights,t);this._emit("highlightChanged",this)}getCombinedStaticTransformation(t,e){return l(o(e,u()),this.transformation,t.getStaticTransformation())}_getCombinedShaderTransformation(t,e){return e=e||u(),l(e,this.transformation,t.getShaderTransformation()),e}hasVolativeTransformation(){return this._hasVolatileTransformation}get boundingVolumeWorldSpace(){return this._validateBoundingVolume(),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._validateBoundingVolume(),this._bvObjectSpace}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let t=0;t<this._geometryRecords.length;++t){const e=this._geometries[t],s=this._geometryRecords[t],i=e.boundingInfo;n(i)&&(this._calculateTransformedBoundingVolume(i,this._bvObjectSpace,s.getShaderTransformation()),this._calculateTransformedBoundingVolume(i,this._bvWorldSpace,this._getCombinedShaderTransformation(s)))}p(this._bvObjectSpace.bounds,this._bvObjectSpace.min,this._bvObjectSpace.max,.5),p(this._bvWorldSpace.bounds,this._bvWorldSpace.min,this._bvWorldSpace.max,.5);const t=S(),s=S(),i=w(this.transformation);for(let r=0;r<this._geometryRecords.length;++r){const n=this._geometries[r].boundingInfo;if(e(n))continue;const o=this._geometryRecords[r].getShaderTransformation(),a=w(o);g(t,n.getCenter(),o);const h=b(t,this._bvObjectSpace.bounds),l=n.getBSRadius()*a;this._bvObjectSpace.bounds[3]=Math.max(this._bvObjectSpace.bounds[3],h+l),g(s,t,this.transformation);const c=b(s,this._bvWorldSpace.bounds),d=l*i;this._bvWorldSpace.bounds[3]=Math.max(this._bvWorldSpace.bounds[3],c+d)}this._bvDirty=!1}_calculateTransformedBoundingVolume(t,e,s){const i=t.getBBMin(),r=t.getBBMax(),n=y(i),o=y(r);g(n,n,s),g(o,o,s);for(let t=0;t<3;++t)e.min[t]=Math.min(e.min[t],n[t],o[t]),e.max[t]=Math.max(e.max[t],n[t],o[t]);for(let t=0;t<3;++t){v(n,i),v(o,r),n[t]=r[t],o[t]=i[t],g(n,n,s),g(o,o,s);for(let t=0;t<3;++t)e.min[t]=Math.min(e.min[t],n[t],o[t]),e.max[t]=Math.max(e.max[t],n[t],o[t])}}_invalidateBoundingVolume(){this._bvDirty=!0,n(this._parentLayer)&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace.bounds)}_emit(t,e){n(this._parentLayer)&&this._parentLayer.events.emit(t,e)}get test(){const t=this;return{hasGeometry:e=>t._geometries.indexOf(e)>-1,getGeometryIndex:e=>t._geometries.indexOf(e)}}}class Ot{constructor(){this.min=j(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=j(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class Tt extends Ot{constructor(){super(...arguments),this.bounds=L()}init(){A(this.min,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),A(this.max,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),E(this.bounds)}}const Mt=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","shaderTransformationChanged","objectTransformation","visibilityChanged","occlusionChanged","highlightChanged","objectGeometryAdded","objectGeometryRemoved","vertexAttrsUpdated"];class Rt{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new Lt,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),Lt.clearPool(),Ut[0]=null,Gt.prune(),Yt.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const s=Lt.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(s.init(this._root),this._add(e,s))}Lt.release(s)}remove(t,e=null){this._objectCount-=t.length;const s=Lt.acquire();for(const i of t){const t=n(e)?e:N(this._objectToBoundingSphere(i),kt);Dt(t[3])?(s.init(this._root),this._remove(i,t,s)):this._degenerateObjects.delete(i)}Lt.release(s),this._shrink()}update(t,e){if(!Dt(e[3])&&this._isDegenerate(t))return;const s=function(t){return Ut[0]=t,Ut}(t);this.remove(s,e),this.add(s)}forEachAlongRay(t,e,s){const i=Q(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&s(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&s(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,s,i){const r=Q(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(r,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(r,t,i)&&s(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(r,t,i)&&s(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const s=e.node;return s.terminals.forAll(t),null!==s.residents&&s.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,s,i=(()=>!0),r=1/0){let n=1/0,o=1/0,a=null;const h=wt(t,e),l=h=>{if(--r,!i(h))return;const l=this._objectToBoundingSphere(h);if(!K(s,l))return;const c=Pt(t,e,V(l)),d=c-l[3],m=c+l[3];d<n&&(n=d,o=m,a=h)};return this._forEachNodeDepthOrdered(this._root,(i=>{if(r<=0||!K(s,i.bounds))return!1;x(Ht,h,i.halfSize),O(Ht,Ht,i.bounds);if(Pt(t,e,Ht)>o)return!1;const n=i.node;return n.terminals.forAll((t=>l(t))),null!==n.residents&&n.residents.forAll((t=>l(t))),!0}),t,e),a}forEachInDepthRange(t,e,s,i,r,n,o){let a=-1/0,h=1/0;const l={setRange:t=>{s===Et.FRONT_TO_BACK?(a=Math.max(a,t.near),h=Math.min(h,t.far)):(a=Math.max(a,-t.far),h=Math.min(h,-t.near))}};l.setRange(i);const c=Pt(e,s,t),d=wt(e,s),m=wt(e,-s),u=t=>{if(!o(t))return;const i=this._objectToBoundingSphere(t),d=V(i),m=Pt(e,s,d)-c,u=m-i[3],f=m+i[3];u>h||f<a||!K(n,i)||r(t,l)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!K(n,t.bounds))return!1;x(Ht,d,t.halfSize),O(Ht,Ht,t.bounds);if(Pt(e,s,Ht)-c>h)return!1;x(Ht,m,t.halfSize),O(Ht,Ht,t.bounds);if(Pt(e,s,Ht)-c<a)return!1;const i=t.node;return i.terminals.forAll((t=>u(t))),null!==i.residents&&i.residents.forAll((t=>u(t))),!0}),e,s)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize)))}_intersectsNode(t,e){return Bt(e.bounds,2*-e.halfSize,Ft),Bt(e.bounds,2*e.halfSize,qt),F(t.origin,t.direction,Ft,qt)}_intersectsNodeWithOffset(t,e,s){return Bt(e.bounds,2*-e.halfSize,Ft),Bt(e.bounds,2*e.halfSize,qt),s.applyToMinMax(Ft,qt),F(t.origin,t.direction,Ft,qt)}_intersectsObject(t,e){const s=this._objectToBoundingSphere(e);return!(s[3]>0)||B(s,t)}_intersectsObjectWithOffset(t,e,s){const i=this._objectToBoundingSphere(e);return!(i[3]>0)||B(s.applyToBoundingSphere(i),t)}_forEachNode(t,e){let s=Lt.acquire().init(t);const i=[s];for(;0!==i.length;){if(s=i.pop(),e(s)&&!s.isLeaf())for(let t=0;t<s.node.children.length;t++){s.node.children[t]&&i.push(Lt.acquire().init(s).advance(t))}Lt.release(s)}}_forEachNodeDepthOrdered(t,e,s,i=Et.FRONT_TO_BACK){let r=Lt.acquire().init(t);const n=[r];for(!function(t,e,s){if(!Yt.length)for(let t=0;t<8;++t)Yt.push({index:0,distance:0});for(let s=0;s<8;++s){const i=zt[s];Yt.data[s].index=s,Yt.data[s].distance=Pt(t,e,i)}Yt.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)s[t]=Yt.data[t].index}(s,i,Jt);0!==n.length;){if(r=n.pop(),e(r)&&!r.isLeaf())for(let t=7;t>=0;--t){const e=Jt[t];r.node.children[e]&&n.push(Lt.acquire().init(r).advance(e))}Lt.release(r)}}_remove(t,e,s){Gt.clear();const i=s.advanceTo(e,((t,e)=>{Gt.push(t.node),Gt.push(e)}))?s.node.terminals:s.node.residents;if(i.removeUnordered(t),0===i.length)for(let t=Gt.length-2;t>=0;t-=2){const e=Gt.data[t],s=Gt.data[t+1];if(!this._purge(e,s))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new Z({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let s=0;s<e.length;s++){const i=Lt.acquire().init(t);this._add(e.getItemAt(s),i),Lt.release(i)}}_grow(t,e){if(0!==e&&(Vt(t,e,(t=>this._objectToBoundingSphere(t)),Xt),Dt(Xt[3])&&!this._fitsInsideTree(Xt)))if(this._nodeIsEmpty(this._root.node))N(Xt,this._root.bounds),this._root.halfSize=1.25*Xt[3];else{const t=this._rootBoundsForRootAsSubNode(Xt);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(Xt,t):this._growRootAsSubNode(t),Lt.release(t)}}_rebuildTree(t,e){v(Zt,e.bounds),Zt[3]=e.halfSize,Vt([t,Zt],2,(t=>t),Kt);const s=Lt.acquire().init(this._root);this._root.initFrom(null,Kt,1.25*Kt[3]),this._forEachNode(s,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),Lt.release(s)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let s=0;return this._forEachNode(this._root,(t=>(s=Math.max(s,t.depth),s+e<=this._maximumDepth))),s+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],s=t;let i=-1/0;const r=this._root.bounds,n=this._root.halfSize;for(let t=0;t<3;t++){const o=r[t]-n-(s[t]-e),a=s[t]+e-(r[t]+n),h=Math.max(0,Math.ceil(o/(2*n))),l=Math.max(0,Math.ceil(a/(2*n)))+1,c=2**Math.ceil(Math.log(h+l)*Math.LOG2E);i=Math.max(i,c),Qt[t].min=h,Qt[t].max=l}for(let t=0;t<3;t++){let e=Qt[t].min,s=Qt[t].max;const o=(i-(e+s))/2;e+=Math.ceil(o),s+=Math.floor(o);const a=r[t]-n-e*n*2;Wt[t]=a+(s+e)*n}return Wt[3]=i*n*Ct,Lt.acquire().initFrom(null,Wt,i*n,0)}_growRootAsSubNode(t){const e=this._root.node;v(Xt,this._root.bounds),Xt[3]=this._root.halfSize,this._root.init(t),t.advanceTo(Xt,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let s=0,i=0;for(;i<e.length&&null==t;)s=i++,t=e[s];for(;i<e.length;)if(e[i++])return-1;return s}_isDegenerate(t){return!Dt(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,s=this._root.halfSize;return t[3]<=s&&t[0]>=e[0]-s&&t[0]<=e[0]+s&&t[1]>=e[1]-s&&t[1]<=e[1]+s&&t[2]>=e[2]-s&&t[2]<=e[2]+s}}class Lt{constructor(){this.bounds=L(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,s,i=this.depth){return this.node=n(t)?t:Lt.createEmptyNode(),n(e)&&N(e,this.bounds),this.halfSize=s,this.depth=i,this}advance(t){let e=this.node.children[t];e||(e=Lt.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const s=zt[t];return this.bounds[0]+=s[0]*this.halfSize,this.bounds[1]+=s[1]*this.halfSize,this.bounds[2]+=s[2]*this.halfSize,this.bounds[3]=this.halfSize*Ct,this}advanceTo(t,e,s=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!s)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new Z({shrink:!0}),residents:new Z({shrink:!0})}}static acquire(){return Lt._pool.acquire()}static release(t){Lt._pool.release(t)}static clearPool(){Lt._pool.prune()}}var Et;function Nt(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function Bt(t,e,s){s[0]=t[0]+e,s[1]=t[1]+e,s[2]=t[2]+e}function Vt(t,e,s,i){if(1===e){const e=s(t[0]);N(e,i)}else{Ft[0]=1/0,Ft[1]=1/0,Ft[2]=1/0,qt[0]=-1/0,qt[1]=-1/0,qt[2]=-1/0;for(let i=0;i<e;i++){const e=s(t[i]);Dt(e[3])&&(n=e,(r=Ft)[0]=Math.min(r[0],n[0]-n[3]),r[1]=Math.min(r[1],n[1]-n[3]),r[2]=Math.min(r[2],n[2]-n[3]),Nt(qt,e))}p(i,Ft,qt,.5),i[3]=Math.max(qt[0]-Ft[0],qt[1]-Ft[1],qt[2]-Ft[2])/2}var r,n}function wt(t,e){let s=1/0,i=null;for(let r=0;r<8;++r){const n=Pt(t,e,It[r]);n<s&&(s=n,i=It[r])}return i}function Pt(t,e,s){return e*(t[0]*s[0]+t[1]*s[1]+t[2]*s[2])}function Dt(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}Lt._pool=new U(Lt),function(t){t[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(Et||(Et={}));const zt=[j(-1,-1,-1),j(1,-1,-1),j(-1,1,-1),j(1,1,-1),j(-1,-1,1),j(1,-1,1),j(-1,1,1),j(1,1,1)],It=[j(-1,-1,-1),j(-1,-1,1),j(-1,1,-1),j(-1,1,1),j(1,-1,-1),j(1,-1,1),j(1,1,-1),j(1,1,1)],Ct=Math.sqrt(3),Ut=[null];const Wt=L(),Ht=S(),Ft=S(),qt=S(),Gt=new Z,kt=L(),Xt=L(),Zt=L(),Kt=L(),Qt=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Yt=new Z,Jt=[0,0,0,0,0,0,0,0];class $t extends I{constructor(t,e=""){var s,i,r;super(),this.apiLayerUid=e,this.type=C.Layer,this.events=new k,this.isSliceable=!1,this._objects=new Z,this._stageHandles=new X,this.apiLayerUid=e,this.isVisible=null==(s=null==t?void 0:t.isVisible)||s,this.isPickable=null==(i=null==t?void 0:t.isPickable)||i,this.updatePolicy=null!=(r=null==t?void 0:t.updatePolicy)?r:D.ASYNC}get objects(){return this._objects}destroy(){this.detachStage(),this._stage=null}attachStage(t){this.detachStage(),this._stage=t;for(const e of Mt)this._stageHandles.add(this.events.on(e,(s=>t.handleEvent(e,s))))}detachStage(){this._stageHandles.removeAll(),this.invalidateSpatialQueryAccelerator()}add(t){this._objects.push(t),t.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:t}),n(this._octree)&&this._octree.add([t])}remove(t){this._objects.removeUnordered(t)&&(t.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:t}),n(this._octree)&&this._octree.remove([t]))}addMany(t){this._objects.pushArray(t);for(const e of t)e.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:t}),n(this._octree)&&this._octree.add(t)}removeMany(t){const e=new Array;if(this._objects.removeUnorderedMany(t,t.length,e),0!==e.length){for(const t of e)t.parentLayer=null;this.events.emit("layerObjectsRemoved",{layer:this,objects:e}),n(this._octree)&&this._octree.remove(e)}}sync(){n(this._stage)&&this.updatePolicy!==D.SYNC&&this._stage.syncLayer(this.id)}notifyObjectBBChanged(t,e){n(this._octree)&&this._octree.update(t,e)}getSpatialQueryAccelerator(){return e(this._octree)&&this._objects.length>50&&this._createOctree(),this._octree}shaderTransformationChanged(){this.invalidateSpatialQueryAccelerator(),this.events.emit("shaderTransformationChanged",this)}invalidateSpatialQueryAccelerator(){this._octree=a(this._octree)}_createOctree(){this._octree=new Rt((t=>t.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)}}function te(t){return n(t)&&t.type===C.Layer}function ee(t,e){if("point"===t.type)return ie(t,e,!1);if(ft(t))switch(t.type){case"extent":return ie(t.center,e,!1);case"polygon":return ie(t.centroid,e,!1);case"polyline":return ie(se(t),e,!0);case"mesh":return ie(t.origin,e,!1)}else switch(t.type){case"extent":return ie(function(t){const e=isFinite(t.zmin);return ot(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),e?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}(t),e,!0);case"polygon":return ie(function(t){const e=t.rings[0];if(!e||0===e.length)return null;const s=nt(t.rings,t.hasZ);return ot(s[0],s[1],s[2],t.spatialReference)}(t),e,!0);case"polyline":return ie(se(t),e,!0)}}function se(t){const e=t.paths[0];if(!e||0===e.length)return null;const s=it(e,rt(e)/2);return ot(s[0],s[1],s[2],t.spatialReference)}function ie(t,e,s){const i=s?t:jt(t);return e&&t?$(t,i,e)?i:null:i}function re(t,e,s,i=0){if(t){e||(e=st());const r=t;let n=.5*r.width*(s-1),o=.5*r.height*(s-1);return r.width<1e-7*r.height?n+=o/20:r.height<1e-7*r.width&&(o+=n/20),T(e,r.xmin-n-i,r.ymin-o-i,r.xmax+n+i,r.ymax+o+i),e}return null}function ne(t,e){for(let s=0;s<t.geometries.length;++s){const i=t.geometries[s].getMutableAttribute(lt.AUXPOS1);i&&i.data[3]!==e&&(i.data[3]=e,t.geometryVertexAttrsUpdated(t.geometryRecords[s]))}}function oe(t,e){const s=Y(J);return n(t)&&(s[0]=t[0],s[1]=t[1],s[2]=t[2]),n(e)?s[3]=e:n(t)&&t.length>3&&(s[3]=t[3]),s}function ae(t,e,s,i,r,o=[0,0,0,0]){for(let e=0;e<3;++e)n(t)&&null!=t[e]?o[e]=t[e]:n(s)&&null!=s[e]?o[e]=s[e]:o[e]=r[e];return n(e)?o[3]=e:n(i)?o[3]=i:o[3]=r[3],o}function he(t=R,s,i,r=1){const n=new Array(3);if(e(s)||e(i))n[0]=1,n[1]=1,n[2]=1;else{let e,r=0;for(let o=2;o>=0;o--){const a=t[o];let h;const l=null!=a,c=0===o&&!e&&!l,d=i[o];"symbol-value"===a||c?h=0!==d?s[o]/d:1:l&&"proportional"!==a&&isFinite(a)&&(h=0!==d?a/d:1),null!=h&&(n[o]=h,e=h,r=Math.max(r,Math.abs(h)))}for(let t=2;t>=0;t--)null==n[t]?n[t]=e:0===n[t]&&(n[t]=.001*r)}for(let t=2;t>=0;t--)n[t]/=r;return M(n)}function le(t){return null!=t.isPrimitive&&(t=[t.width,t.depth,t.height]),ce(t)?null:"Symbol sizes may not be negative values"}function ce(t){if(Array.isArray(t)){for(const e of t)if(!ce(e))return!1;return!0}return null==t||t>=0}function de(t,e,s,i=u()){const r=t||0,n=e||0,o=s||0;return 0!==r&&c(i,i,-r/180*Math.PI),0!==n&&d(i,i,n/180*Math.PI),0!==o&&m(i,i,o/180*Math.PI),i}function me(t,e){return null!=e.minDemResolution?e.minDemResolution:tt(t)?e.minDemResolutionForPoints:.01*et(t)}class ue{constructor(t,e){this._material=t,this._repository=e,this._map=new Map}destroy(){this._map.forEach(((t,e)=>{n(t)&&this._repository.release(this._material,fe(e))}))}load(t,e){this._map.has(e)||this._map.set(e,this._repository.acquire(this._material,fe(e)));const s=this._map.get(e);if(n(s)){if(s.ensureResources(t)===z.LOADED)return s;this._repository.requestRender()}return null}}function fe(t){switch(t){default:case mt.MATERIAL:return ct.Color;case mt.MATERIAL_ALPHA:return ct.Alpha;case mt.MATERIAL_DEPTH_SHADOWMAP_ALL:return ct.Shadow;case mt.MATERIAL_NORMAL:return ct.Normal;case mt.MATERIAL_DEPTH:return ct.Depth;case mt.MATERIAL_HIGHLIGHT:return ct.Highlight;case mt.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT:case mt.MATERIAL_DEPTH_SHADOWMAP_DEFAULT:return ct.Shadow}}const _e=ut().vec3f(lt.POSITION),ge=ut().vec3f(lt.POSITION).vec2f(lt.UV0),pe=ut().vec3f(lt.POSITION).vec4u8(lt.COLOR);class be{constructor(t){this.vertexBufferLayout=t}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return t.indices.get(lt.POSITION).length}write(t,e,s,i){dt(e,this.vertexBufferLayout,t.transformation,t.invTranspTransformation,s,i)}}export{be as D,ue as G,xt as O,ge as P,$t as W,ee as a,pe as b,jt as c,_e as d,gt as e,At as f,Et as g,pt as h,te as i,me as j,St as k,Rt as l,oe as m,he as n,fe as o,de as p,ce as q,re as r,ae as s,ne as u,le as v};
