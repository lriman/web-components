import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Board from './Chessboard/Board';
import { ChessboardContext } from './Chessboard/context';
import { fenToObj, validFen, validPositionObject } from './Chessboard/helpers';
import { CHESSBOARD_STYLES } from '../Chessboard/_constants';
import { CHESS_PIECES } from '../GetIcon/Pieces/map';
import getBoardStyles from '../Chessboard/_utils';
import { getBoardWidth } from './_utils';

const getPositionObject = position => {
  if (position === 'start') return fenToObj('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  if (validFen(position)) return fenToObj(position);
  if (validPositionObject(position)) return position;

  return {};
};

class SimpleBoard extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    position: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    orientation: PropTypes.oneOf(['white', 'black']),
    pieceStyle: PropTypes.string,
    boardStyle: PropTypes.string,
    showNotation: PropTypes.bool,
    isBordered: PropTypes.bool,
  };

  static defaultProps = {
    id: '0',
    position: '',
    orientation: 'white',
    pieceStyle: 'set1',
    boardStyle: CHESSBOARD_STYLES.PURPLE,
    showNotation: true,
    isBordered: false,
  };

  constructor(props) {
    super(props);
    const { position, pieceStyle } = this.props;

    this.state = {
      currentPosition: getPositionObject(position),
      sourceSquare: '',
      targetSquare: '',
      sourcePiece: '',
      screenWidth: null,
      pieces: { ...CHESS_PIECES[pieceStyle] },
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
  };

  getWidth = size => {
    const { screenWidth } = this.state;
    const width = getBoardWidth(screenWidth);
    return width - 6 - width / 8 || size.width - 6 - size.width / 8;
  };

  static Consumer = ChessboardContext.Consumer;

  render() {
    const { id, orientation, showNotation, boardStyle, isBordered } = this.props;
    const { sourceSquare, targetSquare, sourcePiece, currentPosition, pieces } = this.state;

    return (
      <>
        <ChessboardContext.Provider
          value={{
            ...this.props,
            pieces,
            orientation: orientation.toLowerCase(),
            ...{
              width: this.getWidth(),
              screenWidth: this.getWidth(),
              screenHeight: this.getWidth(),
              squareStyles: {},
              lightSquareStyle: getBoardStyles(boardStyle).lightSquareStyle,
              darkSquareStyle: getBoardStyles(boardStyle).darkSquareStyle,
              notationStyle: { color: '#4C4D5C' },
              id,
              boardStyle,
              isBordered,
              showNotation,
              sourceSquare,
              targetSquare,
              sourcePiece,
              currentPosition,
            },
          }}
        >
          <div>
            <Board />
          </div>
        </ChessboardContext.Provider>
      </>
    );
  }
}

export default SimpleBoard;
