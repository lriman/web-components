import { STYLES } from './_constants';

export function getBorderColor(theme, colorType, isActive, isHovered) {
  if (isActive) return theme.tabs.borderColors[colorType].active;
  if (isHovered) return theme.tabs.borderColors[colorType].hovered;
  return theme.tabs.borderColors[colorType].default;
}

export function getColor(theme, colorType, isActive, isHovered) {
  if (isActive) return theme.tabs.colors[colorType].active;
  if (isHovered) return theme.tabs.colors[colorType].hovered;
  return theme.tabs.colors[colorType].default;
}

export function getMargin(mediaSize) {
  return STYLES.MARGIN[mediaSize];
}

export function getFontSize(mediaSize) {
  return `${STYLES.FONT_SIZES[mediaSize]}px`;
}

export function getPadding(mediaSize) {
  return STYLES.PADDING[mediaSize];
}

export function getBorderBottom(mediaSize) {
  return `${STYLES.BORDER_BOTTOM[mediaSize]}px`;
}
