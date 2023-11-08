import { rgba } from 'polished';

export const MEDIA_BREAKPOINTS = {
  LARGE_PHONE: 480,
  TABLET: 768,
  SMALL_DESKTOP: 992,
  DESKTOP: 1200,
  LARGE_DESKTOP: 1400,
  EXTRA_LARGE_DESKTOP: 1920,
};

export const MEDIA_SIZES = {
  S: 's', // 320 - 768      / PHONE
  M: 'm', // 768 - 1200     / TABLET
  L: 'l', // 1200 - ∞       / DESKTOP

  S_M: 's-m', // 480 - 768  / LARGE_PHONE
  M_L: 'm-l', // 768 - 992  / SMALL_DESKTOP
  L_XL: 'l-xl', // 1600 - ∞ / LARGE_DESKTOP
};

export const MEDIA = {
  LARGE_PHONE: `min-width: ${MEDIA_BREAKPOINTS.LARGE_PHONE}px`,
  TABLET: `min-width: ${MEDIA_BREAKPOINTS.TABLET}px`,
  SMALL_DESKTOP: `min-width: ${MEDIA_BREAKPOINTS.SMALL_DESKTOP}px`,
  DESKTOP: `min-width: ${MEDIA_BREAKPOINTS.DESKTOP}px`,
  LARGE_DESKTOP: `min-width: ${MEDIA_BREAKPOINTS.LARGE_DESKTOP}px`,
  EXTRA_LARGE_DESKTOP: `min-width: ${MEDIA_BREAKPOINTS.EXTRA_LARGE_DESKTOP}px`,
};

export const FONTS = {
  PRIMARY: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  HEADING: '"Raleway", sans-serif',
  MAJOR: '"Raleway", sans-serif',
};

export const CORPORATE_COLORS = {
  CREDIT_PRIMARY: '#E26082',
  CREDIT_SECONDARY: '#E50047',
  BUSINESS_PRIMARY: '#56CDFC',
  BUSINESS_SECONDARY: '#3E6DFA',
  MARKET_PRIMARY: '#FF9F17',
  MARKET_SECONDARY: '#FF5D00',
  INSURANCE_PRIMARY: '#59E0C0',
  INSURANCE_SECONDARY: '#0EC884',
};

export const MAIN_COLORS = {
  TRANSPARENT: 'transparent',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  LAVENDER: '#DEE2F8',
  NIGHT_BLUE: '#232A42',
  GRAYISH_BLUE: '#828BA5',
  PALE_BLUE: '#BBC0D2', // rgb(187, 192, 210)
  MARENGO: '#4E5878',

  SATURATED_PURPLE: '#4E267F',
  INDIGO: '#41009E',
  DARK_PURPLE_VIOLET: '#630481',
  PURPLE_HEART: '#6D36B0',
  PURPLE_BLUE: '#9534F5',
  RED_CRAIOLA: '#E50047',

  ELECTRIC_BLUE: '#418BF9',
  LIGHT_BLUE: '#8DB9FB',
  FOREST_GREEN: '#2CA30E',
  TRANSPORT_RED: '#D20606',
  BRIGHT_ORANGE: '#DD5A3D',

  SMOKY_WHITE: '#F5F5F5',
  GHOSTLY_WHITE: '#F7F7FF',
  PERSIAN_INDIGO: '#382873',
  MARENGO_LIGHT: '#8697CB',
  ELECTRIC: '#3E6DFA',
};

