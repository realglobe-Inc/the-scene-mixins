/**
 * withEntities mixin
 * @function withEntities
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {uniqueFilter} = require('the-array')

/** @lends withEntities */
function withEntities (Class) {
  class WithEntities extends Class {
    /**
     * Add entities
     * @param {Object[]} entities
     */
    addEntities (entities) {
      this.set({
        entities: [...this.getEntities(), ...entities].filter(uniqueFilter.by('id')),
      })
    }

    getEntities () {
      return this.get('entities')
    }

    /**
     * Update existing entity
     * @param {Object} entity
     */
    updateEntity (entity) {
      const entities = this.getEntities().map((mapping) =>
        String(entity.id) === String(mapping.id) ? entity : mapping
      )
      this.set({entities})
    }

  }

  return WithEntities
}

module.exports = withEntities
