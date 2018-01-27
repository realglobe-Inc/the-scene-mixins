/**
 * For bindScope
 * @function bindScope
 * @returns {function} Class annotation function
 */
'use strict'

const {unlessProduction} = require('the-check')

/** @lends bindScope */
function bindScope (name) {
  unlessProduction(() => {
    if (!name) {
      throw new Error(`[bindScope] name is required`)
    }
  })
  return function bindScopeDecoration (Class) {
    return class BindScopeDecorated extends Class {
      get scope () {
        const nameComponents = name.split('.')
        let scope = this.store
        while (nameComponents.length > 0) {
          scope = scope[nameComponents.shift()]
          unlessProduction(() => {
            if (!scope) {
              throw new Error(`Scope "${name}" is not found in the store`)
            }
          })
        }
        return scope
      }
    }
  }
}

module.exports = bindScope
