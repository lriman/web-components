/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

import { Svg } from './Svg';
import { ChessboardMoveInput } from './ChessboardMoveInput';
import { ChessboardPiecesAnimation } from './ChessboardPiecesAnimation';

import { COLOR, INPUT_EVENT_TYPE, SQUARE_COORDINATES } from '../_constants';
import {
  getArrowPoints,
  getFileCoordinatesColor,
  getGradientArrow,
  getMoveStyles,
  getRankCoordinatesColor,
  removeSpriteSvg,
} from './_utils';

export const SPRITE_LOADING_STATUS = {
  notLoaded: 1,
  loading: 2,
  loaded: 3,
};

export class ChessboardView {
  constructor(chessboard, callbackAfterCreation) {
    this.animationRunning = false;
    this.currentAnimation = null;
    this.callbackAfterCreation = callbackAfterCreation;
    this.chessboard = chessboard;
    this.spriteLoadWaitingTries = 0;
    this.prepareLoadSprite();
  }

  prepareLoadSprite(func = () => {}) {
    this.loadSprite(this.chessboard.state, () => {
      this.spriteLoadWaitDelay = 100;
      this.moveInput = new ChessboardMoveInput(
        this,
        this.chessboard.state,
        this.chessboard.props,
        this.moveStartCallback.bind(this),
        this.moveDoneCallback.bind(this),
        this.moveCanceledCallback.bind(this),
      );
      this.animationQueue = [];
      if (this.chessboard.props.responsive) {
        this.resizeListener = this.handleResize.bind(this);
        window.addEventListener('resize', this.resizeListener);
      }

      this.pointerDownListener = this.pointerDownHandler.bind(this);
      this.chessboard.element.addEventListener('mousedown', this.pointerDownListener);
      this.chessboard.element.addEventListener('touchstart', this.pointerDownListener);

      this.createSvgAndGroups();
      this.updateMetrics();
      this.callbackAfterCreation();
      func();
    });
  }

  pointerDownHandler(e) {
    this.moveInput.onPointerDown(e);
  }

  destroy() {
    this.moveInput.destroy();
    window.removeEventListener('resize', this.resizeListener);
    this.chessboard.element.removeEventListener('mousedown', this.pointerDownListener);
    this.chessboard.element.removeEventListener('touchstart', this.pointerDownListener);
    window.clearTimeout(this.resizeDebounce);
    window.clearTimeout(this.redrawDebounce);
    window.clearTimeout(this.drawPiecesDebounce);
    window.clearTimeout(this.drawMarkersDebounce);
    Svg.removeElement(this.svg);
    this.animationQueue = [];
    if (this.currentAnimation) {
      window.cancelAnimationFrame(this.currentAnimation.frameHandle);
    }
    if (!document.querySelector('.cm-chessboard')) removeSpriteSvg(Svg);
    ChessboardView.spriteLoadingStatus = SPRITE_LOADING_STATUS.notLoaded;
  }

  // Sprite //

  loadSprite(props, callback) {
    const spriteSvg = document.getElementById('board-spriteSvg');
    if (spriteSvg && this.chessboard.state) {
      ChessboardView.spriteLoadingStatus = SPRITE_LOADING_STATUS.loaded;
      callback();
      return;
    }
    if (ChessboardView.spriteLoadingStatus === SPRITE_LOADING_STATUS.notLoaded) {
      ChessboardView.spriteLoadingStatus = SPRITE_LOADING_STATUS.loading;
      Svg.loadSprite(
        props.sprite,
        [
          'wk',
          'wq',
          'wr',
          'wb',
          'wn',
          'wp',
          'bk',
          'bq',
          'br',
          'bb',
          'bn',
          'bp',
          'marker1',
          'marker2',
          'pointer',
          'trash',
        ],
        () => {
          ChessboardView.spriteLoadingStatus = SPRITE_LOADING_STATUS.loaded;
          callback();
        },
        this.chessboard.state.grid,
        this.chessboard.state.id,
      );
    } else if (ChessboardView.spriteLoadingStatus === SPRITE_LOADING_STATUS.loading) {
      setTimeout(() => {
        this.spriteLoadWaitingTries += 1;
        if (this.spriteLoadWaitingTries < 100) {
          this.loadSprite(props, callback);
        }
      }, this.spriteLoadWaitDelay);
    } else if (ChessboardView.spriteLoadingStatus === SPRITE_LOADING_STATUS.loaded) {
      callback();
    }
  }

