/**
 * Test for forScope.
 * Runs with mocha.
 */
'use strict'

const forScope = require('../lib/forScope')
const {ok, equal} = require('assert')

describe('for-scope', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    const ForScope = forScope('hoge')(class {
      constructor () {
        this.store = {
          hoge: {a: 1}
        }
      }
    })
    const instance = new ForScope()
    equal(instance.scope.a, 1)
  })
})

/* global describe, before, after, it */
