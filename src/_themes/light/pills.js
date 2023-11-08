import colors from '../colors';

export default {
  normal: {
    borderColors: {
      primary: colors.base.onContrast.strokes,
      secondary: colors.transparent,
    },
    backgroundColors: {
      primary: colors.transparent,
      secondary: colors.base.background.surfaceContrast,
    },
    item: {
      colors: {
        primary: {
          default: colors.base.onContrast.main,
          active: colors.white,
          hovered: colors.brand.primary.main,
          disabled: colors.base.onBase.medium,
        },
        secondary: {
          default: colors.base.onContrast.main,
          active: colors.white,
          hovered: colors.brand.primary.main,
          disabled: colors.base.onBase.medium,
        },
      },
      backgroundColors: {
        primary: {
          default: colors.transparent,
          active: colors.brand.primary.main,
          hovered: colors.transparent,
          disabled: colors.transparent,
        },
        secondary: {
          default: colors.transparent,
          active: colors.brand.primary.medium,
          hovered: colors.transparent,
          disabled: colors.transparent,
        },
      },
    },
  },
  inverse: {
    borderColors: {
      primary: colors.base.onBase.strokes,
      secondary: colors.transparent,
    },
    backgroundColors: {
      primary: colors.transparent,
      secondary: colors.base.background.surface1,
    },
    item: {
      colors: {
        primary: {
          default: colors.base.onBase.main,
          active: colors.white,
          hovered: colors.brand.primary.light,
          disabled: colors.base.onBase.disabled,
        },
        secondary: {
          default: colors.base.onBase.main,
          active: colors.white,
          hovered: colors.brand.primary.light,
          disabled: colors.base.onBase.disabled,
        },
      },
      backgroundColors: {
        primary: {
          default: colors.transparent,
          active: colors.brand.primary.main,
          hovered: colors.transparent,
          disabled: colors.transparent,
        },
        secondary: {
          default: colors.transparent,
          active: colors.brand.primary.medium,
          hovered: colors.transparent,
          disabled: colors.transparent,
        },
      },
    },
  },
};
