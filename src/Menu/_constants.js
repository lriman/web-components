export const COMPONENTS = {
  GENERAL: 'Menu',
  EXTRA: 'MenuExtra',
  ITEM: 'MenuItem',
  MAIN: 'MenuMain',
};

export const REFS = {
  TYPES: {
    NORMAL: 'normal',
    INVERSE: 'inverse',
  },
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
};

export const EXTRA_OPENER_ID = 'MenuExtraOpener';

export const MORE_BUTTON_WIDTH = 32;

export const STYLES = {
  JUSTIFY_CONTENT: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  },
  FONT_SIZES: {
    [REFS.SIZES.S]: '14',
    [REFS.SIZES.M]: '16',
    [REFS.SIZES.L]: '24',
  },
  ITEM_PADDINGS: {
    [REFS.SIZES.S]: [8, 8],
    [REFS.SIZES.M]: [8, 8],
    [REFS.SIZES.L]: [12, 24],
  },
  ITEM_PADDING_EXTRA: [4, 4],
  BORDER_WIDTHS: {
    [REFS.SIZES.S]: 75,
    [REFS.SIZES.M]: 80,
    [REFS.SIZES.L]: 96,
  },
};
