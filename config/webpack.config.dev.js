const path = require('path');
const webpack = require('webpack');
const baseWebpack = require('./webpack.config.base');

module.exports = {
  plugins: [ ...baseWebpack.plugins, new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: '/',
    port: 9091,
    hot: true,
    historyApiFallback: true
  },
  mode: 'development',
  devtool: 'inline-source-map'
};
