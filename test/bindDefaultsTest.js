/**
 * Test for bindDefaults.
 * Runs with mocha.
 */
'use strict'

const bindDefaults = require('../lib/bindDefaults')
const {ok, equal} = require('assert')

describe('bindDefaults', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    const Class = bindDefaults(
      {foo: 'bar'}
    )(class {})

    const instance = new Class()
    equal(instance.defaults.foo, 'bar')
  })
})

/* global describe, before, after, it */
