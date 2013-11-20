// circular reference again
require("a");
require("b");
require("c");
require("d");
// reassigning module.exports to export main method
module.exports = function exports() {
  alert(global); // should be the window object
};