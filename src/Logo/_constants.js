import { MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'Logo',
};

export const REFS = {
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
};

export const STYLES = {
  HEIGHTS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 32.768,
      [REFS.SIZES.M]: 33.92,
      [REFS.SIZES.L]: 53,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 49.152,
      [REFS.SIZES.M]: 50.88,
      [REFS.SIZES.L]: 79.5,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 65.536,
      [REFS.SIZES.M]: 67.84,
      [REFS.SIZES.L]: 106,
    },
  },

  WIDTHS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 51.2,
      [REFS.SIZES.M]: 80,
      [REFS.SIZES.L]: 125,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 52.5,
      [REFS.SIZES.M]: 120,
      [REFS.SIZES.L]: 187.5,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 102.4,
      [REFS.SIZES.M]: 160,
      [REFS.SIZES.L]: 250,
    },
  },
};
