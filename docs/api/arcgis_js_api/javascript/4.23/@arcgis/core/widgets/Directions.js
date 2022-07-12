/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../Graphic.js";import{substitute as s}from"../intl.js";import r from"../core/Collection.js";import{o,p as i}from"../core/promiseUtils.js";import n from"../core/Handles.js";import{b as a,i as l,u as p,E as c}from"../core/lang.js";import{watch as u,initial as m,when as d,on as h}from"../core/reactiveUtils.js";import{aliasOf as _}from"../core/accessorSupport/decorators/aliasOf.js";import"../chunks/ensureType.js";import{property as v}from"../core/accessorSupport/decorators/property.js";import{subclass as g}from"../core/accessorSupport/decorators/subclass.js";import j from"../rest/support/Stop.js";import S from"./Search.js";import y from"./Widget.js";import b from"./Directions/DirectionsViewModel.js";import{c as k}from"../chunks/unitUtils.js";import{g as f}from"../chunks/assets.js";import{i as w,m as M}from"./Search/LocatorSearchSource.js";import C from"./support/DatePicker.js";import{H as I,i as T}from"../chunks/Heading.js";import D from"./support/TimePicker.js";import{a as R}from"../chunks/accessibleHandler.js";import{m as P}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as $}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import{S as U}from"../chunks/sortable.esm.js";import{f as L,a as x,c as E}from"../chunks/number.js";import"../geometry.js";import"../geometry/Extent.js";import"../chunks/string.js";import"../chunks/object.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Error.js";import"../config.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../chunks/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/messages.js";import"../chunks/utils9.js";import"../chunks/networkEnums.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../core/watchUtils.js";import"./Search/SearchResultRenderer.js";import"./Search/SearchViewModel.js";import"../chunks/layerViewUtils.js";import"./Search/LayerSearchSource.js";import"./Search/SearchSource.js";import"../chunks/geometryUtils3.js";import"../chunks/scaleUtils.js";import"../chunks/geolocationUtils.js";import"../chunks/trimExtend.js";import"../rest/support/GeneralizeParameters.js";import"../rest/support/LengthsParameters.js";import"../rest/support/OffsetParameters.js";import"../chunks/project.js";import"../chunks/utils5.js";import"../chunks/floorFilterUtils.js";import"../rest/support/ProjectParameters.js";import"../rest/support/RelationParameters.js";import"../rest/support/TrimExtendParameters.js";import"../chunks/GoTo.js";import"../chunks/vmEvent.js";import"../chunks/domUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../core/HandleOwner.js";import"../layers/GraphicsLayer.js";import"../chunks/GraphicsCollection.js";import"../layers/Layer.js";import"../chunks/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/projectionEllipsoid.js";import"../layers/RouteLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/originUtils.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/arcgisLayerUrl.js";import"../rest/networkService.js";import"../rest/support/TravelMode.js";import"../rest/route.js";import"../chunks/queryUtils.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../rest/support/RouteSolveResult.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../rest/support/NAMessage.js";import"../rest/support/GPMessage.js";import"../rest/support/RouteResult.js";import"../rest/support/DirectionsFeatureSet.js";import"../rest/support/DirectionLine.js";import"../rest/support/DirectionPoint.js";import"../rest/support/PointBarrier.js";import"../rest/support/PolygonBarrier.js";import"../rest/support/PolylineBarrier.js";import"../rest/support/RouteInfo.js";import"../rest/support/RouteParameters.js";import"../chunks/commonProperties3.js";import"../tasks/Locator.js";import"../chunks/suggestLocations.js";import"../rest/support/AddressCandidate.js";import"../tasks/Task.js";import"./support/DatePickerViewModel.js";import"../chunks/DateTimeElementViewModel.js";import"../chunks/Popover.js";import"../chunks/datetime.js";import"./support/TimePickerViewModel.js";function H(e,t){const s=function(e,t){switch(t){case"days":return 24*e;case"hours":return e;case"minutes":return e/60;case"seconds":return e/60/60;default:return 0}}(e,t);if(s<1)return`${Math.floor(60*s)}m`;const r=s%1*60;return`${Math.floor(s)}:${String(Math.floor(r)).padStart(2,"0")}h`}function A(e,t,r,o){const{fromUnits:i,toUnits:n}=o,a=k(r,i,n);if(!a)return"";const l=t.units[n],p=l?l.abbr:n.toLowerCase();return s(e.distanceTemplate,{distance:a,units:p},{format:{distance:{type:"number",intlOptions:{minimumFractionDigits:2,maximumFractionDigits:2}}}})}const O="esri-directions",V={base:`${O} esri-widget esri-widget--panel`,directionsButton:`${O}__button`,clearRouteButton:`${O}__clear-route-button`,scroller:`${O}__scroller`,panelContent:`${O}__panel-content`,panelContentLoading:`${O}__panel-content--loading`,panelContentError:`${O}__panel-content--error`,panelContentSignIn:`${O}__panel-content--sign-in`,loader:`${O}__loader`,message:`${O}__message`,travelModeSelect:`${O}__travel-modes-select`,departureTime:`${O}__departure-time`,departureTimeSelect:`${O}__departure-time-select`,directionsSection:`${O}__directions-section`,departureTimeControls:`${O}__departure-time-controls`,section:`${O}__section`,summary:`${O}__summary`,stopIcon:`${O}__stop-icon`,interactiveStopIcon:`${O}__stop-icon--interactive`,removeStopButton:`${O}__remove-stop`,removeStop:`${O}__remove-stop-icon`,reverseStops:`${O}__reverse-stops`,stopIconContainer:`${O}__stop-icon-container`,lastStopIconContainer:`${O}__stop-icon-container--last`,stopHandle:`${O}__stop-handle`,stopInput:`${O}__stop-input`,stopOptions:`${O}__stop-options`,stopHandleIcon:`${O}__stop-handle-icon`,verticalSplitter:`${O}__vertical-splitter`,stopRow:`${O}__stop-row`,stopRowGhost:`${O}__stop-row-ghost`,validStopRow:`${O}__stop-row--valid`,stops:`${O}__stops`,addStop:`${O}__add-stop`,addStopText:`${O}__add-stop-text`,directionCosts:`${O}__costs`,costsDetails:`${O}__costs-details`,primaryCosts:`${O}__costs-value`,secondaryCosts:`${O}__other-costs-total`,routeActions:`${O}__route-actions`,maneuvers:`${O}__maneuvers`,maneuverList:`${O}__maneuver-list`,maneuverSection:`${O}__maneuver-section`,maneuverSectionHeader:`${O}__maneuver-section-header`,maneuverSectionHeaderButton:`${O}__maneuver-section-header-toggle-button`,maneuverSectionTitle:`${O}__maneuver-section-title`,collapsibleSection:`${O}__maneuver-section--collapsible`,maneuverSectionToggle:`${O}__maneuver-section-toggle`,maneuver:`${O}__maneuver`,maneuverActive:`${O}__maneuver--active`,maneuverCosts:`${O}__maneuver-costs`,maneuverCostsContainer:`${O}__maneuver-costs-container`,maneuverIcon:`${O}__maneuver-icon`,cumulativeCost:`${O}__cost--cumulative`,intermediateCost:`${O}__cost--intermediate`,horizontalSplitter:`${O}__horizontal-splitter`,sectionSplitter:`${O}__section-splitter`,disclaimer:`${O}__disclaimer`,signInContent:`${O}__sign-in-content`,signInButton:`${O}__sign-in-button`,contentTitle:`${O}__content-title`,warningCard:`${O}__warning-card`,warningHeader:`${O}__warning-header`,warningHeading:`${O}__warning-heading`,warningMessage:`${O}__warning-message`,stopsIcon:"esri-icon-radio-unchecked",lastStopIcon:"esri-icon-radio-checked",handleIcon:"esri-icon-handle-vertical",addStopIcon:"esri-icon-plus",removeStopIcon:"esri-icon-trash",reverseStopIcon:"esri-icon-up-down-arrows",openIcon:"esri-icon-down",closeIcon:"esri-icon-up",warningIcon:"esri-icon-notice-triangle",widgetIcon:"esri-icon-directions",button:"esri-button",buttonSecondary:"esri-button--secondary",buttonTertiary:"esri-button--tertiary",emptyContent:"esri-widget__content--empty",emptyIllustration:"esri-widget__content-illustration--empty",select:"esri-select",screenReaderText:"esri-icon-font-fallback-text"},z=new Map([["bear-left","bear-left"],["bear-right","bear-right"],["central-fork","fork-middle"],["door","walk-through-door"],["elevator","elevator"],["escalator","escalator"],["left-fork","fork-left"],["left-ramp","ramp-left"],["left-turn","left"],["left-turn-and-immediate-left-turn","left-left"],["left-turn-and-immediate-right-turn","left-right"],["off-ferry","disembark"],["on-ferry","embark"],["pedestrian-ramp","take-pedestrian-ramp"],["right-fork","fork-right"],["right-ramp","exit-highway-right"],["right-ramp","ramp-right"],["right-turn","right"],["right-turn-and-immediate-left-turn","right-left"],["right-turn-and-immediate-right-turn","right-right"],["roundabout","roundabout-left"],["sharp-left","sharp-left"],["sharp-right","sharp-right"],["stairs","stairs"],["straight","straight"],["u-turn","u-turn-left"]]);var B;!function(e){e.NOW="now",e.DEPART_BY="depart-by",e.UNSPECIFIED="unspecified"}(B||(B={}));function F(e){if(a(e)||!z.has(e))return null;const t=z.get(e),s=2===window.devicePixelRatio?"@2x":"";return`${f("esri/themes/base/images/maneuvers/")}${t}${s}.png`}function N(e){return!(null==e.composedPath||!e.composedPath().find((e=>{var t;return null==(t=e.classList)?void 0:t.contains("esri-search__suggestions-list")})))}const G="awaiting-view-click-stop";let W=class extends y{constructor(e,t){super(e,t),this._autoStopRemovalDelay=100,this._departureTime=B.NOW,this._datePicker=new C,this._handles=new n,this._newPlaceholderStop=null,this._pointerPressedSearchSuggestionStop=null,this._sections=null,this._stops=new r([{},{}]),this._stopsToSearches=new Map,this._timePicker=new D,this.apiKey=null,this.goToOverride=null,this.headingLevel=2,this.iconClass=V.widgetIcon,this.label=void 0,this.lastRoute=null,this.maxStops=null,this.messages=null,this.messagesCommon=null,this.messagesUnits=null,this.routeServiceUrl=void 0,this.routeSymbol=null,this.searchProperties=null,this.stopSymbols=null,this.view=null,this.viewModel=new b,this._setUpDragAndDropStops=e=>{this._sortable=U.create(e,{draggable:`.${V.validStopRow}`,ghostClass:V.stopRowGhost,handle:`.${V.stopHandle}`,onEnd:this._handleStopInputDragEnd})},this._handleDragHandlePointerDown=()=>this._stops.forEach((e=>this._acquireSearch(e).activeMenu="none")),this._handleStopInputDragEnd=({oldIndex:e,newIndex:t,target:s})=>{if(e===t)return;const{children:r}=s,o=r[t],i=r[e],n=t-e<0;s.insertBefore(o,n?i.nextElementSibling:i);const a=this._stops;a.reorder(a.getItemAt(e),t),this._processStops()}}initialize(){this.own([u((()=>this.viewModel.lastRoute),(()=>{this._activeManeuver=null,this._focusedManeuver=null,this._sections=this._getSections(),this.scheduleRender()}),m),u((()=>[this.viewModel.selectedTravelMode,this.viewModel.departureTime]),(()=>{this.viewModel.stops.length>1&&this.getDirections()}),m),d((()=>this.view),((e,t)=>{if(t&&(this._viewClickHandle=null,this._handles.remove(t)),e){const t=this._prepPointerDownUpClick(),s=this._prepViewClick();t.pause(),s.pause(),this._handles.add([o(e.surface,"mousedown",(()=>this._autoStopRemovalDelay=500)),o(e.surface,"mouseup",(()=>this._autoStopRemovalDelay=100)),t,s],this.view.surface),this._pointerDownUpHandle=t,this._viewClickHandle=s}}),m),d((()=>0===this.viewModel.stops.length),(()=>{this._stops.drain((e=>{this._disposeSearch(e)})),this._stops.addMany([{},{}]),this.scheduleRender()})),d((()=>a(this.viewModel.serviceDescription)),(()=>{this.viewModel.load()}),m)])}destroy(){this._datePicker.destroy(),this._timePicker.destroy(),this._stopsToSearches.forEach((e=>e.destroy())),this._sortable&&this._sortable.destroy()}getDirections(){return null}zoomToRoute(){}render(){return $("div",{class:this.classes(V.base,V.scroller)},this._renderPanelContent())}_renderPanelContent(){const{viewModel:{state:e}}=this,t="initializing"===e,s="error"===e&&!this.viewModel.serviceDescription,r="unauthenticated"===e,o={[V.panelContentLoading]:t,[V.panelContentError]:s,[V.panelContentSignIn]:r},i=t?"presentation":"group",n=r?this._renderSignIn():s?this._renderMessage(this._getErrorMessage()):t?this._renderLoader():this._renderReadyContent();return $("div",{class:this.classes(V.panelContent,o),role:i},n)}_renderReadyContent(){return[this._renderStopsContainer(),this._renderTravelModeOptions(),this._renderDepartureTimeControls(),this._renderSectionSplitter(),this._renderDirectionsContainer()]}_renderSignIn(){return $("div",{key:"sign-in",class:V.signInContent},$(I,{class:V.contentTitle,level:this.headingLevel},this.messages.widgetLabel),this._renderPlaceholder(),$(I,{level:T(this.headingLevel)},this.messages.signInRequired),$("button",{class:this.classes(V.button,V.buttonSecondary,V.signInButton),tabIndex:0,onclick:this._handleSignInClick,bind:this,type:"button"},this.messagesCommon.auth.signIn))}_handleSignInClick(){this.viewModel.load().catch((()=>{}))}_renderTravelModeOptions(){const{selectedTravelMode:e,travelModes:t}=this.viewModel;if(0===t.length)return null;const s=l(e)?e.name:this.messages.travelMode;return $("select",{"aria-label":s,bind:this,class:this.classes(V.travelModeSelect,V.select),key:"esri-directions__travel-mode-options",onchange:this._handleTravelModeChange,title:s},t.map((t=>{const s=l(e)&&t.id===e.id;return $("option",{key:t,"data-mode":t,selected:s,value:t.id},t.name)})))}_handleTravelModeChange(e){const t=e.currentTarget,s=t.item(t.selectedIndex);this.viewModel.selectedTravelMode=s["data-mode"]}_renderStopsContainer(){return $("div",{class:V.section,key:"esri-directions__stops-container",role:"group"},this._renderStops())}_renderDepartureTimeControls(){const e=this._departureTime,{messages:t}=this,s=t.departureTime;return $("div",{class:V.departureTime,key:"esri-directions__departure-time-controls",role:"group"},$("select",{"aria-label":s,bind:this,class:this.classes(V.departureTimeSelect,V.select),onchange:this._handleDepartureOptionChange,title:s},$("option",{value:B.NOW,selected:e===B.NOW},t.leaveNow),$("option",{value:B.DEPART_BY,selected:e===B.DEPART_BY},t.departBy),$("option",{value:B.UNSPECIFIED,selected:e===B.UNSPECIFIED},t.timeUnspecified)),e===B.DEPART_BY?this._renderTimeControls():null)}_renderStops(){const e=this._stops;let t=0;e.forEach((e=>{"none"!==this._acquireSearch(e).activeMenu&&(t+=1)}));const r=e.toArray().map(((r,o)=>{const i=e.length,n=o>1&&!r.result,a={[V.stopsIcon]:o>=0&&o<i-1,[V.lastStopIcon]:o===i-1},l={[V.lastStopIconContainer]:o===i-1},p={[V.validStopRow]:!n},c=e.getItemAt(i-1),u=c&&c.result,m=e.getItemAt(o+1),d=m&&m.result,h=o===i-1,_=o===i-2,v=2===i&&0===o||i>2&&!h&&!_||i>2&&_&&d||i>2&&h&&!r.result,g=2===i||3===i&&!u||n,j=this._acquireSearch(r),{messages:S}=this,{removeStop:y,reverseStops:b,unlocated:k}=S,f=s(S.stopLabelTemplate,{number:o+1,label:r.result?r.result.name:k}),w=`${this.id}__stop--${o}`,M=!!j.searchTerm&&!!j.selectedResult&&!!r.result&&j.selectedResult===r.result,C={zIndex:"none"!==j.activeMenu?""+t--:""};return $("li",{"aria-label":f,afterCreate:this._handleStopFieldCreation,bind:this,class:this.classes(V.stopRow,p),id:w,key:o,"data-stop-index":o,styles:C},$("div",{class:V.stopHandle},$("span",{"aria-hidden":"true",class:this.classes(V.stopIcon,V.handleIcon,V.stopHandleIcon,V.interactiveStopIcon),onpointerdown:this._handleDragHandlePointerDown}),$("div",{bind:this,"aria-labelledby":w,class:this.classes(V.stopIconContainer,l),"data-stop-index":o,onclick:this._handleStopIconClick,onkeydown:this._handleStopIconClick,role:"button"},$("span",{class:this.classes(V.stopIcon,a),tabindex:M?"0":null}))),$("div",{class:V.stopInput},j.render()),$("div",{class:V.stopOptions,role:"group"},$("div",{"aria-label":y,class:V.removeStopButton,bind:this,"data-stop-index":o,hidden:g,onkeydown:this._handleRemoveStop,onclick:this._handleRemoveStop,role:"button",tabIndex:0,title:y},$("span",{"aria-hidden":"true",class:this.classes(V.stopIcon,V.removeStop,V.removeStopIcon,V.interactiveStopIcon)}),$("span",{class:V.screenReaderText},"removeStopTitle")),$("div",{"aria-label":b,class:V.reverseStops,bind:this,hidden:v,onkeydown:this._handleReverseStops,onclick:this._handleReverseStops,role:"button",tabIndex:0,title:b},$("span",{"aria-hidden":"true",class:this.classes(V.stopIcon,V.reverseStopIcon,V.interactiveStopIcon)}),$("span",{class:V.screenReaderText},"removeStopTitle"))))})),o=e.every((e=>{const t=this._stopsToSearches.get(e);return e.result&&t.selectedResult===e.result})),i=this._stops.length>=this.maxStops,n=this.messages.addStop,a=e.length>=2&&o&&!i?$("div",{"aria-label":n,bind:this,class:V.addStop,key:"esri-directions__add-stop",onfocus:this._handleAddStopFocus,tabIndex:0},$("span",{"aria-hidden":"true",class:this.classes(V.addStopIcon,V.stopIcon,V.interactiveStopIcon)}),$("div",{"aria-hidden":"true",class:V.addStopText},n)):null;return $("div",null,$("ol",{class:V.stops,role:"group",afterCreate:this._setUpDragAndDropStops},r),a)}_handleStopIconClick(e){const t=e.currentTarget["data-stop-index"],s=this._stops.getItemAt(t);s&&s.result&&this._centerAtStop(s)}_handleClearRouteClick(){this.viewModel.reset()}_centerAtStop(e){this.viewModel.centerAt(e.result.feature)}_handleStopFieldCreation(e){const t=this._newPlaceholderStop;if(!t)return;const s=e["data-stop-index"],r=this._stops.getItemAt(s);if(t===r){const e=this._acquireSearch(r);e.when((()=>{this.renderNow(),e.focus()}))}this._newPlaceholderStop=null}_handleStopInputBlur(e,t){this._handles.remove(G),this.view.cursor=this._previousCursor;if(!e.selectedResult||!t.result||e.selectedResult!==t.result)return"none"!==e.activeMenu||!e.searchTerm||e.selectedResult===t.result&&(e.selectedResult||t.result)?void(e.searchTerm||(this._viewClickHandle.resume(),clearTimeout(this._autoStopRemovalTimeoutId),this._autoStopRemovalTimeoutId=setTimeout((()=>{if(this.destroyed)return;if(this._viewClickHandle.pause(),"searching"===e.viewModel.state)return void this._pointerDownUpHandle.pause();if(this._pointerPressedSearchSuggestionStop)return;!!t.result&&(t.result=null,this._processStops()),this.scheduleRender()}),this._autoStopRemovalDelay))):(e.search(),void this._pointerDownUpHandle.pause());this._pointerDownUpHandle.pause()}_handleStopInputFocus(e,t){if(this._pointerDownUpHandle.resume(),this._handles.has(G))return;const{view:s,view:{cursor:r}}=this;this._previousCursor=r,this._handles.add(u((()=>e.searchTerm),(e=>{s.cursor=0===e.length?"copy":r}),m),G),this._activeStop=t}_prepViewClick(){const{view:e}=this.viewModel,t=i(e,"click",this._handleViewClick.bind(this)),s=i(e.surface,"click",(()=>{clearTimeout(this._autoStopRemovalTimeoutId),s.pause()}));return{remove(){s.remove(),t.remove()},pause(){s.pause(),t.pause()},resume(){s.resume(),t.resume()}}}_prepPointerDownUpClick(){const e=i(document,"pointerdown",(e=>{this._pointerPressedSearchSuggestionStop=N(e)?this._activeStop:null})),t=i(document,"pointerup",(e=>{this._pointerDownUpHandle.pause();const t=N(e),s=this._activeStop;t||s!==this._pointerPressedSearchSuggestionStop||this._removeStop(s),this.scheduleRender(),this._pointerPressedSearchSuggestionStop=t?this._activeStop:null}));return{remove(){t.remove(),e.remove()},pause(){t.pause(),e.pause()},resume(){e.resume()}}}_handleViewClick(e){const t=this._stopsToSearches.get(this._activeStop);t&&!t.searchTerm&&(t.search(e.mapPoint).then((e=>{const s=function(e){return e.results[0].results[0]}(e),r=this._activeStop;r.result=s,r.result.feature.attributes.Name=s.name,t.searchTerm=s.name})),this.scheduleRender()),this._viewClickHandle.pause(),clearTimeout(this._autoStopRemovalTimeoutId)}_handleAddStopFocus(){this._addNewPlaceholder()}_addNewPlaceholder(){if(this._pointerDownUpHandle.pause(),this._newPlaceholderStop)return;const e={};this._stops.add(e),this._newPlaceholderStop=e}_handleReverseStops(){this._reverseStops()}_reverseStops(){this._stops.reverse(),this._processStops()}_handleRemoveStop(e){const t=e.currentTarget["data-stop-index"];this._removeStop(this._stops.getItemAt(t)),this._processStops()}_removeStop(e){this._stops.length<=2||(this._disposeSearch(e),this._stops.remove(e))}_handleDepartureOptionChange(e){const t=e.currentTarget,s=t.item(t.selectedIndex);s.value===B.NOW?(this._departureTime=B.NOW,this.viewModel.departureTime=B.NOW,this._handles.remove("departure-time-controls")):s.value===B.DEPART_BY?(this._departureTime=B.DEPART_BY,this._handles.add([u((()=>this._datePicker.value),(()=>this._updateDepartureTime()),m),u((()=>this._timePicker.value),(()=>this._updateDepartureTime()),m)],"departure-time-controls")):(this._departureTime=B.UNSPECIFIED,this.viewModel.departureTime=null)}_updateDepartureTime(){const e=this._datePicker.value,t=this._timePicker.value;e&&t&&(this.viewModel.departureTime=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()))}_renderTimeControls(){return $("div",{class:V.departureTimeControls,key:"esri-directions__time-controls",role:"group"},this._datePicker.render(),this._timePicker.render())}_renderSectionSplitter(){return $("div",{class:V.sectionSplitter})}_renderDirectionsContainer(){return $("div",{class:this.classes(V.directionsSection,V.section),key:"esri-directions__container"},this._renderDirectionsContainerContent())}_renderLoader(){return $("div",{class:V.loader,key:"loader"})}_renderWarningCard(){return $("div",{class:V.warningCard,role:"alert"},$("div",{class:V.warningHeader},$("span",{class:V.warningIcon,"aria-hidden":"true"}),$(I,{class:V.warningHeading,level:this.headingLevel},this.messagesCommon.warning)),$("div",{class:V.warningMessage},this._getErrorMessage()))}_renderDirectionsContainerContent(){const{lastRoute:e,viewModel:{state:t}}=this,s="routing"===t;return"error"===t?this._renderWarningCard():s?this._renderLoader():l(e)&&l(e.directionLines)?$("div",{class:V.summary,key:"esri-directions__summary",role:"group"},this._renderCosts(),this._renderRouteActions(),this._renderManeuverSections()):$("div",{key:"esri-directions__placeholder",class:V.emptyContent},this._renderPlaceholder(),$(I,{class:V.message,level:this.headingLevel},this.messages.directionsPlaceholder))}_renderPlaceholder(){return $("svg",{class:V.emptyIllustration,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},$("path",{fill:"currentcolor",d:"M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"}))}_renderMessage(e){return $(I,{level:this.headingLevel},e)}_renderRouteActions(){return $("div",{class:V.routeActions},$("button",{"aria-label":this.messages.clearRoute,class:this.classes(V.clearRouteButton,V.button,V.buttonTertiary),tabIndex:0,onclick:this._handleClearRouteClick,bind:this,type:"button"},this.messages.clearRoute))}_getSections(){if(a(this.lastRoute))return null;const{directionPoints:e,directionLines:t,stops:s}=this.lastRoute;if(a(e)||a(t))return null;const r=[];let o=null;for(const i of e){const{objectId:e,stopId:n}=i;if(l(n)){const e=s.find((e=>e.objectId===n)),t=0===r.length;(a(o)||o.stop!==e)&&(o={stop:e,directions:[],open:t},r.push(o));continue}if(a(o))continue;const p=t.find((t=>t.directionPointId===e));a(p)||o.directions.push({directionPoint:i,directionLine:p})}return r}_renderManeuverSections(){return a(this._sections)?null:$("div",{class:V.maneuvers,role:"group"},this._sections.map(((e,t)=>{const{open:s}=e;let r;e.directions.length>0&&s&&(r=$("ol",{class:V.maneuverList},e.directions.map((e=>this._renderManeuver(e)))));const o=p(this._sections).length>2,i=t===p(this._sections).length-1,n={[V.collapsibleSection]:o},a={[V.openIcon]:!s,[V.closeIcon]:s};let l;if(o&&!i){const t=s?this.messagesCommon.open:this.messagesCommon.close;l=$("header",{class:this.classes(V.maneuverSectionHeader,V.maneuverSectionToggle),key:"esri-directions__maneuver-section-header"},$("div",{"aria-expanded":s.toString(),"aria-label":t,bind:this,class:V.maneuverSectionHeaderButton,"data-maneuver-section":e,onkeydown:this._handleSectionToggle,onclick:this._handleSectionToggle,role:"button",tabIndex:0,title:t},$(I,{class:V.maneuverSectionTitle,level:this.headingLevel},e.stop.name),$("span",{"aria-hidden":"true",class:this.classes(a)})))}else l=$("header",{class:V.maneuverSectionHeader,key:"esri-directions__maneuver-section-header"},$(I,{class:V.maneuverSectionTitle,level:this.headingLevel},e.stop.name));return $("section",{class:this.classes(V.maneuverSection,n),key:t},l,r)})))}_handleSectionToggle(e){const t=e.currentTarget["data-maneuver-section"];t.open=!t.open}_renderCosts(){const{lastRoute:e}=this;if(a(e))return null;const t=this._getCostSummary(),{directionPoints:r}=e;if(a(r)||a(t))return null;const o=r.getItemAt(r.length-1).arrivalTime,{primary:i,secondary:n}=t,{eta:p,etaTemplate:c,primaryCosts:u,secondaryCosts:m,zoomToRoute:d}=this.messages,h=E("short-time"),_=l(o)?`<strong>${L(o,h)}</strong>`:null,v=l(o)?`${function(e){const t=e.getTimezoneOffset(),s=t>0?"-":"+",r=Math.abs(Math.floor(t/60)),o=Math.abs(Math.floor(t)%60),i={minimumIntegerDigits:2};return`GMT${s}${x(r,i)}${x(o,i)}`}(o)}`:null,g=s(c,{time:_,gmt:v});return $("div",{"aria-label":d,bind:this,class:V.directionCosts,onkeydown:this._handleSummaryInteraction,onclick:this._handleSummaryInteraction,role:"button",tabIndex:0,title:d},$("div",{class:V.costsDetails,role:"group"},$("div",{"aria-label":u,class:V.primaryCosts,title:u},i),$("div",{class:V.verticalSplitter}),$("div",{"aria-label":m,class:V.secondaryCosts,title:m},n)),$("div",{"aria-label":p,innerHTML:g,title:p}))}_handleSummaryInteraction(){this._activeManeuver=null,this._focusedManeuver=null,this.viewModel.clearHighlights(),this.zoomToRoute()}_getErrorMessage(){const{messages:e,viewModel:{error:t}}=this;if(l(t))switch(t.name){case"directions-view-model:unable-to-route":return e.errors.unableToRoute;case"directions-view-model:service-metadata-unavailable":return e.errors.unableToLoadServiceMetadata}return e.errors.unknownError}_normalizeSearchSources(e){this._overrideDefaultSources(e),this._applyLocatorSourceOverrides(e)}_overrideDefaultSources(e){e.viewModel.defaultSources.forEach((e=>{e.autoNavigate=!1}))}_applyLocatorSourceOverrides({allSources:e}){0!==e.length&&e.forEach((e=>{"url"in e&&e.url&&(null===e.locationType&&(e.locationType="street"),w(e.url)&&this.apiKey&&null==e.apiKey&&(e.apiKey=this.apiKey,e.url=M))}))}_acquireSearch(e){const t=this.get("viewModel.view");if(this._stopsToSearches.has(e)){const s=this._stopsToSearches.get(e);return s.view=t,this._overrideDefaultSources(s),s}const s=new S({view:t,resultGraphicEnabled:!1,popupEnabled:!1,...this.searchProperties});return this._normalizeSearchSources(s),this._handles.add([h((()=>s.allSources),"change",(()=>this._normalizeSearchSources(s))),s.on("select-result",(()=>{e.result=s.selectedResult,e.result.feature.attributes.Name=s.selectedResult.name,this._processStops(),this.scheduleRender()})),s.on("search-focus",(()=>this._handleStopInputFocus(s,e))),s.on("search-blur",(()=>this._handleStopInputBlur(s,e)))],s),this._stopsToSearches.set(e,s),s}_disposeSearch(e){this._stopsToSearches.get(e).destroy(),this._stopsToSearches.delete(e)}_processStops(){const e=this._stops.filter((e=>!!e.result)).map((e=>j.fromJSON(e.result.feature.toJSON())));this.viewModel.stops=e,e.length>1&&this.getDirections()}_renderManeuver(e){const{directionsLengthUnits:t}=this.viewModel.routeParameters,{directionPoint:s,directionLine:r}=e,{distance:o,duration:i}=r,{messages:n,messagesUnits:a}=this,p=A(n,a,c(o,0),{fromUnits:"meters",toUnits:t}),u=H(c(i,0),"minutes"),m=p&&u?`${p}&nbsp;&middot;&nbsp;${u}`:`${p}${u}`,d=this._getFormattedManeuverText(s),{objectId:h,directionPointType:_}=s,v=F(_),g=`esri-directions__maneuver-${h}`,j=`esri-directions__cumulative-costs-${h}`,S=`esri-directions__intermediate-costs-${h}`,y={[V.maneuverActive]:this._activeManeuver===r};return $("li",{"aria-labelledby":`${g} ${j} ${S}`,bind:this,class:this.classes(V.maneuver,y),"data-maneuver":r,key:r,onclick:this._handleManeuverClick,onkeydown:this._handleManeuverClick,onfocus:this._handleManeuverFocus,onmouseover:this._handleManeuverMouseOver,onmouseout:this._handleManeuverMouseOut,onblur:this._handleManeuverBlur,tabIndex:0},l(v)&&$("img",{alt:"",class:V.maneuverIcon,src:v}),$("div",{class:V.maneuverCostsContainer},$("span",{id:g,innerHTML:c(d,"")}),$("div",{class:V.maneuverCosts},$("div",{class:V.horizontalSplitter}),$("div",{id:j,"aria-label":n.cumulativeCosts,class:V.cumulativeCost,innerHTML:"",title:n.cumulativeCosts}),$("div",{id:S,"aria-label":n.intermediateCosts,class:V.intermediateCost,innerHTML:m,title:n.intermediateCosts}))))}_handleManeuverClick(e){const s=e.currentTarget["data-maneuver"];if(this._activeManeuver===s)return this._activeManeuver=null,void this.zoomToRoute();this._activeManeuver=s;const{geometry:r,symbol:o}=s,i=new t({geometry:r,symbol:o});this.viewModel.centerAt(i),this.viewModel.highlightSegment(i)}_handleManeuverMouseOver(e){if(this._activeManeuver||this._focusedManeuver)return;const s=e.currentTarget["data-maneuver"],{geometry:r,symbol:o}=s,i=new t({geometry:r,symbol:o});this.viewModel.highlightSegment(i)}_handleManeuverMouseOut(){this._activeManeuver||this._focusedManeuver||this.viewModel.clearHighlights()}_handleManeuverBlur(){this._activeManeuver||(this._focusedManeuver=null,this.viewModel.clearHighlights())}_handleManeuverFocus(e){if(this._activeManeuver)return;const s=e.currentTarget["data-maneuver"];this._focusedManeuver=s;const{geometry:r,symbol:o}=s,i=new t({geometry:r,symbol:o});this.viewModel.highlightSegment(i)}_getFormattedManeuverText(e){const{displayText:t,name:s,intersectingName:r}=e;if(a(t))return"";let o=t;return l(s)&&o.includes(s)&&(o=o.replace(s,`<strong>${s}</strong>`)),l(r)&&o.includes(r)&&(o=o.replace(r,`<strong>${r}</strong>`)),o}_getCostSummary(){const{viewModel:{impedanceAttribute:e,routeParameters:t},lastRoute:s}=this;if(a(e)||a(s))return null;const{routeInfo:r}=s;let{totalDuration:o,totalDistance:i}=r;const{directionsLengthUnits:n}=t;i=l(i)?i:0,o=l(o)?o:0;const p=A(this.messages,this.messagesUnits,i,{fromUnits:"meters",toUnits:n}),c=H(o,"minutes"),[u,m]="esriNAUSeconds"===(d=e.units)||"esriNAUMinutes"===d||"esriNAUHours"===d||"esriNAUDays"===d?[c,p]:[p,c];var d;return{primary:u,secondary:m}}};e([_("viewModel.apiKey")],W.prototype,"apiKey",void 0),e([_("viewModel.goToOverride")],W.prototype,"goToOverride",void 0),e([v()],W.prototype,"headingLevel",void 0),e([v()],W.prototype,"iconClass",void 0),e([v({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],W.prototype,"label",void 0),e([_("viewModel.lastRoute")],W.prototype,"lastRoute",void 0),e([_("viewModel.maxStops")],W.prototype,"maxStops",void 0),e([v(),P("esri/widgets/Directions/t9n/Directions")],W.prototype,"messages",void 0),e([v(),P("esri/t9n/common")],W.prototype,"messagesCommon",void 0),e([v(),P("esri/core/t9n/Units")],W.prototype,"messagesUnits",void 0),e([_("viewModel.routeServiceUrl")],W.prototype,"routeServiceUrl",void 0),e([_("viewModel.routeSymbol")],W.prototype,"routeSymbol",void 0),e([v()],W.prototype,"searchProperties",void 0),e([_("viewModel.stopSymbols")],W.prototype,"stopSymbols",void 0),e([_("viewModel.view")],W.prototype,"view",void 0),e([v({type:b})],W.prototype,"viewModel",void 0),e([_("viewModel.getDirections")],W.prototype,"getDirections",null),e([_("viewModel.zoomToRoute")],W.prototype,"zoomToRoute",null),e([R()],W.prototype,"_handleStopIconClick",null),e([R()],W.prototype,"_handleClearRouteClick",null),e([R()],W.prototype,"_handleReverseStops",null),e([R()],W.prototype,"_handleRemoveStop",null),e([R()],W.prototype,"_handleSectionToggle",null),e([R()],W.prototype,"_handleSummaryInteraction",null),e([R()],W.prototype,"_handleManeuverClick",null),W=e([g("esri.widgets.Directions")],W);const q=W;export{q as default};