  // Draw //

  createSvgAndGroups() {
    if (this.svg) {
      Svg.removeElement(this.svg);
    }
    this.svg = Svg.createSvg(this.chessboard.element);
    this.svg.setAttribute('class', `cm-chessboard`);

    this.svg.setAttribute('data-index', this.chessboard.state.id);
    this.updateMetrics();
    this.boardGroup = Svg.addElement(this.svg, 'g', { class: 'board' });
    this.coordinatesGroup = Svg.addElement(this.svg, 'g', { 'pointer-events': 'none' });
    this.piecesGroup = Svg.addElement(this.svg, 'g', { 'pointer-events': 'none', cursor: 'pointer' });
    this.markersGroup = Svg.addElement(this.svg, 'g', { 'pointer-events': 'none' });
    this.arrowsGroup = Svg.addElement(this.svg, 'g', { 'pointer-events': 'none' });
  }

  updateMetrics() {
    this.width = this.chessboard.element.offsetWidth;
    this.height = this.chessboard.element.offsetHeight;
    if (this.chessboard.props.showBorder) {
      this.borderSize = this.width / 18;
    } else {
      this.borderSize = 0;
    }
    this.innerWidth = this.width - 2 * this.borderSize;
    this.innerHeight = this.height - 2 * this.borderSize;
    this.squareWidth = this.innerWidth / 8;
    this.squareHeight = this.innerHeight / 8;
    this.scalingX = this.squareWidth / this.chessboard.state.grid;
    this.scalingY = this.squareHeight / this.chessboard.state.grid;
    this.pieceXTranslate = this.squareWidth / 2 - (this.chessboard.state.grid * this.scalingY) / 2;
  }

  handleResize() {
    window.clearTimeout(this.resizeDebounce);
    this.resizeDebounce = setTimeout(() => {
      if (this.chessboard.element.offsetWidth !== this.width || this.chessboard.element.offsetHeight !== this.height) {
        this.updateMetrics();
        this.redraw();
      }
      this.svg.setAttribute('width', '100%'); // safari bugfix
      this.svg.setAttribute('height', '100%');
    });
  }

  redraw() {
    return new Promise(resolve => {
      window.clearTimeout(this.redrawDebounce);
      this.redrawDebounce = setTimeout(() => {
        this.createSvgAndGroups();
        this.drawBoard();
        this.drawCoordinates();
        this.drawMarkers();
        this.setCursor();
        this.setHighLight(getMoveStyles(this.chessboard.state.highLight, this.chessboard.state.boardStyles));
        setTimeout(() => this.chessboard.mountCallback(), 15);
      });
      this.drawPiecesDebounced(this.chessboard.state.squares, () => {
        resolve();
      });
      this.drawMarkersDebounced();
    });
  }

  // Board //

