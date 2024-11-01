"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=a(function(O,t){
var c=require('@stdlib/blas-ext-base-dsumkbn/dist');function k(r,e,n){return r<=0?NaN:r===1||n===0?e[0]:c(r,e,n)/r}t.exports=k
});var q=a(function(g,v){
var f=require('@stdlib/blas-ext-base-dsumkbn/dist').ndarray;function p(r,e,n,u){return r<=0?NaN:r===1||n===0?e[u]:f(r,e,n,u)/r}v.exports=p
});var o=a(function(h,m){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=s(),j=q();y(d,"ndarray",j);m.exports=d
});var l=require("path").join,x=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=o(),i,b=x(l(__dirname,"./native.js"));R(b)?i=_:i=b;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
