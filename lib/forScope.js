/**
 * For scope
 * @deprecated
 * @function forScope
 * @returns {function} method annotation function
 */
'use strict'

const bindScope = require('./bindScope')

/** @lends forScope */
function forScope (name) {
  console.warn('[the-scene-mixins] `forScope()` is now deprecated. Use bindScope() instead')
  return bindScope(name)
}

module.exports = forScope
