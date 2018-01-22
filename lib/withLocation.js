/**
 * withLocation mixin
 * @function withLocation
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {get} = require('bwindow')
const asleep = require('asleep')

/** @lends withLocation */
function withLocation (Class) {
  class WithLocation extends Class {
    /**
     * Change location to url
     * @param {string} href
     */
    changeLocationTo (href) {
      this.location.href = href
    }

    /**
     * Reload current location
     * @returns {Promise<void>}
     */
    async reloadLocation (options = {}) {
      const {timeout = 30 * 1000} = options
      this.location.reload()
      await asleep(timeout) // Wait for reload
      throw new Error(`Failed to reload`)
    }

    /**
     * Get location object
     * @returns {Location} - Global location object
     */
    get location () {
      return get('location')
    }
  }

  return WithLocation
}

module.exports = withLocation
