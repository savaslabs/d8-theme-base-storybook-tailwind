import { storiesOf } from '@storybook/html';
import '../../../styles/index.scss';

// ======================================================================
// HEADLINES
// ======================================================================
// @ts-ignore
import Headline from './heading.twig';

const headline = 'Lorem ipsum dolor sit amet';

[1, 2, 3, 4, 5, 6].forEach(level =>
  storiesOf('Atoms/Text', module).add(`h${level}`, () =>
    Headline({ level, text: headline })
  )
);
