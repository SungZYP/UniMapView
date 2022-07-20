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
        viewer.imageryLayers.get(0).show = false;
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
    view.dataSources.removeAll();
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

// 添加点图层
export function addPoint(view, id, dataList) {
    // 1. 创建图层
    var graphicslayer = new Cesium.CustomDataSource(id);
    // 2. 遍历包含经纬度的数组
    dataList.map(item => {
        if (!!item.center[0] && !!item.center[1] && !!Number(item.center[0]) && !!Number(item.center[1])) {
            // 添加Layer
            graphicslayer.entities.add({
                position: new Cesium.Cartesian3.fromDegrees(item.center[0], item.center[1]),
                billboard: {
                    // 图像地址，URI或Canvas的属性
                    image: item.img,
                    // 高度（以像素为单位）
                    height: 30,
                    // 宽度（以像素为单位）
                    width: 30,
                    // 逆时针旋转
                    rotation: 0,
                    // 大小是否以米为单位
                    sizeInMeters: false,
                    // 相对于坐标的垂直位置
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    // 相对于坐标的水平位置
                    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                    // 应用于图像的统一比例。比例大于会1.0放大标签，而比例小于会1.0缩小标签。
                    scale: 1.0,
                    // 是否显示
                    show: true
                }
            });
        }
    })
    // 3. 添加图层
    view.dataSources.add(graphicslayer);
    view.zoomTo(graphicslayer);
}

// 添加线图层
export function addLine(view, id, dataList) {
    // 1. 创建图层
    var graphicslayer = new Cesium.CustomDataSource(id);
    // 2. 遍历包含经纬度的数组
    dataList.map(item => {
        if (item.paths && item.paths.length) {
            var positions = item.paths
            positions.forEach(paths => {
                // 二维数组转一维数组
                let newPaths = paths.reduce(function (a, b) {
                    return a.concat(b);
                })
                // 添加Layer
                graphicslayer.entities.add({
                    polyline: {
                        // fromDegrees返回给定的经度和纬度值数组（以度为单位），该数组由Cartesian3位置组成。
                        positions: Cesium.Cartesian3.fromDegreesArray(newPaths),
                        // 宽度
                        width: 4,
                        // 线的颜色
                        material: Cesium.Color.fromCssColorString(item.color),
                        // 线的顺序,仅当`clampToGround`为true并且支持地形上的折线时才有效。
                        zIndex: 10,
                        // 是否显示
                        show: true
                    }
                });
            })
        }
    })
    // 3. 添加图层
    view.dataSources.add(graphicslayer);
    view.zoomTo(graphicslayer);
}