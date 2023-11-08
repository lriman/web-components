import { MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'LogoVertical',
};

export const REFS = {
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
};

export const STYLES = {
  WIDTHS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 29.30688,
      [REFS.SIZES.M]: 64,
      [REFS.SIZES.L]: 71.55,
      [REFS.SIZES.XL]: 101,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 43.96032,
      [REFS.SIZES.M]: 68.688,
      [REFS.SIZES.L]: 107.325,
      [REFS.SIZES.XL]: 151.5,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 58.61376,
      [REFS.SIZES.M]: 82,
      [REFS.SIZES.L]: 143.1,
      [REFS.SIZES.XL]: 202,
    },
  },

  HEIGHTS: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.S]: 47.0016,
      [REFS.SIZES.M]: 104,
      [REFS.SIZES.L]: 114.75,
      [REFS.SIZES.XL]: 161.981,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.S]: 70.5024,
      [REFS.SIZES.M]: 110.16,
      [REFS.SIZES.L]: 172.125,
      [REFS.SIZES.XL]: 242.9715,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.S]: 94.0032,
      [REFS.SIZES.M]: 132,
      [REFS.SIZES.L]: 229.5,
      [REFS.SIZES.XL]: 323.962,
    },
  },
};
