'use strict'

const logger = require('./logger')
const isObject = require('./is').Object
const pluginExists = require('./check').pluginExists

/* istanbul ignore next */
const importExtend = function (extend, xdc, options) {
  require(`xdc-${extend}`)(xdc, options)
  logger.success(`插件加载成功: ${extend}`)
}

/* istanbul ignore next */
/**
 * 加载并装配插件
 * @param  {array} extends
 * @param  {object} config - webpack config
 */
module.exports = function (_extends, xdc) {
  const isObj = isObject(_extends)

  Object.keys(_extends || {}).forEach(key => {
    const extend = isObj ? key : _extends[key]
    const options = isObj ? _extends[key] : {}
    const extendName = extend.split('@')[0]
    const packageName = `xdc-${extendName}`

    if (!pluginExists(packageName)) {
      logger.fatal(`请安装 ${packageName}, 执行 'npm i ${packageName} -D'`)
    }

    importExtend(extendName, xdc, options)
  })
  console.log()
}
