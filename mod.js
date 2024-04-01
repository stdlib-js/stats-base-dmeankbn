// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,y,"e"),n=f.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,u,s,l,f,p,g,d,b;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,_(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),u+=n.arg||"",s+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var P,V=Object.prototype,F=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,R=V.__lookupGetter__,I=V.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||I.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var N=P;function B(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function L(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var G=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,Z=function(r){return G.exec(r).slice(1)};function q(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=L(Q(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function z(r){var e=W(r),t="/"===Y(r,-1);return(r=L(Q(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function W(r){return"/"===r.charAt(0)}function U(){return z(Q(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function X(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=q(r).substr(1),e=q(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),o=Math.min(n.length,i.length),a=o,c=0;c<o;c++)if(n[c]!==i[c]){a=c;break}var u=[];for(c=a;c<n.length;c++)u.push("..");return(u=u.concat(i.slice(a))).join("/")}function D(r){var e=Z(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function J(r,e){var t=Z(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function H(r){return Z(r)[3]}var K={extname:H,basename:J,dirname:D,sep:"/",delimiter:":",relative:X,join:U,isAbsolute:W,normalize:z,resolve:q};function Q(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var Y="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},rr=M(Object.freeze({__proto__:null,basename:J,default:K,delimiter:":",dirname:D,extname:H,isAbsolute:W,join:U,normalize:z,relative:X,resolve:q,sep:"/"}));var er=Object,tr=/./;function nr(r){return"boolean"==typeof r}var ir="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function or(){return ir&&"symbol"==typeof Symbol.toStringTag}var ar=Object.prototype.toString;var cr=Object.prototype.hasOwnProperty;var ur,sr="function"==typeof Symbol?Symbol:void 0,lr="function"==typeof sr?sr.toStringTag:"";ur=or()?function(r){var e,t,n,i,o;if(null==r)return ar.call(r);t=r[lr],o=lr,e=null!=(i=r)&&cr.call(i,o);try{r[lr]=void 0}catch(e){return ar.call(r)}return n=ar.call(r),e?r[lr]=t:delete r[lr],n}:function(r){return ar.call(r)};var fr=ur,pr=Boolean,gr=Boolean.prototype.toString;var dr=or();function br(r){return"object"==typeof r&&(r instanceof pr||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===fr(r)))}function hr(r){return nr(r)||br(r)}B(hr,"isPrimitive",nr),B(hr,"isObject",br);var yr="object"==typeof self?self:null,vr="object"==typeof window?window:null,wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},mr="object"==typeof wr?wr:null,jr="object"==typeof globalThis?globalThis:null;var _r=function(r){if(arguments.length){if(!nr(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(jr)return jr;if(yr)return yr;if(vr)return vr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Er=_r.document&&_r.document.childNodes,kr=Int8Array;function Or(){return/^\s*function\s*([^(]*)/i}var Sr,xr=/^\s*function\s*([^(]*)/i;B(Or,"REGEXP",xr),Sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===fr(r)};var Ar=Sr;function Tr(r){return null!==r&&"object"==typeof r}var Pr=function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ar(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tr);function Vr(r){var e,t,n,i;if(("Object"===(t=fr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xr.exec(n.toString()))return e[1]}return Tr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(Tr,"isObjectLikeArray",Pr);var Fr="function"==typeof tr||"object"==typeof kr||"function"==typeof Er?function(r){return Vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Vr(r).toLowerCase():e};var $r,Cr,Rr=Object.getPrototypeOf;Cr=Object.getPrototypeOf,$r="function"===Fr(Cr)?Rr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===fr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=$r;function Nr(r){return null==r?null:(r=er(r),Ir(r))}function Br(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===fr(r))return!0;r=Nr(r)}return!1}function Mr(r){return Math.abs(r)}function Lr(r,e,t){var n,i,o,a,c,u;if(r<=0)return 0;if(1===r||0===t)return e[0];for(i=t<0?(1-r)*t:0,n=0,c=0,u=0;u<r;u++)a=n+(o=e[i]),Mr(n)>=Mr(o)?c+=n-a+o:c+=o-a+n,n=a,i+=t;return n+c}B(Lr,"ndarray",(function(r,e,t,n){var i,o,a,c,u,s;if(r<=0)return 0;if(1===r||0===t)return e[n];for(o=n,i=0,u=0,s=0;s<r;s++)c=i+(a=e[o]),Mr(i)>=Mr(a)?u+=i-c+a:u+=a-c+i,i=c,o+=t;return i+u}));var Gr,Zr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Br(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,rr.join)("/home/runner/work/stats-base-dmeankbn/stats-base-dmeankbn/node_modules/@stdlib/blas-ext-base-dsumkbn/lib","./native.js")),qr=Gr=Br(Zr)?Lr:Zr;const{ndarray:zr}=Gr;function Wr(r,e,t){return r<=0?NaN:1===r||0===t?e[0]:qr(r,e,t)/r}function Ur(r,e,t,n){return r<=0?NaN:1===r||0===t?e[n]:zr(r,e,t,n)/r}B(Wr,"ndarray",Ur);export{Wr as default,Ur as ndarray};
//# sourceMappingURL=mod.js.map
