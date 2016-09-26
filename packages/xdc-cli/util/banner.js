'use strict'

const console = require('blear.node.console')

const pkg = require('../package.json')

const blank = function (length) {
  return new Array(length).join(' ')
}

module.exports = function () {
  console.log()
  console.log(
      // X
      console.colors.original(blank(1)),
      console.colors.red('xdc'),
      // D
      console.colors.original(blank(5)),
      console.colors.red('xdc'),
      console.colors.original(blank(3)),
      console.colors.yellow('xdc'),
      console.colors.yellow('xdc'),
      // C
      console.colors.original(blank(14)),
      console.colors.cyan('xdc'),
      console.colors.cyan('xdc')
  )
  console.log(
      // X
      console.colors.original(blank(2)),
      console.colors.red('xdc'),
      // D
      console.colors.original(blank(3)),
      console.colors.red('xdc'),
      console.colors.original(blank(4)),
      console.colors.yellow('xdc'),
      console.colors.original(blank(3)),
      console.colors.yellow('xdc'),
      // C
      console.colors.original(blank(8)),
      console.colors.cyan('xdc')
  )
  console.log(
      // X
      console.colors.original(blank(3)),
      console.colors.red('xdc'),
      // D
      console.colors.original(blank(1)),
      console.colors.red('xdc'),
      console.colors.original(blank(5)),
      console.colors.yellow('xdc'),
      console.colors.original(blank(5)),
      console.colors.yellow('xdc'),
      // C
      console.colors.original(blank(4)),
      console.colors.cyan('xdc')
  )
  console.log(
      // X
      console.colors.original(blank(5)),
      console.colors.red('xdc'),
      // D
      console.colors.original(blank(8)),
      console.colors.yellow('xdc'),
      console.colors.original(blank(6)),
      console.colors.yellow('xdc'),
      // C
      console.colors.original(blank(2)),
      console.colors.cyan('xdc')
  )
  console.log(
      // X
      console.colors.original(blank(3)),
      console.colors.red('xdc'),
      // D
      console.colors.original(blank(1)),
      console.colors.red('xdc'),
      console.colors.original(blank(5)),
      console.colors.yellow('xdc'),
      console.colors.original(blank(5)),
      console.colors.yellow('xdc'),
      // C
      console.colors.original(blank(4)),
      console.colors.cyan('xdc')
  )
  console.log(
      // X
      console.colors.original(blank(2)),
      console.colors.red('xdc'),
      // D
      console.colors.original(blank(3)),
      console.colors.red('xdc'),
      console.colors.original(blank(4)),
      console.colors.yellow('xdc'),
      console.colors.original(blank(3)),
      console.colors.yellow('xdc'),
      // C
      console.colors.original(blank(8)),
      console.colors.cyan('xdc')
  )
  console.log(
      // X
      console.colors.original(blank(1)),
      console.colors.red('xdc'),
      // D
      console.colors.original(blank(5)),
      console.colors.red('xdc'),
      console.colors.original(blank(3)),
      console.colors.yellow('xdc'),
      console.colors.yellow('xdc'),
      // C
      console.colors.original(blank(14)),
      console.colors.cyan('xdc'),
      console.colors.cyan('xdc')

  )
  console.log()
  console.log(
      console.colors.original(blank(1)),
      console.colors.grey(new Array(5).join('━')),
      console.colors.original(blank(1)),
      console.colors.original(pkg.description),
      console.colors.bgRed('verision: ' + pkg.version + ' '),
      console.colors.grey(new Array(5).join('━')),
      console.colors.original(blank(1))
  )
  console.log()
}
