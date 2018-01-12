/**
 * withReady mixin
 * @function withReady
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withReady */
function withReady (Class) {
  class WithReady extends Class {
    get isReady () {
      return this.get('ready')
    }

    async ifReady (task) {
      if (this.isReady) {
        return await task()
      }
    }

    async unlessReady (task) {
      if (!this.isReady) {
        return await task()
      }
    }

    async readyFor (task) {
      this.set({ready: false})
      try {
        return await task()
      } finally {
        this.set({ready: true})
      }
    }
  }

  return WithReady
}

module.exports = withReady
