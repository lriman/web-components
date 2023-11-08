import { STYLES } from './_constants';

export function getWidth(mediaSize, size) {
  return `${STYLES.WIDTHS[mediaSize][size]}px`;
}

export function getHeight(mediaSize, size) {
  return `${STYLES.HEIGHTS[mediaSize][size]}px`;
}

export function getBadgePosition(size) {
  return `${STYLES.BADGE_POSITION[size]}px`;
}
