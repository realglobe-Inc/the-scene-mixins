/**
 * withEntry mixin
 * @function withEntry
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const {expand, flatten} = require('objnest')
const {TheError} = require('the-error')

/** @lends withEntry */
function withEntry (Class) {
  class EntryMixed extends Class {
    dropEntry () {
      const {entry, entryErrors} = this.scope
      entry.drop()
      entryErrors.drop()
    }

    setEntry (values) {
      values = flatten(values)
      const {entry, entryErrors} = this.scope
      if (this.formatEntry) {
        values = this.formatEntry(values)
      }
      entry.set(values)

      {
        const names = Object.keys(values)
          .filter((name) => entryErrors.state[name])
        if (names.length > 0) {
          entryErrors.del(...names)
        }
      }
    }

    getEntry () {
      return this.get('entry')
    }

    hasEntryErrorFor (name) {
      const entryErrors = this.get('entryErrors')
      return name in entryErrors
    }

    /**
     * Process an entry
     * @param {function} handler
     * @returns {Promise<void>}
     */
    async processEntry (handler) {
      const {entry, entryErrors} = this.scope
      entryErrors.drop()
      const values = expand(entry.state)
      try {
        return await Promise.resolve(handler.call(this, values))
      } catch (e) {
        entryErrors.set(this.catchEntryError(e))
        throw Object.assign(
          new TheError('Failed to process entry', {}, {resolved: true})
        )
      }
    }
  }

  return EntryMixed
}

module.exports = withEntry
