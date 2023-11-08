const getCapturedPieces = (moves, color) => {
  return moves?.filter(item => item.color === color && item.captured).map(item => item.captured) || [];
};

export default function getCaptured(moves) {
  return {
    w: getCapturedPieces(moves, 'w'),
    b: getCapturedPieces(moves, 'b'),
  };
}
