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

/**
 * 初始化地图
 * @param {*} config 地图基础配置
 * @param {*} baseMap 地图底图列表
 */
export function initMapView(config, baseMap) {
    mapConfig = config
    mapBaseMap = baseMap
    var mapType = mapConfig.mapType
    if (mapType) {
        if (mapType === 'ArcGIS') {
            umv = require("./core/ArcGIS")
        }
        if (mapType === 'Cesium') {
            umv = require("./core/Cesium")
        }
    }
    umv.initMapView(mapConfig)
        .then(res => {
            map = res.map
            mapView = res.view
            // 初始化底图
            umv.initBaseMap(map, mapBaseMap, mapConfig)
        })
}

/**
 * 销毁地图
 */
export function destroyMapView() {
    umv.destroyMapView(mapView)
    umv = null
}

/**
 * 切换底图
 * @param {*} baseMap 底图图层配置
 */
export function changeBaseMap(baseMap) {
    umv.changeBaseMap(map, baseMap, mapConfig)
    mapConfig.mapBaseMap = baseMap.id
}

/**
 * 地图放大
 */
export function mapZoomIn() {
    umv.mapZoomIn(mapView)
}

/**
 * 地图缩小
 */
export function mapZoomOut() {
    umv.mapZoomOut(mapView)
}

/**
 * 地图移动
 */
export function mapCenterMove(point) {
    umv.mapCenterMove(mapView, point)
}

/**
 * 地图重置
 */
export function mapReset() {
    umv.mapReset(mapView, mapConfig)
}

/**
 * 添加图层
 * @param {*} id 图层ID
 * @param {*} layerConfig 图层配置
 */
export function addLayer(id, layerConfig) {
    umv.mapReset(mapView, mapConfig)
}

/**
 * 添加点图层
 * @param {*} id 图层ID
 * @param {*} dataList 点数组
 */
export function addPoint(id, dataList) {
    umv.addPoint(mapView, id, dataList)
}

/**
 * 添加线图层
 * @param {*} id 图层ID
 * @param {*} dataList 线数组
 */
export function addLine(id, dataList) {
    umv.addLine(mapView, id, dataList)
}