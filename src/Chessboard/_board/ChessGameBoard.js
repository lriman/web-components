/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

import { Svg } from './Svg';
import { ChessboardView } from './ChessboardView';
import { ChessboardState } from './ChessboardState';
import {
  COLOR,
  FEN_EMPTY_POSITION,
  FEN_START_POSITION,
  MARKER_TYPE,
  MOVE_INPUT_MODE,
  SQUARE_COORDINATES,
} from '../_constants';
import { removeSpriteSvg, squareToIndex } from './_utils';

export class ChessGameBoard {
  constructor(element, props = {}, callback = null) {
    this.element = element;
    this.props = {
      id: 'chessboard',
      position: 'empty',
      orientation: COLOR.white,
      showCoordinates: true,
      showBorder: false,
      responsive: true,
      animationDuration: 300,
      moveInputMode: MOVE_INPUT_MODE.viewOnly,
    };
    Object.assign(this.props, props);
    this.state = new ChessboardState(props.id);
    this.state.orientation = this.props.orientation;
    this.state.moveInputMode = this.props.moveInputMode;
    this.state.markerStyle = MARKER_TYPE[this.props.markerStyle].color;
    this.state.setSprite(this.props.sprite);
    this.initialization = new Promise(resolve => {
      this.view = new ChessboardView(this, () => {
        if (this.props.position === 'start') {
          this.state.setPosition(FEN_START_POSITION);
        } else if (this.props.position === 'empty' || this.props.position === null) {
          this.state.setPosition(FEN_EMPTY_POSITION);
        } else {
          this.state.setPosition(this.props.position);
        }
        setTimeout(() => {
          this.view.redraw().then(() => {
            resolve();
          });
        });
      });
    }).then(() => {
      if (callback) {
        callback(this);
      }
    });
  }

  // API //
  setPiece(square, piece) {
    return new Promise(resolve => {
      this.initialization.then(() => {
        this.state.setPiece(squareToIndex(square), piece);
        this.view.drawPiecesDebounced(this.state.squares, () => {
          resolve();
        });
      });
    });
  }

  getPiece(square) {
    return this.state.squares[squareToIndex(square)];
  }

  mount(eventHandler) {
    this.mountCallback = eventHandler;
  }

  setPosition(fen, animated = true) {
    return new Promise(resolve => {
      this.initialization.then(() => {
        const currentFen = this.state.getPosition();
        const fenParts = fen?.split(' ');
        const fenNormalized = fenParts[0];
        if (fenNormalized !== currentFen) {
          const prevSquares = this.state.squares.slice(0); // clone
          if (fen === 'start') {
            this.state.setPosition(FEN_START_POSITION);
          } else if (fen === 'empty' || fen === null) {
            this.state.setPosition(FEN_EMPTY_POSITION);
          } else {
            this.state.setPosition(fen);
          }
          if (animated) {
            this.view.animatePieces(prevSquares, this.state.squares.slice(0), () => {
              resolve();
            });
          } else {
            this.view.drawPiecesDebounced();
            resolve();
          }
        } else {
          resolve();
        }
      });
    });
  }

  setId(id) {
    this.state.setId(id);
    this.clearMarkers();
    this.view.redraw();
  }

  setMoveInputMode(eventHandler, value, color) {
    this.state.setMoveInputMode(value);
    if (value === 0) this.disableMoveInput();
    if (value === 1) this.enableMoveInput(eventHandler, color);
  }

  getPosition() {
    return this.state.getPosition();
  }

  addMarker(square, type = MARKER_TYPE.purple) {
    this.state.addMarker(squareToIndex(square), type);
    this.view.drawMarkersDebounced();
  }

  getMarkers(square = null, type = null) {
    const markersFound = [];
    this.state.markers.forEach(marker => {
      const markerSquare = SQUARE_COORDINATES[marker.index];
      if (
        (square === null && (type === null || type === marker.type)) ||
        (type === null && square === markerSquare) ||
        (type === marker.type && square === markerSquare)
      ) {
        markersFound.push({ square: SQUARE_COORDINATES[marker.index], type: marker.type });
      }
    });
    return markersFound;
  }

  removeMarkers(square = null, type = null) {
    const index = square !== null ? squareToIndex(square) : null;
    this.state.removeMarkers(index, type);
    this.view.drawMarkersDebounced();
  }

  clearMarkers() {
    this.state.clearMarkers();
    this.view.drawMarkersDebounced();
  }

  setMarkerColor(type = 'purple') {
    this.state.seMarkerColor(MARKER_TYPE[type].color);
  }

  setBoardStyles(theme) {
    this.state.setBoardStyles(theme);
    this.view.redraw();
  }

  setHighLight(data) {
    return new Promise(resolve => {
      this.initialization.then(() => {
        this.view.removeHighLight(this.state.highLight);
        this.state.setHighLight(data);
        this.view.setHighLight(this.state.highLight);
        resolve();
      });
    });
  }

  setSprite(sprite, position) {
    let pos = position;
    if (!position || position === 'start') pos = FEN_START_POSITION;
    this.state.setSprite(sprite);
    this.view.destroy();
    removeSpriteSvg(Svg);
    this.view.prepareLoadSprite(() => this.state.setPosition(pos));
    this.view.drawPiecesDebounced(this.state.squares);
  }

  setOrientation(color) {
    this.state.orientation = color;
    this.view.redraw();
  }

  getOrientation() {
    return this.state.orientation;
  }

  destroy() {
    return new Promise(resolve => {
      this.initialization.then(() => {
        this.view.destroy();
        this.view = null;
        this.state = null;
        this.element.removeEventListener('contextmenu', this.contextMenuListener);
        resolve();
      });
    });
  }

  enableMoveInput(eventHandler, color = null) {
    if (color === COLOR.white) {
      this.state.inputWhiteEnabled = true;
    } else if (color === COLOR.black) {
      this.state.inputBlackEnabled = true;
    } else {
      this.state.inputWhiteEnabled = true;
      this.state.inputBlackEnabled = true;
    }
    this.moveInputCallback = eventHandler;
    this.view.setCursor();
  }

  disableMoveInput() {
    this.state.inputWhiteEnabled = false;
    this.state.inputBlackEnabled = false;
    this.moveInputCallback = null;
    this.view.setCursor();
  }

  enableContextInput(eventHandler) {
    this.contextInputCallback = eventHandler;
    if (this.contextMenuListener) {
      return;
    }
    this.contextMenuListener = e => {
      e.preventDefault();
    };
    this.element.addEventListener('contextmenu', this.contextMenuListener);
  }

  disableContextInput() {
    this.element.removeEventListener('contextmenu', this.contextMenuListener);
  }
}
