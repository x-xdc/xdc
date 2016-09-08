## 特性
- 简化 webpack 的配置，更人性化的配置参数
- 安装命令行工具(xdc-cli)快速搭建项目且无需重复安装依赖，基于 webpack 2
- 兼容 webpack 1 和 2，只需同一套配置
- 生成的配置完全兼容 webapck 的命令行工具

## 安装

运行环境
- Node.js 4+
- npm 3+
- Python 2.7.x


### 使用 xdc 命令行工具
```shell
npm i xdc-cli -g
```

Step 1. 创建一个 vue 项目 （将自动下载 vue 项目脚手架，只需下载一次）
```shell
$ xdc create my-project vue
$ cd my-project
```

Step 2. 开始开发
```shell
$ xdc watch
```

### 只安装 xdc
```shell
npm i xdc -S

# 安装 webpack 的依赖（例如 webpack 1)
npm i babel-core babel-loader css-loader file-loader postcss postcss-loader\
 html-loader html-webpack-plugin json-loader style-loader url-loader\
 webpack@1 webpack-dev-server@1 extract-text-webpack-plugin@1 -D

# 开始开发
node_modules/.bin/xdc watch # or webpack --config xdc.conf.js

# 如果全局安装了 xdc-cli 同样可以这样做(运行的依旧是本地项目的 xdc)
xdc watch
```
