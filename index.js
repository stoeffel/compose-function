var slice = Array.prototype.slice;

module.exports = function() {

  var functions = slice.call(arguments);

  return (function() {

    var args = slice.call(arguments),
        func;
    
    for(var i = functions.length - 1; i >= 0; i--) {
      func = functions[i];

      if (typeof func !== 'function') {
        throw new Error('Not a function', func);
      }

      args = [func.apply(null, args)];
    }

    return args[0];
  });
};
