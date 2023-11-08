import colors from '../colors';

export default {
  color: colors.base.onContrast.main,
  backgroundColor: colors.white,
  margin: '-12px -12px 0',
  section: {
    padding: '8px 0px',
    main: {
      padding: '8px 40px 8px 48px',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 24,
      borderRadius: 8,
      colors: {
        normal: colors.base.onContrast.main,
        active: colors.white,
      },
      backgroundColors: {
        normal: colors.transparent,
        active: colors.brand.primary.medium,
      },
    },
    items: {
      padding: '16px 0 0 20px',
      inner: {
        borderColor: colors.base.onBase.high,
      },
    },
    item: {
      padding: '4px 0 4px 16px',
      borderColors: {
        normal: colors.transparent,
        active: colors.brand.primary.medium,
      },
      inner: {
        padding: '6px 12px 6px 13px',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 20,
        borderRadius: 8,
        colors: {
          normal: colors.grey80,
          active: colors.white,
        },
        backgroundColors: {
          normal: colors.transparent,
          active: colors.brand.primary.medium,
        },
      },
    },
  },
  icon: {
    size: 20,
  },
};
