!function(){var e={2:function(e){var t=1e3,n=60*t,o=60*n,i=24*o,a=7*i,r=365.25*i;function s(e,t,n,o){var i=t>=1.5*n;return Math.round(e/n)+" "+o+(i?"s":"")}e.exports=function(e,c){c=c||{};var l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!s)return;var c=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*r;case"weeks":case"week":case"w":return c*a;case"days":case"day":case"d":return c*i;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&isFinite(e))return c.long?function(e){var a=Math.abs(e);if(a>=i)return s(e,a,i,"day");if(a>=o)return s(e,a,o,"hour");if(a>=n)return s(e,a,n,"minute");if(a>=t)return s(e,a,t,"second");return e+" ms"}(e):function(e){var a=Math.abs(e);if(a>=i)return Math.round(e/i)+"d";if(a>=o)return Math.round(e/o)+"h";if(a>=n)return Math.round(e/n)+"m";if(a>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},816:function(e,t,n){"use strict";var o=n(339),i=n.n(o),a=n(819);const r=i()("dops:analytics");let s,c;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;const l={initialize:function(e,t,n){l.setUser(e,t),l.setSuperProps(n),l.identifyUser()},setGoogleAnalyticsEnabled:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=t},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,t){c={ID:e,username:t}},setSuperProps:function(e){s=e},assignSuperProps:function(e){s=(0,a.assign)(s,e)},mc:{bumpStat:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);r("Bumping stats %o",e)}else n="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(t),r('Bumping stat "%s" in group "%s"',t,e);return n}(e,t);l.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+n+"&t="+Math.random())},bumpStatWithPageView:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);r("Built stats %o",e)}else n="&"+encodeURIComponent(e)+"="+encodeURIComponent(t),r('Built stat "%s" in group "%s"',t,e);return n}(e,t);l.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+n+"&t="+Math.random())}},pageView:{record:function(e,t){l.tracks.recordPageView(e),l.ga.recordPageView(e,t)}},purchase:{record:function(e,t,n,o,i,a,r){l.ga.recordPurchase(e,t,n,o,i,a,r)}},tracks:{recordEvent:function(e,t){t=t||{},0===e.indexOf("akismet_")||0===e.indexOf("jetpack_")?(s&&(r("- Super Props: %o",s),t=(0,a.assign)(t,s)),r('Record event "%s" called with props %s',e,JSON.stringify(t)),window._tkq.push(["recordEvent",e,t])):r('- Event name must be prefixed by "akismet_" or "jetpack_"')},recordJetpackClick:function(e){const t="object"==typeof e?e:{target:e};l.tracks.recordEvent("jetpack_wpa_click",t)},recordPageView:function(e){l.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){r("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};l.ga.initialized||(c&&(e={userId:"u-"+c.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),l.ga.initialized=!0)},recordPageView:function(e,t){l.ga.initialize(),r("Recording Page View ~ [URL: "+e+"] [Title: "+t+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:t}))},recordEvent:function(e,t,n,o){l.ga.initialize();let i="Recording Event ~ [Category: "+e+"] [Action: "+t+"]";void 0!==n&&(i+=" [Option Label: "+n+"]"),void 0!==o&&(i+=" [Option Value: "+o+"]"),r(i),this.googleAnalyticsEnabled&&window.ga("send","event",e,t,n,o)},recordPurchase:function(e,t,n,o,i,a,r){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:o,currency:r}),window.ga("ecommerce:addItem",{id:e,name:t,sku:n,price:i,quantity:a}),window.ga("ecommerce:send")}},identifyUser:function(){c&&window._tkq.push(["identifyUser",c.ID,c.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}};t.Z=l},96:function(e,t,n){"use strict";n.d(t,{Wp:function(){return o.Wp}});var o=n(588);n(528)},528:function(e,t,n){"use strict";n(817)},588:function(e,t,n){"use strict";function o(){return"object"==typeof window&&"string"==typeof window._currentSiteType?window._currentSiteType:null}function i(){return"simple"===o()}n.d(t,{Wp:function(){return i}})},481:function(e,t){"use strict";const n={i18n_default_locale_slug:"en",mc_analytics_enabled:!0,google_analytics_enabled:!1,google_analytics_key:null};t.Z=function(e){if(e in n)return n[e];throw new Error("config key `"+e+"` does not exist")}},973:function(e,t,n){"use strict";var o=n(481),i=n(816);i.Z.setMcAnalyticsEnabled((0,o.Z)("mc_analytics_enabled")),i.Z.setGoogleAnalyticsEnabled((0,o.Z)("google_analytics_enabled"),(0,o.Z)("google_analytics_key")),t.Z=i.Z},339:function(e,t,n){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(o++,"%c"===e&&(i=o))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(330)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},330:function(e,t,n){e.exports=function(e){function t(e){let n,i,a,r=null;function s(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];if(!s.enabled)return;const a=s,r=Number(new Date),c=r-(n||r);a.diff=c,a.prev=n,a.curr=r,n=r,o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");let l=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,((e,n)=>{if("%%"===e)return"%";l++;const i=t.formatters[n];if("function"==typeof i){const t=o[l];e=i.call(a,t),o.splice(l,1),l--}return e})),t.formatArgs.call(a,o);const u=a.log||t.log;u.apply(a,o)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=o,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==r?r:(i!==t.namespaces&&(i=t.namespaces,a=t.enabled(e)),a),set:e=>{r=e}}),"function"==typeof t.init&&t.init(s),s}function o(e,n){const o=t(this.namespace+(void 0===n?":":n)+e);return o.log=this.log,o}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),i=o.length;for(n=0;n<i;n++)o[n]&&("-"===(e=o[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(2),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},819:function(e){"use strict";e.exports=window.lodash},175:function(e){"use strict";e.exports=window.wp.blockEditor},609:function(e){"use strict";e.exports=window.wp.components},333:function(e){"use strict";e.exports=window.wp.compose},818:function(e){"use strict";e.exports=window.wp.data},307:function(e){"use strict";e.exports=window.wp.element},736:function(e){"use strict";e.exports=window.wp.i18n},817:function(e){"use strict";e.exports=window.wp.plugins}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};!function(){"use strict";var e=n(307),t=n(609),o=n(736),i=n(175),a=n(333),r=n(818),s=n(96),c=n(973);const __=o.__,_x=o._x,l={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" "},u=/&(?:amp|lt|gt|quot|#39|nbsp);/g,d=e=>{if("string"!=typeof e)return e;return e.replace(u,(e=>l[e]))},p=e=>!new Set(["core/legacy-widget","core/widget-area"]).has(e);wp.hooks.addFilter("blocks.registerBlockType","widget/visibility",(function(e,t){return p(t)&&void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{conditions:{type:"object",default:{}}})),e}));const g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce(((e,n)=>{const[o,i]=n,a=" ".repeat(3*t);if(Array.isArray(i)){const n={label:d(a+o),value:o,disabled:!0},r=g(i,t+1);return e.concat([n]).concat(r)}const r={label:d(a+i),value:o};return e.concat([r])}),[])},m=e=>{const{rule:n,onDelete:o,setMajor:i,setMinor:a}=e,r=[{label:__("User","jetpack"),value:"loggedin"},{label:__("Role","jetpack"),value:"role"}],c=widget_conditions_data.taxonomy&&widget_conditions_data.taxonomy.length>1||"taxonomy"===n.major,l=[{label:__("Taxonomy","jetpack"),value:"taxonomy"}],u=[{label:__("-- Select --","jetpack"),value:""},{label:__("Category","jetpack"),value:"category"},{label:__("Author","jetpack"),value:"author"}].concat((0,s.Wp)()?[]:r).concat([{label:__("Tag","jetpack"),value:"tag"},{label:__("Date","jetpack"),value:"date"},{label:__("Page","jetpack"),value:"page"}]).concat(c?l:[]);let d=[];return n.major in widget_conditions_data&&(d=g(widget_conditions_data[n.major])),React.createElement("div",{className:"widget-vis__rule"},React.createElement("div",{className:"widget-vis__rule-major"},React.createElement("span",{className:"widget-vis__if"},_x("If","Widget Visibility: If {Rule Major [Page]} is {Rule Minor [Search results]}","jetpack")),React.createElement("div",{className:"widget-vis__select"},React.createElement(t.SelectControl,{label:__("Major Rule","jetpack"),hideLabelFromVision:!0,value:n.major,options:u,onChange:i}))),n.major&&React.createElement("div",{className:"widget-vis__rule-minor"},React.createElement("span",{className:"widget-vis__is"},_x("is","Widget Visibility: {Rule Major [Page]} is {Rule Minor [Search results]}","jetpack")),React.createElement("div",{className:"widget-vis__select"},React.createElement(t.SelectControl,{className:"widget-vis__select-multi-level",label:__("Minor Rule","jetpack"),hideLabelFromVision:!0,value:n.minor,options:d,onChange:a}))),React.createElement("div",{className:"widget-vis__delete-rule"},React.createElement(t.Button,{onClick:o,isSmall:!0,variant:"secondary"},_x("Remove","Delete this visibility rule","jetpack"))))},w=e=>({action:"show",rules:[],match_all:0,...e}),f=(0,a.createHigherOrderComponent)((n=>o=>{const{clientId:a,attributes:s,setAttributes:l,isSelected:u}=o,d=(0,e.useMemo)((()=>s.conditions||{}),[s]),g=(0,e.useMemo)((()=>d.rules||[]),[d]),f=(0,r.useSelect)((e=>{const{getBlockParents:t,getBlock:n}=e("core/block-editor"),o=t(a,!0),i=o?n(o[0]):void 0;return!i||i&&"core/widget-area"===i.name}),[a]),C=(0,e.useCallback)((()=>{c.Z.tracks.recordEvent("jetpack_widget_visibility_toggle_match_all_click"),l({conditions:{...w(d),match_all:"0"===d.match_all?"1":"0"}})}),[l,d]),y=(0,e.useCallback)((e=>l({conditions:{...w(d),action:e}})),[l,d]),_=(0,e.useCallback)((()=>{const e=[...g,{major:"",minor:""}];c.Z.tracks.recordEvent("jetpack_widget_visibility_add_new_rule_click"),l({conditions:{...w(d),rules:e}})}),[l,d,g]),h=(0,e.useCallback)((e=>{const t=[...g.slice(0,e),...g.slice(e+1)];c.Z.tracks.recordEvent("jetpack_widget_visibility_delete_rule_click"),l({conditions:{...w(d),rules:t}})}),[l,d,g]),v=(0,e.useCallback)(((e,t)=>{c.Z.tracks.recordEvent("jetpack_widget_visibility_set_major_rule_click");let n="";t in widget_conditions_data&&Array.isArray(widget_conditions_data[t])&&widget_conditions_data[t].length>0&&(n=widget_conditions_data[t][0][0]);const o=[...g.slice(0,e),{...g[e],major:t,minor:n},...g.slice(e+1)];l({conditions:{...w(d),rules:o}})}),[l,d,g]),b=(0,e.useCallback)(((e,t)=>{if(c.Z.tracks.recordEvent("jetpack_widget_visibility_set_minor_rule_click"),t&&t.includes("__HEADER__"))return;const n=[...g.slice(0,e),{...g[e],minor:t},...g.slice(e+1)];l({conditions:{...w(d),rules:n}})}),[l,d,g]);let k=null;return k=0===g.length?React.createElement(t.BaseControl,{id:"widget-vis__wrapper",className:"widget-vis__wrapper",label:__("Visibility","jetpack"),help:__("No visibility rules yet. Add at least one rule to use this feature.","jetpack")},React.createElement(t.Button,{variant:"secondary",onClick:_,className:"widget-vis__add-new-rule"},__("Add new rule","jetpack"))):React.createElement(t.BaseControl,{className:"widget-vis__wrapper",id:"widget-vis__wrapper",label:__("Visibility","jetpack")},React.createElement(t.SelectControl,{className:"widget-vis__show-hide",label:__("Action","jetpack"),hideLabelFromVision:!0,value:s.action,options:[{label:__("Show this block","jetpack"),value:"show"},{label:__("Hide this block","jetpack"),value:"hide"}],onChange:y}),g.map(((e,t)=>React.createElement(m,{key:t,rule:e,i:t,onDelete:()=>h(t),setMajor:e=>v(t,e),setMinor:e=>b(t,e)}))),g.length>1&&React.createElement(t.ToggleControl,{className:"widget-vis__match-all",label:__("Match all rules","jetpack"),checked:"1"===d.match_all,onChange:C}),React.createElement(t.Button,{variant:"secondary",onClick:_},__("Add new rule","jetpack"))),React.createElement(e.Fragment,null,React.createElement(n,o),u&&f&&p(o.name)&&React.createElement(i.InspectorAdvancedControls,null,k),u&&!f&&p(o.name)&&React.createElement(i.InspectorAdvancedControls,null,React.createElement(t.BaseControl,{id:"widget-vis__wrapper",className:"widget-vis__wrapper",label:__("Visibility","jetpack"),help:__("Please select the top level block of this widget to apply visibility rules.","jetpack")})))}),"visibilityAdvancedControls");wp.hooks.addFilter("editor.BlockEdit","widget/visibility",f)}(),window.WidgetVisibility={}.WidgetVisibility}();