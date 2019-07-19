const path = require('path');

// Import dependencies.
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// https://github.com/fqborges/webpack-fix-style-only-entries
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    config: { path: path.resolve(__dirname, 'postcss.config.js') },
  },
};

/**
 * Default modules loader for CSS.
 */
const css = {
  test: /\.(scss|css)$/,
  use: ['css-loader', postcssLoader, sassLoader],
};

/**
 * Default modules loader for JavaScript and TypeScript.
 */
const javascript = {
  test: /\.(ts|js)$/,
  exclude: /node_modules/,
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
          ['@babel/typescript'],
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
};

/**
 * Default modules loader for assets.
 */
const assets = {
  test: /\.(woff|woff2|eot|ttf|svg|ico|jpe?g|png)$/,
  use: ['file-loader'],
};

/**
 * Shared plugins.
 *
 * StyleLintPlugin()
 * A webpack plugin to lint your CSS/Sass code using stylelint.
 */
const plugins = [
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
      to: path.join(__dirname, 'build/icons'),
    },
    {
      context: path.join(__dirname, 'fonts'),
      from: path.join(__dirname, 'fonts/**/*'),
      to: path.join(__dirname, 'build/fonts'),
    },
  ]),
];

// Export common webpack configurations.
module.exports = {
  javascript,
  css,
  assets,
  plugins,
};
