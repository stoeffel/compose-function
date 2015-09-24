import compose from '../module';
const { curry, _ } = require('curry-this')({Symbol:() => 'CURRY'});

import test from 'tape-catch';

test('#compose', ( { deepEqual: deep, equal: eq, throws, end } ) => {
  const sqr = x => x * x;
  const inc = x => x + 1;

  eq(typeof compose, 'function');

  throws(compose.bind(1));

  eq(compose(sqr, inc)(2), sqr(inc(2)));
  eq(sqr(inc(2)), 9);
  eq(compose(sqr, inc)(2), 9);

  const add = (x, y) => x + y;

  eq(compose(
      add::curry(6),
      sqr,
      add::curry(2)
    )(2),
    add(6, sqr(add(2, 2)))
  );

  const even = x => x%2 === 0;
  const map = (arr, fn) => arr.map(fn);
  const filter = (arr, fn) => arr.filter(fn);

  deep(compose(
      map::curry(_, sqr),
      filter::curry(_, even),
    )([1,2,3,4,5,6,7,8]), [4, 16, 36, 64]);

  end();
});
