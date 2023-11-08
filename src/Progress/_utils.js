import { STYLES } from './_constants';

export function getLineTrackWidth(final, value) {
  return `${(value / final) * 100}%`;
}

export function getCircleTrackStrokeDasharray(final, value) {
  return `${(value / final) * 356}px 356px`;
}

export function formatValue(value, final, isTimer, isDecreased) {
  const current = isDecreased ? final - value : value;

  if (isTimer) {
    const min = parseInt(current / 60, 10).toString();
    const sec = (current % 60).toString();
    return `${min.length === 1 ? '0' : ''}${min}:${sec.length === 1 ? '0' : ''}${sec}`;
  }

  const percent = parseInt((current / final) * 100, 10).toString();
  return `${percent.length === 1 ? '0' : ''}${percent}%`;
}

export function getLineTrackHeight(value) {
  return `${STYLES.LINE_HEIGHTS[value]}px`;
}
