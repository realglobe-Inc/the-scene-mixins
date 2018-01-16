/**
 * For defaults
 * @function defaults
 * @returns {function} method annotation function
 */
'use strict'

/** @lends defaults */
function defaults (values) {
  return function defaultsDecoration (Class) {
    return class defaultsDecorated extends Class {
      get defaults () {
        if (typeof values === 'function') {
          return values(this)
        }
        return values
      }
    }
  }
}

module.exports = defaults
