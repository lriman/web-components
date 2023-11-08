import React from 'react';

import Grid, { Item } from '../Grid';
import Chessboard from '../Chessboard';
import Block from '../Typography/Block';

class ChessboardEditorExample extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      position: 'start',
      fen: null,
      pieceStyle: 'set1',
      selectedPiece: null,
    };
  }

  init = board => {
    this.board = board;
    setTimeout(this.setFenString, 100);
  };

  setFenString = () => {
    this.setState({ fen: this.board.getPosition() });
  };

  onMovePiece = () => {
    setTimeout(this.setFenString, 100);
    return true;
  };

  onSetSelectedPiece = piece => {
    this.setState({ selectedPiece: piece });
  };

  onSetPiece = (square, piece) => {
    let sqPiece = piece;
    if (this.board.getPiece(square) === piece) sqPiece = null;
    this.board.setPiece(square, sqPiece).then(() => {
      this.setFenString();
    });
  };

  render() {
    const { fen, selectedPiece, position, pieceStyle } = this.state;

    return (
      <Grid justify="center">
        <Item size={12}>
          <Block textAlign="center">fen: {fen}</Block>
        </Item>
        <Item size={12} tablet={5}>
          <Chessboard.Editor
            color="b"
            pieceStyle={pieceStyle}
            selectedPiece={selectedPiece}
            onSetPiece={this.onSetPiece}
            onSetSelectedPiece={this.onSetSelectedPiece}
            ratio={3}
            isTop
          />
          <Chessboard
            id="board-with-editor"
            position={position}
            init={this.init}
            onMovePiece={this.onMovePiece}
            showCoordinates
          />
          <Chessboard.Editor
            pieceStyle={pieceStyle}
            selectedPiece={selectedPiece}
            onSetPiece={this.onSetPiece}
            onSetSelectedPiece={this.onSetSelectedPiece}
          />
        </Item>
      </Grid>
    );
  }
}

export default ChessboardEditorExample;
