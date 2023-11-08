export const COLUMNS = 'abcdefgh'.split('');

function isString(s) {
  return typeof s === 'string';
}

function expandFenEmptySquares(fen) {
  return fen
    .replace(/8/g, '11111111')
    .replace(/7/g, '1111111')
    .replace(/6/g, '111111')
    .replace(/5/g, '11111')
    .replace(/4/g, '1111')
    .replace(/3/g, '111')
    .replace(/2/g, '11');
}

export function validFen(fen) {
  if (!isString(fen)) return false;
  fen = fen.replace(/ .+$/, '');
  fen = expandFenEmptySquares(fen);

  const chunks = fen.split('/');
  if (chunks.length !== 8) return false;

  for (let i = 0; i < 8; i += 1) {
    if (chunks[i].length !== 8 || chunks[i].search(/[^kqrnbpKQRNBP1]/) !== -1) {
      return false;
    }
  }

  return true;
}

function fenToPieceCode(piece) {
  if (piece.toLowerCase() === piece) {
    return `b${piece.toLowerCase()}`;
  }
  return `w${piece.toLowerCase()}`;
}

export function fenToObj(fen) {
  if (!validFen(fen)) return false;
  fen = fen.replace(/ .+$/, '');

  const rows = fen.split('/');
  const position = {};

  let currentRow = 8;
  for (let i = 0; i < 8; i += 1) {
    const row = rows[i].split('');
    let colIdx = 0;

    for (let j = 0; j < row.length; j += 1) {
      if (row[j].search(/[1-8]/) !== -1) {
        const numEmptySquares = parseInt(row[j], 10);
        colIdx += numEmptySquares;
      } else {
        const square = COLUMNS[colIdx] + currentRow;
        position[square] = fenToPieceCode(row[j]);
        colIdx += 1;
      }
    }

    currentRow -= 1;
  }

  return position;
}

function validSquare(square) {
  return isString(square) && square.search(/^[a-h][1-8]$/) !== -1;
}

function validPieceCode(code) {
  return isString(code) && code.search(/^[bw][KQRNBP]$/) !== -1;
}

export function validPositionObject(pos) {
  if (pos === null || typeof pos !== 'object') return false;

  for (const i in pos) {
    if (!pos.hasOwnProperty(i)) continue; // eslint-disable-line

    if (!validSquare(i) || !validPieceCode(pos[i])) {
      return false;
    }
  }
  return true;
}
