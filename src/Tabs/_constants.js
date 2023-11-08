import { MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'Tabs',
  ITEM: 'TabsItem',
};

export const STYLES = {
  FONT_SIZES: {
    [MEDIA_SIZES.S]: 16,
    [MEDIA_SIZES.M]: 20,
    [MEDIA_SIZES.L]: 24,
  },
  MARGIN: {
    [MEDIA_SIZES.S]: '0 -16px',
    [MEDIA_SIZES.M]: '0 -24px',
    [MEDIA_SIZES.L]: '0 -32px',
  },
  PADDING: {
    [MEDIA_SIZES.S]: '16px 16px 16px',
    [MEDIA_SIZES.M]: '24px 24px 24px',
    [MEDIA_SIZES.L]: '32px 32px 32px',
  },
  BORDER_BOTTOM: {
    [MEDIA_SIZES.S]: -14,
    [MEDIA_SIZES.M]: -22,
    [MEDIA_SIZES.L]: -30,
  },
};
