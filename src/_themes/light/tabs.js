import colors from '../colors';

export default {
  borderColors: {
    normal: {
      default: colors.transparent,
      active: colors.base.onContrast.main,
      hovered: colors.brand.primary.main,
    },
    inverse: {
      default: colors.transparent,
      active: colors.base.onBase.main,
      hovered: colors.brand.primary.main,
    },
  },
  colors: {
    normal: {
      default: colors.base.onContrast.low,
      active: colors.base.onContrast.main,
      hovered: colors.brand.primary.main,
    },
    inverse: {
      default: colors.base.onBase.low,
      active: colors.base.onBase.main,
      hovered: colors.brand.primary.main,
    },
  },
  extraPopupBackground: colors.white,
};
