/*! (C) Andrea Giammarchi */
var require=function(c,d,e){function n(p,o){return o?p:h[p]}function b(q){var o=a[q]={},p={id:q,parent:c,filename:n(q,i),web:i};p[l]=o;d("global","module",l,(e.strict?"'use strict';":"")+n(q)).call(o,c,p,o);k.call(o=p[l],j)||(o[j]=i);return o}function g(o){return k.call(a,o)?a[o]:a[o]=b(o)}var l="exports",j="loaded",i=!0,a={},k=a.hasOwnProperty,h={
 "a": "console.log(\"a starting\");exports.done=false;var b=require(\"b\");console.log(\"in a, b.done = \"+b.done);exports.done=true;console.log(\"a done\");",
 "b": "console.log(\"b starting\");exports.done=false;var a=require(\"a\");console.log(\"in b, a.done = \"+a.done);exports.done=true;console.log(\"b done\");",
 "main": "console.log(\"main starting\");var a=require(\"a\");var b=require(\"b\");console.log(\"in main, a.done=\"+a.done+\", b.done=\"+b.done);"
},f=c.require;g._=function m(o){for(var p in o){k.call(o,p)&&(h[p]=o[p])}return g};g.config=e;g.main=c;return f?f._(h):g}(this,Function,{
strict:true
});