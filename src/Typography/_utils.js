import { STYLES, HEADING_TAG_NAMES, HEADING_LEVEL_SIZE } from './_constants';

export function getSpacing(spacing, mediaSize) {
  return `${STYLES.SPACING[mediaSize][spacing]}px`;
}

export function getFontSize(size, mediaSize) {
  if (!size) return 'inherit';
  return `${STYLES.SIZES[mediaSize][size]}px`;
}

export function getHeadingFontFamily(size) {
  return `${STYLES.HEADING_FONT_FAMILY[size]}`;
}

export function getHeadingFontWeight(size) {
  return `${STYLES.HEADING_FONT_WEIGHT[size]}`;
}

export function getHeadingFontSize(size, mediaSize) {
  return `${STYLES.HEADING_SIZES[mediaSize][size]}px`;
}

export function getHeadingLineHeight(size) {
  return STYLES.HEADING_LINE_HEIGHTS[size];
}

export function getVerticalAlign(verticalAlign) {
  if (!verticalAlign) return 'inherit';
  return STYLES.VERTICAL_ALIGN[verticalAlign];
}

export function getTextAlign(textAlign) {
  if (!textAlign) return 'inherit';
  return STYLES.TEXT_ALIGN[textAlign];
}

export function getFontWeight(weight) {
  if (!weight) return 'inherit';
  return STYLES.WEIGHTS[weight];
}

export function getFontStyle(isAccented) {
  return isAccented ? 'oblique' : 'inherit';
}

export function getWhiteSpace(noWrap) {
  return noWrap ? 'nowrap' : 'normal';
}

export function getBlockMargin(margin) {
  return STYLES.BLOCK_MARGIN[margin];
}

export function getBlockPadding(padding, sVPadding, sHPadding) {
  return `${STYLES.BLOCK_PADDING[sVPadding || padding] || 0} ${STYLES.BLOCK_PADDING[sHPadding || padding] || 0}`;
}

export function getColor(theme, colorType, color) {
  if (!color || !theme || !colorType) return 'inherit';
  return theme.typography[colorType][color];
}

export function getLevelSize(level) {
  return HEADING_LEVEL_SIZE[level];
}

export function getHeadingTagName(size) {
  return HEADING_TAG_NAMES[size];
}
