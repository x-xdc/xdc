var xdc = require('xdc')
const getBaseConfig = require('xdc/util/get-base-config')
const merge = require('xdc/util/merge')
const loadExtend = require('../util/load-extend')

exports.set = function (config) {
  config = config || {}
  this.config = merge(config, getBaseConfig(config))

  loadExtend(config.extends, {
    add: this.add,
    remove: this.remove,
    config: this.config,
    _userConfig: config
  })

  return this
}

exports.add = xdc.add
exports.remove = xdc.remove
exports.resolve = xdc.resolve
