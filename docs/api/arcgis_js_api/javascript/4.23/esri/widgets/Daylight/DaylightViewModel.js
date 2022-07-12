// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/HandleOwner ../../core/maybe ../../core/reactiveUtils ../../core/scheduling ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../views/SceneView ../../views/3d/environment/SunLighting ../../views/3d/support/earthUtils ./support/daylightUtils ./support/SliderWithDropdownViewModel ../support/DatePickerViewModel ../support/timeWidgetUtils".split(" "),
function(n,e,d,t,g,u,l,f,C,D,E,v,w,x,y,k,p,q,z){d=function(r){function m(a){a=r.call(this,a)||this;a.view=null;a.datePickerViewModel=new q;a.timeSliderViewModel=new p.SliderWithDropdownViewModel;a.lightingUpdateInterval=200;a._cachedLightingDateUTC=new Date(0);a._cachedDisplayUTCOffset=0;a._enableShadowsOnFirstInteraction=!0;a._lastLightingUpdate=0;a._nextLightingUpdate=null;a.playSpeedMultiplier=1;return a}n._inheritsLoose(m,r);var h=m.prototype;h.initialize=function(){this.handles.add([g.when(()=>
this.view,a=>a.when(()=>this._updateLighting(null)),g.initial),g.watch(()=>{var a;return null==(a=this.view)?void 0:a.environment.lighting.date},a=>this._scheduleUpdateLighting(a)),g.on(()=>{var a;return null==(a=this.view)?void 0:a.environment.lighting},"timezone-will-change",a=>this._timezoneWillChange(a),{onListenerAdd:()=>this._timezoneWillChange(null)}),g.watch(()=>{var a;return null==(a=this.view)?void 0:a.stationary},()=>{(this.dayPlaying||this.yearPlaying)&&this._updateSunriseAndSunset()},
g.initial),g.watch(()=>{const a=this.timeSliderViewModel;return{vm:a,state:a.state,sliderPosition:this.timeSliderPosition}},({vm:a,state:c,sliderPosition:b})=>{"ready"===c&&a.setValue(0,b)}),g.watch(()=>{var a;return null==(a=this.timeSliderViewModel.currentItem)?void 0:a.utcOffset},a=>this.utcOffset=a),g.watch(()=>this.timeSliderViewModel.isDropdownOpen,()=>this.stopPlaying()),g.watch(()=>this.timeSliderViewModel.values,a=>this.timeSliderPosition=a[0]),g.watch(()=>this.datePickerViewModel.value,
a=>{this.dayPlaying=!1;this.localDate=a}),g.watch(()=>this.localDate,a=>{this.datePickerViewModel.value.valueOf()!==a.getTime()&&this.datePickerViewModel.set("value",a)})])};h.destroy=function(){this._nextLightingUpdate&&(clearTimeout(this._nextLightingUpdate),this._nextLightingUpdate=null);this.view=null};h._timezoneFromCamera=function(a){var c;const b=null==(c=a.camera)?void 0:c.position;if(!b||"virtual"===a.environment.lighting.type||!a.environment.lighting.cameraTrackingEnabled)return 0;a=t.unwrap(y.positionToTimezoneInfo([b.longitude,
b.latitude]));return Math.round(a.hours+a.minutes/60+a.seconds/3600)};h.stopPlaying=function(){this.playingState="none"};h.toggleDayPlaying=function(){this.dayPlaying=!this.dayPlaying};h.toggleYearPlaying=function(){this.yearPlaying=!this.yearPlaying};h.toggleDirectShadows=function(){this.stopPlaying();this.directShadowsEnabled=!this.directShadowsEnabled};h._updateLighting=function(a){var c;this._lastLightingUpdate=Date.now();var b=null==(c=this.view)?void 0:c.environment.lighting;b&&"virtual"!==
b.type&&(a=a||b.date,b=b.displayUTCOffset,b=null!==b?b:this._timezoneFromCamera(this.view),this._cachedLightingDateUTC.getTime()!==a.getTime()&&(this._cachedLightingDateUTC=new Date(a.getTime())),this._cachedDisplayUTCOffset!==b&&(this._cachedDisplayUTCOffset=b))};h._timezoneWillChange=function(a){var c;const b=null==(c=this.view)?void 0:c.environment.lighting;if(b&&"virtual"!==b.type&&b.cameraTrackingEnabled){if(a)a=a.timezoneOffset;else{if(null!=b.displayUTCOffset)return;a=x.calculateTimezoneOffset(b.positionTimezoneInfo)}b.displayUTCOffset=
a;this._scheduleUpdateLighting(null)}};h._scheduleUpdateLighting=function(a){if(!this._nextLightingUpdate){var c=Date.now()-this._lastLightingUpdate;c=this.lightingUpdateInterval-c;0>=c?u.schedule(()=>this._updateLighting(a)):this._nextLightingUpdate=setTimeout(()=>{this._updateLighting(null);this._nextLightingUpdate=null},c)}};h._play=function(){var a;const c=this.view;if(null!=(a=this.view)&&a.environment&&"virtual"!==this.view.environment.lighting.type&&(this.dayPlaying||this.yearPlaying)){a=Date.now()-
this._lastTime;if(this.dayPlaying){if(this._lastTime=Date.now(),a*=k.calculatePlaySpeed(this._sunrise,this._sunset,c.environment.lighting.date)*this.playSpeedMultiplier/100,0<a){var b=new Date(c.environment.lighting.date.getTime()+a);const A=((b.getUTCHours()+c.environment.lighting.displayUTCOffset)%24+24)%24,B=((c.environment.lighting.date.getUTCHours()+c.environment.lighting.displayUTCOffset)%24+24)%24;A<B&&(b=new Date(c.environment.lighting.date.getTime()+a-864E5));c.environment.lighting.date=
b}}else 1E3<a&&(this._lastTime=Date.now(),a=(c.environment.lighting.date.getUTCMonth()+1)%12,b=new Date(c.environment.lighting.date.getTime()),b.setUTCMonth(a),c.environment.lighting.date=b);requestAnimationFrame(()=>this._play())}};h._updateSunriseAndSunset=function(){const a=z.getSunriseAndSunsetTimes(this.view.environment.lighting.date,this.view.camera.position.latitude,this.view.camera.position.longitude,this.view.environment.lighting.displayUTCOffset);this._sunrise=new Date(a.sunrise);this._sunset=
new Date(a.sunset)};n._createClass(m,[{key:"isSupported",get:function(){return!this.view||"3d"===this.view.type}},{key:"utcOffset",get:function(){return this._cachedDisplayUTCOffset},set:function(a){a!==this.utcOffset&&(this.view.environment.lighting.displayUTCOffset=a,this._updateLighting(null))}},{key:"localDate",get:function(){return l.truncateLocalTime(this._lightingDateDisplay)},set:function(a){a.getTime()!==this.localDate.getTime()&&(this._lightingDateDisplay=l.resetUTCDate(this._lightingDateDisplay,
a))}},{key:"timeSliderPosition",get:function(){return k.dateTimeToSliderPos(this._lightingDateDisplay)},set:function(a){Math.abs(a-this.timeSliderPosition)>1/60&&(this._lightingDateDisplay=k.sliderPosToDateTime(this._lightingDateDisplay,a),this.stopPlaying(),this._enableShadowsOnFirstInteraction&&(this.directShadowsEnabled=!0,this._enableShadowsOnFirstInteraction=!1))}},{key:"_lightingDateDisplay",get:function(){return l.offsetDate(this._cachedLightingDateUTC,this._cachedDisplayUTCOffset,"hours")},
set:function(a){"virtual"!==this.view.environment.lighting.type&&(a=l.offsetDate(a,-this._cachedDisplayUTCOffset,"hours"),a.getTime()!==this.view.environment.lighting.date.getTime()&&(this.view.environment.lighting.date=a,this._updateLighting(null)))}},{key:"playingState",set:function(a){this.playingState!==a&&"virtual"!==this.view.environment.lighting.type&&(this._set("playingState",a),"none"!==a&&(this._updateSunriseAndSunset(),this._lastTime=Date.now(),this._play(),this._enableShadowsOnFirstInteraction&&
(this.directShadowsEnabled=!0,this._enableShadowsOnFirstInteraction=!1)))}},{key:"dayPlaying",get:function(){return"day"===this.playingState},set:function(a){a?this.playingState="day":this.dayPlaying&&(this.playingState="none")}},{key:"yearPlaying",get:function(){return"year"===this.playingState},set:function(a){a?this.playingState="year":this.yearPlaying&&(this.playingState="none")}},{key:"currentSeason",get:function(){return k.getSeasonFromDate(this.localDate,this._currentHemisphere)},set:function(a){this.stopPlaying();
a=k.getNorthernHemisphereSeason(a,this._currentHemisphere);this.localDate=k.getSeasonDate(this.localDate,a,k.Hemisphere.NORTHERN)}},{key:"_currentHemisphere",get:function(){var a,c;const b=null==(a=this.view)?void 0:null==(c=a.camera)?void 0:c.position;return b?0<=b.latitude?k.Hemisphere.NORTHERN:k.Hemisphere.SOUTHERN:k.Hemisphere.NORTHERN}}]);return m}(d.HandleOwner);e.__decorate([f.property({type:w})],d.prototype,"view",void 0);e.__decorate([f.property({type:q,nonNullable:!0})],d.prototype,"datePickerViewModel",
void 0);e.__decorate([f.property({type:p.SliderWithDropdownViewModel,nonNullable:!0})],d.prototype,"timeSliderViewModel",void 0);e.__decorate([f.property()],d.prototype,"isSupported",null);e.__decorate([f.property()],d.prototype,"lightingUpdateInterval",void 0);e.__decorate([f.property()],d.prototype,"_cachedLightingDateUTC",void 0);e.__decorate([f.property()],d.prototype,"_cachedDisplayUTCOffset",void 0);e.__decorate([f.property()],d.prototype,"_enableShadowsOnFirstInteraction",void 0);e.__decorate([f.property()],
d.prototype,"utcOffset",null);e.__decorate([f.property()],d.prototype,"localDate",null);e.__decorate([f.property()],d.prototype,"timeSliderPosition",null);e.__decorate([f.property()],d.prototype,"_lightingDateDisplay",null);e.__decorate([f.property({aliasOf:"view.environment.lighting.directShadowsEnabled"})],d.prototype,"directShadowsEnabled",void 0);e.__decorate([f.property({type:["none","day","year"],value:"none"})],d.prototype,"playingState",null);e.__decorate([f.property()],d.prototype,"dayPlaying",
null);e.__decorate([f.property()],d.prototype,"yearPlaying",null);e.__decorate([f.property()],d.prototype,"playSpeedMultiplier",void 0);e.__decorate([f.property()],d.prototype,"currentSeason",null);e.__decorate([f.property()],d.prototype,"_lastTime",void 0);e.__decorate([f.property()],d.prototype,"_sunrise",void 0);e.__decorate([f.property()],d.prototype,"_sunset",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"_currentHemisphere",null);return d=e.__decorate([v.subclass("esri.widgets.Daylight.DaylightViewModel")],
d)});