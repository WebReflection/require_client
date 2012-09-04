/*! (C) Andrea Giammarchi */
var require=function(c,d,e){function l(n,m){return m?n:g[n]}function b(o){var m=a[o]={},n={id:o,parent:c,filename:l(o,h),web:h};n[k]=m;d("global","module",k,(e.strict?"'use strict';":"")+l(o)).call(m,c,n,m);j.call(m=n[k],i)||(m[i]=h);return m}function f(m){return j.call(a,m)?a[m]:a[m]=b(m)}var k="exports",i="loaded",h=!0,a={},j=a.hasOwnProperty,g={
 "a": "console.log(\"a starting\");exports.done=false;var b=require(\"b\");console.log(\"in a, b.done = \"+b.done);exports.done=true;console.log(\"a done\");",
 "main": "console.log(\"main starting\");var a=require(\"a\");var b=require(\"b\");console.log(\"in main, a.done=\"+a.done+\", b.done=\"+b.done);",
 "b": "console.log(\"b starting\");exports.done=false;var a=require(\"a\");console.log(\"in b, a.done = \"+a.done);exports.done=true;console.log(\"b done\");"
};f.config=e;f.main=c;return f}(this,Function,{
strict:true
});