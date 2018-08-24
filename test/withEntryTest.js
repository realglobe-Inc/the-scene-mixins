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
          return {
            entry: {
              set (k, v) {
                this[k] = v
              },
              state: {},
            },
            entryErrors: {
              state: {},
            }
          }
        }
      }
    )
    const obj = new WithEntry()
    ok(obj)

    obj.setEntry({
      a: [{i: 1}, {i: 2}]
    })
  })
})

/* global describe, before, after, it */
