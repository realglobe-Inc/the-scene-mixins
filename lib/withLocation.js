/**
 * withLocation mixin
 * @function withLocation
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {get} = require('bwindow')
const {asleep} = require('asleep')

/** @lends withLocation */
function withLocation (Class) {
  class WithLocation extends Class {
    changeLocationTo (href) {
      this.location.href = href
    }

    async reloadLocation () {
      this.location.reload()
      await asleep(30 * 1000)
      throw new Error(`Failed to reload`)
    }

    get location () {
      return get('location')
    }
  }

  return WithLocation
}

module.exports = withLocation
