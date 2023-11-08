import colors from '../colors';

export default {
  normal: {
    menuBorderColor: colors.base.onContrast.strokes,
    borderColors: {
      default: colors.transparent,
      active: colors.grey90,
      hovered: colors.brand.primary.medium,
    },
    colors: {
      default: colors.grey30,
      active: colors.grey100,
      hovered: colors.brand.primary.medium,
    },
  },
  inverse: {
    menuBorderColor: colors.base.onBase.strokes,
    borderColors: {
      default: colors.transparent,
      active: colors.white,
      hovered: colors.brand.primary.medium,
    },
    colors: {
      default: colors.grey50,
      active: colors.white,
      hovered: colors.brand.primary.medium,
    },
  },
};
