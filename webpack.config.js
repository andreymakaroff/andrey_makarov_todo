const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

let stylesLoader = [
  {loader: 'style-loader'},
  {loader: "css-loader"},
  {loader: "sass-loader"}
];

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Test app',
    template: 'index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  }),
  new webpack.ProvidePlugin({
    React: 'react'
  })
];

module.exports = {
  entry: './app.js',
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },

      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]
        })
      },
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // }

    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  mode: 'development',

  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: '/',
    port: 9000,
    hot: true
  }
};

