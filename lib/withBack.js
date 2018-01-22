/**
 * withBack mixin
 * @function withBack
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withBack */
function withBack (Class, options = {}) {
  const {top = '/'} = options

  class WithBack extends Class {

    /** Go Back */
    goBack () {
      const url = this.get('back') || top
      this.goTo(url)
    }
  }

  return WithBack
}

module.exports = withBack
