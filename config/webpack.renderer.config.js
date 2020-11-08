const path = require('path');
const webpack = require('webpack');
const { spawn } = require('child_process');
// TODO: HMR
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlguin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');

/**
 * @returns {import('webpack').Configuration}
 */
const config = (env) => {
  const isDev = env.NODE_ENV === 'development';

  const plugins = [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlguin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ];
  const lessLoaders = [
    {
      loader: 'style-loader',
    }, {
      loader: 'css-loader',

      options: {
        sourceMap: true,
      },
    }, {
      loader: 'less-loader',

      options: {
        sourceMap: true,
      },
    }];

  if (!isDev) {
    plugins.concat([
      new MiniCssExtractPlugin({ filename: 'main.[chunkhash].css' }),
    ]);

    lessLoaders.shift();
    lessLoaders.unshift({
      loader: MiniCssExtractPlugin.loader,
    });
  }
  return {
    mode: isDev ? 'development' : 'production',
    entry: {
      index: path.resolve(__dirname, '../src/renderer/index.js'),
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.less'],
    },
    plugins,
    devServer: {
      contentBase: './dist',
      // open: true,
      after: () => {
        spawn('npm', ['run', 'main:start']);
      },
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        // inlcude error
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],

      }, {
        test: /.(less|css)$/,
        use: lessLoaders,
      }],
    },
    optimization: {
      minimizer: [new TerserPlugin()],

      splitChunks: {
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/,
          },
        },

        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        name: false,
      },
    },
  };
};
module.exports = config;