  drawBoard() {
    while (this.boardGroup.firstChild) {
      this.boardGroup.removeChild(this.boardGroup.lastChild);
    }
    const boardBorder = Svg.addElement(this.boardGroup, 'rect', { width: this.width, height: this.height });
    boardBorder.style.strokeWidth = this.width - this.squareWidth * 8;
    boardBorder.style.stroke = this.chessboard.state.boardStyles.borderStyles.background;
    boardBorder.style.fill = 'none';

    if (this.chessboard.props.showBorder) {
      const innerPos = this.borderSize - this.borderSize / 9;
      const borderInner = Svg.addElement(this.boardGroup, 'rect', {
        x: innerPos,
        y: innerPos,
      });
      borderInner.setAttribute('class', 'border-inner');
    }
    for (let i = 0; i < 64; i += 1) {
      const index = this.chessboard?.state?.orientation === COLOR.white ? i : 63 - i;
      const squareColor = ((9 * index) & 8) === 0 ? 'darkSquareStyle' : 'lightSquareStyle'; // eslint-disable-line

      const point = this.squareIndexToPoint(index);
      const squareRect = Svg.addElement(this.boardGroup, 'rect', {
        x: point.x,
        y: point.y,
        width: this.squareWidth,
        height: this.squareHeight,
      });
      const outRect = Svg.addElement(this.boardGroup, 'rect', {
        x: point.x,
        y: point.y,
        width: this.squareWidth,
        height: this.squareHeight,
        fill: 'transparent',
      });

      outRect.setAttribute('data-index', `${index}`);
      outRect.setAttribute('id', `${index}-${this.chessboard.state.id}`);

      squareRect.style.fill = this.chessboard.state.boardStyles[squareColor].background;
    }
  }

  getSquare(index) {
    return this.boardGroup.querySelector(`rect[data-index='${index}']`);
  }

  setHighLight(data) {
    if (!data) return;
    data.forEach(item => {
      if (!item) return;
      const rect = this.getSquare(item[0]);
      if (rect) rect.style.fill = item[1].background;
    });
  }

  removeHighLight(data) {
    if (!data) return;
    data.forEach(item => {
      if (!item) return;
      const rect = this.getSquare(item[0]);
      if (rect) rect.style.fill = 'transparent';
    });
  }

  drawCoordinates() {
    if (!this.chessboard.props.showCoordinates) {
      return;
    }

    const { boardStyles } = this.chessboard.state;

    while (this.coordinatesGroup.firstChild) {
      this.coordinatesGroup.removeChild(this.coordinatesGroup.lastChild);
    }
    const inline = !this.chessboard.props.showBorder;

    for (let file = 0; file < 8; file += 1) {
      let x = this.borderSize + (18 + this.chessboard.state.grid * file) * this.scalingX;
      let y = this.height - this.scalingY * 8.5;

      if (inline) {
        x += this.scalingX * 21.2;
        y = this.height - this.scalingY * 1.5;
      }
      const textElement = Svg.addElement(this.coordinatesGroup, 'text', {
        x,
        y,
        style: `font-size: ${inline ? this.scalingY * 7 : this.scalingY * 9}px; fill: ${getFileCoordinatesColor(
          file,
          boardStyles,
          inline,
        )}; user-select: none;`,
      });
      if (this.chessboard?.state?.orientation === COLOR.white) {
        textElement.textContent = inline
          ? String.fromCharCode(97 + file).toUpperCase()
          : String.fromCharCode(97 + file).toUpperCase();
      } else {
        textElement.textContent = inline
          ? String.fromCharCode(104 - file).toUpperCase()
          : String.fromCharCode(104 - file).toUpperCase();
      }
    }
    for (let rank = 0; rank < 8; rank += 1) {
      let x = this.borderSize / 2.4;
      let y = this.borderSize + 24 * this.scalingY + rank * this.squareHeight;
      if (inline) {
        if (this.chessboard.props.showBorder) {
          x += this.scalingX * 10;
          y -= this.scalingY * 15;
        } else {
          x += this.scalingX * 1.5;
          y -= this.scalingY * 17;
        }
      }
      const textElement = Svg.addElement(this.coordinatesGroup, 'text', {
        x,
        y,
        style: `font-size: ${inline ? this.scalingY * 7.3 : this.scalingY * 9}px; fill: ${getRankCoordinatesColor(
          rank,
          boardStyles,
          inline,
        )}; user-select: none;`,
      });
      if (this.chessboard?.state?.orientation === COLOR.white) {
        textElement.textContent = 8 - rank;
      } else {
        textElement.textContent = 1 + rank;
      }
    }
  }

