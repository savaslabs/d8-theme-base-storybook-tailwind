import { storiesOf } from '@storybook/html';
import '../../../../styles/index.scss';

// @ts-ignore
import Header from './header.twig';
import { menu } from '../../../molecules/menu/menu.data';

storiesOf('Organisms/Header', module).add('Header', () => Header({
  headerNav: menu,
}));
