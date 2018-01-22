/**
 * withFilter mixin
 * @function withFilter
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

/** @lends withFilter */
function withFilter (Class) {
  class WithFilter extends Class {
    /** Set filters by q */
    setFilterByQ (q, options = {}) {
      const {fields = ['name']} = options
      this.set({
        filter: q ? [].concat(fields).filter(Boolean).map((field) => ({
          [field]: {$like: `%${String(q).trim()}%`}
        })) : {}
      })
      if (!q) {
        this.init('filter')
      }
    }

    /** Get filter */
    getFilter () {
      return this.get('filter')
    }
  }

  return WithFilter
}

module.exports = withFilter
