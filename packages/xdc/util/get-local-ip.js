'use strict'
const os = require('os')

const ifaces = os.networkInterfaces()

const dev = 'en0'
/**
 * 获取本地IP地址
 */
module.exports = function () {
  let iptable = {}
  ifaces[dev].forEach(function (details) {
    if (details.family === 'IPv4') {
      iptable = details.address
    }
  })
  return iptable
}
