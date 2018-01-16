/**
 * For scope
 * @function scope
 * @returns {function} method annotation function
 */
'use strict'

/** @lends scope */
function scope (name) {
  return function ScopeDecoration (Class) {
    return class ScopeDecorated extends Class {
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

module.exports = scope
