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

    /**
     * Add a entity
     * @param {Object} entity
     */
    addEntity (entity) {
      this.addEntities([entity])
    }

    /**
     * Delete entity
     * @param {Object} entity
     */
    deleteEntity (entity) {
      const entities = this.getEntities().filter((filtering) =>
        String(entity.id) !== String(filtering.id)
      )
      this.set({entities})
    }

    /**
     * Get entities
     * @returns {Object[]}
     */
    getEntities () {
      return this.get('entities')
    }

    /**
     * Receive an entity
     * @param entity
     */
    receiveEntity (entity) {
      const isKnown = this.get('entities').some(({id}) => String(id) === String(entity.id))
      if (isKnown) {
        this.updateEntity(entity)
      } else {
        this.addEntity(entity)
      }
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
