const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8088,
    hot: true,
    open: true
  },
  entry: ['./examples/example2.js'],
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html'
    })
  ]
}
