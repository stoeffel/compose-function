var compose = require('./index.js'),
  curry = require('chickencurry'),
  expect = require('expect.js');

describe('compose-function', function() {
  var inc, add2, sqr, even, filter, map;

  beforeEach(function() {
    inc = function(x) {
      return x + 1;
    };
    add2 = function(x) {
      return x + 2;
    };
    sqr = function(x) {
      return x * x;
    };
    even = function(x) {
      return x % 2 === 0;
    };
    filter = function(list, where) {
      var newList = [];
      for(var i = 0; i<list.length; i++) {
        if (where(list[i]))
          newList.push(list[i]);
      }
      return newList;
    };
    map = function(list, mapper) {
      var newList = [];
      for(var i = 0; i<list.length; i++) {
        newList.push(mapper(list[i]));
      }
      return newList;
    };
  });

  it('should compose a new function', function() {
    expect(compose(inc)).to.be.a('function');
    expect(compose(inc)(0)).to.equal(1);
    expect(compose(inc, inc)(0)).to.equal(2);
    expect(compose(add2, inc)(0)).to.equal(3);
    expect(compose(inc, sqr)(2)).to.equal(5);
    expect(compose(sqr, inc)(2)).to.equal(9);
    expect(compose(add2, add2, sqr, inc, inc)(2)).to.equal(20);

    expect(
      compose(
        curry(map, curry.__, sqr),
        curry(filter, curry.__, even)
      )([1,2,3,4,5,6,7,8])
    ).to.eql([4, 16, 36, 64]);

    expect(
      compose(
        compose(
          curry(map, curry.__, sqr)
        ),
        compose(
          curry(filter, curry.__, even)
        )
      )([1,2,3,4,5,6,7,8])
    ).to.eql([4, 16, 36, 64]);
  });

  it('should fail if no function is passed', function() {
    expect(compose(1)).to.throwError();
    expect(compose(null)).to.throwError();
    expect(compose(undefined)).to.throwError();
    expect(compose(inc, 1)).to.throwError();
    expect(compose(inc, null)).to.throwError();
    expect(compose(inc, undefined)).to.throwError();
  });
});
