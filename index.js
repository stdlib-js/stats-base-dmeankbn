// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeankbn=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,y,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,k=isNaN,x=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,c,f,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(l(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,k(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var C,I=Object.prototype,R=I.toString,N=I.__defineGetter__,B=I.__defineSetter__,q=I.__lookupGetter__,L=I.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(q.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=C;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Object,W=/./;function U(r){return"boolean"==typeof r}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=X();var D=X();var J=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var K,Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"";K=D&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,o;if(null==r)return J.call(r);t=r[Y],o=Y,e=null!=(i=r)&&H.call(i,o);try{r[Y]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return J.call(r)};var rr=K,er=Boolean,tr=Boolean.prototype.toString;var nr=z&&"symbol"==typeof Symbol.toStringTag;function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function or(r){return U(r)||ir(r)}function ar(){return new Function("return this;")()}Z(or,"isPrimitive",U),Z(or,"isObject",ir);var cr="object"==typeof self?self:null,ur="object"==typeof window?window:null,lr="object"==typeof global?global:null,fr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!U(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ar()}if(fr)return fr;if(cr)return cr;if(ur)return ur;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=sr.document&&sr.document.childNodes,gr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var yr,br=/^\s*function\s*([^(]*)/i;Z(dr,"REGEXP",br),yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var hr=yr;function vr(r){return null!==r&&"object"==typeof r}var wr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr);function mr(r){var e,t,n,i;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(vr,"isObjectLikeArray",wr);var jr="function"==typeof W||"object"==typeof gr||"function"==typeof pr?function(r){return mr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?mr(r).toLowerCase():e};var _r,Er,Sr=Object.getPrototypeOf;Er=Object.getPrototypeOf,_r="function"===jr(Er)?Sr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var kr=_r;function xr(r){return null==r?null:(r=M(r),kr(r))}function Or(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===rr(r))return!0;r=xr(r)}return!1}function Tr(r){return Math.abs(r)}function Ar(r,e,t){var n,i,o,a,c,u;if(r<=0)return 0;if(1===r||0===t)return e[0];for(i=t<0?(1-r)*t:0,n=0,c=0,u=0;u<r;u++)a=n+(o=e[i]),Tr(n)>=Tr(o)?c+=n-a+o:c+=o-a+n,n=a,i+=t;return n+c}Z(Ar,"ndarray",(function(r,e,t,n){var i,o,a,c,u,l;if(r<=0)return 0;if(1===r||0===t)return e[n];for(o=n,i=0,u=0,l=0;l<r;l++)c=i+(a=e[o]),Tr(i)>=Tr(a)?u+=i-c+a:u+=a-c+i,i=c,o+=t;return i+u}));var Vr,$r=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Or(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Fr=Vr=Or($r)?Ar:$r;const{ndarray:Pr}=Vr;function Cr(r,e,t){return r<=0?NaN:1===r||0===t?e[0]:Fr(r,e,t)/r}return Z(Cr,"ndarray",(function(r,e,t,n){return r<=0?NaN:1===r||0===t?e[n]:Pr(r,e,t,n)/r})),Cr}));
//# sourceMappingURL=index.js.map
