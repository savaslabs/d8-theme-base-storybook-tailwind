const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');
const postcssUrl = require('postcss-url');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    postcssNormalize({
      browsers: ['last 2 versions', 'IE >= 11'],
    }),
    autoprefixer,
    postcssEasyImport,
    postcssPresetEnv({
      stage: 1,
      features: { 'nesting-rules': true },
    }),
    postcssUrl({
      url: 'inline',
    }),
    tailwindcss('./tailwind.config.js'),
    cssnano,
    purgecss({
      content: [
        './components/**/*.twig',
        '../templates/**/*.twig',
        './components/**/*.scss',
        './components/**/*.js',
      ],
      defaultExtractor: content => content.match(/[\w-\/:]+(?<!:)/g) || [],
    }),
  ],
  module: true,
  url: false,
};
