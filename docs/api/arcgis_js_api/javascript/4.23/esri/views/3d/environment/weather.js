// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../core/has ./CloudyWeather ./FoggyWeather ./RainyWeather ./SnowyWeather ./SunnyWeather".split(" "),function(b,g,d,h,k,l,m){function e(){return g("enable-feature:precipitation")?f:f.filter(a=>"snowy"!==a)}d={key:"type",base:null,typeMap:{sunny:m,cloudy:d,rainy:k,snowy:l,foggy:h}};const f=Object.keys(d.typeMap);b.getWeatherTypes=e;b.validateWeatherType=function(a,c){return e().includes(a)?!0:(c.error(`"${a}" is not a valid weather type`),!1)};b.weatherEquals=function(a,c){if(a.type!==
c.type)return!1;switch(a.type){case "sunny":case "rainy":case "snowy":case "cloudy":return a.cloudCover===c.cloudCover;case "foggy":return a.fogStrength===c.fogStrength}};b.weatherHeightLimit=1E4;b.weatherTypes=d;Object.defineProperty(b,"__esModule",{value:!0})});