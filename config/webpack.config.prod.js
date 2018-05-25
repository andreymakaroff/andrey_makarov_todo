const baseWebpack = require('./webpack.config.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const settings = Object.assign({}, baseWebpack, {
  plugins: [
    ...baseWebpack.plugins,
    new CleanWebpackPlugin('dist', { root: `${__dirname}/../`})
  ],
  output: {
    filename: 'bundle-[name].js'
  },
  mode: 'production'
});

module.exports = settings;
