/**
 * withQuery mixin
 * @function withQuery
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const qs = require('qs')
const {get} = require('bwindow')
const {cleanup} = require('asobj')

/** @lends withQuery */
function withQuery (Class) {
  class WithQuery extends Class {
    /**
     * Set query by search string
     * @param {string} search
     */
    setQueryBySearch (search) {
      this.set({query: qs.parse(search, {ignoreQueryPrefix: true})})
    }

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
        ...query
      }, {
        delNull: true,
        delEmptyString: true,
      })
      const search = '?' + qs.stringify(merged)
      this.history.replace(search)
    }
  }

  return WithQuery
}

module.exports = withQuery
