const path = require('path');

// Import dependencies.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// Import common configurations.
const common = require('./webpack.common');

// Webpack configuration.
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production' ? true : false;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      scripts: './scripts/index.js',
    },
    output: {
      filename: '[name].js',
      path: isProduction
        ? path.resolve(__dirname, '../build')
        : path.resolve(__dirname, '../dev-build'),
    },
    resolve: { extensions: ['.js'] },
    module: {
      rules: [
        common.javascript,
        // Extend common CSS configuration with those used in build process.
        {
          ...common.css,
          use: isProduction
            ? [MiniCssExtractPlugin.loader, ...common.css.use]
            : ['style-loader', ...common.css.use],
        },
        common.assets,
      ],
    },
    /**
     * Plugins.
     *
     * Add all common plugins.
     *
     * MiniCssExtractPlugin()
     * A Lightweight CSS extraction webpack plugin.
     */
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
        path: path.resolve(__dirname, '../build'),
      }),
      ...common.plugins,
      new FriendlyErrorsWebpackPlugin(),
    ],
    stats: 'errors-only',
  };
};
