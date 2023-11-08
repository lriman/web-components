import { COLORS, BOX_SHADOWS } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'Card',
};

export const REFS = {
  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
    FLEX: 'flex',
  },
  COLORS,
  BOX_SHADOWS,
};

export const STYLES = {
  DISPLAY: {
    [REFS.DISPLAY.BLOCK]: 'block',
    [REFS.DISPLAY.INLINE]: 'inline-block',
    [REFS.DISPLAY.FLEX]: 'flex',
  },
};