export const LEVITOV_CHESS_COLORS = {
  GRAY: '#5C5C5C',
  LIGHT_GRAY: '#EEEEEE',
  HARBOR_GRAY: '#E1E2E3',
  HARMONY_GRAY: '#EEEEEF',
  LIGHT_TELEGRAY: '#D8D8D8',
  SIGNAL_GRAY: '#979797',
  DARK_BLUE: '#34373F',
  FERRARA_BLUE: '#28344A',
  FLAXEN: '#F9F1E9',
  FLAXEN_GRAY: '#EEECEA',
  SILVER_GRAY: '#8E8F99',
  LIGHT_ORANGE: '#F58879',
  MENTHOL: '#52C1AD',
  SAND_YELLOW: '#A08363',
  FOREST_WOLF: '#D8D3CE',
  SNOW_WHITE: '#FAF9F9',
  POWDER_WHITE: '#FEFEFE',
  PASTEL_TURQUOISE: '#78BCBB',
  LIGHT_PINK: '#FBDCDC',
  RASPBERRY_PINK: '#B0487A',
  LIGHT_SILVER: '#C9C1B8',
  DARK_LINK: '#BE6262',
  LIGHT_RED: '#FF8E8E',
  SPRING_WOOD: '#E7DFD7',
  VIOLET: '#A092FD',
  NEON_BLUE: '#8383EB',
  MAGENTO_BLUE: '#5555E1',
  CORAL: '#F19079',
  GAINSBOROUGH: '#F5F5F5',
  DARK_GREEN_SEA: '#7EC299',

  CHESS_BULLET: '#EFBA11',
  CHESS_BLITZ: '#D55E42',
  CHESS_RAPID: '#88C6FE',
  CHESS_CLASSIC: '#7EC299',
  CHESS_OFFLINE: '#8E8F99',
};

