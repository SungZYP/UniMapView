// 地图对象
var map;
// 地图视图对象
var mapView;

// 实例
var umv;
// 地图基础配置
var mapConfig = {
    mapEl: '', // 地图容器元素
    mapType: '', // 地图类型
    mapZoom: '', // 地图层级
    mapCenter: [116.3972282409668, 39.90960456049752], // 地图中心点
    mapBaseMap: '', // 地图默认底图
};
// 地图底图
var mapBaseMap = [];
// 地图参考图层
var mapRefrenceMap = [];
// 地图图层
var mapLayer = [];

// 初始化地图
export function initMapView(config, baseMap, refrenceMap) {
    this.mapConfig = config
    this.mapBaseMap = baseMap
    this.mapRefrenceMap = refrenceMap
    var mapType = this.mapConfig.mapType
    if (mapType) {
        if (mapType === 'ArcGIS') {
            this.umv = require("./core/ArcGIS")
        }
        if (mapType === 'Cesium') {
            this.umv = require("./core/Cesium")
        }
    }
    this.umv.initMapView(this.mapConfig)
        .then(res => {
            this.map = res.map
            this.mapView = res.view
            // 初始化底图
            this.umv.initBaseMap(this.map, this.mapBaseMap, this.mapConfig)
        })
}

// 销毁地图
export function destroyMapView() {
    this.umv.destroyMapView(this.mapView)
    this.umv = null
}

// 切换底图
export function changeBaseMap(baseMap) {
    this.umv.changeBaseMap(this.map, baseMap, this.mapConfig)
    this.mapConfig.mapBaseMap = baseMap.id
}

// 地图放大
export function mapZoomIn() {
    this.umv.mapZoomIn(this.mapView)
}

// 地图缩小
export function mapZoomOut() {
    this.umv.mapZoomOut(this.mapView)
}

// 地图移动
export function mapCenterMove(point) {
    this.umv.mapCenterMove(this.mapView, point)
}

// 地图重置
export function mapReset() {
    this.umv.mapReset(this.mapView, this.mapConfig)
}