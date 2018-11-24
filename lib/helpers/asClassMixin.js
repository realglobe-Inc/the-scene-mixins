/**
 * Define as class mixin
 * @function asClassMixin
 */
'use strict'

/** function asClassMixin */
function asClassMixin (decorator) {
  return function classMixin (Class) {
    const isLegacyDecorator = typeof Class === 'function'
    if (isLegacyDecorator) {
      return decorator(Class)
    }
    throw new Error(`[TheSceneMixin] Not implemented yet`)
  }
}

module.exports = asClassMixin
