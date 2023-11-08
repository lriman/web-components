import { REFS, STYLES } from './_constants';

export function getDisplay(display) {
  return STYLES.DISPLAY[display];
}

export function getWidth(width, display) {
  if (typeof width === 'number') return `${width}px`;
  return width || (display === REFS.DISPLAY.BLOCK ? '100%' : 'auto');
}

export function getColor(type, theme, colorType, isDisabled, isActive, isHovered, isPressed) {
  if (isDisabled) return theme.button[colorType].colors[type].disabled;
  if (isPressed) return theme.button[colorType].colors[type].pressed;
  if (isHovered) return theme.button[colorType].colors[type].hovered;
  if (isActive) return theme.button[colorType].colors[type].active;
  return theme.button[colorType].colors[type].normal;
}

export const getOverlayBackgroundColor = (theme, colorType, isDisabled, isPressed, isHovered) => {
  if (isDisabled) return theme.button[colorType].overlayBackgroundColors.disabled;
  if (isHovered) return theme.button[colorType].overlayBackgroundColors.hovered;
  if (isPressed) return theme.button[colorType].overlayBackgroundColors.pressed;
  return theme.button[colorType].overlayBackgroundColors.normal;
};

export function getBackgroundColor(type, theme, colorType, isDisabled, isHovered, isPressed, isActive) {
  if (isDisabled) return theme.button[colorType].backgroundColors[type].disabled;
  if (isPressed) return theme.button[colorType].backgroundColors[type].pressed;
  if (isHovered) return theme.button[colorType].backgroundColors[type].hovered;
  if (isActive) return theme.button[colorType].backgroundColors[type].active;
  return theme.button[colorType].backgroundColors[type].normal;
}

export function getBorder(type, theme, colorType, isDisabled, isHovered, isPressed) {
  let color;
  if (isDisabled) color = theme.button[colorType].borderColors[type].disabled;
  else if (isPressed) color = theme.button[colorType].borderColors[type].pressed;
  else if (isHovered) color = theme.button[colorType].borderColors[type].hovered;
  else color = theme.button[colorType].borderColors[type].normal;

  return color === 'none' ? color : `1px solid ${color}`;
}

export function getLineHeight(mediaSize, size) {
  return `${STYLES.LINE_HEIGHT[mediaSize][size]}px`;
}

export function getPadding(mediaSize, size, sPadding) {
  const padding = STYLES.PADDING[mediaSize][size];
  if (sPadding) return sPadding;
  return `${padding[0]}px ${padding[1]}px`;
}

export function getFontSize(mediaSize, size) {
  return `${STYLES.FONT_SIZES[mediaSize][size]}px`;
}

export function getHeight(mediaSize, size) {
  return `${STYLES.HEIGHTS[mediaSize][size]}px`;
}
