import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CHESS_PIECES } from '../../GetIcon/Pieces/map';
import { addDataAttributes } from '../../_utils';

import { Svg } from '../_board/Svg';
import { COLOR, EDITOR_PIECES, PIECE, PIECE_STYLES, SQUARE_COORDINATES, COMPONENTS } from '../_constants';
import { StyledEditor, StyledEditorItem } from './_style';

class Editor extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    selectedPiece: PropTypes.string,
    pieceStyle: PropTypes.string,
    ratio: PropTypes.number,
    isTop: PropTypes.bool,
    onSetPiece: PropTypes.func,
    onSetSelectedPiece: PropTypes.func,
  };

  static defaultProps = {
    color: COLOR.white,
    selectedPiece: undefined,
    pieceStyle: PIECE_STYLES.SET_1,
    ratio: 3,
    isTop: false,
    onSetPiece: () => {},
    onSetSelectedPiece: () => {},
  };

  constructor() {
    super();
    this.state = {
      mouseMove: true,
      squareWidth: null,
    };

    this.editor = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove, { passive: false });
    window.addEventListener('mouseup', this.handleMouseUp, { passive: false });

    window.addEventListener('touchmove', this.handleMouseMove, { passive: false });
    window.addEventListener('touchend', this.handleMouseUp, { passive: false });

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    window.removeEventListener('touchmove', this.handleMouseMove);
    window.removeEventListener('touchend', this.handleMouseUp);

    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { color, ratio } = this.props;
    if (this.editor?.current) {
      const { width } = this.editor.current.getBoundingClientRect();
      const squareWidth = width / (EDITOR_PIECES[color].length + ratio);
      this.setState({ squareWidth });
    }
  };

  createDraggablePiece(pieceName) {
    if (this.dragablePiece) return;
    const { squareWidth } = this.state;
    this.dragablePiece = Svg.createSvg(document.body);
    this.dragablePiece.setAttribute('width', squareWidth);
    this.dragablePiece.setAttribute('height', squareWidth);
    this.dragablePiece.setAttribute('style', 'display: none; pointer-events: none');
    this.dragablePiece.name = pieceName;
    const piece = Svg.addElement(this.dragablePiece, 'use', {
      href: `#${pieceName}`,
    });
    const scaling = squareWidth / 45;
    const transformScale = this.dragablePiece.createSVGTransform();
    transformScale.setScale(scaling, scaling);
    piece.transform.baseVal.appendItem(transformScale);
  }

  moveDraggablePiece(x, y) {
    const { squareWidth } = this.state;
    this.dragablePiece.setAttribute(
      'style',
      `display: block; pointer-events: none; position: absolute; left: ${x - squareWidth / 2}px; top: ${
        y - squareWidth / 2
      }px; z-index: 1000;`,
    );
  }

  handleMouseDown = (e, spare) => {
    const { onSetSelectedPiece } = this.props;
    if (spare !== 'pointer') this.createDraggablePiece(spare);
    onSetSelectedPiece(spare);
  };

  handleMouseMove = e => {
    const { onSetPiece, selectedPiece } = this.props;

    if (!this.dragablePiece) return;
    e.preventDefault(); // block page scroll

    let x;
    let y;
    let target;
    if (e.type === 'mousemove') {
      x = e.pageX;
      y = e.pageY;
      target = e.target;
    } else if (e.type === 'touchmove') {
      x = e.touches[0].pageX;
      y = e.touches[0].pageY;
      target = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }

    const index = target?.getAttribute('data-index');

    this.moveDraggablePiece(x, y);
    this.setState({ mouseMove: true });
    if (selectedPiece === 'trash' && index) onSetPiece(SQUARE_COORDINATES[index], null);
  };

  handleMouseUp = e => {
    e.preventDefault();
    const { mouseMove } = this.state;
    const { color, selectedPiece, onSetPiece, onSetSelectedPiece } = this.props;

    if (this.dragablePiece) {
      Svg.removeElement(this.dragablePiece);
      this.dragablePiece = null;
    }

    if (!selectedPiece || selectedPiece === 'pointer' || (selectedPiece !== 'trash' && color !== selectedPiece[0]))
      return;

    let target;
    if (e.type === 'mouseup') {
      target = e.target;
    } else if (e.type === 'touchend') {
      target = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }

    const index = target?.getAttribute('data-index');
    const spare = target?.closest('div[data-spare]')?.getAttribute('data-spare');

    if (index && selectedPiece && Object.values(PIECE).includes(selectedPiece))
      onSetPiece(SQUARE_COORDINATES[index], selectedPiece);
    if (index && selectedPiece && selectedPiece === 'trash') onSetPiece(SQUARE_COORDINATES[index], null);

    if (selectedPiece === 'trash' || selectedPiece === spare) {
      this.setState({ mouseMove: false });
      return;
    }

    if (mouseMove) onSetSelectedPiece(null);
  };

  render() {
    const { color, isTop, pieceStyle, selectedPiece } = this.props;
    const { squareWidth } = this.state;

    return (
      <StyledEditor isTop={isTop} ref={this.editor} {...addDataAttributes({ component: COMPONENTS.CHESSBOARD_EDITOR })}>
        {EDITOR_PIECES[color].map(item => (
          <StyledEditorItem
            key={item}
            data-spare={item}
            sSpare={item}
            isSelected={item === selectedPiece}
            onMouseDown={e => this.handleMouseDown(e, item)}
            onTouchStart={e => this.handleMouseDown(e, item)}
          >
            {CHESS_PIECES[pieceStyle][item]({ squareWidth: `${squareWidth}px` })}
          </StyledEditorItem>
        ))}
      </StyledEditor>
    );
  }
}

export default Editor;
