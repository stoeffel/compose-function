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

var composition = compose(add2, sqr); // sqr(add2(x))

composition(2) // => 16

compose(inc, sqr)(2); // => 9
compose(sqr, inc)(2); // => 5
```

### with curry

```js
var compose = require('compose-function');
var curry = require('chickencurry');

function add(x, y) {
  return x + y;
}

// add(sqr(add(x, 2)), 6)
compose(
  curry(add, 2),
  sqr,
  curry(add, 6)
);
```
