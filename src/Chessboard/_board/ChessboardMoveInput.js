/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

import { Svg } from './Svg';
import { INPUT_EVENT_TYPE, MARKER_TYPE, MOVE_INPUT_MODE, SQUARE_COORDINATES } from '../_constants';

const STATE = {
  waitForInputStart: 0,
  pieceClickedThreshold: 1,
  clickTo: 2,
  secondClickThreshold: 3,
  dragTo: 4,
  moveDone: 6,
  reset: 7,
};

const ARROW_STATE = {
  from: null,
  to: null,
  color: null,
  moveStart: null,
};

const DRAG_THRESHOLD = 2;

export class ChessboardMoveInput {
  constructor(view, state, props, moveStartCallback, moveDoneCallback, moveCanceledCallback) {
    this.view = view;
    this.state = state;
    this.props = props;
    this.moveStartCallback = moveStartCallback;
    this.moveDoneCallback = moveDoneCallback;
    this.moveCanceledCallback = moveCanceledCallback;
    this.setMoveInputState(STATE.waitForInputStart);
    this.setArrowState(ARROW_STATE);
  }

  setArrowState(newSate, remove) {
    this.arrowSate = newSate;
    if (!this.moveArrowListener && !this.arrowUpListener && this.state.moveInputMode === 1) {
      this.moveArrowListener = this.moveArrow.bind(this);
      this.moveArrowListener.type = 'mousemove';
      window.addEventListener('mousemove', this.moveArrowListener);

      this.arrowUpListener = this.endDrawArrow.bind(this);
      this.arrowUpListener.type = 'mouseup';
      window.addEventListener('mouseup', this.arrowUpListener);
    }
    if (remove) {
      this.moveArrowListener = null;
      this.arrowUpListener = null;
      window.removeEventListener('mousemove', this.moveArrowListener);
      window.removeEventListener('mouseup', this.arrowUpListener);
    }
  }

  setMoveInputState(newState, params = null) {
    const prevState = this.moveInputState;
    this.moveInputState = newState;

    switch (newState) {
      case STATE.pieceClickedThreshold:
        this.startIndex = params.index;
        this.endIndex = null;
        this.movedPiece = params.piece;
        this.updateStartEndMarkers();
        this.startPoint = params.point;
        if (!this.pointerMoveListener && !this.pointerUpListener) {
          if (params.type === 'mousedown') {
            this.pointerMoveListener = this.onPointerMove.bind(this);
            this.pointerMoveListener.type = 'mousemove';
            window.addEventListener('mousemove', this.pointerMoveListener);

            this.pointerUpListener = this.onPointerUp.bind(this);
            this.pointerUpListener.type = 'mouseup';
            window.addEventListener('mouseup', this.pointerUpListener);
          } else if (params.type === 'touchstart') {
            this.pointerMoveListener = this.onPointerMove.bind(this);
            this.pointerMoveListener.type = 'touchmove';
            window.addEventListener('touchmove', this.pointerMoveListener);

            this.pointerUpListener = this.onPointerUp.bind(this);
            this.pointerUpListener.type = 'touchend';
            window.addEventListener('touchend', this.pointerUpListener);
          } else {
            throw Error('event type');
          }
        } else {
          // throw Error('_pointerMoveListener or _pointerUpListener');
        }
        break;

      case STATE.clickTo:
        if (this.dragablePiece) {
          Svg.removeElement(this.dragablePiece);
          this.dragablePiece = null;
        }
        if (prevState === STATE.dragTo) {
          this.view.setPieceVisibility(params.index);
        }
        break;

      case STATE.secondClickThreshold:
        if (STATE.clickTo !== prevState) {
          throw new Error('moveInputState');
        }
        this.startPoint = params.point;
        break;

      case STATE.dragTo:
        if (STATE.pieceClickedThreshold !== prevState) {
          throw new Error('moveInputState');
        }
        if (this.state.moveInputMode === MOVE_INPUT_MODE.dragPiece) {
          this.view.setPieceVisibility(params.index, false);
          this.createDragablePiece(params.piece);
        }
        break;

      case STATE.moveDone:
        if ([STATE.dragTo, STATE.clickTo, STATE.clickDragTo].indexOf(prevState) === -1) {
          throw new Error('moveInputState');
        }

        if (this.view.currentAnimation) {
          window.cancelAnimationFrame(this.view.currentAnimation.frameHandle);
          this.view.animationRunning = false;
        }

        this.endIndex = params.index;
        this.pieceData = (this.movedPiece && { type: this.movedPiece[1], color: this.movedPiece[0] }) || null;
        if (this.endIndex && this.moveDoneCallback(this.startIndex, this.endIndex, this.pieceData)) {
          const prevSquares = this.state.squares.slice(0);
          this.state.setPiece(this.startIndex, null);
          this.state.setPiece(this.endIndex, this.movedPiece);
          if (prevState === STATE.clickTo) {
            this.view.animatePieces(prevSquares, this.state.squares.slice(0), () => {
              this.setMoveInputState(STATE.reset);
            });
          } else {
            this.view.drawPieces(this.state.squares);
            this.setMoveInputState(STATE.reset);
          }
        } else {
          this.view.drawPiecesDebounced();
          this.setMoveInputState(STATE.reset);
        }
        break;

      case STATE.reset:
        if (this.startIndex && !this.endIndex && this.movedPiece) {
          this.state.setPiece(this.startIndex, this.movedPiece);
        }
        this.startIndex = null;
        this.endIndex = null;
        this.movedPiece = null;
        this.updateStartEndMarkers();
        if (this.dragablePiece) {
          Svg.removeElement(this.dragablePiece);
          this.dragablePiece = null;
        }
        if (this.pointerMoveListener) {
          window.removeEventListener(this.pointerMoveListener.type, this.pointerMoveListener);
          this.pointerMoveListener = null;
        }
        if (this.pointerUpListener) {
          window.removeEventListener(this.pointerUpListener.type, this.pointerUpListener);
          this.pointerUpListener = null;
        }
        this.setMoveInputState(STATE.waitForInputStart);
        break;

      default:
      // throw Error(`moveInputState ${newState}`);
    }
  }

