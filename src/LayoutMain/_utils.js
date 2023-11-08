import { MEDIA_SIZES, MEDIA_BREAKPOINTS } from '../_constants';

import { STYLES } from './_constants';

export function getSideWidth(isSideOpen) {
  if (isSideOpen) return '320px';
  return 0;
}

export function getSideBoxShadow(mediaSize, theme, isSideOpen) {
  if (mediaSize === MEDIA_SIZES.S && isSideOpen) return theme.layouts.main.sideBoxShadow;
  return 'none';
}

export function getBodyMarginLeft(mediaSize, isSideOpen) {
  if (mediaSize === MEDIA_SIZES.S) return 0;
  if (isSideOpen) return '320px';
  return 0;
}

export function getBlockPadding(mediaSize) {
  return `${STYLES.BLOCK_PADDING[mediaSize][0]}px ${STYLES.BLOCK_PADDING[mediaSize][1]}px`;
}

export function getSideToggleDisplay(mediaSize, isOnSide) {
  if (isOnSide && mediaSize === MEDIA_SIZES.L) return 'none';
  return 'block';
}

export const getGridJustify = width => {
  if (width >= MEDIA_BREAKPOINTS.DESKTOP) return 'center';
  return 'spaceBetween';
};
