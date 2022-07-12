'use strict';

var view = require('./core/view');
var map = require('./core/map');
var unitedMapView = {view, map};
module.exports = unitedMapView;
// Allow use of default import syntax in TypeScript
module.exports.default = unitedMapView;