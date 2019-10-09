import { storiesOf } from '@storybook/html';
import '../../../styles/index.scss';

// ======================================================================
// Typography
// ======================================================================
// @ts-ignore
import Typography from './typography.twig';

const text = `
    Lorem ipsum <em>dolor sit amet</em>, consectetur adipiscing elit. Curabitur quis mollis nisl, <strong>vitae eleifend arcu</strong>. Donec consequat tellus mauris, ac maximus risus pulvinar ac. Pellentesque <a href="#">hendrerit tortor ac elit maximus elementum</a>. Nam et dictum diam, ut mollis ex. Vestibulum maximus urna ac nisl feugiat, at mattis libero vulputate.
`;
storiesOf('Atoms/Text', module).add('Formatted', () => Typography({ text }));
