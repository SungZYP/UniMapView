// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./AnalysisView3D ./Slice/SliceController ./Slice/SliceVisualization".split(" "),function(f,c,b,h,d,q,r,t,l,m,n,p){b=function(k){function e(a){a=k.call(this,a)||this;a.type="slice-view-3d";a.analysisVisualization=
null;a.analysisController=null;a.plane=null;a.active=!0;a.showGrid=!1;a.editable=!1;return a}f._inheritsLoose(e,k);var g=e.prototype;g.initialize=function(){this.analysisVisualization=new p.SliceVisualization({view:this.view,analysis:this.analysis,analysisViewData:this});this.analysisController=new n.SliceController({view:this.view,analysis:this.analysis,analysisViewData:this})};g.destroy=function(){this.analysisVisualization=h.destroyMaybe(this.analysisVisualization);this.analysisController=h.destroyMaybe(this.analysisController)};
g.when=function(){var a=f._asyncToGenerator(function*(){yield this.analysisVisualization.whenReady();yield this.analysisController.whenReady();return this});return function(){return a.apply(this,arguments)}}();f._createClass(e,[{key:"testData",get:function(){return{visualization:this.analysisVisualization,controller:this.analysisController}}}]);return e}(m.AnalysisView3D(b));c.__decorate([d.property()],b.prototype,"type",void 0);c.__decorate([d.property()],b.prototype,"analysis",void 0);c.__decorate([d.property()],
b.prototype,"plane",void 0);c.__decorate([d.property()],b.prototype,"active",void 0);c.__decorate([d.property({aliasOf:"analysisVisualization.showGrid"})],b.prototype,"showGrid",void 0);c.__decorate([d.property({aliasOf:"analysisVisualization.editable"})],b.prototype,"editable",void 0);return b=c.__decorate([l.subclass("esri.views.3d.analysis.SliceAnalysisView3D")],b)});