  createDragablePiece(pieceName) {
    if (this.dragablePiece) {
      throw Error('dragablePiece exists');
    }
    this.dragablePiece = Svg.createSvg(document.body);
    this.dragablePiece.setAttribute('width', this.view.squareWidth);
    this.dragablePiece.setAttribute('height', this.view.squareHeight);
    this.dragablePiece.setAttribute('style', 'pointer-events: none');
    this.dragablePiece.name = pieceName;
    const piece = Svg.addElement(this.dragablePiece, 'use', {
      href: `#${pieceName}`,
    });
    const scaling = this.view.squareHeight / this.state.grid;
    const transformScale = this.dragablePiece.createSVGTransform();
    transformScale.setScale(scaling, scaling);
    piece.transform.baseVal.appendItem(transformScale);
  }

  moveDragablePiece(x, y) {
    this.dragablePiece.setAttribute(
      'style',
      `pointer-events: none; position: absolute; left: ${x - this.view.squareHeight / 2}px; top: ${
        y - this.view.squareHeight / 2
      }px; z-index: 1000;`,
    );
  }

  onPointerDown(e) {
    this.startDrawArrow(e);
    const index = e?.target?.getAttribute('data-index');
    const pieceElement = this.view.getPiece(index);
    if (pieceElement) {
      // allow scrolling, if not pointed on piece
      e.preventDefault();
    }
    if (index !== undefined) {
      let pieceName;
      let color;

      if (pieceElement) {
        pieceName = pieceElement.getAttribute('data-piece');
        color = pieceName ? pieceName.substr(0, 1) : null;
      }
      if (this.state.moveInputMode === 1) {
        const piece = (pieceName && { type: pieceName[1], color }) || null;
        if (this.props.isEnabledRmbMove) this.moveStartCallback(index, piece, e.button);
        else if (e.button === 0) this.moveStartCallback(index, piece, e.button);
      }

      if ((e.type === 'mousedown' && e.button === 0) || e.type === 'touchstart') {
        if ((this.state.inputWhiteEnabled && color === 'w') || (this.state.inputBlackEnabled && color === 'b')) {
          let point;
          if (e.type === 'mousedown') {
            point = { x: e.clientX, y: e.clientY };
          } else if (e.type === 'touchstart') {
            point = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }
          if (pieceName) {
            this.setMoveInputState(STATE.pieceClickedThreshold, {
              index,
              piece: pieceName,
              point,
              type: e.type,
            });
          } else if (this.moveInputState === STATE.clickTo) {
            if (index === this.startIndex) {
              this.setMoveInputState(STATE.secondClickThreshold, {
                index,
                piece: pieceName,
                point,
                type: e.type,
              });
            } else {
              this.setMoveInputState(STATE.moveDone, { index });
            }
          }
        }
      }
    }
  }

