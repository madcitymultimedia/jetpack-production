(()=>{var e={47701:e=>{"use strict";e.exports=window.wp.domReady}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(47701);o.n(e)()((function(){const e=document.querySelector(".wp-block-jetpack-cookie-consent"),t=e.querySelector("span"),o=parseInt(t.textContent),r=new Date(Date.now()+864e5*o),n=e.querySelector(".wp-block-button a");n.setAttribute("role","button"),n.setAttribute("href","javascript:void(0)"),n.addEventListener("click",(function(){try{document.cookie=`eucookielaw=${r.getTime()};path=/;expires=${r.toGMTString()}`,e.classList.add("is-dismissed"),e.addEventListener("transitionend",(()=>e.remove()));const t=new Event("eucookielaw-dismissed");document.dispatchEvent(t)}catch(e){}}))}))})()})();