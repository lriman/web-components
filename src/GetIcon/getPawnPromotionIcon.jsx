import React from 'react';

import IconRookWhiteSet1 from '../IconChess/Set1/IconRookWhiteSet1';
import IconBishopWhiteSet1 from '../IconChess/Set1/IconBishopWhiteSet1';
import IconHorseWhiteSet1 from '../IconChess/Set1/IconHorseWhiteSet1';
import IconQeenWhiteSet1 from '../IconChess/Set1/IconQeenWhiteSet1';
import IconRookBlackSet1 from '../IconChess/Set1/IconRookBlackSet1';
import IconBishopBlackSet1 from '../IconChess/Set1/IconBishopBlackSet1';
import IconHorseBlackSet1 from '../IconChess/Set1/IconHorseBlackSet1';
import IconQeenBlackSet1 from '../IconChess/Set1/IconQeenBlackSet1';

export default function getPawnPromotionIcon(color, type, size) {
  switch (color) {
    case 'w':
      switch (type) {
        case 'r':
          return <IconRookWhiteSet1 size={size} />;
        case 'b':
          return <IconBishopWhiteSet1 size={size} />;
        case 'n':
          return <IconHorseWhiteSet1 size={size} />;
        case 'q':
          return <IconQeenWhiteSet1 size={size} />;
        default:
          return null;
      }
    case 'b':
      switch (type) {
        case 'r':
          return <IconRookBlackSet1 size={size} />;
        case 'b':
          return <IconBishopBlackSet1 size={size} />;
        case 'n':
          return <IconHorseBlackSet1 size={size} />;
        case 'q':
          return <IconQeenBlackSet1 size={size} />;
        default:
          return null;
      }
    default:
      return null;
  }
}
