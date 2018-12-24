/**
 * For bindDefaults
 * @function bindDefaults
 * @returns {function} method annotation function
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectClassMethods = require('./helpers/injectClassMethods')

/** @lends bindDefaults */
function bindDefaults (values) {
  return asClassMixin((Class) => {
    return class BindDefaultsDecorated extends Class {
      get defaults () {
        const normalized = typeof values === 'function' ? values(this) : values
        return {
          ...(super.defaults || {}),
          ...normalized,
        }
      }
    }
  })
}

module.exports = bindDefaults
