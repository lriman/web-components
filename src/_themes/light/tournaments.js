import colors from '../colors';

export default {
  tournament: {
    cap: {
      timerColor: colors.white,
      timerLabelColor: colors.base.onBase.medium,
      copyColor: {
        normal: colors.base.onBase.medium,
        hovered: colors.brand.primary.medium,
      },
    },
    cancelCard: {
      backgroundColor: colors.accents.error.deep,
    },
    table: {
      round: {
        colors: {
          lost: colors.brand.primary.main,
          win: colors.accents.error.medium,
          draw: colors.base.onBase.high,
          active: colors.base.onContrast.high,
          default: colors.white,
        },
        backgroundColors: {
          queen: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #3C3D47',
          active: colors.brand.secondary.main,
          hovered: colors.brand.primary.light,
          leader: 'linear-gradient(180deg, #312B45 0%, #3C3D47 100%), #3C3D47',
        },
      },
    },
    dashboard: {
      timer: {
        color: {
          normal: colors.base.onBase.low,
          isLittleTime: colors.accents.error.main,
          isCountdown: colors.base.onBase.main,
        },
      },
      table: {
        resultColors: {
          lost: colors.brand.primary.main,
          win: colors.accents.error.medium,
          draw: colors.base.onBase.high,
        },
        borderColor: colors.base.onContrast.strokes,
      },
    },
    bracket: {
      lineColor: colors.base.onBase.high,
      cardBackgroundColor: {
        normal: colors.base.background.surface1,
        win: '#4343A8',
      },
      resultBackgroundColor: {
        normal: colors.transparent,
        win: '#5A5AD1',
      },
      cardLineColor: colors.base.background.surface2,
    },
    knockoutTable: {
      captions: {
        extraGame: colors.brand.primary.pale,
      },
      cells: {
        game: {
          mainType: {
            white: '#444553',
            black: '#3C3D47',
          },
          extraType: {
            white: 'linear-gradient(0deg, rgba(80, 86, 172, 0.4), rgba(80, 86, 172, 0.4)), #3C3D47',
            black: 'linear-gradient(0deg, rgba(80, 86, 172, 0.2), rgba(80, 86, 172, 0.2)), #3C3D47',
          },
        },
        points: {
          finished: 'linear-gradient(99.66deg, #4950AB -15.86%, #5058BD 65.54%), #5B61B5',
        },
      },
    },
  },
  timeline: {
    boxShadow: `0px 1px 0px rgba(255, 255, 255, 0.1), 0px 0px 0px rgba(255, 255, 255, 0.1)`,
    currentTime: {
      color: colors.brand.secondary.main,
      borderColor: colors.brand.secondary.main,
      backgroundColor: colors.brand.secondary.main,
    },
    tournament: {
      backgroundColor: {
        active: colors.base.onContrast.medium,
        finished: colors.base.background.deep,
      },
    },
    line: {
      graph: {
        backgroundColor: colors.base.background.surface2,
      },
      track: {
        backgroundColor: colors.brand.primary.main,
      },
      rail: {
        backgroundColor: colors.brand.primary.medium,
      },
    },
  },
};
