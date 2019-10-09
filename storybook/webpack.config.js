const path = require('path');

// Import dependencies.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// Import common configurations.
const common = require('./webpack.common');

// Webpack configuration.
module.exports = {
  entry: {
    scripts: './scripts/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
  },
  resolve: { extensions: ['.js'] },

  /**
   * Plugins.
   *
   * Add all common plugins.
   *
   * MiniCssExtractPlugin()
   * A Lightweight CSS extraction webpack plugin.
   */
  plugins: [
    ...common.plugins,
    new MiniCssExtractPlugin({
      filename: 'index.css',
      path: path.resolve(__dirname, '../build'),
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  stats: 'errors-only',
  module: {
    rules: [
      common.javascript,
      // Extend common CSS configuration with those used in build process.
      {
        ...common.css,
        use: [MiniCssExtractPlugin.loader, ...common.css.use],
      },
      common.assets,
    ],
  },
};
