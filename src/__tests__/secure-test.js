/* eslint-env node,testing */
/* eslint no-magic-numbers:0 */

import test from 'ava'
import secure from '../secure'

test('secure.key', t => {
  console.log('secure.key', secure.key)
  t.pass()
})

test('secure.rand', t => {
  console.log('secure.rand()', secure.rand())
  t.pass()
})

test('secure.sha1', t => {
  t.is(secure.sha1('hello'), 'aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d')
})

test('secure.sign', t => {
  console.log("secure.sign('hello world', 'secure key')", secure.sign('hello world', 'secure key'))
  t.pass()
})

test('secure.sign with default secure key', t => {
  console.log("secure.sign('hello world')", secure.sign('hello world'))
  t.pass()
})
