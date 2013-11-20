define(function (require, exports, module) {
  setTimeout(function(a){
    console.log(a);
    console.log(require('a'));
  }, 1000, require('a'));
  exports.test = 123;
});