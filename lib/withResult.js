/**
 * withResult mixin
 * @function withResult
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const asMethodWrap = require('./helpers/asMethodWrap')
const injectProperties = require('./helpers/injectProperties')

/** @lends withResult */
const withResult = asClassMixin((Class) => {
  injectProperties(Class, {
    /**
     * Do action and store result
     * @param {function} action
     * @returns {Promise<*>} - Action result
     */
    async resultFor (action) {
      try {
        const result = await action.apply(this)
        const isUndefined = typeof result === 'undefined'
        if (isUndefined) {
          console.warn(`[${this.sceneName}] received undefined result`)
        } else {
          this.set({ result })
        }
        return result
      } catch (e) {
        this.scope.result.del()
        throw e
      }
    },
  })
})

module.exports = Object.assign(withResult,
  /** @lends withResult */
  {
    save: asMethodWrap((method) => {
      return async function resultSave (...args) {
        return await this.resultFor(async () => await method.apply(this, args))
      }
    }),
  })
