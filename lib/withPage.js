/**
 * withPage mixin
 * @function withPage
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')

/** @lends withPage */
const withPage = asClassMixin((Class) => {
  class WithPage extends Class {
    /** @deprecated */
    get defaultPageNumber () {
      return 1
    }

    /** @deprecated */
    get defaultPageSize () {
      return 25
    }

    /**
     * Get page data
     * @returns {Object}
     */
    getPage () {
      return {
        number: this.get('pageNumber') || 1,
        size: this.get('pageSize') || 25,
      }
    }
  }

  return WithPage
})

module.exports = withPage
