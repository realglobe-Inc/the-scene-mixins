/**
 * For bindScope
 * @function bindScope
 * @returns {function} Class annotation function
 */
'use strict'

/** @lends bindScope */
function bindScope (name) {
  return function bindScopeDecoration (Class) {
    return class BindScopeDecorated extends Class {
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

module.exports = bindScope
