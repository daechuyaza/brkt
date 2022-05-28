import '@emotion/react';

import { spacing } from '../src/styles/spacing';
import { fontSize } from '../src/styles/font';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      onBackground: string;
      surface: string;
      onSurface: string;
      error: string;
    };
    spacing: typeof spacing;
    fontSize: typeof fontSize;
  }
}
