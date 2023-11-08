import colors from '../colors';

export default {
  normal: {
    columnLabel: {
      color: colors.grey40,
    },
    cellBorderColor: colors.grey20,
    leftColumn: {
      backgroundColor: '#F2F2F2',
    },
    rightColumn: {
      backgroundColor: '#F2F2F2',
    },
    moves: {
      backgroundColor: {
        normal: colors.transparent,
        active: colors.brand.primary.light,
        hovered: colors.brand.primary.light,
        new: colors.brand.secondary.light,
      },
      color: {
        normal: colors.base.onContrast.main,
        active: colors.base.onContrast.main,
        hovered: colors.base.onContrast.main,
        moveNum: colors.brand.primary.medium,
      },
    },
    tree: {
      borderColor: colors.grey20,
      backgroundColor: colors.grey10,
    },
    scrollbar: {
      track: {
        backgroundColor: colors.transparent,
      },
      thumb: {
        backgroundColor: colors.grey30,
      },
    },
    inlineMove: {
      backgroundColors: {
        normal: colors.transparent,
        active: colors.brand.primary.light,
      },
    },
  },
  inverse: {
    columnLabel: {
      color: colors.grey40,
    },
    cellBorderColor: colors.transparent,
    leftColumn: {
      backgroundColor: colors.base.background.surface2,
    },
    rightColumn: {
      backgroundColor: colors.base.background.surface1,
    },
    moves: {
      backgroundColor: {
        normal: colors.transparent,
        active: colors.brand.primary.medium,
        hovered: colors.brand.primary.medium,
        new: colors.brand.secondary.dark,
      },
      color: {
        normal: colors.white,
        active: colors.white,
        hovered: colors.white,
        moveNum: colors.white,
      },
    },
    tree: {
      borderColor: colors.grey20,
      backgroundColor: colors.transparent,
    },
    scrollbar: {
      track: {
        backgroundColor: colors.transparent,
      },
      thumb: {
        backgroundColor: colors.grey80,
      },
    },
    inlineMove: {
      backgroundColors: {
        normal: colors.transparent,
        active: colors.base.background.surface2,
      },
    },
  },
};
