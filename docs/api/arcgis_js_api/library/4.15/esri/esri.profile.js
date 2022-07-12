var profile = (function() {
  var testResourceRe = /^esri\/(.*\/)?tests\//,

    jsRe = /\.js$/i,
    onlineFolderRe = /^esri\/arcgisonline\//i,
    mobileFolderRe = /^esri\/mobile\//i,
    discoveryFolderRe = /^esri\/discovery\//i,
    amcharts4FolderRe = /^esri\/libs\/amcharts4\/(?!index)/i,

    copyOnly = function(filename, mid) {
      var mids = {
        "esri/package.json":          1,
        "esri/esri.profile":          1,
        "esri/esri.js":               1,
        "esri/core/workers/worker":   1,
        "esri/geometry/geometryenginewebworker": 1,
        "esri/libs/vaadin-grid/index": 1,
        "esri/workers/requestWorker": 1,
        "esri/workers/mutableWorker": 1,
        "esri/workers/indexWorker":   1,
        "esri/workers/scripts/indexInterface": 1,
        "esri/views/2d/layers/vector-tile": 1
      };

      return (
        amcharts4FolderRe.test(mid) ||
        (mid in mids)
      );
    },

    legacyModules = {
      "esri/arcgisonline": 1,
      "esri/base": 1,
      "esri/gallery": 1,
      "esri/mobile": 1,
      "esri/arcgismanager": 1,
      "esri/themes/base/icons/demo-files/demo": 1
    };

  return {
    resourceTags: {
      test: function(filename, mid) {
        return testResourceRe.test(mid) || (mid.search(/\.17$/) !== -1);
      },

      copyOnly: function(filename, mid) {
        return copyOnly(filename, mid);
      },

      amd: function(filename, mid) {
        return jsRe.test(filename) && !copyOnly(filename, mid) && (
          /^esri\/arcgisonline\/sharing\/dijit\/FeatureLayerQueryResult/i.test(mid) ||
          /^esri\/arcgisonline\/coachmarks\/tours/i.test(mid) ||
          !(
            (mid in legacyModules) || onlineFolderRe.test(mid) ||
            mobileFolderRe.test(mid) || discoveryFolderRe.test(mid)
          )
        );
      },

      miniExclude: function(filename) {
        return /\.frag$/.test(filename) ||
          /\.glsl$/.test(filename) ||
          /\.jsdoc$/.test(filename) ||
          /\.map$/.test(filename) ||
          /\.pegjs$/.test(filename) ||
          /\.scss$/.test(filename) ||
          /\.ts$/.test(filename) ||
          /\.tsx$/.test(filename) ||
          /\.vert$/.test(filename);
      }
    }
  };
}());
