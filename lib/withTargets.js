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
    }

    /**
     * Get ids of target
     * @returns {String[]}
     */
    getTargetIds () {
      return this.getTargets().map(({id}) => id)
    }

    /**
     * Get refs of target
     * @returns {String[]}
     */
    getTargetRefs () {
      return this.getTargets().map(({$$as, id}) => `${$$as}#${id}`)
    }

    /**
     * Get target values
     */
    getTargets () {
      return this.get('targets').filter(Boolean)
    }
  }

  return WithTargets
}

module.exports = withTargets
