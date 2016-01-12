var test = require('tape')
var clean = require('../')

test('clean', function(t){
  const data = { one: 1 }
  t.strictEqual(clean`${data.one}${data.two}${data.three}`, '1')
  t.end()
})
