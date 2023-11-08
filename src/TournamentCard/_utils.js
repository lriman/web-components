import { REFS, STYLES } from './_constants';

export const getColor = (theme, color) => {
  return theme.tournamentCard.colors[color];
};

export const getTournamentCardBackgroundColor = (theme, color, isAccented, sType) => {
  if (isAccented) return theme.tournamentCard.borderColors.accented;
  if (sType === REFS.TYPES.CUSTOM) return theme.tournamentCard.borderColors.custom;
  return theme.tournamentCard.borderColors[color];
};

export const getTournamentCardSizes = (size, compact, isHeight) => {
  if (!compact && isHeight) return `${STYLES.HEIGHTS[size]}px`;
  return `${STYLES.SIZES[size]}px`;
};

export const getTournamentCardPadding = (size, compact) => {
  if (compact) return 0;
  if (size === REFS.SIZES.L) return '24px';
  if (size === REFS.SIZES.M) return '24px';
  return '24px 16px';
};

export const getTournamentCardIconBoxSizes = size => {
  return `${STYLES.INNER_BOX_SIZES[size]}px`;
};

export const getTournamentCardIconBoxBackgroundColor = (theme, color, isCustom) => {
  if (isCustom) return theme.tournamentCard.borderColors[color];
  return theme.tournamentCard.backgroundColors[color];
};

export const getTournamentCardIconBoxBorderColor = (theme, color, isCustom) => {
  if (!isCustom) return 'transparent';
  return theme.tournamentCard.backgroundColors[color];
};

export const getTournamentCardCapBadgeColor = (theme, status) => {
  return theme.tournamentCard.badge.colors[status];
};

export const getTournamentCardCapBadgeBackgroundColor = (theme, status) => {
  return theme.tournamentCard.badge.backgroundColors[status];
};

export const getTournamentCardParticipantsItemBorderColor = (theme, color, isAccented) => {
  if (isAccented) return theme.tournamentCard.borderColors.accented;
  return theme.tournamentCard.borderColors[color];
};

export const getTournamentCardCapBadgeDotBackgroundColor = (theme, status) => {
  return theme.tournamentCard.badge.backgroundColors[status];
};

export const getTitleHeight = mediaSize => {
  return `${STYLES.TITLE_HEIGHTS[mediaSize]}px`;
};
