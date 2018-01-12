/**
 * Test for withEntry.
 * Runs with mocha.
 */
'use strict'

const withEntry = require('../lib/withEntry')
const {ok, equal} = require('assert')

describe('with-entry', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    const WithEntry = withEntry(
      class {
        get scope () {
          return {}
        }
      }
    )
    const obj = new WithEntry()
    ok(obj)
  })
})

/* global describe, before, after, it */
