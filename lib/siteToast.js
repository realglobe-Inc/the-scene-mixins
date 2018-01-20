/**
 * Site toast mix
 * @function siteToast
 * @returns {function} Annotated class
 */
'use strict'

/** @lends siteToast */
function siteToast (Class) {
  return class SiteToast extends Class {
    /**
     * Show info toast
     * @param {string} message
     */
    showInfo (message) {
      this.scope.info.push(message)
    }

    /**
     * Show warn toast
     * @param {string} message
     */
    showWarn (message) {
      this.scope.warn.push(message)
    }

    /**
     * Show error toast
     * @param {string} message
     */
    showError (message) {
      this.scope.error.push(message)
    }

    /**
     * Rest toasts
     * @param {Object.<string, string[]>} queues - Toast queue
     */
    reset (queues) {
      for (const [name, queue] of Object.entries(queues)) {
        this.scope[name].reset(queue)
      }
    }
  }
}

module.exports = siteToast
