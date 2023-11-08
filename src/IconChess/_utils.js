import { STYLES } from './_constants';

export function getDisplay(display) {
  return STYLES.DISPLAY[display];
}

export function getSize(size, mediaSize) {
  return `${STYLES.SIZES[mediaSize][size]}px`;
}

export function getColor(color) {
  return STYLES.COLORS[color];
}
