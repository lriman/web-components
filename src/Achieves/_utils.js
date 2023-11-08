export const getTrackBackgroundColor = (theme, width) => {
  if (width === 0) return theme.achieves.trackBackgroundColors.empty;
  return theme.achieves.trackBackgroundColors.normal;
};
