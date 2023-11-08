import { STYLES } from './_constants';

export const getCardBackgroundColor = (theme, sColor, isInactive) => {
  if (isInactive) return theme.tournamentCard.borderColors.inactive;
  return theme.tournamentCard.borderColors[sColor];
};

export const getInnerColor = (theme, sColor, isInactive) => {
  if (isInactive) return theme.tournamentCard.colors.inactive;
  return theme.tournamentCard.colors[sColor];
};

export const getInnerBackgroundColor = (theme, sColor, isInactive) => {
  if (isInactive) return theme.tournamentCard.backgroundColors.inactive;
  return theme.tournamentCard.backgroundColors[sColor];
};

export const getSquareFrameSizes = sSize => {
  return `${STYLES.SIZES[sSize]}px`;
};
