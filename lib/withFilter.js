/**
 * withFilter mixin
 * @function withFilter
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {cleanup} = require('asobj')

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
      this.init('filter')
      const andValues = cleanup(and, {
        delEmptyString: true,
        delNull: true,
      })
      if (q) {
        this.set({
          filter: {
            $or: [].concat(fields).filter(Boolean).map((field) => ({
              [field]: Object.assign(
                {$like: `%${String(q).trim()}%`},
              ),
            })),
            ...andValues,
          },
        })
      } else {
        this.set({filter: Object.assign({}, andValues)})
      }
    }
  }

  return WithFilter
}

module.exports = withFilter
