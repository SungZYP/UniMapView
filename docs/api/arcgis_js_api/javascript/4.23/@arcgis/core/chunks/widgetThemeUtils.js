/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function t(){return e().startsWith("dark")}function r(){return"calcite-theme-"+(t()?"dark":"light")}export{r as a,e as g,t as i};
