// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../config ../../core/Error ../Portal ../../rest/geometryService/project ../../rest/support/ProjectParameters".split(" "),function(e,l,m,f,p,q,r){function n(){return g.apply(this,arguments)}function g(){g=l._asyncToGenerator(function*(a=null,b){var c,d;if(m.geometryServiceUrl)return m.geometryServiceUrl;if(!a)throw new f("internal:geometry-service-url-not-configured");a="portal"in a?a.portal||p.getDefault():a;yield a.load({signal:b});b=null==
(c=a.helperServices)?void 0:null==(d=c.geometry)?void 0:d.url;if(!b)throw new f("internal:geometry-service-url-not-configured");return b});return g.apply(this,arguments)}function h(){h=l._asyncToGenerator(function*(a,b,c=null,d){c=yield n(c,d);const k=new r;k.geometries=[a];k.outSpatialReference=b;if((a=yield q.project(c,k,{signal:d}))&&Array.isArray(a)&&1===a.length)return a[0];throw new f("internal:geometry-service-projection-failed");});return h.apply(this,arguments)}e.getGeometryServiceURL=n;
e.projectGeometry=function(a,b){return h.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0})});