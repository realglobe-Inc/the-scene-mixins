/**
 * withResize mixin
 * @function withResize
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const { get } = require('bwindow')
const asClassMixin = require('./helpers/asClassMixin')

/** @lends withResize */
const withResize = asClassMixin((Class) => {
  class WithResize extends Class {
    constructor () {
      super(...arguments)
      this.resize = this.resize.bind(this)
    }

    resize () {
      throw new Error('[WithResize] `this.resize()` is not implement')
    }

    startResizing () {
      const window = get('window')
      window.addEventListener('resize', this.resize)
    }

    stopResizing () {
      const window = get('window')
      window.removeEventListener('resize', this.resize)
    }
  }

  return WithResize
})

module.exports = withResize
