(()=>{var e={63166:(e,t,o)=>{"use strict";o.d(t,{K4:()=>n});let r="";function s(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){const t=JSON.parse(e.data);if(t&&t.result&&t.result.jwt_token&&(r=t.result.jwt_token,a(r)),t&&"close"===t.action&&r)window.location.reload(!0);else if(t&&"close"===t.action){window.removeEventListener("message",s);document.getElementById("memberships-modal-window").close(),document.body.classList.remove("modal-open")}}}function n(e){window.scrollTo(0,0),document.body.classList.add("modal-open");const t=document.getElementById("memberships-modal-window");t&&document.body.removeChild(t);const o=document.createElement("dialog");o.setAttribute("id","memberships-modal-window");const r=document.createElement("iframe"),n=document.querySelector('input[name="lang"]').value;r.setAttribute("id","memberships-modal-iframe"),r.innerText="This feature requires inline frames. You have iframes disabled or your browser does not support them.",r.src=e+"&display=alternate&lang="+n+"&jwt_token="+i(),r.setAttribute("frameborder","0"),r.setAttribute("allowtransparency","true"),r.setAttribute("allowfullscreen","true"),o.classList.add("jetpack-memberships-modal"),document.body.appendChild(o),o.appendChild(r),window.addEventListener("message",s,!1),o.showModal(),window.scrollTo(0,0)}const i=function(){const e=`; ${document.cookie}`.split("; jp-premium-content-session = ");if(2===e.length)return e.pop().split(";").shift()},a=function(e){const t="."+window.location.hostname;document.cookie="jp-premium-content-session="+e+"; expires=0; path=/; domain="+t}},80425:(e,t,o)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(o.p=window.Jetpack_Block_Assets_Base_Url)},47701:e=>{"use strict";e.exports=window.wp.domReady}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{"use strict";o(80425)})(),(()=>{"use strict";var e=o(47701),t=o.n(e),r=o(63166);function s(e){const t="https://subscribe.wordpress.com/memberships/?"+new URLSearchParams(e).toString();(0,r.K4)(t)}t()((function(){const e=document.querySelector("#jp_retrieve_subscriptions_link");e&&e.addEventListener("click",(function(e){e.preventDefault(),function(){const e=document.querySelector(".wp-block-jetpack-subscriptions__container form");if(!e)return;if(!e.checkValidity())return void e.reportValidity();s({email:e.querySelector("input[type=email]").value,blog:e.dataset.blog,plan:"newsletter",source:"jetpack_retrieve_subscriptions",post_access_level:e.dataset.post_access_level,display:"alternate"})}()}));document.querySelectorAll(".wp-block-jetpack-subscriptions__container form").forEach((e=>{e.payments_attached||(e.payments_attached=!0,e.addEventListener("submit",(function(t){if(e.resubmitted)return;const o=e.querySelector("input[type=email]"),r=o?o.value:e.dataset.subscriber_email;if(!r)return;if("subscribe"===e.querySelector("input[name=action]").value){t.preventDefault();const o=e.querySelector("input[name=post_id]")?.value??"",n=e.querySelector("input[name=tier_id]")?.value??"",i=e.querySelector("input[name=app_source]")?.value??"";s({email:r,post_id:o,tier_id:n,blog:e.dataset.blog,plan:"newsletter",source:"jetpack_subscribe",app_source:i,post_access_level:e.dataset.post_access_level,display:"alternate"})}})))}))}))})()})();