export const COLORS = {
  ...CORPORATE_COLORS,
  ...MAIN_COLORS,
  ...LEVITOV_CHESS_COLORS,
  BLACK_60: rgba(MAIN_COLORS.BLACK, 0.6),
  BLACK_40: rgba(MAIN_COLORS.BLACK, 0.4),
  BLACK_20: rgba(MAIN_COLORS.BLACK, 0.2),
  BLACK_10: rgba(MAIN_COLORS.BLACK, 0.1),
  WHITE_60: rgba(MAIN_COLORS.WHITE, 0.6),
  WHITE_40: rgba(MAIN_COLORS.WHITE, 0.4),
  WHITE_20: rgba(MAIN_COLORS.WHITE, 0.2),
  WHITE_10: rgba(MAIN_COLORS.WHITE, 0.1),
  PALE_BLUE_60: rgba(MAIN_COLORS.PALE_BLUE, 0.6),
  PALE_BLUE_40: rgba(MAIN_COLORS.PALE_BLUE, 0.4),
  PALE_BLUE_20: rgba(MAIN_COLORS.PALE_BLUE, 0.2),
  PALE_BLUE_10: rgba(MAIN_COLORS.PALE_BLUE, 0.1),
  PURPLE_BLUE_60: rgba(MAIN_COLORS.PURPLE_BLUE, 0.6),
  PURPLE_BLUE_40: rgba(MAIN_COLORS.PURPLE_BLUE, 0.4),
  PURPLE_BLUE_20: rgba(MAIN_COLORS.PURPLE_BLUE, 0.2),
  PURPLE_BLUE_10: rgba(MAIN_COLORS.PURPLE_BLUE, 0.1),
  FOREST_GREEN_60: rgba(MAIN_COLORS.FOREST_GREEN, 0.6),
  FOREST_GREEN_40: rgba(MAIN_COLORS.FOREST_GREEN, 0.4),
  FOREST_GREEN_20: rgba(MAIN_COLORS.FOREST_GREEN, 0.2),
  FOREST_GREEN_10: rgba(MAIN_COLORS.FOREST_GREEN, 0.1),
  MARENGO_60: rgba(MAIN_COLORS.MARENGO, 0.6),
  MARENGO_40: rgba(MAIN_COLORS.MARENGO, 0.4),
  MARENGO_20: rgba(MAIN_COLORS.MARENGO, 0.2),
  MARENGO_10: rgba(MAIN_COLORS.MARENGO, 0.1),
  GRAYISH_BLUE_60: rgba(MAIN_COLORS.GRAYISH_BLUE, 0.6),
  GRAYISH_BLUE_40: rgba(MAIN_COLORS.GRAYISH_BLUE, 0.4),
  GRAYISH_BLUE_20: rgba(MAIN_COLORS.GRAYISH_BLUE, 0.2),
  GRAYISH_BLUE_10: rgba(MAIN_COLORS.GRAYISH_BLUE, 0.1),
  NIGHT_BLUE_80: rgba(MAIN_COLORS.NIGHT_BLUE, 0.8),
  NIGHT_BLUE_60: rgba(MAIN_COLORS.NIGHT_BLUE, 0.6),
  NIGHT_BLUE_40: rgba(MAIN_COLORS.NIGHT_BLUE, 0.4),
  NIGHT_BLUE_20: rgba(MAIN_COLORS.NIGHT_BLUE, 0.2),
  NIGHT_BLUE_10: rgba(MAIN_COLORS.NIGHT_BLUE, 0.1),
  MARENGO_LIGHT_60: rgba(MAIN_COLORS.MARENGO_LIGHT, 0.6),
  MARENGO_LIGHT_40: rgba(MAIN_COLORS.MARENGO_LIGHT, 0.4),
  MARENGO_LIGHT_20: rgba(MAIN_COLORS.MARENGO_LIGHT, 0.2),
  MARENGO_LIGHT_10: rgba(MAIN_COLORS.MARENGO_LIGHT, 0.1),
  TRANSPORT_RED_80: rgba(MAIN_COLORS.TRANSPORT_RED, 0.8),
  TRANSPORT_RED_60: rgba(MAIN_COLORS.TRANSPORT_RED, 0.6),
  TRANSPORT_RED_40: rgba(MAIN_COLORS.TRANSPORT_RED, 0.4),
  TRANSPORT_RED_20: rgba(MAIN_COLORS.TRANSPORT_RED, 0.2),
  TRANSPORT_RED_10: rgba(MAIN_COLORS.TRANSPORT_RED, 0.1),
  ELECTRIC_BLUE_60: rgba(MAIN_COLORS.ELECTRIC_BLUE, 0.6),
  ELECTRIC_BLUE_40: rgba(MAIN_COLORS.ELECTRIC_BLUE, 0.4),
  ELECTRIC_BLUE_20: rgba(MAIN_COLORS.ELECTRIC_BLUE, 0.2),
  ELECTRIC_BLUE_10: rgba(MAIN_COLORS.ELECTRIC_BLUE, 0.1),
  RED_CRAIOLA_60: rgba(MAIN_COLORS.RED_CRAIOLA, 0.6),
  RED_CRAIOLA_40: rgba(MAIN_COLORS.RED_CRAIOLA, 0.4),
  RED_CRAIOLA_20: rgba(MAIN_COLORS.RED_CRAIOLA, 0.2),
  RED_CRAIOLA_10: rgba(MAIN_COLORS.RED_CRAIOLA, 0.1),

  SIGNAL_GRAY_60: rgba(LEVITOV_CHESS_COLORS.SIGNAL_GRAY, 0.6),
  SIGNAL_GRAY_40: rgba(LEVITOV_CHESS_COLORS.SIGNAL_GRAY, 0.4),
  SIGNAL_GRAY_20: rgba(LEVITOV_CHESS_COLORS.SIGNAL_GRAY, 0.2),
};

export const BOX_SHADOWS = {
  GENERAL: color => `0px 0px 8px ${color || COLORS.BLACK_20}`,
  BOTTOM: color => `0px 16px 16px -4px ${color || COLORS.BLACK_20}`,
  INNER: color => `inset 0px 0px 8px ${color || COLORS.BLACK_20}`,
  SIDE: color => `4px 0px 8px ${color || COLORS.BLACK_20}`,
};

export const MEDIA_QUERIES = {
  XS: 480,
  S: 768,
  M: 992,
  L: 1200,
  XL: 1600,
};
