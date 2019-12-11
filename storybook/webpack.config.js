const path = require('path');
const webpack = require('webpack');

// Import dependencies.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

// Webpack configuration.
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production' ? true : false;
  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      scripts: path.resolve(__dirname, 'scripts/index.js'),
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
        // JavaScript
        {
          test: /\.(js)$/,
          include: [
            path.resolve(__dirname, 'components'),
            path.resolve(__dirname, 'scripts'),
            path.resolve(__dirname, 'plugins'),
            path.resolve(__dirname, 'tailwind_plugins'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/env',
                    {
                      targets: { chrome: '63', ie: '11' },
                    },
                  ],
                ],
                plugins: [
                  [
                    '@babel/plugin-proposal-decorators',
                    { decoratorsBeforeExport: true },
                  ],
                  ['@babel/proposal-class-properties', { loose: true }],
                  '@babel/proposal-object-rest-spread',
                ],
              },
            },
            'eslint-loader',
          ],
        },
        // CSS
        {
          test: /\.(scss|css)$/,
          include: [
            path.resolve(__dirname, 'components'),
            path.resolve(__dirname, 'styles'),
          ],
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: { path: path.resolve(__dirname, 'postcss.config.js') },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        // Assets
        {
          test: /\.(woff|woff2|eot|ttf|svg|ico|jpe?g|png)$/,
          use: 'file-loader',
        },
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
        path: isProduction ? path.resolve(__dirname, '../build') : path.resolve(__dirname, '../dev-build'),
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new FixStyleOnlyEntriesPlugin(),
      new StyleLintPlugin({
        configFile: path.resolve(__dirname, '.stylelintrc'),
        ignorePath: path.resolve(__dirname, '.eslintignore'), // Use .eslintignore because it has ignored directories/files already.
        syntax: 'scss',
      }),
      new CopyWebpackPlugin([
        {
          context: path.join(__dirname, 'icons'),
          from: path.join(__dirname, 'icons/**/*'),
          to: path.join(__dirname, '../build/icons'),
        },
        {
          context: path.join(__dirname, 'fonts'),
          from: path.join(__dirname, 'fonts/**/*'),
          to: path.join(__dirname, '../build/fonts'),
        },
      ]),
      new FriendlyErrorsWebpackPlugin(),
    ],
    stats: 'errors-only',
  };
};
