import { MEDIA_SIZES } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'Grid',
  ITEM: 'GridItem',
};

export const SIZES = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
};

export const REFS = {
  JUSTIFY: {
    START: 'start',
    CENTER: 'center',
    END: 'end',
    SPACE_BETWEEN: 'spaceBetween',
    SPACE_AROUND: 'spaceAround',
    SPACE_EVENLY: 'spaceEvenly',
  },

  ALIGN_ITEMS: {
    START: 'start',
    CENTER: 'center',
    END: 'end',
    STRETCH: 'stretch',
  },

  DIRECTIONS: {
    ROW: 'row',
    ROW_REVERSE: 'rowReverse',
    COLUMN: 'column',
    COLUMN_REVERSE: 'columnReverse',
  },

  SPACING: {
    XXS: 'xxs',
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
};

export const STYLES = {
  JUSTIFY: {
    [REFS.JUSTIFY.START]: 'flex-start',
    [REFS.JUSTIFY.CENTER]: 'center',
    [REFS.JUSTIFY.END]: 'flex-end',
    [REFS.JUSTIFY.SPACE_BETWEEN]: 'space-between',
    [REFS.JUSTIFY.SPACE_AROUND]: 'space-around',
    [REFS.JUSTIFY.SPACE_EVENLY]: 'space-evenly',
  },

  ALIGN_ITEMS: {
    [REFS.JUSTIFY.START]: 'flex-start',
    [REFS.JUSTIFY.CENTER]: 'center',
    [REFS.JUSTIFY.END]: 'flex-end',
    [REFS.JUSTIFY.STRETCH]: 'stretch',
  },

  DIRECTIONS: {
    [REFS.DIRECTIONS.ROW]: 'row',
    [REFS.DIRECTIONS.ROW_REVERSE]: 'row-reverse',
    [REFS.DIRECTIONS.COLUMN]: 'column',
    [REFS.DIRECTIONS.COLUMN_REVERSE]: 'column-reverse',
  },

  SPACING: {
    [MEDIA_SIZES.S]: {
      [REFS.SPACING.XXS]: 0,
      [REFS.SPACING.XS]: 1,
      [REFS.SPACING.S]: 4,
      [REFS.SPACING.M]: 6,
      [REFS.SPACING.L]: 8,
      [REFS.SPACING.XL]: 12,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SPACING.XXS]: 0,
      [REFS.SPACING.XS]: 1,
      [REFS.SPACING.S]: 4,
      [REFS.SPACING.M]: 6,
      [REFS.SPACING.L]: 8,
      [REFS.SPACING.XL]: 12,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SPACING.XXS]: 0,
      [REFS.SPACING.XS]: 1,
      [REFS.SPACING.S]: 4,
      [REFS.SPACING.M]: 6,
      [REFS.SPACING.L]: 8,
      [REFS.SPACING.XL]: 12,
    },
  },

  ITEM_WIDTH: {
    [SIZES[1]]: 8.333,
    [SIZES[2]]: 16.666,
    [SIZES[3]]: 25,
    [SIZES[4]]: 33.333,
    [SIZES[5]]: 41.6,
    [SIZES[6]]: 50,
    [SIZES[7]]: 58.333,
    [SIZES[8]]: 66.666,
    [SIZES[9]]: 75,
    [SIZES[10]]: 83.333,
    [SIZES[11]]: 91.666,
    [SIZES[12]]: 100,
  },
};
