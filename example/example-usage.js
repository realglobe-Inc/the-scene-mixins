'use strict'

const {withBusy} = require('the-scene-mixins')
const {TheScene} = require('the-scene-base')

async function tryExample () {
  withBusy(class extends TheScene {

  })
}

tryExample().catch((err) => console.error(err))
