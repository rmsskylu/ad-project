const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash:4].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      pages: path.join(__dirname, '../src/pages'),
      "@utils": path.join(__dirname, '../src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          // options: {
          //   transpileOnly: true
          // }
        }
      },
      {
        test: /\.(sc|c)ss/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = webpackBaseConfig;