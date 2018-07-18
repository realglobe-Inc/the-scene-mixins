/**
 * For bindDefaults
 * @function bindDefaults
 * @returns {function} method annotation function
 */
'use strict'

/** @lends bindDefaults */
function bindDefaults (values) {
  return function bindDefaultsDecoration (Class) {
    return class BindDefaultsDecorated extends Class {
      get defaults () {
        const normalized = values === 'function' ? values(this) : values
        return {
          ...(super.defaults || {}),
          ...normalized,
        }
      }
    }
  }
}

module.exports = bindDefaults
