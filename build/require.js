var require=function(e,t,n){function r(e,t){return t?e:c[e]}function i(i){var s=f[i]={},c={id:i,parent:e,filename:r(i,a),web:a};return c[o]=s,t("global","module",o,(n.strict?"'use strict';":"")+r(i)).call(s,e,c,s),l.call(s=c[o],u)||(s[u]=a),s}function s(e){return l.call(f,e)?f[e]:f[e]=i(e)}var o="exports",u="loaded",a=!0,f={},l=f.hasOwnProperty,c={
 "a": "require(\"c\").test()",
 "b": "require(\"a\"),require(\"c\"),exports.test=require(\"d\").test",
 "c": "module.exports.test=require(\"b\").test",
 "d": "this.test=require(\"e\")",
 "e": "require(\"a\"),require(\"b\"),require(\"c\"),require(\"d\"),module.exports=function(){alert(global)}"
},h=e.require;return s._=function(t){for(var n in t)l.call(t,n)&&(c[n]=t[n]);return s},s.config=n,s.main=e,h?h._(c):s}(this,Function,{strict:!0,path:"js/"})