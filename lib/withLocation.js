/**
 * withLocation mixin
 * @function withLocation
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asleep = require('asleep')
const { get } = require('bwindow')
const asClassMixin = require('./helpers/asClassMixin')

/** @lends withLocation */
const withLocation = asClassMixin((Class) => {
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
     * Get location hash
     * @returns {*}
     */
    getLocationHash () {
      const { location } = this
      if (!location) {
        return null
      }
      return location.hash
    }

    /**
     * Set location hash
     * @param hash
     */
    setLocationHash (hash) {
      const { location } = this
      if (!location) {
        return
      }
      location.hash = hash
    }

    /**
     * Reload current location
     * @returns {Promise<void>}
     */
    async reloadLocation (options = {}) {
      const { timeout = 30 * 1000 } = options
      this.location.reload()
      await asleep(timeout) // Wait for reload
      throw new Error(`Failed to reload`)
    }
  }

  return WithLocation
})

module.exports = withLocation
