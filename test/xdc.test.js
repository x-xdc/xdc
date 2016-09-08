import test from 'ava'
import webpack from 'webpack'
import xdc from '../packages/xdc-cli/lib/xdc'

test('xdc set path', t => {
  xdc.set({publicPath: '/'})
  t.is(xdc.config.output.publicPath, '/')

  xdc.set({entry: 'src/index.html'})
  t.is(xdc.config.entry, 'src/index.html')

  xdc.set({dist: '/dist/abc'})
  t.is(xdc.config.output.path, '/dist/abc')
  t.is(xdc.config.output.publicPath, '/dist/')
})

test('xdc set template', t => {
  process.env.NODE_ENV = 'testing'

  let templateCount
  let templateCount2
  let templateCount3
  let templateCount4
  let templateCount5

  xdc.set({template: './src/abc.html'})
  templateCount = Object.keys(xdc.config.plugins).length

  xdc.set({
    template: {
      'index.html': './src/abc.html',
      'pageb.html': 'aaaaa.html',
      'pagec.html': 'aaaaasbbb.html'
    }
  })
  templateCount2 = Object.keys(xdc.config.plugins).length
  t.is(templateCount2 - templateCount, 2)

  xdc.set({
    template: {
      'index.html': './src/abc.html',
      'pageb.html': 'aaaaasbbb.html'
    }
  })
  templateCount3 = Object.keys(xdc.config.plugins).length
  t.is(templateCount3 - templateCount, 1)

  xdc.set({
    template: {
      'index.html': {
        template: './src/aaa.html'
      },
      'page.html': {
        name: 'haha',
        template: './src/bbb.html'
      }
    }
  })
  templateCount4 = Object.keys(xdc.config.plugins).length
  t.is(templateCount4 - templateCount, 1)

  xdc.set({
    template: [
      {
        filename: 'index.html',
        template: './src/aaa.html'
      },
      {
        filename: 'index2.html',
        template: './src/aaa.html'
      },
      {
        filename: 'index3.html',
        template: './src/aaa.html'
      }
    ]
  })

  templateCount5 = Object.keys(xdc.config.plugins).length
  t.is(templateCount5 - templateCount, 2)

  t.throws(function () {
    xdc.set({
      template: [
        {
          template: 'no-filename.html'
        },
        {
          filename: 'filename',
          template: 'aaaa.html'
        }
      ]
    })
  }, 'exit')
})

test('xdc set hash', t => {
  process.env.NODE_ENV = 'production'

  let hasHash = xdc.set({hash: true}).config.output.filename
  let noHash = xdc.set({}).config.output.filename
  let noHash2 = xdc.set({hash: false}).config.output.filename

  t.not(hasHash, noHash)
  t.is(noHash, noHash2)

  process.env.NODE_ENV = 'development'

  let devHasHash = xdc.set({hash: true}).config.output.filename
  let devNoHash = xdc.set({}).config.output.filename
  let devNoHash2 = xdc.set({hash: false}).config.output.filename

  t.is(devHasHash, devNoHash)
  t.is(devNoHash, devNoHash2)
})

test('xdc set format', t => {
  process.env.NODE_ENV = 'production'

  xdc.set({
    entry: './aaa/index.js',
    format: 'cjs'
  })

  t.is(xdc.config.output.libraryTarget, 'commonjs2')

  xdc.set({
    format: 'umd',
    moduleName: 'ABC'
  })

  t.is(xdc.config.output.library, 'ABC')
})

test('xdc set chunk', t => {
  xdc.set({
    chunk: 'vendor'
  })

  const chunk = new webpack.optimize.CommonsChunkPlugin('vendor')

  t.truthy(xdc.config.plugins['commons-chunk'])
  t.is(xdc.config.plugins['commons-chunk'].chunkNames, chunk.chunkNames)

  xdc.set({
    chunk: [
      {
        name: 'commonsA',
        filename: 'commonsA.js'
      },
      {
        name: 'commonsB'
      },
      {
        chunks: ['vendor', 'pageA']
      }
    ]
  })

  const chunkB = new webpack.optimize.CommonsChunkPlugin({
    name: 'commonsB',
    filename: 'commonsB.js'
  })
  const chunkC = new webpack.optimize.CommonsChunkPlugin({
    chunks: ['vendor', 'pageA']
  })

  // 插件存在
  t.truthy(xdc.config.plugins['0-chunk'])

  // 设置参数
  t.is(xdc.config.plugins['1-chunk'].chunkNames, chunkB.chunkNames)

  // 设置 chunks
  t.deepEqual(xdc.config.plugins['2-chunk'].selectedChunks, chunkC.selectedChunks)

  xdc.set({
    chunk: {
      chunkA: {
        name: 'name'
      }
    }
  })

  t.truthy(xdc.config.plugins['chunkA-chunk'])
})

