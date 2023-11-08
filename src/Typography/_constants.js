import { COLORS, FONTS, MEDIA_SIZES } from '../_constants';

export const REFS = {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
    XXL: 'xxl',
  },

  TEXT_ALIGN: {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
    JUSTIFY: 'justify',
  },

  VERTICAL_ALIGN: {
    TOP: 'top',
    MIDDLE: 'middle',
    BOTTOM: 'bottom',
  },

  WEIGHTS: {
    BOLD: 'bold',
    MEDIUM: 'medium',
    NORMAL: 'normal',
    LIGHT: 'light',
  },

  COLORS: {
    MAJOR: 'major',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    MINOR: 'minor',
    DISABLED: 'disabled',
    POSITIVE: 'positive',
    NEGATIVE: 'negative',
    WARNING: 'warning',
    ACCENT_1: 'accent1',
    ACCENT_2: 'accent2',
  },
};

export const HEADING_SIZES = {
  XXS: 'xxs',
  ...REFS.SIZES,
};

export const STYLES = {
  PARAGRAPH_FONT_FAMILY: FONTS.PRIMARY,
  PARAGRAPH_FONT_WEIGHT: 'normal',
  PARAGRAPH_LINE_HEIGHT: 1.6,
  PARAGRAPH_MARGIN: '1em 0',

  HEADING_FONT_FAMILY: {
    [HEADING_SIZES.XXS]: FONTS.PRIMARY,
    [HEADING_SIZES.XS]: FONTS.PRIMARY,
    [HEADING_SIZES.S]: FONTS.PRIMARY,
    [HEADING_SIZES.M]: FONTS.HEADING,
    [HEADING_SIZES.L]: FONTS.HEADING,
    [HEADING_SIZES.XL]: FONTS.HEADING,
  },

  HEADING_FONT_WEIGHT: {
    [HEADING_SIZES.XXS]: 500,
    [HEADING_SIZES.XS]: 500,
    [HEADING_SIZES.S]: 500,
    [HEADING_SIZES.M]: 700,
    [HEADING_SIZES.L]: 700,
    [HEADING_SIZES.XL]: 700,
  },

  HEADING_LINE_HEIGHTS: {
    [HEADING_SIZES.XXS]: 1.4,
    [HEADING_SIZES.XS]: 1.4,
    [HEADING_SIZES.S]: 1.3,
    [HEADING_SIZES.M]: 1.3,
    [HEADING_SIZES.L]: 1.2,
    [HEADING_SIZES.XL]: 1.2,
  },
  HEADING_MARGIN: '1em 0 0.4em',

  BLOCK_MARGIN: {
    [REFS.SIZES.XS]: '0 0',
    [REFS.SIZES.S]: '8px 0',
    [REFS.SIZES.M]: '16px 0',
    [REFS.SIZES.L]: '24px 0',
    [REFS.SIZES.XL]: '32px 0',
    [REFS.SIZES.XXL]: '40px 0',
  },

  BLOCK_PADDING: {
    [REFS.SIZES.XS]: '4px',
    [REFS.SIZES.S]: '8px',
    [REFS.SIZES.M]: '12px',
    [REFS.SIZES.L]: '16px',
    [REFS.SIZES.XL]: '24px',
    [REFS.SIZES.XXL]: '32px',
  },

  SPACING: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.XS]: 0,
      [REFS.SIZES.S]: 1,
      [REFS.SIZES.M]: 2,
      [REFS.SIZES.L]: 3,
      [REFS.SIZES.XL]: 4,
      [REFS.SIZES.XXL]: 5,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.XS]: 0,
      [REFS.SIZES.S]: 2,
      [REFS.SIZES.M]: 4,
      [REFS.SIZES.L]: 6,
      [REFS.SIZES.XL]: 8,
      [REFS.SIZES.XXL]: 10,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.XS]: 0,
      [REFS.SIZES.S]: 4,
      [REFS.SIZES.M]: 6,
      [REFS.SIZES.L]: 8,
      [REFS.SIZES.XL]: 12,
      [REFS.SIZES.XXL]: 14,
    },
  },

  SIZES: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.XS]: 10.8,
      [REFS.SIZES.S]: 10.8,
      [REFS.SIZES.M]: 14,
      [REFS.SIZES.L]: 16,
      [REFS.SIZES.XL]: 18,
      [REFS.SIZES.XXL]: 20,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.XS]: 10.8,
      [REFS.SIZES.S]: 12,
      [REFS.SIZES.M]: 14,
      [REFS.SIZES.L]: 16,
      [REFS.SIZES.XL]: 18,
      [REFS.SIZES.XXL]: 20,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.XS]: 10.8,
      [REFS.SIZES.S]: 12,
      [REFS.SIZES.M]: 14,
      [REFS.SIZES.L]: 16,
      [REFS.SIZES.XL]: 18,
      [REFS.SIZES.XXL]: 20,
    },
  },

  HEADING_SIZES: {
    [MEDIA_SIZES.S]: {
      [HEADING_SIZES.XXS]: 16,
      [HEADING_SIZES.XS]: 20,
      [HEADING_SIZES.S]: 24,
      [HEADING_SIZES.M]: 28,
      [HEADING_SIZES.L]: 32,
      [HEADING_SIZES.XL]: 36,
    },
    [MEDIA_SIZES.M]: {
      [HEADING_SIZES.XXS]: 20,
      [HEADING_SIZES.XS]: 24,
      [HEADING_SIZES.S]: 34,
      [HEADING_SIZES.M]: 40,
      [HEADING_SIZES.L]: 46,
      [HEADING_SIZES.XL]: 68,
    },
    [MEDIA_SIZES.L]: {
      [HEADING_SIZES.XXS]: 20,
      [HEADING_SIZES.XS]: 24,
      [HEADING_SIZES.S]: 34,
      [HEADING_SIZES.M]: 40,
      [HEADING_SIZES.L]: 46,
      [HEADING_SIZES.XL]: 68,
    },
  },

  TEXT_ALIGN: {
    [REFS.TEXT_ALIGN.LEFT]: 'left',
    [REFS.TEXT_ALIGN.CENTER]: 'center',
    [REFS.TEXT_ALIGN.RIGHT]: 'right',
    [REFS.TEXT_ALIGN.JUSTIFY]: 'justify',
  },

  VERTICAL_ALIGN: {
    [REFS.VERTICAL_ALIGN.TOP]: 'top',
    [REFS.VERTICAL_ALIGN.MIDDLE]: 'middle',
    [REFS.VERTICAL_ALIGN.BOTTOM]: 'bottom',
  },

  WEIGHTS: {
    [REFS.WEIGHTS.BOLD]: 600,
    [REFS.WEIGHTS.MEDIUM]: 500,
    [REFS.WEIGHTS.NORMAL]: 400,
    [REFS.WEIGHTS.LIGHT]: 200,
  },

  COLORS: {
    [REFS.COLORS.MAJOR]: COLORS.BLACK,
    [REFS.COLORS.PRIMARY]: COLORS.NIGHT_BLUE,
    [REFS.COLORS.SECONDARY]: COLORS.GRAY,
    [REFS.COLORS.MINOR]: COLORS.GRAYISH_BLUE,
    [REFS.COLORS.LIGHT]: COLORS.WHITE,
    [REFS.COLORS.POSITIVE]: COLORS.PASTEL_TURQUOISE,
    [REFS.COLORS.ACCENT]: COLORS.MAGENTO_BLUE,
    [REFS.COLORS.WARNING]: COLORS.BRIGHT_ORANGE,
    [REFS.COLORS.NEGATIVE]: COLORS.DARK_LINK,
    [REFS.COLORS.LINK]: COLORS.ELECTRIC_BLUE,
    [REFS.COLORS.DISABLED]: COLORS.BLACK_20,
    [REFS.COLORS.CHESS_WHITE]: COLORS.LIGHT_SILVER,
    [REFS.COLORS.CHESS_BLACK]: COLORS.DARK_BLUE,
  },
};

export const HEADING_LEVEL_SIZE = {
  6: [HEADING_SIZES.XXS],
  5: [HEADING_SIZES.XS],
  4: [HEADING_SIZES.S],
  3: [HEADING_SIZES.M],
  2: [HEADING_SIZES.L],
  1: [HEADING_SIZES.XL],
};

export const HEADING_TAG_NAMES = {
  [HEADING_SIZES.XXS]: 'h6',
  [HEADING_SIZES.XS]: 'h5',
  [HEADING_SIZES.S]: 'h4',
  [HEADING_SIZES.M]: 'h3',
  [HEADING_SIZES.L]: 'h2',
  [HEADING_SIZES.XL]: 'h1',
};
