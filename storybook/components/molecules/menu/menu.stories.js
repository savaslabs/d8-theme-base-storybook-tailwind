import { storiesOf } from '@storybook/html';
import '../../../styles/index.scss';

// @ts-ignore
import Menu from './menu.twig';
import { menu } from './menu.data';

storiesOf('Molecules/Menu', module).add('Menu', () => Menu(menu));
