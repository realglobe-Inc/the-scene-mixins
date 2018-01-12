/**
 * withLocation mixin
 * @function withLocation
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {get} = require('bwindow')

/** @lends withLocation */
function withLocation (Class) {
  class WithLocation extends Class {
    changeLocationTo (href) {
      this.location.href = href
    }

    reloadLocation () {
      this.location.reload()
    }

    get location () {
      return get('location')
    }
  }

  return WithLocation
}

module.exports = withLocation
