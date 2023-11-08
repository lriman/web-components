import { STYLES } from './_constants';

export function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(' ');
  let result = '';
  parts.forEach(part => {
    result = `${result}${part[0]}`;
  });
  return result.toUpperCase();
}

export function getSize(size) {
  return `${STYLES.SIZES[size]}px`;
}

export function getContentPaddingLeft(size) {
  return `${STYLES.CONTENTS_PADDING_LEFT[size]}px`;
}

export function getIconChessDivSize(size) {
  return `${STYLES.ICON_CHESS_DIV_SIZES[size]}px`;
}

export function getIconChessSize(size) {
  return STYLES.ICON_CHESS_SIZES[size];
}

export function getIconChessPosition(size) {
  return `${STYLES.ICON_CHESS_POSITION[size]}px`;
}

export function getIconFriendsDivSize(size) {
  return `${STYLES.ICON_FRIENDS_DIV_SIZES[size]}px`;
}

export function getIconFriendsPosition(size) {
  return `${STYLES.ICON_FRIENDS_POSITION[size]}px`;
}

export function getIconFriendsSize(size) {
  return STYLES.ICON_FRIENDS_SIZES[size];
}

export function getDisplay(display) {
  return STYLES.DISPLAY[display];
}

export function getAvatarBoxShadow(theme, colorType, isActive) {
  if (isActive) return `0 0 0 3px ${theme.account[colorType].avatar.boxShadowColor}`;
  return null;
}
