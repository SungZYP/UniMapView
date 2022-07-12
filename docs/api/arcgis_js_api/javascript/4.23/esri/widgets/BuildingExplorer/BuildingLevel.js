// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./BuildingNumericFilterViewModel ./support/buildingLayerUtils ./support/filterUtils ./support/validation".split(" "),function(k,e,g,h,d,w,x,p,q,r,t,u){d=function(l){function f(){var a=l.apply(this,arguments)||this;a._levelFieldName=null;a._parseValueFromFilter=
b=>{const c=new RegExp(`${a._levelFieldName}\\s*=\\s*(\\d+)`,"gi"),v=new RegExp(`${a._levelFieldName}\\s*<\\s*(\\d+)`,"gi");for(const {filterMode:m,filterExpression:n}of b.filterBlocks.items)if(b=null,"solid"===m.type?b=c.exec(n):"x-ray"===m.type&&(b=v.exec(n)),g.isSome(b))return parseInt(b[1],10);return null};return a}k._inheritsLoose(f,l);f.prototype._setup=function(){const a=[];this.layers.forEach(c=>{c=r.findFieldInfoByModelName(c,"bldglevel");g.isSome(c)&&(this._levelFieldName=c.fieldName,a.push(c))});
this._domainInfo=u.getDomainInfo(a);const b=t.getValueFromFilters(this.layers,this._parseValueFromFilter);g.isSome(b)?this.select(b):(this.enabled=!1,this.value=this._firstValue)};k._createClass(f,[{key:"filterExpressions",get:function(){return this.enabled&&this._levelFieldName?{xRay:`${this._levelFieldName} < ${this.value}`,solid:`${this._levelFieldName} = ${this.value}`}:{solid:null,xRay:null}}},{key:"_firstValue",get:function(){const a=this.allowedValues;return 0<a.length?a[0]:0}}]);return f}(q);
e.__decorate([h.property({readOnly:!0})],d.prototype,"filterExpressions",null);e.__decorate([h.property()],d.prototype,"_levelFieldName",void 0);e.__decorate([h.property({readOnly:!0})],d.prototype,"_firstValue",null);return d=e.__decorate([p.subclass("esri.widgets.BuildingExplorer.BuildingLevel")],d)});