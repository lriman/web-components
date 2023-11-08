import React from 'react';
import PropTypes from 'prop-types';

import { ChessGameBoard } from './_board/ChessGameBoard';
import PawnPromotion from './_pawnPromotion';
import Editor from './_editor';

import sprites from './_sprites';
import boardStyles from './_boardStyles';
import { StyledChessBoard } from './_style';
import { CHESSBOARD_SETTINGS, CHESSBOARD_STYLES, PIECE_STYLES } from './_constants';

export default class Chessboard extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    position: PropTypes.string,
    orientation: PropTypes.string,
    moveInputMode: PropTypes.number,
    pieceStyle: PropTypes.string,
    boardStyle: PropTypes.string,
    markerStyle: PropTypes.string,
    squareStyles: PropTypes.shape({}),
    clearMarkers: PropTypes.bool,
    showCoordinates: PropTypes.bool, /* eslint-disable-line */
    showBorder: PropTypes.bool, /* eslint-disable-line */
    isEnabledRmbMove: PropTypes.bool, /* eslint-disable-line */
    disabled: PropTypes.bool,
    pawnPromotion: PropTypes.shape({
      isOpenModal: PropTypes.bool,
      color: PropTypes.string,
    }),
    init: PropTypes.func,
    onMovePiece: PropTypes.func,
    onMarkSquare: PropTypes.func,
    onChangePawn: PropTypes.func,
  };

  static defaultProps = {
    color: undefined,
    position: CHESSBOARD_SETTINGS.POSITION,
    orientation: CHESSBOARD_SETTINGS.ORIENTATION,
    moveInputMode: 1,
    squareStyles: {},
    pieceStyle: CHESSBOARD_SETTINGS.PIECE_STYLE,
    boardStyle: CHESSBOARD_SETTINGS.BOARD_STYLE,
    markerStyle: CHESSBOARD_SETTINGS.MARKER_STYLE,
    clearMarkers: false,
    showCoordinates: true, /* eslint-disable-line */
    showBorder: false, /* eslint-disable-line */
    isEnabledRmbMove: false, /* eslint-disable-line */
    disabled: false,
    pawnPromotion: undefined,
    init: () => {},
    onMovePiece: () => {},
    onMarkSquare: () => {},
    onChangePawn: () => {},
  };

  constructor() {
    super();
    this.state = {
      width: 0,
      mounted: false,
      keysPressed: [],
    };

    this.board = React.createRef();
    this.el = React.createRef();
  }

  mount() {
    this.setState({ mounted: true });
  }

  componentDidMount() {
    const { keysPressed } = this.state;
    const { pieceStyle, boardStyle, squareStyles, color, moveInputMode, onMovePiece, onMarkSquare, init } = this.props;
    let pureBoardStyle = boardStyle;
    if (!Object.values(CHESSBOARD_STYLES).includes(boardStyle)) pureBoardStyle = CHESSBOARD_SETTINGS.BOARD_STYLE;
    const config = { ...this.props, sprite: sprites[pieceStyle] };
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    this.handleResize();

    this.cg = new ChessGameBoard(this.el, config);
    init(this.cg);

    this.cg.mount(() => this.mount());
    this.cg.setMoveInputMode(event => onMovePiece(event, this.cg, keysPressed), moveInputMode, color);
    this.cg.enableContextInput(event => onMarkSquare(event, this.cg));
    this.cg.setBoardStyles(boardStyles[pureBoardStyle]);
    this.cg.setHighLight(squareStyles);
  }

  componentDidUpdate(prevProps, prevState) {
    const { keysPressed } = this.state;
    const {
      id,
      color,
      position,
      orientation,
      pieceStyle,
      boardStyle,
      markerStyle,
      squareStyles,
      moveInputMode,
      clearMarkers,
      onMovePiece,
    } = this.props;

    if (prevProps.id !== id) this.cg.setId(id);
    if (prevProps.position !== position) this.cg.setPosition(position);
    if (prevProps.orientation !== orientation) this.cg.setOrientation(orientation);
    if (prevProps.pieceStyle !== pieceStyle) this.cg.setSprite(sprites[pieceStyle], position);
    if (prevProps.boardStyle !== boardStyle) this.cg.setBoardStyles(boardStyles[boardStyle]);
    if (prevProps.squareStyles !== squareStyles) this.cg.setHighLight(squareStyles);
    if (prevProps.moveInputMode !== moveInputMode || prevState.keysPressed.toString() !== keysPressed.toString())
      this.cg.setMoveInputMode(event => onMovePiece(event, this.cg, keysPressed), moveInputMode, color);
    if (prevProps.markerStyle !== markerStyle) this.cg.setMarkerColor(markerStyle);
    if (prevProps.clearMarkers !== clearMarkers && clearMarkers) this.cg.clearMarkers();
  }

  componentWillUnmount() {
    this.cg.destroy();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleResize = () => {
    if (this.board?.current)
      this.setState(state => ({ ...state, width: this.board.current.getBoundingClientRect().width }));
  };

  handleKeyDown = ({ key }) => {
    const { keysPressed } = this.state;
    if (keysPressed.includes(key)) return;
    this.setState(state => ({
      ...state,
      keysPressed: [...state.keysPressed, key],
    }));
  };

  handleKeyUp = ({ key }) => {
    this.setState(state => {
      return {
        ...state,
        keysPressed: state.keysPressed.filter(item => item !== key),
      };
    });
  };

  render() {
    const { width, mounted, keysPressed } = this.state;
    const { boardStyle, orientation, pawnPromotion, onChangePawn, disabled } = this.props;

    let pureBoardStyle = boardStyle;
    if (!Object.values(CHESSBOARD_STYLES).includes(boardStyle)) pureBoardStyle = CHESSBOARD_SETTINGS.BOARD_STYLE;

    return (
      <StyledChessBoard ref={this.board} mounted={mounted} boardStyle={pureBoardStyle} disabled={disabled}>
        <div
          ref={el => (this.el = el)} // eslint-disable-line
          style={{ height: width }}
        />
        <PawnPromotion
          pawnPromotion={pawnPromotion}
          orientation={orientation}
          onChangePawn={key => onChangePawn(key, keysPressed)}
        />
      </StyledChessBoard>
    );
  }
}

Chessboard.Editor = Editor;
Chessboard.REFS = { PIECE_STYLES, CHESSBOARD_STYLES };
