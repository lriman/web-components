export const COMPONENTS = {
  GENERAL: 'Account',
  AVATAR: 'AccountAvatar',
  MENU_ITEM: 'AccountMenuItem',
};

export const REFS = {
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },
  CHESS_COLORS: {
    WHITE: 'white',
    BLACK: 'black',
  },
};

export const STYLES = {
  DISPLAY: {
    [REFS.DISPLAY.BLOCK]: 'block',
    [REFS.DISPLAY.INLINE]: 'inline-block',
  },

  SIZES: {
    [REFS.SIZES.S]: 36,
    [REFS.SIZES.M]: 44,
    [REFS.SIZES.L]: 80,
    [REFS.SIZES.XL]: 144,
  },

  CONTENTS_PADDING_LEFT: {
    [REFS.SIZES.S]: 8,
    [REFS.SIZES.M]: 8,
    [REFS.SIZES.L]: 16,
    [REFS.SIZES.XL]: 24,
  },

  ICON_CHESS_DIV_SIZES: {
    [REFS.SIZES.S]: 20,
    [REFS.SIZES.M]: 24,
    [REFS.SIZES.L]: 40,
    [REFS.SIZES.XL]: 63,
  },

  ICON_CHESS_SIZES: {
    [REFS.SIZES.S]: 's',
    [REFS.SIZES.M]: 'm',
    [REFS.SIZES.L]: 'xl',
    [REFS.SIZES.XL]: 'xxxl',
  },

  ICON_CHESS_POSITION: {
    [REFS.SIZES.S]: -6,
    [REFS.SIZES.M]: -4,
    [REFS.SIZES.L]: -6,
    [REFS.SIZES.XL]: -5,
  },

  ICON_FRIENDS_DIV_SIZES: {
    [REFS.SIZES.S]: 16,
    [REFS.SIZES.M]: 16,
    [REFS.SIZES.L]: 20,
    [REFS.SIZES.XL]: 32,
  },

  ICON_FRIENDS_SIZES: {
    [REFS.SIZES.S]: 'xs',
    [REFS.SIZES.M]: 'xs',
    [REFS.SIZES.L]: 's',
    [REFS.SIZES.XL]: 'l',
  },
  ICON_FRIENDS_POSITION: {
    [REFS.SIZES.S]: 0,
    [REFS.SIZES.M]: 0,
    [REFS.SIZES.L]: 3,
    [REFS.SIZES.XL]: 7,
  },
};
