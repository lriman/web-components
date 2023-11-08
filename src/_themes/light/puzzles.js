import colors from '../colors';

export default {
  backgroundColors: {
    /* eslint-disable */
    combination: {
      'pin': 'linear-gradient(180deg, #0B5C61 0%, #2D2E37 69.27%)',
      'removing-the-defender': 'linear-gradient(180deg, #4B263C 0%, #2D2E37 69.27%), linear-gradient(180deg, #36280E 0%, #2D2E37 69.27%), linear-gradient(180deg, #27194D 0%, #2D2E37 69.27%), #2D2E37',
      'deflection': 'linear-gradient(180deg, #36280E 0%, #2D2E37 69.27%), linear-gradient(180deg, #27194D 0%, #2D2E37 69.27%), #2D2E37',
      'double-attack': 'linear-gradient(180deg, #471010 0%, #2D2E37 69.27%)',
      'decoying': 'linear-gradient(180deg, #153E25 0%, #2D2E37 69.27%)',
      'forced-checkmate': 'linear-gradient(180deg, #27194D 0%, #2D2E37 69.27%), #2D2E37',
      'x-ray-attack': 'linear-gradient(180deg, #364A8F 0%, #2D2E37 69.27%)',
    },
    /* eslint-enable */
    etude: {
      'win-decision': colors.base.background.main,
      'draw-decision': colors.base.background.main,
    },
    puzzleRush: {
      timeLimit: colors.base.background.main,
      survival: colors.base.background.main,
    },
  },
  puzzle: {
    statusInfoColors: {
      positive: colors.accents.success.main,
      negative: colors.accents.error.main,
      normal: colors.base.onContrast.main,
    },
    statusInfoBackgroundColors: {
      positive: colors.accents.success.deep,
      negative: colors.accents.error.deep,
      normal: colors.base.background.surfaceContrast,
    },
  },
};
