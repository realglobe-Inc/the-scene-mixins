/**
 * withTargets mixin
 * @function withTargets
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

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
  }

  return WithTargets
}

module.exports = withTargets
