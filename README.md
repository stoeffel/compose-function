Compose-Function
================

[![Build Status](https://travis-ci.org/stoeffel/compose-function.svg)](https://travis-ci.org/stoeffel/compose-function) [![npm version](https://badge.fury.io/js/compose-function.svg)](http://badge.fury.io/js/compose-function)
> f(g(x))

Installation
------------

`npm install compose-function`

Usage
-----

### Basic usage

```js
var compose = require('compose-function');

var add6 = compose(add2,add4); // add4(add2())
```
