/**
 * For scope
 * @function forScope
 * @returns {function} method annotation function
 */
'use strict'

/** @lends forScope */
function forScope (name) {
  return function ForScopeAnnotation (Class) {
    return class ForScoped extends Class {
      get scope () {
        const has = name in this.store
        if (!has) {
          throw new Error(`Scope "${name}" is not found in the store`)
        }
        return this.store[name]
      }
    }
  }
}

module.exports = forScope
