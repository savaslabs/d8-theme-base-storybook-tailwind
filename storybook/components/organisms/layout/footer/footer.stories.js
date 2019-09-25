import { storiesOf } from '@storybook/html';
import '../../../../styles/index.scss';

// @ts-ignore
import Footer from './footer.twig';
import { menu } from '../../../molecules/menu/menu.data';

storiesOf('Organisms/Footer', module).add('Footer', () =>
  Footer({
    footerNav: menu,
  })
);
