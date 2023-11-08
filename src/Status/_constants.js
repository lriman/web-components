import { REFS as TYPOGRAPHY_REFS } from '../Typography/_constants';

export const COMPONENTS = {
  GENERAL: 'Status',
};

export const REFS = {
  TYPES: {
    UNKNOWN: 'unknown',
    SUCCESS: 'success',
    ERROR: 'error',
  },
  SIZES: {
    ...TYPOGRAPHY_REFS.SIZES,
  },
};

export const STYLES = {
  SIZES: {
    [REFS.SIZES.XS]: 20,
    [REFS.SIZES.S]: 24,
    [REFS.SIZES.M]: 24,
    [REFS.SIZES.L]: 30,
    [REFS.SIZES.XL]: 30,
  },
};
