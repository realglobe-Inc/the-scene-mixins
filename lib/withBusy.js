/**
 * withBusy mixin
 * @function withBusy
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asleep = require('asleep')
const asClassMixin = require('./helpers/asClassMixin')
const asMethodWrap = require('./helpers/asMethodWrap')
const injectClassMethods = require('./helpers/injectClassMethods')

/** @lends withBusy */
const withBusy = asClassMixin((Class) => {
  injectClassMethods(Class, {
    /**
     * Is busy or not
     * @returns {boolean}
     */
    isBusy () {
      return this.get('busy')
    },

    /**
     * Wait busy for
     * @param {number} duration
     * @returns {Promise<void>}
     */
    async busyFor (duration = 0) {
      this.set({ busy: true })
      await asleep(duration)
      this.set({ busy: false })
    },

    /**
     * Set busy true while task active
     * @param {function} task
     * @returns {Promise<void>}
     */
    async busyWhile (task) {
      this.set({ busy: true })
      try {
        return await task.call(this)
      } finally {
        this.set({ busy: false })
      }
    },

    /**
     * Wait while busy
     * @returns {Promise<void>}
     */
    async waitWhileBusy () {
      await asleep(1)
      while (this.isBusy()) {
        await asleep(1)
      }
    },
  })

  return Class
})

module.exports = Object.assign(withBusy,
  /** @lends withBusy */
  {
    sequential: asMethodWrap((method) => {
      return async function busyWhileWrap (...args) {
        await this.waitWhileBusy()
        return await method.apply(this, args)
      }
    }),
    while: asMethodWrap((method) => {
      return async function busyWhileWrap (...args) {
        return await this.busyWhile(async () => await method.apply(this, args))
      }
    }),
  }
)
