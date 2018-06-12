'use strict'

const {withBusy} = require('the-scene-mixins')
const {TheScene} = require('the-scene-base')

async function tryExample () {
  const MyScene = withBusy(
    class MySceneBase extends TheScene {
    }
  )
}

tryExample().catch((err) => console.error(err))