  onPointerMove(e) {
    let x;
    let y;
    let target;
    if (e.type === 'mousemove') {
      x = e.pageX;
      y = e.pageY;
      target = e.target;
      this.moveArrow(e);
    } else if (e.type === 'touchmove') {
      x = e.touches[0].pageX;
      y = e.touches[0].pageY;
      target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    }
    if (this.moveInputState === STATE.pieceClickedThreshold || this.moveInputState === STATE.secondClickThreshold) {
      if (Math.abs(this.startPoint.x - x) > DRAG_THRESHOLD || Math.abs(this.startPoint.y - y) > DRAG_THRESHOLD) {
        this.setMoveInputState(STATE.dragTo, { index: this.startIndex, piece: this.movedPiece });

        if (this.state.moveInputMode === MOVE_INPUT_MODE.dragPiece) {
          this.moveDragablePiece(x, y);
        }
      }
    } else if (this.moveInputState === STATE.dragTo || this.moveInputState === STATE.clickTo) {
      if (target && target.getAttribute && target.parentElement === this.view.boardGroup) {
        const index = target.getAttribute('data-index');
        if (index !== this.startIndex && index !== this.endIndex) {
          this.endIndex = index;
          this.updateStartEndMarkers();
        } else if (index === this.startIndex && this.endIndex !== null) {
          this.endIndex = null;
          this.updateStartEndMarkers();
        }
      } else {
        this.endIndex = null;
        this.updateStartEndMarkers();
      }
      if (this.state.moveInputMode === MOVE_INPUT_MODE.dragPiece && this.moveInputState === STATE.dragTo) {
        this.moveDragablePiece(x, y);
      }
    }
  }

  onPointerUp(e) {
    if (e.type === 'mouseup' && e.button === 2 && this.moveInputState === STATE.dragTo) {
      this.view.drawPiecesDebounced();
      this.setMoveInputState(STATE.reset);
      return;
    }

    let x;
    let y;
    let target;
    if (e.type === 'mouseup') {
      target = e.target;
    } else if (e.type === 'touchend') {
      x = e.changedTouches[0].clientX;
      y = e.changedTouches[0].clientY;
      target = document.elementFromPoint(x, y);
    }
    if (target && target.getAttribute) {
      const index = target.getAttribute('data-index');

      if (index) {
        if (this.moveInputState === STATE.dragTo) {
          if (this.startIndex === index) {
            this.setMoveInputState(STATE.clickTo, { index });
          } else {
            this.setMoveInputState(STATE.moveDone, { index });
          }
        } else if (this.moveInputState === STATE.pieceClickedThreshold) {
          this.setMoveInputState(STATE.clickTo, { index });
        } else if (this.moveInputState === STATE.secondClickThreshold) {
          this.setMoveInputState(STATE.reset);
          this.moveCanceledCallback();
        }
      } else {
        this.startIndex = null;
        this.endIndex = null;
        this.movedPiece = null;
        this.view.drawPiecesDebounced();
        this.setMoveInputState(STATE.reset);
        this.moveCanceledCallback();
      }
    } else {
      this.view.drawPiecesDebounced();
      this.setMoveInputState(STATE.reset);
    }
  }

  updateStartEndMarkers() {
    this.state.removeMarkers(null, MARKER_TYPE.move);
    if (this.startIndex) {
      this.state.addMarker(this.startIndex, MARKER_TYPE.move);
    }
    if (this.endIndex) {
      this.state.addMarker(this.endIndex, MARKER_TYPE.move);
    }
    this.view.drawMarkersDebounced();
  }

  destroy() {
    this.setMoveInputState(STATE.reset);
    this.setArrowState({}, true);
  }

  startDrawArrow(e) {
    if (e.which === 3) {
      const index = e.target.getAttribute('data-index');
      const svg = e.target.closest('svg');
      const id = svg && svg.getAttribute('data-index');
      if (index && this.state.id === id) {
        this.arrowSate.from = index;
        this.arrowSate.to = index;
        this.arrowSate.color = this.state.markerColor;
        this.arrowSate.moveStart = true;
      }
    }
  }

  moveArrow(e) {
    if (this.arrowSate.moveStart && e.which === 3) {
      const index = e.target.getAttribute('data-index');
      const svg = e.target.closest('svg');
      const id = svg && svg.getAttribute('data-index');
      if (index && this.state.id === id) {
        this.arrowSate.to = index || this.arrowSate.from;
        this.view.drawArrow(this.arrowSate, true);
      }
    }
  }

  endDrawArrow(e) {
    const svg = e.target.closest('svg');
    const id = svg && svg.getAttribute('data-index');
    if (e.which === 3 && this.arrowSate.moveStart && this.state.id === id) {
      const { from, to } = this.arrowSate;
      if (from === to) {
        this.arrowSate.moveStart = false;
        this.view.chessboard.contextInputCallback({
          chessboard: this.view.chessboard,
          type: INPUT_EVENT_TYPE.context,
          square: SQUARE_COORDINATES[from],
          id: this.state.id,
        });
      } else {
        this.state.addArrow({ from: this.arrowSate.from, to: this.arrowSate.to, color: this.arrowSate.color });
        this.arrowSate.moveStart = false;
        this.view.drawMarkersDebounced();
      }
    }
  }
}
