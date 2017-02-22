[![view on npm](http://img.shields.io/npm/v/template-clean.svg)](https://www.npmjs.org/package/template-clean)
[![npm module downloads](http://img.shields.io/npm/dt/template-clean.svg)](https://www.npmjs.org/package/template-clean)
[![Build Status](https://travis-ci.org/75lb/template-clean.svg?branch=master)](https://travis-ci.org/75lb/template-clean)
[![Dependency Status](https://david-dm.org/75lb/template-clean.svg)](https://david-dm.org/75lb/template-clean)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_template-clean"></a>

## template-clean
Template literal tag function to replace `null` and `undefined` values with an empty string.

**Example**  
```js
> clean = require('template-clean')
> const word = 'something'
> const nothing = null

> `a word: ${word}. Nothing: ${nothing}`
'a word: something. Nothing: null'

> clean`a word: ${word}. Nothing: ${nothing}`
'a word: something. Nothing: '
```
<a name="exp_module_template-clean--clean"></a>

### clean(strings, ...expressions) ⏏
**Kind**: Exported function  

| Param | Type |
| --- | --- |
| strings | <code>Array.&lt;string&gt;</code> | 
| ...expressions | <code>any</code> | 


* * *

&copy; 2015-17 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
