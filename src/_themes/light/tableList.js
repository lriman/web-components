import colors from '../colors';

export default {
  normal: {
    captionsColor: colors.base.background.main,
    captionsBorderColor: colors.transparent,
    sectionTitleColor: colors.base.background.main,
    sectionTitleBorderColor: colors.transparent,
    rowColors: {
      normal: colors.grey100,
      hovered: colors.grey100,
    },
    rowBackgroundColors: {
      normal: colors.base.onBase.main,
      hovered: colors.brand.primary.pale,
    },
    rowBorderColor: colors.base.onBase.high,
  },
  inverse: {
    captionsColor: colors.base.onBase.high,
    captionsBorderColor: colors.transparent,
    sectionTitleColor: colors.base.onBase.low,
    sectionTitleBorderColor: colors.transparent,
    rowColors: {
      normal: colors.base.onBase.high,
      hovered: colors.white,
    },
    rowBackgroundColors: {
      normal: colors.base.background.surface1,
      hovered: colors.brand.primary.medium,
    },
    rowBorderColor: colors.base.background.surface2,
  },
};
