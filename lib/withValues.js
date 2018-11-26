/**
 * withValues mixin
 * @function withValues
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')

/** @lends withValues */
const withValues = asClassMixin((Class) => {
  class WithValues extends Class {
    dropValues () {
      this.scope.values.drop()
    }

    setValues (v) {
      this.scope.values.set(v)
    }
  }

  return WithValues
})

module.exports = withValues
