export const getGameTypeTimesColor = (isActive, theme, sType, isHovered, isPressed) => {
  if (isPressed) return theme.newGame.gameTypes.gameTypeTimes.colors[sType].pressed;
  if (isHovered && isActive) return theme.newGame.gameTypes.gameTypeTimes.colors[sType].activeHovered;
  if (isHovered) return theme.newGame.gameTypes.gameTypeTimes.colors[sType].hovered;
  if (isActive) return theme.newGame.gameTypes.gameTypeTimes.colors[sType].active;
  return theme.newGame.gameTypes.gameTypeTimes.colors[sType].normal;
};

export const getGameTypeTimesBorder = (isActive, theme, sType, isHovered, isPressed) => {
  if (isPressed) return theme.newGame.gameTypes.gameTypeTimes.borderColors[sType].pressed;
  if (isHovered && isActive) return theme.newGame.gameTypes.gameTypeTimes.borderColors[sType].activeHovered;
  if (isHovered) return `1px solid ${theme.newGame.gameTypes.gameTypeTimes.borderColors[sType].hovered}`;
  if (isActive) return `1px solid ${theme.newGame.gameTypes.gameTypeTimes.borderColors[sType].active}`;
  return `1px solid ${theme.newGame.gameTypes.gameTypeTimes.borderColors[sType].normal}`;
};

export const getGameTypeTimesBackgroundColor = (isActive, theme, sType, isHovered, isPressed) => {
  if (isPressed) return theme.newGame.gameTypes.gameTypeTimes.backgroundColors[sType].pressed;
  if (isHovered && isActive) return theme.newGame.gameTypes.gameTypeTimes.backgroundColors[sType].activeHovered;
  if (isHovered) return theme.newGame.gameTypes.gameTypeTimes.backgroundColors[sType].hovered;
  if (isActive) return theme.newGame.gameTypes.gameTypeTimes.backgroundColors[sType].active;
  return theme.newGame.gameTypes.gameTypeTimes.backgroundColors[sType].normal;
};
