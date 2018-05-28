const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Test app',
    template: 'index.html',
    chunksSortMode: 'none',
    favicon: 'images/favicon.ico'
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css'
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component'],
    PropTypes: 'prop-types',
  }),
  new CopyWebpackPlugin([
    ...images.map(ext => ({ from: `**/*/*.${ext}`, to: 'images/[name].[ext]' }))
  ])
];

module.exports = {
  entry: ['babel-polyfill', './app.js'],
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: [
              'syntax-dynamic-import',
              'transform-class-properties',
              'transform-object-rest-spread',
              'transform-regenerator'
            ]
          }
        }
      },

      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 100
            }
          }
        ]
      }
    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  }
};

