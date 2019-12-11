const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const addedPlugins = [
  new MiniCssExtractPlugin({
    filename: 'index.css',
    path: path.resolve(__dirname, '../', 'build'),
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new FixStyleOnlyEntriesPlugin(),
  new StyleLintPlugin({
    configFile: path.resolve(__dirname, '../', '.stylelintrc'),
    ignorePath: path.resolve(__dirname, '../', '.eslintignore'), // Use .eslintignore because it has ignored directories/files already.
    syntax: 'scss',
  }),
  new CopyWebpackPlugin([
    {
      context: path.join(__dirname, '../', 'icons'),
      from: path.join(__dirname, '../', 'icons/**/*'),
      to: path.join(__dirname, '../', 'build/icons'),
    },
    {
      context: path.join(__dirname, '../', 'fonts'),
      from: path.join(__dirname, '../', 'fonts/**/*'),
      to: path.join(__dirname, '../', 'build/fonts'),
    },
  ]),
  new FriendlyErrorsWebpackPlugin(),
];

const addedJavaScript = [
  {
    test: /\.(js)$/,
    include: [
      path.resolve(__dirname, '../', 'components'),
      path.resolve(__dirname, '../', 'scripts'),
      path.resolve(__dirname, '../', 'plugins'),
      path.resolve(__dirname, '../', 'tailwind_plugins'),
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
];

const addedCss = [
  {
    test: /\.(scss|css)$/,
    use: [
      'style-loader',
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
];

const twigConfig = [
  {
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
          twigOptions: {
            namespaces: {
              storybook: path.resolve(__dirname, '../', 'components'),
            },
          },
        },
      },
    ],
  },
];

module.exports = ({ config }) => {
  // Add common plugins.
  config.plugins = [...config.plugins, ...addedPlugins];

  // Reuse common webpack configuration.
  config.module.rules = [
    ...config.module.rules,
    ...addedJavaScript,
    ...addedCss,
    ...twigConfig,
  ];

  config.stats = 'errors-only';

  return config;
};
