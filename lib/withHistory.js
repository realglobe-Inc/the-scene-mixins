/**
 * withHistory mixin
 * @function withHistory
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const qs = require('qs')

/** @lends withHistory */
function withHistory (Class) {
  class WithHistory extends Class {
    replaceHistoryByQuery (query) {
      const queryString = qs.stringify(query)
      this.history.replace({search: queryString ? `?${queryString}` : ''})
    }
  }

  return WithHistory
}

module.exports = withHistory
