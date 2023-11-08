import React from 'react';

import IconBullet from '../Icon/IconBullet';
import IconLightning from '../Icon/IconLightning';
import IconRabbit from '../Icon/IconRabbit';
import IconCalendar from '../Icon/IconCalendar';
import IconChessClock from '../Icon/IconChessClock';
import IconFire from '../Icon/IconFire';

import { GAMES_TYPES } from './constants';

export default function getGameTypeIcon(type, size, style) {
  switch (type) {
    case GAMES_TYPES.BULLET:
      return <IconBullet size={size} style={style} />;
    case GAMES_TYPES.BLITZ:
      return <IconLightning size={size} style={style} />;
    case GAMES_TYPES.RAPID:
      return <IconRabbit size={size} style={style} />;
    case GAMES_TYPES.OFFLINE:
      return <IconCalendar size={size} style={style} />;
    case GAMES_TYPES.CLASSIC:
      return <IconChessClock size={size} style={style} />;
    case GAMES_TYPES.PUZZLE_RUSH:
      return <IconFire size={size} style={style} />;
    default:
      return null;
  }
}
