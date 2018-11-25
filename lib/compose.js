'use strict'
/** @deprecated */
function compose (...mixins) {
  console.warn(`[TheSceneMixin] compose() is deprecated now`)
  return function composed (Class) {
    return mixins.reduce((Class, mix) => {
      return mix(...[].concat(Class, mix))
    }, Class)
  }
}

module.exports = compose
