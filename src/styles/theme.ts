import { Theme } from '@emotion/react';

import { light, dark } from './color';
import { spacing } from './spacing';

const lightTheme: Theme = {
  colors: { ...light },
  spacing
};

const darkTheme: Theme = {
  colors: { ...dark },
  spacing
};

export { lightTheme, darkTheme };
