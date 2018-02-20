/**
 * withBusy mixin
 * @function withBusy
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asleep = require('asleep')

/** @lends withBusy */
function withBusy (Class) {
  class WithBusy extends Class {

    /**
     * Is busy or not
     * @returns {boolean}
     */
    isBusy () {
      return this.get('busy')
    }

    /**
     * Set busy true while task active
     * @param {function} task
     * @returns {Promise<void>}
     */
    async busyWhile (task) {
      this.set({busy: true})
      try {
        return await task.call(this)
      } finally {
        this.set({busy: false})
      }
    }

    /**
     * Wait while busy
     * @returns {Promise<void>}
     */
    async waitWhileBusy () {
      await asleep(1)
      while (this.isBusy()) {
        await asleep(1)
      }
    }
  }

  return WithBusy
}

module.exports = Object.assign(withBusy,
  /** @lends withBusy */
  {
    while (target, key, descriptor) {
      const {value: method} = descriptor
      descriptor.value = async function busyWhileWrap (...args) {
        return await this.busyWhile(async () => await method.apply(this, args))
      }
      return descriptor
    },
  }
)
