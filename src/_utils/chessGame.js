import moment from 'moment';
import zeroPad from './zeroPad';
import formatLabel from './formatLabel';
import { getTimeDiff } from './getTimeDiff';

export const PIECES_PRIORITY = {
  p: 1,
  n: 2,
  b: 3,
  r: 4,
  q: 5,
};

const setPromotionForDiff = (data, moveIndex) => {
  return data.moves.slice(0, moveIndex + 1).reduce(
    (acc, item) => {
      if (item.promotion) {
        const indexP = acc[item.color].indexOf(item.piece);
        acc[item.color].splice(indexP, 1);
        acc[item.color].push(item.promotion);
      }
      return acc;
    },
    { w: [...data.captured.w], b: [...data.captured.b] },
  );
};

export const getCapturedPiecesDiff = (data, moveIndex) => {
  if (!data?.moves?.length) return null;

  const captured = setPromotionForDiff(data, moveIndex);
  return captured.w.reduce(
    (acc, item) => {
      const indexW = acc.w.indexOf(item);
      const indexB = acc.b.indexOf(item);
      if (indexB >= 0) {
        acc.w.splice(indexW, 1);
        acc.b.splice(indexB, 1);
      }
      return acc;
    },
    { w: [...captured.w], b: [...captured.b] },
  );
};

export const getSortedCapturedPieces = captured => {
  const w = captured?.w.sort((a, c) => PIECES_PRIORITY[c] - PIECES_PRIORITY[a]) || [];
  const b = captured?.b.sort((a, c) => PIECES_PRIORITY[c] - PIECES_PRIORITY[a]) || [];
  return { w, b };
};

export const isPromotion = (from, to, piece) => {
  if (from && to) {
    if (piece && piece.color === 'w' && piece.type === 'p') {
      return from.charAt(1) === '7' && to.charAt(1) === '8';
    }
    if (piece && piece.color === 'b' && piece.type === 'p') {
      return from.charAt(1) === '2' && to.charAt(1) === '1';
    }
  }
  return false;
};

export const getPiecePositions = (game, piece) => {
  return []
    .concat(...game.board())
    .map((p, index) => {
      if (p !== null && p.type === piece.type && p.color === piece.color) {
        return index;
      }
      return null;
    })
    .filter(Number.isInteger)
    .map(pieceIndex => {
      const row = 'abcdefgh'[pieceIndex % 8];
      const column = Math.ceil((64 - pieceIndex) / 8);
      return row + column;
    });
};

export const getGameSettings = (profile, type) => {
  const settings = profile?.settings?.game.filter(item => item.type.includes(type));
  return settings.length ? settings[0] : {};
};

export const getSquareStyles = (pieceSquare, history, moveSquareStyles) => {
  const sourceSquare = history && history.length && history[history.length - 1].from;
  const targetSquare = history && history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: moveSquareStyles,
    ...(history &&
      history.length && {
        [sourceSquare]: moveSquareStyles,
      }),
    ...(history &&
      history.length && {
        [targetSquare]: moveSquareStyles,
      }),
  };
};

export const getMoveSquareStyles = (move, moveSquareStyles) => {
  if (!move) return {};

  const sourceSquare = move && move.from;
  const targetSquare = move && move.to;

  return {
    ...(move && {
      [sourceSquare]: moveSquareStyles,
    }),
    ...(move && {
      [targetSquare]: moveSquareStyles,
    }),
  };
};

export const getHighlightStyles = (sourceSquare, squaresToHighlight, highlightStyles) => {
  return [sourceSquare, ...squaresToHighlight].reduce((a, c) => {
    return {
      ...a,
      ...{
        [c]: highlightStyles,
      },
    };
  }, {});
};

export const getTimeControl = (data, labels, separator = '|', showZero) => {
  const { timeLimit, timeAdd, ratingType, type } = data;

  if (!timeLimit) return null;

  if (ratingType === 'offline' || type === 'offline') {
    return labels?.days ? formatLabel(labels.days, { count: timeLimit / 86400 }) : timeLimit / 86400;
  }

  if (showZero) return `${timeLimit / 60}${separator}${timeAdd ? `${timeAdd}` : '0'}`;

  const value = `${timeLimit / 60}${timeAdd ? `${separator}${timeAdd}` : ''}`;
  return labels?.min ? `${value} ${labels.min}` : value;
};

// Time section
const getEndTime = move => {
  if (move?.extra?.drawAccept) return move.extra?.drawAccept;
  return move.ts;
};

export const getCompetedGameTimeLeft = (data, index, color) => {
  let moveIndex = index + 1;
  const moves = [...data.moves];

  if (data.finishReason === 'time_over' && index === data.moves.length - 1) {
    moves.push({ ts: data.finishTimestamp });
    moveIndex = index + 2;
  }

  const computedTimeLimit = moves.slice(0, moveIndex).reduce(
    (acc, item, i) => {
      if (i === 0) {
        acc.white -= getTimeDiff(data.created, getEndTime(moves[i]), 'milliseconds') - data.timeAdd * 1000;
      }
      if (i % 2 === 0 && i >= 1) {
        acc.white -= getTimeDiff(moves[i - 1].ts, getEndTime(moves[i]), 'milliseconds') - data.timeAdd * 1000;
      } else if (i % 2 !== 0 && i >= 1) {
        acc.black -= getTimeDiff(moves[i - 1].ts, getEndTime(moves[i]), 'milliseconds') - data.timeAdd * 1000;
      }
      return acc;
    },
    { white: data.timeLimit * 1000, black: data.timeLimit * 1000 },
  );

  return computedTimeLimit[color];
};

