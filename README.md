# [Radix.js](http://git.hust.cc/radix.js)

> **Radix.js** is a simple javascript module to convent number to 2~64 radix, **decimal supported**.

[![Build Status](https://travis-ci.org/hustcc/radix.js.svg?branch=master)](https://travis-ci.org/hustcc/radix.js) [![Coverage Status](https://coveralls.io/repos/github/hustcc/radix.js/badge.svg?branch=master)](https://coveralls.io/github/hustcc/radix.js?branch=master) [![npm](https://img.shields.io/npm/v/radix.js.svg?style=flat-square)](https://www.npmjs.com/package/radix.js) [![npm](https://img.shields.io/npm/dt/radix.js.svg?style=flat-square)](https://www.npmjs.com/package/radix.js) [![npm](https://img.shields.io/npm/l/radix.js.svg?style=flat-square)](https://www.npmjs.com/package/radix.js)


# 1. Install

> **npm install radix.js**

Or download `dist/radix.min.js` source file。


# 2. Import It

- `Script` tag.

```html
<script type="text/javascript" src="dist/radix.min.js"></script>
```

- `ES6` style.

```js
var Radix = require('radix.js');

//or

import Radix from 'radix.js';
```


# 3. Usage & API

There is only one API named `convent`.

```js
var radix = new Radix();
radix.convent(5201314, 10, 64); // will convent number 5301314 from radix 10 to radix 64.
```
Now the max radix is 64, and the formatter is: `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@`. Also you can set your own formatter like below:

```js
var radix = new Radix('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
radix.convent('jRSy', 64);
```


# 4. Test

> npm install
>
> npm test


# 5. LICENSE

MIT@[hustcc](https://github.com/hustcc)


