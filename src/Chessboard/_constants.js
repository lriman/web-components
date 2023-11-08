export const COMPONENTS = {
  GENERAL: 'Chessboard',
  PAWN_PROMOTION: 'PawnPromotion',
  CHESSBOARD_EDITOR: 'ChessboardEditor',
};

export const PIECE_STYLES = {
  SET_1: 'set1',
  SET_2: 'set2',
  SET_3: 'set3',
  SET_4: 'set4',
  SET_5: 'set5',
};

export const CHESSBOARD_STYLES = {
  PURPLE: 'purple',
  PURPLE_CONTRAST: 'purpleContrast',
  TEXTURE_PURPLE: 'texturePurple',
  BLUE: 'blue',
  BLUE_CONTRAST: 'blueContrast',
  BRONZE: 'bronze',
  BRONZE_CONTRAST: 'bronzeContrast',
  MASTER: 'master',
};

export const CHESSBOARD_SETTINGS = {
  POSITION: 'empty',
  ORIENTATION: 'w',
  MARKER_STYLE: 'purple',
  CSS_CLASS: 'brown',
  PIECE_STYLE: PIECE_STYLES.SET_1,
  BOARD_STYLE: CHESSBOARD_STYLES.BLUE_CONTRAST,
};

export const MOVE_INPUT_MODE = {
  viewOnly: 0,
  dragPiece: 1,
  dragMarker: 2,
};

export const INPUT_EVENT_TYPE = {
  moveStart: 'moveStart',
  moveDone: 'moveDone',
  moveCanceled: 'moveCanceled',
  context: 'context',
};

export const MARKER_TYPE = {
  move: { class: 'move', slice: 'marker1' },
  purple: { class: 'purple', slice: 'marker2', color: '#8383EB' },
  gold: { class: 'gold', slice: 'marker2', color: '#B79D77' },
  red: { class: 'red', slice: 'marker2', color: '#F19079' },
  green: { class: 'green', slice: 'marker2', color: '#7EC299' },
};

export const COLOR = {
  white: 'w',
  black: 'b',
};

export const PIECE = {
  whitePawn: 'wp',
  whiteBishop: 'wb',
  whiteKnight: 'wn',
  whiteRook: 'wr',
  whiteQueen: 'wq',
  whiteKing: 'wk',
  blackPawn: 'bp',
  blackBishop: 'bb',
  blackKnight: 'bn',
  blackRook: 'br',
  blackQueen: 'bq',
  blackKing: 'bk',
};

export const EDITOR_PIECES = {
  w: ['pointer', 'wk', 'wq', 'wr', 'wb', 'wn', 'wp', 'trash'],
  b: ['pointer', 'bk', 'bq', 'br', 'bb', 'bn', 'bp', 'trash'],
};

export const FEN_START_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export const FEN_EMPTY_POSITION = '8/8/8/8/8/8/8/8';

export const SQUARE_COORDINATES = [
  'a1',
  'b1',
  'c1',
  'd1',
  'e1',
  'f1',
  'g1',
  'h1',
  'a2',
  'b2',
  'c2',
  'd2',
  'e2',
  'f2',
  'g2',
  'h2',
  'a3',
  'b3',
  'c3',
  'd3',
  'e3',
  'f3',
  'g3',
  'h3',
  'a4',
  'b4',
  'c4',
  'd4',
  'e4',
  'f4',
  'g4',
  'h4',
  'a5',
  'b5',
  'c5',
  'd5',
  'e5',
  'f5',
  'g5',
  'h5',
  'a6',
  'b6',
  'c6',
  'd6',
  'e6',
  'f6',
  'g6',
  'h6',
  'a7',
  'b7',
  'c7',
  'd7',
  'e7',
  'f7',
  'g7',
  'h7',
  'a8',
  'b8',
  'c8',
  'd8',
  'e8',
  'f8',
  'g8',
  'h8',
];
