/**
 * Define method wrapper
 * @function asMethodWrap
 */
'use strict'

/** @lends asMethodWrap */
function asMethodWrap (decorator) {
  return function methodWrap (elementDescriptor) {
    const isLegacyDecorator = ['kind', 'key', 'descriptor'].some((k) => !(k in elementDescriptor))
    if (isLegacyDecorator) {
      const [target, key, descriptor] = [...arguments]
      const { value: original } = descriptor
      descriptor.value = decorator(original)
      return descriptor
    }
    throw new Error(`[TheSceneMixin] Not implemented yet`)
  }
}

module.exports = asMethodWrap
