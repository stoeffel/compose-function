var compose = require('./index.js'),
  expect = require('expect.js');

describe('compose-function', function() {
  var inc, add2, sqr;

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
  });

  it('should compose a new function', function() {
    expect(compose(inc)).to.be.a('function');
    expect(compose(inc)(0)).to.equal(1);
    expect(compose(inc, inc)(0)).to.equal(2);
    expect(compose(inc, add2)(0)).to.equal(3);
    expect(compose(sqr, inc)(2)).to.equal(5);
    expect(compose(inc, sqr)(2)).to.equal(9);
    expect(compose(inc, inc, sqr, add2, add2)(2)).to.equal(20);
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
