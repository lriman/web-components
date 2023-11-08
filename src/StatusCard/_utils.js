import { REFS, STYLES } from './_constants';

export const getStatusInfoColor = (theme, color) => {
  return theme.puzzles.puzzle.statusInfoColors[color];
};

export const getStatusInfoBackgroundColor = (theme, color) => {
  return theme.puzzles.puzzle.statusInfoBackgroundColors[color];
};

export const getBorderRadius = size => {
  if (size === REFS.SIZES.L) return '70px';
  return '22px';
};

export const getPadding = size => {
  return STYLES.PADDING[size];
};
