import { SIZE_COOF } from './_constants';

export function getWidth(width, mediaSize) {
  return `${width * SIZE_COOF[mediaSize]}px`;
}

export function getHeight(height, mediaSize) {
  return `${height * SIZE_COOF[mediaSize]}px`;
}

export function getRectFill(theme, colorType, colors, color) {
  if (colors) return colors[color];
  return theme.pattern.colors[colorType][color];
}
