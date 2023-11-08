import colors from '../colors';

export default {
  normal: {
    default: {
      text: colors.base.onContrast.high,
      border: colors.base.onContrast.strokes,
      hover: colors.base.onContrast.main,
    },
    primary: {
      text: colors.brand.primary.medium,
      border: colors.brand.primary.light,
      hover: colors.brand.primary.deep,
    },
    secondary: {
      text: colors.base.onContrast.low,
      border: colors.base.onContrast.strokes,
      hover: colors.base.onContrast.main,
    },
    danger: {
      text: colors.accents.error.medium,
      border: colors.accents.error.light,
      hover: colors.accents.error.medium,
    },
    disabled: {
      text: colors.base.onBase.disabled,
    },
  },
  inverse: {
    default: {
      text: colors.base.onBase.high,
      border: colors.base.onBase.strokes,
      hover: colors.base.onBase.main,
    },
    primary: {
      text: colors.brand.primary.pale,
      border: colors.brand.primary.light,
      hover: colors.brand.primary.pale,
    },
    secondary: {
      text: colors.base.onBase.low,
      border: colors.base.onBase.strokes,
      hover: colors.base.onBase.main,
    },
    danger: {
      text: colors.accents.error.main,
      border: colors.accents.error.light,
      hover: colors.accents.error.main,
    },
    disabled: {
      text: colors.base.onContrast.disabled,
    },
  },
};
