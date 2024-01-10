(()=>{var t={90055:(t,i,e)=>{"use strict";function o(t,i){return{default:{details:"mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in",no_details:"mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo"},black_and_white:{details:"mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434",no_details:"mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4"},satellite:{details:"mapbox://styles/mapbox/satellite-streets-v10",no_details:"mapbox://styles/mapbox/satellite-v9"},terrain:{details:"mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b",no_details:"mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha"}}[t][i?"details":"no_details"]}e.d(i,{h:()=>o})},84634:(t,i,e)=>{"use strict";e.d(i,{YB:()=>n,b2:()=>o,k:()=>s,xt:()=>r,zb:()=>a});const o=t=>t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")?t:{lat:t.latitude||0,lng:t.longitude||0};function n(t,i){const e=new t.LngLatBounds;return i.forEach((t=>{e.extend([t.coordinates.longitude,t.coordinates.latitude])})),e}function s(t,i){t.fitBounds(i,{padding:{top:80,bottom:80,left:40,right:40}})}function a(t,i){t.innerHTML=`\n\t\t<?xml version="1.0" encoding="UTF-8"?>\n\t\t<svg version="1.1" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t\t<g fill-rule="evenodd">\n\t\t\t\t<path id="d" d="m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z" fill="${i}"/>\n\t\t\t</g>\n\t\t</svg>\n\t`}function r(t){return new t.Popup({closeButton:!0,closeOnClick:!1,offset:{left:[0,0],top:[0,5],right:[0,0],bottom:[0,-40]}})}},96442:(t,i,e)=>{"use strict";e.d(i,{E0:()=>l,ot:()=>a,rZ:()=>r});var o=e(85007);const n=6371e3;function s(t){return Math.abs(n*Math.cos(t*Math.PI/180)*2*Math.PI/256)}function a(t,i){return 512/Math.pow(2,t)*.5*s(i)}function r(t,i){return new Promise((e=>{if(i.mapkitScriptIsLoading)(0,o.Dz)(i,"mapkit").then((t=>{e(t)}));else{i.mapkitScriptIsLoading=!0;const n=t.createElement("script");n.addEventListener("load",(async()=>{const t=await(0,o.Dz)(i,"mapkit");i.mapkitScriptIsLoading=!1,e(t)}),{once:!0}),n.src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js",n.crossOrigin="anonymous",t.head.appendChild(n)}}))}function l(t,i,e){return new Promise(((i,o)=>{e.mapkitIsInitialized?i():e.mapkitIsInitializing?function(t){return new Promise(((i,e)=>{const o=()=>{void 0===t.mapkitIsInitializing?e():!1===t.mapkitIsInitializing?i():t.requestAnimationFrame(o)};o()}))}(e).then((()=>{i()})):(e.mapkitIsInitializing=!0,e.mapkitIsInitialized=!1,t.init({authorizationCallback:async t=>{try{const n=await fetch("https://public-api.wordpress.com/wpcom/v2/mapkit");if(200===n.status){t((await n.json()).wpcom_mapkit_access_token)}else o();e.mapkitIsInitializing=!1,e.mapkitIsInitialized=!0,i()}catch(t){o()}}}))}))}},51321:(t,i,e)=>{"use strict";e.d(i,{Z:()=>o});const o=(t,i=null)=>{if(i)t.style.height=i+"px";else{const i=t.offsetWidth,e=window.location.search.indexOf("map-block-counter")>-1?window.innerHeight:.8*window.innerHeight,o=Math.min(i*(3/4),e);t.style.height=o+"px"}}},24795:(t,i,e)=>{"use strict";e.d(i,{G:()=>o.Z,k:()=>n.Z});var o=e(49735),n=e(75867)},49735:(t,i,e)=>{"use strict";e.d(i,{Z:()=>c});var o=e(85007),n=e(24393),s=e(45388),a=e(90055),r=e(84634),l=e(51321);const c=class{constructor(t,i=(()=>{})){this.root=t;const{currentDoc:e,currentWindow:n}=(0,o.bL)(this.root);this.document=e,this.window=n,this.onError=i,this.mapStyle=this.root.getAttribute("data-map-style")||"default",this.mapDetails="true"===this.root.getAttribute("data-map-details"),this.apiKey=this.root.getAttribute("data-api-key")||null,this.scrollToZoom="true"===this.root.getAttribute("data-scroll-to-zoom"),this.showFullscreenButton="true"===this.root.getAttribute("data-show-fullscreen-button"),this.points=JSON.parse(this.root.getAttribute("data-points")||"[]"),this.mapCenter=JSON.parse(this.root.getAttribute("data-map-center")||"{}"),this.mapHeight=this.root.getAttribute("data-map-height")||null,this.markerColor=this.root.getAttribute("data-marker-color")||"red";const s=this.root.getAttribute("data-zoom");this.zoom=s&&s.length?parseInt(this.root.getAttribute("data-zoom"),10):13,this.activeMarker=null;const a=this.root.querySelector("ul");if(a&&(a.style.display="none"),!this.apiKey||!this.apiKey.length)throw new Error("API key missing")}initDOM(){this.root.innerHTML='<div class="wp-block-jetpack-map__gm-container"></div>',this.container=this.root.querySelector(".wp-block-jetpack-map__gm-container")}loadMapLibraries(){return new Promise((t=>{const i={"mapbox-gl-js":()=>{(0,o.Dz)(this.window,"mapboxgl").then((i=>{this.mapboxgl=i,i.accessToken=this.apiKey,t(i)}))}};(0,o.Pp)(s,i,this.root)}))}initMap(){try{this.map=new this.mapboxgl.Map({container:this.container,style:(0,a.h)(this.mapStyle,this.mapDetails),center:(0,r.b2)(this.mapCenter),zoom:this.zoom,pitchWithRotate:!1,attributionControl:!1,dragRotate:!1})}catch(t){return void this.onError("mapbox_error",t.message)}this.scrollToZoom||this.map.scrollZoom.disable(),this.showFullscreenButton&&this.map.addControl(new this.mapboxgl.FullscreenControl),this.map.on("error",(t=>{this.onError("mapbox_error",t.error.message)})),this.zoomControl=new this.mapboxgl.NavigationControl({showCompass:!1,showZoom:!0})}initInfoWindow(){this.infoWindowContent=this.document.createElement("div"),this.infoWindow=(0,r.xt)(this.mapboxgl),this.infoWindow.setDOMContent(this.infoWindowContent)}setBoundsByMarkers(){if(!this.map)return;if(this.map.dragPan.enable(),!this.points.length)return;if(this.activeMarker)return;const t=(0,r.YB)(this.mapboxgl,this.points);this.points.length>1?(0,r.k)(this.map,t):(this.map.setCenter(t.getCenter()),this.map.addControl(this.zoomControl))}sizeMap=()=>{(0,l.Z)(this.container,this.mapHeight),this.map.resize(),this.setBoundsByMarkers()};initMapSize(){this.setBoundsByMarkers(),this.debouncedSizeMap=(0,n.D)(this.sizeMap,250),this.debouncedSizeMap()}closeInfoWindow=()=>{this.activeMarker=null,this.infoWindow.remove()};initHandlers(){this.map.getCanvas().addEventListener("click",this.closeInfoWindow),window.addEventListener("resize",this.debouncedSizeMap)}showInfoWindow(t,i){const e=[i.coordinates.longitude,i.coordinates.latitude];this.activeMarker=t,this.infoWindowContent.innerHTML="<h3></h3><p></p>",this.infoWindowContent.querySelector("h3").textContent=i.title,this.infoWindowContent.querySelector("p").textContent=i.caption,this.infoWindow.setLngLat(e).addTo(this.map)}initMarkers(){this.points.forEach((t=>{const i=[t.coordinates.longitude,t.coordinates.latitude],e=this.document.createElement("div");e.className="wp-block-jetpack-map-marker";const o=new this.mapboxgl.Marker(e).setLngLat(i).setOffset([0,-19]).addTo(this.map);o.getElement().addEventListener("click",(()=>this.showInfoWindow(o,t))),(0,r.zb)(e,this.markerColor)}))}async init(){this.initDOM(),await this.loadMapLibraries(),this.initMap(),this.initInfoWindow(),this.initMapSize(),this.initHandlers(),this.initMarkers()}}},75867:(t,i,e)=>{"use strict";e.d(i,{Z:()=>a});var o=e(24393),n=e(96442),s=e(51321);const a=class{constructor(t){this.root=t,this.blog_id=this.root.getAttribute("data-blog-id"),this.center=JSON.parse(this.root.getAttribute("data-map-center")),this.points=JSON.parse(this.root.getAttribute("data-points")||"[]"),this.color=this.root.getAttribute("data-marker-color")||"red",this.zoom=parseFloat(this.root.getAttribute("data-zoom"))||10,this.scrollToZoom="true"===this.root.getAttribute("data-scroll-to-zoom"),this.mapStyle=this.root.getAttribute("data-map-style")||"default",this.mapHeight=this.root.getAttribute("data-map-height")||null}async init(){this.initDOM(),await this.loadLibrary(),await this.fetchKey(),this.initMapSize(),this.initMap(),this.addPoints(),this.initHandlers()}initDOM(){this.root.innerHTML='<div class="wp-block-jetpack-map__mb-container"></div>',this.container=this.root.querySelector(".wp-block-jetpack-map__mb-container")}sizeMap=()=>{(0,s.Z)(this.container,this.mapHeight)};initMapSize(){this.debouncedSizeMap=(0,o.D)(this.sizeMap,250),this.sizeMap()}initHandlers(){window.addEventListener("resize",this.debouncedSizeMap)}loadLibrary(){return new Promise((t=>{(0,n.rZ)(document,window).then((i=>{this.mapkit=i,t()}))}))}fetchKey(){return(0,n.E0)(this.mapkit,this.blog_id,window)}initMap(){const t=new this.mapkit.Coordinate(this.center.lat,this.center.lng),i=(()=>{switch(this.mapStyle){case"satellite":return this.mapkit.Map.MapTypes.Satellite;case"black_and_white":return this.mapkit.Map.MapTypes.MutedStandard;case"hybrid":return this.mapkit.Map.MapTypes.Hybrid;default:return this.mapkit.Map.MapTypes.Standard}})();this.map=new this.mapkit.Map(this.container,{center:t,mapType:i,showsMapTypeControl:!1}),this.points.length<2&&this.zoom&&this.setZoom(),this.scrollToZoom&&(this.map._allowWheelToZoom=!0)}setZoom(){this.map.cameraDistance=(0,n.ot)(this.zoom,this.center.lat)}addPoints(){const t=this.points.map((t=>{const i=new this.mapkit.Coordinate(t.coordinates.latitude,t.coordinates.longitude);return new this.mapkit.MarkerAnnotation(i,{color:this.color,title:t.title,callout:{calloutContentForAnnotation:function(t){const i=document.createElement("div");i.style.width=t.element.parentElement.offsetWidth/2+"px";const e=i.appendChild(document.createElement("div"));e.style.fontSize="17px",e.style.fontWeight="600",e.style.lineHeight="19px",e.style.marginTop="8px",e.textContent=t.title;const o=i.appendChild(document.createElement("p"));return o.style.fontSize="14px",o.style.margin="0px 0px 4px 0px",o.textContent=t.data?.caption,i}},calloutEnabled:!0,data:{caption:t.caption}})}));this.map.showItems(t)}}},85007:(t,i,e)=>{"use strict";function o(t){const i=t.ownerDocument;return{currentDoc:i,currentWindow:i.defaultView||i.parentWindow}}function n(t,i,n){let s;try{s=new URL("editor-assets",e.p)}catch(t){}if(!s)return;const a=s.href,{currentDoc:r}=o(n),l=r.getElementsByTagName("head")[0];t.forEach((t=>{const[e,o]=t.file.split("/").pop().split(".");if("css"===o){if(r.getElementById(t.id))return;const i=r.createElement("link");i.id=t.id,i.rel="stylesheet",i.href=`${a}/${e}-${t.version}.${o}`,l.appendChild(i)}if("js"===o){const n=i[t.id]?i[t.id]:null;if(r.getElementById(t.id))return n();const s=r.createElement("script");s.id=t.id,s.type="text/javascript",s.src=`${a}/${e}-${t.version}.${o}`,s.onload=n,l.appendChild(s)}}))}function s(t,i){return new Promise((e=>{const o=()=>{t[i]?e(t[i]):t.requestAnimationFrame(o)};o()}))}e.d(i,{Dz:()=>s,Pp:()=>n,bL:()=>o})},24393:(t,i,e)=>{"use strict";function o(t,i){let e;return function(...o){clearTimeout(e),e=setTimeout((()=>t.apply(this,o)),i)}}e.d(i,{D:()=>o})},47701:t=>{"use strict";t.exports=window.wp.domReady},45388:t=>{"use strict";t.exports=JSON.parse('[{"id":"mapbox-gl-js","file":"node_modules/mapbox-gl/dist/mapbox-gl.js","version":"1.13.0"},{"id":"mapbox-gl-css","file":"node_modules/mapbox-gl/dist/mapbox-gl.css","version":"1.13.0"}]')}},i={};function e(o){var n=i[o];if(void 0!==n)return n.exports;var s=i[o]={exports:{}};return t[o](s,s.exports,e),s.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var o=i.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),(()=>{"use strict";var t=e(47701),i=e.n(t),o=e(24795);i()((function(){Array.from(document.querySelectorAll(".wp-block-jetpack-map")).forEach((async t=>{try{if("mapkit"===t.getAttribute("data-map-provider")){new o.k(t).init()}else{new o.G(t).init()}}catch(t){}}))}))})()})();