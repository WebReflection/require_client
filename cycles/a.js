console.log('a starting');
exports.done = false;
var b = require('./b.js');
console.log('in a, b.done = ' + b.done);
exports.done = true;
console.log('a done');