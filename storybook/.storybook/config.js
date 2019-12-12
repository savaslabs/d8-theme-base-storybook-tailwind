// Add the web components polyfill to all stories.
import '@babel/polyfill';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import { addParameters, addDecorator, configure } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import customStorybookTheme from './customStorybookTheme';
import bemExtension from './bemExtension';

import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

// Add Drupal-specific Twig filters.
twigDrupal(Twig);
Twig.extendFunction('bem', bemExtension);

// Automatically import all files ending in *.stories.js.
const components = require.context(
  '../components',
  true,
  /\.stories\.(ts|js)$/
);
function loadStories() {
  components.keys().forEach(filename => components(filename));
}

// Add our custom theme.
addParameters({
  options: {
    theme: customStorybookTheme,
  },
});

// Helps make UI components more accessible.
addDecorator(withA11y);

configure(loadStories, module);
