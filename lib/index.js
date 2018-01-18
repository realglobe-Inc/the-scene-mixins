/**
 * Mixins for the-scene
 * @module the-scene-mixins
 */
'use strict'

const _d = (m) => 'default' in m ? m.default : m

const bindDefaults = _d(require('./bindDefaults'))
const bindScope = _d(require('./bindScope'))
const compose = _d(require('./compose'))
const forScope = _d(require('./forScope'))
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
const withResult = _d(require('./withResult'))
const withSort = _d(require('./withSort'))
const withTargets = _d(require('./withTargets'))
const withValues = _d(require('./withValues'))

module.exports = {
  bindDefaults,
  bindScope,
  compose,
  forScope,
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
  withResult,
  withSort,
  withTargets,
  withValues,
}
