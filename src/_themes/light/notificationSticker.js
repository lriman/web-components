import colors from '../colors';

export default {
  backgroundColors: {
    normal: colors.base.background.surface1,
    success: colors.accents.success.deep,
    warning: colors.accents.warning.deep,
    error: colors.accents.error.deep,
  },
  color: colors.base.onBase.main,
  iconColors: {
    normal: colors.base.onBase.high,
    success: colors.accents.success.main,
    warning: colors.accents.warning.main,
    error: colors.accents.error.main,
  },
  boxShadow: `0px 2px 16px ${colors.base.transparent.dark05}`,
  closeIconColors: {
    normal: colors.base.onBase.high,
    hovered: colors.base.onBase.low,
  },
};
