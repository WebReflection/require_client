/*! (C) Andrea Giammarchi */

var require = function (global, Function, config) {

  //:dev //will be removed at build time
  function grab(path, normalize) {
    if (normalize) {
      return (config.path + path) + ".js";
      //return (config.path + path).replace(/\.js$/, "") + ".js";
    } else {
      var xhr = new XMLHttpRequest;
      xhr.open("get", grab(path, TRUE), !TRUE);
      xhr.send(null);
      return xhr.responseText;
    }
  }
  //dev:function grab(path, normalize) {return normalize ? path : modules[path]}

  function retrieve(path) {

    var
      exports = cache[path] = {},
      module = {
        id: path,
        parent: global,
        filename: grab(path, TRUE),
        web: TRUE // require client
      }
    ;

    module[EXPORTS] = exports;
    Function(
      "global", "module", EXPORTS,
      (config.strict ?
        "'use strict';" : ""
      ) + grab(path)
    ).call(exports,
      global, module, exports
    );

    hasOP.call(
      exports = module[EXPORTS],
      LOADED
    ) || (exports[LOADED] = TRUE);

    return exports;
  }

  function require(module) {
    return hasOP.call(cache, module) ?
      cache[module] :
      cache[module] = retrieve(module)
    ;
  }

  var
    EXPORTS = "exports",
    LOADED = "loaded",
    TRUE = !0,
    cache = {},
    hasOP = cache.hasOwnProperty,
    modules = {production:1};
  ;

  require.config = config;
  require.main = global;

  return require;

}(this, Function, {strict:true, path:"js/"});