var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-es2015-modules-umd']
        }
      }
    ]
  },
  externals: [nodeExternals()]
}