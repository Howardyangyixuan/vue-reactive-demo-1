const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: ['./examples/example.js'],
  output: {
    filename: 'main.js',
    path: path.resolve('./dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html'
    })
  ]
}
