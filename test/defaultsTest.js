/**
 * Test for defaults.
 * Runs with mocha.
 */
'use strict'

const defaults = require('../lib/defaults')
const {ok, equal} = require('assert')

describe('defaults', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    const Class = defaults(
      {foo: 'bar'}
    )(class {})

    const instance = new Class()
    equal(instance.defaults.foo, 'bar')
  })
})

/* global describe, before, after, it */
