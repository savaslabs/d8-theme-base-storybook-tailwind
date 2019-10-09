import { storiesOf } from '@storybook/html';
import '../../../styles/index.scss';

// ======================================================================
// Fonts
// ======================================================================

export const sansSerif = '"Work Sans", Arial, sans-serif';
export const serif = '"Spectral", sans-serif';

storiesOf('Atoms/Text', module).add(
  'Fonts',
  () => `
  <p style="font-family: Work Sans">${sansSerif}</p>
  <p style="font-family: Spectral">${serif}</p>
  `
);
