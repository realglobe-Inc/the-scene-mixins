/**
 * withSort mixin
 * @function withSort
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectClassMethods = require('./helpers/injectClassMethods')

const firstOfArray = (v) => v && (Array.isArray(v) ? v[0] : v)
const normalizeSort = (key) => {
  key = firstOfArray(key)
  if (!key) {
    return ''
  }
  return key.replace(/^-/, '') || ''
}

/** @lends withSort */
const withSort = asClassMixin((Class) => {
  injectClassMethods(Class, {
    getSort () {
      return this.get('sort')
    },
    setSort (name) {
      const current = this.get('sort')
      if (normalizeSort(current) === normalizeSort(name)) {
        name = /^-/.test(current) ? normalizeSort(current) : `-${current}`
      }
      this.set({ sort: name })
    },
  })
  return Class
})

module.exports = withSort
