import { STYLES } from './_constants';

export function getBorderColor(theme, colorType, type) {
  return theme.pills[colorType].borderColors[type];
}

export function getBackgroundColor(theme, colorType, type) {
  return theme.pills[colorType].backgroundColors[type];
}

export function getItemColor(theme, colorType, type, isActive, isDisabled, isHovered) {
  if (isDisabled) return theme.pills[colorType].item.colors[type].disabled;
  if (isActive) return theme.pills[colorType].item.colors[type].active;
  if (isHovered) return theme.pills[colorType].item.colors[type].hovered;
  return theme.pills[colorType].item.colors[type].default;
}

export function getItemBackgroundColor(theme, colorType, type, isActive, isDisabled, isHovered) {
  if (isDisabled) return theme.pills[colorType].item.backgroundColors[type].disabled;
  if (isActive) return theme.pills[colorType].item.backgroundColors[type].active;
  if (isHovered) return theme.pills[colorType].item.backgroundColors[type].hovered;
  return theme.pills[colorType].item.backgroundColors[type].default;
}

export function getPadding(type) {
  return STYLES.PADDING[type];
}

export function getItemMargin(mediaSize) {
  return STYLES.ITEM_MARGIN[mediaSize];
}

export function getItemFontSize(size, mediaSize) {
  return `${STYLES.FONT_SIZES[size][mediaSize]}px`;
}

export function getItemFontWeight(size) {
  return STYLES.FONT_WEIGHTS[size];
}

export function getItemPadding(mediaSize) {
  return STYLES.ITEM_PADDING[mediaSize];
}

export function getItemHeight(mediaSize) {
  return STYLES.ITEM_HEIGHTS[mediaSize];
}
