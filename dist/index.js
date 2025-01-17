"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=n(function(g,s){
var y=require('@stdlib/blas-ext-base-dsumkbn/dist').ndarray;function b(r,e,a,t){return r<=0?NaN:r===1||a===0?e[t]:y(r,e,a,t)/r}s.exports=b
});var q=n(function(h,v){
var f=require('@stdlib/strided-base-stride2offset/dist'),k=i();function p(r,e,a){return k(r,e,a,f(r,a))}v.exports=p
});var m=n(function(w,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),x=i();j(d,"ndarray",x);o.exports=d
});var l=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=m(),u,c=R(l(__dirname,"./native.js"));_(c)?u=E:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
