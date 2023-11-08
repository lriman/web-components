import { MEDIA_SIZES } from '../_constants';
import { SIZES as INPUT_SIZES, TYPES as INPUT_TYPES } from '../Input/_constants';

export const INPUT_TYPE = INPUT_TYPES.BUTTON;

export const REFS = {
  TYPES: {
    BRAND: 'brand',
    OUTLINE: 'outline',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    MUTED: 'muted',
    NEGATIVE: 'negative',
    NEGATIVE_PRIMARY: 'negativePrimary',
    POSITIVE: 'positive',
    PREMIUM: 'premium',
  },
  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },
  SIZES: INPUT_SIZES,
};

export const STYLES = {
  DISPLAY: {
    [REFS.DISPLAY.BLOCK]: 'block',
    [REFS.DISPLAY.INLINE]: 'inline-block',
  },

  LINE_HEIGHT: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
  },

  PADDING: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: [7, 11],
      [REFS.SIZES.M]: [11, 15],
      [REFS.SIZES.L]: [11, 15],
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: [7, 11],
      [REFS.SIZES.M]: [11, 15],
      [REFS.SIZES.L]: [11, 15],
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: [7, 11],
      [REFS.SIZES.M]: [11, 15],
      [REFS.SIZES.L]: [11, 15],
    },
  },

  FONT_SIZES: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 14,
      [REFS.SIZES.M]: 16,
      [REFS.SIZES.L]: 20,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 14,
      [REFS.SIZES.M]: 16,
      [REFS.SIZES.L]: 20,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 14,
      [REFS.SIZES.M]: 16,
      [REFS.SIZES.L]: 20,
    },
  },

  HEIGHTS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 36,
      [REFS.SIZES.M]: 48,
      [REFS.SIZES.L]: 56,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 36,
      [REFS.SIZES.M]: 48,
      [REFS.SIZES.L]: 56,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 36,
      [REFS.SIZES.M]: 48,
      [REFS.SIZES.L]: 56,
    },
  },
};
