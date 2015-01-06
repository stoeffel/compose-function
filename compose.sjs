var comp = require('./');

macro ... {
  rule infix { $f1:expr | $f2:expr } => {
    comp($f1, $f2);
  }
}

function f(x) {
  return 'f(' + x + ')';
}

function g(x) {
  return 'g(' + x + ')';
}

h = f ... g ... g

console.log(h('hello')); // => g(g(f(hello)))

