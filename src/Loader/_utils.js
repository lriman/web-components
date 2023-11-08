import { STYLES } from './_constants';

export function getDisplay(display) {
  return STYLES.DISPLAY[display];
}

export function getSize(size, mediaSize) {
  return `${STYLES.SIZES[mediaSize][size]}px`;
}

export function getBorderWidth(size, mediaSize) {
  return `${STYLES.SIZES[mediaSize][size] / 8}px`;
}
