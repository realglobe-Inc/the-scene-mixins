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
    async busyFor (task) {
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

module.exports = withBusy
