import { MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'Pills',
  ITEM: 'PillsItem',
};

export const REFS = {
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
};

export const STYLES = {
  FONT_SIZES: {
    [REFS.TYPES.PRIMARY]: { [MEDIA_SIZES.S]: 12, [MEDIA_SIZES.M]: 14, [MEDIA_SIZES.L]: 14 },
    [REFS.TYPES.SECONDARY]: { [MEDIA_SIZES.S]: 14, [MEDIA_SIZES.M]: 16, [MEDIA_SIZES.L]: 16 },
  },
  FONT_WEIGHTS: {
    [REFS.TYPES.PRIMARY]: 500,
    [REFS.TYPES.SECONDARY]: 700,
  },
  PADDING: {
    [REFS.TYPES.PRIMARY]: '4px',
    [REFS.TYPES.SECONDARY]: '0',
  },
  ITEM_HEIGHTS: {
    [MEDIA_SIZES.S]: '36px',
    [MEDIA_SIZES.M]: '40px',
    [MEDIA_SIZES.L]: '40px',
  },
  ITEM_MARGIN: {
    [MEDIA_SIZES.S]: '0 4px 0 0',
    [MEDIA_SIZES.M]: '0 4px 0 0',
    [MEDIA_SIZES.L]: '0 4px 0 0',
  },
  ITEM_PADDING: {
    [MEDIA_SIZES.S]: '0 14px',
    [MEDIA_SIZES.M]: '0 20px',
    [MEDIA_SIZES.L]: '0 20px',
  },
};
