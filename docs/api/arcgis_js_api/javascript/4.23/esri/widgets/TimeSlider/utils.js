// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../TimeExtent ../../core/lang ../../core/maybe ../../support/timeUtils".split(" "),function(e,l,g,m,h,n){function k(){k=l._asyncToGenerator(function*(a,d){const {fullTimeExtent:b}=a.widgets.timeSlider;return b?b:n.getTimeExtentFromLayers(a.allLayers,d)});return k.apply(this,arguments)}e.getFullTimeExtentFromWebDocument=function(a,d){return k.apply(this,arguments)};e.getModeFromTimeSlider=function(a){var d;const b=null!=(d=a.numThumbs)?d:2;
if(a=a.currentTimeExtent){const {start:c,end:f}=a;return h.isSome(c)&&h.isSome(f)&&c.getTime()===f.getTime()?"instant":2===b?"time-window":h.isNone(c)||0===c.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===b?"time-window":"cumulative-from-start"};e.getStopsFromTimeSlider=function(a){const {numStops:d,stopInterval:b,stops:c}=a;return c?{dates:m.clone(c)}:b?{interval:b.clone()}:{count:null!=d?d:5}};e.getTimeExtentFromTimeSlider=function(a,d){var b;a=a.currentTimeExtent;if(!a)return null;
const {start:c,end:f}=a;a=null!=(b=null!=c?c:f)?b:null;switch(d){case "time-window":return new g({start:c,end:f});case "cumulative-from-start":return new g({start:null,end:a});case "cumulative-from-end":return new g({start:a,end:null});case "instant":return new g({start:a,end:a})}};Object.defineProperty(e,"__esModule",{value:!0})});