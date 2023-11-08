import { COLORS } from '../_constants';

export const COMPONENTS = {
  GENERAL: 'NavigationLite',
  ITEMS: 'NavigationLiteItems',
  SECTION: 'NavigationLiteSection',
  LINK: 'NavigationLiteLink',
};

export const REFS = {
  ITEMS_TYPES: {
    SECTION: 'section',
    LINK: 'link',
  },
};

export const STYLES = {
  BORDER_COLOR: COLORS.FOREST_WOLF,

  SECTION_TITLE_COLOR: COLORS.SIGNAL_GRAY,

  LINK_COLORS: {
    DEFAULT: COLORS.SIGNAL_GRAY,
    HOVER: COLORS.SAND_YELLOW,
    ACTIVE: COLORS.DARK_BLUE,
  },

  LINK_MARK_COLORS: {
    DEFAULT: COLORS.TRANSPARENT,
    HOVER: COLORS.SAND_YELLOW,
    ACTIVE: COLORS.DARK_BLUE,
  },
};
