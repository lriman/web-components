import { PLACE_COLORS } from './_constants';

export const getPlaceColor = place => {
  switch (place) {
    case 0:
      return PLACE_COLORS.FIRST;
    case 1:
      return PLACE_COLORS.SECOND;
    case 2:
      return PLACE_COLORS.THIRD;
    default:
      return null;
  }
};

export const getPlayerOrder = idx => {
  switch (idx) {
    case 0:
      return 1;
    case 1:
      return 0;
    case 2:
      return 2;
    default:
      return null;
  }
};
