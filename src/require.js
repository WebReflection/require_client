/*! (C) Andrea Giammarchi - Mit Style License */

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
    modules = {production:1},
    noConflicts = global.require
  ;

  require._ = function _(enrich) {
    for(var key in enrich) {
      hasOP.call(enrich, key) && (
        modules[key] = enrich[key]
      );
    }
    return require;
  };

  require.config = config;
  require.main = global;

  return noConflicts ? noConflicts._(modules) : require;

}(this, Function, {strict:true, path:"js/"});

!function(script, className, i){
  for(; i < script.length; i++)
    (script[i][className] == "exec") && Function(script[i].innerHTML)(script[i][className] == "")
  ;
}(document.getElementsByTagName("script"), "className", 0);