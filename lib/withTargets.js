/**
 * withTargets mixin
 * @function withTargets
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const { uniqueFilter } = require('the-array')
const asClassMixin = require('./helpers/asClassMixin')
const injectProperties = require('./helpers/injectProperties')

/** @lends withTargets */
const withTargets = asClassMixin((Class) => {
  injectProperties(Class, {
    /**
     * Add targets
     * @param targets
     */
    addTargets (targets) {
      this.set({
        targets: [
          ...this.get('targets'),
          ...targets
        ].filter(uniqueFilter.by('id')),
      })
    },
    /**
     * Get ids of target
     * @returns {String[]}
     */
    getTargetIds () {
      return this.getTargets().map(({ id }) => id).filter(uniqueFilter())
    },
    /**
     * Get refs of target
     * @returns {String[]}
     */
    getTargetRefs () {
      return this.getTargets().map(({ $$as, id }) => `${$$as}#${id}`).filter(uniqueFilter())
    },
    /**
     * Get target values
     */
    getTargets () {
      return this.get('targets').filter(Boolean)
    },
  })
})

module.exports = withTargets
