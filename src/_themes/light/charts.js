import colors from '../colors';

export default {
  normal: {
    color: colors.base.onContrast.low,
    strokesColor: colors.base.onContrast.strokes,
    activeDotStrokesColor: colors.white,
    tooltip: {
      backgroundColor: colors.base.background.main,
      boxShadow: colors.base.transparent.dark50,
    },
  },
  inverse: {
    color: colors.base.onBase.low,
    strokesColor: colors.base.onBase.strokes,
    activeDotStrokesColor: colors.white,
    tooltip: {
      backgroundColor: colors.base.background.main,
      boxShadow: colors.base.transparent.dark50,
    },
  },
};