  // Pieces //

  drawPiecesDebounced(squares = this.chessboard.state.squares, callback = null) {
    window.clearTimeout(this.drawPiecesDebounce);
    this.drawPiecesDebounce = setTimeout(() => {
      this.drawPieces(squares);
      if (callback) {
        callback();
      }
    });
  }

  drawPieces(squares = this.chessboard.state.squares) {
    while (this.piecesGroup.firstChild) {
      this.piecesGroup.removeChild(this.piecesGroup.lastChild);
    }
    for (let i = 0; i < 64; i += 1) {
      const pieceName = squares[i];
      if (pieceName) {
        this.drawPiece(i, pieceName);
      }
    }
  }

  drawPiece(index, pieceName) {
    const pieceGroup = Svg.addElement(this.piecesGroup, 'g');
    pieceGroup.setAttribute('data-piece', pieceName);
    pieceGroup.setAttribute('data-index', index);
    const point = this.squareIndexToPoint(index);
    const transform = this.svg.createSVGTransform();
    transform.setTranslate(point.x, point.y);
    pieceGroup.transform.baseVal.appendItem(transform);
    const pieceUse = Svg.addElement(pieceGroup, 'use', { href: `#${pieceName}`, class: 'piece' });
    // center on square
    const transformTranslate = this.svg.createSVGTransform();
    transformTranslate.setTranslate(this.pieceXTranslate, 0);
    pieceUse.transform.baseVal.appendItem(transformTranslate);
    // scale
    const transformScale = this.svg.createSVGTransform();
    transformScale.setScale(this.scalingY, this.scalingY);
    pieceUse.transform.baseVal.appendItem(transformScale);
    return pieceGroup;
  }

  setPieceVisibility(index, visible = true) {
    const piece = this.getPiece(index);
    if (visible) {
      piece.setAttribute('visibility', 'visible');
    } else {
      piece.setAttribute('visibility', 'hidden');
    }
  }

  getPiece(index) {
    return this.piecesGroup.querySelector(`g[data-index='${index}']`);
  }

  // Markers //

  drawMarkersDebounced() {
    window.clearTimeout(this.drawMarkersDebounce);
    this.drawMarkersDebounce = setTimeout(() => {
      this.drawMarkers();
      this.drawArrows();
    }, 10);
  }

  drawMarkers() {
    while (this.markersGroup?.firstChild) {
      this.markersGroup.removeChild(this.markersGroup?.firstChild);
    }
    this.chessboard.state.markers.forEach(marker => {
      this.drawMarker(marker);
    });
  }

  drawMarker(marker) {
    const markerGroup = Svg.addElement(this.markersGroup, 'g');
    markerGroup.setAttribute('data-index', marker.index);
    const point = this.squareIndexToPoint(marker.index);
    const transform = this.svg.createSVGTransform();
    transform.setTranslate(point.x, point.y);
    markerGroup.transform.baseVal.appendItem(transform);
    const markerUse = Svg.addElement(markerGroup, 'use', {
      href: `#${marker.type.slice}`,
      stroke: marker.type.color,
      'pointer-events': 'none',
    });
    const transformScale = this.svg.createSVGTransform();
    transformScale.setScale(this.scalingX, this.scalingY);
    markerUse.transform.baseVal.appendItem(transformScale);
    return markerGroup;
  }

  drawArrows() {
    while (this.arrowsGroup?.firstChild) {
      this.arrowsGroup.removeChild(this.arrowsGroup.firstChild);
    }
    this.chessboard.state.arrows.forEach(arrow => {
      this.drawArrow(arrow);
    });
  }

