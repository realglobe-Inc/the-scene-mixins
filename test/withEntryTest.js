/**
 * Test for withEntry.
 * Runs with mocha.
 */
'use strict'

const withEntry = require('../lib/withEntry')
const { ok, equal } = require('assert')

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
              set (values) {
                console.log(this)
                Object.assign(this.state, values)
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
      a: [{ i: 1 }, { i: 2 }]
    })

    obj.setEntry({
      a: [{ i: 1 }]
    })

  })
})

/* global describe, before, after, it */
