import { STYLES } from './_constants';

export function getHeight(size, mediaSize) {
  return `${STYLES.HEIGHTS[mediaSize][size]}px`;
}

export function getWidth(size, mediaSize) {
  return `${STYLES.WIDTHS[mediaSize][size]}px`;
}

export function getColor(isLight) {
  return isLight ? STYLES.COLORS.LIGHT : STYLES.COLORS.NORMAL;
}
