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
     * Get holder
     * @returns {?string} holder
     */
    getHolder () {
      return this.get('holder', {strict: true})
    }

    /**
     * Check to have
     * @returns {Promise<boolean> | boolean}
     */
    hasHolder () {
      return this.has('holder')
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
      if (!this.hasHolder()) {
        return false
      }
      return this.getHolder() === String(holder)
    }

    /**
     * Set holder
     * @param {string} holder
     */
    setHolder (holder) {
      this.set({holder})
    }
  }

  return WithHolder
}

module.exports = withHolder
