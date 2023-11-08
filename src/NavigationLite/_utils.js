function getItems(items) {
  return items.reduce((result, item) => {
    if (item.items) return [...result, item, ...getItems(item.items)];
    return [...result, item];
  }, []);
}

export function findActive(items) {
  return getItems(items).find(item => item.active);
}

export const getNavigationLiteLinkColor = (isActive, theme, isHovered) => {
  if (isActive) return theme.navigationLite.linkColors.active;
  if (isHovered) return theme.navigationLite.linkColors.hovered;
  return theme.navigationLite.linkColors.default;
};

export const getNavigationLiteSectionTitleColor = (isActive, theme, isHovered) => {
  if (isActive) return theme.navigationLite.sectionTitleColors.active;
  if (isHovered) return theme.navigationLite.sectionTitleColors.hovered;
  return theme.navigationLite.sectionTitleColors.default;
};

export const getNavigationLiteLinkMarkBackgroundColor = (isActive, theme, isHovered) => {
  if (isActive) return theme.navigationLite.linkMarkColors.active;
  if (isHovered) return theme.navigationLite.linkMarkColors.hovered;
  return theme.navigationLite.linkMarkColors.default;
};

export const getNavigationLiteLinkCursor = (isActive, isDisabled) => {
  if (isActive) return 'default';
  if (isDisabled) return 'not-allowed';
  return 'pointer';
};
