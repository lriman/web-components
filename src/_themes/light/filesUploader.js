import colors from '../colors';

export default {
  backgroundColor: colors.base.background.surfaceContrast,
  borderColor: colors.base.onContrast.strokes,
  headerBackgroundColor: colors.base.background.surfaceContrast,
  itemBackgroundColors: {
    normal: colors.transparent,
    hover: colors.brand.primary.pale,
  },
  addBackgroundColors: {
    normal: colors.base.background.surfaceContrast,
    error: colors.accents.error.light,
    active: colors.brand.primary.light,
  },
};
