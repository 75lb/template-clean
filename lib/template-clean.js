/**
 * Template literal tag function to replace `null` and `undefined` values with an empty string.
 * @module template-clean
 * @example
 * > clean = require('template-clean')
 * > const word = 'something'
 * > const nothing = null
 *
 * > `a word: ${word}. Nothing: ${nothing}`
 * 'a word: something. Nothing: null'
 *
 * > clean`a word: ${word}. Nothing: ${nothing}`
 * 'a word: something. Nothing: '
 */
module.exports = clean

/**
 * @alias module:template-clean
 * @param {string[]}
 * @param {...any}
 */
function clean (strings, ...expressions) {
 return strings.reduce((prev,curr,index) => {
   return prev += curr + (expressions[index] || '')
 }, '')
}
