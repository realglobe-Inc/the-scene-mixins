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
    /**
     * Get filter
     * @returns {Object}
     */
    getFilter () {
      return this.get('filter')
    }

    /** Set filters by q */
    setFilterByQ (q, options = {}) {
      const {
        and = {},
        fields = ['name'],
      } = options
      this.set({
        filter: q ? {
          $or: [].concat(fields).filter(Boolean).map((field) => ({
            [field]: Object.assign(
              {$like: `%${String(q).trim()}%`},
              and,
            ),
          })),
        } : {},
      })
      if (!q) {
        this.init('filter')
      }
    }
  }

  return WithFilter
}

module.exports = withFilter
