import { STYLES } from './_constants';

export const getColor = (theme, sColor) => {
  return theme.rectBadge.colors[sColor];
};

export const getBackgroundColor = (theme, sColor) => {
  return theme.rectBadge.backgroundColors[sColor];
};

export const getRectSizes = sSize => {
  return `${STYLES.SIZES[sSize]}px`;
};
