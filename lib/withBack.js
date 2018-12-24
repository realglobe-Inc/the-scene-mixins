/**
 * withBack mixin
 * @function withBack
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectClassMethods = require('./helpers/injectClassMethods')

/** @lends withBack */
const withBack = asClassMixin((Class) => {
  injectClassMethods(Class, {
    /** Go Back */
    async goBack () {
      const url = this.get('back') || '/'
      await this.goTo(url)
    },
  })
  return Class
})

module.exports = withBack