export const getTimeLimit = (data, color) => {
  const { moveIndex } = data;
  if (data.status === 'canceled') return data.timeLimit * 1000;
  if (data.status === 'finished') return getCompetedGameTimeLeft(data, moveIndex, color);
  const timeLeft =
    color === 'white' ? data.whiteRealLeftMs || data.whiteLeftMs : data.blackRealLeftMs || data.blackLeftMs;

  return timeLeft > 0 ? timeLeft : 0;
};

export const getTimerTime = (time, labels, isMobile, showDaysZero) => {
  const { days, hours, minutes, seconds, milliseconds } = time;

  if (days >= 1) {
    return formatLabel(labels?.time?.days, { count: days });
  }

  if (days < 1 && hours >= 1) {
    return `${zeroPad(hours)}:${zeroPad(minutes)}`;
  }

  if (!days && !hours && !minutes && seconds < 10 && seconds > 0) {
    return `00:${zeroPad(seconds)}${!isMobile ? `,${zeroPad(milliseconds).slice(0, 1)}` : ''}`;
  }
  return `${showDaysZero ? '00:' : ''}${zeroPad(minutes)}:${zeroPad(seconds)}`;
};

export const getIsLittleTime = (time, timeLimit) => {
  // timeLimit in milliseconds
  const { days, hours, minutes, seconds } = time;
  if (!timeLimit) return !days && !hours && !minutes && seconds < 10;
  const persent = (moment.duration(time) * 100) / timeLimit;

  return persent < 10;
};

// Tree section
export const getIncrementedIndexes = indexes => {
  return [...indexes.slice(0, -1), indexes[indexes.length - 1] + 1];
};

export const setHistoryTree = (item, history, moves, indexes) => {
  const lastIndex = moves.length - 1;
  const lastMove = moves[lastIndex];

  if (indexes && indexes.length > 1)
    return setHistoryTree(item, history[indexes[0]].items[indexes[1]], moves, indexes.slice(2));

  if (!history.length || history?.length - 1 === indexes[0]) {
    history.push(lastMove);
    item.indexes = [...item.indexes.slice(0, -1), history.length - 1];
  } else if (history[indexes[0] + 1] && history[indexes[0] + 1].san === lastMove.san) {
    item.indexes = getIncrementedIndexes(item.indexes);
  } else if (history[indexes[0] + 1] && history[indexes[0] + 1].items) {
    if (history[indexes[0] + 1].items.find(el => el[0].san === lastMove.san)) {
      history[indexes[0] + 1].items.forEach((elem, i) => {
        if (elem[0].san === lastMove.san) {
          item.indexes = [...getIncrementedIndexes(item.indexes), i, 0];
        }
      });
      return null;
    }

    const i = history[indexes[0] + 1].items.length;
    const lastInd = getIncrementedIndexes(item.indexes);
    const newItem = [lastMove];

    history[indexes[0] + 1].items.push(newItem);
    item.indexes = [...lastInd, i, 0];
  } else {
    const startInd = getIncrementedIndexes(item.indexes);
    history[indexes[0] + 1].items = [[lastMove]];
    item.indexes = [...startInd, 0, 0];
  }
  return null;
};

export const getHistory = (history, indexes) => {
  let result = [];
  (function flat(hist, ind) {
    if (ind.length === 1) result = [...result, ...hist];
    else {
      result.push(...hist.slice(0, ind[0]));
      flat(hist[ind[0]].items[ind[1]], ind.slice(2));
    }
  })(history, indexes);
  return result;
};

export const getMoveIndex = indexes => {
  const filtered = indexes.filter((item, i) => !(i % 2));
  const res = filtered.reduce((acc, item) => {
    if (indexes) acc += item;
    return acc;
  }, 0);
  return res;
};

export const getHistoryLastId = (history, indexes) => {
  let lastLine = history;
  indexes.slice(0, -1).forEach((item, i) => {
    if (i % 2 === 0) lastLine = lastLine[item];
    else lastLine = lastLine?.items[item];
  });
  return lastLine?.length - 1;
};

export const getHistoryPrevId = indexes => {
  if (indexes.length === 1 && indexes[0] === 0) return [-1];

  const newIndexes = [...indexes.slice(0, -1), indexes[indexes.length - 1] - 1];
  if (newIndexes[newIndexes.length - 1] < 0) {
    const lastInd = newIndexes.slice(0, -2);
    return [...lastInd.slice(0, -1), lastInd[lastInd.length - 1] - 1];
  }
  return newIndexes;
};

export default {
  getSortedCapturedPieces,
  getCapturedPiecesDiff,
  isPromotion,
  getGameSettings,
  getSquareStyles,
  getMoveSquareStyles,
  getHighlightStyles,
  getPiecePositions,
  getTimeControl,
  getCompetedGameTimeLeft,
  getTimeLimit,
  getIsLittleTime,
  getIncrementedIndexes,
  setHistoryTree,
  getHistory,
  getMoveIndex,
  getHistoryLastId,
  getHistoryPrevId,
};
