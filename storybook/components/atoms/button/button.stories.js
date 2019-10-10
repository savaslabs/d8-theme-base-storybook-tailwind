import { storiesOf } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import '../../../styles/index.scss';

import Buttons from './button.twig';
import { button } from './button.data';
import { Button } from './button';

storiesOf('Atoms/Buttons', module).add('Buttons', () => {
  useEffect(() => {
    Button();
  }, []);
  return Buttons(button);
});
