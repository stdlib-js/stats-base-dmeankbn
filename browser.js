// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,i=t.__lookupGetter__,u=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(i.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),p&&a&&a.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e){return Math.abs(e)}function _(e,r,t){var n,o,a,i,u,l;if(e<=0)return 0;if(1===e||0===t)return r[0];for(o=t<0?(1-e)*t:0,n=0,u=0,l=0;l<e;l++)i=n+(a=r[o]),c(n)>=c(a)?u+=n-i+a:u+=a-i+n,n=i,o+=t;return n+u}function p(e,r,t,n){var o,a,i,u,l,f;if(e<=0)return 0;if(1===e||0===t)return r[n];for(a=n,o=0,l=0,f=0;f<e;f++)u=o+(i=r[a]),c(o)>=c(i)?l+=o-u+i:l+=i-u+o,o=u,a+=t;return o+l}function d(e,r,t){return e<=0?NaN:1===e||0===t?r[0]:_(e,r,t)/e}return f(_,"ndarray",p),f(d,"ndarray",(function(e,r,t,n){return e<=0?NaN:1===e||0===t?r[n]:p(e,r,t,n)/e})),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dmeankbn=r();
//# sourceMappingURL=browser.js.map
