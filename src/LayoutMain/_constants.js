import { MEDIA_SIZES } from '../_constants';
import { STYLES as TYPOGRAPHY_STYLES } from '../Typography/_constants';

export const COMPONENTS = {
  GENERAL: 'LayoutMain',
  SIDE: 'LayoutMainSide',
  BODY: 'LayoutMainBody',
  HEADER: 'LayoutMainHeader',
  CONTENT: 'LayoutMainContent',
  FOOTER: 'LayoutMainFooter',
};

export const STYLES = {
  LINE_HEIGHT: TYPOGRAPHY_STYLES.PARAGRAPH_LINE_HEIGHT,
  MIN_WIDTH: '320px',

  BLOCK_PADDING: {
    [MEDIA_SIZES.S]: [12, 12],
    [MEDIA_SIZES.M]: [16, 16],
    [MEDIA_SIZES.L]: [20, 20],
  },
};
