import { getSpacing } from '../_utils';

import { STYLES } from './_constants';

export function getTableSpacing(spacing, removeSideSpacing, mediaSize) {
  if (removeSideSpacing) return '0';
  return `-${getSpacing(spacing, mediaSize)}`;
}

export function getTableCellBorder(direction, border) {
  if (!border) return 'none';
  if (direction === 'horizontal') return STYLES.TABLE_CELL_BORDER_HORIZONTAL[border];
  return STYLES.TABLE_CELL_BORDER_VERTICAL[border];
}
