'use strict'

const _toArray = require('lodash.toarray')
const shelljs = require('shelljs')

module.exports = function (config) {
  // parse loader
  [
    'loaders',
    'preLoaders',
    'postLoaders'
  ].forEach(key => {
    config.module[key] = _toArray(config.module[key])
  })
  // parse plugin
  config.plugins = _toArray(config.plugins)

  // install resolve path
  require('./load-resolve-path')(config)

  if (process.env.NODE_ENV === 'development') {
    // install dev server
    config.devServer = require('../util/load-server')(config.devServer)
    if (config.devServer.enable) {
      config.devServer.host = config.devServer.protocol + '//' + config.devServer.hostname + ':' + config.devServer.port
    }

    // update path
    config.output.publicPath = config.devServer.publicPath || config.output.publicPath || '/'
  }

  // load hot loader
  config.entry = require('./hot-reload')(
    config.entry,
    process.env.NODE_ENV === 'development' ? config.devServer : false
  )

  if (config.__xdc_CLEAN__) {
    shelljs.rm('-rf', config.output.path)
  }

  return config
}
