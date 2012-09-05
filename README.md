require_client
==============
node require for JS client side


why
---
Here you find [everything you need to know behind this project](http://webreflection.blogspot.ie/2012/09/a-meaningful-client-side-alternative-to.html).


how
---
Install the node binary through `[sudo] npm install require_client -g`.

Create a portable require file via `require_client ~/path/jsfolder [~/path/require.js]`.

If no third argument is specified, the build will be inside the build folder of the require_client installation.


multiple projects
-----------------
It is now possible to create many build with `require()` and place all of them in parallel. The first require that will be available in the global scope will be used as parser, all others will simply enrich the list of available modules.


license
-------
Mit Style