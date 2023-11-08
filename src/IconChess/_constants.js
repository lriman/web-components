import { MEDIA_SIZES } from '../_constants';
import { REFS as TYPOGRAPHY_REFS, STYLES as TYPOGRAPHY_STYLES } from '../Typography/_constants';

export const COMPONENTS = {
  GENERAL: 'IconChess',
};

export const TYPES = {
  PAWN_WHITE_BASE: 'chessPawnWhiteBase',
  BISHOP_WHITE_BASE: 'chessBishopWhiteBase',
  HORSE_WHITE_BASE: 'chessHorseWhiteBase',
  KING_WHITE_BASE: 'chessKingWhiteBase',
  ROOK_WHITE_BASE: 'chessRookWhiteBase',
  QEEN_WHITE_BASE: 'chessQeenWhiteBase',
  PAWN_BLACK_BASE: 'chessPawnBlackBase',
  BISHOP_BLACK_BASE: 'chessBishopBlackBase',
  HORSE_BLACK_BASE: 'chessHorseBlackBase',
  KING_BLACK_BASE: 'chessKingBlackBase',
  ROOK_BLACK_BASE: 'chessRookBlackBase',
  QEEN_BLACK_BASE: 'chessQeenBlackBase',

  PAWN_WHITE_SET_1: 'chessPawnWhiteSet1',
  BISHOP_WHITE_SET_1: 'chessBishopWhiteSet1',
  ROOK_WHITE_SET_1: 'chessRookWhiteSet1',
  HORSE_WHITE_SET_1: 'chessHorseWhiteSet1',
  QEEN_WHITE_SET_1: 'chessQeenWhiteSet1',
  KING_WHITE_SET_1: 'chessKingWhiteSet1',
  PAWN_BLACK_SET_1: 'chessPawnBlackSet1',
  BISHOP_BLACK_SET_1: 'chessBishopBlackSet1',
  ROOK_BLACK_SET_1: 'chessRookBlackSet1',
  HORSE_BLACK_SET_1: 'chessHorseBlackSet1',
  QEEN_BLACK_SET_1: 'chessQeenBlackSet1',
  KING_BLACK_SET_1: 'chessKingBlackSet1',

  PAWN_WHITE_SET_2: 'chessPawnWhiteSet2',
  BISHOP_WHITE_SET_2: 'chessBishopWhiteSet2',
  ROOK_WHITE_SET_2: 'chessRookWhiteSet2',
  HORSE_WHITE_SET_2: 'chessHorseWhiteSet2',
  QEEN_WHITE_SET_2: 'chessQeenWhiteSet2',
  KING_WHITE_SET_2: 'chessKingWhiteSet2',
  PAWN_BLACK_SET_2: 'chessPawnBlackSet2',
  BISHOP_BLACK_SET_2: 'chessBishopBlackSet2',
  ROOK_BLACK_SET_2: 'chessRookBlackSet2',
  HORSE_BLACK_SET_2: 'chessHorseBlackSet2',
  QEEN_BLACK_SET_2: 'chessQeenBlackSet2',
  KING_BLACK_SET_2: 'chessKingBlackSet2',

  PAWN_WHITE_SET_3: 'chessPawnWhiteSet3',
  BISHOP_WHITE_SET_3: 'chessBishopWhiteSet3',
  ROOK_WHITE_SET_3: 'chessRookWhiteSet3',
  HORSE_WHITE_SET_3: 'chessHorseWhiteSet3',
  QEEN_WHITE_SET_3: 'chessQeenWhiteSet3',
  KING_WHITE_SET_3: 'chessKingWhiteSet3',
  PAWN_BLACK_SET_3: 'chessPawnBlackSet3',
  BISHOP_BLACK_SET_3: 'chessBishopBlackSet3',
  ROOK_BLACK_SET_3: 'chessRookBlackSet3',
  HORSE_BLACK_SET_3: 'chessHorseBlackSet3',
  QEEN_BLACK_SET_3: 'chessQeenBlackSet3',
  KING_BLACK_SET_3: 'chessKingBlackSet3',

  PAWN_WHITE_SET_4: 'chessPawnWhiteSet4',
  BISHOP_WHITE_SET_4: 'chessBishopWhiteSet4',
  ROOK_WHITE_SET_4: 'chessRookWhiteSet4',
  HORSE_WHITE_SET_4: 'chessHorseWhiteSet4',
  QEEN_WHITE_SET_4: 'chessQeenWhiteSet4',
  KING_WHITE_SET_4: 'chessKingWhiteSet4',
  PAWN_BLACK_SET_4: 'chessPawnBlackSet4',
  BISHOP_BLACK_SET_4: 'chessBishopBlackSet4',
  ROOK_BLACK_SET_4: 'chessRookBlackSet4',
  HORSE_BLACK_SET_4: 'chessHorseBlackSet4',
  QEEN_BLACK_SET_4: 'chessQeenBlackSet4',
  KING_BLACK_SET_4: 'chessKingBlackSet4',

  PAWN_WHITE_SET_5: 'chessPawnWhiteSet5',
  BISHOP_WHITE_SET_5: 'chessBishopWhiteSet5',
  ROOK_WHITE_SET_5: 'chessRookWhiteSet5',
  HORSE_WHITE_SET_5: 'chessHorseWhiteSet5',
  QEEN_WHITE_SET_5: 'chessQeenWhiteSet5',
  KING_WHITE_SET_5: 'chessKingWhiteSet5',
  PAWN_BLACK_SET_5: 'chessPawnBlackSet5',
  BISHOP_BLACK_SET_5: 'chessBishopBlackSet5',
  ROOK_BLACK_SET_5: 'chessRookBlackSet5',
  HORSE_BLACK_SET_5: 'chessHorseBlackSet5',
  QEEN_BLACK_SET_5: 'chessQeenBlackSet5',
  KING_BLACK_SET_5: 'chessKingBlackSet5',
};

export const REFS = {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
    XXL: 'xxl',
  },

  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },

  COLORS: TYPOGRAPHY_REFS.COLORS,
};

export const STYLES = {
  SIZES: {
    [MEDIA_SIZES.S]: {
      [REFS.SIZES.XS]: 16,
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
      [REFS.SIZES.XL]: 40,
      [REFS.SIZES.XXL]: 48,
    },
    [MEDIA_SIZES.M]: {
      [REFS.SIZES.XS]: 16,
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
      [REFS.SIZES.XL]: 40,
      [REFS.SIZES.XXL]: 68,
    },
    [MEDIA_SIZES.L]: {
      [REFS.SIZES.XS]: 16,
      [REFS.SIZES.S]: 20,
      [REFS.SIZES.M]: 24,
      [REFS.SIZES.L]: 32,
      [REFS.SIZES.XL]: 40,
      [REFS.SIZES.XXL]: 68,
    },
  },

  DISPLAY: {
    [REFS.DISPLAY.BLOCK]: 'block',
    [REFS.DISPLAY.INLINE]: 'inline-block',
  },

  COLORS: TYPOGRAPHY_STYLES.COLORS,
};
