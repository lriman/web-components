import colors from '../colors';

export default {
  normal: {
    tooltipColor: colors.base.onContrast.main,
    trackBackgroundColor: colors.brand.primary.medium,
    railBackgroundColor: colors.base.onBase.low,
    handle: {
      borderColor: {
        normal: colors.brand.primary.medium,
        focused: colors.brand.primary.medium,
        hovered: colors.brand.primary.medium,
      },
      backgroundColors: {
        normal: colors.grey5,
        focused: colors.brand.primary.light,
        hovered: colors.brand.primary.light,
      },
    },
    markColor: {
      normal: colors.base.onContrast.main,
      accent: colors.brand.secondary.main,
    },
    dotBackgroundColor: {
      normal: colors.base.onBase.low,
      accent: colors.brand.secondary.main,
    },
  },
  inverse: {
    tooltipColor: colors.white,
    trackBackgroundColor: colors.brand.primary.medium,
    railBackgroundColor: colors.base.onBase.low,
    handle: {
      borderColor: {
        normal: colors.brand.primary.medium,
        focused: colors.brand.primary.medium,
        hovered: colors.brand.primary.medium,
      },
      backgroundColors: {
        normal: colors.grey5,
        focused: colors.brand.primary.light,
        hovered: colors.brand.primary.light,
      },
    },
    markColor: {
      normal: colors.base.onBase.high,
      accent: colors.brand.secondary.main,
    },
    dotBackgroundColor: {
      normal: colors.base.onBase.low,
      accent: colors.brand.secondary.main,
    },
  },
};
