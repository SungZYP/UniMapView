// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/unitUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../core/sql/WhereClause ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/Ellipsoid ../../../../geometry/support/webMercatorUtils ../../../../layers/support/FeatureFilter ./I3SUtil ../../../../geometry/SpatialReference".split(" "),
function(X,q,F,t,sa,Y,O,Z,aa,u,ba,ca,v,ta,ua,da,w,ea,x,fa,G,ha,P,ia,Q,R){function ja(){return H.apply(this,arguments)}function H(){H=F._asyncToGenerator(function*(){return r?r:r=yield new Promise((c,b)=>X(["../../../../geometry/geometryEngine"],c,b))});return H.apply(this,arguments)}function D(c,b){if(u.isNone(c))return null;if("disjoint"===b&&"polygon"===c.type){const a=Array(c.rings.length);for(b=0;b<c.rings.length;++b){var h=G.fromValues(Infinity,Infinity,-Infinity,-Infinity);G.expandWithNestedArray(h,
c.rings[b]);a[b]={type:"polygon",rings:[c.rings[b]],spatialReference:c.spatialReference,aabr:h}}a.sort((d,g)=>d.aabr[0]-g.aabr[0]);const f=new Set,p=new O.PositionHint;for(c=0;c<a.length;++c){const d=a[c];for(b=c+1;b<a.length;++b){h=a[b];if(h.aabr[0]>=d.aabr[2])break;f.add(h)}f.forEach(g=>{d!==g&&(g.aabr[2]<=d.aabr[0]?f.delete(g):r.intersects(d,g)&&(d.rings=d.rings.concat(g.rings),G.expand(d.aabr,g.aabr,d.aabr),delete d._geVersion,f.delete(g),g=O.indexOf(a,g,a.length,p),a.splice(g,1)))});f.add(d)}for(const d of a)delete d.aabr;
return a}return[c]}function ka(c,b,h,a){const f=S(c,h);return b.every(p=>T(p,f,a)!==m.DISCARD)}function la(c,b,h,a,f,p,d){const g=p[0].spatialReference||a.spatialReference;if(x.projectBoundingSphere(b.node.mbs,f,E,g)){f=S(E,g);var l=ma(d,a,g,h,b.objectHandle);for(const e of p){if(0===c.length)break;switch(T(e,f,d)){case m.DISCARD:c.length=0;return;case m.KEEP:continue}Q.filterInPlace(c,b.featureIds,k=>na(e,k,l))}}else A.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter")}
function ma(c,b,h,a,f){b=b.renderSpatialReference;const p=new Map,d={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:h};d.rings[0][3]=d.rings[0][0];let g,l;switch(c){case "intersects":g=(e,k)=>r.intersects(e,k)?m.KEEP:m.TEST;l=I;break;case "contains":g=(e,k)=>r.contains(e,k)?m.TEST:m.DISCARD;l=I;break;default:g=(e,k)=>r.disjoint(e,k)?m.TEST:m.DISCARD,l=U}return{collection:a,object:f,type:c,maskSR:h,renderSR:b,aabbCache:p,triangle:d,positions:{indices:null,
data:null,stride:0,startIndex:0,endIndex:0},triangleTest:g,geometryTest:l}}function S(c,b){var h={x:c[0],y:c[1],hasZ:!1,hasM:!1,type:"point",spatialReference:b};b=!b.isWGS84&&!b.isWebMercator;c=Number.isNaN(c[3])?0:aa.clamp(c[3],0,2*ha.earth.radius);h=b?r.buffer(h,c,1):r.geodesicBuffer(h,c,1);h.type="polygon";return h}function T(c,b,h){switch(h){case "intersects":case "contains":return I(c,b);case "disjoint":return U(c,b)}}function I(c,b){return r.intersects(c,b)?r.contains(c,b)?m.KEEP:m.TEST:m.DISCARD}
function U(c,b){return r.intersects(c,b)?r.contains(c,b)?m.DISCARD:m.TEST:m.KEEP}function na(c,b,h){const {collection:a,object:f,renderSR:p,maskSR:d,geometryTest:g,aabbCache:l}=h;var e=l.get(b);if(!e){e=a.getObjectTransform(f);a.getComponentAabb(f,b,y);var k=[[y[0],y[1],0],[y[0],y[4],0],[y[3],y[4],0],[y[3],y[1],0]];for(var n=0;4>n;++n)w.transformMat3(k[n],k[n],e.rotationScale),w.add(k[n],k[n],e.position),x.projectVectorToVector(k[n],p,k[n],d);e={rings:[k],hasZ:!1,hasM:!1,type:"polygon",spatialReference:d};
e.rings[0][4]=e.rings[0][0];l.set(b,e)}switch(g(c,e)){case m.DISCARD:return!1;case m.KEEP:return!0}const {triangle:C,triangleTest:oa,positions:V}=h;e=C.rings[0][0];k=C.rings[0][1];n=C.rings[0][2];const B=a.getObjectTransform(f);a.getComponentPositions(f,b,V);const {indices:J,data:z,stride:K,startIndex:pa,endIndex:qa}=V;for(b=pa;b<qa;b+=3){const L=K*J[b+0],M=K*J[b+1],N=K*J[b+2];w.set(e,z[L+0],z[L+1],z[L+2]);w.set(k,z[M+0],z[M+1],z[M+2]);w.set(n,z[N+0],z[N+1],z[N+2]);w.transformMat3(e,e,B.rotationScale);
w.transformMat3(k,k,B.rotationScale);w.transformMat3(n,n,B.rotationScale);w.add(e,e,B.position);w.add(k,k,B.position);w.add(n,n,B.position);x.projectVectorToVector(e,p,e,d);x.projectVectorToVector(k,p,k,d);x.projectVectorToVector(n,p,n,d);if(!(Math.abs((k[0]-e[0])*(n[1]-e[1])-(k[1]-e[1])*(n[0]-e[0]))<ra))switch(delete C._geVersion,oa(c,C)){case m.DISCARD:return!1;case m.KEEP:return!0}}switch(h.type){case "intersects":return!1;default:return!0}}const A=Z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");
q.I3SMeshViewFilter=function(c){function b(a){a=c.call(this,a)||this;a._projectionEngineLoaded=!1;return a}F._inheritsLoose(b,c);var h=b.prototype;h.initialize=function(){ca.whenOnce(this,"filter.geometry").then(()=>this.loadAsyncModule(ja().then(a=>{this.destroyed||(this._geometryEngine=a,this.applyFilters())})))};h.addFilters=function(a,f,p,d){const g=this.sortedObjectIds;u.isSome(g)&&a.push(e=>Q.objectIdFilter(g,!0,e));this.addSqlFilter(a,this.parsedWhereClause);const l=this.parsedGeometry;if(u.isSome(l)){const e=
this.spatialRelationship;a.push((k,n)=>la(k,n,d,f,p,l,e))}};h.isMBSGeoemtryVisible=function(a,f,p){const d=this.parsedGeometry;if(u.isSome(d)){const g=this.spatialRelationship;f=d[0].spatialReference||f;return x.projectBoundingSphere(a,p,E,f)?ka(E,d,f,g):(A.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0};b.checkSupport=function(a){if(a.timeExtent)return A.warn("Filters with a timeExtent are not supported for mesh scene layers"),
!1;a=a.spatialRelationship;return null!=a&&0<=W.indexOf(a)?!0:(A.warn(`Filters with spatialRelationship other than ${W.join(", ")} are not supported for mesh scene layers`),!1)};F._createClass(b,[{key:"sortedObjectIds",get:function(){if(u.isNone(this.filter.objectIds))return null;const a=new Float64Array(this.filter.objectIds);a.sort();return a}},{key:"parsedWhereClause",get:function(){const a=u.isSome(this.filter)?this.filter.where:null;if(u.isNone(a)||!a)return null;try{return ea.WhereClause.create(a,
this.layerFieldsIndex)}catch(f){A.error(`Failed to parse filter where clause: ${f}`)}return null}},{key:"parsedGeometry",get:function(){if(u.isNone(this.filter)||!this._geometryEngine)return null;var {geometry:a}=this.filter;if(u.isNone(a))return null;const {distance:f,units:p}=this.filter,d=this.spatialRelationship;a="mesh"===a.type?a.extent:a;if(u.isNone(f)||0===f)return D(a,d);const g=p||ba.getUnitString(a.spatialReference);if(a.spatialReference.isWGS84)return a=this._geometryEngine.geodesicBuffer(a,
f,g),D(a,d);var l=P.project(a,R.WGS84);if(u.isSome(l))return a=P.project(this._geometryEngine.geodesicBuffer(l,f,g),a.spatialReference),D(a,d);if(!this._projectionEngineLoaded&&(this.loadAsyncModule(x.load().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;l=null;try{l=x.project(a,R.WGS84)}catch(e){}if(l)try{l=x.project(this._geometryEngine.geodesicBuffer(l,f,g),a.spatialReference)}catch(e){l=null}l||A.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${a.spatialReference.wkid}) to WGS84.`);
return D(l,d)}},{key:"spatialRelationship",get:function(){return u.isSome(this.filter)?this.filter.spatialRelationship:"intersects"}}]);return b}(Y);t.__decorate([v.property({type:ia})],q.I3SMeshViewFilter.prototype,"filter",void 0);t.__decorate([v.property()],q.I3SMeshViewFilter.prototype,"layerFieldsIndex",void 0);t.__decorate([v.property()],q.I3SMeshViewFilter.prototype,"loadAsyncModule",void 0);t.__decorate([v.property()],q.I3SMeshViewFilter.prototype,"applyFilters",void 0);t.__decorate([v.property()],
q.I3SMeshViewFilter.prototype,"addSqlFilter",void 0);t.__decorate([v.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"sortedObjectIds",null);t.__decorate([v.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"parsedWhereClause",null);t.__decorate([v.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"parsedGeometry",null);t.__decorate([v.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"spatialRelationship",null);t.__decorate([v.property()],q.I3SMeshViewFilter.prototype,"_projectionEngineLoaded",
void 0);t.__decorate([v.property()],q.I3SMeshViewFilter.prototype,"_geometryEngine",void 0);q.I3SMeshViewFilter=t.__decorate([da.subclass("esri.views.3d.layers.i3s.I3SMeshViewFilter")],q.I3SMeshViewFilter);let r;const W=["contains","intersects","disjoint"];var m;(function(c){c[c.KEEP=0]="KEEP";c[c.DISCARD=1]="DISCARD";c[c.TEST=2]="TEST"})(m||(m={}));const E=[0,0,0,0],ra=2**-32,y=fa.create();Object.defineProperty(q,"__esModule",{value:!0})});