import colors from '../colors';

export default {
  gameTypes: {
    titleColor: {
      normal: colors.grey100,
      inverse: colors.base.onBase.high,
    },
    textColor: {
      normal: colors.grey80,
      inverse: colors.grey30,
    },
    gameTypeTimes: {
      colors: {
        normal: {
          normal: colors.grey100,
          hovered: colors.base.onBase.high,
          active: colors.base.onBase.high,
          activeHovered: colors.base.onBase.high,
          pressed: colors.base.onBase.high,
        },
        inverse: {
          normal: colors.base.onBase.high,
          hovered: colors.base.onBase.high,
          active: colors.base.onBase.high,
          activeHovered: colors.base.onBase.high,
          pressed: colors.base.onBase.high,
        },
      },
      borderColors: {
        normal: {
          normal: colors.grey100,
          hovered: colors.brand.primary.medium,
          active: colors.brand.primary.medium,
          activeHovered: 'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #5555E1',
          pressed: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #5555E1',
        },
        inverse: {
          normal: colors.base.onBase.strokes,
          hovered: colors.brand.primary.medium,
          active: colors.brand.primary.medium,
          activeHovered: 'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #5555E1',
          pressed: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #5555E1',
        },
      },
      backgroundColors: {
        normal: {
          normal: colors.transparent,
          hovered: colors.brand.primary.medium,
          active: colors.brand.primary.medium,
          activeHovered: 'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #5555E1',
          pressed: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #5555E1',
        },
        inverse: {
          normal: colors.transparent,
          hovered: colors.brand.primary.medium,
          active: colors.brand.primary.medium,
          activeHovered: 'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #5555E1',
          pressed: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #5555E1',
        },
      },
      boxShadow: '0px 0px 25.1952px rgba(45, 46, 55, 0.08)',
    },
  },
  figureColor: {
    backgroundColors: {
      normal: colors.transparent,
      hovered: colors.brand.primary.medium,
      active: colors.brand.primary.medium,
    },
  },
  friendCard: {
    progressColors: {
      normal: colors.grey40,
      hovered: colors.grey40,
      active: colors.base.onBase.medium,
    },
    backgroundColors: {
      normal: colors.transparent,
      hovered: colors.base.background.main,
      active: colors.brand.primary.medium,
    },
    scrollbar: {
      track: {
        backgroundColor: colors.transparent,
      },
      thumb: {
        backgroundColor: colors.grey80,
      },
    },
  },
};
