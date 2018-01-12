/**
 * Test for withFilter.
 * Runs with mocha.
 */
'use strict'

const withFilter = require('../lib/withFilter')
const {ok, equal} = require('assert')

describe('with-filter', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    const WithFilter = withFilter(class {})
    ok(WithFilter)
  })
})

/* global describe, before, after, it */
