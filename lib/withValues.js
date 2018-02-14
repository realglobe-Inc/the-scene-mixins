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
    dropValues () {
      this.scope.values.drop()
    }

    setValues (v) {
      this.scope.values.set(v)
    }
  }

  return WithValues
}

module.exports = withValues