test('xdc set extractCSS', t => {
  process.env.NODE_ENV = 'production'

  xdc.set({
    extractCSS: true
  })

  t.truthy(xdc.config.plugins.ExtractText)
  t.is(xdc.config.plugins.ExtractText.filename, '[name].css')

  xdc.set({
    extractCSS: true,
    hash: true
  })

  t.truthy(xdc.config.plugins.ExtractText)
  t.is(xdc.config.plugins.ExtractText.filename, '[name].[contenthash:7].css')

  xdc.set({
    extractCSS: false
  })

  t.falsy(xdc.config.plugins.ExtractText)

  xdc.set({
    extractCSS: '[name].abc.css'
  })

  t.is(xdc.config.plugins.ExtractText.filename, '[name].abc.css')

  process.env.NODE_ENV = 'development'
  xdc.set({
    extractCSS: '[name].abc.css'
  })
  t.falsy(xdc.config.plugins.ExtractText)
})

test('xdc set extractCSS in development', t => {
  process.env.NODE_ENV = 'development'

  xdc.set({
    devServer: {
      extractCSS: true
    }
  })

  t.truthy(xdc.config.plugins.ExtractText)
  t.is(xdc.config.plugins.ExtractText.filename, '[name].css')

  xdc.set({
    devServer: {
      extractCSS: true
    },
    hash: true
  })

  t.truthy(xdc.config.plugins.ExtractText)
  t.is(xdc.config.plugins.ExtractText.filename, '[name].css')

  xdc.set({
    extractCSS: false
  })

  t.falsy(xdc.config.plugins.ExtractText)

  xdc.set({
    devServer: {
      extractCSS: '[name].abc.css'
    }
  })

  t.is(xdc.config.plugins.ExtractText.filename, '[name].abc.css')
})

test('xdc clean', t => {
  xdc.set({
    clean: true
  })

  t.true(xdc.config.__xdc_CLEAN__)

  xdc.set({
    clean: false
  })

  t.false(xdc.config.__xdc_CLEAN__)
})

test('add method', t => {
  const loaderMP4Config = {
    test: /\.mp4$/,
    loaders: ['file-loader']
  }
  const loaderJSONConfig = {
    test: /\.json$/,
    loaders: ['ahhhh']
  }

  xdc.set({})
  xdc.add('loader.mp4', loaderMP4Config)
  xdc.add('loader.json', loaderJSONConfig)

  t.deepEqual(xdc.config.module.loaders.mp4, loaderMP4Config)
  t.deepEqual(xdc.config.module.loaders.json, loaderJSONConfig)
})

test('remove method', t => {
  xdc.set({})
  xdc.remove('loader.js')

  t.falsy(xdc.config.module.loaders.js)
})

test('resolve mothod', t => {
  xdc.set({
    entry: {}
  })

  const config = xdc.resolve()

  t.true(Array.isArray(config.module.loaders))
  t.true(Array.isArray(config.plugins))
})

test('sourceMap', t => {
  process.env.NODE_ENV = 'development'

  const config1 = xdc.set({
    entry: {},
    devServer: true,
    sourceMap: true
  }).resolve()
  const config2 = xdc.set({
    entry: {},
    sourceMap: false
  }).resolve()
  const config3 = xdc.set({
    entry: {},
    devServer: true,
    sourceMap: false
  }).resolve()
  const config4 = xdc.set({
    entry: {},
    devServer: {},
    sourceMap: true
  }).resolve()
  const config5 = xdc.set({
    entry: {},
    devServer: {
      enable: false
    },
    sourceMap: true
  }).resolve()
  const config6 = xdc.set({
    entry: {},
    devServer: {},
    sourceMap: '#eval'
  }).resolve()

  t.is(config1.devtool, '#eval-source-map')
  t.is(config2.devtool, false)
  t.is(config3.devtool, '#eval-source-map')
  t.is(config4.devtool, '#eval-source-map')
  t.is(config5.devtool, '#source-map')
  t.is(config6.devtool, '#eval-source-map')

  process.env.NODE_ENV = 'production'

  const config7 = xdc.set({
    entry: {},
    devServer: {},
    sourceMap: true
  }).resolve()
  const config8 = xdc.set({
    entry: {},
    devServer: {},
    sourceMap: '#eval'
  }).resolve()

  t.is(config7.devtool, '#source-map')
  t.is(config8.devtool, '#eval')
})

test('minimize', t => {
  const config = xdc.set({
    minimize: true
  })

  t.truthy(config.config.plugins.UglifyJs)
})

test('minimize css', t => {
  const config = xdc.set({
    minimize: {
      js: false,
      css: true
    }
  })

  t.falsy(config.config.plugins.UglifyJs)
})

test('minimize js', t => {
  const config = xdc.set({
    minimize: {
      js: true,
      css: false
    }
  })

  t.truthy(config.config.plugins.UglifyJs)
})

test('postcss', t => {
  const config = xdc.set({
    entry: {},
    postcss: [
      function () {},
      'xxx'
    ]
  }).resolve()

  t.is(typeof config.postcss, 'function')
  t.deepEqual(config.postcss(), [undefined, 'xxx'])
})
