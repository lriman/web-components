export function getTicks(num) {
  return Array.from({ length: num }, (_, i) => ({ id: i + 1, height: (i + 1) * (100 / (num + 1)) }));
}

export const getThermometerValue = value => {
  if (value > 0) return `+${value}`;
  return value;
};

export function getLineTrackHeight(final, value) {
  const height = 50 - (value / (final * 2)) * 100;
  if (height > 100) return '100%';
  return `${height}%`;
}

export function getLineBadgeHeight(final, value) {
  const height = 50 - (value / (final * 2)) * 100;
  if (height >= 100) return '100%';
  if (height < 0) return 0;
  return `${height}%`;
}

export function getLineTrackBackground(theme, final, value) {
  const height = 50 - (value / (final * 2)) * 100;

  if (value >= -1 && value <= 1) return `linear-gradient(180deg, #2B2B54 0%, #125750 ${height}%, #DBD9FB 100%)`;

  if (value >= -2 && value < -1) return `linear-gradient(180deg, #2B2B54 0%, #ECA731 ${height}%, #FFDAA2 100%)`;
  if (value > 1 && value <= 2) return `linear-gradient(180deg, #2B2B54 0%, #ECA731 ${height}%, #DBD9FB 100%)`;

  if (value >= -3 && value < -2) return `linear-gradient(180deg, #2B2B54 0%, #A5474A ${height}%, #C6534F 100%)`;
  if (value > 2 && value <= 3) return `linear-gradient(180deg, #97332F 0%, #C94E4A ${height}%, #DBD9FB 100%)`;

  if (value < -3) return `linear-gradient(180deg, #2B2B54 0%, #530A0A ${height}%, #50095B 100%)`;
  if (value > 3) return `linear-gradient(180deg, #50095B 0%, #5B0909 ${height}%, #DBD9FB 100%)`;
  return null;
}

export function getThermometerLineTickBorder(theme) {
  return `1px solid ${theme.thermometer.lineColor}`;
}

export function getThermometerBadgeBackground(theme, final, value) {
  if (value >= -1 && value <= 1) return theme.thermometer.badge.backgroundColors.green;

  if (value >= -2 && value < -1) return theme.thermometer.badge.backgroundColors.yellow;
  if (value > 1 && value <= 2) return theme.thermometer.badge.backgroundColors.yellow;

  if (value >= -3 && value < -2) return theme.thermometer.badge.backgroundColors.red;
  if (value > 2 && value <= 3) return theme.thermometer.badge.backgroundColors.red;

  if (value < -3) return theme.thermometer.badge.backgroundColors.brown;
  if (value > 3) return theme.thermometer.badge.backgroundColors.brown;
  return null;
}

export function getThermometerBadgeColor(theme) {
  return theme.thermometer.badge.color;
}
