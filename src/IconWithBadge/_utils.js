import { STYLES } from './_constants';

export function getWidth(mediaSize, size) {
  return `${STYLES.WIDTHS[mediaSize][size]}px`;
}

export function getHeight(mediaSize, size) {
  return `${STYLES.HEIGHTS[mediaSize][size]}px`;
}

export function getBadgeWidth(mediaSize, size) {
  return `${STYLES.BADGE_SIZES[mediaSize][size][0]}px`;
}

export function getBadgeHeight(mediaSize, size) {
  return `${STYLES.BADGE_SIZES[mediaSize][size][1]}px`;
}

export function getBadgeOffsetSize(size, index) {
  return `${STYLES.BADGE_OFFSET_SIZES[size][index]}px`;
}
