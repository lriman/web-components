import { MEDIA_BREAKPOINTS } from '../_constants';
import { STYLES } from './_constatns';

export const getBoardWidth = width => {
  if (width >= MEDIA_BREAKPOINTS.DESKTOP) return STYLES.WIDTH.L;
  if (width >= MEDIA_BREAKPOINTS.TABLET && width < MEDIA_BREAKPOINTS.DESKTOP) return STYLES.WIDTH.M;
  return STYLES.WIDTH.S;
};

export const getSimpleBoardBorder = (width, theme, isHovered) => {
  if (isHovered) return `${width / 16}px solid ${theme.simpleBoard.backgroundColor}`;
  return `${width / 16}px solid transparent`;
};

export const getSimpleBoardEdgeBorder = (theme, isHovered) => {
  if (isHovered) return `1px solid ${theme.simpleBoard.borderColor}`;
  return `1px solid transparent`;
};
