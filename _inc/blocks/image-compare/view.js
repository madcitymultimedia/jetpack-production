!function(){var t={5630:function(t,e,i){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(i.p=window.Jetpack_Block_Assets_Base_Url.url)},7531:function(t){"use strict";t.exports=window.wp.domReady}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t+"../"}();var n={};!function(){"use strict";i(5630)}(),function(){"use strict";i.r(n);var t=i(7531);i.n(t)()((function(){const t={sliders:[],OPTIMIZATION_ACCEPTED:1,OPTIMIZATION_WAS_CONSTRAINED:2};function e(t,e){const i=this;this.image=new Image,this.loaded=!1,this.image.onload=function(){i.loaded=!0,e._onLoaded()},this.image.src=t.src,this.image.alt=t.alt||"",this.label=t.label||!1}function i(t,e){t&&t.classList.add(e)}function n(t,e){t&&t.classList.remove(e)}function o(t){return{width:parseInt(window.getComputedStyle(t).width,10),height:parseInt(window.getComputedStyle(t).height,10)}}function s(t,e){let i;if("string"==typeof e||"number"==typeof e)i=parseInt(e,10);else{const n=t.getBoundingClientRect(),o={top:n.top+document.body.scrollTop+document.documentElement.scrollTop,left:n.left+document.body.scrollLeft+document.documentElement.scrollLeft},s=t.offsetWidth;i=(function(t){let e;return e=t.pageX?t.pageX:t.touches?t.touches[0].pageX:t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,e}(e)-o.left)/s*100}return i}function r(t,e,i){let n;if("string"==typeof e||"number"==typeof e)n=parseInt(e,10);else{const o=t.getBoundingClientRect(),s={top:o.top+i.body.scrollTop+i.documentElement.scrollTop,left:o.left+i.body.scrollLeft+i.documentElement.scrollLeft},r=t.offsetHeight;n=(function(t){let e;return e=t.pageY?t.pageY:t.touches?t.touches[0].pageY:t.clientY+document.body.scrollTop+document.documentElement.scrollTop,e}(e)-s.top)/r*100}return n}const a={animate:!0,showLabels:!0,makeResponsive:!0};function l(t,i,n){let o;for(o in this.element=t,this.options={animate:!0,showLabels:!0,makeResponsive:!0,startingPosition:"50%",mode:"horizontal",callback:null},this.options)o in n&&(this.options[o]=o in a?"string"!=typeof(s=n[o])?Boolean(s):!("false"===s||""===s):n[o]);var s;2===i.length&&(this.imgBefore=new e(i[0],this),this.imgAfter=new e(i[1],this))}l.prototype={updateSlider:function(t,e){let o;o="vertical"===this.options.mode?r(this.slider,t,this.sliderParentDocument):s(this.slider,t),o=o.toFixed(2)+"%";const a=parseFloat(o),l=100-a+"%";a>0&&a<100&&(n(this.handle,"transition"),n(this.rightImage,"transition"),n(this.leftImage,"transition"),this.options.animate&&e&&(i(this.handle,"transition"),i(this.leftImage,"transition"),i(this.rightImage,"transition")),"vertical"===this.options.mode?(this.handle.style.top=o,this.leftImage.style.height=o,this.rightImage.style.height=l):(this.handle.style.left=o,this.leftImage.style.width=o,this.rightImage.style.width=l),this.sliderPosition=o)},getPosition:function(){return this.sliderPosition},displayLabel:function(t,e){const i=document.createElement("div");i.className="jx-label",i.setAttribute("tabindex",0),function(t,e){document.body.textContent?t.textContent=e:t.innerText=e}(i,e),t.appendChild(i)},setStartingPosition:function(t){this.options.startingPosition=t},calculateDims:function(t,e){const i=(n=this.imgBefore.image,{width:n.naturalWidth,height:n.naturalHeight,aspect:function(){return this.width/this.height}}).aspect();var n;return t?e=t/i:e&&(t=e*i),{width:t,height:e,ratio:i}},responsivizeIframe:function(t){return t.height<window.innerHeight?t.ratio>=1&&(this.wrapper.style.paddingTop=parseInt((window.innerHeight-t.height)/2)+"px"):t.height>window.innerHeight&&(t=this.calculateDims(0,window.innerHeight),this.wrapper.style.paddingLeft=parseInt((window.innerWidth-t.width)/2)+"px"),t},setWrapperDimensions:function(){const t=o(this.wrapper.parentNode).width,e=o(this.wrapper.parentNode).height;let i=this.calculateDims(t,e);window.location===window.parent.location||this.options.makeResponsive||(i=this.responsivizeIframe(i)),this.wrapper.style.height=parseInt(i.height)+"px",this.wrapper.style.width=parseInt(i.width)+"px"},optimizeWrapper:function(e){let i=t.OPTIMIZATION_ACCEPTED;return this.imgBefore.image.naturalWidth>=e&&this.imgAfter.image.naturalWidth>=e?(this.wrapper.style.width=e+"px",i=t.OPTIMIZATION_WAS_CONSTRAINED):this.imgAfter.image.naturalWidth<e?this.wrapper.style.width=this.imgAfter.image.naturalWidth+"px":this.wrapper.style.width=this.imgBefore.image.naturalWidth+"px",this.setWrapperDimensions(),i},_onLoaded:function(){if(this.imgBefore&&!0===this.imgBefore.loaded&&this.imgAfter&&!0===this.imgAfter.loaded){var t;if(this.wrapper=this.element,!this.wrapper||this.wrapper.querySelector(".jx-slider"))return;i(this.wrapper,"juxtapose"),this.wrapper.style.width=this.imgBefore.image.naturalWidth,this.setWrapperDimensions(),this.slider=document.createElement("div"),this.slider.className="jx-slider",this.wrapper.appendChild(this.slider),this.sliderParentDocument=this.wrapper.ownerDocument,"horizontal"!==this.options.mode&&i(this.slider,this.options.mode),this.handle=document.createElement("div"),this.handle.className="jx-handle",this.rightImage=document.createElement("div"),this.rightImage.className="jx-image jx-right",this.rightImage.appendChild(this.imgAfter.image),this.leftImage=document.createElement("div"),this.leftImage.className="jx-image jx-left",this.leftImage.appendChild(this.imgBefore.image),this.slider.appendChild(this.handle),this.slider.appendChild(this.leftImage),this.slider.appendChild(this.rightImage),this.leftArrow=document.createElement("div"),this.rightArrow=document.createElement("div"),this.control=document.createElement("div"),this.controller=document.createElement("div"),this.leftArrow.className="jx-arrow jx-left",this.rightArrow.className="jx-arrow jx-right",this.control.className="jx-control",this.controller.className="jx-controller",this.controller.setAttribute("tabindex",0),this.controller.setAttribute("role","slider"),this.controller.setAttribute("aria-valuenow",50),this.controller.setAttribute("aria-valuemin",0),this.controller.setAttribute("aria-valuemax",100),this.controller.setAttribute("aria-label",(null===(t=window.imageCompareHandle)||void 0===t?void 0:t.msg)||"Slide to compare images"),this.handle.appendChild(this.leftArrow),this.handle.appendChild(this.control),this.handle.appendChild(this.rightArrow),this.control.appendChild(this.controller),this._init()}},_init:function(){this.updateSlider(this.options.startingPosition,!1),!0===this.options.showLabels&&(this.imgBefore.label&&this.displayLabel(this.leftImage,this.imgBefore.label),this.imgAfter.label&&this.displayLabel(this.rightImage,this.imgAfter.label));const e=this;window.addEventListener("resize",(function(){e.setWrapperDimensions()})),this.slider.addEventListener("mousedown",(function(t){t.preventDefault(),e.updateSlider(t,!0);let i=!0;this.addEventListener("mousemove",(function(t){t.preventDefault(),i&&e.updateSlider(t,!1)})),this.addEventListener("mouseup",(function(t){t.preventDefault(),t.stopPropagation(),i=!1}))})),this.slider.addEventListener("touchstart",(function(t){t.preventDefault(),t.stopPropagation(),e.updateSlider(t,!0),this.addEventListener("touchmove",(function(t){t.preventDefault(),t.stopPropagation(),e.updateSlider(t,!1)}))})),this.handle.addEventListener("keydown",(function(t){const i=t.which||t.keyCode;let n=parseFloat(this.style.left);if(37===i){n-=1;const t=parseFloat(this.style.left)-1;e.updateSlider(t,!1),e.controller.setAttribute("aria-valuenow",n)}if(39===i){n+=1;const t=parseFloat(this.style.left)+1;e.updateSlider(t,!1),e.controller.setAttribute("aria-valuenow",n)}})),this.leftImage.addEventListener("keydown",(function(t){const i=t.which||t.keyCode;13!==i&&32!==i||(e.updateSlider("90%",!0),e.controller.setAttribute("aria-valuenow",91))})),this.rightImage.addEventListener("keydown",(function(t){const i=t.which||t.keyCode;13!==i&&32!==i||(e.updateSlider("10%",!0),e.controller.setAttribute("aria-valuenow",10))})),t.sliders.push(this),this.options.callback&&"function"==typeof this.options.callback&&this.options.callback(this)}},t.makeSlider=function(e,n){void 0===n&&(n=t.sliders.length);const o=e,s=o.querySelectorAll("img");if(s.length<2)return;const r={};o.getAttribute("data-animate")&&(r.animate=o.getAttribute("data-animate")),o.getAttribute("data-showlabels")&&(r.showLabels=o.getAttribute("data-showlabels")),o.getAttribute("data-startingposition")&&(r.startingPosition=o.getAttribute("data-startingposition")),o.getAttribute("data-mode")&&(r.mode=o.getAttribute("data-mode")),o.getAttribute("data-makeresponsive")&&(r.mode=o.getAttribute("data-makeresponsive"));return i(e,"juxtapose-"+n),o.innerHTML?o.innerHTML="":o.innerText="",new t.JXSlider(e,[{src:s[0].src,label:s[0].getAttribute("data-label"),alt:s[0].alt},{src:s[1].src,label:s[1].getAttribute("data-label"),alt:s[1].alt}],r)},t.scanPage=function(){const e=document.querySelectorAll(".juxtapose");for(let i=0;i<e.length;i++)t.makeSlider(e[i],i)},t.JXSlider=l,window.juxtapose=t,t.scanPage()}))}();var o=window;for(var s in n)o[s]=n[s];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})}();