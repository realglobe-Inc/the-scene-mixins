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
      get bindDefaults () {
        if (typeof values === 'function') {
          return values(this)
        }
        return values
      }
    }
  }
}

module.exports = bindDefaults