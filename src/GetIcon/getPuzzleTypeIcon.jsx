import React from 'react';

import IconEtude from '../Icon/IconEtude';
import IconCombination from '../Icon/IconCombination';
import IconSandglass from '../Icon/IconSandglass';
import IconFire from '../Icon/IconFire';

export default function getPuzzleTypeIcon(type, size, style) {
  switch (type) {
    case 'combination':
      return <IconCombination size={size} style={style} />;
    case 'etude':
      return <IconEtude size={size} style={style} />;
    case 'timeLimit':
      return <IconSandglass size={size} style={style} />;
    case 'survival':
      return <IconFire size={size} style={style} />;
    default:
      return null;
  }
}
