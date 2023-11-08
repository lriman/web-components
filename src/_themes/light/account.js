import colors from '../colors';

export default {
  normal: {
    color: colors.base.onContrast.high,
    avatar: {
      color: colors.base.onContrast.high,
      backgroundColors: {
        normal: colors.brand.primary.main,
        hovered: colors.base.transparent.dark08,
      },
      borderColor: colors.transparent,
      boxShadowColor: colors.transparent,
      change: {
        backgroundColor: colors.base.onContrast.strokes,
        color: colors.base.onBase.high,
      },
      iconFriendsColor: colors.brand.primary.medium,
    },
    menu: {
      itemColors: {
        normal: colors.base.onContrast.low,
        hovered: colors.brand.primary.medium,
      },
    },
  },
  inverse: {
    color: colors.base.onBase.high,
    avatar: {
      color: colors.base.onBase.high,
      backgroundColors: {
        normal: colors.brand.primary.main,
        hovered: colors.base.transparent.dark08,
      },
      borderColor: colors.transparent,
      boxShadowColor: colors.transparent,
      change: {
        backgroundColor: colors.base.onContrast.strokes,
        color: colors.base.onBase.high,
      },
      iconFriendsColor: colors.brand.primary.medium,
    },
    menu: {
      itemColors: {
        normal: colors.base.onBase.low,
        hovered: colors.white,
      },
    },
  },
};
