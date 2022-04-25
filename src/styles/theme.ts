import { light, dark } from './color';
import { spacing } from './spacing';

const lightTheme = {
  colors: { ...light },
  spacing
} as const;

const darkTheme = {
  colors: { ...dark },
  spacing
} as const;

export { lightTheme, darkTheme };
