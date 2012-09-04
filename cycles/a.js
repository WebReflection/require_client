console.log('a starting');
exports.done = false;
var b = require('b');
console.log('in a, b.done = ' + b.done);
exports.done = true;
console.log('a done');