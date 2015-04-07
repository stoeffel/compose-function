Compose-Function
================

[![Build Status](https://travis-ci.org/stoeffel/compose-function.svg)](https://travis-ci.org/stoeffel/compose-function) [![npm version](https://badge.fury.io/js/compose-function.svg)](http://badge.fury.io/js/compose-function)
> Compose a new function from smaller functions `f(g(x))`

Installation
------------

`npm install compose-function`

Usage
-----

### Basic usage

```js
var compose = require('compose-function');

var composition = compose(sqr, add2); // sqr(add2(x))

composition(2) // => 16

compose(sqr, inc)(2); // => 9
compose(inc, sqr)(2); // => 5
```


### with curry

```js
var compose = require('compose-function');
var curry = require('chickencurry');

function add(x, y) {
  return x + y;
}

// add(6, sqr(add(2, x)))
compose(
  curry(add, 6),
  sqr,
  curry(add, 2)
);
// or with the sweetjs macro
var myFunc = curry(add, 6) ...
             sqr ...
             curry(add, 2)

// map(filter(list, even), sqr)
compose(
  curry(map, curry.__, sqr),
  curry(filter, curry.__, even)
)([1,2,3,4,5,6,7,8]) // => [4, 16, 36, 64]
```