  drawArrow(arrow, remove) {
    if (remove) {
      const lastIndex = this.arrowsGroup.lastChild && this.arrowsGroup.lastChild.getAttribute('data-index');
      const arrows = this.chessboard.state.arrows[this.chessboard.state.arrows.length - 1] || {};
      if (lastIndex !== `${arrows.from}-${arrows.to}`) Svg.removeElement(this.arrowsGroup.lastChild);
    }

    if (arrow.from === arrow.to) return null;

    const arrowGroup = Svg.addElement(this.arrowsGroup, 'g');
    arrowGroup.setAttribute('data-index', `${arrow.from}-${arrow.to}`);
    const strokeWidth = 0.15 * this.squareWidth;
    const { a, b } = getArrowPoints(arrow, this.squareWidth, this.squareHeight, this.chessboard, this.borderSize);

    const dx = b.x - a.x;
    const dy = b.y - a.y;

    const rad = Math.atan2(dy, dx);
    const r = 3 * strokeWidth;

    const xo = Math.cos(rad) * r;
    const yo = Math.sin(rad) * r;

    return getGradientArrow(Svg, arrow, arrowGroup, a, b, xo, yo, strokeWidth, rad);
  }

  // animation queue //

  animatePieces(fromSquares, toSquares, callback) {
    this.animationQueue.push({ fromSquares, toSquares, callback });
    if (!this.animationRunning) {
      this.nextPieceAnimationInQueue();
    }
  }

  nextPieceAnimationInQueue() {
    const nextAnimation = this.animationQueue.shift();
    if (nextAnimation !== undefined) {
      this.currentAnimation = new ChessboardPiecesAnimation( // eslint-disable-line
        this,
        nextAnimation.fromSquares,
        nextAnimation.toSquares,
        this.chessboard.props.animationDuration / (this.animationQueue.length + 1),
        () => {
          if (!this.moveInput.dragablePiece) {
            this.drawPieces(nextAnimation.toSquares);
          }
          this.nextPieceAnimationInQueue();
          if (nextAnimation.callback) {
            nextAnimation.callback();
          }
        },
      );
    }
  }

  // Callbacks //

  moveStartCallback(index, piece, button) {
    if (this.chessboard.moveInputCallback) {
      return this.chessboard.moveInputCallback({
        chessboard: this.chessboard,
        type: INPUT_EVENT_TYPE.moveStart,
        square: SQUARE_COORDINATES[index],
        id: this.chessboard.state.id,
        piece,
        button,
      });
    }
    return true;
  }

  moveDoneCallback(fromIndex, toIndex, piece) {
    if (this.chessboard.moveInputCallback) {
      return this.chessboard.moveInputCallback({
        chessboard: this.chessboard,
        type: INPUT_EVENT_TYPE.moveDone,
        squareFrom: SQUARE_COORDINATES[fromIndex],
        squareTo: SQUARE_COORDINATES[toIndex],
        id: this.chessboard.state.id,
        piece,
      });
    }
    return true;
  }

  moveCanceledCallback() {
    if (this.chessboard.moveInputCallback) {
      this.chessboard.moveInputCallback({
        chessboard: this.chessboard,
        type: INPUT_EVENT_TYPE.moveCanceled,
        id: this.chessboard.state.id,
      });
    }
  }

  // Helpers //

  setCursor() {
    this.chessboard.initialization.then(() => {
      if (this.chessboard?.state?.inputWhiteEnabled || this.chessboard?.state?.inputBlackEnabled) {
        this.boardGroup.setAttribute('class', 'board input-enabled');
      } else {
        this.boardGroup.setAttribute('class', 'board');
      }
    });
  }

  squareIndexToPoint(index) {
    let x;
    let y;
    if (this.chessboard?.state?.orientation === COLOR.white) {
      x = this.borderSize + (index % 8) * this.squareWidth;
      y = this.borderSize + (7 - Math.floor(index / 8)) * this.squareHeight;
    } else {
      x = this.borderSize + (7 - (index % 8)) * this.squareWidth;
      y = this.borderSize + Math.floor(index / 8) * this.squareHeight;
    }
    return { x, y };
  }
}

ChessboardView.spriteLoadingStatus = SPRITE_LOADING_STATUS.notLoaded;
