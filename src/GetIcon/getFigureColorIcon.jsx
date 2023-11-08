import React from 'react';

import IconChessBadgeBlack from '../Icon/IconChessBadgeBlack';
import IconChessBadgeWhite from '../Icon/IconChessBadgeWhite';
import IconChessBadgeMulti from '../Icon/IconChessBadgeMulti';

import { FIGURE_COLORS } from './constants';

export default function getFigureColorIcon(type, size, style) {
  switch (type) {
    case FIGURE_COLORS.BLACK:
      return <IconChessBadgeBlack size={size} style={style} />;
    case FIGURE_COLORS.WHITE:
      return <IconChessBadgeWhite size={size} style={style} />;
    case FIGURE_COLORS.ANY:
      return <IconChessBadgeMulti size={size} style={style} />;
    default:
      return null;
  }
}
