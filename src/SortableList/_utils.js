export const getSectionTitleColor = (theme, colorType) => {
  return theme.tableList[colorType].sectionTitleColor;
};

export const getSectionTitleBorderColor = (theme, colorType) => {
  return theme.tableList[colorType].sectionTitleBorderColor;
};

export const getCaptionsColor = (theme, colorType) => {
  return theme.tableList[colorType].captionsColor;
};

export const getCaptionsBorderColor = (theme, colorType) => {
  return theme.tableList[colorType].captionsBorderColor;
};

export const getRowColor = (theme, colorType, isHovered, isWithoutRowHover) => {
  if (isHovered && !isWithoutRowHover) return theme.tableList[colorType]?.rowColors.hovered;
  return theme.tableList[colorType]?.rowColors.normal;
};

export const getRowBackgroundColor = (theme, colorType, isHovered, isWithoutRowHover) => {
  if (isHovered && !isWithoutRowHover) return theme.tableList[colorType]?.rowBackgroundColors.hovered;
  return theme.tableList[colorType]?.rowBackgroundColors.normal;
};
