import { MEDIA_SIZES } from '../_constants';

export const INPUT_SIZES = {
  M: 'm',
  L: 'l',
};

export const REFS = {
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    NEGATIVE: 'negative',
  },
  SIZES: INPUT_SIZES,
};

export const STYLES = {
  HEIGHTS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
  },

  WIDTHS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
    },
  },
  BADGE_POSITION: {
    [REFS.SIZES.M]: 15,
    [REFS.SIZES.L]: 23,
  },
};
