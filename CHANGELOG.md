# CHANGELOG

## [v1.0.0-rc.3] 2016.09.06
- 修复 xdc-cli 的依赖
- update/import/remove 支持传入多个参数

## [v1.0.0-rc.2] 2016.09.05
- 将 xdc 拆分成 `xdc-cli` 和 `xdc`(runtime) 两个部分，以后可以全局或者本地安装 xdc
- 新增 alias、externals 配置项

## [v1.0.0-beta.1] 2016.7.26
- 修复 postcss 选项

## [v1.0.0-beta] 2016.7.05
- 使用 webpack 2.1-beta
- 新增 postcss 及 postcss 选项设置
- 优化 extend 选项，支持 `['plugin', ['plugin', options]]` 的方式传入参数
- 修复 css 的 sourceMap

## [v0.6.1] 2016.8.15
- 修复 安装测试指令失败的问题
- 修复 读取配置文件内容不正确

## [v0.6.0] 2016.8.14
- 新增 测试功能 [文档](http://xdcjs.github.io/test.html)

## [v0.5.8] 2016.7.26
- 无更新，纯属为了修复手贱错发了 beta

## [v0.5.7] 2016.7.21
- 升级 webpack-hud，修复了 devServer.log 开启时部分 Android 访问页面空白

## [v0.5.6] 2016.7.01
- 新增 sourceMap 支持 boolean 和 string 填 true 将使用 `#source-map`，开发模式下默认还是 `#eval-source-map`
- 修复 build 情况下出现 `a dependency to an entry point is not allowed` 的错误

## [v0.5.5] 2016.6.29
- 修复 Windows 下打包的资源路径

## [v0.5.4] 2016.6.14
- 继续修复 publicPath 的问题

## [v0.5.3] 2016.6.14
- 修复 build 时 publicPath 未生效

## [v0.5.2] 2016.6.14
- 修复 chunk 为字符串类型时编译的结果不正确

## [v0.5.1] 2016.6.14
- 修复 不开启 devServer 的 watch 会报错

## [v0.5.0] 2016.6.12
- 用 ES6 重构

## [v0.4.9] 2016.6.10
- 新增 template 支持传入数组


## [v0.4.8] 2016.6.05
- 修复 不能省略 `.json` 后缀的问题
- 修复 watch 时 format 参数无效
- 修复 chunk 的 `hash` 应该用 `chunkhash`

## [v0.4.7] 2016.6.02
- 新增 权限错误会有提示，去掉了之前 `禁止使用 sudo` 的方式，支持使用 `sudo` 执行

## [v0.4.6] 2016.6.01 🎁
- 修复 CommonChunkPlugin 传 names 参数无效的问题
- 修复 未设置 devServer.publicPath 时应该采用 publicPath 选项的值
- 新增 build 时支持 `--output-public-path` 选项

## [v0.4.5] 2016.5.24
- 修复 extractCSS 的 hash 值
- 修复 插件安装目录移到用户目录下(`~/.xdc`)，避免每次升级都需要重新安装依赖

## [v0.4.4] 2016.5.21
- 修复 windows 下无法正常使用 [#30](https://github.com/ElemeFE/xdc/issues/30)
- 修复 锁定 webpack 版本为 0.13.0

## [v0.4.3] 2016.5.19
- 新增 开启 dev server 时默认支持将日志显示在页面上 `derServer: { log: true }`
- 更新 升级 webpack 到 0.13.x

## [v0.4.2] 2016.5.13
- 正式发布
