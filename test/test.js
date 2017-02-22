'use strict'
const TestRunner = require('test-runner')
const clean = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('clean', function(t){
  const data = { one: 1 }
  a.strictEqual(clean`${data.one}${data.two}${data.three}`, '1')
})
