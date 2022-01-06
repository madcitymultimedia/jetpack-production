!function(){var e,t,n,r,i,o,s={54166:function(e,t){"use strict";var n=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&c()}function a(){o(s)}function c(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},l=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},f=m(0,0,0,0);function d(e){return parseFloat(e)||0}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+d(e["border-"+n+"-width"])}),0)}function p(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return f;var r=l(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=d(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,a=d(r.width),c=d(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==t&&(a-=h(r,"left","right")+o),Math.round(c+s)!==n&&(c-=h(r,"top","bottom")+s)),!function(e){return e===l(e).document.documentElement}(e)){var u=Math.round(a+o)-t,p=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(p)&&(c-=p)}return m(i.left,i.top,a,c)}var v="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof l(e).SVGGraphicsElement}:function(e){return e instanceof l(e).SVGElement&&"function"==typeof e.getBBox};function b(e){return r?v(e)?function(e){var t=e.getBBox();return m(0,0,t.width,t.height)}(e):p(e):f}function m(e,t,n,r){return{x:e,y:t,width:n,height:r}}var w=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=b(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),y=function(e,t){var n,r,i,o,s,a,c,l=(r=(n=t).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),u(c,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),c);u(this,{target:e,contentRect:l})},_=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new w(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new y(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),g="undefined"!=typeof WeakMap?new WeakMap:new n,E=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new _(t,n,this);g.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){E.prototype[e]=function(){var t;return(t=g.get(this))[e].apply(t,arguments)}}));var O=void 0!==i.ResizeObserver?i.ResizeObserver:E;t.Z=O},44890:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(92819);async function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".swiper-container",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o={effect:"slide",grabCursor:!0,init:!0,initialSlide:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{bulletElement:"button",clickable:!0,el:".swiper-pagination",type:"bullets"},preventClicks:!1,preventClicksPropagation:!1,releaseFormElements:!1,setWrapperSize:!0,threshold:5,touchStartPreventDefault:!1,on:(0,r.mapValues)(i,(e=>function(){e(this)}))},[{default:s}]=await Promise.all([Promise.all([n.e(263),n.e(390)]).then(n.t.bind(n,16402,23)),Promise.all([n.e(263),n.e(390)]).then(n.bind(n,21130))]);return new s(e,(0,r.merge)({},o,t))}},10099:function(e,t,n){"use strict";n.d(t,{HV:function(){return c},UA:function(){return s},Wj:function(){return u},$m:function(){return a}});var r=n(81975),i=n(92819);const o="wp-block-jetpack-slideshow_autoplay-paused";function s(e){a(e),c(e);document.querySelector("body").dispatchEvent(new Event("jetpack-lazy-images-load")),e.el.querySelector(".wp-block-jetpack-slideshow_button-pause").addEventListener("click",(function(){e.el&&(e.el.classList.contains(o)?(e.el.classList.remove(o),e.autoplay.start(),this.setAttribute("aria-label","Pause Slideshow")):(e.el.classList.add(o),e.autoplay.stop(),this.setAttribute("aria-label","Play Slideshow")))}))}function a(e){if(!e||!e.el)return;const t=e.el.querySelector('.swiper-slide[data-swiper-slide-index="0"] img');if(!t)return;const n=t.clientWidth/t.clientHeight,r=Math.max(Math.min(n,1.7777777777777777),1),i="undefined"!=typeof window?.8*window.innerHeight:600,o=Math.min(e.width/r,i),s=`${Math.floor(o)}px`,a=`${Math.floor(o/2)}px`;e.el.classList.add("wp-swiper-initialized"),e.wrapperEl.style.height=s,e.el.querySelector(".wp-block-jetpack-slideshow_button-prev").style.top=a,e.el.querySelector(".wp-block-jetpack-slideshow_button-next").style.top=a}function c(e){(0,i.forEach)(e.slides,((t,n)=>{t.setAttribute("aria-hidden",n===e.activeIndex?"false":"true"),n===e.activeIndex?t.setAttribute("tabindex","-1"):t.removeAttribute("tabindex")})),function(e){const t=e.slides[e.activeIndex];if(!t)return;const n=t.getElementsByTagName("FIGCAPTION")[0],i=t.getElementsByTagName("IMG")[0];e.a11y.liveRegion&&(e.a11y.liveRegion[0].innerHTML=n?n.innerHTML:(0,r.escapeHTML)(i.alt))}(e)}function u(e){(0,i.forEach)(e.pagination.bullets,(t=>{t.addEventListener("click",(()=>{const t=e.slides[e.realIndex];setTimeout((()=>{t.focus()}),500)}))}))}},57836:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},92819:function(e){"use strict";e.exports=window.lodash},47701:function(e){"use strict";e.exports=window.wp.domReady},81975:function(e){"use strict";e.exports=window.wp.escapeHtml}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return s[e].call(n.exports,n,n.exports,c),n.exports}c.m=s,c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);c.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return n[e]}}));return o.default=function(){return n},c.d(i,o),i},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return(390===e?"swiper":e)+".js?minify=false&ver="+{263:"e2bd6a6d8a0f05f43474",390:"87699145e1e11e92e952"}[e]},c.miniCssF=function(e){return"swiper.css?minify=false&ver=4f0a26962ac03729a198"},function(){if(!c.miniCssF)throw new Error("MiniCSSWithRTLPlugin was loaded before MiniCSSExtractPlugin");var e;c.miniCssF=(e=c.miniCssF,function(t){var n="rtl"===document.dir,r=e(t);return n?r.replace(/\.css(?:$|\?)/,".rtl$&"):r})}(),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="Jetpack:",c.l=function(e,t,i,o){if(n[e])n[e].push(t);else{var s,a;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==r+i){s=f;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.setAttribute("data-webpack",r+i),s.src=e),n[e]=[t];var d=function(t,r){s.onerror=s.onload=null,clearTimeout(h);var i=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(r)})),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),a&&document.head.appendChild(s)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"}(),i=function(e){return new Promise((function(t,n){var r=c.miniCssF(e),i=c.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=(s=n[r]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===e||i===t))return s}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var s;if((i=(s=o[r]).getAttribute("data-href"))===e||i===t)return s}}(r,i))return t();!function(e,t,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,i.parentNode.removeChild(i),r(c)}},i.href=t,document.head.appendChild(i)}(e,i,t,n)}))},o={72:0},c.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{390:1}[e]&&t.push(o[e]=i(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={72:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(390!=t){var i=new Promise((function(n,i){r=e[t]=[n,i]}));n.push(r[2]=i);var o=c.p+c.u(t),s=new Error;c.l(o,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}}),"chunk-"+t,t)}else e[t]=0};var t=function(t,n){var r,i,o=n[0],s=n[1],a=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)c.o(s,r)&&(c.m[r]=s[r]);if(a)a(c)}for(t&&t(n);u<o.length;u++)i=o[u],c.o(e,i)&&e[i]&&e[i][0](),e[o[u]]=0},n=self.webpackChunkJetpack=self.webpackChunkJetpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){"use strict";c(57836)}(),function(){"use strict";var e=c(92819),t=c(47701),n=c.n(t),r=c(54166),i=c(44890),o=c(10099);"undefined"!=typeof window&&n()((function(){const t=document.getElementsByClassName("wp-block-jetpack-slideshow");(0,e.forEach)(t,(e=>{if("true"===e.getAttribute("data-jetpack-block-initialized"))return;const{autoplay:t,delay:n,effect:s}=e.dataset,a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=t&&!a,u=e.getElementsByClassName("swiper-container")[0];let l=null;(0,i.Z)(u,{autoplay:!!c&&{delay:1e3*n,disableOnInteraction:!1},effect:s,init:!0,initialSlide:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0}},{init:o.UA,imagesReady:o.$m,paginationRender:o.Wj,transitionEnd:o.HV}).then((e=>{new r.Z((()=>{l&&(cancelAnimationFrame(l),l=null),l=requestAnimationFrame((()=>{(0,o.$m)(e),e.update()}))})).observe(e.el)})).catch((()=>{e.querySelector(".wp-block-jetpack-slideshow_container").classList.add("wp-swiper-initialized")})),e.setAttribute("data-jetpack-block-initialized","true")}))}))}()}();