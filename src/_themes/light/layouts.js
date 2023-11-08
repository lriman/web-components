import colors from '../colors';

export default {
  backgroundColor: colors.base.background.main,
  section: {
    backgroundColors: {
      normal: colors.base.background.normal,
      contrast: colors.base.background.contrast,
      inverse: colors.base.background.inverse,
      main: colors.base.background.main,
      deep: colors.base.background.deep,
      accented: colors.brand.primary.medium,

      bullet: 'linear-gradient(180deg, #D18707 0%, #F2B560 100%)',
      blitz: 'linear-gradient(180deg, #5757A0 0%, #B3B3FD 100%)',
      rapid: 'linear-gradient(180deg, #73A663 0%, #A6DC96 100%)',
      classic: 'linear-gradient(180deg, #A04833 0%, #EA7C62 100%)',
      offline: 'linear-gradient(180deg, #3190AC 0%, #70CBE6 100%)',
      armageddon: 'linear-gradient(225.39deg, #A1422C 16.5%, #5858E1 80.37%), #5555E1',

      leaderboard: colors.brand.primary.dark,
      learning: 'linear-gradient(180deg, #3A3A51 0%, rgba(45, 46, 55, 0) 100%)',
    },
    colors: {
      normal: colors.base.onContrast.high,
      contrast: colors.base.onContrast.main,
      inverse: colors.base.onBase.high,
      main: colors.base.onBase.high,
      deep: colors.base.onBase.high,
      accented: colors.base.onBase.high,

      bullet: colors.base.onContrast.main,
      blitz: colors.base.onContrast.main,
      rapid: colors.base.onContrast.main,
      classic: colors.base.onContrast.main,
      offline: colors.base.onContrast.main,

      leaderboard: colors.base.onBase.main,
      learning: colors.base.onBase.main,
    },
  },
  navigation: {
    modalBackgroundColor: colors.base.background.inverse,
    menuItemActiveBorderColor: colors.brand.primary.main,
    menuItemLinkColors: {
      normal: colors.base.onBase.main,
      hover: colors.brand.primary.main,
      disabled: colors.base.onBase.disabled,
    },
  },

  // todo remove
  main: {
    backgroundColor: colors.grey10,
    bodyBackgroundColor: colors.grey10,
    sideBackgroundColor: colors.white,
    sideBoxShadow: `4px 0px 8px ${colors.grey10}`,
  },
  modal: {
    bodyBackgroundColor: colors.base.background.main,
  },
};
