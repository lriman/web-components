import boardStyles from './_boardStyles';
import { CHESSBOARD_STYLES } from './_constants';

export default function getBoardStyles(style) {
  const values = JSON.parse(localStorage.getItem('LEVITOV_CHESS_SETTINGS')) || {};
  const { boardStyle } = values;
  const chessboardStyles = Object.values(CHESSBOARD_STYLES);

  if (style && chessboardStyles.includes(style)) return boardStyles[style];
  if (chessboardStyles.includes(boardStyle)) return boardStyles[boardStyle];
  return boardStyles[CHESSBOARD_STYLES.BLUE_CONTRAST];
}

export const getPromotionModalPosition = (color, orientation, isTop, isBottom) => {
  switch (orientation) {
    case 'w': {
      if (color === 'w') {
        if (isTop) return '5em';
        if (isBottom) return 'inherit';
      }

      if (color === 'b') {
        if (isTop) return 'inherit';
        if (isBottom) return '5em';
      }

      if (isTop) return '40%';
      if (isBottom) return '40%';
      return null;
    }

    case 'b': {
      if (color === 'w') {
        if (isTop) return 'inherit';
        if (isBottom) return '5em';
      }

      if (color === 'b') {
        if (isTop) return '5em';
        if (isBottom) return 'inherit';
      }

      if (isTop) return '40%';
      if (isBottom) return '40%';
      return null;
    }
    default:
      return null;
  }
};
