// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./isWebGL2Context"],function(b,d){b.load=function(a,c){return c.disjointTimerQuery?null:d(a)?{drawBuffers:a.drawBuffers.bind(a),MAX_DRAW_BUFFERS:a.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:a.MAX_COLOR_ATTACHMENTS}:c.drawBuffers?null:(a=a.getExtension("WEBGL_draw_buffers"))?{drawBuffers:a.drawBuffersWEBGL.bind(a),MAX_DRAW_BUFFERS:a.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:a.MAX_COLOR_ATTACHMENTS_WEBGL}:null};Object.defineProperty(b,"__esModule",{value:!0})});