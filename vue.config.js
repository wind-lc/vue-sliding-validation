const merge = require('webpack-merge')
module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        return merge(options, {
          limit: 10000
        })
      })
  }
}
