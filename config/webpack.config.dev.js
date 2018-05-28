const webpack = require('webpack');
const path = require('path');
const baseWebpack = require('./webpack.config.base');

const settings = Object.assign({}, baseWebpack, {
  plugins: [...baseWebpack.plugins, new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: '/',
    port: 9091,
    hot: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  mode: 'development'
});

module.exports = settings;

