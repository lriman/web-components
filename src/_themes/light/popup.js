import colors from '../colors';

export default {
  normal: {
    boxShadow: `0px 0px 4px ${colors.darkLow}`,
    borderColor: colors.transparent,
    backgroundColor: colors.white,
  },
  inverse: {
    boxShadow: `0px 2px 10px ${colors.base.transparent.dark15}`,
    borderColor: colors.base.background.main,
    backgroundColor: `linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), ${colors.base.background.main}`,
  },
};
