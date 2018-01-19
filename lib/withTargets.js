/**
 * withTargets mixin
 * @function withTargets
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {uniqueFilter} = require('the-array')

/** @lends withTargets */
function withTargets (Class) {
  class WithTargets extends Class {
    /**
     * Get target values
     */
    getTargets () {
      return this.get('targets').filter(Boolean)
    }

    /**
     * Get ids of target
     * @returns {String[]}
     */
    getTargetIds () {
      return this.getTargets().map(({id}) => id)
    }

    /**
     * Add targets
     * @param targets
     */
    addTargets (targets) {
      this.set({
        targets: [
          ...this.get('targets'),
          ...targets
        ].filter(uniqueFilter.by('id'))
      })
    }
  }

  return WithTargets
}

module.exports = withTargets
