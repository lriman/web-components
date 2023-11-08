import React from 'react';
import Chess from 'chess.js';

import Grid, { Item } from '../Grid';
import Chessboard from '../Chessboard';

import { getSquareStyles } from '../_utils/chessGame';
import boardStyles from '../Chessboard/_boardStyles';
import { CHESSBOARD_STYLES, INPUT_EVENT_TYPE, MARKER_TYPE } from '../Chessboard/_constants';
import getBoardStyles from '../Chessboard/_utils';

class ChessboardExample extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      fen: 'start',
      history: [],
      pieceSquare: '',
      moveInputMode: 1,
      pieceStyle: 'set1',
      boardStyle: CHESSBOARD_STYLES.MASTER,
      markerStyle: 'purple',
      squareStyles: {},
    };
  }

  componentDidMount() {
    this.game = new Chess();
    const { history, boardStyle } = this.state;
    const lastMove = history.length && history[history.length - 1];
    this.setState({
      squareStyles: getSquareStyles(lastMove.from, history, boardStyles[boardStyle].moveSquareStyles),
    });
  }

  removeHighlightSquare = () => {
    const { boardStyle } = this.state;
    this.setState(({ history }) => ({
      squareStyles: getSquareStyles('', history, boardStyles[boardStyle].moveSquareStyles),
    }));
  };

  highlightSquare = (sourceSquare, squaresToHighlight) => {
    const { boardStyle } = this.state;
    const highlightStyle = getBoardStyles(boardStyle).highlightStyles;
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce((a, c) => {
      return {
        ...a,
        ...{
          [c]: highlightStyle,
        },
      };
    }, {});

    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles },
    }));
  };

  onMovePiece = event => {
    const { boardStyle } = this.state;
    this.removeHighlightSquare();
    this.onMouseOverSquare(event.square);
    if (event.type === INPUT_EVENT_TYPE.moveStart) this.onSquareClick(event.square);

    if (event.type === INPUT_EVENT_TYPE.moveDone) {
      const move = { from: event.squareFrom, to: event.squareTo, promotion: 'q' };
      const result = this.game.move(move);
      if (result) {
        this.setState(() => ({
          fen: this.game.fen(),
          history: this.game.history({ verbose: true }),
          squareStyles: getSquareStyles(
            event.squareTo,
            this.game.history({ verbose: true }),
            boardStyles[boardStyle].moveSquareStyles,
          ),
        }));
        setTimeout(this.makeRandomMove, 10);
      }
      return result;
    }
    return true;
  };

  onSquareClick = square => {
    const { pieceSquare, boardStyle } = this.state;

    if (square === pieceSquare) {
      this.setState({ pieceSquare: '' });
      return;
    }

    this.setState(() => ({
      pieceSquare: square,
    }));

    const move = this.game.move({
      from: pieceSquare,
      to: square,
      promotion: 'q',
    });

    if (move === null) return;

    this.setState({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      squareStyles: getSquareStyles(
        square,
        this.game.history({ verbose: true }),
        boardStyles[boardStyle].moveSquareStyles,
      ),
      pieceSquare: '',
    });
    // setTimeout(this.makeRandomMove, 10);
  };

  makeRandomMove = () => {
    const { boardStyle } = this.state;
    const moves = this.game.moves();
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    this.game.move(randomMove);
    this.setState({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      squareStyles: getSquareStyles('', this.game.history({ verbose: true }), boardStyles[boardStyle].moveSquareStyles),
    });
  };

  onMarkSquare = (event, board1) => {
    const { markerStyle } = this.state;

    const markersOnSquare = board1.getMarkers(event.square, MARKER_TYPE[markerStyle]);
    if (markersOnSquare.length > 0) {
      board1.removeMarkers(event.square, MARKER_TYPE[markerStyle]);
    } else {
      board1.addMarker(event.square, MARKER_TYPE[markerStyle]);
    }
  };

  onMouseOverSquare = square => {
    const { pieceSquare } = this.state;

    if (square === pieceSquare) {
      return;
    }

    const moves = this.game.moves({
      square,
      verbose: true,
    });

    if (moves.length === 0) return;

    const squaresToHighlight = [];
    for (let i = 0; i < moves.length; i += 1) {
      squaresToHighlight.push(moves[i].to);
    }

    this.highlightSquare(square, squaresToHighlight);
  };

  changePieceStyle = () => {
    this.setState({ pieceStyle: 'set2' });
  };

  changeBoardStyle = () => {
    this.setState({ boardStyle: CHESSBOARD_STYLES.PURPLE });
  };

  changeMarkerStyle = () => {
    this.setState({ markerStyle: 'red' });
  };

  changeMoveInputMode = num => {
    this.setState({ moveInputMode: num });
  };

  render() {
    const { fen, pieceStyle, boardStyle, markerStyle, squareStyles, moveInputMode } = this.state;

    return (
      <Grid size={8} justify="center">
        <Item size={12} tablet={5}>
          <Chessboard
            id="board"
            position={fen}
            pieceStyle={pieceStyle}
            boardStyle={boardStyle}
            markerStyle={markerStyle}
            squareStyles={squareStyles}
            moveInputMode={moveInputMode}
            animationDuration={300}
            pawnPromotion={{
              isOpenModal: false,
              color: 'w',
            }}
            onMovePiece={this.onMovePiece}
            onMarkSquare={this.onMarkSquare}
            showBorder={false}
            showCoordinates
            disabled={false}
          />
        </Item>
        <button type="button" onClick={this.changePieceStyle}>
          change piece style
        </button>
        <button type="button" onClick={this.changeBoardStyle}>
          change board style
        </button>
        <button type="button" onClick={this.changeMarkerStyle}>
          change marker style
        </button>
        <button type="button" onClick={() => this.changeMoveInputMode(0)}>
          moveInputMode - 0
        </button>
        <button type="button" onClick={() => this.changeMoveInputMode(1)}>
          moveInputMode - 1
        </button>
      </Grid>
    );
  }
}

export default ChessboardExample;
