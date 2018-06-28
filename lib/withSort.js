/**
 * withSort mixin
 * @function withSort
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const normalizeSort = (key) => key && key.replace(/^-/, '') || ''

/** @lends withSort */
function withSort (Class) {
  class WithSort extends Class {
    getSort () {
      return this.get('sort')
    }

    setSort (name) {
      const current = this.get('sort')
      if (normalizeSort(current) === normalizeSort(name)) {
        name = /^-/.test(current) ? normalizeSort(current) : `-${current}`
      }
      this.set({sort: name})
    }
  }

  return WithSort
}

module.exports = withSort
