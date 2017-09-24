'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader'},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
};
