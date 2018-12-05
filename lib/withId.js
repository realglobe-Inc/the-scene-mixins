/**
 * withId mixin
 * @function withId
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectClassMethods = require('./helpers/injectClassMethods')

/** @lends withId */
const withId = asClassMixin((Class) => {
  injectClassMethods(Class, {
    /**
     * Get id
     * @returns {?string} id
     */
    getId () {
      return this.get('id')
    },
    /**
     * Check if the id is known
     * @param {string} id
     * @returns {boolean}
     */
    isKnownId (id) {
      if (!id) {
        return false
      }
      return this.getId() === String(id)
    },
  })

  return Class
})

module.exports = withId
