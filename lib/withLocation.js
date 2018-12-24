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
const injectProperties = require('./helpers/injectProperties')

/** @lends withLocation */
const withLocation = asClassMixin((Class) => {
  injectProperties(Class, {
    /**
     * Change location to url
     * @param {string} href
     */
    changeLocationTo (href) {
      this.location.href = href
    },
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
    },
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
    },
    /**
     * Reload current location
     * @returns {Promise<void>}
     */
    async reloadLocation (options = {}) {
      const { timeout = 30 * 1000 } = options
      this.location.reload()
      await asleep(timeout) // Wait for reload
      throw new Error(`Failed to reload`)
    },
    location: {
      get () {
        return get('location')
      },
    },
  })

  return Class
})

module.exports = withLocation
