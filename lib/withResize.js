/**
 * withResize mixin
 * @function withResize
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {get} = require('the-window')

/** @lends withResize */
function withResize (Class) {
  class WithResize extends Class {
    constructor () {
      super(...arguments)
      this.resize = this.resize.bind(this)
    }

    resize () {
      throw new Error('[WithResize] `this.resize()` is not implement')
    }

    startWithResize () {
      const window = get('window')
      window.addEventListener('resize', this.resize)
    }

    stopWithResize () {
      const window = get('window')
      window.removeEventListener('resize', this.resize)
    }
  }

  return WithResize
}

module.exports = withResize
