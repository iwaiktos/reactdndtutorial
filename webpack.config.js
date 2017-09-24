'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      lang: 'ja',
      appMountId: 'root',
      title: 'Getting Started'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader'},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
};
