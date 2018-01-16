/**
 * For scope
 * @deprecated
 * @function forScope
 * @returns {function} method annotation function
 */
'use strict'

const scope = require('./scope')

/** @lends forScope */
function forScope (name) {
  console.warn('[the-scene-mixins] `forScope()` is now deprecated. Use scope() instead')
  return scope(name)
}

module.exports = forScope
