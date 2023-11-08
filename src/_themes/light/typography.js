import colors from '../colors';

export default {
  normal: {
    major: colors.base.onContrast.main,
    primary: colors.base.onContrast.high,
    secondary: colors.base.onContrast.medium,
    minor: colors.base.onContrast.low,
    disabled: colors.base.onContrast.disabled,
    positive: colors.accents.success.medium,
    negative: colors.accents.error.medium,
    warning: colors.accents.warning.medium,
    accent1: colors.brand.primary.medium,
    accent2: colors.brand.secondary.medium,
  },
  inverse: {
    major: colors.base.onBase.main,
    primary: colors.base.onBase.high,
    secondary: colors.base.onBase.medium,
    minor: colors.base.onBase.low,
    disabled: colors.base.onBase.disabled,
    positive: colors.accents.success.main,
    negative: colors.accents.error.main,
    warning: colors.accents.warning.main,
    accent1: colors.brand.primary.main,
    accent2: colors.brand.secondary.main,
  },
};
