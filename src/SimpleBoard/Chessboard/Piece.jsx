import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const renderChessPiece = ({ square, piece, width, pieces }) => {
  const renderChessPieceArgs = {
    squareWidth: width / 4,
  };

  return (
    <div data-testid={`${piece}-${square}`}>
      {typeof pieces[piece] === 'function' ? (
        pieces[piece](renderChessPieceArgs)
      ) : (
        <svg viewBox="1 1 43 43" width={width / 4} height={width / 4}>
          <g>{pieces[piece]}</g>
        </svg>
      )}
    </div>
  );
};

renderChessPiece.propTypes = {
  piece: PropTypes.string.isRequired,
  square: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  pieces: PropTypes.shape().isRequired,
};

class Piece extends Component {
  static propTypes = {
    piece: PropTypes.string.isRequired,
    square: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    pieces: PropTypes.shape().isRequired,
    sourceSquare: PropTypes.string.isRequired,
    targetSquare: PropTypes.string.isRequired,
  };

  render() {
    const { square, targetSquare, piece, width, pieces, sourceSquare } = this.props;

    return renderChessPiece({
      square,
      targetSquare,
      piece,
      width,
      pieces,
      sourceSquare,
    });
  }
}

export default Piece;
