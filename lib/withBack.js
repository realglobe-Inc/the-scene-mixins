/**
 * withBack mixin
 * @function withBack
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')

/** @lends withBack */
const withBack = asClassMixin((Class) => {
  class WithBack extends Class {
    /** Go Back */
    async goBack () {
      const url = this.get('back') || '/'
      await this.goTo(url)
    }
  }

  return WithBack
})

module.exports = withBack
