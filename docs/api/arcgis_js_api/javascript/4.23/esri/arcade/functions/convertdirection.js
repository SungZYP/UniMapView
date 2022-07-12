// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../Dictionary","../../chunks/languageUtils"],function(v,O,p){function C(a){if(!1===p.isString(a))throw Error("Invalid Parameter");return a}function G(a,d){d=10**d;return Math.round(a*d)/d}function w(a){const d=parseFloat(a.toString().replace(Math.trunc(a).toString(),"0"))*Math.sign(a);return 0>a?{fraction:d,integer:Math.ceil(a)}:{fraction:d,integer:Math.floor(a)}}function x(a,d){switch(a){case k.north:return"SHORT"===d?"N":"North";case k.east:return"SHORT"===d?"E":"East";case k.south:return"SHORT"===
d?"S":"South";case k.west:return"SHORT"===d?"W":"West"}}function H(a,d,b){for(;a.length<b;)a=d+a;return a}function I(a,d){return a-Math.floor(a/d)*d}function J(a){switch(a){case e.truncated_degrees:case e.decimal_degrees:return 360;case e.radians:return W;case e.gradians:return 400;case e.seconds:return 1296E3;case e.fractional_degree_minutes:return 60;case e.fractional_minute_seconds:return 60;default:throw Error("Unnexpected evaluations");}}function P(a){switch(a.toUpperCase().trim()){case "NORTH":case "NORTHAZIMUTH":case "NORTH AZIMUTH":return h.north_azimuth;
case "POLAR":return h.polar;case "QUADRANT":return h.quadrant;case "SOUTH":case "SOUTHAZIMUTH":case "SOUTH AZIMUTH":return h.south_azimuth}throw Error("Unsupported direction type");}function Q(a){switch(a.toUpperCase().trim()){case "D":case "DD":case "DECIMALDEGREE":case "DECIMAL DEGREE":case "DEGREE":case "DECIMALDEGREES":case "DECIMAL DEGREES":case "DEGREES":return e.decimal_degrees;case "DMS":case "DEGREESMINUTESSECONDS":case "DEGREES MINUTES SECONDS":return e.degrees_minutes_seconds;case "R":case "RAD":case "RADS":case "RADIAN":case "RADIANS":return e.radians;
case "G":case "GON":case "GONS":case "GRAD":case "GRADS":case "GRADIAN":case "GRADIANS":return e.gradians}throw Error("Unsupported units");}function R(a,d,b){let c=null;switch(d){case e.decimal_degrees:c=u(a,3600);break;case e.seconds:c=a;break;case e.gradians:c=u(a,3240);break;case e.radians:c=u(a,S);break;default:throw Error("Unnexpected evaluation");}switch(b){case e.decimal_degrees:return D(c,3600);case e.seconds:return c;case e.gradians:return D(c,3240);case e.radians:return c/S;default:throw Error("Unnexpected evaluation");
}}function E(a){switch(a){case e.decimal_degrees:case e.truncated_degrees:case e.degrees_minutes_seconds:return e.decimal_degrees;case e.gradians:return e.gradians;case e.fractional_degree_minutes:return e.fractional_degree_minutes;case e.radians:return e.radians;case e.seconds:case e.fractional_minute_seconds:return e.seconds}}function X(a){switch(p.toNumber(a)){case 1:return{first:k.north,second:k.east};case 2:return{first:k.south,second:k.east};case 3:return{first:k.south,second:k.west};case 4:return{first:k.north,
second:k.west}}return null}function T(a){switch(a.toUpperCase().trim()){case "N":case "NORTH":return k.north;case "E":case "EAST":return k.east;case "S":case "SOUTH":return k.south;case "W":case "WEST":return k.west}return null}function y(a){a=parseFloat(a);if(p.isNumber(a)){if(isNaN(a))throw Error("Invalid conversion");return a}throw Error("Invalid conversion");}function K(a,d,b){const c=b===h.quadrant;let f=null;var g=null;let m=0;var l=0;l=0;if(c){if(2>a.length)throw Error("Conversion Error");
l=1;(g=X(p.toString(a[a.length-1])))?(f=g.first,g=g.second):(m=1,f=T(p.toString(a[0])),g=T(p.toString(a[a.length-1])));if(null===f||null===g)throw Error("Invalid Conversion");}switch(d){case e.decimal_degrees:case e.radians:case e.gradians:if(0===a.length)throw Error("Invalid Conversion");return c?t.createFromAngleMeridianAndDirection(r.createFromAngleAndUnits(y(a[m]),E(d)),f,g):t.createFromAngleAndDirection(r.createFromAngleAndUnits(y(a[m]),E(d)),b);case e.degrees_minutes_seconds:l=a.length-l-m;
if(3===l)return a=r.createFromDegreesMinutesSeconds(y(a[m]),y(a[m+1]),y(a[m+2])),c?t.createFromAngleMeridianAndDirection(a,f,g):t.createFromAngleAndDirection(a,b);if(1===l)return a=y(a[m]),a=z.numberToDms(a),a=r.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),c?t.createFromAngleMeridianAndDirection(a,f,g):t.createFromAngleAndDirection(a,b)}throw Error("Conversion Error");}function Y(a){const d=[" ","-","/","'",'"',"\\","^","\u00b0",U,"\t","\r","\n","*"];let b="";for(let c=0;c<
a.length;c++){const f=a.charAt(c);b=-1!==d.indexOf(f)?b+"RRSPLITRRSPLITRR":b+f}return b.split("RRSPLITRRSPLITRR").filter(c=>""!==c)}function L(a,d,b){const c={padding:0,rounding:0,newpos:d};let f=!1;for(;d<a.length;){const g=a[d];if(g===b)f?c.rounding++:c.padding++,d++;else if("."===g)f=!0,d++;else break}c.newpos=d-1;return c}const F=a=>(d,b,c)=>{c=c||14;return+a(d,b).toFixed(c)},Z=(a,d)=>a+d,aa=(a,d)=>a-d,ba=(a,d)=>a*d,ca=(a,d)=>a/d,M=(a,d,b)=>F(Z)(a,d,b),u=(a,d,b)=>F(ba)(a,d,b),D=(a,d,b)=>F(ca)(a,
d,b),W=2*Math.PI,S=648E3/Math.PI,U=String.fromCharCode(7501);var k;(function(a){a[a.north=0]="north";a[a.east=1]="east";a[a.south=2]="south";a[a.west=3]="west"})(k||(k={}));var e;(function(a){a[a.decimal_degrees=1]="decimal_degrees";a[a.seconds=2]="seconds";a[a.degrees_minutes_seconds=3]="degrees_minutes_seconds";a[a.radians=4]="radians";a[a.gradians=5]="gradians";a[a.truncated_degrees=6]="truncated_degrees";a[a.fractional_degree_minutes=7]="fractional_degree_minutes";a[a.fractional_minute_seconds=
8]="fractional_minute_seconds"})(e||(e={}));var h;(function(a){a[a.north_azimuth=1]="north_azimuth";a[a.polar=2]="polar";a[a.quadrant=3]="quadrant";a[a.south_azimuth=4]="south_azimuth"})(h||(h={}));var N;(function(a){a[a.meridian=0]="meridian";a[a.direction=1]="direction"})(N||(N={}));let z=function(){function a(b,c,f){this.m_degrees=b;this.m_minutes=c;this.m_seconds=f}var d=a.prototype;d.getField=function(b){switch(b){case e.decimal_degrees:case e.truncated_degrees:return this.m_degrees;case e.fractional_degree_minutes:return this.m_minutes;
case e.seconds:case e.fractional_minute_seconds:return this.m_seconds;default:throw Error("Unnexpected evaluation");}};a.secondsToDMS=function(b){const c=w(b).fraction;b=w(b).integer;const f=Math.floor(b/3600);b-=3600*f;const g=Math.floor(b/60);return new a(f,g,b-60*g+c)};a.numberToDms=function(b){var c=w(b).fraction;b=w(b).integer;const f=u(w(100*c).fraction,100);c=w(100*c).integer;return new a(b,c,f)};d.format=function(b,c){c=G(this.m_seconds,c);let f=this.m_minutes,g=this.m_degrees;if(b===e.seconds||
b===e.fractional_minute_seconds)60<=c&&(c-=60,++f),60<=f&&(f=0,++g),360<=g&&(g=0);else if(b===e.fractional_degree_minutes)c=0,f=30<=this.m_seconds?this.m_minutes+1:this.m_minutes,g=this.m_degrees,60<=f&&(f=0,++g),360<=g&&(g=0);else if(b===e.decimal_degrees||b===e.truncated_degrees)b=D(this.m_seconds,3600),c=D(this.m_minutes,60),g=Math.round(this.m_degrees+c+b),c=f=0;return new a(g,f,c)};a.dmsToSeconds=function(b,c,f){return 3600*b+60*c+f};return a}(),da=function(){function a(d,b,c){this.meridian=
d;this.angle=b;this.direction=c}a.prototype.fetchAzimuth=function(d){return d===N.meridian?this.meridian:this.direction};return a}(),t=function(){function a(b){this.m_angle=b}a.createFromAngleAndDirection=function(b,c){return new a(new r(a._convertDirectionFormat(b.extractAngularUnits(e.seconds),c,h.north_azimuth)))};var d=a.prototype;d.getAngle=function(b){const c=this.m_angle.extractAngularUnits(e.seconds);switch(b){case h.north_azimuth:case h.south_azimuth:case h.polar:return new r(a._convertDirectionFormat(c,
h.north_azimuth,b));case h.quadrant:return b=a.secondsNorthAzimuthToQuadrant(c),new r(b.angle)}};d.getMeridian=function(b){const c=this.m_angle.extractAngularUnits(e.seconds);switch(b){case h.north_azimuth:return k.north;case h.south_azimuth:return k.south;case h.polar:return k.east;case h.quadrant:return a.secondsNorthAzimuthToQuadrant(c).meridian}};d.getDirection=function(b){const c=this.m_angle.extractAngularUnits(e.seconds);switch(b){case h.north_azimuth:return k.east;case h.south_azimuth:return k.west;
case h.polar:return k.north;case h.quadrant:return a.secondsNorthAzimuthToQuadrant(c).direction}};a.secondsNorthAzimuthToQuadrant=function(b){const c=324E3>=b||972E3<=b?k.north:k.south;return new da(c,c===k.north?Math.min(1296E3-b,b):Math.abs(b-648E3),648E3<b?k.west:k.east)};a.createFromAngleMeridianAndDirection=function(b,c,f){return new a(new r(a.secondsQuadrantToNorthAzimuth(b.extractAngularUnits(e.seconds),c,f)))};a.secondsQuadrantToNorthAzimuth=function(b,c,f){return c===k.north?f===k.east?b:
1296E3-b:f===k.east?648E3-b:648E3+b};a._convertDirectionFormat=function(b,c,f){let g=0;switch(c){case h.north_azimuth:g=b;break;case h.polar:g=324E3-b;break;case h.quadrant:throw Error("Unnexpected evaluation");case h.south_azimuth:g=b+648E3}b=0;switch(f){case h.north_azimuth:b=g;break;case h.polar:b=324E3-g;break;case h.quadrant:throw Error("Unnexpected evaluation");case h.south_azimuth:b=g-648E3}b%=1296E3;return 0>b?1296E3+b:b};return a}(),r=function(){function a(d){this.m_seconds=d}a.createFromAngleAndUnits=
function(d,b){return new a(R(d,b,e.seconds))};a.prototype.extractAngularUnits=function(d){return R(this.m_seconds,e.seconds,E(d))};a.createFromDegreesMinutesSeconds=function(d,b,c){return new a(M(M(u(d,3600),u(b,60)),c))};return a}(),ea=function(){function a(b,c,f,g){this.m_view=b;this.m_angle=c;this.m_merdian=f;this.m_direction=g;this.m_formatted_dms=this.m_dms=null}a.createFromStringAndBearing=function(b,c,f){return new a(b,c.getAngle(f),c.getMeridian(f),c.getDirection(f))};var d=a.prototype;d.fetchAngle=
function(){return this.m_angle};d.fetchMeridian=function(){return this.m_merdian};d.fetchDirection=function(){return this.m_direction};d.fetchView=function(){return this.m_view};d.fetchDms=function(){null===this.m_dms&&this._calculateDms();return this.m_dms};d.fetchFormattedDms=function(){null===this.m_formatted_dms&&this._calculateDms();return this.m_formatted_dms};d._calculateDms=function(){var b=null;let c=e.truncated_degrees,f=0;for(b=0;b<this.m_view.length;b++){const g=this.m_view[b];switch(g){case "m":b=
L(this.m_view,b,g);c=c===e.truncated_degrees?e.fractional_degree_minutes:c;b=b.newpos;continue;case "s":b=L(this.m_view,b,g),c=e.fractional_minute_seconds,f=f<b.rounding?b.rounding:f,b=b.newpos}}this.m_dms=z.secondsToDMS(this.m_angle.extractAngularUnits(e.seconds));this.m_formatted_dms=z.secondsToDMS(this.m_angle.extractAngularUnits(e.seconds)).format(c,f)};return a}();v.convertDirection=function(a,d,b){if(!(d instanceof O))throw Error("Invalid Parameter");if(!1===d.hasField("directionType"))throw Error("Invalid Parameter - Missing directionType");
if(!1===d.hasField("angleType"))throw Error("Invalid Parameter - Missing directionType");var c=P(C(d.field("directiontype")));d=Q(C(d.field("angletype")));if(p.isNumber(a)){a=p.toNumber(a);if(c===h.quadrant)throw Error("Conversion error");d===e.degrees_minutes_seconds?(a=z.numberToDms(a),c=t.createFromAngleAndDirection(r.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),c)):c=t.createFromAngleAndDirection(r.createFromAngleAndUnits(a,E(d)),c)}else if(p.isString(a))c=K(Y(a),d,c);
else if(p.isArray(a))c=K(a,d,c);else if(p.isImmutableArray(a))c=K(a.toArray(),d,c);else throw Error("Conversion Error");if(!(b instanceof O))throw Error("Invalid Parameter");if(!1===b.hasField("directionType"))throw Error("Invalid Parameter - Missing directionType");if(!1===b.hasField("outputType"))throw Error("Invalid Parameter - Missing directionType");a=P(C(b.field("directiontype")));d=b.hasField("angleType")?Q(C(b.field("angletype"))):null;var f=C(b.field("outputType")).toUpperCase().trim();if(!a||
!f)throw Error("Conversion error");if(!(d||"TEXT"===f&&b.hasField("format")))throw Error("Invalid unit");switch(f){case "VALUE":if(a===h.quadrant||d===e.degrees_minutes_seconds)return b=c.getAngle(a),a===h.quadrant&&d===e.degrees_minutes_seconds?(b=z.secondsToDMS(b.extractAngularUnits(e.seconds)),c=[x(c.getMeridian(a),"SHORT"),b.m_degrees,b.m_minutes,b.m_seconds,x(c.getDirection(a),"SHORT")]):d===e.degrees_minutes_seconds?(c=z.secondsToDMS(b.extractAngularUnits(e.seconds)),c=[c.m_degrees,c.m_minutes,
c.m_seconds]):c=a===h.quadrant?[x(c.getMeridian(a),"SHORT"),b.extractAngularUnits(d),x(c.getDirection(a),"SHORT")]:[b.extractAngularUnits(d)],c;if((b=E(d))&&d!==e.degrees_minutes_seconds)c=c.getAngle(a).extractAngularUnits(b);else throw Error("Conversion Error");return c;case "TEXT":f="";b.hasField("format")&&(f=p.toString(b.field("format")));if(null===f||""===f){b="";switch(d){case e.decimal_degrees:b=a===h.quadrant?"DD.DD\u00b0":"DDD.DD\u00b0";break;case e.degrees_minutes_seconds:b=a===h.quadrant?
"dd\u00b0 mm' ss\"":"ddd\u00b0 mm' ss.ss\"";break;case e.radians:b="R.RR";break;case e.gradians:b="GGG.GG"+U;break;default:throw Error("Conversion error");}a===h.quadrant&&(b="p "+b+" b");f=b}b=f;var g="",m=null,l=null;d=ea.createFromStringAndBearing(b,c,a);f={D:e.decimal_degrees,d:e.truncated_degrees,m:e.fractional_degree_minutes,s:e.fractional_minute_seconds,R:e.radians,G:e.gradians};for(l=0;l<b.length;l++){var n=b[l];switch(n){case "[":m=b;n={escaped:"",newpos:l};for(l++;l<m.length;){var A=m[l];
l++;if("]"===A)break;n.escaped+=A}n.newpos=l-1;m=n;g+=m.escaped;l=m.newpos;continue;case "D":case "d":case "m":case "s":case "R":case "G":m=L(b,l,n);l=c.getAngle(a);a:{n=f[n];A=m.padding;var q=m.rounding,V=d;let B=null;switch(n){case e.decimal_degrees:case e.radians:case e.gradians:B=I(G(l.extractAngularUnits(n),q),J(n));l=H(B.toFixed(q),"0",A+q+(0<q?1:0));break a;case e.truncated_degrees:case e.fractional_degree_minutes:B=I(V.fetchFormattedDms().getField(n),J(n));l=H(B.toFixed(q),"0",A+q+(0<q?1:
0));break a;case e.fractional_minute_seconds:B=I(G(V.fetchDms().getField(n),q),J(n));l=H(B.toFixed(q),"0",A+q+(0<q?1:0));break a;default:throw Error("Unnexepected evaluation");}}g+=l;l=m.newpos;continue;case "P":case "p":g+=x(d.fetchMeridian(),"p"===n?"SHORT":"LONG");continue;case "B":case "b":g+=x(d.fetchDirection(),"b"===n?"SHORT":"LONG");continue;default:g+=n}}return c=g;default:throw Error("Invalid Parameter");}};v.preciseAdd=M;v.preciseDivide=D;v.preciseMinus=(a,d,b)=>F(aa)(a,d,b);v.preciseMultiply=
u;Object.defineProperty(v,"__esModule",{value:!0})});