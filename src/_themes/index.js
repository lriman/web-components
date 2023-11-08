import { THEMES } from './constants';
import light from './light';
import dark from './dark';

export { THEMES } from './constants';
export { default as getTheme } from './utils/getTheme';
export { default as useTheme } from './utils/useTheme';

export default {
  [THEMES.LIGHT]: light,
  [THEMES.DARK]: dark,
};
