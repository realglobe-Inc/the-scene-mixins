/**
 * withQuery mixin
 * @function withQuery
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {cleanup} = require('asobj')
const {get} = require('bwindow')
const qs = require('qs')

/** @lends withQuery */
function withQuery (Class) {
  class WithQuery extends Class {
    /**
     * Get query from search
     * @param {string} [search=location.search]
     * @returns {Object}
     */
    getQueryFromSearch (search = get('location.search')) {
      if (!search) {
        return {}
      }
      return qs.parse(search, {ignoreQueryPrefix: true})
    }

    /**
     * Merge additional query into search
     * @param {Object} query
     */
    mergeQueryToSearch (query) {
      const merged = cleanup({
        ...this.getQueryFromSearch(),
        ...query,
      }, {
        delEmptyString: true,
        delNull: true,
      })
      const search = '?' + qs.stringify(merged)

      const {history} = this
      if (history.location.search !== search) {
        history.replace({search})
      }
    }

    /**
     * Set query by search string
     * @param {string} search
     */
    setQueryBySearch (search) {
      this.set({query: qs.parse(search, {ignoreQueryPrefix: true})})
    }
  }

  return WithQuery
}

module.exports = withQuery
