!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){function t(t){for(var n,r,a=t[0],i=t[1],l=0,c=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);c.length;)c.shift()()}var n={},r={16:0},o={16:0};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{29:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="rtl"===document.dir?({29:"vendors~map/mapbox-gl"}[e]||e)+"."+{29:"f15d5554f355400359d0"}[e]+".rtl.css":({29:"vendors~map/mapbox-gl"}[e]||e)+"."+{29:"f15d5554f355400359d0"}[e]+".css",i=a.p+o,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var s=(p=l[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===o||s===i))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){var p;if((s=(p=u[c]).getAttribute("data-href"))===o||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.setAttribute("data-webpack",!0),f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({29:"vendors~map/mapbox-gl"}[e]||e)+"."+{29:"f15d5554f355400359d0"}[e]+".js"}(e);var s=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;return a(a.s=431)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},114:function(e,t,n){e.exports=n.p+"images/map-theme_default-2ceb449b599dbcbe2a90fead5a5f3824.jpg"},115:function(e,t,n){e.exports=n.p+"images/map-theme_black_and_white-1ead5946ca104d83676d6e3410e1d733.jpg"},116:function(e,t,n){e.exports=n.p+"images/map-theme_satellite-c74dc129bda9502fb0fb362bb627577e.jpg"},117:function(e,t,n){e.exports=n.p+"images/map-theme_terrain-2b6e6c1c8d09cbdc58a4c0653be1a6e3.jpg"},119:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(12),i=n.n(a),l=n(16),c=n.n(l),s=n(13),u=n.n(s),p=n(14),f=n.n(p),d=n(6),m=n.n(d),b=n(15),h=n.n(b),v=n(3),y=n.n(v),g=n(0),k=n(1),w=n(4),j=n(2),x=(n(183),function(e){function t(){var e,n;i()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(o))),y()(m()(n),"handleClick",(function(){(0,n.props.onClick)(m()(n))})),y()(m()(n),"getPoint",(function(){var e=n.props.point;return[e.coordinates.longitude,e.coordinates.latitude]})),n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.renderMarker()}},{key:"componentWillUnmount",value:function(){this.marker&&this.marker.remove()}},{key:"componentDidUpdate",value:function(){this.renderMarker()}},{key:"renderMarker",value:function(){var e=this.props,t=e.map,n=e.point,r=e.mapboxgl,o=e.markerColor,a=this.handleClick,i=[n.coordinates.longitude,n.coordinates.latitude],l=this.marker?this.marker.getElement():document.createElement("div");this.marker?this.marker.setLngLat(i):(l.className="wp-block-jetpack-map-marker",this.marker=new r.Marker(l).setLngLat(i).setOffset([0,-19]).addTo(t),this.marker.getElement().addEventListener("click",a)),l.innerHTML='<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill-rule="evenodd"><path id="d" d="m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z" fill="'+o+'" mask="url(#c)"/></g></svg>'}},{key:"render",value:function(){return null}}]),t}(g.Component));x.defaultProps={point:{},map:null,markerColor:"#000000",mapboxgl:null,onClick:function(){}};var O=x,M=function(e){function t(){var e,n;i()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(o))),y()(m()(n),"closeClick",(function(){n.props.unsetActiveMarker()})),n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.props.mapboxgl;this.el=document.createElement("DIV"),this.infowindow=new e.Popup({closeButton:!0,closeOnClick:!1,offset:{left:[0,0],top:[0,5],right:[0,0],bottom:[0,-40]}}),this.infowindow.setDOMContent(this.el),this.infowindow.on("close",this.closeClick)}},{key:"componentDidUpdate",value:function(e){this.props.activeMarker!==e.activeMarker&&(this.props.activeMarker?this.openWindow():this.closeWindow())}},{key:"render",value:function(){return this.el?Object(g.createPortal)(this.props.children,this.el):null}},{key:"openWindow",value:function(){var e=this.props,t=e.map,n=e.activeMarker;this.infowindow.setLngLat(n.getPoint()).addTo(t)}},{key:"closeWindow",value:function(){this.infowindow.remove()}}]),t}(g.Component);M.defaultProps={unsetActiveMarker:function(){},activeMarker:null,map:null,mapboxgl:null};var C=M;var _=function(e){function t(){var e;return i()(this,t),e=u()(this,f()(t).apply(this,arguments)),y()(m()(e),"onMarkerClick",(function(t){var n=e.props.onMarkerClick;e.setState({activeMarker:t}),n()})),y()(m()(e),"onMapClick",(function(){e.setState({activeMarker:null})})),y()(m()(e),"clearCurrentMarker",(function(){e.setState({activeMarker:null})})),y()(m()(e),"updateActiveMarker",(function(t){var n=e.props.points,r=e.state.activeMarker.props.index,o=n.slice(0);Object(w.assign)(o[r],t),e.props.onSetPoints(o)})),y()(m()(e),"deleteActiveMarker",(function(){var t=e.props.points,n=e.state.activeMarker.props.index,r=t.slice(0);r.splice(n,1),e.props.onSetPoints(r),e.setState({activeMarker:null})})),y()(m()(e),"sizeMap",(function(){var t=e.props.mapHeight,n=e.state.map,r=e.mapRef.current;if(t)r.style.height=t+"px";else{var o=r.offsetWidth,a=window.location.search.indexOf("map-block-counter")>-1?window.innerHeight:.8*window.innerHeight,i=Math.min(o*(3/4),a);r.style.height=i+"px"}n.resize(),e.setBoundsByMarkers()})),y()(m()(e),"updateZoom",(function(){var t=e.props.zoom,n=e.state.map;n.setZoom(t),n.updateZoom(t)})),y()(m()(e),"setBoundsByMarkers",(function(){var t=e.props,n=t.admin,r=t.onSetMapCenter,o=t.onSetZoom,a=t.points,i=t.zoom,l=e.state,c=l.map,s=l.activeMarker,u=l.mapboxgl,p=l.zoomControl,f=l.boundsSetProgrammatically;if(c&&(a.length&&n?c.dragPan.disable():c.dragPan.enable(),a.length&&!s)){var d=new u.LngLatBounds;if(a.forEach((function(e){d.extend([e.coordinates.longitude,e.coordinates.latitude])})),r(d.getCenter()),a.length>1){c.fitBounds(d,{padding:{top:80,bottom:80,left:40,right:40}}),e.setState({boundsSetProgrammatically:!0});try{c.removeControl(p)}catch(m){}}else{if(c.setCenter(d.getCenter()),f){c.setZoom(12),o(12)}else c.setZoom(parseInt(i,10));c.addControl(p),e.setState({boundsSetProgrammatically:!1})}}})),y()(m()(e),"scriptsLoaded",(function(){var t=e.props,n=t.mapCenter,r=t.points;e.setState({loaded:!0}),r.length,e.initMap(n)})),y()(m()(e),"googlePoint2Mapbox",(function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?e:{lat:e.latitude||0,lng:e.longitude||0}})),e.state={map:null,fit_to_bounds:!1,loaded:!1,mapboxgl:null},e.mapRef=Object(g.createRef)(),e.debouncedSizeMap=Object(w.debounce)(e.sizeMap,250),e}return h()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.points,r=t.admin,o=t.children,a=t.markerColor,i=this.state,l=i.map,c=i.activeMarker,s=i.mapboxgl,u=this.onMarkerClick,p=this.deleteActiveMarker,f=this.updateActiveMarker,d=Object(w.get)(c,"props.point")||{},m=d.title,b=d.caption,h=g.Children.map(o,(function(e){if("AddPoint"===Object(w.get)(e,"props.tagName"))return e})),v=l&&s&&n.map((function(e,t){return Object(g.createElement)(O,{key:t,point:e,index:t,map:l,mapboxgl:s,markerColor:a,onClick:u})})),y=s&&Object(g.createElement)(C,{activeMarker:c,map:l,mapboxgl:s,unsetActiveMarker:function(){return e.setState({activeMarker:null})}},c&&r&&Object(g.createElement)(g.Fragment,null,Object(g.createElement)(j.TextControl,{label:Object(k.__)("Marker Title","jetpack"),value:m,onChange:function(e){return f({title:e})}}),Object(g.createElement)(j.TextareaControl,{className:"wp-block-jetpack-map__marker-caption",label:Object(k.__)("Marker Caption","jetpack"),value:b,rows:"2",tag:"textarea",onChange:function(e){return f({caption:e})}}),Object(g.createElement)(j.Button,{onClick:p,className:"wp-block-jetpack-map__delete-btn"},Object(g.createElement)(j.Dashicon,{icon:"trash",size:"15"})," ",Object(k.__)("Delete Marker","jetpack"))),c&&!r&&Object(g.createElement)(g.Fragment,null,Object(g.createElement)("h3",null,m),Object(g.createElement)("p",null,b)));return Object(g.createElement)(g.Fragment,null,Object(g.createElement)("div",{className:"wp-block-jetpack-map__gm-container",ref:this.mapRef},v),y,h)}},{key:"componentDidMount",value:function(){this.props.apiKey&&this.loadMapLibraries()}},{key:"componentWillUnmount",value:function(){this.debouncedSizeMap.cancel()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.admin,r=t.apiKey,o=t.children,a=t.points,i=t.mapStyle,l=t.mapDetails,c=t.scrollToZoom,s=t.showFullscreenButton,u=this.state,p=u.map,f=u.fullscreenControl;r&&r.length>0&&r!==e.apiKey&&this.loadMapLibraries(),o!==e.children&&!1!==o&&this.clearCurrentMarker(),a!==e.points&&this.setBoundsByMarkers(),a.length!==e.points.length&&this.clearCurrentMarker(),i===e.mapStyle&&l===e.mapDetails||p.setStyle(this.getMapStyle()),c!==e.scrollToZoom&&(c?p.scrollZoom.enable():p.scrollZoom.disable()),s!==e.showFullscreenButton&&(s?(p.addControl(f),n&&f._fullscreenButton&&(f._fullscreenButton.disabled=!0)):p.removeControl(f))}},{key:"getMapStyle",value:function(){var e=this.props;return function(e,t){return{default:{details:"mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in",no_details:"mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo"},black_and_white:{details:"mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434",no_details:"mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4"},satellite:{details:"mapbox://styles/mapbox/satellite-streets-v10",no_details:"mapbox://styles/mapbox/satellite-v9"},terrain:{details:"mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b",no_details:"mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha"}}[e][t?"details":"no_details"]}(e.mapStyle,e.mapDetails)}},{key:"getMapType",value:function(){switch(this.props.mapStyle){case"satellite":return"HYBRID";case"terrain":return"TERRAIN";case"black_and_white":default:return"ROADMAP"}}},{key:"loadMapLibraries",value:function(){var e=this,t=this.props.apiKey;Promise.all([n.e(29).then(n.t.bind(null,464,7)),n.e(29).then(n.t.bind(null,465,7))]).then((function(n){var r=o()(n,1)[0].default;r.accessToken=t,e.setState({mapboxgl:r},e.scriptsLoaded)}))}},{key:"initMap",value:function(e){var t=this,n=this.state.mapboxgl,r=this.props,o=r.zoom,a=r.onMapLoaded,i=r.onError,l=r.scrollToZoom,c=r.showFullscreenButton,s=r.admin,u=null;try{u=new n.Map({container:this.mapRef.current,style:this.getMapStyle(),center:this.googlePoint2Mapbox(e),zoom:parseInt(o,10),pitchWithRotate:!1,attributionControl:!1,dragRotate:!1})}catch(d){return void i("mapbox_error",d.message)}l||u.scrollZoom.disable();var p=new n.FullscreenControl;u.on("error",(function(e){i("mapbox_error",e.error.message)}));var f=new n.NavigationControl({showCompass:!1,showZoom:!0});u.on("zoomend",(function(){t.props.onSetZoom(u.getZoom())})),u.on("moveend",(function(){var e=t.props,n=e.onSetMapCenter;e.points.length<1&&n(u.getCenter())})),u.getCanvas().addEventListener("click",this.onMapClick),this.setState({map:u,zoomControl:f,fullscreenControl:p},(function(){t.debouncedSizeMap(),u.addControl(f),c&&(u.addControl(p),s&&p._fullscreenButton&&(p._fullscreenButton.disabled=!0)),t.mapRef.current.addEventListener("alignmentChanged",t.debouncedSizeMap),u.resize(),a(),t.setState({loaded:!0}),window.addEventListener("resize",t.debouncedSizeMap)}))}}]),t}(g.Component);_.defaultProps={points:[],mapStyle:"default",zoom:13,onSetZoom:function(){},onSetMapCenter:function(){},onMapLoaded:function(){},onMarkerClick:function(){},onError:function(){},markerColor:"red",apiKey:null,mapCenter:{}};t.a=_},12:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},122:function(e,t,n){var r=n(74);e.exports=function(e){if(Array.isArray(e))return r(e)}},123:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},124:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},126:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},127:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},13:function(e,t,n){var r=n(126),o=n(6);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},14:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},15:function(e,t,n){var r=n(127);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},16:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},183:function(e,t,n){},184:function(e,t,n){},2:function(e,t){!function(){e.exports=this.wp.components}()},21:function(e,t,n){var r=n(122),o=n(123),a=n(75),i=n(124);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},3:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n(1),a=n(114),i=n.n(a),l=n(115),c=n.n(l),s=n(116),u=n.n(s),p=n(117),f=n.n(p),d={name:"map",prefix:"jetpack",title:Object(o.__)("Map","jetpack"),icon:Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},Object(r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(r.createElement)("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"})),category:"embed",keywords:[Object(o._x)("maps","block search term","jetpack"),Object(o._x)("location","block search term","jetpack"),Object(o._x)("navigation","block search term","jetpack")],description:Object(o.__)("Add an interactive map showing one or more locations.","jetpack"),attributes:{align:{type:"string"},points:{type:"array",default:[]},mapDetails:{type:"boolean",default:!0},zoom:{type:"integer",default:13},mapCenter:{type:"object",default:{longitude:-122.41941550000001,latitude:37.7749295}},markerColor:{type:"string",default:"red"},preview:{type:"boolean",default:!1},scrollToZoom:{type:"boolean",default:!1},mapHeight:{type:"integer"},showFullscreenButton:{type:"boolean",default:!0}},supports:{defaultStylePicker:!1,html:!1},styles:[{name:"default",label:Object(o.__)("Basic","jetpack"),preview:i.a,isDefault:!0},{name:"black_and_white",label:Object(o.__)("Black and white","jetpack"),preview:c.a},{name:"satellite",label:Object(o.__)("Satellite","jetpack"),preview:u.a},{name:"terrain",label:Object(o.__)("Terrain","jetpack"),preview:f.a}],validAlignments:["center","wide","full"],markerIcon:Object(r.createElement)("svg",{width:"14",height:"20",viewBox:"0 0 14 20",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},Object(r.createElement)("g",{id:"outline-add_location-24px",transform:"translate(-5 -2)"},Object(r.createElement)("polygon",{id:"Shape",points:"0 0 24 0 24 24 0 24"}),Object(r.createElement)("path",{d:"M12,2 C8.14,2 5,5.14 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.14 15.86,2 12,2 Z M7,9 C7,6.24 9.24,4 12,4 C14.76,4 17,6.24 17,9 C17,11.88 14.12,16.19 12,18.88 C9.92,16.21 7,11.85 7,9 Z M13,6 L11,6 L11,8 L9,8 L9,10 L11,10 L11,12 L13,12 L13,10 L15,10 L15,8 L13,8 L13,6 Z",id:"Shape",fill:"#000",fillRule:"nonzero"})))),example:{attributes:{preview:!0}}}},4:function(e,t){!function(){e.exports=this.lodash}()},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(81),o=n.n(r),a=n(4);function i(e,t){var n=function(e,t){var n=!0,r=!1,i=void 0;try{for(var l,c=new o.a(t).values()[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var s=l.value;if(-1!==s.indexOf("is-style-")){var u=s.substring(9),p=Object(a.find)(e,{name:u});if(p)return p}}}catch(f){r=!0,i=f}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return Object(a.find)(e,"isDefault")}(e,t);return n?n.name:null}},431:function(e,t,n){n(53),e.exports=n(463)},463:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),a=n(55),i=n.n(a),l=(n(184),n(119)),c=n(37),s=n(21),u=n.n(s),p=n(12),f=n.n(p),d=n(16),m=n.n(d),b=n(4),h=n(0),v=function(){function e(){f()(this,e)}return m()(e,[{key:"blockIterator",value:function(e,t){var n=this;t.forEach((function(t){n.initializeFrontendReactBlocks(t.component,t.options,e)}))}},{key:"initializeFrontendReactBlocks",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.settings,o=r.attributes,a=r.name,i=r.prefix,l=t.selector,c=i&&i.length?"".concat(i,"/").concat(a):a,s=".wp-block-".concat(c.replace("/","-")),u=n.querySelectorAll(s),p=!0,f=!1,d=void 0;try{for(var m,v=u[Symbol.iterator]();!(p=(m=v.next()).done);p=!0){var y=m.value;if("true"!==y.getAttribute("data-jetpack-block-initialized")){var g=this.extractAttributesFromContainer(y,o);Object(b.assign)(g,t.props);var k=this.extractChildrenFromContainer(y),w=Object(h.createElement)(e,g,k);Object(h.render)(w,l?y.querySelector(l):y),y.setAttribute("data-jetpack-block-initialized",!0)}}}catch(j){f=!0,d=j}finally{try{p||null==v.return||v.return()}finally{if(f)throw d}}}},{key:"extractAttributesFromContainer",value:function(e,t){var n={};for(var r in t){var o=t[r],a="data-"+Object(b.kebabCase)(r);if(n[r]=e.getAttribute(a),"boolean"===o.type&&(n[r]="false"!==n[r]&&!!n[r]),"array"===o.type||"object"===o.type)try{n[r]=JSON.parse(n[r])}catch(i){n[r]=null}}return n}},{key:"extractChildrenFromContainer",value:function(e){return u()(e.childNodes).map((function(e){for(var t={},n=0;n<e.attributes.length;n++){var r=e.attributes[n];t[r.nodeName]=r.nodeValue}return t.dangerouslySetInnerHTML={__html:e.innerHTML},Object(h.createElement)(e.tagName.toLowerCase(),t)}))}}]),e}(),y=n(43);i()((function(){(new v).blockIterator(document,[{component:l.a,options:{settings:o()({},c.a,{attributes:o()({},c.a.attributes,{mapStyle:Object(y.a)(c.a.styles,c.a.className),apiKey:{type:"string",default:""}})})}}])}))},47:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},53:function(e,t,n){"use strict";n.r(t);n(47)},55:function(e,t){!function(){e.exports=this.wp.domReady}()},6:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},7:function(e,t,n){var r=n(3);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},74:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},75:function(e,t,n){var r=n(74);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},81:function(e,t){!function(){e.exports=this.wp.tokenList}()},88:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},89:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}},9:function(e,t,n){var r=n(88),o=n(89),a=n(75),i=n(90);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},90:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}));