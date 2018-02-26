/**
 * withHolder mixin
 * @function withHolder
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withHolder */
function withHolder (Class) {
  class WithHolder extends Class {
    /**
     * Get id
     * @returns {?string} id
     */
    getHolder () {
      return this.get('holder')
    }

    /**
     * Check if the holder is known
     * @param {string} holder
     * @returns {boolean}
     */
    isKnownHolder (holder) {
      if (!holder) {
        return false
      }
      return this.getHolder() === String(holder)
    }

    /**
     * Set holder
     * @param {string} holder
     */
    setHolder (holder) {
      this.set('holder')
    }
  }

  return WithHolder
}

module.exports = withHolder
