// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/projection ../../../../../geometry/projectionEllipsoid ./MeasurementData ../../support/UnitNormalizer".split(" "),
function(c,m,d,n,p,q,e,f,w,x,y,r,t,g,u,v){c.AreaMeasurementController=function(l){function h(a){a=l.call(this,a)||this;a._handles=new p;return a}m._inheritsLoose(h,l);var k=h.prototype;k.initialize=function(){var a=this.view.spatialReference,b=g.getSphericalPCPF(a);b=b===g.SphericalECEFSpatialReference?g.WGS84ECEFSpatialReference:b;a=!a||t.canProjectWithoutEngine(a,b)?b:a;a=new v.UnitNormalizer(a);this._measurementDataManager=new u.MeasurementDataManager(this.view,a);this._handles.add([this.analysisViewData.path.on("change",
()=>this._update()),e.watch(()=>this.analysisViewData.cursorPoint,()=>this._update(),e.sync),e.watch(()=>this.analysisViewData.mode,()=>this._update(),e.sync)]);this._update()};k.destroy=function(){this._handles=q.destroyMaybe(this._handles)};k._update=function(a=!1){const b=this.analysisViewData;this._measurementDataManager.update(b.path,b.cursorPoint,this.view,b.validMeasurement,{maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80},b.mode,a)&&(a=this._measurementDataManager.getData(),
this._set("measurementData",a),b.measurementData=a)};return h}(n);d.__decorate([f.property({constructOnly:!0})],c.AreaMeasurementController.prototype,"view",void 0);d.__decorate([f.property({constructOnly:!0})],c.AreaMeasurementController.prototype,"analysis",void 0);d.__decorate([f.property({readOnly:!0})],c.AreaMeasurementController.prototype,"measurementData",void 0);d.__decorate([f.property({constructOnly:!0})],c.AreaMeasurementController.prototype,"analysisViewData",void 0);c.AreaMeasurementController=
d.__decorate([r.subclass("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],c.AreaMeasurementController);Object.defineProperty(c,"__esModule",{value:!0})});