/**
 * withPage mixin
 * @function withPage
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectProperties = require('./helpers/injectProperties')

/** @lends withPage */
const withPage = asClassMixin((Class) => {
  injectProperties(Class, {
    /**
     * Get page data
     * @returns {Object}
     */
    getPage () {
      return {
        number: this.get('pageNumber') || 1,
        size: this.get('pageSize') || 25,
      }
    },
  })
})

module.exports = withPage
