/**
 * withValues mixin
 * @function withValues
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectClassMethods = require('./helpers/injectClassMethods')

/** @lends withValues */
const withValues = asClassMixin((Class) => {
  injectClassMethods(Class, {
    dropValues () {
      this.scope.values.drop()
    },

    setValues (v) {
      this.scope.values.set(v)
    },
  })

  return Class
})

module.exports = withValues
