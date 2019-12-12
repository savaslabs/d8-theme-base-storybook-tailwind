import { storiesOf } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import drupalAttribute from 'drupal-attribute';
import '../../../styles/index.scss';

import Buttons from './button.twig';
import { button } from './button.data';
import { ButtonScript } from './button';

storiesOf('Atoms/Buttons', module).add('Buttons', () => {
  useEffect(() => {
    document.querySelectorAll('.button').forEach(btn => {
      // eslint-disable-next-line
      new ButtonScript(btn);
    });
  }, []);
  return Buttons({
    button,
    attributes: new drupalAttribute(), // eslint-disable-line
    title_attributes: new drupalAttribute(), // eslint-disable-line
    configuration: {
      provider: 'some module',
    },
  });
});
