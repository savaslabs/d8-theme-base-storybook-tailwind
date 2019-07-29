import { storiesOf } from '@storybook/html';
import '../../../styles/index.scss';

// @ts-ignore
import Buttons from './button.html.twig';
import { button } from './button.data';

storiesOf('Atoms/Buttons', module).add('Buttons', () => Buttons({
  url: button.url,
  text: button.text,
}));
