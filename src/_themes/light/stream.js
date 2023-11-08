import { rgba } from 'polished';

import colors from '../colors';

export default {
  tournamentTable: {
    inverse: {
      tableBorderColor: '#181862',
      rowBorderColor: rgba(colors.brand.primary.dark, 0.75),
      rowBackgroundColors: {
        odd: '#090927',
        even: '#111146',
      },
      cellGameBackgroundColors: {
        default: colors.transparent,
        white: colors.transparent,
        black: '#090927',
      },
      cellGameColors: {
        lost: colors.brand.primary.main,
        win: colors.accents.error.medium,
        draw: colors.white,
      },
    },
    normal: {
      tableBorderColor: '#9797e1',
      rowBorderColor: rgba(colors.brand.primary.dark, 0.75),
      rowBackgroundColors: {
        odd: '#eaeaf9',
        even: '#d7d7f4',
      },
      cellGameBackgroundColors: {
        default: colors.transparent,
        white: colors.transparent,
        black: '#eaeaf9',
      },
      cellGameColors: {
        lost: colors.brand.primary.main,
        win: colors.accents.error.medium,
        draw: colors.black,
      },
    },
  },
  tourTable: {
    color: colors.darkHigh,
    backgroundColor: '#E3DFDD',
    borderColor: '#E3DFDD',
    contentBackgroundColor: colors.grey10,
    rowBorderColor: colors.grey15,
    playerPhotoBackgroundColor: colors.grey15,
    playerRatingColor: colors.brand.primary.medium,
    playerNameRankColor: colors.brand.primary.medium,
    resultBackgroundColor: colors.grey20,
  },
  resultsTable: {
    color: colors.darkHigh,
    backgroundColor: '#E3DFDD',
    borderColor: '#E3DFDD',
    contentBackgroundColor: colors.grey10,
    headerTitleColor: colors.white,
    headerTitleBackgroundColor: colors.grey90,
    roundsRowBorderColor: colors.grey50,
    roundsCellBorderColor: colors.grey30,
    rowBorderColor: colors.grey20,
  },
  content: {
    gameView: {
      borderColor: {
        light: '#8383EB',
        dark: '#EDB91D',
      },
      backgroundColors: {
        normal: '#E3DFDD',
        active: '#ECECFD',
      },
      profile: {
        colors: {
          white: colors.base.onContrast.main,
          black: colors.white,
        },
        backgroundColors: {
          oneToOneWhite: colors.white,
          oneToOneBlack: '#3D3E7C',
          tournamentWhite: colors.base.background.normal,
          tournamentBlack: '#231732',
        },
      },
      gameCard: {
        colors: {
          white: colors.base.onContrast.main,
          black: colors.base.onContrast.main,
        },
        backgroundColors: {
          white: '#E4B9C0',
          black: '#CA9AA1',
        },
        result: {
          color: colors.white,
          backgroundColors: {
            white: { win: '#C32F2F', lost: '#4E4EFF', draw: '#935F66' },
            black: { win: '#C32F2F', lost: '#4E4EFF', draw: '#865058' },
          },
        },
      },
      statusCard: {
        colors: {
          live: colors.white,
          active: colors.white,
          completed: colors.white,
        },
        backgroundColors: {
          live: '#C32F2F',
          active: '#4E4EFF',
          completed: '#C32F2F',
        },
      },
      timer: {
        colors: {
          normalWhite: colors.base.background.main,
          normalBlack: colors.white,
          isCountdown: colors.white,
          isLittleTime: colors.white,
        },
        backgroundColors: {
          normalWhite: colors.white,
          normalBlack: '#3D3E7C',
          isCountdown: colors.brand.primary.medium,
          isLittleTime: '#C32F2F',
        },
      },
      result: {
        color: colors.white,
        backgroundColors: {
          win: '#C32F2F',
          lost: '#4E4EFF',
          draw: '#6A4BC2',
        },
      },
    },
  },
  controls: {
    backgroundColor: colors.grey5,
  },
  toolbar: {
    tables: {
      backgroundColor: colors.grey15,
    },
    players: {
      backgroundColor: colors.grey15,
    },
    game: {
      selectDivider: {
        borderColor: colors.grey20,
      },
    },
    notation: {
      borderColor: colors.grey20,
      backgroundColor: colors.grey5,
      tree: {
        borderColor: colors.grey20,
        backgroundColor: colors.grey10,
      },
      button: {
        color: {
          hovered: colors.brand.primary.medium,
        },
      },
    },
    notationAir: {
      pagination: {
        color: {
          active: colors.brand.primary.medium,
          normal: colors.grey90,
        },
        borderColor: {
          active: colors.brand.primary.medium,
          normal: colors.grey30,
        },
      },
    },
  },
};
