"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = compose;
var arityN = _interopRequire(require("arity-n"));




var compose2 = function (f, g) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return f(g.apply(null, args));
  };
};

function compose() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  functions = functions.filter(function (fn) {
    return typeof fn === "function";
  });

  var lastIdx = functions.length - 1;
  var arity = 0;

  if (functions.length <= 0) {
    throw new Error("No functions passed");
  }


  if (lastIdx >= 0 && functions[lastIdx]) {
    arity = functions[lastIdx].length;
  }

  return arityN(functions.reduce(compose2), arity);
}