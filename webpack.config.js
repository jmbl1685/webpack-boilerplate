const { resolve } = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new htmlPlugin({
      template: './src/index.html'
    })
  ]
}
