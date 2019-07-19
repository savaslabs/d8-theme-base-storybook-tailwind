const path = require('path');

// Import dependencies.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Import common configurations.
const common = require('./webpack.common');

// Webpack configuration.
module.exports = {
  entry: {
    scripts: './scripts/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
  },
  resolve: { extensions: ['.ts', '.js'] },

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
  ],
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
