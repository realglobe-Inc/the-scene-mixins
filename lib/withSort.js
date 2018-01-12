/**
 * withSort mixin
 * @function withSort
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const normalizeSort = (key) => key.replace(/^-/, '')

/** @lends withSort */
function withSort (Class) {
  class WithSort extends Class {
    setSort (name) {
      const [current] = [].concat(this.get('sort') || [])
      if (normalizeSort(current) === normalizeSort(name)) {
        name = /^-/.test(current) ? normalizeSort(current) : `-${current}`
      }
      this.set({sort: [name]})
    }

    getSort () {
      return this.get('sort')
    }
  }

  return WithSort
}

module.exports = withSort
