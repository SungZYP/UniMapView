// Cesium for Javascript
'use strict';

// 初始化地图容器
export function initMapView(mapConfig) {
    return new Promise((resolve, reject) => {
        let viewer = new Cesium.Viewer(mapConfig.mapEl, {
            terrainProvider: new Cesium.EllipsoidTerrainProvider({}),
            baseLayerPicker: false,
            geocoder: false,
            homeButton: false,
            sceneModePicker: false,
            navigationHelpButton: false,
            animation: false,
            timeline: false,
            CreditsDisplay: false,
            fullscreenButton: false,
            selectionIndicator: false,
            infoBox: false
        })
        viewer._cesiumWidget._creditContainer.style.display = "none";
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(mapConfig.mapCenter[0], mapConfig.mapCenter[1], (1000 * mapConfig.mapZoom)),
            orientation: {
                // 指向
                heading: Cesium.Math.toRadians(0),
                // 视角
                pitch: Cesium.Math.toRadians(-90),
                roll: 0.0
            }
        });
        resolve({
            view: viewer,
            map: viewer
        })
    })
}

// 初始化底图
export function initBaseMap(map, baseMap, config) {
    baseMap.forEach(bMap => {
        if (bMap.id === config.mapBaseMap) {
            let layerInstance = createLayerByType(bMap)
            map.imageryLayers.addImageryProvider(layerInstance)
        }
        // 参考图层
        if (bMap.id === "referenceLayer") {
            let layerInstance = createLayerByType(bMap)
            map.imageryLayers.addImageryProvider(layerInstance)
        }
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
    let layerIndex = map.imageryLayers._layers.length - 1;
    map.imageryLayers._layers.forEach((imageryLayer, index) => {
        if (imageryLayer.imageryProvider &&
            config.mapBaseMap === imageryLayer.imageryProvider.id) {
            layerIndex = index;
            map.imageryLayers.remove(imageryLayer, true);
        }
    })
    if (layerIndex) {
        ;
        let layerInstance = createLayerByType(baseMap);
        map.imageryLayers.addImageryProvider(layerInstance, layerIndex);
    }
}

// 图层类型
function createLayerByType(bMap) {
    let layerInstance = null
    if (bMap.url.indexOf("tianditu.gov.cn") !== -1) {
        let newUrl = bMap.url.replace(/subDomain/, "s")
        newUrl = newUrl.replace(/col/, "TileCol")
        newUrl = newUrl.replace(/row/, "TileRow")
        newUrl = newUrl.replace(/level/, "TileMatrix")
        layerInstance = new Cesium.WebMapTileServiceImageryProvider({
            url: newUrl,
            subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]
        })
    } else {
        if (bMap.type === 'ArcGisMapServerImageryProvider') {
            layerInstance = new Cesium.ArcGisMapServerImageryProvider({
                url: bMap.url
            })
        } else if (bMap.type === 'WebMapTileServiceImageryProvider') {
            layerInstance = new Cesium.WebMapTileServiceImageryProvider({
                url: bMap.url
            })
        }
    }
    // 强制添加图层ID
    Object.assign(layerInstance, {
        id: bMap.id
    })
    return layerInstance
}

// 地图放大
export function mapZoomIn(view) {
    let longitude = Cesium.Math.toDegrees(view.camera.positionCartographic.longitude)
    let latitude = Cesium.Math.toDegrees(view.camera.positionCartographic.latitude)
    view.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, view.camera.positionCartographic.height + 10000),
        orientation: {
            // 指向
            heading: Cesium.Math.toRadians(0),
            // 视角
            pitch: Cesium.Math.toRadians(-90),
            roll: 0.0
        }
    });
}

// 地图缩小
export function mapZoomOut(view) {
    let longitude = Cesium.Math.toDegrees(view.camera.positionCartographic.longitude)
    let latitude = Cesium.Math.toDegrees(view.camera.positionCartographic.latitude)
    view.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, view.camera.positionCartographic.height - 10000),
        orientation: {
            // 指向
            heading: Cesium.Math.toRadians(0),
            // 视角
            pitch: Cesium.Math.toRadians(-90),
            roll: 0.0
        }
    });
}

// 地图移动
export function mapCenterMove(view, center) {
    view.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(center[0], center[1], Cesium.Ellipsoid.WGS84.cartesianToCartographic(view.camera.position).height),
        orientation: {
            // 指向
            heading: Cesium.Math.toRadians(0),
            // 视角
            pitch: Cesium.Math.toRadians(-90),
            roll: 0.0
        }
    });
}

// 地图重置
export function mapReset(view, mapConfig) {
    view.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(mapConfig.mapCenter[0], mapConfig.mapCenter[1], (1000 * mapConfig.mapZoom)),
        orientation: {
            // 指向
            heading: Cesium.Math.toRadians(0),
            // 视角
            pitch: Cesium.Math.toRadians(-90),
            roll: 0.0
        }
    });
}