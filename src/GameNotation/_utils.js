import moment from 'moment';
import { NOTATION_FIGURES } from './_constants';

export const formatTime = time => {
  return moment
    .duration(time)
    .format()
    .replace(/ milliseconds/, 'ms')
    .replace(/ days| day/, 'd')
    .replace(/ hours| hour/, 'h');
};

export const getDifferentInTime = (timeLeft, lastMove, isCountdown, finished) => {
  if (finished) return 0;
  if (!isCountdown) return timeLeft;
  const currentTime = Date.now();
  const result = timeLeft - (moment(currentTime) - moment(lastMove));

  return result > 0 ? result : 0;
};

export const getTimeLimit = (data, color) => {
  const lastMove = (data && data.lastMove && data.lastMove.ts) || data.created;
  const timeLeft = color === 'white' ? data.whiteLeftMs : data.blackLeftMs;
  const finished = data.status === 'finished';
  const isCountdown = color === data.next;

  return data.type === 'online'
    ? getDifferentInTime(timeLeft, lastMove, isCountdown, finished)
    : getDifferentInTime(data.timeLimit * 1000, lastMove, isCountdown, finished);
};

export const getAlarmClockColor = game => {
  const timeLimit = getTimeLimit(game.data, game.chessColor) / 1000;
  if (timeLimit < 10) return 'warning';
  return 'minor';
};

export const getFullNotation = move => {
  if (!move || !move.san) return null;
  if (move.san === 'O-O' || move.san === 'O-O-O') return move;
  const fullSan = `${NOTATION_FIGURES[move.piece]}${move.from}-${move.san.replace(/^[QRBNK]/, '')}`;
  return {
    ...move,
    san: fullSan,
  };
};

export const getItemType = (type, data) => {
  const current = data.current.length;
  const comment = data.comment.length;
  if (type === 'moveNum' && current >= comment) return 'current';
  if (type === 'moveNum' && current < comment) return 'comment';
  return type;
};

export const getTreeKey = (item, k) => {
  return item[0] && item[0][0] && item[0][0].index + item[0][0].san + k;
};

export const getNewItems = element => {
  if (element?.length && element[0].color === 'b') {
    return [{ moveId: [0, -1], san: '...' }, ...element];
  }
  return element;
};

export const getRelativePosition = (elm, container) => {
  const cPos = container.getBoundingClientRect();
  const ePos = elm.getBoundingClientRect();
  const pos = {};

  pos.top = ePos.top - cPos.top + container.scrollTop;
  pos.right = ePos.right - cPos.right;
  pos.bottom = ePos.bottom - cPos.bottom;
  pos.left = ePos.left - cPos.left;

  return pos;
};

export const getIsVisible = (element, container) => {
  const elementTop = element.top;
  const elementBottom = element.top + 44;
  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;
  return (
    (elementTop >= containerTop && elementBottom <= containerBottom) ||
    (elementTop < containerTop && containerTop < elementBottom) ||
    (elementTop < containerBottom && containerBottom < elementBottom)
  );
};

export const notationScroll = (element, container) => {
  const position = getRelativePosition(element, container);
  const isVisible = getIsVisible(position, container);

  if (isVisible && position.top + 80 >= container.scrollTop + container.clientHeight) {
    container.scroll({ top: container.scrollTop + 44, behavior: 'smooth' });
    return;
  }

  if (isVisible && position.top - 80 < container.scrollTop) {
    container.scroll({ top: container.scrollTop - 44, behavior: 'smooth' });
    return;
  }

  if (!isVisible) {
    container.scroll({ top: position.top - 44, behavior: 'smooth' });
  }
};

export const getColumnLabelColor = (colors, colorType) => {
  return colors.gameNotation[colorType].columnLabel.color;
};

export const getCellColor = (colors, colorType, isMoveNum, isActive, isBlocked, isHovered) => {
  if (isMoveNum) return colors.gameNotation[colorType].moves.color.moveNum;
  if (isActive && !isBlocked) return colors.gameNotation[colorType].moves.color.active;
  if (isHovered && !isBlocked) return colors.gameNotation[colorType].moves.color.hovered;
  if (colors) return colors.gameNotation[colorType].moves.color.normal;
  return null;
};

export const getCellBackgroundColor = (colors, colorType, isLeft, isRight, isNew, isActive, isBlocked, isHovered) => {
  if (isLeft || isRight) {
    if (isActive && !isBlocked) return colors.gameNotation[colorType].moves.backgroundColor.active;
    if (isHovered && !isBlocked) return colors.gameNotation[colorType].moves.backgroundColor.hovered;
    if (isNew) return colors.gameNotation[colorType].moves.backgroundColor.new;
    if (isLeft) return colors.gameNotation[colorType].leftColumn.backgroundColor;
    if (isRight) return colors.gameNotation[colorType].rightColumn.backgroundColor;
  }
  return 'transparent';
};

export const getMoveColor = (isActive, colors, colorType, isBlocked, isHovered) => {
  if (isActive && !isBlocked) return colors.gameNotation[colorType].moves.color.active;
  if (isHovered && !isBlocked) return colors.gameNotation[colorType].moves.color.hovered;
  return colors.gameNotation[colorType].moves.color.normal;
};

export const getMoveBackgroundColor = (isActive, colors, colorType, isBlocked, isHovered) => {
  if (isActive && !isBlocked) return colors.gameNotation[colorType].moves.backgroundColor.active;
  if (isHovered && !isBlocked) return colors.gameNotation[colorType].moves.backgroundColor.hovered;
  return colors.gameNotation[colorType].moves.backgroundColor.normal;
};

export const getScrollbarTrackColor = (colors, colorType) => {
  return colors.gameNotation[colorType].scrollbar.track.backgroundColor;
};

export const getScrollbarThumbColor = (colors, colorType) => {
  return colors.gameNotation[colorType].scrollbar.thumb.backgroundColor;
};

export const getTreeBorderColor = (colors, colorType) => {
  return colors.gameNotation[colorType].tree.borderColor;
};

export const getTreeBackgroundColor = (colors, colorType) => {
  return colors.gameNotation[colorType].tree.backgroundColor;
};

export const getInlineMoveBackgroundColor = (theme, colorType, isActive) => {
  if (isActive) return theme.gameNotation[colorType].inlineMove.backgroundColors.active;
  return theme.gameNotation[colorType].inlineMove.backgroundColors.normal;
};
