import { MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'Loader',
};

export const REFS = {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },

  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },
};

export const STYLES = {
  SIZES: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.XS]: 9.6,
      [REFS.SIZES.S]: 12.8,
      [REFS.SIZES.M]: 16,
      [REFS.SIZES.L]: 19.2,
      [REFS.SIZES.XL]: 22.4,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.XS]: 12,
      [REFS.SIZES.S]: 16,
      [REFS.SIZES.M]: 20,
      [REFS.SIZES.L]: 24,
      [REFS.SIZES.XL]: 28,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.XS]: 12,
      [REFS.SIZES.S]: 16,
      [REFS.SIZES.M]: 20,
      [REFS.SIZES.L]: 24,
      [REFS.SIZES.XL]: 28,
    },
  },

  DISPLAY: {
    [REFS.DISPLAY.BLOCK]: 'block',
    [REFS.DISPLAY.INLINE]: 'inline-block',
  },
};
