/**
 * withForm mixin
 * @function withForm
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {get} = require('bwindow')

/** @lends withForm */
function withForm (Class) {
  class WithForm extends Class {
    async postForm (url, values) {
      return this.sendForm(url, values, {method: 'post'})
    }

    async sendForm (url, values, options = {}) {
      const {method = 'post'} = options
      const body = this._createFormData(values)
      const response = await fetch(url, {
        body,
        method,
      })
      return await response.json()
    }

    _createFormData (values) {
      const FormData = get('FormData')
      const form = new FormData()
      for (const [k, v] of Object.entries(values)) {
        form.append(k, v)
      }
      return form
    }
  }

  return WithForm
}

module.exports = withForm
