/**
 * withLimit mixin
 * @function withLimit
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectClassMethods = require('./helpers/injectClassMethods')

/** @lends withLimit */
const withLimit = asClassMixin((Class) => {
  injectClassMethods(Class, {
    /**
     * Get limit
     * @returns {number}
     */
    getLimit () {
      return this.get('limit')
    },
    /**
     * Next limit
     * @returns {number}
     */
    nextLimit () {
      return this.getLimit() * 2
    },
    /**
     * Set limit
     * @param {number} limit
     */
    setLimit (limit) {
      return this.set({ limit })
    },
    /**
     * Update to next limit
     */
    updateToNextLimit () {
      const limit = this.nextLimit()
      this.setLimit(limit)
    },
  })

  return Class
})

module.exports = withLimit
