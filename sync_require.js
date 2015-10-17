// Can't 'use strict' because it would override any script 'use strict' preferences.

function require(url) {
  var req = new XMLHttpRequest();
  req.open('GET', url + '.js', false);
  req.send(null);
  var module = {
    exports: {}
  };
  var func = new Function('exports', 'require', 'module', '__filename', '__dirname', req.responseText);
  func(module.exports, require, module, url + '.js', url.substr(0, url.lastIndexOf('/')));
  return module.exports;
}
