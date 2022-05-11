import '@emotion/react';

import { spacing } from './spacing';
import { fontSize } from './font';

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
