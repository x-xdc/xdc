'use strict'

const url = require('blear.utils.url')

const pkg = require('../package.json')

module.exports = function (pathname) {
  return url.join(pkg.homepage, pathname || '/') + '?from=' + pkg.name + '=' + pkg.version
}
