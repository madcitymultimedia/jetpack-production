!function(){var e={15894:function(e,t,r){"use strict";function n(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){const t=JSON.parse(e.data);t&&"close"===t.action&&(window.removeEventListener("message",n),tb_remove())}}r.d(t,{f:function(){return o}});const o=e=>{Array.prototype.slice.call(document.querySelectorAll(e)).forEach((e=>{if("true"!==e.getAttribute("data-jetpack-memberships-button-initialized")){try{!function(e){e.addEventListener("click",(t=>{t.preventDefault();const r=e.getAttribute("href");window.scrollTo(0,0),tb_show(null,r+"&display=alternate&TB_iframe=true",null),window.addEventListener("message",n,!1),document.querySelector("#TB_window").classList.add("jetpack-memberships-modal"),window.scrollTo(0,0)}))}(e)}catch(e){console.error("Problem setting up Thickbox",e)}e.setAttribute("data-jetpack-memberships-button-initialized","true")}}))}},84178:function(e,t,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)},47701:function(e){"use strict";e.exports=window.wp.domReady}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){"use strict";r(84178)}(),function(){"use strict";var e=r(47701),t=r.n(e),n=r(15894);"undefined"!=typeof window&&t()((()=>{(0,n.f)(".wp-block-jetpack-recurring-payments a"),setTimeout((()=>{const e=new URL(window.location.href);if(e.searchParams.has("recurring_payments")&&window.history.replaceState){var t;const r=`recurring-payments-${e.searchParams.get("recurring_payments")}`;e.searchParams.delete("recurring_payments"),window.history.replaceState({},"",e),null===(t=document.getElementById(r))||void 0===t||t.click()}}),100)}))}()}();