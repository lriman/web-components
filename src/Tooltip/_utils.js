export function getOpenerColor(theme, isActive, isDisabled, isHovered) {
  if (isDisabled) return theme.tooltip.opener.colors.disabled;
  if (isActive) return theme.tooltip.opener.colors.active;
  if (isHovered) return theme.tooltip.opener.colors.hovered;
  return theme.tooltip.opener.colors.normal;
}
