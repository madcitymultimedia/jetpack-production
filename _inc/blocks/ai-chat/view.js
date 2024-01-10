/*! For license information please see view.js.LICENSE.txt */
(()=>{var e={84788:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2378);let a,o,i,c;const s=/<(\/)?(\w+)\s*(\/)?>/g;function u(e,t,r,n,a){return{element:e,tokenStart:t,tokenLength:r,prevOffset:n,leadingTextStart:a,children:[]}}const l=e=>{const t="object"==typeof e,r=t&&Object.values(e);return t&&r.length&&r.every((e=>(0,n.isValidElement)(e)))};function d(e){const t=function(){const e=s.exec(a);if(null===e)return["no-more-tokens"];const t=e.index,[r,n,o,i]=e,c=r.length;if(i)return["self-closed",o,t,c];if(n)return["closer",o,t,c];return["opener",o,t,c]}(),[r,l,d,m]=t,h=c.length,b=d>o?o:null;if(!e[l])return p(),!1;switch(r){case"no-more-tokens":if(0!==h){const{leadingTextStart:e,tokenStart:t}=c.pop();i.push(a.substr(e,t))}return p(),!1;case"self-closed":return 0===h?(null!==b&&i.push(a.substr(b,d-b)),i.push(e[l]),o=d+m,!0):(f(u(e[l],d,m)),o=d+m,!0);case"opener":return c.push(u(e[l],d,m,d+m,b)),o=d+m,!0;case"closer":if(1===h)return function(e){const{element:t,leadingTextStart:r,prevOffset:o,tokenStart:s,children:u}=c.pop(),l=e?a.substr(o,e-o):a.substr(o);l&&u.push(l);null!==r&&i.push(a.substr(r,s-r));i.push((0,n.cloneElement)(t,null,...u))}(d),o=d+m,!0;const t=c.pop(),r=a.substr(t.prevOffset,d-t.prevOffset);t.children.push(r),t.prevOffset=d+m;const s=u(t.element,t.tokenStart,t.tokenLength,d+m);return s.children=t.children,f(s),o=d+m,!0;default:return p(),!1}}function p(){const e=a.length-o;0!==e&&i.push(a.substr(o,e))}function f(e){const{element:t,tokenStart:r,tokenLength:o,prevOffset:i,children:s}=e,u=c[c.length-1],l=a.substr(u.prevOffset,r-u.prevOffset);l&&u.children.push(l),u.children.push((0,n.cloneElement)(t,null,...s)),u.prevOffset=i||r+o}var m=(e,t)=>{if(a=e,o=0,i=[],c=[],s.lastIndex=0,!l(t))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do{}while(d(t));return(0,n.createElement)(n.Fragment,null,...i)};t.default=m},51806:(e,t,r)=>{"use strict";var n=r(25877);Object.defineProperty(t,"__esModule",{value:!0});var a={createInterpolateElement:!0,Platform:!0,renderToString:!0,RawHTML:!0};Object.defineProperty(t,"Platform",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"RawHTML",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"createInterpolateElement",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"renderToString",{enumerable:!0,get:function(){return l.default}});var o=n(r(84788)),i=r(2378);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var c=r(29115);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var s=r(82986);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var u=n(r(82912)),l=n(r(51962)),d=n(r(74745))},82912:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={OS:"web",select:e=>"web"in e?e.web:e.default,isWeb:!0};t.default=r},74745:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({children:e,...t}){let r="";return n.Children.toArray(e).forEach((e=>{"string"==typeof e&&""!==e.trim()&&(r+=e)})),(0,n.createElement)("div",{dangerouslySetInnerHTML:{__html:r},...t})};var n=r(2378)},29115:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createPortal",{enumerable:!0,get:function(){return n.createPortal}}),Object.defineProperty(t,"createRoot",{enumerable:!0,get:function(){return a.createRoot}}),Object.defineProperty(t,"findDOMNode",{enumerable:!0,get:function(){return n.findDOMNode}}),Object.defineProperty(t,"flushSync",{enumerable:!0,get:function(){return n.flushSync}}),Object.defineProperty(t,"hydrate",{enumerable:!0,get:function(){return n.hydrate}}),Object.defineProperty(t,"hydrateRoot",{enumerable:!0,get:function(){return a.hydrateRoot}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return n.render}}),Object.defineProperty(t,"unmountComponentAtNode",{enumerable:!0,get:function(){return n.unmountComponentAtNode}});var n=r(91850),a=r(51516)},2378:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Children",{enumerable:!0,get:function(){return n.Children}}),Object.defineProperty(t,"Component",{enumerable:!0,get:function(){return n.Component}}),Object.defineProperty(t,"Fragment",{enumerable:!0,get:function(){return n.Fragment}}),Object.defineProperty(t,"StrictMode",{enumerable:!0,get:function(){return n.StrictMode}}),Object.defineProperty(t,"Suspense",{enumerable:!0,get:function(){return n.Suspense}}),Object.defineProperty(t,"cloneElement",{enumerable:!0,get:function(){return n.cloneElement}}),t.concatChildren=function(...e){return e.reduce(((e,t,r)=>(n.Children.forEach(t,((t,a)=>{t&&"string"!=typeof t&&(t=(0,n.cloneElement)(t,{key:[r,a].join()})),e.push(t)})),e)),[])},Object.defineProperty(t,"createContext",{enumerable:!0,get:function(){return n.createContext}}),Object.defineProperty(t,"createElement",{enumerable:!0,get:function(){return n.createElement}}),Object.defineProperty(t,"createRef",{enumerable:!0,get:function(){return n.createRef}}),Object.defineProperty(t,"forwardRef",{enumerable:!0,get:function(){return n.forwardRef}}),Object.defineProperty(t,"isValidElement",{enumerable:!0,get:function(){return n.isValidElement}}),Object.defineProperty(t,"lazy",{enumerable:!0,get:function(){return n.lazy}}),Object.defineProperty(t,"memo",{enumerable:!0,get:function(){return n.memo}}),Object.defineProperty(t,"startTransition",{enumerable:!0,get:function(){return n.startTransition}}),t.switchChildrenNodeName=function(e,t){return e&&n.Children.map(e,((e,r)=>{if("string"==typeof e?.valueOf())return(0,n.createElement)(t,{key:r},e);const{children:a,...o}=e.props;return(0,n.createElement)(t,{key:r,...o},a)}))},Object.defineProperty(t,"useCallback",{enumerable:!0,get:function(){return n.useCallback}}),Object.defineProperty(t,"useContext",{enumerable:!0,get:function(){return n.useContext}}),Object.defineProperty(t,"useDebugValue",{enumerable:!0,get:function(){return n.useDebugValue}}),Object.defineProperty(t,"useDeferredValue",{enumerable:!0,get:function(){return n.useDeferredValue}}),Object.defineProperty(t,"useEffect",{enumerable:!0,get:function(){return n.useEffect}}),Object.defineProperty(t,"useId",{enumerable:!0,get:function(){return n.useId}}),Object.defineProperty(t,"useImperativeHandle",{enumerable:!0,get:function(){return n.useImperativeHandle}}),Object.defineProperty(t,"useInsertionEffect",{enumerable:!0,get:function(){return n.useInsertionEffect}}),Object.defineProperty(t,"useLayoutEffect",{enumerable:!0,get:function(){return n.useLayoutEffect}}),Object.defineProperty(t,"useMemo",{enumerable:!0,get:function(){return n.useMemo}}),Object.defineProperty(t,"useReducer",{enumerable:!0,get:function(){return n.useReducer}}),Object.defineProperty(t,"useRef",{enumerable:!0,get:function(){return n.useRef}}),Object.defineProperty(t,"useState",{enumerable:!0,get:function(){return n.useState}}),Object.defineProperty(t,"useSyncExternalStore",{enumerable:!0,get:function(){return n.useSyncExternalStore}}),Object.defineProperty(t,"useTransition",{enumerable:!0,get:function(){return n.useTransition}});var n=r(99196)},51962:(e,t,r)=>{"use strict";var n=r(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.hasPrefix=y,t.renderAttributes=_,t.renderComponent=x,t.renderElement=S,t.renderNativeComponent=P,t.renderStyle=M;var a=r(62313),o=r(28132),i=r(81975),c=r(2378),s=n(r(74745));const{Provider:u,Consumer:l}=(0,c.createContext)(void 0),d=(0,c.forwardRef)((()=>null)),p=new Set(["string","boolean","number"]),f=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),m=new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),h=new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),b=new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"]);function y(e,t){return t.some((t=>0===e.indexOf(t)))}function g(e){return"key"===e||"children"===e}function k(e,t){return"style"===e?M(t):t}const v=["accentHeight","alignmentBaseline","arabicForm","baselineShift","capHeight","clipPath","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","dominantBaseline","enableBackground","fillOpacity","fillRule","floodColor","floodOpacity","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","horizAdvX","horizOriginX","imageRendering","letterSpacing","lightingColor","markerEnd","markerMid","markerStart","overlinePosition","overlineThickness","paintOrder","panose1","pointerEvents","renderingIntent","shapeRendering","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","textAnchor","textDecoration","textRendering","underlinePosition","underlineThickness","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","vectorEffect","vertAdvY","vertOriginX","vertOriginY","wordSpacing","writingMode","xmlnsXlink","xHeight"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{}),w=["allowReorder","attributeName","attributeType","autoReverse","baseFrequency","baseProfile","calcMode","clipPathUnits","contentScriptType","contentStyleType","diffuseConstant","edgeMode","externalResourcesRequired","filterRes","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","suppressContentEditableWarning","suppressHydrationWarning","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{}),j=["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns:xlink"].reduce(((e,t)=>(e[t.replace(":","").toLowerCase()]=t,e)),{});function O(e){switch(e){case"htmlFor":return"for";case"className":return"class"}const t=e.toLowerCase();return w[t]?w[t]:v[t]?(0,o.paramCase)(v[t]):j[t]?j[t]:t}function E(e){return e.startsWith("--")?e:y(e,["ms","O","Moz","Webkit"])?"-"+(0,o.paramCase)(e):(0,o.paramCase)(e)}function C(e,t){return"number"!=typeof t||0===t||b.has(e)?t:t+"px"}function S(e,t,r={}){if(null==e||!1===e)return"";if(Array.isArray(e))return T(e,t,r);switch(typeof e){case"string":return(0,i.escapeHTML)(e);case"number":return e.toString()}const{type:n,props:a}=e;switch(n){case c.StrictMode:case c.Fragment:return T(a.children,t,r);case s.default:const{children:e,...n}=a;return P(Object.keys(n).length?"div":null,{...n,dangerouslySetInnerHTML:{__html:e}},t,r)}switch(typeof n){case"string":return P(n,a,t,r);case"function":return n.prototype&&"function"==typeof n.prototype.render?x(n,a,t,r):S(n(a,r),t,r)}switch(n&&n.$$typeof){case u.$$typeof:return T(a.children,a.value,r);case l.$$typeof:return S(a.children(t||n._currentValue),t,r);case d.$$typeof:return S(n.render(a),t,r)}return""}function P(e,t,r,n={}){let a="";if("textarea"===e&&t.hasOwnProperty("value")){a=T(t.value,r,n);const{value:e,...o}=t;t=o}else t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html?a=t.dangerouslySetInnerHTML.__html:void 0!==t.children&&(a=T(t.children,r,n));if(!e)return a;const o=_(t);return f.has(e)?"<"+e+o+"/>":"<"+e+o+">"+a+"</"+e+">"}function x(e,t,r,n={}){const a=new e(t,n);"function"==typeof a.getChildContext&&Object.assign(n,a.getChildContext());return S(a.render(),r,n)}function T(e,t,r={}){let n="";e=Array.isArray(e)?e:[e];for(let a=0;a<e.length;a++){n+=S(e[a],t,r)}return n}function _(e){let t="";for(const r in e){const n=O(r);if(!(0,i.isValidAttributeName)(n))continue;let a=k(r,e[r]);if(!p.has(typeof a))continue;if(g(r))continue;const o=m.has(n);if(o&&!1===a)continue;const c=o||y(r,["data-","aria-"])||h.has(n);("boolean"!=typeof a||c)&&(t+=" "+n,o||("string"==typeof a&&(a=(0,i.escapeAttribute)(a)),t+='="'+a+'"'))}return t}function M(e){if(!(0,a.isPlainObject)(e))return e;let t;for(const r in e){const n=e[r];if(null==n)continue;t?t+=";":t="";t+=E(r)+":"+C(r,n)}return t}var A=S;t.default=A},82986:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmptyElement=void 0;t.isEmptyElement=e=>"number"!=typeof e&&("string"==typeof e?.valueOf()||Array.isArray(e)?!e.length:!e)},59823:(e,t,r)=>{"use strict";r.d(t,{AG:()=>i,Ti:()=>o,eV:()=>c});var n=r(38697),a=r(72867);function o(e,t){return 0===t?e.toLowerCase():(0,a.By)(e,t)}function i(e,t){return 0===t?e.toLowerCase():(0,a.Pv)(e)}function c(e,t){return void 0===t&&(t={}),(0,a.Ho)(e,(0,n.pi)({transform:o},t))}},81338:(e,t,r)=>{"use strict";r.d(t,{I:()=>c,w:()=>i});var n=r(38697),a=r(68308),o=r(83078);function i(e){return(0,o.l)(e.toLowerCase())}function c(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,n.pi)({delimiter:" ",transform:i},t))}},28132:(e,t,r)=>{"use strict";r.r(t),r.d(t,{camelCase:()=>n.eV,camelCaseTransform:()=>n.Ti,camelCaseTransformMerge:()=>n.AG,capitalCase:()=>a.I,capitalCaseTransform:()=>a.w,constantCase:()=>o.c,dotCase:()=>i.$,headerCase:()=>c.e,noCase:()=>s.B,paramCase:()=>u.o,pascalCase:()=>l.Ho,pascalCaseTransform:()=>l.By,pascalCaseTransformMerge:()=>l.Pv,pathCase:()=>d.Y,sentenceCase:()=>p.G,sentenceCaseTransform:()=>p.a,snakeCase:()=>f.f});var n=r(59823),a=r(81338),o=r(56233),i=r(77352),c=r(20025),s=r(68308),u=r(76854),l=r(72867),d=r(76559),p=r(44434),f=r(59491)},56233:(e,t,r)=>{"use strict";r.d(t,{c:()=>i});var n=r(38697),a=r(68308),o=r(48936);function i(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,n.pi)({delimiter:"_",transform:o.L},t))}},77352:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var n=r(38697),a=r(68308);function o(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,n.pi)({delimiter:"."},t))}},20025:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});var n=r(38697),a=r(81338);function o(e,t){return void 0===t&&(t={}),(0,a.I)(e,(0,n.pi)({delimiter:"-"},t))}},62313:(e,t)=>{"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isPlainObject=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))}},97740:(e,t,r)=>{"use strict";r.d(t,{U:()=>n});function n(e){return e.toLowerCase()}},68308:(e,t,r)=>{"use strict";r.d(t,{B:()=>i});var n=r(97740),a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function i(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,i=void 0===r?a:r,s=t.stripRegexp,u=void 0===s?o:s,l=t.transform,d=void 0===l?n.U:l,p=t.delimiter,f=void 0===p?" ":p,m=c(c(e,i,"$1\0$2"),u,"\0"),h=0,b=m.length;"\0"===m.charAt(h);)h++;for(;"\0"===m.charAt(b-1);)b--;return m.slice(h,b).split("\0").map(d).join(f)}function c(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}},76854:(e,t,r)=>{"use strict";r.d(t,{o:()=>o});var n=r(38697),a=r(77352);function o(e,t){return void 0===t&&(t={}),(0,a.$)(e,(0,n.pi)({delimiter:"-"},t))}},72867:(e,t,r)=>{"use strict";r.d(t,{By:()=>o,Ho:()=>c,Pv:()=>i});var n=r(38697),a=r(68308);function o(e,t){var r=e.charAt(0),n=e.substr(1).toLowerCase();return t>0&&r>="0"&&r<="9"?"_"+r+n:""+r.toUpperCase()+n}function i(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function c(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,n.pi)({delimiter:"",transform:o},t))}},76559:(e,t,r)=>{"use strict";r.d(t,{Y:()=>o});var n=r(38697),a=r(77352);function o(e,t){return void 0===t&&(t={}),(0,a.$)(e,(0,n.pi)({delimiter:"/"},t))}},51516:(e,t,r)=>{"use strict";var n=r(91850);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},44434:(e,t,r)=>{"use strict";r.d(t,{G:()=>c,a:()=>i});var n=r(38697),a=r(68308),o=r(83078);function i(e,t){var r=e.toLowerCase();return 0===t?(0,o.l)(r):r}function c(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,n.pi)({delimiter:" ",transform:i},t))}},59491:(e,t,r)=>{"use strict";r.d(t,{f:()=>o});var n=r(38697),a=r(77352);function o(e,t){return void 0===t&&(t={}),(0,a.$)(e,(0,n.pi)({delimiter:"_"},t))}},96481:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(51806),a=r(55609),o=r(94333),i=r(69307),c=r(65736),s=r(7530);const __=c.__,_x=c._x;function u({answer:e}){const[t,r]=(0,i.useState)(!1),c=(new DOMParser).parseFromString(e,"text/html"),u=c.body.textContent||c.body.innerText||"",l=(0,o.useCopyToClipboard)(u,(()=>{r(!0),setTimeout((()=>r(!1)),3e3)}));return(0,n.createElement)("div",{className:"jetpack-ai-chat-copy-button-container"},(0,n.createElement)(a.Button,{className:"jetpack-ai-chat-copy-button",disabled:t,label:__("Copy Response","jetpack"),variant:"has-text",ref:l},(0,n.createElement)(a.Icon,{className:"copy-icon",icon:s.Km}),t?_x("Copied!","Copied to clipboard","jetpack"):_x("Copy Response","Copy to clipboard.","jetpack")))}},5023:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(51806),a=r(65736);const __=a.__;function o(){return(0,n.createElement)("div",{className:"jetpack-ai-chat-error-container"},__("There was an error while generating the answer. Please try again later.","jetpack"))}},76430:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(51806),a=r(55609),o=r(65736),i=r(99196),c=r(7530),s=r(39137),u=r(5023);const __=o.__;function l({blogType:e,blogId:t,cacheKey:r,feedbackSubmitted:o,addFeedback:l}){const{isSubmittingFeedback:d,submitFeedback:p,feedbackError:f,setFeedbackError:m}=(0,s.Z)(e,t);(0,i.useEffect)((()=>{r.startsWith("jp-search-ai-")&&(b({rank:"",comment:""}),g(!1),m(!1))}),[r]);const[h,b]=(0,i.useState)({rank:"",comment:""}),[y,g]=(0,i.useState)(!1),k=o.includes(r),v=e=>{b({...h,rank:e}),g(!0)},w=!f&&!k;return(0,n.createElement)("div",{className:"jetpack-ai-chat-feedback-container"},f&&(0,n.createElement)(u.Z,{error:f}),k&&(0,n.createElement)("div",{className:"jetpack-ai-chat-feedback-submitted"},__("Thanks for your feedback!","jetpack")),w&&(0,n.createElement)("div",{className:"jetpack-ai-chat-answer-feedback"},(0,n.createElement)("hr",null),(0,n.createElement)("div",{className:"jetpack-ai-chat-answer-feedback-buttons"},__("Was this helpful?","jetpack"),(0,n.createElement)("a",{role:"button",className:"thumbs-up",disabled:d||"thumbs-up"===h.rank,label:__("Thumbs up","jetpack"),onClick:()=>v("thumbs-up")},(0,n.createElement)(a.Icon,{icon:c.Vw})),(0,n.createElement)("a",{role:"button",className:"thumbs-down",disabled:d||"thumbs-down"===h.rank,label:__("Thumbs down","jetpack"),onClick:()=>v("thumbs-down")},(0,n.createElement)(a.Icon,{icon:c.LX}))),y&&(0,n.createElement)("div",{className:"jetpack-ai-chat-feedback-form"},(0,n.createElement)(a.TextControl,{className:"jetpack-ai-chat-feedback-input",placeholder:"thumbs-up"===h.rank?__("What did you like about it?","jetpack"):__("What didn't you like about it? How could it be improved?","jetpack"),size:50,value:h.comment,disabled:d||k,onChange:e=>b({...h,comment:e})}),(0,n.createElement)(a.Button,{className:"wp-block-button__link jetpack-ai-chat-feedback-submit",onClick:()=>{p(h,r),l(r),p(h,r)},disabled:d||k},__("Submit","jetpack")))))}},7530:(e,t,r)=>{"use strict";r.d(t,{Km:()=>c,LX:()=>i,Vw:()=>o});var n=r(51806),a=r(55609);const o=(0,n.createElement)(a.SVG,{viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(a.Path,{d:"M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"})),i=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},(0,n.createElement)(a.Path,{d:"M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"})),c=(0,n.createElement)(a.SVG,{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(a.Path,{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),(0,n.createElement)(a.Rect,{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}))},43827:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(51806),a=r(55609),o=r(69307),i=r(65736),c=r(96481),s=r(5023),u=r(76430),l=r(62904);const __=i.__,d=[__("Good question, give me a moment to think about that 🤔","jetpack"),__("Let me work out the answer to that, back soon!","jetpack"),__("🤔 Thinking, thinking, will be back with an answer soon","jetpack")];function p({html:e,showAnimation:t,onAnimationDone:r}){const[a,i]=(0,o.useState)("");return(0,o.useEffect)((()=>{if(t&&e){const t=e.split(" ");for(let e=1;e<t.length;e++){const r=t.slice(0,e).join(" ");setTimeout((()=>i(r)),50*e)}setTimeout((()=>{i(e),r()}),50*t.length)}else i(e),r()}),[]),(0,n.createElement)("div",{className:"content"},(0,n.createElement)(o.RawHTML,null,a))}function f({askButtonLabel:e,blogId:t,blogType:r,placeholder:i,settingShowCopy:f,settingShowFeedback:m,settingShowSources:h}){const{question:b,setQuestion:y,answer:g,isLoading:k,submitQuestion:v,references:w,askError:j,setAskError:O,cacheKey:E}=(0,l.Z)(r,t),[C,S]=(0,o.useState)(!0),[P,x]=(0,o.useState)(!1),[T,_]=(0,o.useState)([]),[M,A]=(0,o.useState)(""),R=()=>{O(!1),S(!1),x(!1),_([]),A(b),v()},L=f&&C&&!k&&g,I=m&&C&&!k&&E;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.KeyboardShortcuts,{shortcuts:{enter:R}},(0,n.createElement)("div",{className:"jetpack-ai-chat-question-wrapper"},(0,n.createElement)(a.TextControl,{className:"jetpack-ai-chat-question-input",placeholder:i,size:50,disabled:!C||k,value:b,onChange:e=>y(e)}),(0,n.createElement)(a.Button,{className:"wp-block-button__link jetpack-ai-chat-question-button",disabled:!C||k,onClick:R},k&&(0,n.createElement)(a.Spinner,null),!k&&e))),(0,n.createElement)("div",null,(0,n.createElement)("div",{className:"jetpack-ai-chat-answer-container"},M&&(0,n.createElement)("h2",null,M),k&&d[Math.floor(3*Math.random())],!k&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p,{showAnimation:!C,onAnimationDone:()=>{S(!0),x(!0)},html:g}))),j&&!k&&(0,n.createElement)(s.Z,{error:j}),L&&(0,n.createElement)(c.Z,{answer:g}),h&&w&&w.length>0&&P&&(0,n.createElement)("div",{className:"jetpack-ai-chat-answer-references"},(0,n.createElement)("h3",null,__("Additional resources:","jetpack")),(0,n.createElement)("ul",null,w.map(((e,t)=>(0,n.createElement)("li",{key:t},(0,n.createElement)(a.ExternalLink,{href:e.url},e.title))))),(0,n.createElement)("hr",null)),I&&(0,n.createElement)(u.Z,{blogId:t,blogType:r,cacheKey:E,feedbackSubmitted:T,addFeedback:e=>{_([...T,e])}})))}},39137:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(86989),a=r.n(n),o=r(69307);function i(e,t){const[r,n]=(0,o.useState)(!1),[i,c]=(0,o.useState)(!1);return{isSubmittingFeedback:r,submitFeedback:async(r,o)=>{let i=`/wpcom/v2/jetpack-search/ai/rank?cache_key=${o}`;"wpcom"===e&&(i=`/wpcom/v2/sites/${t}/jetpack-search/ai/rank?cache_key=${o}`),n(!0),await a()({path:i,method:"POST",data:{rank:r.rank,comment:r.comment}}).then((()=>{c(!1)})).catch((e=>{c(e)})).finally((()=>{n(!1)}))},feedbackError:i,setFeedbackError:c}}},62904:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(86989),a=r.n(n),o=r(69307);function i(e,t){const[r,n]=(0,o.useState)(""),[i,c]=(0,o.useState)(null),[s,u]=(0,o.useState)(""),[l,d]=(0,o.useState)(!1),[p,f]=(0,o.useState)([]),[m,h]=(0,o.useState)(!1);return{question:r,setQuestion:n,answer:i,isLoading:m,submitQuestion:async()=>{let n=`/wpcom/v2/jetpack-search/ai/search?query=${r}`;"wpcom"===e&&(n=`/wpcom/v2/sites/${t}/jetpack-search/ai/search?query=${r}`),h(!0),c(null),a()({path:n,method:"GET"}).then((e=>{u(e.cache_key),c(e.response),f(e.urls)})).catch((e=>{u(""),f([]),d(e)})).finally((()=>{h(!1)}))},references:p,cacheKey:s,askError:l,setAskError:d}}},38697:(e,t,r)=>{"use strict";r.d(t,{pi:()=>n});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};Object.create;Object.create},83078:(e,t,r)=>{"use strict";function n(e){return e.charAt(0).toUpperCase()+e.substr(1)}r.d(t,{l:()=>n})},48936:(e,t,r)=>{"use strict";r.d(t,{L:()=>n});function n(e){return e.toUpperCase()}},99196:e=>{"use strict";e.exports=window.React},91850:e=>{"use strict";e.exports=window.ReactDOM},86989:e=>{"use strict";e.exports=window.wp.apiFetch},55609:e=>{"use strict";e.exports=window.wp.components},94333:e=>{"use strict";e.exports=window.wp.compose},47701:e=>{"use strict";e.exports=window.wp.domReady},69307:e=>{"use strict";e.exports=window.wp.element},81975:e=>{"use strict";e.exports=window.wp.escapeHtml},65736:e=>{"use strict";e.exports=window.wp.i18n},25877:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(51806),t=r(47701),n=r.n(t),a=r(69307),o=r(43827);const i=({askButtonLabel:t,blogId:r,blogType:n,placeholder:a,showCopy:i,showFeedback:c,showSources:s})=>(0,e.createElement)("div",null,(0,e.createElement)(o.Z,{askButtonLabel:t,blogId:r,blogType:n,placeholder:a,settingShowCopy:i,settingShowFeedback:c,settingShowSources:s}));n()((function(){const t=document.querySelector("#jetpack-ai-chat"),r=t.getAttribute("data-ask-button-label"),n=t.getAttribute("data-placeholder"),o=t.getAttribute("data-blog-id"),c=t.getAttribute("data-blog-type");(0,a.render)((0,e.createElement)(i,{askButtonLabel:r,blogId:o,blogType:c,placeholder:n,showCopy:!!parseInt(t.getAttribute("data-show-copy")),showFeedback:!!parseInt(t.getAttribute("data-show-feedback")),showSources:!!parseInt(t.getAttribute("data-show-sources"))}),t)}))})()})();