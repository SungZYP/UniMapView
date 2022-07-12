// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){let k=function(){function c(){this.source=!1;this.targets={feature:!1,aggregate:!1};this.storage={filters:!1,data:!1};this.queryFilter=this.mesh=!1;this.why={mesh:[],source:[]}}c.create=function(a){const b=new c;for(const d in a){const e=a[d];if("object"===typeof e)for(const h in e)b[d][h]=e[h];b[d]=e}return b};c.empty=function(){return c.create({})};c.all=function(){return c.create({source:!0,targets:{feature:!0,aggregate:!0},storage:{filters:!0,data:!0},mesh:!0})};
var f=c.prototype;f.unset=function(a){a.source&&(this.source=!1);a.targets.feature&&(this.targets.feature=!1);a.targets.aggregate&&(this.targets.aggregate=!1);a.storage.filters&&(this.storage.filters=!1);a.storage.data&&(this.storage.data=!1);a.mesh&&(this.mesh=!1);a.queryFilter&&(this.queryFilter=!1)};f.any=function(){return this.source||this.mesh||this.storage.filters||this.storage.data||this.targets.feature||this.targets.aggregate||this.queryFilter};f.describe=function(){let a=0,b="";if(this.mesh){a+=
20;b+="-\x3e (20) Mesh needs update\n";for(const d of this.why.mesh)b+=`    + ${d}\n`}if(this.source){a+=10;b+="-\x3e (10) The source needs update\n";for(const d of this.why.source)b+=`    + ${d}\n`}this.targets.feature&&(a+=5,b+="-\x3e (5) Feature target parameters changed\n");this.storage.filters&&(a+=5,b+="-\x3e (5) Feature filter parameters changed\n");this.targets.aggregate&&(a+=4,b+="-\x3e (4) Aggregate target parameters changed\n");this.storage.data&&(a+=1,b+="-\x3e (1) Texture storage parameters changed");
console.debug(`Applying ${5>a?"Fastest":10>a?"Fast":15>a?"Moderate":20>a?"Slow":"Very Slow"} update of cost ${a}/45 `);console.debug(b)};f.toJSON=function(){return{queryFilter:this.queryFilter,source:this.source,targets:this.targets,storage:this.storage,mesh:this.mesh}};return c}();g.UpdateToken=k;Object.defineProperty(g,"__esModule",{value:!0})});