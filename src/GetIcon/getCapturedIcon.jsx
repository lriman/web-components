import React from 'react';

import IconRookWhiteBase from '../IconChess/Base/IconRookWhiteBase';
import IconBishopWhiteBase from '../IconChess/Base/IconBishopWhiteBase';
import IconHorseWhiteBase from '../IconChess/Base/IconHorseWhiteBase';
import IconPawnWhiteBase from '../IconChess/Base/IconPawnWhiteBase';
import IconQeenWhiteBase from '../IconChess/Base/IconQeenWhiteBase';
import IconPawnBlackBase from '../IconChess/Base/IconPawnBlackBase';
import IconQeenBlackBase from '../IconChess/Base/IconQeenBlackBase';
import IconRookBlackBase from '../IconChess/Base/IconRookBlackBase';
import IconBishopBlackBase from '../IconChess/Base/IconBishopBlackBase';
import IconHorseBlackBase from '../IconChess/Base/IconHorseBlackBase';
import IconKingWhiteBase from '../IconChess/Base/IconKingWhiteBase';
import IconKingBlackBase from '../IconChess/Base/IconKingBlackBase';

export default function getCapturedIcon(color, type, size, style) {
  switch (color) {
    case 'w':
      switch (type) {
        case 'k':
          return <IconKingWhiteBase size={size} style={style} />;
        case 'p':
          return <IconPawnWhiteBase size={size} style={style} />;
        case 'q':
          return <IconQeenWhiteBase size={size} style={style} />;
        case 'r':
          return <IconRookWhiteBase size={size} style={style} />;
        case 'b':
          return <IconBishopWhiteBase size={size} style={style} />;
        case 'n':
          return <IconHorseWhiteBase size={size} style={style} />;
        default:
          return null;
      }
    case 'b':
      switch (type) {
        case 'k':
          return <IconKingBlackBase size={size} style={style} />;
        case 'p':
          return <IconPawnBlackBase size={size} style={style} />;
        case 'q':
          return <IconQeenBlackBase size={size} style={style} />;
        case 'r':
          return <IconRookBlackBase size={size} style={style} />;
        case 'b':
          return <IconBishopBlackBase size={size} style={style} />;
        case 'n':
          return <IconHorseBlackBase size={size} style={style} />;
        default:
          return null;
      }
    default:
      return null;
  }
}
