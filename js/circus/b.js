// circular references trap
require("a");
require("c");
// using exports object to export
exports.test = require("d").test;