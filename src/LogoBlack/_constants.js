import { COLORS, MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'LogoBlack',
};

export const REFS = {
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
};

export const STYLES = {
  COLORS: {
    NORMAL: COLORS.GRAY,
    LIGHT: COLORS.FLAXEN,
  },

  HEIGHTS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 25,
      [REFS.SIZES.L]: 50,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 40,
      [REFS.SIZES.M]: 50,
      [REFS.SIZES.L]: 100,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 64,
      [REFS.SIZES.M]: 80,
      [REFS.SIZES.L]: 140,
    },
  },

  WIDTHS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 40,
      [REFS.SIZES.M]: 50,
      [REFS.SIZES.L]: 100,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 80,
      [REFS.SIZES.M]: 100,
      [REFS.SIZES.L]: 200,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 128,
      [REFS.SIZES.M]: 160,
      [REFS.SIZES.L]: 280,
    },
  },
};
