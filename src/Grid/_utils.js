import { SIZES, STYLES } from './_constants';

export function getJustify(justify) {
  return STYLES.JUSTIFY[justify];
}

export function getAlignItems(alignItems) {
  return STYLES.ALIGN_ITEMS[alignItems];
}

export function getDirection(direction) {
  return STYLES.DIRECTIONS[direction];
}

export function getSpacing(spacing, mediaSize) {
  return `${STYLES.SPACING[mediaSize][spacing]}px`;
}

export function getItemWidth(size, tablet, desktop) {
  const sizes = Object.values(SIZES);
  let computedSize = size;
  if (sizes.includes(tablet)) computedSize = tablet;
  if (sizes.includes(desktop)) computedSize = desktop;
  return computedSize ? `${STYLES.ITEM_WIDTH[desktop || tablet || size]}%` : 'auto';
}
