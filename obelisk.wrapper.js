var vm = require('vm');
var readFileSync = require('fs').readFileSync;
var Canvas = require('canvas');

// shim of document.createElement
var document = {};

document.createElement = function () {
    var canvas = new Canvas(50,50);

    canvas.setAttribute = function () {};

    return canvas;
};

var browserContext = vm.createContext({
  window: {},
  document: document,
  console: console,
  obelisk: {}
});


var content = readFileSync('./node_modules/obelisk.js/build/obelisk.js');

vm.runInContext(content, browserContext);

var windowObelisk = browserContext.window.obelisk;

// Move elements created under window.obelisk to obelisk object
Object.keys(windowObelisk).forEach(function (windowObeliskKey) {
  var value = windowObelisk[windowObeliskKey];

  browserContext.obelisk[windowObeliskKey] = value;
});

module.exports = browserContext.obelisk;
