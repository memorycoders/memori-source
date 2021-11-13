const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development', // Chạy trên mô trường dev
  devtool: 'inline-source-map', // Cho biết chính xác vị trí lỗi 
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
})