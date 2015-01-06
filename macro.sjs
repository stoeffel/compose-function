macro ... {
  rule infix { $f1:expr | $f2:expr } => {
    (function() {
    var comp = require('compose-function');
    return comp($f1, $f2);
    })()
  }
}

export ...
