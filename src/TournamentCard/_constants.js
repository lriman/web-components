import { MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'TournamentCard',
};

export const REFS = {
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
  TYPES: {
    DEFAULT: 'default',
    CUSTOM: 'custom',
  },
};

export const STYLES = {
  HEIGHTS: {
    [REFS.SIZES.S]: 512,
    [REFS.SIZES.M]: 512,
    [REFS.SIZES.L]: 696,
  },
  SIZES: {
    [REFS.SIZES.S]: 240,
    [REFS.SIZES.M]: 328,
    [REFS.SIZES.L]: 360,
  },
  INNER_BOX_SIZES: {
    [REFS.SIZES.S]: 154,
    [REFS.SIZES.M]: 190,
    [REFS.SIZES.L]: 248,
  },
  TITLE_HEIGHTS: {
    [MEDIA_SIZES.S]: 66,
    [MEDIA_SIZES.M]: 96,
    [MEDIA_SIZES.L]: 96,
  },
};
