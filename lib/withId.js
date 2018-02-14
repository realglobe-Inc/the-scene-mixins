/**
 * withId mixin
 * @function withId
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withId */
function withId (Class) {
  class WithId extends Class {
    /**
     * Get id
     * @returns {?string} id
     */
    getId () {
      return this.get('id')
    }

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
    }
  }

  return WithId
}

module.exports = withId