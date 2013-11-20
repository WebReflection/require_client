define(function (require, exports, module) {
  module.exports = {
    a: 'self',
    b: require('b'),
    c: require('c')
  };
});