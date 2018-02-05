'use strict';
const path = require( 'path' )
const webpack = require( 'webpack' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [ {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader'
      }
    } ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      hash: true,
      title: 'React',
      myPageHeader: 'React',
      template: './src/index.html',
      filename: './index.html' //relative to root of the application
    } ),
    new webpack.HotModuleReplacementPlugin()
  ]
};
