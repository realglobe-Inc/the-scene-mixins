/**
 * withLocation mixin
 * @function withLocation
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asleep = require('asleep')
const {get} = require('bwindow')

/** @lends withLocation */
function withLocation (Class) {
  class WithLocation extends Class {
    /**
     * Get location object
     * @returns {Location} - Global location object
     */
    get location () {
      return get('location')
    }

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
  }

  return WithLocation
}

module.exports = withLocation
