/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

import { squareToIndex } from './_utils';

export class ChessboardState {
  constructor(id) {
    this.squares = new Array(64).fill(null);
    this.moveInputMode = 0;
    this.orientation = null;
    this.markers = [];
    this.arrows = [];
    this.highLight = [];
    this.markerColor = '#8383EB';
    this.grid = 45;
    this.sprite = null;
    this.id = id;
    this.boardStyles = {};
  }

  setPiece(index, piece) {
    this.squares[index] = piece;
  }

  setId(id) {
    this.id = id;
  }

  seMarkerColor(color) {
    this.markerColor = color;
  }

  addMarker(index, type) {
    const markers = this.markers.filter(item => item.index !== index);
    this.markers = [...markers, { index, type }];
  }

  addArrow(data) {
    if (this.arrows.find(item => item.from === data.from && item.to === data.to)) {
      const arrows = this.arrows.filter(item => item.from !== data.from || item.to !== data.to);
      this.arrows = arrows;
    } else {
      this.arrows.push(data);
    }
  }

  clearMarkers() {
    this.markers = [];
    this.arrows = [];
  }

  setSquareTheme(theme) {
    this.cssClass = theme;
  }

  setBoardStyles(theme) {
    this.boardStyles = theme;
  }

  setSprite(sprite) {
    this.sprite = sprite;
  }

  setHighLight(data) {
    this.highLight = Object.keys(data).map(item => {
      if (!data[item]) return null;
      const index = squareToIndex(item);
      return [index, data[item]];
    });
  }

  setMoveInputMode(value) {
    this.moveInputMode = value;
  }

  removeMarkers(index = null, type = null) {
    if (index === null && type === null) {
      this.markers = [];
    } else {
      this.markers = this.markers.filter(marker => {
        if (marker.type === null) {
          if (index === marker.index) {
            return false;
          }
        } else if (index === null) {
          if (marker.type === type) {
            return false;
          }
        } else if (marker.type === type && index === marker.index) {
          return false;
        }
        return true;
      });
    }
  }

  setPosition(fen) {
    if (fen) {
      const parts = fen.replace(/^\s*/, '').replace(/\s*$/, '').split(/\/|\s/);
      for (let part = 0; part < 8; part += 1) {
        const row = parts[7 - part].replace(/\d/g, str => {
          const numSpaces = parseInt(str, 10);
          let ret = '';
          for (let i = 0; i < numSpaces; i += 1) {
            ret += '-';
          }
          return ret;
        });
        for (let c = 0; c < 8; c += 1) {
          const char = row.substr(c, 1);
          let piece = null;
          if (char !== '-') {
            if (char.toUpperCase() === char) {
              piece = `w${char.toLowerCase()}`;
            } else {
              piece = `b${char}`;
            }
          }
          this.squares[part * 8 + c] = piece;
        }
      }
    }
  }

  getPosition() {
    const parts = new Array(8).fill('');
    for (let part = 0; part < 8; part += 1) {
      let spaceCounter = 0;
      for (let i = 0; i < 8; i += 1) {
        const piece = this.squares[part * 8 + i];
        if (piece === null) {
          spaceCounter += 1;
        } else {
          if (spaceCounter > 0) {
            parts[7 - part] += spaceCounter;
            spaceCounter = 0;
          }
          const color = piece.substr(0, 1);
          const name = piece.substr(1, 1);
          if (color === 'w') {
            parts[7 - part] += name.toUpperCase();
          } else {
            parts[7 - part] += name;
          }
        }
      }
      if (spaceCounter > 0) {
        parts[7 - part] += spaceCounter;
        spaceCounter = 0;
      }
    }
    return parts.join('/');
  }
}
