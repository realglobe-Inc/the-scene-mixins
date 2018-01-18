/**
 * withBusy mixin
 * @function withBusy
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withBusy */
function withBusy (Class) {
  class WithBusy extends Class {

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

    get isBusy () {
      return this.get('busy')
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
        await this.busyWhile(() => method.apply(this, args))
      }
      return descriptor
    }
  }
)
