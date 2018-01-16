/**
 * withFailure mixin
 * @function withFailure
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withFailure */
function withFailure (Class) {
  class WithFailure extends Class {
    setFailure (failure) {
      this.set({failure})
    }

    clearFailure () {
      this.init('failure')
    }

    async catchFailure (e, options = {}) {
      const {messages = {}} = options
      const message = messages[e.name] || messages.default
      if (message) {
        this.setFailure(String(message))
      } else {
        return Promise.reject(e)
      }
    }
  }

  return WithFailure
}

module.exports = Object.assign(withFailure, {

})
