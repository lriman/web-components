import { STYLES } from './_constants';

export function getJustifyContent(align) {
  return STYLES.JUSTIFY_CONTENT[align];
}

export function getBorderColor(isActive, colorType, theme, isHovered) {
  if (isActive) return theme.menu[colorType]?.borderColors.active;
  if (isHovered) return theme.menu[colorType]?.borderColors.hovered;
  return theme.menu[colorType]?.borderColors.default;
}

export function getColor(isActive, colorType, theme, isHovered) {
  if (isActive) return theme.menu[colorType]?.colors.active;
  if (isHovered) return theme.menu[colorType]?.colors.hovered;
  return theme.menu[colorType]?.colors.default;
}

export function getItemFontSize(size, isExtra) {
  if (isExtra) return '16';
  return STYLES.FONT_SIZES[size];
}

export function getItemPadding(size, isExtra) {
  if (isExtra) return `${STYLES.ITEM_PADDING_EXTRA[0]}px 0 ${STYLES.ITEM_PADDING_EXTRA[1]}px`;
  return `${STYLES.ITEM_PADDINGS[size][0]}px 0 ${STYLES.ITEM_PADDINGS[size][1]}px`;
}

export function getBorderWidth(size) {
  return STYLES.BORDER_WIDTHS[size];
}
