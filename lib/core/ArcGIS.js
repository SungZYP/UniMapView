// ArcGIS for Javascript
'use strict';
import {
    loadModules
} from 'esri-loader'

// 初始化地图容器
export function initMapView(mapConfig) {
    return new Promise((resolve, reject) => {
        loadModules([
            'esri/Map',
            'esri/views/MapView'
        ]).then(([Map, MapView, ]) => {
            let map = new Map({
                id: mapConfig.mapEl
            })
            let initParams = {
                container: mapConfig.mapEl,
                map: map,
                center: mapConfig.mapCenter,
                zoom: mapConfig.mapZoom
            }
            var view = new MapView(initParams)
            view['ui'].remove('zoom')
            view['ui'].remove('attribution')
            view['ui'].empty('top-left')
            view
                .when(() => {
                    view.center = mapConfig.mapCenter
                    view.zoom = mapConfig.mapZoom
                })
                .catch(err => {
                    console.log(err)
                })
            resolve({
                view: view,
                map: map
            })
        })
    })
}

// 初始化底图
export function initBaseMap(map, baseMap, config) {
    loadModules([
        'esri/Basemap',
        'esri/layers/FeatureLayer',
        'esri/layers/ImageryLayer',
        'esri/layers/WebTileLayer',
        'esri/layers/TileLayer'
    ]).then(([Basemap, FeatureLayer, ImageryLayer, WebTileLayer, TileLayer]) => {
        let baseMapLayers = []
        baseMap.forEach(bMap => {
            let layerInstance = null
            if (bMap.url.indexOf("tianditu.gov.cn") !== -1) {
                if (bMap.type === 'WebTileLayer') {
                    layerInstance = new WebTileLayer({
                        urlTemplate: bMap.url,
                        subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
                        id: bMap.id,
                        title: 'baseMapLayer',
                        visible: bMap.id === config.mapBaseMap
                    })
                }
            } else {
                if (bMap.type === 'WebTileLayer') {
                    layerInstance = new WebTileLayer({
                        urlTemplate: bMap.url,
                        id: bMap.id,
                        title: 'baseMapLayer',
                        visible: bMap.id === config.mapBaseMap
                    })
                } else if (bMap.type === 'FeatureLayer') {
                    layerInstance = new FeatureLayer({
                        url: bMap.url,
                        id: bMap.id,
                        title: 'baseMapLayer',
                        visible: bMap.id === config.mapBaseMap
                    })
                } else if (bMap.type === 'ImageryLayer') {
                    layerInstance = new ImageryLayer({
                        url: bMap.url,
                        id: bMap.id,
                        title: 'baseMapLayer',
                        visible: bMap.id === config.mapBaseMap
                    })
                } else if (bMap.type === 'TileLayer') {
                    layerInstance = new TileLayer({
                        url: bMap.url,
                        id: bMap.id,
                        title: 'baseMapLayer',
                        visible: bMap.id === config.mapBaseMap
                    })
                }
            }
            // 参考图层
            if (bMap.id === "referenceLayer") {
                layerInstance.visible = bMap.id === "referenceLayer"
            }
            baseMapLayers.push(layerInstance)
        })
        map.basemap = new Basemap({
            baseLayers: baseMapLayers
        })
    })
}

// 销毁地图容器
export function destroyMapView(view) {
    if (view) {
        view.destroy();
    }
}

// 切换底图
export function changeBaseMap(map, baseMap, config) {
    map.basemap.baseLayers.forEach(bMap => {
        bMap.visible = bMap.id === baseMap.id
        // 参考图层
        if (bMap.id === "referenceLayer") {
            bMap.visible = true
        }
    })
}

// 地图放大
export function mapZoomIn(view) {
    view.goTo({
        center: view.center,
        zoom: view.zoom + 1
    })
}

// 地图缩小
export function mapZoomOut(view) {
    view.goTo({
        center: view.center,
        zoom: view.zoom - 1
    })
}

// 地图移动
export function mapCenterMove(view, center) {
    view.goTo({
        center: center,
        zoom: view.zoom
    })
}

// 地图重置
export function mapReset(view, config) {
    view.map.removeAll()
    view.goTo({
        center: config.mapCenter,
        zoom: config.mapZoom
    })
}

// 添加点图层
export function addPoint(view, id, dataList) {
    loadModules([
        'esri/Graphic',
        'esri/geometry/Point',
        'esri/layers/GraphicsLayer',
        'esri/symbols/PictureMarkerSymbol'
    ]).then(([Graphic, Point, GraphicsLayer, PictureMarkerSymbol]) => {
        // 1. 创建图层
        let graphicslayer = new GraphicsLayer({
            id: id,
            graphics: []
        })
        // 2. 遍历包含经纬度的数组
        dataList.map(item => {
            if (!!item.center[0] && !!item.center[1] && !!Number(item.center[0]) && !!Number(item.center[1])) {
                // 创建坐标
                const newPoint = new Point(parseFloat(item.center[0]), parseFloat(item.center[1]))
                // 创建图像
                const markerSymbol = new PictureMarkerSymbol({
                    angle: 0,
                    height: '30px',
                    width: '30px',
                    yoffset: '15px',
                    url: item.img
                })
                const graphic = new Graphic(newPoint, markerSymbol, item)
                // 添加Layer
                graphicslayer.graphics.push(graphic)
            }
        })
        // 3. 添加图层
        view.map.add(graphicslayer);
        view.goTo(graphicslayer.graphics);
    })
}

// 添加线图层
export function addLine(view, id, dataList) {
    loadModules([
        'esri/Graphic',
        'esri/layers/GraphicsLayer',
    ]).then(([Graphic, GraphicsLayer]) => {
        // 添加路段图层
        var graphicslayer = new GraphicsLayer({
            id: id,
            graphics: []
        })
        // 遍历数组
        dataList.forEach(item => {
            if (item.paths && item.paths.length) {
                // 路线属性
                var simpleLineSymbol = {
                    type: 'simple-line',
                    color: item.color, // orange
                    width: 4
                }
                // 路线paths
                var polyline = {
                    type: 'polyline',
                    paths: []
                }
                // 遍历数据添加paths
                item.paths.forEach(pathChildren => {
                    pathChildren.forEach(path => {
                        polyline.paths.push(path)
                    })
                })
                // 路线图形
                var polylineGraphic = new Graphic({
                    attributes: item.attributes,
                    geometry: polyline,
                    symbol: simpleLineSymbol
                })
                // 添加到数组
                graphicslayer.graphics.add(polylineGraphic)
            }
        })
        // 3. 添加图层
        view.map.add(graphicslayer);
        view.goTo(graphicslayer.graphics);
    })
}