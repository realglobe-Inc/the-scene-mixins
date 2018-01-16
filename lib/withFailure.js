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
  catch (catcher) {
    return function catchDecorate (target, key, descriptor) {
      const {value: method} = descriptor
      descriptor.value = async function failureCatch (...args) {
        return Promise.resolve(method.apply(this, args)).catch((e) =>
          this.catchFailure(e, {messages: catcher(this)})
        )
      }
      return descriptor
    }
  }
})
