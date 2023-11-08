import colors from '../colors';

export default {
  colors: {
    bullet: colors.additional.tournaments.bullet.dark,
    blitz: colors.additional.tournaments.blitz.dark,
    rapid: colors.additional.tournaments.rapid.dark,
    classic: colors.additional.tournaments.classic.dark,
    offline: colors.additional.tournaments.daily.dark,
    puzzleRush: colors.additional.tournaments.puzzleRush.dark,
    inactive: colors.base.onContrast.high,
  },
  borderColors: {
    bullet: colors.additional.tournaments.bullet.medium,
    blitz: colors.additional.tournaments.blitz.medium,
    rapid: colors.additional.tournaments.rapid.medium,
    classic: colors.additional.tournaments.classic.medium,
    offline: colors.additional.tournaments.daily.medium,
    puzzleRush: colors.additional.tournaments.puzzleRush.medium,
    inactive: colors.base.background.surface1,
    accented: colors.white,
    custom: colors.additional.tournaments.custom.medium,
  },
  backgroundColors: {
    bullet: colors.additional.tournaments.bullet.light,
    blitz: colors.additional.tournaments.blitz.light,
    rapid: colors.additional.tournaments.rapid.light,
    classic: colors.additional.tournaments.classic.light,
    offline: colors.additional.tournaments.daily.light,
    puzzleRush: colors.additional.tournaments.puzzleRush.light,
    inactive: colors.base.onContrast.medium,
  },

  badge: {
    dotBackgroundColor: colors.accents.error.medium,
    colors: {
      active: colors.base.onBase.high,
      open: colors.base.onBase.high,
      finished: colors.base.onBase.high,
      canceled: colors.base.onBase.high,
      custom: colors.white,
    },
    backgroundColors: {
      active: colors.brand.primary.medium,
      open: colors.accents.error.medium,
      finished: colors.base.onBase.disabled,
      canceled: colors.accents.error.medium,
      custom: colors.additional.tournaments.daily.medium,
    },
  },
  participantsExtraColor: colors.white,
  participantsExtraBackgroundColor: colors.base.onBase.strokes,
};
