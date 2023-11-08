import React, { Component } from 'react';

import Piece from './Piece';
import Square from './Square';
import Notation from './Notation';
import { ChessboardContext } from './context';
import Row from './Row';

class Board extends Component {
  setSquareCoordinates = (x, y, square) => this.setState({ [square]: { x, y } });

  hasPiece = (currentPosition, square) =>
    currentPosition && Object.keys(currentPosition) && Object.keys(currentPosition).includes(square);

  render() {
    return (
      <ChessboardContext.Consumer>
        {context => {
          return (
            <Row
              width={context.width}
              boardStyle={context.boardStyle}
              darkSquareStyle={context.darkSquareStyle}
              orientation={context.orientation}
              boardId={context.id}
              isBordered={context.isBordered}
              boardTheme={context.boardTheme}
            >
              {({ square, squareColor, col, row, alpha }) => {
                return (
                  <Square
                    key={`${col}${row}`}
                    width={context.width}
                    square={square}
                    squareColor={squareColor}
                    setSquareCoordinates={this.setSquareCoordinates}
                    lightSquareStyle={context.lightSquareStyle}
                    darkSquareStyle={context.darkSquareStyle}
                    dropSquareStyle={context.dropSquareStyle}
                    id={context.id}
                    screenWidth={context.screenWidth}
                    screenHeight={context.screenHeight}
                    squareStyles={context.squareStyles}
                  >
                    {this.hasPiece(context.currentPosition, square) ? (
                      <Piece
                        pieces={context.pieces}
                        square={square}
                        piece={context.currentPosition[square]}
                        width={context.width}
                        sourceSquare={context.sourceSquare}
                        targetSquare={context.targetSquare}
                        orientation={context.orientation}
                        id={context.id}
                      />
                    ) : null}

                    {context.showNotation && (
                      <Notation
                        row={row}
                        col={col}
                        alpha={alpha}
                        orientation={context.orientation}
                        width={context.width}
                        notationStyles={context.notationStyle}
                      />
                    )}
                  </Square>
                );
              }}
            </Row>
          );
        }}
      </ChessboardContext.Consumer>
    );
  }
}

export default Board;
