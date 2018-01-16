/**
 * withPage mixin
 * @function withPage
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withPage */
function withPage (Class) {
  class WithPage extends Class {
    /** @deprecated */
    get defaultPageNumber () {
      return 1
    }

    /** @deprecated */
    get defaultPageSize () {
      return 25
    }

    getPage () {
      return {
        number: this.get('pageNumber') || 1,
        size: this.get('pageSize') || 25
      }
    }
  }

  return WithPage
}

module.exports = withPage
