var comp$600 = require('./');
function f$626(x$630) {
    return 'f(' + x$630 + ')';
}
function g$627(x$631) {
    return 'g(' + x$631 + ')';
}
h = comp$600(f$626, comp$600(g$627, g$627));
;
console.log(h('hello'));
