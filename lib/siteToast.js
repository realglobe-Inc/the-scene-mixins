/**
 * Site toast mix
 * @function siteToast
 * @returns {function} Annotated class
 */
'use strict'

const asClassMixin = require('./helpers/asClassMixin')
const injectProperties = require('./helpers/injectProperties')

/** @lends siteToast */
const siteToast = asClassMixin((Class) => {
  injectProperties(Class, {
    /**
     * Rest toasts
     * @param {Object.<string, string[]>} queues - Toast queue
     */
    reset (queues) {
      for (const [name, queue] of Object.entries(queues)) {
        this.scope[name].reset(queue)
      }
    },
    /**
     * Show error toast
     * @param {string} message
     */
    showError (message) {
      this.scope.error.push(message)
    },
    /**
     * Show info toast
     * @param {string} message
     */
    showInfo (message) {
      this.scope.info.push(message)
    },
    /**
     * Show warn toast
     * @param {string} message
     */
    showWarn (message) {
      this.scope.warn.push(message)
    },
  })
})

module.exports = siteToast
