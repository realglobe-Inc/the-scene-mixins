/**
 * withValues mixin
 * @function withValues
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withValues */
function withValues (Class) {
  class WithValues extends Class {
    setValues (v) {
      this.scope.values.set(v)
    }

    dropValues () {
      this.scope.values.drop()
    }
  }

  return WithValues
}

module.exports = withValues
