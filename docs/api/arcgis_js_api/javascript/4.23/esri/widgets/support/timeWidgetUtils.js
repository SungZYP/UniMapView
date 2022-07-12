// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../core/timeUtils","../../intl/date","../../chunks/SunCalc"],function(g,f,h,k){const l={hour:"2-digit",minute:"2-digit",timeZone:"UTC"},m={hour:"numeric",timeZone:"UTC"};g.formatSliderLabel=function(a,c){"tick"===c?(a=Math.round(f.convertTime(a,"minutes","hours")),a=new Date(f.convertTime(a,"hours","milliseconds"))):a=new Date(6E4*a);let b=h.formatDate(a,l);"tick"===c&&-1!==b.indexOf(" ")&&(b=h.formatDate(a,m),b=b.replace(":00",""));return b};g.getSunriseAndSunsetTimes=function(a,
c,b,d){b=k.SunCalc.getTimes(a,c,b);c=b.sunrise;b=b.sunset;a=f.offsetDate(a,d,"hours");const e=f.offsetDate(c,d,"hours");d=f.offsetDate(b,d,"hours");if(a.getUTCDate()!==e.getUTCDate()||a.getUTCDate()!==d.getUTCDate())d=0<a.getTime()-e.getTime()?1:-1,c.setUTCDate(c.getUTCDate()+d),b.setUTCDate(b.getUTCDate()+d);return{sunrise:c,sunset:b}};g.getTimezoneInfos=function(a){return[{utcOffset:-12,short:"UTC-12",long:a.timezoneDateline},{utcOffset:-11,short:"UTC-11",long:a.timezoneSamoa},{utcOffset:-10,short:a.timezoneHAST,
long:a.timezoneHawaii},{utcOffset:-9,short:a.timezoneAKST,long:a.timezoneAlaska},{utcOffset:-8,short:a.timezonePST,long:a.timezoneBaja},{utcOffset:-7,short:a.timezoneMST,long:a.timezoneMountain},{utcOffset:-7,short:a.timezoneMST,long:a.timezoneLaPaz},{utcOffset:-7,short:a.timezoneMST,long:a.timezoneArizona},{utcOffset:-6,short:a.timezoneCST,long:a.timezoneSaskatchewan},{utcOffset:-6,short:a.timezoneCST,long:a.timezoneCentralAmerica},{utcOffset:-6,short:a.timezoneCST,long:a.timezoneCentralTime},{utcOffset:-6,
short:a.timezoneCST,long:a.timezoneMexico},{utcOffset:-5,short:a.timezoneEST,long:a.timezoneEasternUS},{utcOffset:-5,short:a.timezoneEST,long:a.timezoneLima},{utcOffset:-5,short:a.timezoneEST,long:a.timezoneIndiana},{utcOffset:-4,short:null,long:a.timezoneAtlantic},{utcOffset:-4,short:null,long:a.timezoneCuiaba},{utcOffset:-4,short:null,long:a.timezoneSantiago},{utcOffset:-4,short:null,long:a.timezoneManaus},{utcOffset:-4,short:null,long:a.timezoneAsuncion},{utcOffset:-3,short:null,long:a.timezoneBrasilia},
{utcOffset:-3,short:null,long:a.timezoneGreenland},{utcOffset:-3,short:null,long:a.timezoneMontevideo},{utcOffset:-3,short:null,long:a.timezoneCayenne},{utcOffset:-3,short:null,long:a.timezoneBuenosAires},{utcOffset:-2,short:null,long:a.timezoneMidAtlantic},{utcOffset:-1,short:null,long:a.timezoneAzores},{utcOffset:-1,short:null,long:a.timezoneCaboVerde},{utcOffset:0,short:null,long:a.timezoneDublin},{utcOffset:0,short:null,long:a.timezoneReykjavik},{utcOffset:0,short:null,long:a.timezoneCasablanca},
{utcOffset:1,short:a.timezoneCET,long:a.timezoneBelgrade},{utcOffset:1,short:a.timezoneCET,long:a.timezoneSarajevo},{utcOffset:1,short:a.timezoneCET,long:a.timezoneBrussels},{utcOffset:1,short:a.timezoneCET,long:a.timezoneWCAfrica},{utcOffset:1,short:a.timezoneCET,long:a.timezoneAmsterdam},{utcOffset:1,short:a.timezoneCET,long:a.timezoneWindhoek},{utcOffset:2,short:a.timezoneEET,long:a.timezoneMinsk},{utcOffset:2,short:a.timezoneEET,long:a.timezoneCairo},{utcOffset:2,short:a.timezoneEET,long:a.timezoneHelsinki},
{utcOffset:2,short:a.timezoneEET,long:a.timezoneAthens},{utcOffset:2,short:a.timezoneEET,long:a.timezoneJerusalem},{utcOffset:2,short:a.timezoneEET,long:a.timezoneAmman},{utcOffset:2,short:a.timezoneEET,long:a.timezoneBeirut},{utcOffset:2,short:a.timezoneEET,long:a.timezoneHarare},{utcOffset:2,short:a.timezoneEET,long:a.timezoneDamascus},{utcOffset:2,short:a.timezoneEET,long:a.timezoneIstanbul},{utcOffset:3,short:a.timezoneMSK,long:a.timezoneKuwait},{utcOffset:3,short:a.timezoneMSK,long:a.timezoneBaghdad},
{utcOffset:3,short:a.timezoneMSK,long:a.timezoneNairobi},{utcOffset:3,short:a.timezoneMSK,long:a.timezoneKaliningrad},{utcOffset:4,short:a.timezoneGST,long:a.timezoneMoscow},{utcOffset:4,short:a.timezoneGST,long:a.timezoneMuscat},{utcOffset:4,short:a.timezoneGST,long:a.timezoneBaku},{utcOffset:4,short:a.timezoneGST,long:a.timezoneYerevan},{utcOffset:4,short:a.timezoneGST,long:a.timezoneTbilisi},{utcOffset:4,short:a.timezoneGST,long:a.timezonePortLouis},{utcOffset:5,short:null,long:a.timezoneTashkent},
{utcOffset:5,short:null,long:a.timezoneIslamabad},{utcOffset:6,short:null,long:a.timezoneEkaterinburg},{utcOffset:6,short:null,long:a.timezoneAstana},{utcOffset:6,short:null,long:a.timezoneDhaka},{utcOffset:7,short:a.timezoneICT,long:a.timezoneNovosibirsk},{utcOffset:7,short:a.timezoneICT,long:a.timezoneBangkok},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneKrasnoyarsk},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneBeijing},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneSingapore},{utcOffset:8,
short:a.timezoneCCT,long:a.timezoneTaipei},{utcOffset:8,short:a.timezoneCCT,long:a.timezonePerth},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneUlaanbaatar},{utcOffset:9,short:a.timezoneJST,long:a.timezoneIrkutsk},{utcOffset:9,short:a.timezoneJST,long:a.timezoneSeoul},{utcOffset:9,short:a.timezoneJST,long:a.timezoneOsaka},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneYakutsk},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneCanberra},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneBrisbane},
{utcOffset:10,short:a.timezoneAEST,long:a.timezoneHobart},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneGuam},{utcOffset:11,short:null,long:a.timezoneVladivostok},{utcOffset:11,short:null,long:a.timezoneSolomon},{utcOffset:12,short:a.timezoneNZST,long:a.timezoneMagadan},{utcOffset:12,short:a.timezoneNZST,long:a.timezoneFiji},{utcOffset:12,short:a.timezoneNZST,long:a.timezoneAuckland},{utcOffset:12,short:a.timezoneNZST,long:a.timezoneNukualofa}].map(({utcOffset:c,short:b,long:d})=>{const e=0<c?
`UTC+${c}`:0>c?`UTC${c}`:"GMT";return b?{utcOffset:c,short:b,shortWithUTC:`${e} (${b})`,long:d}:{utcOffset:c,short:e,shortWithUTC:e,long:d}})};Object.defineProperty(g,"__esModule",{value:!0})});