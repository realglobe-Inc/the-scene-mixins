/**
 * Mixins for the-scene
 * @module the-scene-mixins
 */
'use strict'

const _d = (m) => 'default' in m ? m.default : m

const compose = _d(require('./compose'))
const defaults = _d(require('./defaults'))
const forScope = _d(require('./forScope'))
const scope = _d(require('./scope'))
const withBack = _d(require('./withBack'))
const withBusy = _d(require('./withBusy'))
const withEntry = _d(require('./withEntry'))
const withFailure = _d(require('./withFailure'))
const withFilter = _d(require('./withFilter'))
const withHistory = _d(require('./withHistory'))
const withLocation = _d(require('./withLocation'))
const withPage = _d(require('./withPage'))
const withQuery = _d(require('./withQuery'))
const withReady = _d(require('./withReady'))
const withSort = _d(require('./withSort'))
const withValues = _d(require('./withValues'))

module.exports = {
  compose,
  defaults,
  forScope,
  scope,
  withBack,
  withBusy,
  withEntry,
  withFailure,
  withFilter,
  withHistory,
  withLocation,
  withPage,
  withQuery,
  withReady,
  withSort,
  withValues,
}
