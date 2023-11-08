import { COLOR_TYPES, STYLES } from './_constants';

export function getColorType(type) {
  return COLOR_TYPES[type];
}

export function getSectionBackgroundColor(theme, type, transparent) {
  if (transparent) return 'none';
  return theme.layouts.section.backgroundColors[type];
}

export function getSectionColor(theme, type) {
  return theme.layouts.section.colors[type];
}

export function getSectionPatternPosition(type, property) {
  return STYLES.SECTIONS_PATTERN_POSITIONS[type][property];
}

export function getSectionGeometricPosition(type, property) {
  return STYLES.SECTIONS_GEOMETRIC_POSITIONS[type][property];
}

export function getSectionGeometricWidth(type, mediaSize) {
  return `${STYLES.SECTIONS_GEOMETRIC_WIDTHS[type][mediaSize]}px`;
}

export function getSectionGeometricHeight(type, mediaSize) {
  return `${STYLES.SECTIONS_GEOMETRIC_HEIGHTS[type][mediaSize]}px`;
}

export function getSectionBlockPadding(mediaSize, spacing, proportional) {
  if (proportional) return STYLES.SECTION_BLOCK_PADDING.PROPORTIONAL[mediaSize][spacing];
  return STYLES.SECTION_BLOCK_PADDING.NORMAL[mediaSize][spacing];
}

export function getSectionBlockJustify(alignItems) {
  return STYLES.SECTION_BLOCK_JUSTIFY[alignItems];
}

export function getNavigationTogglePosition(mediaSize, property) {
  return `${STYLES.NAVIGATION_TOGGLE_POSITION[mediaSize][property]}px`;
}

export function getNavigationSocialNetworksPosition(mediaSize, property) {
  return `${STYLES.NAVIGATION_SOCIAL_NETWORKS_POSITION[mediaSize][property]}px`;
}

export function getNavigationContentPadding(mediaSize) {
  return STYLES.NAVIGATION_CONTENT_PADDING[mediaSize];
}

export function getNavigationLinksItemColor(theme, disabled, hovered) {
  if (disabled) return theme.layouts.navigation.menuItemLinkColors.disabled;
  if (hovered) return theme.layouts.navigation.menuItemLinkColors.hover;
  return theme.layouts.navigation.menuItemLinkColors.normal;
}
