export const getRailBackgroundColor = (sType, theme) => {
  return theme.slider[sType].railBackgroundColor;
};

export const getTrackBackgroundColor = (sType, theme) => {
  return theme.slider[sType].trackBackgroundColor;
};

export const getHandleBorderColor = (sType, theme, isFocused, isHovered) => {
  if (isFocused) return theme.slider[sType].handle.borderColor.focused;
  if (isHovered) return theme.slider[sType].handle.borderColor.hovered;
  return theme.slider[sType].handle.borderColor.normal;
};

export const getHandleBackgroundColor = (sType, theme, isFocused, isHovered) => {
  if (isFocused) return theme.slider[sType].handle.backgroundColors.focused;
  if (isHovered) return theme.slider[sType].handle.backgroundColors.hovered;
  return theme.slider[sType].handle.backgroundColors.normal;
};

export const getSliderMarkColor = (sType, theme, topMark) => {
  if (topMark) return theme.slider[sType].markColor.accent;
  return theme.slider[sType].markColor.normal;
};

export const getSliderDotStyles = (sType, topMark, theme) => {
  if (topMark)
    return `
  position: absolute;    
  bottom: -9px;
  width: 2px;
  height: 25px;
  background-color: ${theme.slider[sType].dotBackgroundColor.accent};
  z-index: 2;
  `;

  return `
  position: absolute;    
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: ${theme.slider[sType].dotBackgroundColor.normal};
  border-radius: 50%;
  z-index: 0;
  `;
};

export const getTooltipColor = (sType, theme) => {
  return theme.slider[sType].tooltipColor;
};
