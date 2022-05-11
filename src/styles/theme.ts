import { light, dark } from './color';
import { spacing } from './spacing';
import { fontSize } from './font';

const lightTheme = {
  colors: { ...light },
  spacing,
  fontSize
} as const;

const darkTheme = {
  colors: { ...dark },
  spacing,
  fontSize
} as const;

export { lightTheme, darkTheme };
