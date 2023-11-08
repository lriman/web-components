export const squareIndexToPoint = (index, squareWidth, squareHeight, chessboard, borderSize) => {
  let x;
  let y;
  if (chessboard.state.orientation === 'w') {
    x = borderSize + (index % 8) * squareWidth;
    y = borderSize + (7 - Math.floor(index / 8)) * squareHeight;
  } else {
    x = borderSize + (7 - (index % 8)) * squareWidth;
    y = borderSize + Math.floor(index / 8) * squareHeight;
  }
  return { x, y };
};

export const getArrowPoints = (arrow, squareWidth, squareHeight, chessboard, borderSize) => {
  const a = squareIndexToPoint(arrow.from, squareWidth, squareHeight, chessboard, borderSize);
  a.x += squareWidth / 2;
  a.y += squareWidth / 2;
  const b = squareIndexToPoint(arrow.to, squareWidth, squareHeight, chessboard, borderSize);
  b.x += squareWidth / 2;
  b.y += squareWidth / 2;
  return { a, b };
};

export const getGradientArrow = (Svg, arrow, arrowGroup, a, b, xo, yo, strokeWidth) => {
  Svg.addElement(arrowGroup, 'line', {
    stroke: arrow.color,
    'stroke-width': strokeWidth,
    'stroke-linecap': 'round',
    'marker-end': `url(#arrowhead${arrow.from}-${arrow.to})`,
    'pointer-events': 'none',
    opacity: 0.95,
    x1: a.x,
    y1: a.y,
    x2: b.x - xo,
    y2: b.y - yo,
    orient: 'auto',
  });

  const defs = Svg.addElement(arrowGroup, 'defs', {});

  const marker = Svg.addElement(defs, 'marker', {
    id: `arrowhead${arrow.from}-${arrow.to}`,
    markerWidth: '10',
    markerHeight: '7',
    refX: '0',
    refY: '1.6',
    orient: 'auto',
  });
  Svg.addElement(marker, 'polygon', {
    id: '12',
    fill: arrow.color,
    points: '0 0, 2.7 1.6, 0 3.2',
  });
  return arrowGroup;
};

export const getMoveStyles = (data, styles) => {
  return data.map(item => {
    const square = item ? item[0] : null;
    return [square, styles.moveSquareStyles];
  });
};

export const getFileCoordinatesColor = (file, boardStyles, inline) => {
  if (!inline) return boardStyles.notationStyle;
  return file % 2 === 0 ? boardStyles.darkSquareNotationStyle : boardStyles.lightSquareNotationStyle;
};

export const getRankCoordinatesColor = (rank, boardStyles, inline) => {
  if (!inline) return boardStyles.notationStyle;
  return rank % 2 === 0 ? boardStyles.lightSquareNotationStyle : boardStyles.darkSquareNotationStyle;
};

export const getSquareDistance = (index1, index2) => {
  const file1 = index1 % 8;
  const rank1 = Math.floor(index1 / 8);
  const file2 = index2 % 8;
  const rank2 = Math.floor(index2 / 8);
  return Math.max(Math.abs(rank2 - rank1), Math.abs(file2 - file1));
};

export const squareToIndex = square => {
  if (!square) return null;
  const file = square.substr(0, 1).charCodeAt(0) - 97;
  const rank = square.substr(1, 1) - 1;
  return 8 * rank + file;
};

export const removeSpriteSvg = svg => {
  const spriteSvg = document.getElementById('board-spriteSvg');
  svg.removeElement(spriteSvg);
};
