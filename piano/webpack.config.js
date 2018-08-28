const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const PROD = process.env.NODE_ENV === 'production'
const DEV = process.env.NODE_ENV === 'development'

const copyFiles = [
  { from: './src/medias/', to: './medias' },
  { from: './src/images/', to: './images' },
  { from: './src/favicon.ico', to: './' }
]

const baseWebpack = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html'
    }),
    new CopyWebpackPlugin(copyFiles)
  ]
}

if (PROD) {
  baseWebpack.plugins.push(new webpack.optimize.UglifyJsPlugin({}))
  baseWebpack.plugins.push(
    new BundleAnalyzerPlugin({ analyzerMode: 'disabled' })
  )
}

if (DEV) {
  baseWebpack.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
}

module.exports = env => {
  return baseWebpack
}
