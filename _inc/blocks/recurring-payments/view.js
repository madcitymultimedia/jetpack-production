!function(){var t={53857:function(t,e,r){"use strict";function n(t){if("https://subscribe.wordpress.com"===t.origin&&t.data){const e=JSON.parse(t.data);e&&"close"===e.action&&(window.removeEventListener("message",n),tb_remove())}}r.d(e,{f:function(){return o}});const o=t=>{Array.prototype.slice.call(document.querySelectorAll(t)).forEach((t=>{if("true"!==t.getAttribute("data-jetpack-memberships-button-initialized")){try{!function(t){t.addEventListener("click",(e=>{e.preventDefault();const r=t.getAttribute("href");window.scrollTo(0,0),tb_show(null,r+"&display=alternate&TB_iframe=true",null),window.addEventListener("message",n,!1),document.querySelector("#TB_window").classList.add("jetpack-memberships-modal"),window.scrollTo(0,0)}))}(t)}catch(t){console.error("Problem setting up Thickbox",t)}t.setAttribute("data-jetpack-memberships-button-initialized","true")}}))}},57836:function(t,e,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)},47701:function(t){"use strict";t.exports=window.wp.domReady}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../"}(),function(){"use strict";r(57836)}(),function(){"use strict";var t=r(47701),e=r.n(t),n=r(53857);"undefined"!=typeof window&&e()((()=>{(0,n.f)(".wp-block-jetpack-recurring-payments a"),setTimeout((()=>{const t=new URLSearchParams(window.location.search);if(t.has("recurring_payments")){var e;const r=`recurring-payments-${t.get("recurring_payments")}`;null===(e=document.getElementById(r))||void 0===e||e.click()}}),100)}))}()}();