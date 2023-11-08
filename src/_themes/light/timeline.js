import colors from '../colors';

export default {
  times: {
    borderColor: {
      normal: colors.base.onBase.strokes,
      active: colors.brand.secondary.main,
    },
  },
  currentTime: {
    color: colors.brand.secondary.main,
    borderColor: colors.brand.secondary.main,
    backgroundColor: colors.brand.secondary.main,
  },
  tournament: {
    colors: {
      major: {
        participating: colors.grey100,
        finished: colors.base.onBase.disabled,
        normal: colors.base.onBase.main,
      },
      primary: {
        participating: colors.base.onContrast.high,
        finished: colors.base.onBase.disabled,
        normal: colors.base.onBase.high,
      },
    },
    backgroundColors: {
      normal: colors.base.background.surface1,
      finished: colors.base.background.deep,

      bullet: colors.additional.tournaments.bullet.medium,
      blitz: colors.additional.tournaments.blitz.medium,
      rapid: colors.additional.tournaments.rapid.medium,
      classic: colors.additional.tournaments.classic.medium,
      offline: colors.additional.tournaments.daily.medium,
    },

    iconColors: {
      bullet: colors.additional.tournaments.bullet.dark,
      blitz: colors.additional.tournaments.blitz.dark,
      rapid: colors.additional.tournaments.rapid.dark,
      classic: colors.additional.tournaments.classic.dark,
      offline: colors.additional.tournaments.daily.dark,
    },
    iconBackgroundColors: {
      normal: colors.transparent,
      finished: colors.transparent,

      bullet: colors.additional.tournaments.bullet.light,
      blitz: colors.additional.tournaments.blitz.light,
      rapid: colors.additional.tournaments.rapid.light,
      classic: colors.additional.tournaments.classic.light,
      offline: colors.additional.tournaments.daily.light,
    },
    participantsExtraColor: colors.grey90,
    participantsExtraBackgroundColors: {
      normal: colors.white,
      finished: colors.base.onBase.disabled,
    },
  },
};
