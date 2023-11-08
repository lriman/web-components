import colors from '../colors';

export default {
  normal: {
    colors: {
      active: colors.black,
      hovered: colors.black,
      normal: colors.base.onContrast.low,
      disabled: colors.base.onContrast.disabled,
    },
  },
  inverse: {
    colors: {
      active: colors.white,
      hovered: colors.white,
      normal: colors.base.onBase.low,
      disabled: colors.base.onBase.disabled,
    },
  },
};
