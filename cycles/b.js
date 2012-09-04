console.log('b starting');
exports.done = false;
var a = require('a');
console.log('in b, a.done = ' + a.done);
exports.done = true;
console.log('b done');