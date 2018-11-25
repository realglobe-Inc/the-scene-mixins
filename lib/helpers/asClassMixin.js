/**
 * Define as class mixin
 * @function asClassMixin
 */
'use strict'

/** @lends asClassMixin */
function asClassMixin (decorator) {
  return function classMixin (ClassDescriptor) {
    const isLegacyDecorator = typeof ClassDescriptor === 'function'
    if (isLegacyDecorator) {
      const Class = ClassDescriptor
      return decorator(Class)
    }
    throw new Error(`[TheSceneMixin] Not implemented yet`)
  }
}

module.exports = asClassMixin
