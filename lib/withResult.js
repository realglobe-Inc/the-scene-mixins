/**
 * withResult mixin
 * @function withResult
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const qs = require('qs')

/** @lends withResult */
function withResult (Class) {
  class WithResult extends Class {

    /**
     * Do action and store result
     * @param {function} action
     * @returns {Promise<*>} - Action result
     */
    async resultFor (action) {
      try {
        const result = await action.appl(this)
        this.set({result})
        return result
      } catch (e) {
        this.result.del()
        throw e
      }
    }
  }

  return WithResult
}

module.exports = Object.assign(withResult,
  /** @lends withResult */
  {
    save (target, key, descriptor) {
      const {value: method} = descriptor
      descriptor.value = async function resultSave (...args) {
        await this.resultFor(() => method.apply(this, args))
      }
      return descriptor
    }
  })